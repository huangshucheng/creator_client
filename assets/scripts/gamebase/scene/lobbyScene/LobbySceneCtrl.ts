import UIController from '../../../framework/uibase/UIController';
import Log from '../../../framework/utils/Log';
import SceneManager from '../../../framework/manager/SceneManager';
import LoginScene from '../LoginScene/LoginScene';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneCtrl extends UIController {

    onLoad () {
        super.onLoad()
        Log.info("LobbySceneCtrl onLoad()")
        this.add_click_event(this.view["KW_BTN_SET"],this.on_click_set.bind(this))
    }

    start () {

    }

    on_click_set(sender:cc.Node) {
        SceneManager.getInstance().enter_scene(new LoginScene())
    }
}
