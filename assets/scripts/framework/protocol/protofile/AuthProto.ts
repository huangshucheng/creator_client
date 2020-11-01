export default class AuthProto {

	public static protoNameSpace: string = "auth.client.proto";//proto命名空间
	public static protoFileName: string = "AuthProtoMsg"; //编译出来后xxxProtoMsg.js的文件名，不用加.js

	public static XY_ID = {
		INVALED : 0,
		REQ_UNAMEREGIST: 10001, //用户名密码注册
		RES_UNAMEREGIST: 10002,

		REQ_UNAMELOGIN: 10003, //用户名密码登陆
		RES_UNAMELOGIN: 10004,

		REQ_GUESTLOGIN: 10005, //游客登陆        
		RES_GUESTLOGIN: 10006,

		REQ_WECHATLOGIN: 10007, //微信登录
		RES_WECHATLOGIN: 10008,

		REQ_WECHATSESSIONLOGIN: 10009,//微信session登录
		RES_WECHATSESSIONLOGIN: 10010,

		REQ_LOGINOUT: 10011, //退出登录
		RES_LOGINOUT: 10012,

		PUSH_RELOGIN: 10013, //被重复登录

		REQ_USERCENTERINFO: 10014, //获取玩家信息
		RES_USERCENTERINFO: 10015,
	}

	public static XY_NAME = {
		[AuthProto.XY_ID.REQ_UNAMEREGIST]: "ReqUnameRegist",
		[AuthProto.XY_ID.RES_UNAMEREGIST]: "ResUnameRegist",

		[AuthProto.XY_ID.REQ_UNAMELOGIN]: "ReqUnameLogin",
		[AuthProto.XY_ID.RES_UNAMELOGIN]: "ResUnameLogin",

		[AuthProto.XY_ID.REQ_GUESTLOGIN]: "ReqGuestLogin",
		[AuthProto.XY_ID.RES_GUESTLOGIN]: "ResGuestLogin",

		[AuthProto.XY_ID.REQ_WECHATLOGIN]: "ReqWeChatLogin",
		[AuthProto.XY_ID.RES_WECHATLOGIN]: "ResWeChatLogin",

		[AuthProto.XY_ID.REQ_WECHATSESSIONLOGIN]: "ReqWeChatSessionLogin",
		[AuthProto.XY_ID.RES_WECHATSESSIONLOGIN]: "ResWeChatSessionLogin",

		[AuthProto.XY_ID.REQ_LOGINOUT]: "ReqLoginOut",
		[AuthProto.XY_ID.RES_LOGINOUT]: "ResLoginOut",

		[AuthProto.XY_ID.PUSH_RELOGIN]: "PushRelogin",

		[AuthProto.XY_ID.REQ_USERCENTERINFO]: "ReqUserCenterInfo",
		[AuthProto.XY_ID.RES_USERCENTERINFO]: "ResUserCenterInfo",
	}
}