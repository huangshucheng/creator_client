import UIDialog from '../../framework/uibase/UIDialog';
import LobbyScene from '../scene/lobbyScene/LobbyScene';
import SceneManager from '../../framework/manager/SceneManager';
import LobbySendGameHoodleMsg from '../scene/lobbyScene/sendMsg/LobbySendGameHoodle';
import EventManager from '../../framework/manager/EventManager';
import { CmdName, Cmd } from '../../framework/protocol/GameHoodleProto';
import Response from '../../framework/protocol/Response';
import RoomData from '../common/RoomData';
import { Stype } from '../../framework/protocol/Stype';

const { ccclass, property } = cc._decorator;

@ccclass
export default class SettingDialog extends UIDialog {

    onLoad(){
        super.onLoad()
    }

    start () {
        super.start();
        this.add_protocol_delegate();
        this.set_can_touch_background(true);

        if (RoomData.getInstance().get_is_self_host() == false) {
            this.set_visible(this.view["KW_BTN_DESSOLVE"],false);
            this.set_posX(this.view["KW_BTN_EXIT"],0);
        }
    }

    add_cmd_handler_map() {
        this._cmd_handler_map = {
            [Cmd.eJoinRoomRes]: this.on_event_exit_room,
        }
    }

    on_recv_server_message(stype: number, ctype: number, body: any) {
         if (stype !== Stype.GameHoodle) {
            return;
        }

        if (this._cmd_handler_map[ctype]) {
            this._cmd_handler_map[ctype].call(this, body);
        }
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"],this.on_click_close.bind(this))
        this.add_click_event(this.view["KW_BTN_EXIT"],this.on_click_back.bind(this))
        this.add_click_event(this.view["KW_BTN_DESSOLVE"],this.on_click_dessolve.bind(this))
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
    on_event_exit_room(body:any){
        let udata =  body;
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                this.close()
            }
        }
    }

}