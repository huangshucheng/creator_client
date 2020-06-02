import UIController from '../../../framework/uibase/UIController';
import EventManager from '../../../framework/manager/EventManager';
import { Cmd, CmdName } from "../../../framework/protocol/AuthProto";
import Response from '../../../framework/protocol/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import LoginScene from '../LoginScene/LoginScene';
import Storage from '../../../framework/utils/Storage';
import LSDefine from '../../../framework/config/LSDefine';
import DialogManager from '../../../framework/manager/DialogManager';
import EventDefine from '../../../framework/config/EventDefine';
import LobbySendGameHoodleMsg from '../lobbyScene/sendMsg/LobbySendGameHoodle';
import { Stype } from '../../../framework/protocol/Stype';
import CellManager from '../../../framework/manager/CellManager';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSceneRecvAuthMsg extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        super.start();
        this.add_protocol_delegate();
    }

    add_event_dispatcher(){
        EventManager.on(EventDefine.EVENT_NET_CONNECTED, this, this.on_net_connected);
    }

    add_cmd_handler_map(){
        this._cmd_handler_map = {
            [Cmd.eUnameLoginRes]: this.on_event_uname_login,
            [Cmd.eGuestLoginRes]: this.on_event_guest_login,
            [Cmd.eWeChatSessionLoginRes]: this.on_event_wechat_session_login,
            [Cmd.eReloginRes]: this.on_event_relogin,
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

    //重连成功-》登录游戏-》登录逻辑服务-》获取玩家信息
    on_net_connected(event: cc.Event.EventCustom){
        let loginType = Storage.get(LSDefine.USER_LOGIN_TYPE)
        if(loginType == LSDefine.LOGIN_TYPE_UNAME){
            let loginObj = Storage.get(LSDefine.USER_LOGIN_MSG)
            if (loginObj){
                let body = {
                    uname: String(loginObj.uname),
                    upwd: String(loginObj.upwd),
                }
                CellManager.getInstance().start("CellUNameLogin", body, 5)
            }
        }else if(loginType == LSDefine.LOGIN_TYPE_GUEST){
           let guestkey = Storage.get(LSDefine.USER_LOGIN_GUEST_KEY)
           if(guestkey){
               let body = {
                   guestkey: String(guestkey),
               }
               CellManager.getInstance().start("CellGuestLogin", body, 5);
           }
        } else if (loginType == LSDefine.LOGIN_TYPE_WECHAT) {
            let wechatsessionkey = Storage.get(LSDefine.USER_LOGIN_WECHAT_SESSION);
            //重新用微信session登录
            let body = {
                wechatsessionkey: wechatsessionkey,
            }
            CellManager.getInstance().start("CellWeChatSessionLogin", body, 10);
        }
    }

    on_event_guest_login(body:any){
        let udata =  body;
        console.log("guestlogin udata: " , udata)
        if(udata.status == Response.OK){
            try {
                let resbody = JSON.parse(udata.userlogininfo)
                Storage.set(LSDefine.USER_LOGIN_TYPE,LSDefine.LOGIN_TYPE_GUEST)
                Storage.set(LSDefine.USER_LOGIN_GUEST_KEY,resbody.guest_key)
            } catch (error) {
                console.error(error)
            }
            console.log("on_event_guest_login: key: " , Storage.get(LSDefine.USER_LOGIN_GUEST_KEY))
            LobbySendGameHoodleMsg.send_login_logic()
            DialogManager.getInstance().show_weak_hint("游客重新登录成功!")
        }else{
            DialogManager.getInstance().show_weak_hint("登录失败! " + udata.status)
        }
    }

    on_event_uname_login(body:any){
        let udata =  body;
        console.log("unamelogin udata: " , udata)
        if(udata.status == Response.OK){
            try {
                let resbody = JSON.parse(udata.userlogininfo)
                Storage.set(LSDefine.USER_LOGIN_TYPE, LSDefine.LOGIN_TYPE_UNAME)
                Storage.set(LSDefine.USER_LOGIN_MSG,{uname: resbody.uname, upwd: resbody.upwd})
            } catch (error) {
                console.error(error)
            }
            console.log("on_event_uname_login: " , Storage.get(LSDefine.USER_LOGIN_MSG))
            LobbySendGameHoodleMsg.send_login_logic()
            DialogManager.getInstance().show_weak_hint("玩家重新登录成功!")
        }else{
            DialogManager.getInstance().show_weak_hint("登录失败! " + udata.status)
        }
    }

    on_event_wechat_session_login(body:any) {
        let udata = body;
        console.log("hcc>>gamescene>>on_event_wechat_session_login", udata);
        if (udata.status == Response.OK) {
            try {
                let resbody = JSON.parse(udata.userlogininfo)
                Storage.set(LSDefine.USER_LOGIN_WECHAT_SESSION, resbody.unionid);
                Storage.set(LSDefine.USER_LOGIN_TYPE, LSDefine.LOGIN_TYPE_WECHAT);
            } catch (error) {
                console.log(error);
            }
            LobbySendGameHoodleMsg.send_login_logic()
        } else {
            DialogManager.getInstance().show_weak_hint("微信重新登录失败! " + udata.status)
        }
    }

    on_event_relogin(body:any){
        console.log("on_event_relogin...")
        SceneManager.getInstance().enter_scene_asyc(new LoginScene())
        DialogManager.getInstance().show_weak_hint("您已经被挤号,自动退出!")
    }

}
