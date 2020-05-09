import Log from '../framework/utils/Log';
import SceneManager from '../framework/manager/SceneManager';
import HotFixScene from './scene/hotfixScene/HotFixScene';
import EventManager from '../framework/manager/EventManager';
import EventDefine from '../framework/config/EventDefine';
import NetWork from '../framework/network/NetWork';
import DialogManager from '../framework/manager/DialogManager';
import PlatForm from '../framework/config/PlatForm';
import UIController from '../framework/uibase/UIController';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameApp extends UIController {

    //onload >> start
    onLoad () {
        super.onLoad()
        this.add_script("EnablePhysics");//开启物理引擎
        EventManager.on(EventDefine.EVENT_NET_CONNECTED, this, this.on_net_connected.bind(this));
        EventManager.on(EventDefine.EVENT_NET_CLOSED, this, this.on_net_closed.bind(this));
        EventManager.on(EventDefine.EVENT_NET_ERROR, this, this.on_net_error.bind(this));
        NetWork.getInstance().connect();
        cc.debug.setDisplayStats(false);
    }

    start () {
        let scene = new HotFixScene();
        SceneManager.getInstance().enter_scene_asyc(scene);
        PlatForm.printPlatForm()
        this.test_func()
    }

    on_net_connected(event:cc.Event.EventCustom){
        Log.info("GameApp hcc>>>on_net_connected success")
        DialogManager.getInstance().show_weak_hint("网络连接成功!")
    }

    on_net_closed(event:cc.Event.EventCustom){
        Log.info("GameApp hcc>>>on_net_closed")
        setTimeout(() => {
            NetWork.getInstance().reconnect();
        }, 2000);
        DialogManager.getInstance().show_weak_hint("网络断开,正在连接中。。。")
    }

    on_net_error(event:cc.Event.EventCustom){
        Log.info("GameApp hcc>>>on_net_error")
        DialogManager.getInstance().show_weak_hint("网络断开!")
    }

    //test
    test_func(){
        /*
        //
        this.node.convertToNodeSpaceAR(cc.v2(100,100)); //将世界坐标ccv2(100,100)转换成node下的节点坐标系  
        this.node.convertToWorldSpaceAR(cc.v2(100,100)); // 将节点坐标系node下的一个点cc.v2(100,100)转换到世界空间坐标系。
        */
    }

}