//游戏消息
import UIController from "../../../../framework/uibase/UIController";
import EventManager from "../../../../framework/manager/EventManager";
import { Cmd, CmdName } from "../../../../framework/protocol/GameHoodleProto";
import UIFunction from "../../../../framework/common/UIFunciton";
import RoomData from '../../../common/RoomData';
import Player from '../../../common/Player';
import HoodleBallManager from "./HoodleBallManager";
import AppConfig from '../../../../framework/config/AppConfig';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameHoodleShowUI extends UIController {

    _hoodleManager = HoodleBallManager.getInstance()

    onLoad () {
        super.onLoad();
        //test ball
        if(AppConfig.IS_TEST_BALL){
            this.test_boarn_ball()
        }
        let testpos = cc.v2(200,200);
        let despos = this.node.convertToNodeSpaceAR(testpos);
        let despos1 = this.view["KW_GAME_TABLE"].convertToNodeSpaceAR(testpos);

        let wpos1 = this.node.convertToWorldSpaceAR(testpos);
        let wpos2 = this.view["KW_GAME_TABLE"].convertToWorldSpaceAR(testpos);

        console.log("hcc>>testpos: " ,wpos1 , wpos2);
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

    clear_all_ball(){
        let all_player = RoomData.getInstance().get_all_player()
        for(let key in all_player){
            let player:Player = all_player[key];
            if(player){
                this._hoodleManager.delete_ball(player.get_seatid());
            }
        }
    }

    //根据服务消息，显示小球
    boarn_ball(player:Player):boolean{
        let ball = UIFunction.getInstance().add_prefab_to_node(this.view["KW_GAME_TABLE"],"ui_prefabs/games/HoodleBall","HoodleBallCtrl");
        if(ball){
            let script = ball.getComponent("HoodleBallCtrl")
            if(script){
                // script.set_name(player.get_unick())
                script.set_ball_id(player.get_uinfo().seatid);
                script.set_name(player.get_uname()) //TODO 暂时先显示玩家账号
                script.set_img_face(player.get_uinfo().uface)
                this._hoodleManager.set_ball(player.get_uinfo().seatid, ball);
                ball.active = false;
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
        ball.active = true;
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

    //玩家被击中动画
    show_ball_shooted_animation(seatid:number){
        let ball: cc.Node = this._hoodleManager.get_ball(seatid);
        if(!ball || !cc.isValid(ball)){
            return;
        }
        let delay_1 = cc.delayTime(0.5);
        let blink = cc.blink(1.5, 10);
        let delay_2 = cc.delayTime(0.3);
        let hide = cc.callFunc(function(){
            ball.active = false;
        })
        ball.runAction(cc.sequence(delay_1 ,blink, delay_2, hide));
    }

    //////////////////////////////////
    //////////////////////////////////
    //test
    test_boarn_ball(){
        let ball: cc.Node = UIFunction.getInstance().add_prefab_to_node(this.view["KW_GAME_TABLE"],"ui_prefabs/games/HoodleBall","HoodleBallCtrl");
        if(ball){
            let ballPos = cc.v2(-500,-900)
            ball.setPosition(ballPos)
            this._hoodleManager.set_ball(1,ball);
            let script = ball.getComponent("HoodleBallCtrl")
            script.set_ball_id(1);
            script.set_name("ball1")
            
        }
        let ball2 = UIFunction.getInstance().add_prefab_to_node(this.view["KW_GAME_TABLE"],"ui_prefabs/games/HoodleBall","HoodleBallCtrl");
        if(ball2){
            let ballPos = cc.v2(0,300)
            ball2.setPosition(ballPos) 
            this._hoodleManager.set_ball(2,ball2);
            let script = ball2.getComponent("HoodleBallCtrl")
            script.set_ball_id(2);
            script.set_name("ball2")
            
        }
    }
}
