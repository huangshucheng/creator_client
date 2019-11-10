import UIController from '../../../framework/uibase/UIController';
import NetWork from '../../../framework/network/NetWork';
import { Cmd, CmdName } from '../../../framework/protocol/AuthProto';
import { Stype,StypeName } from '../../../framework/protocol/Stype';
import LoginSceneSendMsg from './LoginSceneSendMsg';
import StringUtil from '../../../framework/utils/StringUtil';
import Storage from '../../../framework/utils/Storage';
import LSDefine from '../../../framework/config/LSDefine';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginSceneTouchEvent extends UIController {

    onLoad() {
        super.onLoad()
        console.log("LoginSceneTouchEvent onload")
    }

    start () {
        console.log("LoginSceneTouchEvent>>start")
        this.add_button_event_listener()
    }

    add_button_event_listener() {
        this.add_click_event(this.view["KW_BTN_GUEST_LOGIN"],this.on_click_guest_login.bind(this))
        this.add_click_event(this.view["KW_BTN_LOGIN"],this.on_click_uname_login.bind(this))
    }

    on_click_guest_login(sender:cc.Node){
        let guestkey:string = Storage.get(LSDefine.USER_LOGIN_GUEST_KEY)
        if(!guestkey){
            guestkey = StringUtil.random_string(32)
            cc.log("guest login reborn: " + guestkey + " ,len: " + guestkey.length)
            Storage.set(LSDefine.USER_LOGIN_GUEST_KEY,guestkey)
        }

        if(guestkey.length != 32){
            return
        }

        LoginSceneSendMsg.send_guest_login(guestkey)
        cc.log("guestkey:" , guestkey)
        Storage.set(LSDefine.USER_LOGIN_TYPE,LSDefine.LOGIN_TYPE_GUEST)
    }

    on_click_uname_login(sender:cc.Node){
        let unameEditBox = this.seek_child_by_name(this.view["KW_IMG_LOGIN_BG"],"KW_INPUT_ACCOUNT")
        let upwdEditBox = this.seek_child_by_name(this.view["KW_IMG_LOGIN_BG"],"KW_INPUT_PWD")
        let _uname = this.get_editbox_string(unameEditBox)
        let _upwd = this.get_editbox_string(upwdEditBox)
        cc.log("uname: ",_uname , " ,upwd: " , _upwd)
        if(_uname.length < 6 || _upwd.length < 6){
            return
        }
        LoginSceneSendMsg.send_uname_login(_uname,_upwd)
        Storage.set(LSDefine.USER_LOGIN_TYPE, LSDefine.LOGIN_TYPE_UNAME)
        Storage.set(LSDefine.USER_LOGIN_MSG,{uname:_uname,upwd:_upwd})

        cc.log("LSDefine.USER_LOGIN_MSG" , Storage.get(LSDefine.USER_LOGIN_MSG))
    }
}
