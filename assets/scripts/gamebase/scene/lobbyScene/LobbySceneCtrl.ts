import UIController from '../../../framework/uibase/UIController';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneCtrl extends UIController {

    onLoad () {
        super.onLoad()
        this.add_script("LobbySceneInit")
        this.add_script("LobbySceneTouchEvent")
        this.add_script("LobbySceneRecvAuthMsg")
        this.add_script("LobbySceneRecvGameMsg")
        this.add_script("LobbySceneShowUI")
    }

    start () {
    }

}
