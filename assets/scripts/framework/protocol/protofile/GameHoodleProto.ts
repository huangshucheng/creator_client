export default class GameHoodleProto {

	public static protoNameSpace: string = "GameHoodleProto";//proto命名空间
	public static protoFileName: string = "GameHoodleProtoMsg"; //编译出来后xxxProtoMsg.js的文件名，不用加.js

	public static XY_ID = {
		INVALED: 0,
		////////////////////////////////://
		//游戏通用协议
		////////////////////////////////://
		eLoginLogicReq: 101,			// 登录游戏服
		eLoginLogicRes: 102,
		eCheckLinkGameReq: 103, 		// 进入包厢，连接到游戏服务，发送一些数据到客户端
		eCheckLinkGameRes: 104,
		eUserInfoRes: 105,				// 玩家信息
		eGameRuleRes: 106, 				// 房间规则
		eRoomIdRes: 107, 				// 房间号
		ePlayCountRes: 108, 			// 局数
		eUserOfflineRes: 109,  			// 玩家掉线 
		eUserEmojReq: 110, 				// 玩家使用表情
		eUserEmojRes: 111,

		////////////////////////////////://
		//游戏具体玩法相关
		////////////////////////////////://
		eUserReadyReq: 112,				//玩家准备
		eUserReadyRes: 113,
		eGameStartRes: 114,				//游戏开始
		eGameResultRes: 115,			// 小结算
		eTotalGameResultRes: 116, 		// 大结算

		ePlayerFirstBallPosRes: 117, 	// 小球开局位置
		ePlayerPowerRes: 118,  			// 玩家权限，0 不能射击，1 能射击
		ePlayerShootReq: 119,  			// 玩家射击
		ePlayerShootRes: 120,
		ePlayerBallPosReq: 121,			// 玩家位置
		ePlayerBallPosRes: 122,
		ePlayerIsShootedReq: 123,  		// 玩家被击中
		ePlayerIsShootedRes: 124,
		ePlayerScoreRes: 125,			// 玩家得分
	}

	public static XY_NAME = {
		///////////////////////////////////
		//游戏通用协议
		///////////////////////////////////
		[GameHoodleProto.XY_ID.eCheckLinkGameReq]: "CheckLinkGameReq", 		// 进入包厢，连接到游戏服务，发送一些数据到客户端
		[GameHoodleProto.XY_ID.eCheckLinkGameRes]: "CheckLinkGameRes",
		[GameHoodleProto.XY_ID.eUserInfoRes]: "UserInfoRes",			// 玩家信息
		[GameHoodleProto.XY_ID.eGameRuleRes]: "GameRuleRes", 			// 房间规则
		[GameHoodleProto.XY_ID.eRoomIdRes]: "RoomIdRes", 				// 房间号
		[GameHoodleProto.XY_ID.ePlayCountRes]: "PlayCountRes", 			// 局数
		[GameHoodleProto.XY_ID.eUserReadyReq]: "UserReadyReq",			// 玩家准备
		[GameHoodleProto.XY_ID.eUserReadyRes]: "UserReadyRes",
		[GameHoodleProto.XY_ID.eGameStartRes]: "GameStartRes",			// 游戏开始
		[GameHoodleProto.XY_ID.eLoginLogicReq]: "LoginLogicReq", 			// 登录游戏服
		[GameHoodleProto.XY_ID.eLoginLogicRes]: "LoginLogicRes",
		[GameHoodleProto.XY_ID.eUserOfflineRes]: "UserOfflineRes", 		// 玩家掉线
		[GameHoodleProto.XY_ID.eUserEmojReq]: "UserEmojReq",
		[GameHoodleProto.XY_ID.eUserEmojRes]: "UserEmojRes",
		///////////////////////////////////
		//游戏具体玩法相关
		///////////////////////////////////
		[GameHoodleProto.XY_ID.ePlayerFirstBallPosRes]: "PlayerFirstBallPosRes", 		// 小球开局位置
		[GameHoodleProto.XY_ID.ePlayerPowerRes]: "PlayerPowerRes",  			// 玩家权限，0 不能射击，1 能射击
		[GameHoodleProto.XY_ID.ePlayerShootReq]: "PlayerShootReq",  			// 玩家射击
		[GameHoodleProto.XY_ID.ePlayerShootRes]: "PlayerShootRes",  			// 玩家射击
		[GameHoodleProto.XY_ID.ePlayerBallPosReq]: "PlayerBallPosReq", 			// 玩家位置
		[GameHoodleProto.XY_ID.ePlayerBallPosRes]: "PlayerBallPosRes",
		[GameHoodleProto.XY_ID.ePlayerIsShootedReq]: "PlayerIsShootedReq",  		// 玩家被击中
		[GameHoodleProto.XY_ID.ePlayerIsShootedRes]: "PlayerIsShootedRes",
		[GameHoodleProto.XY_ID.eGameResultRes]: "GameResultRes",				// 小结算
		[GameHoodleProto.XY_ID.eTotalGameResultRes]: "TotalGameResultRes", 		// 大结算
		[GameHoodleProto.XY_ID.ePlayerScoreRes]: "PlayerScoreRes", 			// 玩家得分
	}
}
