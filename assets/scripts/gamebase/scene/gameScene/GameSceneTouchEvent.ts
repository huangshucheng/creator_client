import UIController from '../../../framework/uibase/UIController';
import DialogManager from '../../../framework/manager/DialogManager';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSceneTouchEvent extends UIController {

    onLoad() {
        super.onLoad()
    }

    start () {
        this.add_button_event_listener()
    }

    add_button_event_listener(){
        this.add_click_event(this.view["BTN_SETTING"],this.on_click_back)
    }

    on_click_back(sender:cc.Component){
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogSetting","SettingDialog")
    }

}
