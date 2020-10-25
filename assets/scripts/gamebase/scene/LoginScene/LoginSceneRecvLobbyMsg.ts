import UIController from '../../../framework/uibase/UIController';
import Response from '../../../framework/protocol/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import LobbyScene from '../lobbyScene/LobbyScene';
import DialogManager from '../../../framework/manager/DialogManager';
import Stype from '../../../framework/protocol/Stype';
import LobbyProto from '../../../framework/protocol/protofile/LobbyProto';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginSceneRecvLobbyMsg extends UIController {

    onLoad() {
        super.onLoad()
    }

    start () {
        super.start();
        this.add_protocol_delegate();
    }

    add_cmd_handler_map(){
        this._cmd_handler_map = {
            [LobbyProto.XY_ID.RES_LOGINLOBBY]: this.on_event_login_lobby.bind(this),
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

    on_event_login_lobby(body: any) {
        if (body) {
            if (body.status == Response.SUCCESS) {
                DialogManager.getInstance().show_weak_hint("登录大厅成功!");
                SceneManager.getInstance().enter_scene_asyc(new LobbyScene());
            }
        }
    }
}
