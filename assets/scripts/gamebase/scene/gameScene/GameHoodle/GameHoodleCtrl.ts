//游戏界面控制器

import UIController from "../../../../framework/uibase/UIController";
import UIFunction from "../../../../framework/common/UIFunciton";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameHoodleCtrl extends UIController {

    onLoad () {
        super.onLoad();
        this.add_script("GameHoodleTouchEvent")
        this.add_script("GameHoodleRecvMsg")
        this.add_script("GameHoodleShowUI")
    }

    start () {
        //test
        // let showUI = this.get_script("GameHoodleShowUI");
        // showUI.test_boarn_ball()
    }

}
