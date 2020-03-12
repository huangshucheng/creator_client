//游戏消息
import UIController from "../../../../framework/uibase/UIController";
import EventManager from "../../../../framework/manager/EventManager";
import { Cmd, CmdName } from "../../../../framework/protocol/GameHoodleProto";
import UIFunction from "../../../../framework/common/UIFunciton";
import RoomData from '../../../common/RoomData';
import Player from '../../../common/Player';
import HoodleManager from './HoodleManager';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameHoodleShowUI extends UIController {

    _hoodleManager = HoodleManager.getInstance()

    onLoad () {
        super.onLoad();
    }

    start () {
    }

    show_all_ball(){
        let all_player = RoomData.getInstance().get_all_player()
        for(let key in all_player){
            let player:Player = all_player[key];
            this.boarn_ball(player);
        }
    }

    //根据服务消息，显示小球
    boarn_ball(player:Player):boolean{
        let ball = UIFunction.getInstance().add_prefab_to_node(this.view["KW_GAME_TABLE"],"ui_prefabs/games/HoodleBall","HoodleBallCtrl");
        if(ball){
            let script = ball.getComponent("HoodleBallCtrl")
            if(script){
                script.set_name(player.get_uinfo().unick)
                script.set_img_face(player.get_uinfo().uface)
                this._hoodleManager.set_ball(player.get_uinfo().seatid,ball);
                return true;
            }
        }
        return false;
    }

    //设置小球位置
    set_ball_pos(seatid:number, posx:number, posy:number):boolean{
        let ball: cc.Node = this._hoodleManager.get_ball(seatid);
        if(!ball || !cc.isValid(ball)){
            return false;
        }
        ball.setPosition(posx, posy);
        return true;
    }

    //显示玩家射击
    show_player_shoot(seatid:number, dirx:number, diry:number):boolean{
        let ball: cc.Node = this._hoodleManager.get_ball(seatid);
        if(!ball || !cc.isValid(ball)){
            return false;
        }
        let script = ball.getComponent("HoodleBallCtrl");
        if(script){
            script.shoot_at(cc.v2(dirx, diry));
        }
        return true;
    }

    //////////////////////////////////
    //////////////////////////////////
    //test
    test_boarn_ball(){
        let ball: cc.Node = UIFunction.getInstance().add_prefab_to_node(this.view["KW_GAME_TABLE"],"ui_prefabs/games/HoodleBall","HoodleBallCtrl");
        if(ball){
            let ballPos = cc.v2(0,0)
            ball.setPosition(ballPos)
            this._hoodleManager.set_ball(RoomData.getInstance().get_self_seatid(),ball);
            let script = ball.getComponent("HoodleBallCtrl")
            script.set_is_active_turn(true)
            script.set_name("ball1")
        }
        let ball2 = UIFunction.getInstance().add_prefab_to_node(this.view["KW_GAME_TABLE"],"ui_prefabs/games/HoodleBall","HoodleBallCtrl");
        if(ball2){
            let ballPos = cc.v2(0,200)
            ball2.setPosition(ballPos) 
            this._hoodleManager.set_ball(4,ball2);
            let script = ball2.getComponent("HoodleBallCtrl")
            script.set_is_active_turn(false)
            script.set_name("ball2")
        }
    }
}
