import UIDialog from '../../framework/uibase/UIDialog';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameResultDialog extends UIDialog {

    onLoad(){
        super.onLoad()
    }

    start () {
        this.add_button_event_listener()
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"],this.on_click_close.bind(this))
        this.add_click_event(this.view["KW_PANEL_MASK"],this.on_click_continue.bind(this))
        
    }

    onDestroy(){

    }

    /////////
    //标题
    set_title_text(text:string){
        this.set_string(this.view["KW_TEXT_TITLE"], text);
    }
    
    //分数
    set_score_text(text:string){
        this.set_string(this.view["KW_UI_LABEL_SCORE"], text);
    }

    //奖励文字
    set_reward_text(text:string){
        this.set_string(this.view["KW_UI_LABEL_REWARD"], text);
    }

    //奖励图标
    set_reward_img(img_path:string){
        this.set_sprite(this.view["KW_UI_IMG_REWARD"], img_path);
    }

    /////////
    on_click_close(sender: cc.Component){
        this.close();
    }

    on_click_continue(sender: cc.Component){
        this.close();
    }

    onKeyDown(event: cc.Event) {
        super.onKeyDown(event);
    }

}