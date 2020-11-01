import UIController from '../../../framework/uibase/UIController';
import WeChatLogin from '../../../framework/utils/WeChatLogin';
import RoomData from '../../common/RoomData';
import SendLobbyMsg from '../../sendMsg/SendLobbyMsg';
import SendAuthMsg from '../../sendMsg/SendAuthMsg';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneInit extends UIController {

    onLoad () {
        super.onLoad()
    }
    
    start () {
        SendAuthMsg.send_get_center_info();
        SendLobbyMsg.send_get_ugame_info();
        SendLobbyMsg.send_get_room_status();
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
