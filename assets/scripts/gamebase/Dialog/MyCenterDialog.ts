import UIDialog from '../../framework/uibase/UIDialog';
import SceneManager from '../../framework/manager/SceneManager';
import LoginScene from '../scene/loginScene/LoginScene';
import UserInfo from '../../framework/common/UserInfo';
import UIFunction from '../../framework/common/UIFunciton';
import SendAuthMsg from '../sendMsg/SendAuthMsg';

const { ccclass, property } = cc._decorator;

@ccclass
class MyCenterDialog extends UIDialog {

    static show_layer() {
        return UIFunction.getInstance().add_prefab_to_scene("ui_prefabs/dialog/DialogMyCenter", "MyCenterDialog")
    }

    onLoad(){
        super.onLoad()
    }

    start () {
        super.start();
        this.initUI()
        this.set_can_touch_background(true);
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"],this.on_click_close.bind(this))
        this.add_click_event(this.view["KW_BTN_EXIT"],this.on_click_exit.bind(this))
        
    }

    initUI(){
        this.set_string(this.view["KW_TEXT_NAME"],"昵称：" + UserInfo.get_unick())
        this.set_string(this.view["KW_TEXT_ACCOUNT"],"账号: " + UserInfo.get_numberid())
    }

    on_click_close(sender: cc.Component){
        this.close()
    }

    on_click_exit(sender: cc.Component){
        SendAuthMsg.send_login_out()
        SceneManager.getInstance().enter_scene_asyc(new LoginScene())
        this.close()
    }
}

export = MyCenterDialog;