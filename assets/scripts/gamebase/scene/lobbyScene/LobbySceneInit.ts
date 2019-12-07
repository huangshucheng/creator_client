import UIController from '../../../framework/uibase/UIController';
import Log from '../../../framework/utils/Log';
import LobbySendAuthMsg from './sendMsg/LobbySendAuthMsg';
import Storage from '../../../framework/utils/Storage';
import LSDefine from '../../../framework/config/LSDefine';

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
