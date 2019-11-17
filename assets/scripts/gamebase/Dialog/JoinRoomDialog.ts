import UIDialog from '../../framework/uibase/UIDialog';
import DialogManager from '../../framework/manager/DialogManager';

const { ccclass, property } = cc._decorator;

@ccclass
export default class JoinRoomDialog extends UIDialog {

    onLoad(){
        super.onLoad()
        cc.log("JoinRoomDialog")
    }

    start () {
        console.log("LoginSceneTouchEvent>>start")
        this.add_button_event_listener()
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"],this.on_click_close.bind(this))
        
    }

    onDestroy(){

    }

    on_click_close(sender: cc.Node){
        this.close()
    }
}