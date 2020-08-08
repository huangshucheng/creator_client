import UIController from '../../../framework/uibase/UIController';
import EventManager from '../../../framework/manager/EventManager';
import { Cmd, CmdName } from "../../../framework/protocol/protofile/AuthProto";
import Response from '../../../framework/protocol/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import LoginScene from '../LoginScene/LoginScene';
import Storage from '../../../framework/utils/Storage';
import LSDefine from '../../../framework/config/LSDefine';
import UserInfo from '../../../framework/common/UserInfo';
import DialogManager from '../../../framework/manager/DialogManager';
import EventDefine from '../../../framework/config/EventDefine';
import LobbySendAuthMsg from './sendMsg/LobbySendAuthMsg';
import LobbySendGameHoodleMsg from './sendMsg/LobbySendGameHoodle';
import { Stype } from '../../../framework/protocol/Stype';
import LoginSendAuthMsg from '../LoginScene/sendMsg/LoginSendAuthMsg';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneRecvAuthMsg extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        super.start();
        this.add_protocol_delegate();
    }

    add_event_dispatcher(){
        EventManager.on(EventDefine.EVENT_NET_CONNECTED, this, this.on_net_connected.bind(this));
    }
    
    add_cmd_handler_map() {
        this._cmd_handler_map = {
            [Cmd.eUnameLoginRes]: this.on_event_uname_login.bind(this),
            [Cmd.eGuestLoginRes]: this.on_event_guest_login.bind(this),
            [Cmd.eWeChatLoginRes]: this.on_event_wechat_login.bind(this),
            [Cmd.eWeChatSessionLoginRes]: this.on_event_wechat_session_login.bind(this),
            [Cmd.eGetUserCenterInfoRes]: this.on_event_center_info.bind(this),
            [Cmd.eLoginOutRes]: this.on_event_login_out.bind(this),
            [Cmd.eReloginRes]: this.on_event_relogin.bind(this),
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
    on_net_connected(event:cc.Event.EventCustom){
        let loginType = Storage.get(LSDefine.USER_LOGIN_TYPE)
        if(loginType == LSDefine.LOGIN_TYPE_UNAME){
            let loginObj = Storage.get(LSDefine.USER_LOGIN_MSG)
            if (loginObj){
                LoginSendAuthMsg.send_uname_login(loginObj.uname, loginObj.upwd);
            }
        }else if(loginType == LSDefine.LOGIN_TYPE_GUEST){
           let guestkey = Storage.get(LSDefine.USER_LOGIN_GUEST_KEY)
           if(guestkey){
               LoginSendAuthMsg.send_guest_login(guestkey);
           }
        }else if(loginType == LSDefine.LOGIN_TYPE_WECHAT){
            let wechatsessionkey = Storage.get(LSDefine.USER_LOGIN_WECHAT_SESSION);
            if(wechatsessionkey){
                //重新用微信session登录
                LoginSendAuthMsg.send_wechat_session_login(wechatsessionkey);
            }
        }
    }

    on_event_guest_login(body:any){
        if (body.status == Response.OK){
            try {
                let resbody = JSON.parse(body.userlogininfo)
                Storage.set(LSDefine.USER_LOGIN_TYPE,LSDefine.LOGIN_TYPE_GUEST)
                Storage.set(LSDefine.USER_LOGIN_GUEST_KEY,resbody.guest_key)
            } catch (error) {
                console.error(error)
            }
            console.log("on_event_guest_login: key: " , Storage.get(LSDefine.USER_LOGIN_GUEST_KEY))
            LobbySendGameHoodleMsg.send_login_logic()
            LobbySendAuthMsg.send_get_center_info();
            DialogManager.getInstance().show_weak_hint("游客重新登录成功!")
        }else{
            DialogManager.getInstance().show_weak_hint("登录失败! " + body.status)
        }
    }

    on_event_uname_login(body:any){
        if (body.status == Response.OK){
            try {
                let resbody = JSON.parse(body.userlogininfo)
                Storage.set(LSDefine.USER_LOGIN_TYPE, LSDefine.LOGIN_TYPE_UNAME)
                Storage.set(LSDefine.USER_LOGIN_MSG,{uname: resbody.uname, upwd: resbody.upwd})
            } catch (error) {
                console.error(error)
            }
            console.log("on_event_uname_login: " , Storage.get(LSDefine.USER_LOGIN_MSG))
            LobbySendGameHoodleMsg.send_login_logic()
            LobbySendAuthMsg.send_get_center_info();
            DialogManager.getInstance().show_weak_hint("玩家重新登录成功!")
        }else{
            DialogManager.getInstance().show_weak_hint("登录失败! " + body.status)
        }
    }

    on_event_wechat_login(body: any) {
        if (body.status == Response.OK) {
            LobbySendGameHoodleMsg.send_login_logic();
            try {
                let resbody = JSON.parse(body.userlogininfo)
                Storage.set(LSDefine.USER_LOGIN_WECHAT_SESSION, resbody.unionid);
                Storage.set(LSDefine.USER_LOGIN_TYPE, LSDefine.LOGIN_TYPE_WECHAT);
            } catch (error) {
                console.log(error);
            }
        } else {
            DialogManager.getInstance().show_weak_hint("登录失败! " + body.status);
        }
    }

    on_event_wechat_session_login(body: any) {
        console.log("hcc>>lobbyscene>>on_event_wechat_session_login", body);
        if (body.status == Response.OK) {
            try {
                let resbody = JSON.parse(body.userlogininfo)
                Storage.set(LSDefine.USER_LOGIN_WECHAT_SESSION, resbody.unionid);
                Storage.set(LSDefine.USER_LOGIN_TYPE, LSDefine.LOGIN_TYPE_WECHAT);
            } catch (error) {
                console.log(error);
            }
            LobbySendGameHoodleMsg.send_login_logic()
        } else {
            DialogManager.getInstance().show_weak_hint("微信重新登录失败! " + body.status)
        }
    }

    on_event_center_info(body:any){
        if (body){
            let udataStr = body.usercenterinfostring
            if(udataStr){
                UserInfo.set_uinfo(udataStr)
                this.do_on_view("LobbySceneShowUI","show_user_info");
            }
        }
    }

    on_event_login_out(body:any){
        if (body){
            if (body.status == Response.OK){
                SceneManager.getInstance().enter_scene_asyc(new LoginScene())
            }
        }
    }

    on_event_relogin(body:any){
        SceneManager.getInstance().enter_scene_asyc(new LoginScene())
        DialogManager.getInstance().show_weak_hint("您已经被挤号,自动退出!")
    }

}
