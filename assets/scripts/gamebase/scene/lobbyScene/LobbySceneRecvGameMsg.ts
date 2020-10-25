import UIController from '../../../framework/uibase/UIController';
import Response from '../../../framework/protocol/Response';
import DialogManager from '../../../framework/manager/DialogManager';
import Stype from '../../../framework/protocol/Stype';
import GameHoodleProto from '../../../framework/protocol/protofile/GameHoodleProto';
import SceneManager from '../../../framework/manager/SceneManager';
import GameScene from '../gameScene/GameScene';

const { ccclass, property } = cc._decorator;

@ccclass
export default class LobbySceneRecvGameMsg extends UIController {

    onLoad() {
        super.onLoad()
    }

    start() {
        super.start();
        this.add_protocol_delegate();
    }

    add_event_dispatcher() {
    }

    add_cmd_handler_map() {
        this._cmd_handler_map = {
            [GameHoodleProto.XY_ID.eLoginLogicRes]: this.on_event_login_game_logic.bind(this),
        }
    }

    on_recv_server_message(stype: number, ctype: number, body: any) {
        if (stype !== Stype.S_TYPE.GameHoodle) {
            return;
        }

        if (this._cmd_handler_map[ctype]) {
            this._cmd_handler_map[ctype].call(this, body);
        }
    }

    on_event_login_game_logic(body: any) {
        if (body && body.status == Response.SUCCESS) {
            SceneManager.getInstance().enter_scene_asyc(new GameScene());
        } else {
            DialogManager.getInstance().show_weak_hint("login game logic server failed");
        }
    }

}
