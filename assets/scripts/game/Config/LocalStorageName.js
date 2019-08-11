var LocalStorageName = {
    user_login_type             : "user_login_type",            //登录类型，uname, guest
    user_login_msg              : "user_login_msg",             //登录信息，uname,upwd
    user_login_guest_msg        : "user_login_guest_msg",       //游客登录信息，guestkey
    user_info_self              : "user_info_self",             //自己信息 uinfo
    game_user_arrive_info       : "game_user_arrive_info_",      //玩家游戏中信息,game_user_arrive_info_ + seatid, 字段:userinfo
}

module.exports = LocalStorageName;