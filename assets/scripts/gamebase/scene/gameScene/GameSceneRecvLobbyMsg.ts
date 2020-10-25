import UIController from '../../../framework/uibase/UIController';
import Response from '../../../framework/protocol/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import DialogManager from '../../../framework/manager/DialogManager';
import LobbyScene from '../lobbyScene/LobbyScene';
import RoomData from '../../common/RoomData';
import GameSendGameHoodleMsg from './sendMsg/GameSendGameHoodle';
import Stype from '../../../framework/protocol/Stype';
import LobbyProto from '../../../framework/protocol/protofile/LobbyProto';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSceneRecvLobbyMsg extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        super.start();
        this.add_protocol_delegate();
    }

    add_cmd_handler_map(){
        this._cmd_handler_map = {
            [LobbyProto.XY_ID.RES_LOGINLOBBY]: this.on_event_login_lobby.bind(this),
            [LobbyProto.XY_ID.RES_DESSOLVEROOM]: this.on_event_dessolve.bind(this),
            [LobbyProto.XY_ID.RES_EXITROOM]: this.on_event_exit_room.bind(this),
        }
    }

    on_recv_server_message(stype: number, ctype: number, body: any) {
        if (stype !== Stype.S_TYPE.Lobby) {
            return;
        }
        if (this._cmd_handler_map[ctype]) {
            this._cmd_handler_map[ctype].call(this, body);
        }
    }
    
    on_event_login_lobby(body:any){
        if (body.status == Response.SUCCESS) {
            GameSendGameHoodleMsg.send_check_link_game();
        }
    }

    on_event_dessolve(body:any){
        if (body){
            if (body.status == Response.SUCCESS){
                DialogManager.getInstance().show_weak_hint("对局已解散!")
                SceneManager.getInstance().enter_scene_asyc(new LobbyScene())
                RoomData.getInstance().clear_room_data();
            }else{
                DialogManager.getInstance().show_weak_hint("解散对局失败!")
            }
        }
    }

    on_event_exit_room(body:any){
    }
}
