import Player from './Player';
import UserInfo from '../../framework/common/UserInfo';

class  RoomData {
    public static readonly instance: RoomData = new RoomData();

    private _player_set = {};
    private _game_rule = "";
    private _room_id = "";
    private _play_count = 0;
    private _total_play_count = 0;

    private constructor() {
        
    }

    public static getInstance(){
        return RoomData.instance;
    }

    set_game_rule(gamerule:string){
        this._game_rule = gamerule;
    }

    get_game_rule(){
        return this._game_rule;
    }

    set_room_id(roomid:string){
        this._room_id = roomid;
    }

    get_room_id(){
        return this._room_id;
    }

    set_play_count(playcount:number){
        this._play_count = playcount;
    }

    get_play_count(){
        return this._play_count
    }

    set_totl_play_count(totalplaycount:number){
        this._total_play_count = totalplaycount;
    }

    get_total_play_count(){
        return this._total_play_count;
    }

    add_player_by_uinfo(uinfo:any):boolean{
        let seatid = uinfo.seatid;
        if(!seatid){
            return false;
        }
        if(seatid){
            if(this._player_set[seatid]){
                this._player_set[seatid].set_uinfo(uinfo);
            }else{
                let player = new Player();
                player.set_uinfo(uinfo);
                this._player_set[player.get_seatid()] = player;
            }
        }
        return true;
    }

    delete_player(player:Player){
        if(this._player_set[player.get_seatid()]){
            delete this._player_set[player.get_seatid()];
        }
    }

    get_player(seatid:number){
        return this._player_set[seatid];
    }

    get_self_seatid(){
        for(let seatid in this._player_set){
            let player:Player = this._player_set[seatid];
            if(player.get_numberid() == UserInfo.get_numberid()){
                return player.get_seatid()
            }
        }
        return -1;
    }

}

export default RoomData;