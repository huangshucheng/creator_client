var Respones = {
	OK : 1,
	// login error
	SystemErr 				: -100,
	UserIsFreeze 			: -101,
	UserIsNotGuest 			: -102,
	InvalidParams 			: -103,
	UnameIsExist 			: -104,
	UnameOrUpwdError 		: -105,
	InvalidOpt 				: -106,

	// create room error
	PlayerIsNotExist 		: -107,
	RoomInfoIsNill 			: -108,
	PlayerIsAlreadyInRoom 			: -109,
	PlayerIsAlreadyCreateOneRoom	: -110,

	// exit room
	PlayerIsNotInRoom 		: -111,

	// join room
	RoomIdIsNill 			: -112,
	RoomIsNotExist 			: -113,

	//dessolve room
	DessolvePlayerIsNotHost : -114,

	// back room
	PlayerNotEnterRoomEver 	: -115,

	// get create status
	PlayerNotCreateRoomOrNotEnterRoom : -116,

	//: user ready
	PlayerIsNotReady 		: -117,
	PlayerIsAlreadyReady 	: -118,
	PlayerIsAlreadyStartGame : -119,

	GameIsStart 			: -120,
}

module.exports = Respones
