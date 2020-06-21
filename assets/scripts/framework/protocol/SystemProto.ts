export let protoName: string = "SystemProto"

export enum Cmd {
	INVALED = 0,
	eLoginRewardConfigReq = 1,
	eLoginRewardConfigRes = 2,
	eLoginRewardSignReq = 3,
	eLoginRewardSignRes = 4,
	eUserShareReq = 5,
	eUserShareRes = 6,
	eUserAddChipReq = 7,
	eUserAddChipRes = 8,
}

export let CmdName:any = {
	[0] : "INVALED",
	[1]: "LoginRewardConfigReq",
	[2]: "LoginRewardConfigRes",
	[3]: "LoginRewardSignReq",
	[4]: "LoginRewardSignRes",
	[5]: "UserShareReq",
	[6]: "UserShareRes",
	[7]: "UserAddChipReq",
	[8]: "UserAddChipRes",
}