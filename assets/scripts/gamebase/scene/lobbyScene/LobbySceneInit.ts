import UIController from '../../../framework/uibase/UIController';
import LobbySendAuthMsg from './sendMsg/LobbySendAuthMsg';
import LobbySendGameHoodleMsg from './sendMsg/LobbySendGameHoodle';
import WeChatLogin from '../../../framework/utils/WeChatLogin';
import RoomData from '../../common/RoomData';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneInit extends UIController {

    onLoad () {
        super.onLoad()
    }
    
    start () {
        // LobbySendGameHoodleMsg.send_login_logic(); //确保进入大厅之后，登录逻辑服务成功
        LobbySendAuthMsg.send_get_center_info();
        LobbySendGameHoodleMsg.send_get_ugame_info();
        RoomData.getInstance().clear_room_data();
        WeChatLogin.hide_auth_btn();
    }

}
