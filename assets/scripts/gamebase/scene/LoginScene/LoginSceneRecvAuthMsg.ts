import UIController from '../../../framework/uibase/UIController';
import Response from '../../../framework/protocol/Response';
import Storage from '../../../framework/utils/Storage';
import LSDefine from '../../../framework/config/LSDefine';
import DialogManager from '../../../framework/manager/DialogManager';
import LobbySendGameHoodleMsg from '../lobbyScene/sendMsg/LobbySendGameHoodle';
import WeChatLogin from '../../../framework/utils/WeChatLogin';
import Stype from '../../../framework/protocol/Stype';
import AuthProto from '../../../framework/protocol/protofile/AuthProto';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginSceneRecvAuthMsg extends UIController {

    onLoad() {
        super.onLoad()
    }

    start () {
        super.start();
        this.add_protocol_delegate();
    }

    add_event_dispatcher(){
    }

    add_cmd_handler_map(){
        this._cmd_handler_map = {
            [AuthProto.XY_ID.RES_UNAMELOGIN]: this.on_event_uname_login.bind(this),
            [AuthProto.XY_ID.RES_GUESTLOGIN]: this.on_event_guest_login.bind(this),
            [AuthProto.XY_ID.RES_WECHATLOGIN]: this.on_event_wechat_login.bind(this),
            [AuthProto.XY_ID.RES_UNAMEREGIST]: this.on_event_uname_regist.bind(this),
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

    on_event_guest_login(body:any){
        console.log("guestlogin udata: ", body)
        if (body.status == Response.OK){
            try {
                let resbody = JSON.parse(body.logininfo)
                Storage.set(LSDefine.USER_LOGIN_TYPE,LSDefine.LOGIN_TYPE_GUEST)
                Storage.set(LSDefine.USER_LOGIN_GUEST_KEY,resbody.guest_key)
            } catch (error) {
                console.error(error)
            }
            console.log("on_event_guest_login: key: " , Storage.get(LSDefine.USER_LOGIN_GUEST_KEY))
            LobbySendGameHoodleMsg.send_login_logic();
        }else{
            DialogManager.getInstance().show_weak_hint("登录失败! " + body.status)
        }
    }

    on_event_uname_login(body:any){
        console.log("unamelogin udata: ", body)
        if (body.status == Response.OK){
            try {
                let resbody = JSON.parse(body.logininfo)
                Storage.set(LSDefine.USER_LOGIN_TYPE, LSDefine.LOGIN_TYPE_UNAME)
                Storage.set(LSDefine.USER_LOGIN_MSG,{uname: resbody.uname, upwd: resbody.upwd})
            } catch (error) {
                console.error(error)
            }
            console.log("on_event_uname_login: " , Storage.get(LSDefine.USER_LOGIN_MSG) )
            LobbySendGameHoodleMsg.send_login_logic();
        }else{
            DialogManager.getInstance().show_weak_hint("登录失败! " + body.status)
        }
    }

    on_event_uname_regist(body:any){
        if (body.status == Response.OK){
            DialogManager.getInstance().show_weak_hint("注册成功!")
        }else{
            DialogManager.getInstance().show_weak_hint("注册失败! " + body.status)
        }
    }
    on_event_wechat_login(body:any){
        if (body.status == Response.OK) {
            WeChatLogin.hide_auth_btn();
            LobbySendGameHoodleMsg.send_login_logic();
            try {
                let resbody = JSON.parse(body.userlogininfo)
                Storage.set(LSDefine.USER_LOGIN_WECHAT_SESSION, resbody.unionid);
                Storage.set(LSDefine.USER_LOGIN_TYPE, LSDefine.LOGIN_TYPE_WECHAT);
            } catch (error) {
                console.log(error);
            }
        }else{
            DialogManager.getInstance().show_weak_hint("登录失败! " + body.status)
        }
    }
}
