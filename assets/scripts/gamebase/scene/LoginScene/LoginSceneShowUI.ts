import UIController from '../../../framework/uibase/UIController';
import { ResourceManager } from '../../../framework/manager/ResourceManager';
import GameAppConfig from '../../../framework/config/GameAppConfig';
import HotUpdateNew from '../../../framework/hotfix/HotUpdateNew';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginSceneShowUI extends UIController {

    onLoad() {
        super.onLoad()
    }

    start () {
        this.show_version();
    }

    show_version() {
        this.set_string(this.view["KW_TEXT_VERSION"], HotUpdateNew.getInstance().getLocalVersion());
    }

}
