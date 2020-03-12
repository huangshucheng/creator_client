//小球控制器
import UIController from "../../../../framework/uibase/UIController";

let SHOOT_POWER = 0.1;
let ROUND_HEAD_PATH = "lobby/roundheader/round_1";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HoodleBallCtrl extends UIController {
    _rigid_body:cc.RigidBody = null;
    _is_active_ball: boolean = false;
    _ball_name: string = "";

    onLoad () {
        super.onLoad()
    }

    start () {
        this._rigid_body = this.getComponent(cc.RigidBody);
    }

    //往inDest发射
    shoot_at(inDst: cc.Vec2){
        // 冲量: 给这个球一个方向的冲量，矢量，大小，有方向;
        // 方向问题:  src---> dst;
        let dst = this.node.parent.convertToNodeSpaceAR(inDst);
        var src = cc.v2(this.node.x,this.node.y);
        var dir = dst.sub(src)
        // 大小问题;
        var distance = dir.mag()//起点到终点的长度
        var power_x = distance * SHOOT_POWER * dir.x;
        var power_y = distance * SHOOT_POWER * dir.y;

        // applyLinearImpulse(冲量大小向量, 原点转成世界坐标, true)
        if(this._rigid_body){
            this._rigid_body.applyLinearImpulse(cc.v2(power_x, power_y), this.node.convertToWorldSpaceAR(cc.v2(0, 0)), true);
        }
    }

    set_name(name_str: string){
        this.set_string(this.view["KW_TEXT_NAME"],name_str);
        this._ball_name = name_str;
    }

    set_img_face(uface: number){
        let ufaceImg = ROUND_HEAD_PATH + String(uface);
        this.set_sprite_asyc(this.view["KW_IMG_HEAD"],ufaceImg)
        console.log("hcc>>HoodleBallCtrl>>set_img_face")
    }

    ////////////////////////////////碰撞事件
    //是否当前我的回合
    set_is_active_turn(flag:boolean){
        this._is_active_ball = flag;
    }

    // 物理碰撞
    // 只在两个碰撞体开始接触时被调用一次 001
    onBeginContact(contact:cc.PhysicsContact, selfCollider:cc.PhysicsCollider, otherCollider:cc.PhysicsCollider) {
        console.log("onBeginContact ball: " + this._ball_name);
        if(!this._is_active_ball){
            // this.node.destroy();
        }
    }

    // 只在两个碰撞体结束接触时被调用一次 004
    onEndContact(contact:cc.PhysicsContact, selfCollider:cc.PhysicsCollider, otherCollider:cc.PhysicsCollider) {
        // console.log("onEndContact")
    }

    // 每次将要处理碰撞体接触逻辑时被调用 002
    onPreSolve(contact:cc.PhysicsContact, selfCollider:cc.PhysicsCollider, otherCollider:cc.PhysicsCollider) {
        // console.log("onPreSolve")
    }

    //  每次处理完碰撞体接触逻辑时被调用 003
    onPostSolve(contact:cc.PhysicsContact, selfCollider:cc.PhysicsCollider, otherCollider:cc.PhysicsCollider) {
        // console.log("onPostSolve")
    }

}
