import LoginSendAuthMsg from "../../gamebase/scene/LoginScene/sendMsg/LoginSendAuthMsg";

class WeChatLogin {
    //授权，获取玩家信息
    static do_wechat_auth_login() {
        wx.getSetting({
            success(res) {
                if (!res.authSetting['scope.userInfo']) { //没授权
                    wx.authorize({ //去授权 TODO  新玩家授权失败
                        scope: 'scope.userInfo',
                        success() { //授权成功
                            WeChatLogin.get_wechat_user_info();
                        },
                        fail() {//授权失败
                            wx.showModal({
                                title: '提示',
                                content: '《弹珠王者》是一款在线对战游戏，需要您的用户信息登录游戏~',
                                // showCancel: false,
                                success(res) {
                                    if (res.confirm) {
                                        WeChatLogin.do_wechat_auth_login()
                                    } else if (res.cancel) {
                                    }
                                }
                            })
                        },
                    })
                } else {//已经授权过了
                    WeChatLogin.get_wechat_user_info();
                }
            }
        })
    }

    // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.userInfo" 这个 scope
    //获取玩家微信信息
    static get_wechat_user_info() {
        //微信登录
        wx.login({
            success(login_res) {
                wx.getUserInfo({
                    success(userinfo_res) {
                        if (login_res.code) {
                            let login_code = login_res.code;
                            //发起登录请求
                            let wechatuserinfo = JSON.stringify(userinfo_res);
                            console.log("hcc>>login_code: ", login_code)
                            console.log("hcc>>wechatuserinfo: ", wechatuserinfo)
                            LoginSendAuthMsg.send_wechat_login(String(login_code), wechatuserinfo);
                        } else {
                            console.log('hcc>>login failed！', login_res.errMsg)
                        }
                    },
                    fail(userinfo_res) {
                        console.log("hcc>>wx.getUserInfo>>fail", userinfo_res);
                    }
                })
            },
        })
    }

}

export default WeChatLogin;