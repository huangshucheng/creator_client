var Player = require("Player")

var RoomData = cc.Class({
    name: "RoomData",

    ctor: function(){
        this._room_info = ''
        this._room_id 	= ''
        this._play_count = 0
        this._total_play_count = 0
        this._players 	= []	// seatid -> player
        cc.log("RoomData: ctor")
    },

    get_chairs(){
        var GameFunction = require("GameFunction")
	    return Number(GameFunction.getStrValue(this._room_info,'playerNum'));
    },

    set_game_rule(rule){
        this._room_info  = rule;
    },

    get_game_rule(){
        return this._room_info;
    },

    set_room_id(roomid){
        this._room_id = roomid;
    },
    
    get_room_id(){
        return this._room_id;
    },

    update_player_by_uinfo(uinfo){
        var seatid = uinfo.seatid
        if(seatid){
            var player = this._players[seatid]
            if (player){
                player.set_uinfo(uinfo);
            }else{
                player = new Player()
                player.set_uinfo(uinfo);
                this._players[seatid] = player;
            }
        }
    },

    remove_player_by_seatid(seatid){
        var player = this._players[seatid]
        if (player){
            this._players.splice(seatid,1)
        }
    },

    remove_player_by_uinfo(uinfo){
        var seatid = uinfo.seatid
        if (seatid){
            this._players.splice(seatid,1)
        }
    },

    get_player_by_seatid(seatid){
        return this._players[seatid]
    },

    set_play_count(count){
        this._play_count = count;
    },

    get_play_count(){
        return this._play_count;
    },

    set_total_play_count(count){
        this._total_play_count = count;
    },

    get_total_play_cont(){
        return this._total_play_count
    },

    get_player_count(){
        var count = 0;
        this._players.forEach(element => {
            cc.log("hcc>>element: " + element)
            count += 1;
        });
        return count;
    },

    clear(){
        this._room_info = ''
        this._room_id 	= ''
        this._play_count = 0
        this._total_play_count = 0
        this._players 	= []	// seatid -> player
    }
});

RoomData._instance = null;
RoomData.getInstance = function(){
    if(!RoomData._instance){
        RoomData._instance = new RoomData();
    }
    return RoomData._instance;
}

module.exports =  RoomData