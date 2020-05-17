import UIController from '../../../framework/uibase/UIController';
import EventManager from '../../../framework/manager/EventManager';
import { Cmd, CmdName } from "../../../framework/protocol/GameHoodleProto";
import Response from '../../../framework/protocol/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import DialogManager from '../../../framework/manager/DialogManager';
import LobbyScene from '../lobbyScene/LobbyScene';
import RoomData from '../../common/RoomData';
import { UserState } from '../../common/State';
import Player from '../../common/Player';
import { Stype } from '../../../framework/protocol/Stype';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSceneRecvGameMsg extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        super.start();
        this.add_protocol_delegate();
    }

    add_cmd_handler_map(){
        this._cmd_handler_map = {
            [Cmd.eLoginLogicRes]: this.on_event_login_logic,
            [Cmd.eDessolveRes]: this.on_event_dessolve,
            [Cmd.eExitRoomRes]: this.on_event_exit_room,
            [Cmd.eCheckLinkGameRes]: this.on_event_check_link,
            [Cmd.eUserInfoRes]: this.on_event_user_info,
            [Cmd.eGameRuleRes]: this.on_event_game_rule,
            [Cmd.eRoomIdRes]: this.on_event_room_id,
            [Cmd.ePlayCountRes]: this.on_event_play_count,
            [Cmd.eUserReadyRes]: this.on_event_user_ready,
            [Cmd.eGameStartRes]: this.on_event_game_start,
            [Cmd.eGameEndRes]: this.on_event_game_end,
            [Cmd.eUserOfflineRes]: this.on_event_user_offline,
            [Cmd.ePlayerScoreRes]: this.on_event_player_score,
            [Cmd.eGameResultRes]: this.on_event_game_result,
            [Cmd.eTotalGameResultRes]: this.on_event_game_total_result,
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
    ///////////////////////////////////////
    ///////////////////////////////////////
    on_event_login_logic(body:any){
        let udata =  body;
        console.log("hcc>>on_event_login_logic>>udata: " , udata)
    }

    on_event_dessolve(body:any){
        let udata =  body;
        if(udata){
            if(udata.status == Response.OK){
                DialogManager.getInstance().show_weak_hint("房间已解散!")
                SceneManager.getInstance().enter_scene_asyc(new LobbyScene())
                RoomData.getInstance().clear_room_data();
            }else{
                DialogManager.getInstance().show_weak_hint("解散房间失败!")
            }
        }
    }

    on_event_exit_room(body:any){
        let udata =  body;
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                DialogManager.getInstance().show_weak_hint("退出房间成功!")
            }else{
                DialogManager.getInstance().show_weak_hint("退出房间失败!")
            }
        }
    }

    on_event_check_link(body: any){
        let udata =  body;
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                DialogManager.getInstance().show_weak_hint("进入游戏成功!")
            }else{
                DialogManager.getInstance().show_weak_hint("进入游戏失败!")
            }
        }
    }

    on_event_user_info(body: any){
        let udata =  body;
        if(udata){
            console.log("hcc>>userinfostr: " , udata)
            try {
                if(udata.userinfo){
                    udata.userinfo.forEach(value => {
                        let numberid = value.numberid;
                        let infostr = value.userinfostring;
                        let infoObj = JSON.parse(infostr);
                        RoomData.getInstance().add_player_by_uinfo(infoObj);
                        console.log("hcc>>userinfo numid: " , numberid , " ,info: " , infostr);
                    });
                }
                let script = this.get_script("GameSceneShowUI")
                if(script){
                    script.show_user_info(udata)
                }
            } catch (error) {
                console.log("hcc>>error: " , error)
            }
        }
    }

    on_event_game_rule(body: any){
        let udata =  body;
        if(udata){
          let gamerule = udata.gamerule;
          if(gamerule){
            this.set_string(this.view['KW_TEXT_RULE'],String(gamerule));
          }
          RoomData.getInstance().set_game_rule(gamerule);
        }
    }

    on_event_room_id(body: any){
        let udata =  body;
        if(udata){
          let roomid = udata.roomid;
          if(roomid){
            this.set_string(this.view['KW_TEXT_ROOM_NUM'],"房间号:" + String(roomid));
          }
          RoomData.getInstance().set_room_id(roomid);
        }
    }

    on_event_play_count(body: any){
        let udata =  body;
        if(udata){
          let playcount = udata.playcount;
          let totalplaycount = udata.totalplaycount;
          RoomData.getInstance().set_play_count(Number(playcount))
          RoomData.getInstance().set_totl_play_count(Number(totalplaycount))
          if(playcount && totalplaycount){
            this.set_string(this.view['KW_TEXT_PLAY_COUNT'],"局数:" + String(playcount) + "/" + String(totalplaycount));
          }
        }
    }    

    on_event_player_score(body: any){
        let udata =  body;
        if(udata){
            let scores = udata.scores;
            let total_str = ""
            for(let key in scores){
                let score_info = scores[key];
                let score = score_info.score;
                let player:Player = RoomData.getInstance().get_player(score_info.seatid);
                if(player){
                    let score_str = player.get_unick() + ": " + score + "\n";
                    total_str = total_str + score_str;
                }
            }
            console.log("hcc>>score_str: " , total_str);
            this.set_string(this.view["KW_TEXT_PLAY_SCORE"],total_str);
        }
    }    

    on_event_user_offline(body: any){
        let udata =  body;
        console.log("on_event_user_offline" , udata)
        let seatid = udata.seatid;
        if(seatid){
            let player = RoomData.getInstance().get_player(seatid);
            if(player){
                player.set_offline(true);
            }
        }
    }

    on_event_user_ready(body: any){
        let udata =  body;
        console.log("on_event_user_ready" , udata)
        if(udata){
            let status = udata.status;
            let seatid = udata.seatid;
            let userstate = udata.userstate;
            if(status == Response.OK){
                let player = RoomData.getInstance().get_player(seatid);
                if(player){
                    player.set_user_state(UserState.Ready);
                    let script = this.get_script("GameSceneShowUI")
                    if(script){
                        script.show_user_ready(seatid, true)
                    }
                }
            }
        }
    }

    on_event_game_start(body: any){
        let udata =  body;
        console.log("on_event_game_start" , udata)
        DialogManager.getInstance().show_weak_hint("游戏开始!")
        let script = this.get_script("GameSceneShowUI")
        if(script){
            script.clear_table()
        }
    }

    on_event_game_end(body: any){
        let udata =  body;
        console.log("on_event_game_end" , udata)
    }

    on_event_game_result(body: any){
        this.set_visible(this.view["KW_BTN_READY"],false);    
        this.scheduleOnce(function(){
            this.set_visible(this.view["KW_BTN_READY"],true);    
        },2)
    }

    on_event_game_total_result(body: any){
        this.scheduleOnce(function(){
            this.set_visible(this.view["KW_BTN_READY"],false);    
            this.set_visible(this.view["KW_BTN_BACK_LOBBY"],true);
        },2)
    }
}
