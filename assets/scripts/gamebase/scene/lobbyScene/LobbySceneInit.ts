import UIController from '../../../framework/uibase/UIController';
import Log from '../../../framework/utils/Log';
import LobbySceneSendMsg from './LobbySceneSendAuthMsg';
import Storage from '../../../framework/utils/Storage';
import LSDefine from '../../../framework/config/LSDefine';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneInit extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        LobbySceneSendMsg.send_get_center_info();
    }

}
