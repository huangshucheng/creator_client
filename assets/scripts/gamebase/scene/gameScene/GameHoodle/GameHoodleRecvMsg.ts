//游戏消息
import UIController from "../../../../framework/uibase/UIController";
import { Cmd, CmdName } from "../../../../framework/protocol/GameHoodleProto";
import GameHoodleData from './GameHoodleData';
import Response from '../../../../framework/protocol/Response';
import RoomData from '../../../common/RoomData';
import { PlayerPower } from '../../../common/State';
import HoodleBallManager from './HoodleBallManager';
import DialogManager from '../../../../framework/manager/DialogManager';
import { Stype } from '../../../../framework/protocol/Stype';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameHoodleRecvMsg extends UIController {

    onLoad () {
        super.onLoad();

    }

    start () {
        super.start();
        this.add_protocol_delegate();
    }
    
    add_cmd_handler_map(){
        this._cmd_handler_map = {
            [Cmd.eGameStartRes]: this.on_event_game_start,
            [Cmd.ePlayerFirstBallPosRes]: this.on_event_first_ball_pos,
            [Cmd.ePlayerPowerRes]: this.on_event_player_power,
            [Cmd.ePlayerShootRes]: this.on_event_player_shoot,
            [Cmd.ePlayerBallPosRes]: this.on_event_ball_pos,
            [Cmd.ePlayerIsShootedRes]: this.on_event_player_is_shooted,
            [Cmd.eGameResultRes]: this.on_event_game_result,
            [Cmd.eTotalGameResultRes]: this.on_event_game_total_result,
            [Cmd.eUserEmojRes]: this.on_event_emoj,
        }
    }

    on_recv_server_message(stype: number, ctype: number, body: any) {
        if (stype !== Stype.GameHoodle) {
            return;
        }
        if (this._cmd_handler_map[ctype]) {
            this._cmd_handler_map[ctype].call(this, body);
        }
    }

    //游戏开始
    on_event_game_start(body: any){
        this.do_on_view("GameHoodleShowUI", "set_power_percent_visible", true);
        this.do_on_view("GameHoodleShowUI", "clear_all_ball");
        this.do_on_view("GameHoodleShowUI", "show_all_ball");
        //test
        // showUIScript.show_ball_shooted_animation(RoomData.getInstance().get_self_seatid());
    }
    
    //玩家初始位置
    on_event_first_ball_pos(body: any){
        if (body){
            let positions = body.positions;
            for(let key in positions){
                let posInfo = positions[key];
                let seatid = posInfo.seatid;
                let posx = posInfo.posx;
                let posy = posInfo.posy;
                this.do_on_view("GameHoodleShowUI", "set_ball_pos", seatid, Number(posx), Number(posy));
            }
        }
    }

    //玩家权限
    on_event_player_power(body: any){
        if (body){
            let powers = body.powers;
            for(let key in powers){
                let info = powers[key];
                let seatid = info.seatid;
                let power = info.power;
                let selfSeatid = RoomData.getInstance().get_self_seatid();
                if (seatid == selfSeatid  && power == PlayerPower.canPlay && GameHoodleData.getInstance().get_power(selfSeatid) == PlayerPower.canNotPlay){
                    DialogManager.getInstance().show_weak_hint("轮到你操作了!");
                }
                GameHoodleData.getInstance().set_power(seatid, power);
                let ball: cc.Node = HoodleBallManager.getInstance().get_ball(seatid);
                if(ball){
                    let script = ball.getComponent("HoodleBallCtrl");
                    if(script){
                        script.set_shoot_power_ui(power);
                        let src_seatid = power == PlayerPower.canPlay ? seatid : -1;
                        script.set_src_shoot_seatid(src_seatid);
                    }
                }
            }
        }
    }

    //玩家射击
    on_event_player_shoot(body: any){
        if (body){
            if (body.status == Response.OK){
                let seatid = body.seatid;
                let dirx = Number(body.posx);
                let diry = Number(body.posy);
                let shootpower = Number(body.shootpower);
                //收到的是this.view["KW_GAME_TABLE"]下的节点坐标,应该转成世界坐标
                let gameTableNode = this.view["KW_GAME_TABLE"];
                if(!gameTableNode){
                    return;
                }
                let afterTransDir = gameTableNode.convertToWorldSpaceAR(cc.v2(dirx,diry));
                this.do_on_view("GameHoodleShowUI", "show_player_shoot", seatid, afterTransDir.x, afterTransDir.y, shootpower);
            }
        }
    }

    //同步小球位置
    on_event_ball_pos(body: any){
        if(body){
            if (body.status == Response.OK){
                let positions = body.positions;
                for(let key in positions){
                    let posinfo = positions[key];
                    let seatid = posinfo.seatid;
                    let posx = Number(posinfo.posx);
                    let posy = Number(posinfo.posy);
                    this.do_on_view("GameHoodleShowUI", "set_ball_pos", seatid, posx, posy);
                }
            }
        }
    }

    //玩家被击中
    on_event_player_is_shooted(body: any){
        if(body){
            if(body.status == Response.OK){
                this.do_on_view("GameHoodleShowUI", "show_ball_shooted_animation", body.desseatid);
            }
        }
    }

    //小结算
    on_event_game_result(body: any){
        this.do_on_view("GameHoodleShowUI","set_power_percent_visible",false);
    }

    //大结算
    on_event_game_total_result(body: any){
        this.do_on_view("GameHoodleShowUI", "show_total_result", body);
    }

    on_event_emoj(body: any){
        if (body && body.status == Response.OK) {
            this.do_on_view("GameHoodleShowUI", "show_emoj", body);
        }
    }
}
