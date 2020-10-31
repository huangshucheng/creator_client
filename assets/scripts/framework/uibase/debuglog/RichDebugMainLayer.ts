import UIController from "../UIController";
import RichDebug from "./RichDebug";
import DialogManager from '../../manager/DialogManager';
import UIFunction from "../../common/UIFunciton";

let LAYER_CLASS_NAME = "RichDebugMainLayer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RichDebugMainLayer extends UIController {

    _frameCount = 0;
    _time = 0;

    static async show_layer() {
        if (cc.director.getScene().getChildByName(LAYER_CLASS_NAME)) {
            console.log("已经存在一个debug-main")
            return
        }
        let node = await UIFunction.getInstance().add_prefab_to_scene_async("ui_prefabs/debug/RichDebugMain", LAYER_CLASS_NAME);
        if (node) {
            node.name = LAYER_CLASS_NAME;
            node.zIndex = 499;
            node.parent = null;
            cc.game.addPersistRootNode(node);
            node.x = node.width / 2;
            node.y = node.height / 2;
        }
    }

    static hide_layer(){
        let node = cc.director.getScene().getChildByName(LAYER_CLASS_NAME);
        if (node) {
            node.destroy();
        }
    }

    start(){
        super.start();
        this.initUI()
        cc.game.on(RichDebug.UPDATE_DEBUG_INFO_KEY, this.update_debug_log_info.bind(this), this);
    }

    onDestroy() {
        cc.game.off(RichDebug.UPDATE_DEBUG_INFO_KEY, this.update_debug_log_info.bind(this), this);
    }

    //按钮点击事件
    add_button_event_listener() {
        this.add_click_event(this.view["btn_debug"], this.on_click_debug.bind(this))
    }

    on_click_debug(sender:cc.Component){
        if (!DialogManager.getInstance().get_layer("RichDebugLogLayer")) {
            DialogManager.getInstance().show_poplayer("RichDebugLogLayer");
        }else{
            DialogManager.getInstance().close_layer("RichDebugLogLayer");
        }
    }

    update_debug_log_info(data:any){
        this.set_string(this.view["lbt_error"], String(RichDebug.get_debuginfo().errors));
        this.set_string(this.view["lbt_warn"], String(RichDebug.get_debuginfo().warns));
    }

    initUI(){
        this.node.opacity = 150;
        var posStart = this.node.position;
        this.node.on(cc.Node.EventType.TOUCH_START, (event) => {
            this.node.opacity = 230;
            posStart = event.getLocation();
        }, this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            let posEnd = event.getLocation();
            //计算差异
            let pos = posEnd.sub(posStart);
            let posNode = this.node.position;
            posNode = posNode.add(pos);
            if (posNode.x < this.node.width / 2) {
                posNode.x = this.node.width / 2;
            }
            if (posNode.x > cc.winSize.width - this.node.width / 2) {
                posNode.x = cc.winSize.width - this.node.width / 2
            }
            if (posNode.y < this.node.height / 2) {
                posNode.y = this.node.height / 2;
            }
            if (posNode.y > cc.winSize.height - this.node.height / 2) {
                posNode.y = cc.winSize.height - this.node.height / 2;
            }
            this.node.position = posNode;
            posStart = posEnd;
        }, this)
        this.node.on(cc.Node.EventType.TOUCH_END, (event) => {
            this.node.opacity = 150;
        }, this)
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
            this.node.opacity = 150;
        }, this)
    }

    update(dt:number) {
        this._time += dt;
        this._frameCount++;
        if (this._time >= 1) {
            let frameStr = `${this._frameCount - 1}`;
            this.set_string(this.view["lbt_fps"], frameStr);
            this._time = 0;
            this._frameCount = 0;
        }
    }

}