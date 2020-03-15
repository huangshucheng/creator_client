import RoomData from "../../../common/RoomData";

//小球管理
class HoodleBallManager {
    public static readonly instance: HoodleBallManager = new HoodleBallManager();

    _ball_set = {}; //seatid-->ball

    private constructor() {
    }

    public static getInstance(){
        return HoodleBallManager.instance;
    }

    public get_ball(seatid:number){
        return this._ball_set[seatid];
    }

    public set_ball(seatid:number, ball:cc.Node){
        this._ball_set[seatid] = ball;
    }

    public delete_ball(seatid:number){
        let ball:cc.Node = this._ball_set[seatid];
        if(ball){
            ball.destroy();
            delete this._ball_set[seatid];
        }
    }

    //获得自己小球
    public get_self_ball(){
        return this._ball_set[RoomData.getInstance().get_self_seatid()];
    }

    public get_all_ball(){
        return this._ball_set;
    }

}

export default HoodleBallManager