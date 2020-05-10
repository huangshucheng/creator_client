import UIController from '../../../framework/uibase/UIController';
import GameSendGameHoodleMsg from './sendMsg/GameSendGameHoodle';
import RoomData from '../../common/RoomData';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSceneInit extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        GameSendGameHoodleMsg.send_check_link_game();
        RoomData.getInstance().set_share_roomid("");
    }
    
}