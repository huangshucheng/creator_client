import UIDialog from '../../framework/uibase/UIDialog';
import DialogManager from '../../framework/manager/DialogManager';
import Storage from '../../framework/utils/Storage';
import LSDefine from '../../framework/config/LSDefine';
import LobbySceneSendAuthMsg from '../scene/lobbyScene/sendMsg/LobbySendAuthMsg';
import SceneManager from '../../framework/manager/SceneManager';
import LoginScene from '../scene/LoginScene/LoginScene';
import UserInfo from '../../framework/common/UserInfo';

const { ccclass, property } = cc._decorator;

@ccclass
export default class MyCenterDialog extends UIDialog {

    onLoad(){
        super.onLoad()
    }

    start () {
        this.add_button_event_listener()
        this.initUI()
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"],this.on_click_close.bind(this))
        this.add_click_event(this.view["KW_BTN_EXIT"],this.on_click_exit.bind(this))
        
    }

    initUI(){

        this.set_string(this.view["KW_TEXT_NAME"],"昵称：" + UserInfo.get_unick())
        this.set_string(this.view["KW_TEXT_ACCOUNT"],"id: " + UserInfo.get_numberid())
    }

    onDestroy(){

    }

    on_click_close(sender: cc.Component){
        this.close()
    }

    on_click_exit(sender: cc.Component){
        LobbySceneSendAuthMsg.send_login_out()
        SceneManager.getInstance().enter_scene_asyc(new LoginScene())
        this.close()
    }

}