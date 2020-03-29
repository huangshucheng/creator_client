//游戏消息
import UIController from "../../../../framework/uibase/UIController";
import EventManager from "../../../../framework/manager/EventManager";
import { Cmd, CmdName } from "../../../../framework/protocol/GameHoodleProto";
import GameHoodleData from './GameHoodleData';
import Response from '../../../../framework/config/Response';
import RoomData from '../../../common/RoomData';
import { PlayerPower } from '../../../common/State';
import HoodleBallManager from './HoodleBallManager';
import DialogManager from "../../../../framework/manager/DialogManager";
import Player from '../../../common/Player';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameHoodleRecvMsg extends UIController {

    onLoad () {
        super.onLoad();

    }

    start () {
        this.add_event_dispatcher()
    }
    
    add_event_dispatcher(){
        EventManager.on(CmdName[Cmd.eGameStartRes], this, this.on_event_game_start)
        EventManager.on(CmdName[Cmd.ePlayerFirstBallPosRes], this, this.on_event_first_ball_pos)
        EventManager.on(CmdName[Cmd.ePlayerPowerRes], this, this.on_event_player_power)
        EventManager.on(CmdName[Cmd.ePlayerShootRes], this, this.on_event_player_shoot)
        EventManager.on(CmdName[Cmd.ePlayerBallPosRes], this, this.on_event_ball_pos)
        EventManager.on(CmdName[Cmd.ePlayerIsShootedRes], this, this.on_event_player_is_shooted)
        EventManager.on(CmdName[Cmd.eGameResultRes], this, this.on_event_game_result)
        EventManager.on(CmdName[Cmd.eTotalGameResultRes], this, this.on_event_game_total_result)
    }

    //游戏开始
    on_event_game_start(event: cc.Event.EventCustom){
        let showUIScript = this.get_script("GameHoodleShowUI");
        if(showUIScript){
            showUIScript.set_power_percent_visible(true);
            showUIScript.clear_all_ball();
            showUIScript.show_all_ball();
        }
        //test
        // showUIScript.show_ball_shooted_animation(RoomData.getInstance().get_self_seatid());
    }
    
    //玩家初始位置
    on_event_first_ball_pos(event: cc.Event.EventCustom){
        let udata =  event.getUserData();
        if(udata){
            let positions = udata.positions;
            for(let key in positions){
                let posInfo = positions[key];
                let seatid = posInfo.seatid;
                let posx = posInfo.posx;
                let posy = posInfo.posy;
                let showUIScript = this.get_script("GameHoodleShowUI");
                showUIScript.set_ball_pos(seatid,Number(posx), Number(posy));
            }
        }
    }

    //玩家权限
    on_event_player_power(event: cc.Event.EventCustom){
        let udata =  event.getUserData();
        if(udata){
            let powers = udata.powers;
            for(let key in powers){
                let info = powers[key];
                let seatid = info.seatid;
                let power = info.power;
                GameHoodleData.getInstance().set_power(seatid, power);

                let ball: cc.Node = HoodleBallManager.getInstance().get_ball(seatid);
                if(ball){
                    let script = ball.getComponent("HoodleBallCtrl");
                    if(script){
                        script.set_shoot_power_ui(power);
                    }
                }
            }
        }
    }

    //玩家射击
    on_event_player_shoot(event: cc.Event.EventCustom){
        let udata =  event.getUserData();
        if(udata){
            let status = udata.status;
            if(status == Response.OK){
                let seatid = udata.seatid;
                let dirx = Number(udata.posx);
                let diry = Number(udata.posy);
                let shootpower = Number(udata.shootpower);

                //收到的是this.view["KW_GAME_TABLE"]下的节点坐标,应该转成世界坐标
                let gameTableNode = this.view["KW_GAME_TABLE"];
                if(!gameTableNode){
                    return;
                }
                let afterTransDir = gameTableNode.convertToWorldSpaceAR(cc.v2(dirx,diry));
                let showUI = this.get_script("GameHoodleShowUI");
                if(showUI){
                    showUI.show_player_shoot(seatid, afterTransDir.x, afterTransDir.y, shootpower);
                }
            }
        }
    }

    //同步小球位置
    on_event_ball_pos(event: cc.Event.EventCustom){
        let udata = event.getUserData();
        if(udata){
            let status = udata.status;
            if(status == Response.OK){
                let positions = udata.positions;
                for(let key in positions){
                    let posinfo = positions[key];
                    let seatid = posinfo.seatid;
                    let posx = Number(posinfo.posx);
                    let posy = Number(posinfo.posy);
                    let showUI = this.get_script("GameHoodleShowUI");
                    showUI.set_ball_pos(seatid,posx,posy);
                }
            }
        }
    }

    //玩家被击中
    on_event_player_is_shooted(event: cc.Event.EventCustom){
        // let showUI = this.get_script("GameHoodleShowUI");
        console.log("hcc>>on_event_player_is_shooted" , event.getUserData());
        let udata = event.getUserData();
        if(udata){
            let status = udata.status;
            if(status == Response.OK){
                let src_seatid = udata.srcseatid;
                let des_seatid = udata.desseatid;
                let showUI = this.get_script("GameHoodleShowUI");
                showUI.show_ball_shooted_animation(des_seatid);
            }
        }
    }

    //小结算
    on_event_game_result(event: cc.Event.EventCustom){
        /*
        console.log("hcc>>on_event_game_result",event.getUserData());
        let udata = event.getUserData();
        let score_text = "";
        if(udata){
            let scores = udata.scores;
            for(let k in scores){
                let info = scores[k];
                let seatid = info.seatid;
                let score = info.score;
                let player: Player = RoomData.getInstance().get_player(seatid);
                if(player){
                    let uname = player.get_uname();
                    let score_str = score > 0 ? ("+" + score) : score
                    score_text = score_text + uname + ":" + score_str + "\n";
                }
            }
        }
        let _this = this;
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogGameResult","GameResultDialog",function(resNode:cc.Node){
            if(resNode){
                let script = resNode.getComponent("GameResultDialog");
                if (script){
                    script.set_title_text("结束")
                    script.set_reward_text("")
                    script.set_score_text(score_text);
                }
                resNode.active = false;
                _this.scheduleOnce(function(){
                    resNode.active = true;
                },2.5)
            }
        })
        */
       let showUIScript = this.get_script("GameHoodleShowUI");
       if(showUIScript){
           showUIScript.set_power_percent_visible(false);
       }
    }

    //大结算
    on_event_game_total_result(event: cc.Event.EventCustom){
        // let showUI = this.get_script("GameHoodleShowUI");
        console.log("hcc>>on_event_game_total_result" , event.getUserData());
        let udata = event.getUserData();
        let show_text = "";
        if(udata){
            let scores = udata.scores;
            let golds = udata.golds;
            for(let index = 0; index < scores.length; index++){
                let scoreInfo = scores[index];
                let goldInfo = golds[index];
                let seatid = scoreInfo.seatid;
                let score = Number(scoreInfo.score);
                let gold = Number(goldInfo.gold);
                let player: Player = RoomData.getInstance().get_player(seatid);
                if(player){
                    let uname = player.get_uname();
                    let score_str = score > 0 ? ("+" + score) : score;
                    let gold_str = gold > 0 ? ("+" + gold) : gold;
                    show_text = show_text + uname + ": 分数 " + score_str + "   " + "金币:" + gold_str + "\n";
                }
                
            }

            // for(let k in scores){
            //     let info = scores[k];
            //     let gold = golds[k];
            //     let seatid = info.seatid;
            //     let score = Number(info.score);
            //     let player: Player = RoomData.getInstance().get_player(seatid);
            //     if(player){
            //         let uname = player.get_uname();
            //         let score_str = score > 0 ? ("+" + score) : score
            //         let gold_str = 
            //         show_text = show_text + uname + ": 分数 " + score_str + "   " + "金币:" +  + "\n";
            //     }
            // }
        }
        let _this = this;
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogGameResult","GameResultDialog",function(resNode:cc.Node){
            if(resNode){
                let script = resNode.getComponent("GameResultDialog");
                if (script){
                    script.set_title_text("结束")
                    script.set_reward_text("")
                    script.set_score_text(show_text);
                }
                resNode.active = false;
                _this.scheduleOnce(function(){
                    resNode.active = true;
                },2.5)
            }
        })

    }

}
