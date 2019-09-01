var Player = require("Player")

var RoomData = {
    init(){
        this._room_info = ''
        this._room_id 	= ''
        this._play_count = 0
        this._total_play_count = 0
        this._players 	= {}	// seatid -> player
    },
    getChars(){
        var GameFunction = require("GameFunction")
	    return GameFunction.getStrValue(this._room_info,'playerNum');
    },

    setGameRule(rule){
        this._room_info  = rule;
    },

    getGameRule(){
        return this._room_info;
    },
}

module.exports =  RoomData