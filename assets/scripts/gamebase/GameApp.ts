import Log from '../framework/utils/Log';
import SceneManager from '../framework/manager/SceneManager';
import LoginScene from './scene/LoginScene/LoginScene';
import LobbyScene from './scene/lobbyScene/LobbyScene';
import GameScene from './scene/gameScene/GameScene';
import HotFixScene from './scene/hotfixScene/HotFixScene';
import EventManager from '../framework/manager/EventManager';
import EventDefine from '../framework/config/EventDefine';
import NetWork from '../framework/network/NetWork';
import DialogManager from '../framework/manager/DialogManager';
import PlatForm from '../framework/config/PlatForm';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameApp extends cc.Component {
    //onload >> start
    onLoad () {
        Log.info("onload")
        
        NetWork.getInstance().connect()

        EventManager.on(EventDefine.EVENT_NET_CONNECTED, this, this.on_net_connected.bind(this));
        EventManager.on(EventDefine.EVENT_NET_CLOSED, this, this.on_net_closed.bind(this));
        EventManager.on(EventDefine.EVENT_NET_ERROR, this, this.on_net_error.bind(this));
    }

    start () {
        console.log("GameApp start.......")
        let scene = new HotFixScene();
        SceneManager.getInstance().enter_scene_asyc(scene);
        PlatForm.printPlatForm()
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

}
