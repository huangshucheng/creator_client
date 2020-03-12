//界面点击事件

import UIController from "../../../../framework/uibase/UIController";
import RoomData from "../../../common/RoomData";
import GameHoodleData from './GameHoodleData';
import HoodleManager from "./HoodleManager";
import GameSendGameHoodleMsg from '../sendMsg/GameSendGameHoodle';

const AIM_LINE_MAX_LENGTH = 1440;
// const AIM_LINE_MAX_LENGTH = 2000;

const {ccclass, property} = cc._decorator;

@ccclass
export default class gameHoodleTouchEvent extends UIController {

    private _graphic_line:cc.Graphics = null;
    private _cur_length: number = 0;

    onLoad () {
       super.onLoad()
       if(this.view["GRAPHICS"]){
           this._graphic_line = this.view["GRAPHICS"].getComponent(cc.Graphics);
       }
    }

    start () {
        if(this._graphic_line){
            this._graphic_line.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            this._graphic_line.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this._graphic_line.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this._graphic_line.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }
    }

    private onTouchStart(touch: cc.Event.EventTouch) {
        if(!this._graphic_line){
            return;
        }
        this._graphic_line.clear();
        const startLocation = this.get_self_ball_pos()
        if(!startLocation){
            return;
        }

        const location = touch.getLocation();
        // 计算射线
        this.drawRayCast(startLocation, location.subSelf(startLocation).normalizeSelf());
        this._graphic_line.stroke();
    }

    private onTouchMove(touch: cc.Event.EventTouch) {
        if(!this._graphic_line){
            return;
        }
        this._graphic_line.clear();
        this._cur_length = 0;
        // const startLocation = touch.getStartLocation();
        const startLocation = this.get_self_ball_pos()
        if(!startLocation){
            return;
        }

        // 计算射线
        const location = touch.getLocation();
        this.drawRayCast(startLocation, location.subSelf(startLocation).normalizeSelf());
        this._graphic_line.stroke();
    }

    private onTouchEnd(touch: cc.Event.EventTouch) {
        if(!this._graphic_line){
            return;
        }
        this._graphic_line.clear();

        const location = touch.getLocation();
        let ball = this.get_self_ball();
        if(ball){
            let script = ball.getComponent("HoodleBallCtrl")
            if(script){
                script.shoot_at(location);
                GameSendGameHoodleMsg.send_player_shoot(RoomData.getInstance().get_self_seatid(),location.x, location.y);
            }
        }
    }

    /**
     * @description 计算射线
     * @param startLocation 起始位置 世界坐标系
     * @param vector_dir 单位方向向量
     */
    private drawRayCast(startLocation: cc.Vec2, vector_dir: cc.Vec2) {
        // 剩余长度
        const left_length = AIM_LINE_MAX_LENGTH - this._cur_length;
        if (left_length <= 0) return;
        // 计算线的终点位置
        const endLocation = startLocation.add(vector_dir.mul(left_length));
        // 射线测试
        // 检测给定的线段穿过哪些碰撞体，可以获取到碰撞体在线段穿过碰撞体的那个点的法线向量和其他一些有用的信息。 
        const results = cc.director.getPhysicsManager().rayCast(startLocation, endLocation, cc.RayCastType.Closest);
        if (results.length > 0) {
            const result = results[0];
            // 指定射线与穿过的碰撞体在哪一点相交。
            const point = result.point;
            // 画入射线段
            this.drawAimLine(startLocation, point);
            // 计算长度
            const line_length = point.sub(startLocation).mag();
            // 计算已画长度
            this._cur_length += line_length;
            // 指定碰撞体在相交点的表面的法线单位向量。
            const vector_n = result.normal;
            // 入射单位向量
            const vector_i = vector_dir;
            // 反射单位向量
            const vector_r = vector_i.sub(vector_n.mul(2 * vector_i.dot(vector_n)));
            // 接着计算下一段
            this.drawRayCast(point, vector_r);
        } else {
            // 画剩余线段
            this.drawAimLine(startLocation, endLocation);
        }
    }

    /**
     * @description 画瞄准线
     * @param startLocation 起始位置 世界坐标系
     * @param endLocation 结束位置 世界坐标系
     */
    private drawAimLine(startLocation: cc.Vec2, endLocation: cc.Vec2) {
        // 转换坐标
        let graphic_startLocation = startLocation.clone();
        if(this._graphic_line){
            this._graphic_line.moveTo(graphic_startLocation.x, graphic_startLocation.y);
        }

        // 画小圆圆,间隔
        const delta = 15;
        // 方向
        const vector_dir = endLocation.sub(startLocation);
        // 数量
        const total_count = Math.round(vector_dir.mag() / delta);
        // 每次间隔向量​
        vector_dir.normalizeSelf().mulSelf(delta);
        for (let index = 0; index < total_count; index++) {
            graphic_startLocation.addSelf(vector_dir)
            if(this._graphic_line){
                this._graphic_line.circle(graphic_startLocation.x, graphic_startLocation.y, 2);
            }
        }
    }

    get_self_ball(){
        return HoodleManager.getInstance().get_self_ball();
    }

    get_self_ball_pos(){
        let ball = this.get_self_ball();
        if(ball){
            return ball.convertToWorldSpaceAR(cc.v2(0,0));
        }
        return null;
    }

}
