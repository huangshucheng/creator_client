import UIDialog from '../../framework/uibase/UIDialog';
import WeChatLogin from '../../framework/utils/WeChatLogin';
import EventManager from '../../framework/manager/EventManager';
import EventDefine from '../../framework/config/EventDefine';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameResultDialog extends UIDialog {

    onLoad(){
        super.onLoad()
    }

    start () {
        super.start();
        let _this = this;
        WeChatLogin.create_authorize_btn(this.view["KW_BTN_AUTH"]);
    }

    add_event_dispatcher(){
        EventManager.on(EventDefine.EVENT_CLICK_WECHAT_AUTH, this, this.on_click_wechat_auth.bind(this));
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"], this.on_click_close.bind(this));
        this.add_click_event(this.view["KW_BTN_CANCEL"], this.on_click_close.bind(this));
        this.add_click_event(this.view["KW_BTN_AUTH"], this.on_click_auth.bind(this));
    }

    on_click_wechat_auth(){
        console.log("on_click_wechat_auth>>>>>>>>>>>>");
        this.close();
    }

    /////////
    on_click_close(sender: cc.Component){
        this.close();
    }

    on_click_auth(sender:cc.Component){
        this.close();
    }

    close(){
        super.close();
        WeChatLogin.hide_auth_btn();
    }

}