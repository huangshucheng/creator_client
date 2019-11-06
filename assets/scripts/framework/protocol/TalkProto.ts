export let protoName: string = "TalkProto"

export enum Cmd {
	INVALED = 0,
	eLoginReq = 1,
	eLoginRes = 2,
	eExitReq = 3,
	eExitRes = 4,
	eSendMsgReq = 5,
	eSendMsgRes = 6,
	eOnUserLogin = 7,
	eOnUserExit = 8,
	eOnSendMsg = 9
}

export let CmdName = {
	[0] : "INVALED",
	[1] : "LoginReq",
	[2] : "LoginRes",
	[3] : "ExitReq",
	[4] : "ExitRes",
	[5] : "SendMsgReq",
	[6] : "SendMsgRes",
	[7] : "OnUserLogin",
	[8] : "OnUserExit",
	[9] : "OnSendMsg",
}