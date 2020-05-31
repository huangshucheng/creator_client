export let protoName: string = "GameHoodleProto"

export enum Cmd {
	
	///////////////////////////////////
	//房间相关协议
	///////////////////////////////////

	INVALED 						= 0,
	eCreateRoomReq 					= 1, 		//创建包厢
	eCreateRoomRes 					= 2,
	eJoinRoomReq 					= 3,		//加入包厢
	eJoinRoomRes 					= 4,
	eExitRoomReq 					= 5,		//退出包厢
	eExitRoomRes 					= 6,
	eDessolveReq 					= 7,		//解散包厢
	eDessolveRes 					= 8,
	eGetRoomStatusReq 				= 9,		//包厢状态
	eGetRoomStatusRes 				= 10,
	eBackRoomReq 					= 11,		//返回包厢
	eBackRoomRes 					= 12,

	///////////////////////////////////
	//游戏相关协议
	///////////////////////////////////

	eCheckLinkGameReq 				= 13, 		//进入包厢，连接到游戏服务，发送一些数据到客户端
	eCheckLinkGameRes 				= 14,
	eUserInfoRes 					= 15,		//玩家信息
	eGameRuleRes 					= 16, 		//房间规则
	eRoomIdRes 						= 17, 		//房间号
	ePlayCountRes 					= 18, 		//局数
	eUserReadyReq 					= 19,		//玩家准备
	eUserReadyRes 					= 20,
	eGameStartRes 					= 21,		//游戏开始
	eGameEndRes 					= 22,		//游戏结束
	eLoginLogicReq 					= 23,		//登录游戏服
	eLoginLogicRes 					= 24,
	eUserOfflineRes 				= 25,  		//玩家掉线 

	///////////////////////////////////
	//游戏具体玩法相关
	///////////////////////////////////

	ePlayerFirstBallPosRes 			= 26, 		// 小球开局位置
	ePlayerPowerRes 				= 27,  		// 玩家权限，0 不能射击，1 能射击
	ePlayerShootReq 				= 28,  		// 玩家射击
	ePlayerShootRes 				= 29,  		
	ePlayerBallPosReq 				= 30, 		// 玩家位置
	ePlayerBallPosRes 				= 31,  		
	ePlayerIsShootedReq 			= 32,  		// 玩家被击中
	ePlayerIsShootedRes 			= 33,  		
	eGameResultRes 					= 34,		// 小结算
	eTotalGameResultRes 			= 35, 		// 大结算
	ePlayerScoreRes 				= 36,		// 玩家得分
	eUserMatchReq 					= 37,		// 玩家匹配
	eUserMatchRes 					= 38,
	eUserStopMatchReq 				= 39,		// 玩家取消匹配
	eUserStopMatchRes 				= 40,
	eUserGameInfoReq 				= 41,		// 游戏中心数据
	eUserGameInfoRes 				= 42,			
	eUserBallInfoReq 				= 43,		// 小球信息
	eUserBallInfoRes 				= 44,
	eUpdateUserBallReq 				= 45,		// 更新小球信息
	eUpdateUserBallRes 				= 46,
	eStoreListReq 					= 47, 		// 获取商城列表
	eStoreListRes 					= 48,
	eBuyThingsReq 					= 49, 		// 购买
	eBuyThingsRes 					= 50,
	eUseHoodleBallReq 				= 51,		// 使用小球
	eUseHoodleBallRes 				= 52,
	eUserConfigReq 					= 53,  		// 玩家配置
	eUserConfigRes 					= 54,
	eUserEmojReq 					= 55, 		// 玩家使用表情
	eUserEmojRes 					= 56,
	eUserPlayAgainReq 				= 57,		// 玩家请求再次对局（当前对局结束时的玩家）
	eUserPlayAgainRes 				= 58,		// 玩家收到另一个对局玩家再次对局的回应
	eUserPlayAgainAnswerReq 		= 59,		// 玩家回应：另外一个玩家的再次对局请求
	eUserPlayAgainAnswerRes 		= 60,		// 玩家收到：另外一个玩家的再次对局的请求
	eUserPlayAgainStartRes 			= 61, 		// 玩家再次对局，开始游戏
}

export let CmdName:any = {
	
	///////////////////////////////////
	//房间相关协议
	///////////////////////////////////

	[0] : "INVALED",
	[1] :"CreateRoomReq", 			// 创建包厢
	[2] :"CreateRoomRes",
	[3] :"JoinRoomReq",				// 加入包厢
	[4] :"JoinRoomRes",
	[5] :"ExitRoomReq",				// 退出包厢
	[6] :"ExitRoomRes",
	[7] :"DessolveReq",				// 解散包厢
	[8] :"DessolveRes",
	[9] :"GetRoomStatusReq",		// 包厢状态
	[10] :"GetRoomStatusRes",
	[11] :"BackRoomReq",			// 返回包厢
	[12] :"BackRoomRes",

	///////////////////////////////////
	//游戏通用协议
	///////////////////////////////////

	[13] :"CheckLinkGameReq", 		// 进入包厢，连接到游戏服务，发送一些数据到客户端
	[14] :"CheckLinkGameRes",
	[15] :"UserInfoRes",			// 玩家信息
	[16] :"GameRuleRes", 			// 房间规则
	[17] :"RoomIdRes", 				// 房间号
	[18] :"PlayCountRes", 			// 局数
	[19] :"UserReadyReq",			// 玩家准备
	[20] :"UserReadyRes",
	[21] :"GameStartRes",			// 游戏开始
	[22] :"GameEndRes",				// 游戏结束
	[23] :"LoginLogicReq", 			// 登录游戏服
	[24] :"LoginLogicRes",
	[25] :"UserOfflineRes", 		// 玩家掉线

	///////////////////////////////////
	//游戏具体玩法相关
	///////////////////////////////////

	[26] :"PlayerFirstBallPosRes", 		// 小球开局位置
	[27] :"PlayerPowerRes",  			// 玩家权限，0 不能射击，1 能射击
	[28] :"PlayerShootReq",  			// 玩家射击
	[29] :"PlayerShootRes",  			// 玩家射击
	[30] :"PlayerBallPosReq", 			// 玩家位置
	[31] :"PlayerBallPosRes",  			
	[32] :"PlayerIsShootedReq",  		// 玩家被击中
	[33] :"PlayerIsShootedRes",  		
	[34] :"GameResultRes",				// 小结算
	[35] :"TotalGameResultRes", 		// 大结算
	[36] :"PlayerScoreRes", 			// 玩家得分
	[37] :"UserMatchReq", 				// 玩家匹配
	[38] :"UserMatchRes", 		
	[39] :"UserStopMatchReq",			// 玩家取消匹配 		
	[40] :"UserStopMatchRes", 		
	[41] :"UserGameInfoReq",			// 游戏中心数据
	[42] :"UserGameInfoRes",
	[43] :"UserBallInfoReq",			// 小球信息
	[44] :"UserBallInfoRes",
	[45] :"UpdateUserBallReq",			// 更新小球信息
	[46] :"UpdateUserBallRes",
	[47] :"StoreListReq", 				// 请求商城列表
	[48] :"StoreListRes",
	[49] :"BuyThingsReq",				// 玩家购买
	[50] :"BuyThingsRes",
	[51] :"UseHoodleBallReq",			// 使用小球
	[52] :"UseHoodleBallRes",
	[53] :"UserConfigReq", 				//玩家配置
	[54]: "UserConfigRes",
	[55]: "UserEmojReq",
	[56]: "UserEmojRes",
	[57]: "UserPlayAgainReq",
	[58]: "UserPlayAgainRes",
	[59]: "UserPlayAgainAnswerReq",
	[60]: "UserPlayAgainAnswerRes",
	[61]: "UserPlayAgainStartRes",
}