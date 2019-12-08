import UIController from '../../../framework/uibase/UIController';
import LobbySendAuthMsg from './sendMsg/LobbySendAuthMsg';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneInit extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        LobbySendAuthMsg.send_get_center_info();
    }

}
