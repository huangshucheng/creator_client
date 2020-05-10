import Log from '../framework/utils/Log';
import SceneManager from '../framework/manager/SceneManager';
import HotFixScene from './scene/hotfixScene/HotFixScene';
import EventManager from '../framework/manager/EventManager';
import EventDefine from '../framework/config/EventDefine';
import NetWork from '../framework/network/NetWork';
import DialogManager from '../framework/manager/DialogManager';
import PlatForm from '../framework/config/PlatForm';
import UIController from '../framework/uibase/UIController';
import WeChatLogin from '../framework/utils/WeChatLogin';
import Response from '../framework/protocol/Response';
import LobbySendGameHoodleMsg from './scene/lobbyScene/sendMsg/LobbySendGameHoodle';
import RoomData from './common/RoomData';

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
        EventManager.on("LoginLogicRes", this, this.on_event_login_logic)

        NetWork.getInstance().connect();
        cc.debug.setDisplayStats(false);
        
        WeChatLogin.on_wx_foreground(function(qData:any){
            console.log("hcc>>on_wx_foreground roomid: " , qData.roomid);
            let tmp_roomid = "";
            if(qData.roomid){
                tmp_roomid = qData.roomid;
            }

            let shareinfo = WeChatLogin.get_share_info();
            if (shareinfo.roomid) {
                tmp_roomid = shareinfo.roomid;
            }

            RoomData.getInstance().set_share_roomid(tmp_roomid);
            if(tmp_roomid != ""){
                LobbySendGameHoodleMsg.send_join_room(String(tmp_roomid));
            }
        });
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

    //玩家登录逻辑服务后，需要验证是否需要加入房间
    on_event_login_logic(event: cc.Event.EventCustom) {
        console.log("hcc>>gameapp>>on_event_login_logic");
        let udata = event.getUserData()
        if (udata.status == Response.OK) {
            //登录逻辑服务成功,如果是通过分享进来的,通过分享的房间号，自动去加入房间
            let roomid = RoomData.getInstance().get_share_roomid();
            console.log("hcc>>gameapp>>on_event_login_logic roomid: " , roomid);
            if(roomid != ""){
                LobbySendGameHoodleMsg.send_join_room(String(roomid));
            }
            //这里要检测玩家游戏服务的信息是否存在，不存在要先创建数据库数据
            LobbySendGameHoodleMsg.send_get_ugame_info();
        }
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