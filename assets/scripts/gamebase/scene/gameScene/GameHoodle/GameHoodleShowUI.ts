//游戏消息
import UIController from "../../../../framework/uibase/UIController";
import UIFunction from "../../../../framework/common/UIFunciton";
import RoomData from '../../../common/RoomData';
import Player from '../../../common/Player';
import HoodleBallManager from "./HoodleBallManager";
import GameHoodleConfig from "../../../../framework/config/GameHoodleConfig";
import DialogManager from "../../../../framework/manager/DialogManager";
import GameResultDialog from "../../../dialog/GameResultDialog";

let PROGRESS_SPEED = 0.02

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameHoodleShowUI extends UIController {

    _hoodleManager = HoodleBallManager.getInstance()
    _percent_control = 1;

    onLoad () {
        super.onLoad();
        //test ball
        if (GameHoodleConfig.IS_TEST_BALL){
            this.test_boarn_ball()
        }
        this.set_power_percent_visible(false);
        this.show_edge_center(false);
        //test
        /*
        let testpos = cc.v2(200,200);
        let despos = this.node.convertToNodeSpaceAR(testpos);
        let despos1 = this.view["KW_GAME_TABLE"].convertToNodeSpaceAR(testpos);

        let wpos1 = this.node.convertToWorldSpaceAR(testpos);
        let wpos2 = this.view["KW_GAME_TABLE"].convertToWorldSpaceAR(testpos);
        console.log("hcc>>testpos: " ,wpos1 , wpos2);
        */
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
                script.set_ball_id(player.get_uinfo().seatid);
                script.set_name(player.get_unick())
                script.set_img_face(player.get_user_ball_level())
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
    show_player_shoot(seatid:number, dirx:number, diry:number, shootpower?:number):boolean{
        let ball: cc.Node = this._hoodleManager.get_ball(seatid);
        if(!ball || !cc.isValid(ball)){
            return false;
        }
        let script = ball.getComponent("HoodleBallCtrl");
        if(script){
            script.shoot_at(cc.v2(dirx, diry),shootpower);
        }
        return true;
    }

    //玩家被击中动画
    show_ball_shooted_animation(seatid:number){
        let ball: cc.Node = this._hoodleManager.get_ball(seatid);
        if(!ball || !cc.isValid(ball)){
            return;
        }
        let script = ball.getComponent("HoodleBallCtrl");
        if (script){
            script.show_ball_shooted_ani();
        }
    }

    //力度条,进度, percent:0-1
    set_power_percent(percent:number){
        let progressNode:cc.Node = this.view["KW_POWER_PROGRESS"];
        if (progressNode && cc.isValid(progressNode)){
            let progressBar:cc.ProgressBar = progressNode.getComponent(cc.ProgressBar);
            if(progressBar){
                progressBar.progress = percent;
            }
        }
        let textPer = this.seek_child_by_name(this.view["KW_POWER_PROGRESS"],"KW_TEXT_PERCENT");
        let per = Math.floor(percent*100);
        this.set_string(textPer,"力量:" + String(per));
    }

    set_power_percent_visible(isVisible:boolean){
        this.set_visible(this.view["KW_POWER_PROGRESS"],isVisible);
        if(!isVisible){
            let progressNode:cc.Node = this.view["KW_POWER_PROGRESS"];
            if (progressNode && cc.isValid(progressNode)){
                let progressBar:cc.ProgressBar = progressNode.getComponent(cc.ProgressBar);
                if(progressBar){
                    progressBar.progress = 0;
                }
            }
            let textPer = this.seek_child_by_name(this.view["KW_POWER_PROGRESS"],"KW_TEXT_PERCENT");
            this.set_string(textPer,"力量:0");
        }
    }

    get_power_percent_visible():boolean{
        return this.get_visible(this.view["KW_POWER_PROGRESS"]);
    }

    //获取进度条进度 0->1
    get_pwer_percent():number{
        let progressNode:cc.Node = this.view["KW_POWER_PROGRESS"];
        if (progressNode && cc.isValid(progressNode)){
            let progressBar:cc.ProgressBar = progressNode.getComponent(cc.ProgressBar);
            if(progressBar){
                return progressBar.progress;
            }
        }
        return 0;
    }

    //////////////////////////////////
    //////////////////////////////////

    update(dt:number){
        if(!this.get_power_percent_visible()){
            return;
        }
        let per = this.get_pwer_percent();
        if(per >= 1){
            this._percent_control = this._percent_control*(-1);
        }else if(per <= 0){
            this._percent_control = this._percent_control*(-1);
        }
        per = per + this._percent_control * PROGRESS_SPEED;
        if(per >= 1){
            per = 1;
        }else if(per <= 0){
            per = 0;
        }
        this.set_power_percent(per);
    }

    show_total_result(body:any){
        let show_text = "";
        if (body) {
            let scores = body.scores;
            let golds = body.golds;
            for (let index = 0; index < scores.length; index++) {
                let scoreInfo = scores[index];
                let goldInfo = golds[index];
                let seatid = scoreInfo.seatid;
                let score = Number(scoreInfo.score);
                let gold = Number(goldInfo.gold);
                let player: Player = RoomData.getInstance().get_player(seatid);
                if (player) {
                    let uname = player.get_unick();
                    if (seatid == RoomData.getInstance().get_self_seatid()) {
                        uname = uname + "(我)"
                    }
                    let score_str = score > 0 ? ("+" + score) : score;
                    let gold_str = gold > 0 ? ("+" + gold) : gold;
                    // show_text = show_text + uname + ": 分数 " + score_str + "   " + "金币:" + gold_str + "\n";
                    show_text = show_text + uname + "金币:" + gold_str + "\n";
                }

            }
        }
        let resNode:cc.Node = DialogManager.getInstance().show_dialog("ui_prefabs/dialog/DialogGameResult", "GameResultDialog");
        if (resNode) {
            let script: GameResultDialog = resNode.getComponent("GameResultDialog");
            if (script) {
                script.set_title_text("结束")
                script.set_reward_text("")
                script.set_score_text(show_text);
            }
            resNode.active = false;
            this.scheduleOnce(function () {
                resNode.active = true;
            }, 1.5)
        }
    }

    show_emoj(body:any){
        let emojconfig = body.emojconfig;
        if (emojconfig){
            let configObj = JSON.parse(emojconfig);
            let seatid = Number(configObj.seatid);
            let emojindex = Number(configObj.emojconfig);
            let ball: cc.Node = HoodleBallManager.getInstance().get_ball(seatid);
            if (ball && cc.isValid(ball)) {
                let script = ball.getComponent("HoodleBallCtrl");
                if (script) {
                    script.show_ball_emoj(emojindex);
                }
            }
        }
    }

    show_edge_center(isshow:boolean){
        this.set_visible(this.view["KW_EDGE_CENTER"],isshow);
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
