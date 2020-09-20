export default class Stype {
	static S_TYPE = {
		Auth: 1,		// 账号
		System: 2, 	// 系统服务, 个人和系统，不会存在多个玩家进行交互;
		GameHoodle: 3, 	// 弹珠游戏服务
		Lobby: 4,		//大厅服务
	}

	static S_NAME = {
		[Stype.S_TYPE.Auth]: "Auth",
		[Stype.S_TYPE.System]: "GameSystem",
		[Stype.S_TYPE.GameHoodle]: "GameHoodle",
		[Stype.S_TYPE.Lobby]: "Lobby",
	}
}