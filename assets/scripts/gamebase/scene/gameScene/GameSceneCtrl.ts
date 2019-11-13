import UIController from '../../../framework/uibase/UIController';
import Log from '../../../framework/utils/Log';
import SceneManager from '../../../framework/manager/SceneManager';
import LobbyScene from '../lobbyScene/LobbyScene';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSceneCtrl extends UIController {

    onLoad () {
        super.onLoad()
        Log.info("GameSceneCtrl onLoad()")
    }

    start () {
        this.add_click_event(this.view["BTN_BACK"],this.on_click_back.bind(this))
    }

    on_click_back(sender:cc.Node){
        SceneManager.getInstance().enter_scene(new LobbyScene())
    }
}
