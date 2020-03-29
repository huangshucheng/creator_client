import UIController from '../../../framework/uibase/UIController';
import LobbySendAuthMsg from './sendMsg/LobbySendAuthMsg';
import LobbySendGameHoodleMsg from './sendMsg/LobbySendGameHoodle';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneInit extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        LobbySendAuthMsg.send_get_center_info();
        LobbySendGameHoodleMsg.send_get_ugame_info();
    }

}
