//游戏消息
import UIController from "../../../../framework/uibase/UIController";
import EventManager from "../../../../framework/manager/EventManager";
import { Cmd, CmdName } from "../../../../framework/protocol/GameHoodleProto";
import GameHoodleData from './GameHoodleData';
import Response from '../../../../framework/config/Response';

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

    on_event_game_start(event: cc.Event.EventCustom){
        let showUIScript = this.get_script("GameHoodleShowUI");
        showUIScript.show_all_ball();
    }

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

    on_event_player_power(event: cc.Event.EventCustom){
        let udata =  event.getUserData();
        if(udata){
            let powers = udata.powers;
            for(let key in powers){
                let info = powers[key];
                let seatid = info.seatid;
                let power = info.power;
                GameHoodleData.getInstance().set_power(seatid, power);
            }
        }
    }

    on_event_player_shoot(event: cc.Event.EventCustom){
        let udata =  event.getUserData();
        if(udata){
            let status = udata.status;
            if(status == Response.OK){
                let seatid = udata.seatid;
                let dirx = Number(udata.posx);
                let diry = Number(udata.posy);
                let showUI = this.get_script("GameHoodleShowUI");
                showUI.show_player_shoot(seatid, dirx, diry);
            }
        }
    }

    on_event_ball_pos(event: cc.Event.EventCustom){
        let showUI = this.get_script("GameHoodleShowUI");
    }

    on_event_player_is_shooted(event: cc.Event.EventCustom){
        let showUI = this.get_script("GameHoodleShowUI");
    }

    on_event_game_result(event: cc.Event.EventCustom){
        let showUI = this.get_script("GameHoodleShowUI");
    }

    on_event_game_total_result(event: cc.Event.EventCustom){
        let showUI = this.get_script("GameHoodleShowUI");
    }

}
