import UIController from '../../../framework/uibase/UIController';
import EventManager from '../../../framework/manager/EventManager';
import EventDefine from '../../../framework/config/EventDefine';
import Log from '../../../framework/utils/Log';
import { Cmd, CmdName } from "./../../../framework/protocol/AuthProto";
import Response from '../../../framework/config/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import LobbyScene from '../lobbyScene/LobbyScene';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginSceneRecvMsg extends UIController {

    onLoad() {
        super.onLoad()
        console.log("LoginSceneRecvMsg onload")
    }

    start () {
        console.log("LoginSceneRecvMsg>>start")
        this.add_event_dispatcher()
    }

    add_event_dispatcher(){
        EventManager.on(EventDefine.EVENT_NET_CONNECTED,this.on_net_connected.bind(this),this);
        EventManager.on(EventDefine.EVENT_NET_CLOSED,this.on_net_closed.bind(this),this);
        EventManager.on(EventDefine.EVENT_NET_ERROR,this.on_net_error.bind(this),this);
        EventManager.on(CmdName[Cmd.eGuestLoginRes],this.on_event_guest_login,this)
        EventManager.on(CmdName[Cmd.eUnameLoginRes],this.on_event_uname_login,this)
    }

    on_net_connected(event:cc.Event.EventCustom){
        Log.info("LoginSceneRecvMsg hcc>>>on_net_connected")
    }

    on_net_closed(event:cc.Event.EventCustom){
        Log.info("LoginSceneRecvMsg hcc>>>on_net_closed")
    }

    on_net_error(event:cc.Event.EventCustom){
        Log.info("LoginSceneRecvMsg hcc>>>on_net_error")

    }

    on_event_guest_login(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        cc.log("guestlogin udata: " , udata)
        if(udata.status == Response.OK){
            SceneManager.getInstance().enter_scene(new LobbyScene())
        }
    }

    on_event_uname_login(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        cc.log("unamelogin detail: " , udata)
        if(udata.status == Response.OK){
            SceneManager.getInstance().enter_scene(new LobbyScene())
        }
    }
}
