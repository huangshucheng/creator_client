//小球控制器
import UIController from "../../../../framework/uibase/UIController";
import { PlayerPower, BallState } from '../../../common/State';
import GameSendGameHoodleMsg from '../sendMsg/GameSendGameHoodle';
import GameHoodleData from './GameHoodleData';
import RoomData from '../../../common/RoomData';

let SHOOT_DISTANCE = 380;
let SHOOT_POWER = 50.0;
let BALL_STOP_SPEED_SQR = 100;  //判定小球停下来的速度平方
let ROUND_HEAD_PATH = "lobby/roundheader/round_1";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HoodleBallCtrl extends UIController {
    _rigid_body:cc.RigidBody = null;
    _ball_name: string = "";
    _ball_id: number = -1;
    _ball_state: number = BallState.stop;
    _src_shoot_seatid = -1; //先手射击的seatid

    onLoad () {
        super.onLoad()
        this._rigid_body = this.getComponent(cc.RigidBody);
    }

    start () {

    }

    //往inDest发射
    public shoot_at(inDst: cc.Vec2, shootPower?:number){
        if(!shootPower){
            shootPower = SHOOT_POWER;
        }
        // 冲量: 给这个球一个方向的冲量，矢量，大小，有方向;
        // 方向问题:  src---> dst;
        let dst = this.node.parent.convertToNodeSpaceAR(inDst);
        var src = cc.v2(this.node.x,this.node.y);
        var dir = dst.sub(src)
        // 大小问题;
        /*
        var distance = dir.mag()//起点到终点的长度
        var power_x = distance * SHOOT_POWER * dir.x;
        var power_y = distance * SHOOT_POWER * dir.y;
        */
        // applyLinearImpulse(冲量大小向量, 原点转成世界坐标, true)
        if(this._rigid_body){
            let normalizeSelfVec = dir.normalizeSelf()
            let power_x = normalizeSelfVec.x * SHOOT_DISTANCE * shootPower;
            let power_y = normalizeSelfVec.y * SHOOT_DISTANCE * shootPower;

            console.log("hcc>>shoot_at: " , power_x, power_y , " ,power: " , shootPower);
            
            this._rigid_body.applyLinearImpulse(cc.v2(power_x, power_y), this.node.convertToWorldSpaceAR(cc.v2(0, 0)), true);
        }
    }

    // 名称
    public set_name(name_str: string){
        if(this.get_ball_id() == RoomData.getInstance().get_self_seatid()){
            name_str = name_str + "(我)";
        }
        this.set_string(this.view["KW_TEXT_NAME"],name_str);
        this._ball_name = name_str;
    }

    public set_ball_id(ball_id: number){
        this._ball_id = ball_id;
    }

    public get_ball_id(){
        return this._ball_id;
    }

    public set_src_shoot_seatid(seatid:number){
        this._src_shoot_seatid = seatid;
    }

    public get_src_shoot_seatid(){
        return this._src_shoot_seatid;
    }

    // 头像
    public set_img_face(uface: number){
        // let ufaceImg = ROUND_HEAD_PATH + String(uface);
        // this.set_sprite_asyc(this.view["KW_IMG_HEAD"],ufaceImg)
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
        let src_seatid = -1;
        let des_seatid = -1;
        let selfScript = selfCollider.getComponent("HoodleBallCtrl");
        let otherScript = otherCollider.getComponent("HoodleBallCtrl");
        if(!selfScript || !otherScript){
            return;
        }
        /*

        let array_seatid = [selfScript.get_ball_id(),otherScript.get_ball_id()];
        let ballid = this.get_ball_id();
        let power = GameHoodleData.getInstance().get_power(ballid);
        if(power == PlayerPower.canPlay){
            src_seatid = ballid;
            for(let key in array_seatid){
                if(array_seatid[key] != src_seatid){
                    des_seatid = array_seatid[key];
                    break;
                }
            }
        }

        console.log("hcc>>send_player_is_shooted111: src: " , src_seatid , " ,des: " , des_seatid);
        //发送服务端，玩家碰撞信息
        if(src_seatid != -1 && des_seatid != -1){
            GameSendGameHoodleMsg.send_player_is_shooted(src_seatid, des_seatid);
            console.log("hcc>>send_player_is_shooted222: src: " , src_seatid , " ,des: " , des_seatid);
        }
        */

        ///*
        if(!selfScript.get_ball_id || !otherScript.get_ball_id){
            return;
        }

        let self_ballid = selfScript.get_ball_id();
        let other_ballid = otherScript.get_ball_id();
        console.log("hcc>>selfballid: " ,self_ballid , " ,otherballid: ", other_ballid);
        let power_self = GameHoodleData.getInstance().get_power(self_ballid);
        let power_other = GameHoodleData.getInstance().get_power(other_ballid);
        // if(power_self == PlayerPower.canNotPlay){ //这里暂时把加分玩家给canNotPlay,因为服务端已经把权限给改成下一个玩家了
        //     src_seatid = self_ballid;
        //     des_seatid = other_ballid;
        // }else if(power_other == PlayerPower.canNotPlay){
        //     src_seatid = other_ballid;
        //     des_seatid = self_ballid;
        // }
        if(self_ballid == this.get_src_shoot_seatid()){
            src_seatid = self_ballid;
            des_seatid = other_ballid;
        }else{
            src_seatid = other_ballid;
            des_seatid = self_ballid;
        }

        let selfPlayer = RoomData.getInstance().get_player(src_seatid);
        let otherPlayer = RoomData.getInstance().get_player(des_seatid);
        console.log("hcc>>src_player:",selfPlayer.get_uname() ," ,des_player: " , otherPlayer.get_uname());
        //发送服务端，玩家碰撞信息
        if(src_seatid != -1 && des_seatid != -1){
            GameSendGameHoodleMsg.send_player_is_shooted(src_seatid, des_seatid);
        }

        //是否显示拖尾
        let selfMotionstreak = selfCollider.getComponent(cc.MotionStreak);
        let otherMotionstreak = selfCollider.getComponent(cc.MotionStreak);
        if(selfMotionstreak && otherMotionstreak){
            if(power_self == PlayerPower.canPlay){
                selfMotionstreak.enabled = true;
                otherMotionstreak.enabled = false;
            }else if(power_other == PlayerPower.canPlay){
                selfMotionstreak.enabled = false;
                otherMotionstreak.enabled = true;
            }
        }
        //*/

    }

    // 只在两个碰撞体结束接触时被调用一次 004
    onEndContact(contact:cc.PhysicsContact, selfCollider:cc.PhysicsCollider, otherCollider:cc.PhysicsCollider) {
        // console.log("onEndContact")
        //发送玩家被击中
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
        // let power = GameHoodleData.getInstance().get_power(this.get_ball_id());
        // if(power != PlayerPower.canPlay){
        //     return;
        // }
       if(this._rigid_body){
            let linearv: cc.Vec2 = this._rigid_body.linearVelocity; //线性速度
            let lineMag = linearv.magSqr();
            if(this.get_ball_state() == BallState.stop && lineMag >= BALL_STOP_SPEED_SQR){ //开始移动
                console.log("hcc>>start moving")
            }

            if(this.get_ball_state() == BallState.moving && Math.floor(lineMag) <= BALL_STOP_SPEED_SQR){ //开始停下来
                console.log("hcc>>start stop, position: " ,this.node.position.x , this.node.position.y);
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
                // console.log("hcc>>send_all_player_ball_pos: " , posArray);
            }
        }
        //设置状态
        if(this._rigid_body){
            let linearv: cc.Vec2 = this._rigid_body.linearVelocity; //线性速度
            let lineMag = Math.floor(linearv.magSqr());
            // console.log("hcc>>linearV: seatid: " , this.get_ball_id() , " ,v: " , lineMag);
            if(lineMag <= BALL_STOP_SPEED_SQR){
                this.set_ball_state(BallState.stop);
            }else{
                this.set_ball_state(BallState.moving);
            }
        }

    }
}
