var Player = {
    STATE : {
        psNull			: 0,        // 空
        psWait 			: 1,        // 等待(按下开始按钮前)
        psReady 		: 2,        // 准备(按下开始按钮后)
        psPlaying 		: 3,      	// 游戏(正在进行游戏)
        psEscape 		: 4,       	// 逃跑(游戏被中断)
        psExitEarly 	: 5,    	// 提前退出
        psSeeing 		: 6,		// 旁观
    },

    reset(){
        this._areaid 	= 0
        this._brandid 	= 0
        this._ishost 	= false
        this._isoffline = false
        this._numberid 	= 0
        this._roomid 	= 0
        this._seatid 	= 0
        this._side 		= 0
        this._uface 	= 1
        this._unick 	= ''
        this._usex 		= 0 
        this._state 	= 0
    },

    setUInfo(){
        this._areaid 	= uinfo.areaid
        this._brandid 	= uinfo.brandid
        this._ishost 	= uinfo.ishost
        this._isoffline = uinfo.isoffline
        this._numberid 	= uinfo.numberid
        this._roomid 	= uinfo.roomid
        this._seatid 	= uinfo.seatid
        this._side 		= uinfo.side
        this._uface 	= uinfo.uface
        this._unick 	= uinfo.unick
        this._usex 		= uinfo.usex
        this._state 	= uinfo.user_state
    },

    getLocalSeat(){
        var GameFunction = require("GameFunction")
        return GameFunction.serverSeatToLocal(this._seatid)
    },

    getServerSeat(){
        return this._seatid
    },

}

module.exports =  Player