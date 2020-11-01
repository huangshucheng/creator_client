import UIController from '../../../framework/uibase/UIController';
import RoomData from '../../common/RoomData';
import SendGameMsg from '../../sendMsg/SendGameMsg';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSceneInit extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        SendGameMsg.send_check_link_game();
        RoomData.getInstance().set_share_roomid("");
    }
    
}