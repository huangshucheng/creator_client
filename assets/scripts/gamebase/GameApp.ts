import Log from "../framework/utils/Log"
import NetWork from "./../framework/network/NetWork";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameApp extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    //onload >> start

    onLoad () {
        Log.info("onload")
        let net = new NetWork()
        net.connect()
    }

    start () {
        console.log("GameApp start.......")
    }

    // update (dt) {}
}
