import UIController from '../../../framework/uibase/UIController';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginSceneShowUI extends UIController {

    onLoad() {
        super.onLoad()
        console.log("LoginSceneShowUI onload")
    }

    start () {
        console.log("LoginSceneShowUI>>start")
    }

}
