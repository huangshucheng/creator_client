//小球控制器
import UIController from "../../../../framework/uibase/UIController";
import { PlayerPower } from '../../../common/State';
import GameSendGameHoodleMsg from '../sendMsg/GameSendGameHoodle';
import GameHoodleData from './GameHoodleData';

let SHOOT_POWER = 0.1;
let ROUND_HEAD_PATH = "lobby/roundheader/round_1";

//小球状态
let BALL_STATE = {
    stop: 0,
    moving: 1,
}

const {ccclass, property} = cc._decorator;

@ccclass
export default class HoodleBallCtrl extends UIController {
    _rigid_body:cc.RigidBody = null;
    _ball_name: string = "";
    _ball_id: number = -1;
    _ball_state: number = BALL_STATE.stop;

    onLoad () {
        super.onLoad()

    }

    start () {
        this._rigid_body = this.getComponent(cc.RigidBody);
    }

    //往inDest发射
    public shoot_at(inDst: cc.Vec2){
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

    // 名称
    public set_name(name_str: string){
        this.set_string(this.view["KW_TEXT_NAME"],name_str);
        this._ball_name = name_str;
    }

    public set_ball_id(ball_id: number){
        this._ball_id = ball_id;
    }

    public get_ball_id(){
        return this._ball_id;
    }

    // 头像
    public set_img_face(uface: number){
        let ufaceImg = ROUND_HEAD_PATH + String(uface);
        this.set_sprite_asyc(this.view["KW_IMG_HEAD"],ufaceImg)
        console.log("hcc>>HoodleBallCtrl>>set_img_face")
    }

    // 有权限变名字成红色
    public set_shoot_power_ui(power:number){
        if(power == PlayerPower.canPlay){
            this.view["KW_TEXT_NAME"].color = cc.color(255,0,0);
        }else{
            this.view["KW_TEXT_NAME"].color = cc.color(255,255,255);
        }
    }

    // 小球状态
    public set_ball_state(state:number){
        this._ball_state = state;
    }

    public get_ball_state(){
        return this._ball_state;
    }

    ////////////////////////////////碰撞事件
    // 物理碰撞
    // 只在两个碰撞体开始接触时被调用一次 001
    onBeginContact(contact:cc.PhysicsContact, selfCollider:cc.PhysicsCollider, otherCollider:cc.PhysicsCollider) {
        // console.log("onBeginContact ball: " + this._ball_name)
    }

    // 只在两个碰撞体结束接触时被调用一次 004
    onEndContact(contact:cc.PhysicsContact, selfCollider:cc.PhysicsCollider, otherCollider:cc.PhysicsCollider) {
        // console.log("onEndContact")
        //TODO
        let src_seatid = -1;
        let des_seatid = -1;

        let selfScript = selfCollider.getComponent("HoodleBallCtrl");
        let otherScript = otherCollider.getComponent("HoodleBallCtrl");

        if(selfScript && otherCollider){
            let self_ballid = selfScript.get_ball_id();
            let other_ballid = otherScript.get_ball_id();
            console.log("hcc>>selfballid: " ,self_ballid , " ,otherballid: ", other_ballid);
            let power_self = GameHoodleData.getInstance().get_power(self_ballid);
            let power_other = GameHoodleData.getInstance().get_power(other_ballid);
            if(power_self == PlayerPower.canPlay){
                src_seatid = self_ballid;
                des_seatid = other_ballid;
            }else if(power_other == PlayerPower.canPlay){
                src_seatid = other_ballid;
                des_seatid = self_ballid;
            }
            if(src_seatid != -1 && des_seatid != -1){
                GameSendGameHoodleMsg.send_player_is_shooted(src_seatid, des_seatid);
            }
        }

        // GameSendGameHoodleMsg.send_player_is_shooted(src_seatid, des_seatid);
    }

    // 每次将要处理碰撞体接触逻辑时被调用 002
    onPreSolve(contact:cc.PhysicsContact, selfCollider:cc.PhysicsCollider, otherCollider:cc.PhysicsCollider) {
        // console.log("onPreSolve")
    }

    //  每次处理完碰撞体接触逻辑时被调用 003
    onPostSolve(contact:cc.PhysicsContact, selfCollider:cc.PhysicsCollider, otherCollider:cc.PhysicsCollider) {
        // console.log("onPostSolve")
    }

    update(){
        //对比状态
        //设置状态
       if(this._rigid_body){
            let linearv: cc.Vec2 = this._rigid_body.linearVelocity; //线性速度
            let lineMag = linearv.magSqr();
            if(this.get_ball_state() == BALL_STATE.stop && lineMag != 0){ //开始移动
                // console.log("hcc>>start moving")
            }

            if(this.get_ball_state() == BALL_STATE.moving && lineMag == 0){ //开始停下来
                // console.log("hcc>>start stop, position: " ,this.node.position.x , this.node.position.y);
                if(this.get_ball_id() == -1){
                    return;
                }
                let posArray = [];
                let posInfo = {
                    seatid:Number(this.get_ball_id()),
                    posx:String(this.node.getPosition().x),
                    posy:String(this.node.getPosition().y),
                };
                posArray.push(posInfo);
                GameSendGameHoodleMsg.send_all_player_ball_pos(posArray);
                console.log("hcc>>send_all_player_ball_pos: " , posArray);
            }
        }
        //设置状态
        if(this._rigid_body){
            let linearv: cc.Vec2 = this._rigid_body.linearVelocity; //线性速度
            let lineMag = linearv.magSqr();
            if(lineMag == 0){
                this.set_ball_state(BALL_STATE.stop);
            }else{
                this.set_ball_state(BALL_STATE.moving);
            }
        }

    }
}
