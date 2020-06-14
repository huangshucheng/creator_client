import UIController from '../../../framework/uibase/UIController';
import GameAppConfig from '../../../framework/config/GameAppConfig';
import HotUpdateNew from '../../../framework/hotfix/HotUpdateNew';
import WeChatLogin from '../../../framework/utils/WeChatLogin';
import PlatForm from '../../../framework/config/PlatForm';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginSceneShowUI extends UIController {

    onLoad() {
        super.onLoad()
    }

    start () {
        super.start();
        this.show_version();

        //微信小游戏线上环境
        if(GameAppConfig.IS_WECHAT_GAME_ONLINE && PlatForm.isWeChatGame()){ 
            this.set_visible(this.view["KW_IMG_LOGIN_BG"],false);
            this.set_visible(this.view["KW_BTN_GUEST_LOGIN"],false);
            this.set_posX(this.view["KW_BTN_WX_LOGIN"],0);
        }

        //显示微信小游戏登录按钮
        WeChatLogin.create_authorize_btn(this.view["KW_BTN_WX_LOGIN"]);
    }

    show_version() {
        this.set_string(this.view["KW_TEXT_VERSION"], HotUpdateNew.getInstance().getLocalVersion());
    }

}
