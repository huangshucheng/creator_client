import UIDialog from '../../framework/uibase/UIDialog';

const { ccclass, property } = cc._decorator;

@ccclass
export default class RewardDialog extends UIDialog {

    onLoad(){
        super.onLoad()
        this.clear_layout();
    }

    start () {
        super.start();
        this.set_can_touch_background(true);

        let comp_text: cc.Node = this.view["KW_TEXT_TITLE"];
        if (comp_text) {
            let seq = cc.sequence(cc.fadeOut(1.0), cc.fadeIn(1.0))
            comp_text.runAction(cc.repeatForever(seq));
        }

        let layout:cc.Node = this.view["KW_LAYOUT"];
        if(layout){
            layout.setScale(0);
            layout.runAction(cc.scaleTo(0.2, 1.0, 1.0).easing(cc.easeBackOut()));
        }

    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"],this.on_click_close.bind(this))

    }

    on_click_close(sender: cc.Component){
        this.close()
    }

    clear_layout(){
        let layout =  this.view["KW_LAYOUT"];
        if (layout){
            layout.removeAllChildren();
        }
    }

    add_item():cc.Node{
        let item = this.view["KW_ITEM_NODE"];
        if(item){
            let layout =  this.view["KW_LAYOUT"];
            if(layout){
               return this.add_to_node(layout, item);
            }
        }
        return null;
    }

}