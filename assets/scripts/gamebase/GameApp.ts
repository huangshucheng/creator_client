import Log from '../framework/utils/Log';
import SceneManager from '../framework/manager/SceneManager';
import LoginScene from './scene/LoginScene/LoginScene';
import LobbyScene from './scene/lobbyScene/LobbyScene';
import GameScene from './scene/gameScene/GameScene';
import HotFixScene from './scene/hotfixScene/HotFixScene';
import EventManager from '../framework/manager/EventManager';
import EventDefine from '../framework/config/EventDefine';
import NetWork from '../framework/network/NetWork';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameApp extends cc.Component {
    //onload >> start
    onLoad () {
        Log.info("onload")
        
        NetWork.getInstance().connect()

        EventManager.on(EventDefine.EVENT_NET_CONNECTED,this.on_net_connected.bind(this),this);
        EventManager.on(EventDefine.EVENT_NET_CLOSED,this.on_net_closed.bind(this),this);
        EventManager.on(EventDefine.EVENT_NET_ERROR,this.on_net_error.bind(this),this);
    }

    start () {
        console.log("GameApp start.......")
        // let scene = new LoginScene()
        // let scene = new LobbyScene()
        // let scene = new GameScene();
        let scene = new HotFixScene();
        SceneManager.getInstance().enter_scene_asyc(scene);
    }

    on_net_connected(event:cc.Event.EventCustom){
        Log.info("GameApp hcc>>>on_net_connected")
    }

    on_net_closed(event:cc.Event.EventCustom){
        event.detail
        Log.info("GameApp hcc>>>on_net_closed")
        setTimeout(() => {
            NetWork.getInstance().reconnect();
        }, 2000);
    }

    on_net_error(event:cc.Event.EventCustom){
        Log.info("GameApp hcc>>>on_net_error")
    }

}
