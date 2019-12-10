export let protoName: string = "GameHoodleProto"

export enum Cmd {
	INVALED = 0,
	eCreateRoomReq = 1, //创建包厢
	eCreateRoomRes = 2,

	eJoinRoomReq = 3,	//加入包厢
	eJoinRoomRes = 4,

	eExitRoomReq = 5,	//退出包厢
	eExitRoomRes = 6,

	eDessolveReq = 7,	//解散包厢
	eDessolveRes = 8,

	eGetRoomStatusReq = 9,	//包厢状态
	eGetRoomStatusRes = 10,

	eBackRoomReq = 11,	//返回包厢
	eBackRoomRes = 12,

	///////////////////////////////////
	//游戏相关协议
	///////////////////////////////////

	eCheckLinkGameReq = 13, 	//进入包厢，连接到游戏服务，发送一些数据到客户端
	eCheckLinkGameRes = 14,

	eUserInfoRes = 15,		//玩家信息

	eGameRuleRes = 16, 	//房间规则
	eRoomIdRes = 17, 	//房间号
	ePlayCountRes = 18, 	//局数

	eUserReadyReq = 19,	//玩家准备
	eUserReadyRes = 20,
	
	eGameStartRes = 21,	//游戏开始
	eGameResultRes = 22,	//游戏结束

	eLoginLogicReq = 23,	//登录游戏服
	eLoginLogicRes = 24,
}

export let CmdName = {
	[0] : "INVALED",
	[1] :"CreateRoomReq", //创建包厢
	[2] :"CreateRoomRes",

	[3] :"JoinRoomReq",	//加入包厢
	[4] :"JoinRoomRes",

	[5] :"ExitRoomReq",	//退出包厢
	[6] :"ExitRoomRes",

	[7] :"DessolveReq",	//解散包厢
	[8] :"DessolveRes",

	[9] :"GetRoomStatusReq",	//包厢状态
	[10] :"GetRoomStatusRes",

	[11] :"BackRoomReq",	//返回包厢
	[12] :"BackRoomRes",

	///////////////////////////////////
	//游戏相关协议
	///////////////////////////////////

	[13] :"CheckLinkGameReq", 	//进入包厢，连接到游戏服务，发送一些数据到客户端
	[14] :"CheckLinkGameRes",

	[15] :"UserInfoRes",		//玩家信息

	[16] :"GameRuleRes", 	//房间规则
	[17] :"RoomIdRes", 		//房间号
	[18] :"PlayCountRes", 	//局数

	[19] :"UserReadyReq",	//玩家准备
	[20] :"UserReadyRes",
	
	[21] :"GameStartRes",	//游戏开始
	[22] :"GameResultRes",	//游戏结束

	[23] :"LoginLogicReq", 	//登录游戏服
	[24] :"LoginLogicRes",
}