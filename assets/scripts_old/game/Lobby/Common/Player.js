var Player = cc.Class({
    name:"player",

    ctor:function(){
        cc.log("Player ctor...")
    },

	statics: {
        STATE : {
            psNull			: 0,        // 空
            psWait 			: 1,        // 等待(按下开始按钮前)
            psReady 		: 2,        // 准备(按下开始按钮后)
            psPlaying 		: 3,      	// 游戏(正在进行游戏)
            psEscape 		: 4,       	// 逃跑(游戏被中断)
            psExitEarly 	: 5,    	// 提前退出
            psSeeing 		: 6,		// 旁观
        },
    },

	properties: {
        _uinfo       : null,
    },

    /*
	required string unick = 1;
	required sint32 uface = 2;
	required sint32 usex = 3;
	required sint32 seatid = 4;
	required sint32 side = 5;
	required string roomid = 6;
	required bool  ishost = 7;
	required bool  isoffline = 8;
	optional string brandid = 9;
	optional string numberid = 10;
	optional string areaid = 11;
	optional sint32 userstate = 12;
    */ 
    set_uinfo(uinfo){
        this._uinfo = uinfo
    },

    get_uinfo(){
        return this._uinfo;
    },

    get_local_seat(){
        var GameFunction = require("GameFunction")
        return GameFunction.serverSeatToLocal(this._uinfo.seatid)
    },

    get_server_seat(){
        return this._seatid
    },

    reset(){
        this._uinfo     = null;
    },
});

module.exports =  Player