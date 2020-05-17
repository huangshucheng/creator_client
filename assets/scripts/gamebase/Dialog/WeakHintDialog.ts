import DialogManager from '../../framework/manager/DialogManager';
import UIController from '../../framework/uibase/UIController';

const { ccclass, property } = cc._decorator;

@ccclass
export default class WeakHintDialog extends UIController {

    _data: string = "";

    onLoad(){
        super.onLoad()
    }

    start () {
        let size = this.view["KW_UI_BACKGROUND"].getContentSize()
        this.view["KW_UI_BACKGROUND"].setContentSize(size.width * (this._data.length / 5), size.height)

        this.set_string(this.view["KW_TEXT_WEAK_HINT"], this._data)
        this.node.opacity = 0
        let _this = this
        this.node.runAction(cc.sequence(cc.fadeIn(0.1), cc.delayTime(1), cc.fadeOut(0.5), cc.callFunc(function () {
            _this.close()
        }.bind(this))))
    }

    show(str: string) {
        this._data = str
        this.node.active = true
    }

    move() {
        this.node.runAction(cc.moveBy(0.1, new cc.Vec2(0, 100)))
    }

    close() {
        this.node.destroy();
        DialogManager.getInstance().dequeue_weakhint()
    }

}