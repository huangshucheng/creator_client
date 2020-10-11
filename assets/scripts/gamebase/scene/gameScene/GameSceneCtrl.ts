import UIController from '../../../framework/uibase/UIController';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSceneCtrl extends UIController {

    onLoad () {
        super.onLoad()
        // this.add_script("EnablePhysics")
        this.add_script("GameSceneShowUI")
        this.add_script("GameSceneTouchEvent")
        this.add_script("GameSceneRecvLobbyMsg")
        this.add_script("GameSceneRecvAuthMsg")
        this.add_script("GameSceneInit")
    }

    start () {
    }

}
