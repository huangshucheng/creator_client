export let protoName: string = "SystemProto"

export enum Cmd {
	INVALED = 0,
	eLoginRewardConfigReq = 1,
	eLoginRewardConfigRes = 2,
	eLoginRewardSignReq = 3,
	eLoginRewardSignRes = 4,
}

export let CmdName:any = {
	[0] : "INVALED",
	[1]: "LoginRewardConfigReq",
	[2]: "LoginRewardConfigRes",
	[3]: "LoginRewardSignReq",
	[4]: "LoginRewardSignRes",
}