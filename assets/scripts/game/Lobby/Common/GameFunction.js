var LocalStorageName    = require("LocalStorageName")
var LCOAL_SEAT_SELF     = 2;
var INVALID_SEAT        = -1;
var MAX_PLAYER_COUNT      = 4;

var GameFunction = {
    serverSeatToLocal(serverSeat){
        var localSeat = INVALID_SEAT;
        var chairCount =  this.getMaxPlayerCount(); 
        var selfServerSeat = this.getSelfServerSeat();
        if (selfServerSeat == INVALID_SEAT){
            return INVALID_SEAT;
        }
        if( serverSeat >= 1 && serverSeat <= chairCount ){
            localSeat = (chairCount + selfServerSeat - serverSeat + 1) % chairCount + 1
            if (chairCount == 2 && localSeat == 1 ){
                localSeat = 4
            }
        }
        return localSeat
    },
    
    localSeatToServer(localSeat){
        var serverSeat = INVALID_SEAT
        var chairCount =  this.getMaxPlayerCount();
        var selfServerSeat = this.getSelfServerSeat();
        if (selfServerSeat == INVALID_SEAT){
            return INVALID_SEAT;
        }
        serverSeat = (chairCount + selfServerSeat - localSeat + 1) % chairCount + 1
        if (chairCount == 2 && serverSeat == 1){
            serverSeat == 4;
        }
        return serverSeat;
    },

    getSelfServerSeat(){
        var selfbid = null;
        var info_self =  JSON.parse(cc.sys.localStorage.getItem(LocalStorageName.user_info_self));
        if (info_self){
            selfbid = info_self.brandid;
        }
        
        for(var i = 1 ; i <= this.getMaxPlayerCount(); i++){
            var info = JSON.parse(cc.sys.localStorage.getItem(LocalStorageName.game_user_arrive_info + i));
            if (info){
                if(selfbid == info.brandid){
                    return info.seatid
                }
            }
        }
        return INVALID_SEAT;
    },
    
    getSelfLocalSeat(){
        return LCOAL_SEAT_SELF;
    },

    getMaxPlayerCount(){
        var count = MAX_PLAYER_COUNT;
        var RoomData = require("RoomData")
        count = RoomData.getChars();
        return count;
    },

    clearSeatInfo(){
        for(var i = 1 ; i <= this.getMaxPlayerCount(); i++){
            cc.sys.localStorage.setItem(LocalStorageName.game_user_arrive_info + i,null);
        }
    },
    
    clearSeatInfoBySeat(serverSeat){
        cc.sys.localStorage.setItem(LocalStorageName.game_user_arrive_info + serverSeat,null);
    },

    getStrValue(luaString, variable){
		var value = ""
		var vs = {}
		vs = luaString.split(";")
		for(var str in vs){
			var vss =  {}
			vss = vs[str].split("=")
			if (vss.length >= 2 && vss[0] == variable){
				value = vss[1]
				if (value.length >= 2){
					if(value[0] == "'" && value[value.length - 1] == "'"){
						var tmpvalue = ""
						for(var i = 1;i < value.length - 1;i++){
							tmpvalue = tmpvalue +  String(value[i]);
						}
						value = tmpvalue;
					}
				}
				return value;
			}
		}
		return value;
	},
};

module.exports = GameFunction;