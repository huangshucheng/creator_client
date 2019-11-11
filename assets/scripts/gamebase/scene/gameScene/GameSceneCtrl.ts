import UIController from '../../../framework/uibase/UIController';
import Log from '../../../framework/utils/Log';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSceneCtrl extends UIController {

    onLoad () {
        super.onLoad()
        Log.info("GameSceneCtrl onLoad()")
    }

    start () {

    }
}
