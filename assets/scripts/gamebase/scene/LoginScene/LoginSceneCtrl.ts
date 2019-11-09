import UIController from '../../../framework/uibase/UIController';
import Log from '../../../framework/utils/Log';
import EventManager from '../../../framework/manager/EventManager';
import EventDefine from '../../../framework/config/EventDefine';
import NetWork from '../../../framework/network/NetWork';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginSceneCtrl extends UIController {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    onLoad() {
        
        Log.info("LoginSceneCtrl onLoad()")
        EventManager.on(EventDefine.EVENT_NET_CONNECTED,this.on_net_connected.bind(this),this);
        EventManager.on(EventDefine.EVENT_NET_CLOSED,this.on_net_closed.bind(this),this);
        EventManager.on(EventDefine.EVENT_NET_ERROR,this.on_net_error.bind(this),this);
    }

    on_net_connected(event){
        Log.info("hcc>>>on_net_connected")
    }

    on_net_closed(event){
        Log.info("hcc>>>on_net_closed")
    }

    on_net_error(event){
        Log.info("hcc>>>on_net_error")
    }

    start () {
        let net = new NetWork()
        net.connect()
    }
}
