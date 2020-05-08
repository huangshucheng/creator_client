//保存本地字段，localStorage define
export default class LSDefine {
    static USER_LOGIN_TYPE             = "user_login_type"            //登录类型，uname, guest
    static USER_LOGIN_MSG              = "user_login_msg"             //登录信息，uname,upwd
    static USER_LOGIN_GUEST_KEY        = "user_login_guest_key"       //游客登录信息，guestkey
    static USER_INFO_SELF              = "user_info_self"             //自己信息 uinfo

    static LOGIN_TYPE_GUEST            = "guest_login"                  //游客登录
    static LOGIN_TYPE_UNAME            = "uname_login"                  //账号登录
    static LOGIN_TYPE_WECHAT           = "wechat_login"                 //微信登录
}

