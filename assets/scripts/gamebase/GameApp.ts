import Log from '../framework/utils/Log';
import NetWork from "./../framework/network/NetWork";
import SceneManager from '../framework/manager/SceneManager';
import LoginScene from './scene/LoginScene/LoginScene';
import LobbyScene from './scene/lobbyScene/LobbyScene';
import GameScene from './scene/gameScene/GameScene';


const {ccclass, property} = cc._decorator;

@ccclass
export default class GameApp extends cc.Component {
    //onload >> start
    onLoad () {
        Log.info("onload")
        // let net = new NetWork()
        // net.connect()
    }

    start () {
        console.log("GameApp start.......")
        let scene = new LoginScene()
        // let scene = new LobbyScene()
        // let scene = new GameScene();
        SceneManager.getInstance().enter_scene(scene);
    }

}
