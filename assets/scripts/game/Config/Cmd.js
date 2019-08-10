var Cmd = {
	eGuestLoginReq              : 1,
	eGuestLoginRes              : 2,
	eRelogin                    : 3,
	eUserLostConn               : 4,
	eEditProfileReq             : 5,
	eEditProfileRes             : 6,
	
	eAccountUpgradeReq          : 7,
	eAccountUpgradeRes          : 8,

	eUnameLoginReq              : 9,
	eUnameLoginRes              : 10,

	eLoginOutReq                : 11,
	eLoginOutRes                : 12,

	eUserRegistReq              : 13,
	eUserRegistRes              : 14,

	eGetUgameInfoReq            : 15,
	eGetUgameInfoRes            : 16,

	eRecvLoginBonuesReq         : 17,
	eRecvLoginBonuesRes         : 18,
	
	eGetWorldRankUchipReq       : 19,
	eGetWorldRankUchipRes       : 20,

	eGetSysMsgReq               : 21,
	eGetSysMsgRes               : 22,

	eLoginLogicReq              : 23,
	eLoginLogicRes              : 24,
	//
	eEnterZoneReq               : 25,
	eEnterZoneRes               : 26,
	
	eEnterMatch                 : 27,
	eUserArrived                : 28,

	eExitMatchReq               : 29,
	eExitMatchRes               : 30,
	eUserExitMatch              : 31,
	//
	// hcc
	eCreateRoomReq              : 32,
	eCreateRoomRes              : 33,

	eJoinRoomReq                : 34,
	eJoinRoomRes                : 35,

	eExitRoomReq                : 36,
	eExitRoomRes                : 37,

	eDessolveReq                : 38,
	eDessolveRes                : 39,

	eGetCreateStatusReq         : 40,
	eGetCreateStatusRes         : 41,

	eBackRoomReq                : 42,
	eBackRoomRes                : 43,

	eUserOffLine                : 44,
	eHeartBeatReq               : 45,
	eHeartBeatRes               : 46,

	eUserReconnectedReq         : 47,
	eUserReconnectedRes         : 48,

	eUserReadyReq 				: 49,
	eUserReadyRes 				: 50,

	eGameStart 	                : 51,
	eUdpTest 					: 52,
	eLogicFrame 				: 53,
	eNextFrameOpts 				: 54,

	eCheckLinkGameReq 			: 55,
	eCheckLinkGameRes 			: 56,
	eRoomInfoRes 				: 57,
	eRoomIdRes 					: 58,
	ePlayCountRes 				: 59,
	eUserArrivedInfos	    	: 60,
	eUserState 					: 61,
	eAllUserState 				: 62,
	eGameResult 				: 63,
	eGameTotalResult 			: 64,
	eClickTouZiNumReq 			: 65,
	eTouZiNumRes 				: 66,
	eClickTouZiBombRes 			: 67,
	eUserGameInfo 				: 68,
}

module.exports = Cmd;