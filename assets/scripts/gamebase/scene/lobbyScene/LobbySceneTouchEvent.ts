import UIController from '../../../framework/uibase/UIController';
import SceneManager from '../../../framework/manager/SceneManager';
import GameScene from '../gameScene/GameScene';
import LoginScene from '../LoginScene/LoginScene';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneTouchEvent extends UIController {

    onLoad() {
        super.onLoad()
    }

    start () {
        console.log("LoginSceneTouchEvent>>start")
        this.add_button_event_listener()
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_SET"],this.on_click_set.bind(this))
        this.add_click_event(this.view["BTN_CREATE_ROOM"],this.on_click_create_room.bind(this))
    
    }

    on_click_set(sender:cc.Node) {
        SceneManager.getInstance().enter_scene_asyc(new LoginScene())
    }

    on_click_create_room(sender:cc.Node){
        let scene = new GameScene();
        SceneManager.getInstance().enter_scene_asyc(scene)
    }
}
