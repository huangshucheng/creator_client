import UIController from './UIController';
import DialogManager from '../manager/DialogManager';
const {ccclass, property} = cc._decorator;

@ccclass
export default class UIDialog extends UIController {

    onLoad () {
        super.onLoad()
        if (cc.sys.os === cc.sys.OS_WINDOWS) {
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        }
    }

    start () {
        
    }

    close() {
        DialogManager.getInstance().remove_dialog_from_map(this.node)
        this.node.destroy();
    }

    onKeyDown(event) {
        var macro = cc.macro;
        console.log(event.keyCode)
        switch (event.keyCode) {
            case macro.KEY.escape:
                this.close()
                break;
        }
    }
}
