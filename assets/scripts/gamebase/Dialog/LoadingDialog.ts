import UIDialog from '../../framework/uibase/UIDialog';
import UIFunction from '../../framework/common/UIFunciton';

const { ccclass, property } = cc._decorator;

@ccclass
class LoadingDialog extends UIDialog {

    static show_layer() {
        return UIFunction.getInstance().add_prefab_to_scene("ui_prefabs/dialog/DialogLoading", "LoadingDialog")
    }

    onLoad(){
        super.onLoad()
    }

    start () {
        super.start();
        this.initUI();
    }

    initUI(){
        let loadingImg = this.view["KW_IMG_LOADING"];
        if (loadingImg ){
            loadingImg.runAction(cc.rotateBy(2, -360).repeatForever());
        }
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_PANEL_MASK"], this.on_click_close.bind(this))
    }

    on_click_close(sender: cc.Component){
    }
}

export = LoadingDialog;