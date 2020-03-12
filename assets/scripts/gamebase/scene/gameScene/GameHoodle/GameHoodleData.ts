//局内数据
class GameHoodleData {
    public static readonly instance: GameHoodleData = new GameHoodleData();

    _player_power = {}; //seatid->power
    _player_pos = {}; //seatid-> {posx:0,posy:0}
    
    private constructor() {

    }

    public static getInstance(){
        return GameHoodleData.instance;
    }

    set_power(seatid:number, power:number){
        this._player_power[seatid] = power;
    }

    get_power(seatid:number){
        return this._player_power[seatid];
    }

}

export default GameHoodleData