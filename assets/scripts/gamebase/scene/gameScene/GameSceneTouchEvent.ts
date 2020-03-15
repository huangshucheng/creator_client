import UIController from '../../../framework/uibase/UIController';
import DialogManager from '../../../framework/manager/DialogManager';
import GameSendGameHoodleMsg from './sendMsg/GameSendGameHoodle';
import RoomData from '../../common/RoomData';
import SceneManager from '../../../framework/manager/SceneManager';
import LobbyScene from '../lobbyScene/LobbyScene';

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
        this.add_click_event(this.view["KW_BTN_BACK_LOBBY"],this.on_click_back_lobby)
    }

    on_click_setting(sender:cc.Component){
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogSetting","SettingDialog")
        
    }

    on_click_setting2(sender:cc.Component){
        //test
        // GameSendGameHoodleMsg.send_login_logic();
        // GameSendGameHoodleMsg.send_check_link_game();

        // let script = this.get_script("GameSceneShowUI")
        // script.show_gamehoodle(true)
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogGameResult","GameResultDialog",function(resNode:cc.Node){
            if(resNode){
                let script = resNode.getComponent("GameResultDialog");
                if (script){
                    script.set_title_text("恭喜恭喜")
                    script.set_reward_text("获得猪一头！")
                    script.set_score_text("text1111:+1\n" + "test2222:-1");
                }
            }
        })

    }

    on_click_ready(sender: cc.Component){
        GameSendGameHoodleMsg.send_user_ready()
    }

    on_click_back_lobby(sender: cc.Component){
        SceneManager.getInstance().enter_scene_asyc(new LobbyScene());
    }

}
