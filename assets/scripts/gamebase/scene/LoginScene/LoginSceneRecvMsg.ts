import UIController from '../../../framework/uibase/UIController';
import EventManager from '../../../framework/manager/EventManager';
import EventDefine from '../../../framework/config/EventDefine';
import Log from '../../../framework/utils/Log';
import { Cmd, CmdName } from "./../../../framework/protocol/AuthProto";
import Response from '../../../framework/protocol/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import LobbyScene from '../lobbyScene/LobbyScene';
import Storage from '../../../framework/utils/Storage';
import LSDefine from '../../../framework/config/LSDefine';
import DialogManager from '../../../framework/manager/DialogManager';
import LobbySendGameHoodleMsg from '../lobbyScene/sendMsg/LobbySendGameHoodle';
import WeChatLogin from '../../../framework/utils/WeChatLogin';
import { Stype } from '../../../framework/protocol/Stype';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginSceneRecvMsg extends UIController {

    onLoad() {
        super.onLoad()
    }

    start () {
        super.start();
        this.add_protocol_delegate();
    }

    add_event_dispatcher(){
        EventManager.on(EventDefine.EVENT_NET_CONNECTED, this, this.on_net_connected);
        EventManager.on(EventDefine.EVENT_NET_CLOSED, this, this.on_net_closed);
        EventManager.on(EventDefine.EVENT_NET_ERROR, this, this.on_net_error);
    }

    add_cmd_handler_map(){
        this._cmd_handler_map = {
            [Cmd.eUnameLoginRes]: this.on_event_uname_login,
            [Cmd.eGuestLoginRes]: this.on_event_guest_login,
            [Cmd.eWeChatLoginRes]: this.on_event_wechat_login,
            [Cmd.eUnameRegistRes]: this.on_event_uname_regist,
        }
    }

    on_recv_server_message(stype: number, ctype: number, body: any) {
        if (stype !== Stype.Auth) {
            return;
        }

        if (this._cmd_handler_map[ctype]) {
            this._cmd_handler_map[ctype].call(this, body);
        }
    }

    on_net_connected(event:cc.Event.EventCustom){
        Log.info("LoginSceneRecvMsg hcc>>>on_net_connected")
    }

    on_net_closed(event:cc.Event.EventCustom){
        Log.info("LoginSceneRecvMsg hcc>>>on_net_closed")
    }

    on_net_error(event:cc.Event.EventCustom){
        Log.info("LoginSceneRecvMsg hcc>>>on_net_error")

    }

    on_event_guest_login(body:any){
        let udata =  body;
        console.log("guestlogin udata: " , udata)
        if(udata.status == Response.OK){
            SceneManager.getInstance().enter_scene_asyc(new LobbyScene())
            try {
                let resbody = JSON.parse(udata.userlogininfo)
                Storage.set(LSDefine.USER_LOGIN_TYPE,LSDefine.LOGIN_TYPE_GUEST)
                Storage.set(LSDefine.USER_LOGIN_GUEST_KEY,resbody.guest_key)
            } catch (error) {
                console.error(error)
            }
            console.log("on_event_guest_login: key: " , Storage.get(LSDefine.USER_LOGIN_GUEST_KEY))
            LobbySendGameHoodleMsg.send_login_logic()
        }else{
            DialogManager.getInstance().show_weak_hint("登录失败! " + udata.status)
        }
    }

    on_event_uname_login(body:any){
        let udata =  body;
        console.log("unamelogin udata: " , udata)
        if(udata.status == Response.OK){
            SceneManager.getInstance().enter_scene_asyc(new LobbyScene())
            try {
                let resbody = JSON.parse(udata.userlogininfo)
                Storage.set(LSDefine.USER_LOGIN_TYPE, LSDefine.LOGIN_TYPE_UNAME)
                Storage.set(LSDefine.USER_LOGIN_MSG,{uname: resbody.uname, upwd: resbody.upwd})
            } catch (error) {
                console.error(error)
            }
            console.log("on_event_uname_login: " , Storage.get(LSDefine.USER_LOGIN_MSG) )
            LobbySendGameHoodleMsg.send_login_logic()
        }else{
            DialogManager.getInstance().show_weak_hint("登录失败! " + udata.status)
        }
    }

    on_event_uname_regist(body:any){
        let udata =  body;
        if(udata.status == Response.OK){
            DialogManager.getInstance().show_weak_hint("注册成功!")
        }else{
            DialogManager.getInstance().show_weak_hint("注册失败! " + udata.status)
        }
    }
    on_event_wechat_login(body:any){
        let udata = body;
        if (udata.status == Response.OK) {
            WeChatLogin.hide_auth_btn();
            SceneManager.getInstance().enter_scene_asyc(new LobbyScene())
            LobbySendGameHoodleMsg.send_login_logic()
            try {
                let resbody = JSON.parse(udata.userlogininfo)
                Storage.set(LSDefine.USER_LOGIN_WECHAT_SESSION, resbody.unionid);
                Storage.set(LSDefine.USER_LOGIN_TYPE, LSDefine.LOGIN_TYPE_WECHAT);
            } catch (error) {
                console.log(error);
            }
        }else{
            DialogManager.getInstance().show_weak_hint("登录失败! " + udata.status)
        }
    }
}
