//游戏界面

import UIController from "../../../../framework/uibase/UIController";
import UIFunction from "../../../../framework/common/UIFunciton";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameHoodleCtrl extends UIController {

    _hoodleBall = null;

    onLoad () {
        super.onLoad();
        this.add_script("GameHoodleTouchEvent")
    }

    start () {
      this.initUI()
    }

    showBall(){
        let ball2 = UIFunction.getInstance().add_prefab_to_node(this.view["KW_GAME_TABLE"],"ui_prefabs/games/HoodleBall","HoodleBallCtrl");
        ball2.setPosition(cc.v2(0,0))
        this._hoodleBall = UIFunction.getInstance().add_prefab_to_node(this.view["KW_GAME_TABLE"],"ui_prefabs/games/HoodleBall","HoodleBallCtrl");
        this._hoodleBall.setPosition(cc.v2(100,100))
    }

    initUI(){
        this.showBall()
    }

    get_self_ball(){
        return this._hoodleBall;
    }

}
