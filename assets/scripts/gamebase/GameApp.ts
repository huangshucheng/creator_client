import SceneManager from '../framework/manager/SceneManager';
import HotFixScene from './scene/hotfixScene/HotFixScene';
import PlatForm from '../framework/config/PlatForm';
import UIController from '../framework/uibase/UIController';
import WeChatLogin from '../framework/utils/WeChatLogin';
import RoomData from './common/RoomData';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameApp extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        super.start();
        this.add_script("EnablePhysics");//开启物理引擎
        this.add_script("GameAppEvent");
        
        cc.debug.setDisplayStats(false);
        PlatForm.printPlatForm();

        WeChatLogin.on_wx_foreground(function (qData: any) {
            console.log("hcc>>on_wx_foreground>>LoginSceneShowUI>>  roomid: ", qData.roomid);
            let roomid_tmp = qData.roomid;
            if (qData.roomid == undefined || qData.roomid == null || qData.roomid == "") {
                roomid_tmp = ""
            }
            RoomData.getInstance().set_share_roomid(roomid_tmp);
        });

        SceneManager.getInstance().enter_scene_asyc(new HotFixScene());
    }
}