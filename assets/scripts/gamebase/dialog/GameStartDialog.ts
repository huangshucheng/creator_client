import UIDialog from '../../framework/uibase/UIDialog';
import UIFunction from '../../framework/common/UIFunciton';

const { ccclass, property } = cc._decorator;

@ccclass
class GameStartDialog extends UIDialog {

    static show_layer() {
        return UIFunction.getInstance().add_prefab_to_scene("ui_prefabs/dialog/DialogGameStart", "GameStartDialog")
    }

    onLoad(){
        super.onLoad()
    }

    start () {
        super.start();
        this.initUI();
        this.set_can_touch_background(false);
    }

    initUI(){
        let gameStartText = this.view["KW_TEXT_GAME_START"];
        if (gameStartText){
            this.set_string(gameStartText,"游戏开始");
            gameStartText.stopAllActions();
            gameStartText.setScale(0);
            let scaleTo = cc.scaleTo(0.2, 1).easing(cc.easeBackOut());
            let delay = cc.delayTime(0.3);
            let reverse = cc.scaleTo(0.1,0).easing(cc.easeBackIn());
            let callFunc = cc.callFunc(function() {
                this.close();
            }.bind(this));
            gameStartText.runAction(cc.sequence(scaleTo, delay, reverse, callFunc));
        }
    }
}

export = GameStartDialog;