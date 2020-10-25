export default class GameHoodleProto {

	public static protoNameSpace: string = "GameHoodleProto";//proto命名空间
	public static protoFileName: string = "GameHoodleProtoMsg"; //编译出来后xxxProtoMsg.js的文件名，不用加.js

	public static XY_ID = {
		INVALED: 0,
		///////////////////////////////////
		//房间相关协议
		///////////////////////////////////
		// eCreateRoomReq: 1, 		//创建包厢
		// eCreateRoomRes: 2,
		// eJoinRoomReq: 3,		//加入包厢
		// eJoinRoomRes: 4,
		// eExitRoomReq: 5,		//退出包厢
		// eExitRoomRes: 6,
		// eDessolveReq: 7,		//解散包厢
		// eDessolveRes: 8,
		// eGetRoomStatusReq: 9,		//包厢状态
		// eGetRoomStatusRes: 10,
		// eBackRoomReq: 11,		//返回包厢
		// eBackRoomRes: 12,
		////////////////////////////////://
		//游戏相关协议
		////////////////////////////////://
		eCheckLinkGameReq: 13, 		//进入包厢，连接到游戏服务，发送一些数据到客户端
		eCheckLinkGameRes: 14,
		eUserInfoRes: 15,		//玩家信息
		eGameRuleRes: 16, 		//房间规则
		eRoomIdRes: 17, 		//房间号
		ePlayCountRes: 18, 		//局数
		eUserReadyReq: 19,		//玩家准备
		eUserReadyRes: 20,
		eGameStartRes: 21,		//游戏开始
		eGameEndRes: 22,		//游戏结束
		eLoginLogicReq: 23,		//登录游戏服
		eLoginLogicRes: 24,
		eUserOfflineRes: 25,  		//玩家掉线 
		////////////////////////////////://
		//游戏具体玩法相关
		////////////////////////////////://
		eUserEmojReq: 55, 		// 玩家使用表情
		eUserEmojRes: 56,
		ePlayerFirstBallPosRes: 26, 		// 小球开局位置
		ePlayerPowerRes: 27,  		// 玩家权限，0 不能射击，1 能射击
		ePlayerShootReq: 28,  		// 玩家射击
		ePlayerShootRes: 29,
		ePlayerBallPosReq: 30, 		// 玩家位置
		ePlayerBallPosRes: 31,
		ePlayerIsShootedReq: 32,  		// 玩家被击中
		ePlayerIsShootedRes: 33,
		eGameResultRes: 34,		// 小结算
		eTotalGameResultRes: 35, 		// 大结算
		ePlayerScoreRes: 36,		// 玩家得分

		///////////////////////////////////////

		// eUserMatchReq: 37,		// 玩家匹配
		// eUserMatchRes: 38,
		// eUserStopMatchReq: 39,		// 玩家取消匹配
		// eUserStopMatchRes: 40,
		// eUserGameInfoReq: 41,		// 游戏中心数据
		// eUserGameInfoRes: 42,
		// eUserBallInfoReq: 43,		// 小球信息
		// eUserBallInfoRes: 44,
		// eUpdateUserBallReq: 45,		// 更新小球信息
		// eUpdateUserBallRes: 46,
		// eStoreListReq: 47, 		// 获取商城列表
		// eStoreListRes: 48,
		// eBuyThingsReq: 49, 		// 购买
		// eBuyThingsRes: 50,
		// eUseHoodleBallReq: 51,		// 使用小球
		// eUseHoodleBallRes: 52,
		// eUserConfigReq: 53,  		// 玩家配置
		// eUserConfigRes: 54,

		// eUserPlayAgainReq: 57,		// 玩家请求再次对局（当前对局结束时的玩家）
		// eUserPlayAgainRes: 58,		// 玩家收到另一个对局玩家再次对局的回应
		// eUserPlayAgainAnswerReq: 59,		// 玩家回应：另外一个玩家的再次对局请求
		// eUserPlayAgainAnswerRes: 60,		// 玩家收到：另外一个玩家的再次对局的请求
		// eUserPlayAgainStartRes: 61, 		// 玩家再次对局，开始游戏
		// eRoomListConfigReq: 62,		// 房间列表信息
		// eRoomListConfigRes: 63,
	}

	public static XY_NAME = {
		///////////////////////////////////
		//房间相关协议
		///////////////////////////////////
		// [GameHoodleProto.XY_ID.INVALED]: "INVALED",
		// [GameHoodleProto.XY_ID.eCreateRoomReq]: "CreateRoomReq", 			// 创建包厢
		// [GameHoodleProto.XY_ID.eCreateRoomRes]: "CreateRoomRes",
		// [GameHoodleProto.XY_ID.eJoinRoomReq]: "JoinRoomReq",				// 加入包厢
		// [GameHoodleProto.XY_ID.eJoinRoomRes]: "JoinRoomRes",
		// [GameHoodleProto.XY_ID.eExitRoomReq]: "ExitRoomReq",				// 退出包厢
		// [GameHoodleProto.XY_ID.eExitRoomRes]: "ExitRoomRes",
		// [GameHoodleProto.XY_ID.eDessolveReq]: "DessolveReq",				// 解散包厢
		// [GameHoodleProto.XY_ID.eDessolveRes]: "DessolveRes",
		// [GameHoodleProto.XY_ID.eGetRoomStatusReq]: "GetRoomStatusReq",		// 包厢状态
		// [GameHoodleProto.XY_ID.eGetRoomStatusRes]: "GetRoomStatusRes",
		// [GameHoodleProto.XY_ID.eBackRoomReq]: "BackRoomReq",			// 返回包厢
		// [GameHoodleProto.XY_ID.eBackRoomRes]: "BackRoomRes",
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
		[GameHoodleProto.XY_ID.eGameEndRes]: "GameEndRes",				// 游戏结束
		[GameHoodleProto.XY_ID.eLoginLogicReq]: "LoginLogicReq", 			// 登录游戏服
		[GameHoodleProto.XY_ID.eLoginLogicRes]: "LoginLogicRes",
		[GameHoodleProto.XY_ID.eUserOfflineRes]: "UserOfflineRes", 		// 玩家掉线
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
		[GameHoodleProto.XY_ID.eUserEmojReq]: "UserEmojReq",
		[GameHoodleProto.XY_ID.eUserEmojRes]: "UserEmojRes",
		/*
		[GameHoodleProto.XY_ID.eUserMatchReq]: "UserMatchReq", 				// 玩家匹配
		[GameHoodleProto.XY_ID.eUserMatchRes]: "UserMatchRes",
		[GameHoodleProto.XY_ID.eUserStopMatchReq]: "UserStopMatchReq",			// 玩家取消匹配 		
		[GameHoodleProto.XY_ID.eUserStopMatchRes]: "UserStopMatchRes",
		[GameHoodleProto.XY_ID.eUserGameInfoReq]: "UserGameInfoReq",			// 游戏中心数据
		[GameHoodleProto.XY_ID.eUserGameInfoRes]: "UserGameInfoRes",
		[GameHoodleProto.XY_ID.eUserBallInfoReq]: "UserBallInfoReq",			// 小球信息
		[GameHoodleProto.XY_ID.eUserBallInfoRes]: "UserBallInfoRes",
		[GameHoodleProto.XY_ID.eUpdateUserBallReq]: "UpdateUserBallReq",			// 更新小球信息
		[GameHoodleProto.XY_ID.eUpdateUserBallRes]: "UpdateUserBallRes",
		[GameHoodleProto.XY_ID.eStoreListReq]: "StoreListReq", 				// 请求商城列表
		[GameHoodleProto.XY_ID.eStoreListRes]: "StoreListRes",
		[GameHoodleProto.XY_ID.eBuyThingsReq]: "BuyThingsReq",				// 玩家购买
		[GameHoodleProto.XY_ID.eBuyThingsRes]: "BuyThingsRes",
		[GameHoodleProto.XY_ID.eUseHoodleBallReq]: "UseHoodleBallReq",			// 使用小球
		[GameHoodleProto.XY_ID.eUseHoodleBallRes]: "UseHoodleBallRes",
		[GameHoodleProto.XY_ID.eUserConfigReq]: "UserConfigReq", 				//玩家配置
		[GameHoodleProto.XY_ID.eUserConfigRes]: "UserConfigRes",
		[GameHoodleProto.XY_ID.eUserPlayAgainReq]: "UserPlayAgainReq",
		[GameHoodleProto.XY_ID.eUserPlayAgainRes]: "UserPlayAgainRes",
		[GameHoodleProto.XY_ID.eUserPlayAgainAnswerReq]: "UserPlayAgainAnswerReq",
		[GameHoodleProto.XY_ID.eUserPlayAgainAnswerRes]: "UserPlayAgainAnswerRes",
		[GameHoodleProto.XY_ID.eUserPlayAgainStartRes]: "UserPlayAgainStartRes",
		[GameHoodleProto.XY_ID.eRoomListConfigReq]: "RoomListConfigReq",
		[GameHoodleProto.XY_ID.eRoomListConfigRes]: "RoomListConfigRes",
		*/
	}
}
