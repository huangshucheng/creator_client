import UIDialog from '../../framework/uibase/UIDialog';
import LobbyScene from '../scene/lobbyScene/LobbyScene';
import SceneManager from '../../framework/manager/SceneManager';
import LobbySendGameHoodleMsg from '../scene/lobbyScene/sendMsg/LobbySendGameHoodle';
import EventManager from '../../framework/manager/EventManager';
import { CmdName, Cmd } from '../../framework/protocol/GameHoodleProto';
import Response from '../../framework/protocol/Response';
import RoomData from '../common/RoomData';

const { ccclass, property } = cc._decorator;

@ccclass
export default class SettingDialog extends UIDialog {

    onLoad(){
        super.onLoad()
    }

    start () {
        this.add_event_dispatcher()
        this.add_button_event_listener()
    }

    add_event_dispatcher(){
        EventManager.on(CmdName[Cmd.eJoinRoomRes], this, this.on_event_exit_room)
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"],this.on_click_close.bind(this))
        this.add_click_event(this.view["KW_BTN_EXIT"],this.on_click_back.bind(this))
        this.add_click_event(this.view["KW_BTN_DESSOLVE"],this.on_click_dessolve.bind(this))
    }

    onDestroy(){

    }

    on_click_close(sender: cc.Component){
        this.close()
    }

    on_click_back(sender: cc.Component){
        LobbySendGameHoodleMsg.send_exit_room();
        this.close()
        SceneManager.getInstance().enter_scene_asyc(new LobbyScene());
        RoomData.getInstance().clear_room_data();
    }

    on_click_dessolve(sender:cc.Component){
        LobbySendGameHoodleMsg.send_dessolve_room();
        this.close();
    }

    ////////////
    on_event_exit_room(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                this.close()
            }
        }
    }

}