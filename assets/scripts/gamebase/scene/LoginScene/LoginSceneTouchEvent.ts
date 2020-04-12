import UIController from '../../../framework/uibase/UIController';
import LoginSendAuthMsg from './sendMsg/LoginSendAuthMsg';
import StringUtil from '../../../framework/utils/StringUtil';
import Storage from '../../../framework/utils/Storage';
import LSDefine from '../../../framework/config/LSDefine';
import DialogManager from '../../../framework/manager/DialogManager';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginSceneTouchEvent extends UIController {

    onLoad() {
        super.onLoad()
    }

    start () {
        this.add_button_event_listener()
    }

    add_button_event_listener() {
        this.add_click_event(this.view["KW_BTN_GUEST_LOGIN"],this.on_click_guest_login.bind(this))
        this.add_click_event(this.view["KW_BTN_LOGIN"],this.on_click_uname_login.bind(this))
        this.add_click_event(this.view["KW_BTN_GOTO_REGIST"],this.on_click_goto_regist.bind(this))
        this.add_click_event(this.view["KW_BTN_CLOSE"],this.on_click_regist_close.bind(this))
        this.add_click_event(this.view["KW_BTN_REGIST"],this.on_click_regist.bind(this))
    }

    on_click_guest_login(sender:cc.Component){
        let guestkey:string = Storage.get(LSDefine.USER_LOGIN_GUEST_KEY)
        if(!guestkey){
            guestkey = StringUtil.random_string(32)
            cc.log("guest login reborn: " + guestkey + " ,len: " + guestkey.length)
        }

        if(guestkey.length != 32){
            DialogManager.getInstance().show_weak_hint("登陆失败，guestkey生成错误!")
            return
        }
        LoginSendAuthMsg.send_guest_login(guestkey)
    }

    on_click_uname_login(sender:cc.Component){
        let unameEditBox = this.seek_child_by_name(this.view["KW_IMG_LOGIN_BG"],"KW_INPUT_ACCOUNT")
        let upwdEditBox = this.seek_child_by_name(this.view["KW_IMG_LOGIN_BG"],"KW_INPUT_PWD")
        let _uname = this.get_editbox_string(unameEditBox)
        let _upwd = this.get_editbox_string(upwdEditBox)
        cc.log("uname: ",_uname , " ,upwd: " , _upwd)
        if(_uname.length < 6 || _upwd.length < 6){
            DialogManager.getInstance().show_weak_hint("用户名或密码错误，不能少于六位!");
            return
        }
        LoginSendAuthMsg.send_uname_login(_uname,_upwd)
    }

    on_click_goto_regist(sender: cc.Component){
        this.set_visible(this.view['KW_IMG_LOGIN_BG'],false)
        this.set_visible(this.view['KW_IMG_REGIST_BG'],true)
    }

    on_click_regist_close(sender: cc.Component){
        this.set_visible(this.view['KW_IMG_LOGIN_BG'],true)
        this.set_visible(this.view['KW_IMG_REGIST_BG'],false)
    }

    on_click_regist(sender: cc.Component){
        let unameEditBox = this.seek_child_by_name(this.view["KW_IMG_REGIST_BG"],"KW_INPUT_ACCOUNT")
        let upwdEditBox = this.seek_child_by_name(this.view["KW_IMG_REGIST_BG"],"KW_INPUT_PWD")
        let upwdEditConf = this.seek_child_by_name(this.view["KW_IMG_REGIST_BG"],"KW_INPUT_PWD_COF")
        let _uname = this.get_editbox_string(unameEditBox)
        let _upwd = this.get_editbox_string(upwdEditBox)
        let _upwdok = this.get_editbox_string(upwdEditConf)
        cc.log(_uname , _upwd , _upwdok)
        if(_uname.length < 6 || _upwd.length < 6 || _upwdok.length < 6 || (_upwd != _upwdok)){
            cc.error("regist error!!!")
            DialogManager.getInstance().show_weak_hint("账号或密码错误!(不能少于6位)")
            return
        }
        LoginSendAuthMsg.send_uname_regist(_uname, _upwd)
        Storage.set(LSDefine.USER_LOGIN_TYPE, LSDefine.LOGIN_TYPE_UNAME)
        Storage.set(LSDefine.USER_LOGIN_MSG,{uname:_uname,upwd:_upwd})
    }
}
