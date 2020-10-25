import EventManager from '../framework/manager/EventManager';
import EventDefine from '../framework/config/EventDefine';
import NetWork from '../framework/network/NetWork';
import DialogManager from '../framework/manager/DialogManager';
import UIController from '../framework/uibase/UIController';
import AuthProto from '../framework/protocol/protofile/AuthProto';
import Stype from '../framework/protocol/Stype';
import Response from '../framework/protocol/Response';
import LSDefine from '../framework/config/LSDefine';
import Storage from '../framework/utils/Storage';
import WeChatLogin from '../framework/utils/WeChatLogin';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameAppEvent extends UIController {

    onLoad() {
        super.onLoad()
    }

    start() {
        super.start();
        this.add_protocol_delegate();
    }

    add_event_dispatcher() {
        EventManager.on(EventDefine.EVENT_NET_CONNECTED, this, this.on_net_connected.bind(this));
        EventManager.on(EventDefine.EVENT_NET_CLOSED, this, this.on_net_closed.bind(this));
        EventManager.on(EventDefine.EVENT_NET_ERROR, this, this.on_net_error.bind(this));
    }

    add_cmd_handler_map() {
        this._cmd_handler_map = {
            [AuthProto.XY_ID.RES_UNAMELOGIN]: this.on_event_uname_login.bind(this),
            [AuthProto.XY_ID.RES_GUESTLOGIN]: this.on_event_guest_login.bind(this),
            [AuthProto.XY_ID.RES_WECHATLOGIN]: this.on_event_wechat_login.bind(this),
            [AuthProto.XY_ID.RES_WECHATSESSIONLOGIN]: this.on_event_wechat_session_login.bind(this),
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

    on_net_connected(event: cc.Event.EventCustom) {
        DialogManager.getInstance().show_weak_hint("网络连接成功!");
    }

    async on_net_closed(event: cc.Event.EventCustom) {
        this.show_net_close_tip();
    }

    on_net_error(event: cc.Event.EventCustom) {
        this.show_net_close_tip();
    }

    show_net_close_tip() {
        let commondialog = DialogManager.getInstance().get_layer("CommonDialog");
        if (commondialog && cc.isValid(commondialog)) {
            DialogManager.getInstance().close_layer("CommonDialog");
        }
        let resNode: cc.Node = DialogManager.getInstance().show_common_layer();
        if (resNode) {
            let script = resNode.getComponent("CommonDialog");
            if (script) {
                script.set_content_text("网络已断开，请重连!");
                script.set_btn_callback(
                    function () { NetWork.getInstance().reconnect(); },
                    function () { },
                    function () { NetWork.getInstance().reconnect(); },
                )
            }
        }
    }

    on_event_guest_login(body: any) {
        console.log("guestlogin udata: ", body)
        if (body.status == Response.SUCCESS) {
            try {
                let resbody = JSON.parse(body.logininfo)
                Storage.set(LSDefine.USER_LOGIN_TYPE, LSDefine.LOGIN_TYPE_GUEST)
                Storage.set(LSDefine.USER_LOGIN_GUEST_KEY, resbody.guest_key)
            } catch (error) {
                console.error(error)
            }
            console.log("on_event_guest_login: key: ", Storage.get(LSDefine.USER_LOGIN_GUEST_KEY))
        }else{
            DialogManager.getInstance().show_weak_hint("登录失败! " + body.status)
        }
    }

    on_event_uname_login(body: any) {
        console.log("unamelogin udata: ", body)
        if (body.status == Response.SUCCESS) {
            try {
                let resbody = JSON.parse(body.logininfo)
                Storage.set(LSDefine.USER_LOGIN_TYPE, LSDefine.LOGIN_TYPE_UNAME)
                Storage.set(LSDefine.USER_LOGIN_MSG, { uname: resbody.uname, upwd: resbody.upwd })
            } catch (error) {
                console.error(error)
            }
            console.log("on_event_uname_login: ", Storage.get(LSDefine.USER_LOGIN_MSG))
        }else{
            DialogManager.getInstance().show_weak_hint("登录失败! " + body.status)
        }
    }

    on_event_wechat_login(body: any) {
        if (body.status == Response.SUCCESS) {
            WeChatLogin.hide_auth_btn();
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


    on_event_wechat_session_login(body: any) {
        if (body.status == Response.SUCCESS) {
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