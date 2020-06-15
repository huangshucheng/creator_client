import UIController from '../../../framework/uibase/UIController';
import Response from '../../../framework/protocol/Response';
import { Stype } from '../../../framework/protocol/Stype';
import { Cmd } from '../../../framework/protocol/GameHoodleProto';
import SceneManager from '../../../framework/manager/SceneManager';
import LobbyScene from '../lobbyScene/LobbyScene';
import DialogManager from '../../../framework/manager/DialogManager';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginSceneRecvGameMsg extends UIController {

    onLoad() {
        super.onLoad()
    }

    start () {
        super.start();
        this.add_protocol_delegate();
    }

    add_cmd_handler_map(){
        this._cmd_handler_map = {
            [Cmd.eLoginLogicRes]: this.on_event_login_logic,
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

    on_event_login_logic(body: any) {
        if (body) {
            if (body.status == Response.OK) {
                DialogManager.getInstance().show_weak_hint("登录游戏服务成功!");
                SceneManager.getInstance().enter_scene_asyc(new LobbyScene());
            }
        }
    }
}
