import UIController from '../../../framework/uibase/UIController';
import EventManager from '../../../framework/manager/EventManager';
import { Cmd, CmdName } from "../../../framework/protocol/GameHoodleProto";
import Response from '../../../framework/config/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import DialogManager from '../../../framework/manager/DialogManager';
import LobbyScene from '../lobbyScene/LobbyScene';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSceneRecvGameHoodleMsg extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        this.add_event_dispatcher()
    }

    add_event_dispatcher(){
        EventManager.on(CmdName[Cmd.eDessolveRes], this, this.on_event_dessolve)
        EventManager.on(CmdName[Cmd.eJoinRoomRes], this, this.on_event_exit_room)
        EventManager.on(CmdName[Cmd.eCheckLinkGameRes], this, this.on_event_check_link)
        EventManager.on(CmdName[Cmd.eUserInfoRes], this, this.on_event_user_info)
        EventManager.on(CmdName[Cmd.eRoomInfoRes], this, this.on_event_room_info)
        EventManager.on(CmdName[Cmd.eRoomIdRes], this, this.on_event_room_id)
        EventManager.on(CmdName[Cmd.ePlayCountRes], this, this.on_event_play_count)
        EventManager.on(CmdName[Cmd.eUserReadyRes], this, this.on_event_user_ready)
        EventManager.on(CmdName[Cmd.eGameStartRes], this, this.on_event_game_start)
        EventManager.on(CmdName[Cmd.eGameResultRes], this, this.on_event_game_result)

    }

    on_event_dessolve(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        if(udata){
            if(udata.status == Response.OK){
                DialogManager.getInstance().show_weak_hint("解散房间成功!")
                SceneManager.getInstance().enter_scene_asyc(new LobbyScene())
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

    }

    on_event_room_info(event: cc.Event.EventCustom){

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
          if(playcount && totalplaycount){
            this.set_string(this.view['KW_TEXT_PLAY_COUNT'],"局数:" + String(playcount) + "/" + String(totalplaycount));
          }
        }
    }    

    on_event_user_ready(event: cc.Event.EventCustom){

    }

    on_event_game_start(event: cc.Event.EventCustom){

    }

    on_event_game_result(event: cc.Event.EventCustom){

    }
}
