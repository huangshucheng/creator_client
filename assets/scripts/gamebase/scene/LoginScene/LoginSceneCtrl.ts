import UIController from '../../../framework/uibase/UIController';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginSceneCtrl extends UIController {

    onLoad() {
        super.onLoad()
        this.add_script("LoginSceneTouchEvent")
        this.add_script("LoginSceneInit")
        this.add_script("LoginSceneRecvMsg")
        this.add_script("LoginSceneShowUI")
    }

    start () {
    }
}
