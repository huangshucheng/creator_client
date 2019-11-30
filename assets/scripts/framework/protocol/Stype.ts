export let Stype:any = {
	Auth: 1,
	GameSystem: 2, 	// 系统服务, 个人和系统，不会存在多个玩家进行交互;
	GameHoodle:3, 	// 弹珠游戏服务
	TalkRoom: 4,
}

export let StypeName:any = {
	[1] : "Auth",
	[2] : "GameSystem",
	[3] : "GameHoodle",
	[4] : "TalkRoom",
}
