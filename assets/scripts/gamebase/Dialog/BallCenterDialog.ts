import UIDialog from '../../framework/uibase/UIDialog';

const { ccclass, property } = cc._decorator;

@ccclass
export default class BallCenterDialog extends UIDialog {

    onLoad(){
        super.onLoad()
    }

    start () {
        this.add_button_event_listener()
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"],this.on_click_close.bind(this))
        
    }

    onDestroy(){

    }

    /////////
    on_click_close(sender: cc.Component){
        this.close();
    }
    
    onKeyDown(event: cc.Event) {
        super.onKeyDown(event);
    }

}