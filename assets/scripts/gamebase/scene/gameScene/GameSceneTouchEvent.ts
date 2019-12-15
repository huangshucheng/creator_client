import UIController from '../../../framework/uibase/UIController';
import DialogManager from '../../../framework/manager/DialogManager';
import GameSendGameHoodleMsg from './sendMsg/GameSendGameHoodle';

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
        this.add_click_event(this.view["BTN_SETTING"],this.on_click_setting)
        this.add_click_event(this.view["BTN_SETTING_2"],this.on_click_setting2)
        this.add_click_event(this.view["KW_BTN_READY"],this.on_click_ready)
    }

    on_click_setting(sender:cc.Component){
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogSetting","SettingDialog")
        
    }

    on_click_setting2(sender:cc.Component){
        GameSendGameHoodleMsg.send_login_logic();
        GameSendGameHoodleMsg.send_check_link_game();
    }

    on_click_ready(sender: cc.Component){
        GameSendGameHoodleMsg.send_user_ready()
    }

}
