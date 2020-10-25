import UIFunction from '../../common/UIFunciton';
import UIDialog from "../UIDialog";

const { ccclass, property } = cc._decorator;

@ccclass
class RichDebugLog extends UIDialog {

    static show_layer() {
        return UIFunction.getInstance().add_prefab_to_scene("ui_prefabs/debug/RichDebugPanel", "RichDebugLog")
    }

    onLoad(){
        super.onLoad()
    }

    start () {
        super.start();
    }

    add_event_dispatcher(){
    }

    add_button_event_listener(){
        this.add_click_event(this.view["btn_close"], this.on_click_close.bind(this));
        this.add_check_click(this.view["toggle_frame"], this.on_toggle_click.bind(this));
    }

    on_click_close(sender: cc.Component){
        this.close();
    }

    on_toggle_click(toggle:any,type:any){
        if(UIFunction.getInstance().is_checked(toggle)){
            cc.debug.setDisplayStats(false);
        }else{
            cc.debug.setDisplayStats(true);
        }
    }

    close(){
        super.close();
    }

}

export = RichDebugLog;