import UIController from '../../../framework/uibase/UIController';
import Log from '../../../framework/utils/Log';
import SceneManager from '../../../framework/manager/SceneManager';
import LoginScene from '../LoginScene/LoginScene';
import GameScene from '../gameScene/GameScene';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneCtrl extends UIController {

    onLoad () {
        super.onLoad()
        Log.info("LobbySceneCtrl onLoad()")
        this.add_click_event(this.view["KW_BTN_SET"],this.on_click_set.bind(this))
        this.add_click_event(this.view["BTN_CREATE_ROOM"],this.on_click_create_room.bind(this))
    }

    start () {

    }

    on_click_set(sender:cc.Node) {
        SceneManager.getInstance().enter_scene(new LoginScene())
    }

    on_click_create_room(sender:cc.Node){
        let scene = new GameScene();
        SceneManager.getInstance().enter_scene(scene)
    }
}
