import UIController from '../../../framework/uibase/UIController';
import EventManager from '../../../framework/manager/EventManager';
import Response from '../../../framework/protocol/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import LoginScene from '../loginScene/LoginScene';
import Storage from '../../../framework/utils/Storage';
import LSDefine from '../../../framework/config/LSDefine';
import UserInfo from '../../../framework/common/UserInfo';
import DialogManager from '../../../framework/manager/DialogManager';
import EventDefine from '../../../framework/config/EventDefine';
import SendAuthMsg from '../../sendMsg/SendAuthMsg';
import Stype from '../../../framework/protocol/Stype';
import AuthProto from '../../../framework/protocol/protofile/AuthProto';
import SendLobbyMsg from '../../sendMsg/SendLobbyMsg';

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
            [AuthProto.XY_ID.RES_UNAMELOGIN]: this.on_event_uname_login.bind(this),
            [AuthProto.XY_ID.RES_GUESTLOGIN]: this.on_event_guest_login.bind(this),
            [AuthProto.XY_ID.RES_WECHATLOGIN]: this.on_event_wechat_login.bind(this),
            [AuthProto.XY_ID.RES_WECHATSESSIONLOGIN]: this.on_event_wechat_session_login.bind(this),
            [AuthProto.XY_ID.RES_USERCENTERINFO]: this.on_event_center_info.bind(this),
            [AuthProto.XY_ID.RES_LOGINOUT]: this.on_event_login_out.bind(this),
            [AuthProto.XY_ID.PUSH_RELOGIN]: this.on_event_relogin.bind(this),
        }
    }
    
    on_recv_server_message(stype: number, ctype: number, body: any) {
        if (stype !== Stype.S_TYPE.Auth) {
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
                SendAuthMsg.send_uname_login(loginObj.uname, loginObj.upwd);
            }
        }else if(loginType == LSDefine.LOGIN_TYPE_GUEST){
           let guestkey = Storage.get(LSDefine.USER_LOGIN_GUEST_KEY)
           if(guestkey){
               SendAuthMsg.send_guest_login(guestkey);
           }
        }else if(loginType == LSDefine.LOGIN_TYPE_WECHAT){
            let wechatsessionkey = Storage.get(LSDefine.USER_LOGIN_WECHAT_SESSION);
            if(wechatsessionkey){
                //重新用微信session登录
                SendAuthMsg.send_wechat_session_login(wechatsessionkey);
            }
        }
    }

    on_event_guest_login(body:any){
        if (body.status == Response.SUCCESS){
            SendLobbyMsg.send_login_lobby();
            SendAuthMsg.send_get_center_info();
            DialogManager.getInstance().show_weak_hint("游客重新登录成功!")
        }
    }

    on_event_uname_login(body:any){
        if (body.status == Response.SUCCESS){
            SendLobbyMsg.send_login_lobby();
            SendAuthMsg.send_get_center_info();
            DialogManager.getInstance().show_weak_hint("玩家重新登录成功!")
        }
    }

    on_event_wechat_login(body: any) {
        if (body.status == Response.SUCCESS) {
            SendLobbyMsg.send_login_lobby();
        }
    }

    on_event_wechat_session_login(body: any) {
        if (body.status == Response.SUCCESS) {
            SendLobbyMsg.send_login_lobby();
        }
    }

    on_event_center_info(body:any){
        if (body){
            let udataStr = body.usercenterinfo
            if(udataStr){
                UserInfo.set_uinfo(udataStr)
            }
        }
    }

    on_event_login_out(body:any){
        if (body){
            if (body.status == Response.SUCCESS){
                SceneManager.getInstance().enter_scene_asyc(new LoginScene())
            }
        }
    }

    on_event_relogin(body:any){
        SceneManager.getInstance().enter_scene_asyc(new LoginScene())
        DialogManager.getInstance().show_weak_hint("您已经被挤号,自动退出!")
    }

}
