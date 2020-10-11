var Response = {
	OK: 0, // 表示成功
	INVALID_PARAMS: -100, // 表示用户传递的参数错误
	SYSTEM_ERR: -101, // 系统错误
	ILLEGAL_ACCOUNT: -102, // 非法的账号

	INVALIDI_OPT: -103, // 非法的操作
	PHONE_IS_REG: -104, // 手机已经被绑定
	PHONE_CODE_ERR: -105, // 手机验证码错误
	UNAME_OR_UPWD_ERR: -106, // 用户名后密码错误
	PHONE_IS_NOT_REG: -107, // 手机号为非法的账号
	RANK_IS_EMPTY: -108, // 排行榜为空
	INVALID_ZONE: -109, // 非法的游戏空间
	CHIP_IS_NOT_ENOUGH: -110, // 金币不足 
	VIP_IS_NOT_ENOUGH: -111, // vip等级不足
	NOT_YOUR_TURN: -112, // 没有轮到你
};

export default Response;