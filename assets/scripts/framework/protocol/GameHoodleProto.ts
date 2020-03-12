export let protoName: string = "GameHoodleProto"

export enum Cmd {
	
	///////////////////////////////////
	//房间相关协议
	///////////////////////////////////

	INVALED = 0,
	eCreateRoomReq = 1, 			//创建包厢
	eCreateRoomRes = 2,
	eJoinRoomReq = 3,				//加入包厢
	eJoinRoomRes = 4,
	eExitRoomReq = 5,				//退出包厢
	eExitRoomRes = 6,
	eDessolveReq = 7,				//解散包厢
	eDessolveRes = 8,
	eGetRoomStatusReq = 9,			//包厢状态
	eGetRoomStatusRes = 10,
	eBackRoomReq = 11,				//返回包厢
	eBackRoomRes = 12,

	///////////////////////////////////
	//游戏相关协议
	///////////////////////////////////

	eCheckLinkGameReq = 13, 		//进入包厢，连接到游戏服务，发送一些数据到客户端
	eCheckLinkGameRes = 14,
	eUserInfoRes = 15,				//玩家信息
	eGameRuleRes = 16, 				//房间规则
	eRoomIdRes = 17, 				//房间号
	ePlayCountRes = 18, 			//局数
	eUserReadyReq = 19,				//玩家准备
	eUserReadyRes = 20,
	eGameStartRes = 21,				//游戏开始
	eGameEndRes = 22,				//游戏结束
	eLoginLogicReq = 23,			//登录游戏服
	eLoginLogicRes = 24,
	eUserOfflineRes = 25,  			//玩家掉线 

	///////////////////////////////////
	//游戏具体玩法相关
	///////////////////////////////////

	ePlayerFirstBallPosRes = 26, 	// 小球开局位置
	ePlayerPowerRes = 27,  			// 玩家权限，0 不能射击，1 能射击
	ePlayerShootReq = 28,  			// 玩家射击
	ePlayerShootRes = 29,  			// 玩家射击
	ePlayerBallPosReq = 30, 		// 玩家位置
	ePlayerBallPosRes = 31,  		// 玩家位置
	ePlayerIsShootedReq = 32,  		// 玩家被击中
	ePlayerIsShootedRes = 33,  		// 玩家被击中
	eGameResultRes = 34,			// 小结算
	eTotalGameResultRes = 35, 		// 大结算
}

export let CmdName = {
	
	///////////////////////////////////
	//房间相关协议
	///////////////////////////////////

	[0] : "INVALED",
	[1] :"CreateRoomReq", 			//创建包厢
	[2] :"CreateRoomRes",
	[3] :"JoinRoomReq",				//加入包厢
	[4] :"JoinRoomRes",
	[5] :"ExitRoomReq",				//退出包厢
	[6] :"ExitRoomRes",
	[7] :"DessolveReq",				//解散包厢
	[8] :"DessolveRes",
	[9] :"GetRoomStatusReq",		//包厢状态
	[10] :"GetRoomStatusRes",
	[11] :"BackRoomReq",			//返回包厢
	[12] :"BackRoomRes",

	///////////////////////////////////
	//游戏通用协议
	///////////////////////////////////

	[13] :"CheckLinkGameReq", 		//进入包厢，连接到游戏服务，发送一些数据到客户端
	[14] :"CheckLinkGameRes",
	[15] :"UserInfoRes",			//玩家信息
	[16] :"GameRuleRes", 			//房间规则
	[17] :"RoomIdRes", 				//房间号
	[18] :"PlayCountRes", 			//局数
	[19] :"UserReadyReq",			//玩家准备
	[20] :"UserReadyRes",
	[21] :"GameStartRes",			//游戏开始
	[22] :"GameEndRes",				//游戏结束
	[23] :"LoginLogicReq", 			//登录游戏服
	[24] :"LoginLogicRes",
	[25] :"UserOfflineRes", 		//玩家掉线

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
}

