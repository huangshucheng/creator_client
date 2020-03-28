import UIController from '../../../framework/uibase/UIController';
import EventManager from '../../../framework/manager/EventManager';
import { Cmd, CmdName } from "../../../framework/protocol/GameHoodleProto";
import Response from '../../../framework/config/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import DialogManager from '../../../framework/manager/DialogManager';
import LobbyScene from '../lobbyScene/LobbyScene';
import RoomData from '../../common/RoomData';
import { UserState } from '../../common/State';
import Player from '../../common/Player';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSceneRecvGameMsg extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        this.add_event_dispatcher()
    }

    add_event_dispatcher(){
        EventManager.on(CmdName[Cmd.eLoginLogicRes], this, this.on_event_login_logic)
        EventManager.on(CmdName[Cmd.eDessolveRes], this, this.on_event_dessolve)
        EventManager.on(CmdName[Cmd.eJoinRoomRes], this, this.on_event_exit_room)
        EventManager.on(CmdName[Cmd.eCheckLinkGameRes], this, this.on_event_check_link)
        EventManager.on(CmdName[Cmd.eUserInfoRes], this, this.on_event_user_info)
        EventManager.on(CmdName[Cmd.eGameRuleRes], this, this.on_event_game_rule)
        EventManager.on(CmdName[Cmd.eRoomIdRes], this, this.on_event_room_id)
        EventManager.on(CmdName[Cmd.ePlayCountRes], this, this.on_event_play_count)
        EventManager.on(CmdName[Cmd.eUserReadyRes], this, this.on_event_user_ready)
        EventManager.on(CmdName[Cmd.eGameStartRes], this, this.on_event_game_start)
        EventManager.on(CmdName[Cmd.eGameEndRes], this, this.on_event_game_end)
        EventManager.on(CmdName[Cmd.eUserOfflineRes], this, this.on_event_user_offline)
        EventManager.on(CmdName[Cmd.ePlayerScoreRes], this, this.on_event_play_score)
        EventManager.on(CmdName[Cmd.eGameResultRes], this, this.on_event_game_result)
        EventManager.on(CmdName[Cmd.eTotalGameResultRes], this, this.on_event_game_total_result)
    }
    ///////////////////////////////////////
    ///////////////////////////////////////
    on_event_login_logic(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        cc.log("hcc>>on_event_login_logic>>udata: " , udata)
    }

    on_event_dessolve(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
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

    on_event_exit_room(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                DialogManager.getInstance().show_weak_hint("退出房间成功!")
            }else{
                DialogManager.getInstance().show_weak_hint("退出房间失败!")
            }
        }
    }

    on_event_check_link(event: cc.Event.EventCustom){
        let udata =  event.getUserData()
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                DialogManager.getInstance().show_weak_hint("进入游戏成功!")
            }else{
                DialogManager.getInstance().show_weak_hint("进入游戏失败!")
            }
        }
    }

    on_event_user_info(event: cc.Event.EventCustom){
        let udata =  event.getUserData()
        if(udata){
            cc.log("hcc>>userinfostr: " , udata)
            try {
                if(udata.userinfo){
                    udata.userinfo.forEach(value => {
                        let numberid = value.numberid;
                        let infostr = value.userInfoString;
                        let infoObj = JSON.parse(infostr);
                        RoomData.getInstance().add_player_by_uinfo(infoObj);
                        cc.log("hcc>>userinfo numid: " , numberid , " ,info: " , infostr);
                    });
                }
                let script = this.get_script("GameSceneShowUI")
                if(script){
                    script.show_user_info(udata)
                }
            } catch (error) {
                cc.log("hcc>>error: " , error)
            }
        }
    }

    on_event_game_rule(event: cc.Event.EventCustom){
        let udata =  event.getUserData()
        if(udata){
          let gamerule = udata.gamerule;
          if(gamerule){
            this.set_string(this.view['KW_TEXT_RULE'],String(gamerule));
          }
        }
    }

    on_event_room_id(event: cc.Event.EventCustom){
        let udata =  event.getUserData()
        if(udata){
          let roomid = udata.roomid;
          if(roomid){
            this.set_string(this.view['KW_TEXT_ROOM_NUM'],"房间号:" + String(roomid));
          }
        }
    }

    on_event_play_count(event: cc.Event.EventCustom){
        let udata =  event.getUserData()
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

    on_event_play_score(event: cc.Event.EventCustom){
        let udata =  event.getUserData()
        if(udata){
            let scores = udata.scores;
            let total_str = ""
            for(let key in scores){
                let score_info = scores[key];
                let score = score_info.score;
                let player:Player = RoomData.getInstance().get_player(score_info.seatid);
                if(player){
                    let score_str = player.get_uname() + ": " + score + "\n";
                    total_str = total_str + score_str;
                }
            }
            console.log("hcc>>score_str: " , total_str);
            this.set_string(this.view["KW_TEXT_PLAY_SCORE"],total_str);
        }
    }    

    on_event_user_offline(event: cc.Event.EventCustom){
        let udata =  event.getUserData()
        cc.log("on_event_user_offline" , udata)
        let seatid = udata.seatid;
        if(seatid){
            let player = RoomData.getInstance().get_player(seatid);
            if(player){
                player.set_offline(true);
            }
        }
    }

    on_event_user_ready(event: cc.Event.EventCustom){
        let udata =  event.getUserData()
        cc.log("on_event_user_ready" , udata)
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

    on_event_game_start(event: cc.Event.EventCustom){
        let udata =  event.getUserData()
        cc.log("on_event_game_start" , udata)
        DialogManager.getInstance().show_weak_hint("游戏开始!")
        let script = this.get_script("GameSceneShowUI")
        if(script){
            script.clear_table()
        }
    }

    on_event_game_end(event: cc.Event.EventCustom){
        let udata =  event.getUserData()
        cc.log("on_event_game_end" , udata)
    }

    on_event_game_result(event: cc.Event.EventCustom){
        this.set_visible(this.view["KW_BTN_READY"],false);    
        this.scheduleOnce(function(){
            this.set_visible(this.view["KW_BTN_READY"],true);    
        },2)
    }

    on_event_game_total_result(event: cc.Event.EventCustom){
        this.scheduleOnce(function(){
            this.set_visible(this.view["KW_BTN_READY"],false);    
            this.set_visible(this.view["KW_BTN_BACK_LOBBY"],true);
        },2)
    }
}
