export default class SystemProto {
	
	public static protoNameSpace: string = "system.client.proto";//proto命名空间
	public static protoFileName: string = "SystemProtoMsg"; //编译出来后xxxProtoMsg.js的文件名，不用加.js

	public static XY_ID = {
		INVALED: 0,

		REQ_LOGINREWARDCONFIG				: 101,    //登录奖励列表（签到）
		RES_LOGINREWARDCONFIG				: 102,

		REQ_LOGINREWARDSIGN					: 103,    // 玩家签到
		RES_LOGINREWARDSIGN					: 104,

		REQ_USERSHARE						: 105,    // 分享记录        
		RES_USERSHARE						: 106,

		REQ_USERADDCHIP						: 107,    // 增加道具
		RES_USERADDCHIP						: 108,
	}

	public static XY_NAME = {
		[SystemProto.XY_ID.REQ_LOGINREWARDCONFIG]: "reqLoginRewardConfig",
		[SystemProto.XY_ID.RES_LOGINREWARDCONFIG]: "ResLoginRewardConfig",

		[SystemProto.XY_ID.REQ_LOGINREWARDSIGN]: "ReqLoginRewardSign",
		[SystemProto.XY_ID.RES_LOGINREWARDSIGN]: "ResLoginRewardSign",

		[SystemProto.XY_ID.REQ_USERSHARE]: "ReqUserShare",
		[SystemProto.XY_ID.RES_USERSHARE]: "ResUserShare",

		[SystemProto.XY_ID.REQ_USERADDCHIP]: "ReqUserAddChip",
		[SystemProto.XY_ID.RES_USERADDCHIP]: "ResUserAddChip",
	}
}