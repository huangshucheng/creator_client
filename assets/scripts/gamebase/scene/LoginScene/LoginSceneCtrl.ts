import UIController from '../../../framework/uibase/UIController';
import Log from '../../../framework/utils/Log';
import EventManager from '../../../framework/manager/EventManager';
import EventDefine from '../../../framework/config/EventDefine';
import NetWork from '../../../framework/network/NetWork';
import {Stype } from '../../../framework/protocol/Stype';
import { Cmd } from "./../../../framework/protocol/AuthProto";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginSceneCtrl extends UIController {

    onLoad() {
        super.onLoad()
        console.log("LoginSceneCtrl onload")
        this.add_script("LoginSceneTouchEvent")
        this.add_script("LoginSceneInit")
        this.add_script("LoginSceneRecvMsg")
        this.add_script("LoginSceneShowUI")
    }

    start () {
        console.log("LoginSceneCtrl")
    }
}
