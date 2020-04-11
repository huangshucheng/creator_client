import UIController from '../../../framework/uibase/UIController';
import GameSendGameHoodleMsg from './sendMsg/GameSendGameHoodle';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSceneInit extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        GameSendGameHoodleMsg.send_check_link_game();
    }
    
}