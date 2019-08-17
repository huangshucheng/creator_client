var LocalStorageName    = require("LocalStorageName")
var LCOAL_SEAT_SELF     = 2;
var INVALID_SEAT        = -1;
var MAX_PLAYER_COUNT      = 4;

var GameFunction = {
    serverSeatToLocal(serverSeat){
        var localSeat = INVALID_SEAT;
        var chairCount =  MAX_PLAYER_COUNT;  //TODO
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
        var chairCount =  MAX_PLAYER_COUNT;  //TODO
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
        return MAX_PLAYER_COUNT;
    },

    getChairs(){
        return MAX_PLAYER_COUNT;
    },

    clearSeatInfo(){
        for(var i = 1 ; i <= this.getMaxPlayerCount(); i++){
            cc.sys.localStorage.setItem(LocalStorageName.game_user_arrive_info + i,null);
        }
    },
    
    clearSeatInfoBySeat(serverSeat){
        cc.sys.localStorage.setItem(LocalStorageName.game_user_arrive_info + serverSeat,null);
    },
};

module.exports = GameFunction;