//小球

import UIController from "../../../../framework/uibase/UIController";

let SHOOT_POWER = 50;

const {ccclass, property} = cc._decorator;

@ccclass
export default class HoodleBallCtrl extends UIController {
    _rigid_body = null;

    onLoad () {
        super.onLoad()
    }

    start () {
        console.log("HoodleBallCtrl")
        this._rigid_body = this.getComponent(cc.RigidBody);
        let _this = this;
        /*
        this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            console.log("hcc>>ball>>TOUCH_START")
        }.bind(this), this);

        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
            var w_pos = e.getLocation();
            var dst = _this.node.parent.convertToNodeSpaceAR(w_pos);
            // var src = this.node.getPosition();
            // _this.node.setPosition(dst);
        }.bind(this), this);

        this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
            // console.log("hcc>>ball>>TOUCH_END")
            _this.shoot_at(_this.node.getPosition())
        }.bind(this), this);

        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
            // console.log("hcc>>ball>>TOUCH_CANCEL")
            _this.shoot_at(_this.node.getPosition())
        }.bind(this), this);
        */
    }

    shoot_at(dst: cc.Vec2){
         // 冲量: 给这个球杆一个方向的冲量，矢量，大小，有方向;
        // 方向问题:  src---> dst;
        var src = cc.v2(this.node.x - 100 ,this.node.y - 100);
        var dir = dst.sub(src)
        // 大小问题;
        var cue_len_half = this.node.width * 0.5;
        var len = dir.mag()
        var distance = len - cue_len_half;

        var power_x = distance * SHOOT_POWER * dir.x / len;
        var power_y = distance * SHOOT_POWER * dir.y / len;

        // applyLinearImpulse(冲量大小向量, 球杆的原点转成世界坐标, true)
        if(this._rigid_body){
            this._rigid_body.applyLinearImpulse(cc.v2(power_x, power_y), this.node.convertToWorldSpaceAR(cc.v2(0, 0)), true);
        }
    }

}
