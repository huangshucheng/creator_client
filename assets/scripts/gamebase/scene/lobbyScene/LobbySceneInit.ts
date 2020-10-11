import UIController from '../../../framework/uibase/UIController';
import LobbySendAuthMsg from './sendMsg/LobbySendAuthMsg';
import LobbySendGameHoodleMsg from './sendMsg/LobbySendGameHoodle';
import WeChatLogin from '../../../framework/utils/WeChatLogin';
import RoomData from '../../common/RoomData';
import LobbySendMsg from './sendMsg/LobbySendMsg';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneInit extends UIController {

    onLoad () {
        super.onLoad()
    }
    
    start () {
        LobbySendAuthMsg.send_get_center_info();
        // LobbySendGameHoodleMsg.send_get_ugame_info();
        LobbySendMsg.send_get_room_status();
        // LobbySendGameHoodleMsg.send_get_room_list_config();
        RoomData.getInstance().clear_room_data();
        WeChatLogin.hide_auth_btn();

        WeChatLogin.on_wx_foreground(function (qData: any) {
            console.log("hcc>>on_wx_foreground>>LobbySceneInit>>  roomid: ", qData.roomid);
            let share_roomid = qData.roomid;
            if (share_roomid && share_roomid != ""){
                // LobbySendGameHoodleMsg.send_join_room(String(share_roomid));
            }
        });
    }

}
