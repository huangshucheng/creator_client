import UIController from "../UIController";
import RichDebug from "./RichDebug";
import DialogManager from '../../manager/DialogManager';

const { ccclass, property } = cc._decorator;

@ccclass
export default class RichDebugControl extends UIController {
    _frameCount = 0;
    _time = 0;
    lbt_error = null;
    lbt_fail = null;
    lbt_warn = null;
    lbt_fps = null;

    onLoad(){
        super.onLoad();
        this.lbt_error = this.view["lbt_error"]
        this.lbt_fail = this.view["lbt_fail"]
        this.lbt_warn = this.view["lbt_warn"]
        this.lbt_fps = this.view["lbt_fps"]
        this.initUI()
    }

    start(){
        super.start();
    }

    //按钮点击事件
    add_button_event_listener() {
        this.add_click_event(this.view["btn_debug"], this.on_click_debug.bind(this))
    }

    on_click_debug(sender:cc.Component){
        if (!DialogManager.getInstance().get_layer("RichDebugLog")){
            DialogManager.getInstance().show_poplayer("RichDebugLog");
        }
    }

    initUI(){
        this.node.opacity = 150;
        var posStart = this.node.position;
        this.node.on(cc.Node.EventType.TOUCH_START, (event) => {
            this.node.opacity = 230;
            posStart = event.getLocation();
        }, this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            let posEnd = event.getLocation()
            //计算差异
            let pos = posEnd.sub(posStart)
            let posNode = this.node.position
            posNode = posNode.add(pos)
            if (posNode.x < this.node.width / 2) {
                posNode.x = this.node.width / 2
            }
            if (posNode.x > cc.winSize.width - this.node.width / 2) {
                posNode.x = cc.winSize.width - this.node.width / 2
            }
            if (posNode.y < this.node.height / 2) {
                posNode.y = this.node.height / 2
            }
            if (posNode.y > cc.winSize.height - this.node.height / 2) {
                posNode.y = cc.winSize.height - this.node.height / 2
            }
            this.node.position = posNode
            posStart = posEnd
        }, this)
        this.node.on(cc.Node.EventType.TOUCH_END, (event) => {
            this.node.opacity = 150
        }, this)
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
            this.node.opacity = 150
        }, this)
    }

    update(dt:number) {
        this._time += dt
        this._frameCount++
        if (this._time >= 1) {
            this.lbt_fps.string = `${this._frameCount - 1}`;
            this.lbt_error.string = RichDebug.debugInfo.errors;
            this.lbt_fail.string = RichDebug.debugInfo.errors;
            this.lbt_warn.string = RichDebug.debugInfo.warns;
            this._time = 0
            this._frameCount = 0
        }
    }

}