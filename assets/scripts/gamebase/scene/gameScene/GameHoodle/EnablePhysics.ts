//开启物理引擎

import UIController from "../../../../framework/uibase/UIController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnablePhysics extends UIController {

    _is_debug = false; // 是否显示调试信息;
    _gravity = cc.v2(0, 0); // 重力加速度是一个向量, 有方向的,2D, Vec重力加速度的大小;

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        // 独立的形状，打开一个调试区域,游戏图像的，逻辑区域;
        // 开始调试模式:
       if (this._is_debug) { // 开启调试信息
           var Bits = cc.PhysicsManager.DrawBits; // 这个是我们要显示的类型
           cc.director.getPhysicsManager().debugDrawFlags = Bits.e_jointBit | Bits.e_shapeBit;
       }
       else { // 关闭调试信息
           cc.director.getPhysicsManager().debugDrawFlags = 0;
       }
       // 重力加速度的配置
       cc.director.getPhysicsManager().gravity = this._gravity;
    }

    start () {

    }

    onDestroy(){
    }

    close_phy(){
        cc.director.getPhysicsManager().enabled = false;
        cc.director.getPhysicsManager().debugDrawFlags = 0;
    }
}
