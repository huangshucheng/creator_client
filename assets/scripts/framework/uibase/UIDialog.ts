import UIController from './UIController';
import DialogManager from '../manager/DialogManager';
const {ccclass, property} = cc._decorator;

@ccclass
export default class UIDialog extends UIController {

    _canTouchBackground:boolean = false;

    onLoad () {
        super.onLoad()
        if (cc.sys.os === cc.sys.OS_WINDOWS) {
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        }
    }

    start () {
        super.start();
        this.add_click_event(this.view["KW_PANEL_MASK"],this.on_click_background.bind(this))
    }

    close() {
        DialogManager.getInstance().remove_dialog_from_map(this.node)
        if(this.node){
            this.node.destroy();
        }
    }

    onKeyDown(event) {
        var macro = cc.macro;
        switch (event.keyCode) {
            case macro.KEY.escape:
                this.close()
                break;
        }
    }

    set_can_touch_background(canTouch:boolean){
        this._canTouchBackground = canTouch;
    }

    on_click_background(sender: cc.Component){
        if(this._canTouchBackground == false){
            return;
        }
        this.close();
    }
}
