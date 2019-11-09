import UIController from '../../../framework/uibase/UIController';
import Log from '../../../framework/utils/Log';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneCtrl extends UIController {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    onLoad () {
        Log.info("LobbySceneCtrl onLoad()")
    }

    start () {

    }
}
