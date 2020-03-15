import UIController from '../../../framework/uibase/UIController';
import EventManager from '../../../framework/manager/EventManager';
import { Cmd, CmdName } from "../../../framework/protocol/AuthProto";
import Response from '../../../framework/config/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import LoginScene from '../LoginScene/LoginScene';
import Storage from '../../../framework/utils/Storage';
import LSDefine from '../../../framework/config/LSDefine';
import DialogManager from '../../../framework/manager/DialogManager';
import EventDefine from '../../../framework/config/EventDefine';
import LoginSendAuthMsg from '../LoginScene/sendMsg/LoginSendAuthMsg';
import LobbySendGameHoodleMsg from '../lobbyScene/sendMsg/LobbySendGameHoodle';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSceneRecvAuthMsg extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        this.add_event_dispatcher()
    }

    add_event_dispatcher(){
        EventManager.on(EventDefine.EVENT_NET_CONNECTED, this, this.on_net_connected);
        EventManager.on(CmdName[Cmd.eUnameLoginRes], this, this.on_event_uname_login)
        EventManager.on(CmdName[Cmd.eGuestLoginRes], this, this.on_event_guest_login)
        EventManager.on(CmdName[Cmd.eReloginRes], this, this.on_event_relogin)
    }
    
    //重连成功-》登录游戏-》登录逻辑服务-》获取玩家信息
    on_net_connected(event:cc.Event.EventCustom){
        let loginType = Storage.get(LSDefine.USER_LOGIN_TYPE)
        if(loginType == LSDefine.LOGIN_TYPE_UNAME){
            let loginObj = Storage.get(LSDefine.USER_LOGIN_MSG)
            if (loginObj){
                    LoginSendAuthMsg.send_uname_login(loginObj.uname, loginObj.upwd)
            }
        }else if(loginType == LSDefine.LOGIN_TYPE_GUEST){
           let guestkey = Storage.get(LSDefine.USER_LOGIN_GUEST_KEY)
           if(guestkey){
               LoginSendAuthMsg.send_guest_login(guestkey)
           }
        }
    }

    on_event_guest_login(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        cc.log("guestlogin udata: " , udata)
        if(udata.status == Response.OK){
            try {
                let resbody = JSON.parse(udata.userLoginInfo)
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
            try {
                let resbody = JSON.parse(udata.userLoginInfo)
                Storage.set(LSDefine.USER_LOGIN_TYPE, LSDefine.LOGIN_TYPE_UNAME)
                Storage.set(LSDefine.USER_LOGIN_MSG,{uname: resbody.uname, upwd: resbody.upwd})
            } catch (error) {
                cc.error(error)
            }
            cc.log("on_event_uname_login: " , Storage.get(LSDefine.USER_LOGIN_MSG))
            LobbySendGameHoodleMsg.send_login_logic()
            DialogManager.getInstance().show_weak_hint("登录成功!")
        }else{
            DialogManager.getInstance().show_weak_hint("登录失败! " + udata.status)
        }
    }

    on_event_relogin(event:cc.Event.EventCustom){
        cc.log("on_event_relogin...")
        SceneManager.getInstance().enter_scene_asyc(new LoginScene())
        DialogManager.getInstance().show_weak_hint("您已经被挤号,自动退出!")
    }

}
