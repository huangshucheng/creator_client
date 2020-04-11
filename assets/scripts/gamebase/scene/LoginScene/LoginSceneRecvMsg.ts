import UIController from '../../../framework/uibase/UIController';
import EventManager from '../../../framework/manager/EventManager';
import EventDefine from '../../../framework/config/EventDefine';
import Log from '../../../framework/utils/Log';
import { Cmd, CmdName } from "./../../../framework/protocol/AuthProto";
import Response from '../../../framework/config/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import LobbyScene from '../lobbyScene/LobbyScene';
import Storage from '../../../framework/utils/Storage';
import LSDefine from '../../../framework/config/LSDefine';
import DialogManager from '../../../framework/manager/DialogManager';
import LobbySendGameHoodleMsg from '../lobbyScene/sendMsg/LobbySendGameHoodle';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginSceneRecvMsg extends UIController {

    onLoad() {
        super.onLoad()
    }

    start () {
        this.add_event_dispatcher()
    }

    add_event_dispatcher(){
        EventManager.on(EventDefine.EVENT_NET_CONNECTED, this, this.on_net_connected);
        EventManager.on(EventDefine.EVENT_NET_CLOSED, this, this.on_net_closed);
        EventManager.on(EventDefine.EVENT_NET_ERROR, this, this.on_net_error);
        EventManager.on(CmdName[Cmd.eUnameLoginRes], this, this.on_event_uname_login)
        EventManager.on(CmdName[Cmd.eGuestLoginRes], this, this.on_event_guest_login)
        EventManager.on(CmdName[Cmd.eUnameRegistRes], this, this.on_event_uname_regist)
        EventManager.on("LoginLogicRes", this, this.on_event_login_logic)//这里要检测玩家游戏服务的信息是否存在，不存在要先创建数据库数据
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

    on_event_guest_login(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        cc.log("guestlogin udata: " , udata)
        if(udata.status == Response.OK){
            SceneManager.getInstance().enter_scene_asyc(new LobbyScene())
            try {
                let resbody = JSON.parse(udata.userlogininfo)
                Storage.set(LSDefine.USER_LOGIN_TYPE,LSDefine.LOGIN_TYPE_GUEST)
                Storage.set(LSDefine.USER_LOGIN_GUEST_KEY,resbody.guest_key)
            } catch (error) {
                cc.error(error)
            }
            cc.log("on_event_guest_login: key: " , Storage.get(LSDefine.USER_LOGIN_GUEST_KEY))
            LobbySendGameHoodleMsg.send_login_logic()
            DialogManager.getInstance().show_weak_hint("游客登录成功!")
        }else{
            DialogManager.getInstance().show_weak_hint("登录失败! " + udata.status)
        }
    }

    on_event_uname_login(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        cc.log("unamelogin udata: " , udata)
        if(udata.status == Response.OK){
            SceneManager.getInstance().enter_scene_asyc(new LobbyScene())
            try {
                let resbody = JSON.parse(udata.userlogininfo)
                Storage.set(LSDefine.USER_LOGIN_TYPE, LSDefine.LOGIN_TYPE_UNAME)
                Storage.set(LSDefine.USER_LOGIN_MSG,{uname: resbody.uname, upwd: resbody.upwd})
            } catch (error) {
                cc.error(error)
            }
            cc.log("on_event_uname_login: " , Storage.get(LSDefine.USER_LOGIN_MSG) )
            LobbySendGameHoodleMsg.send_login_logic()
            DialogManager.getInstance().show_weak_hint("登录成功!")
        }else{
            DialogManager.getInstance().show_weak_hint("登录失败! " + udata.status)
        }
    }

    on_event_uname_regist(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        if(udata.status == Response.OK){
            DialogManager.getInstance().show_weak_hint("注册成功!")
        }else{
            DialogManager.getInstance().show_weak_hint("注册失败! " + udata.status)
        }
    }

    //这里要检测玩家游戏服务的信息是否存在，不存在要先创建数据库数据
    on_event_login_logic(event:cc.Event.EventCustom){
        let udata = event.getUserData()
        if (udata.status == Response.OK) {
            LobbySendGameHoodleMsg.send_get_ugame_info();
        } 
    }
}
