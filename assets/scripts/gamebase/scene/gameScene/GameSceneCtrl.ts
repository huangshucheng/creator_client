import UIController from '../../../framework/uibase/UIController';
import Log from '../../../framework/utils/Log';
import SceneManager from '../../../framework/manager/SceneManager';
import LobbyScene from '../lobbyScene/LobbyScene';
import DialogManager from '../../../framework/manager/DialogManager';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSceneCtrl extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        this.add_click_event(this.view["BTN_SETTING"],this.on_click_back.bind(this))
    }

    on_click_back(sender:cc.Component){
        // SceneManager.getInstance().enter_scene_asyc(new LobbyScene())
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogSetting","SettingDialog")
    }
}
