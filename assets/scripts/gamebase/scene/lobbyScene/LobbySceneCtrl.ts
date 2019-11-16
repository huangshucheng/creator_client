import UIController from '../../../framework/uibase/UIController';
import Log from '../../../framework/utils/Log';
import SceneManager from '../../../framework/manager/SceneManager';
import LoginScene from '../LoginScene/LoginScene';
import GameScene from '../gameScene/GameScene';
import LobbySceneSendMsg from './LobbySceneSendMsg';
import Storage from '../../../framework/utils/Storage';
import LSDefine from '../../../framework/config/LSDefine';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneCtrl extends UIController {

    onLoad () {
        super.onLoad()
        this.add_script("LobbySceneInit")
        this.add_script("LobbySceneTouchEvent")
    }

    start () {
    }

}
