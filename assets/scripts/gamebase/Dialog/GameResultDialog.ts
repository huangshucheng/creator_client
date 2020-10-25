import UIDialog from '../../framework/uibase/UIDialog';
import UIFunction from '../../framework/common/UIFunciton';

const { ccclass, property } = cc._decorator;

@ccclass
class GameResultDialog extends UIDialog {

    static show_layer() {
        return UIFunction.getInstance().add_prefab_to_scene("ui_prefabs/dialog/DialogGameResult", "GameResultDialog")
    }

    onLoad(){
        super.onLoad()
    }

    start () {
        super.start();
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"],this.on_click_close.bind(this))
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

}

export = GameResultDialog;