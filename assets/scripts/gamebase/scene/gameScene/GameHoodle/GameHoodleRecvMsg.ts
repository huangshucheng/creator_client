//游戏消息
import UIController from "../../../../framework/uibase/UIController";
import EventManager from "../../../../framework/manager/EventManager";
import { Cmd, CmdName } from "../../../../framework/protocol/GameHoodleProto";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameHoodleRecvMsg extends UIController {

    onLoad () {
        super.onLoad();

    }

    start () {
        this.add_event_dispatcher()
    }
    
    add_event_dispatcher(){
        EventManager.on(CmdName[Cmd.eGameStartRes], this, this.on_event_game_start)
    }

    on_event_game_start(event: cc.Event.EventCustom){
        let showUI = this.get_script("GameHoodleShowUI");
        showUI.show_all_ball();
    }

}
