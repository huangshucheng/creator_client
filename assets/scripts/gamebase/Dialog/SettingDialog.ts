import UIDialog from '../../framework/uibase/UIDialog';
import DialogManager from '../../framework/manager/DialogManager';
import LobbyScene from '../scene/lobbyScene/LobbyScene';
import SceneManager from '../../framework/manager/SceneManager';

const { ccclass, property } = cc._decorator;

@ccclass
export default class SettingDialog extends UIDialog {

    onLoad(){
        super.onLoad()
    }

    start () {
        this.add_button_event_listener()
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"],this.on_click_close.bind(this))
        this.add_click_event(this.view["KW_BTN_EXIT"],this.on_click_back.bind(this))
        
    }

    onDestroy(){

    }

    on_click_close(sender: cc.Component){
        this.close()
    }

    on_click_back(sender: cc.Component){
        SceneManager.getInstance().enter_scene_asyc(new LobbyScene())
        this.close()
    }
}