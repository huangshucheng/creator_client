import UIController from '../../../framework/uibase/UIController';
import LoginSendAuthMsg from './sendMsg/LoginSendAuthMsg';
import StringUtil from '../../../framework/utils/StringUtil';
import Storage from '../../../framework/utils/Storage';
import LSDefine from '../../../framework/config/LSDefine';
import DialogManager from '../../../framework/manager/DialogManager';
import PlatForm from '../../../framework/config/PlatForm';

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
        this.add_click_event(this.view["KW_BTN_REGIST"], this.on_click_regist.bind(this))
        this.add_click_event(this.view["KW_BTN_WX_LOGIN"], this.on_click_wx_login.bind(this))
    }

    on_click_guest_login(sender:cc.Component){
        let guestkey:string = Storage.get(LSDefine.USER_LOGIN_GUEST_KEY)
        if(!guestkey){
            guestkey = StringUtil.random_string(32)
            console.log("guest login reborn: " + guestkey + " ,len: " + guestkey.length)
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
        console.log("uname: ",_uname , " ,upwd: " , _upwd)
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
        console.log(_uname , _upwd , _upwdok)
        if(_uname.length < 6 || _upwd.length < 6 || _upwdok.length < 6 || (_upwd != _upwdok)){
            console.error("regist error!!!")
            DialogManager.getInstance().show_weak_hint("账号或密码错误!(不能少于6位)")
            return
        }
        LoginSendAuthMsg.send_uname_regist(_uname, _upwd)
        Storage.set(LSDefine.USER_LOGIN_TYPE, LSDefine.LOGIN_TYPE_UNAME)
        Storage.set(LSDefine.USER_LOGIN_MSG,{uname:_uname,upwd:_upwd})
    }

    on_click_wx_login(sender: cc.Component){
        console.log("hcc>>on_click_wx_login111");
        if (!PlatForm.isWeChatGame()) {
            return;
        }
        console.log("hcc>>on_click_wx_login222");

        //微信授权
        // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.userInfo" 这个 scope
        //获取玩家微信信息
        function on_click_get_user_info() {
            wx.getUserInfo({
                success: function (userinfo_res) {
                    // console.log("hcc>>wx.getUserInfo>>success>>res ", res)
                    // console.log("hcc>>wx.getUserInfo>>success>>res.userInfo", userinfo_res.userInfo)
                    ///////////////////////////
                    //微信登录
                    wx.login({
                        success(login_res) {
                            if (login_res.code) {
                                let login_code = login_res.code;
                                let encryptedData = userinfo_res.encryptedData;
                                let iv = userinfo_res.iv;
                                //发起网络请求 TODO
                                // console.log("hcc>>login_code:" , login_code, encryptedData, iv);
                                let wechatuserinfo = JSON.stringify(userinfo_res);
                                console.log("hcc>>wechatuserinfo: " , wechatuserinfo)
                                LoginSendAuthMsg.send_wechat_login(String(login_code),wechatuserinfo);
                            } else {
                                console.log('hcc>>登录失败！', login_res.errMsg)
                            }
                        },
                        failed(login_res) {
                            console.log("hcc>>wx.login>>failed: ", login_res);
                        },
                    })
                    ///////////////////////////
                },
                fail: function (userinfo_res) {
                    console.log("hcc>>wx.getUserInfo>>fail");
                }
            })
        }

        //授权，获取玩家信息
        ///*
        wx.getSetting({
            success(res) {
                if (!res.authSetting['scope.userInfo']) { //没授权
                    wx.authorize({//去授权
                        scope: 'scope.userInfo',
                        success(){
                            // 授权成功
                            console.log("hcc>>wx.authorize>>success");
                            on_click_get_user_info();
                        },
                        fail(){
                            //授权失败
                            console.log("hcc>>wx.authorize>>fail");
                        },
                    })
                }else{//已经授权过了
                    on_click_get_user_info();
                }
            }
        })
        //*/
        ///////////
    }
}
