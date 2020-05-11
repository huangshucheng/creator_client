import LoginSendAuthMsg from "../../gamebase/scene/LoginScene/sendMsg/LoginSendAuthMsg";
import PlatForm from '../config/PlatForm';
import { hide } from '../../../../creator';
import LobbySendGameHoodleMsg from "../../gamebase/scene/lobbyScene/sendMsg/LobbySendGameHoodle";

class WeChatLogin {
    //授权，获取玩家信息，在微信小游戏上已经失效
    static _auth_btn:any = null;

    static do_wechat_auth_login() {
        if(!PlatForm.isWeChatGame()){
            return;
        }
        wx.getSetting({
            success(res) {
                if (!res.authSetting['scope.userInfo']) { //没授权
                    wx.authorize({ //去授权 TODO  新玩家授权失败
                        scope: 'scope.userInfo',
                        success() { //授权成功
                            WeChatLogin.get_wechat_user_info_and_login();
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
                    WeChatLogin.get_wechat_user_info_and_login();
                }
            }
        })
    }

    // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.userInfo" 这个 scope
    //获取玩家微信信息，直接登录
    static get_wechat_user_info_and_login() {
        if (!PlatForm.isWeChatGame()) {
            return;
        }
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

/**
 * 官方例子
    const button = wx.createUserInfoButton({
    type: 'text',
    text: '获取用户信息',
    style: {
        left: 10,
        top: 76,
        width: 200,
        height: 40,
        lineHeight: 40,
        backgroundColor: '#ff0000',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 4
    }
    })
    button.onTap((res) => {
    console.log(res)
    })
 */

    //创建一个透明按钮在cc.Button的node节点上
    //基于新的createUserInfoButton 方式创建用户授权按钮，获取授权信息
    static create_authorize_btn(btnNode: cc.Node) {
        if (!PlatForm.isWeChatGame()) {
            return;
        }
        if(!cc.isValid(btnNode)){
            return;
        }

        if (WeChatLogin._auth_btn){
            WeChatLogin._auth_btn.show()
            return;
        }

        let btnSize = cc.size(btnNode.width + 10, btnNode.height + 10);
        let frameSize = cc.view.getFrameSize();
        let winSize = cc.director.getWinSize();
        console.log("hcc>>create_authorize_btn>>winSize: ",winSize);
        console.log("hcc>>create_authorize_btn>>frameSize: ",frameSize);
        //适配不同机型来创建微信授权按钮
        let left = (winSize.width * 0.5 + btnNode.x - btnSize.width * 0.5) / winSize.width * frameSize.width;
        let top = (winSize.height * 0.5 - btnNode.y - btnSize.height * 0.5) / winSize.height * frameSize.height;
        let width = btnSize.width / winSize.width * frameSize.width;
        let height = btnSize.height / winSize.height * frameSize.height;

        WeChatLogin._auth_btn = wx.createUserInfoButton({
            type: 'text',
            text: '',
            style: {
                left: left,
                top: top,
                width: width,
                height: height,
                lineHeight: 40,
                // backgroundColor: '#ff0000', // 红色
                backgroundColor: '',
                color: '#ffffff',
                textAlign: 'center',
                fontSize: 12,
                borderRadius: 4
            }
        })

        WeChatLogin._auth_btn.onTap((uinfo) => {
            if (uinfo.userInfo) {
                console.log("hcc>>wxLogin auth success, uinfo:" , uinfo.userInfo);
                WeChatLogin.get_wechat_user_info_and_login()
            }else{
                console.log("hcc>>wxLogin auth fail");
                // wx.showToast({ title: "授权失败" });
                wx.showModal({
                    title: '提示',
                    content: '《弹珠王者》是一款在线对战游戏，需要您的用户信息登录游戏~',
                    showCancel: false,
                    success(res) {
                        if (res.confirm) {
                        } else if (res.cancel) {
                        }
                    }
                })
            }
        });
    }

    static hide_auth_btn(){
        if(WeChatLogin._auth_btn){
            WeChatLogin._auth_btn.hide();
        }
    }

    //有时候会失效
    //获取分享数据，方便加入房间
    static get_share_info(){
        if (!PlatForm.isWeChatGame()) {
            return;
        }

        var qData:any = {};
        var obj = wx.getLaunchOptionsSync();
        for (var s in obj.query) {
            console.log("hcc>>share>>obj.query: ", obj.query[s])
            if (s == "roomid")
                qData.roomid = obj.query[s]; 
            if (s == "invite_unick")
                qData.invite_unick = obj.query[s];
        }
        return qData
    }

    //回到小程序前台
    static on_wx_foreground(callbadk?:Function){
        if (!PlatForm.isWeChatGame()) {
            return;
        }
        let show_func = function(params:any) {
            let query = params.query
            let qData:any = {}
            if(query){
                for (var s in query) {
                    console.log("hcc>>on_wx_show>>value: " , s ,":", query[s]);
                    if(s == "roomid"){
                        let roomid = query[s];
                        qData["roomid"] = roomid;
                    }else if(s == "invite_unick"){
                        qData["invite_unick"] = query[s];
                    }
                }
            }
            if(callbadk){
                callbadk(qData);
            }
            console.log("hcc>>on_wx_show: " , params);
        }
        wx.onShow(show_func);
    }
}

export default WeChatLogin;