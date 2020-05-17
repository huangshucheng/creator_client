import UIDialog from '../../framework/uibase/UIDialog';
import StringUtil from '../../framework/utils/StringUtil';
import LobbySendGameHoodleMsg from '../scene/lobbyScene/sendMsg/LobbySendGameHoodle';
import EventManager from '../../framework/manager/EventManager';
import { CmdName, Cmd } from '../../framework/protocol/GameHoodleProto';
import Response from '../../framework/protocol/Response';
import { Stype } from '../../framework/protocol/Stype';

const { ccclass, property } = cc._decorator;

@ccclass
export default class JoinRoomDialog extends UIDialog {

    _text_index = 1;
    KW_TOTAL_ROOM_NUM_COUNT = 6;

    onLoad(){
        super.onLoad()
    }

    start () {
        super.start();
        this.initUI();
        this.add_protocol_delegate();
    }

    add_cmd_handler_map() {
        this._cmd_handler_map = {
            [Cmd.eJoinRoomRes]: this.on_event_join_room,
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
        this.add_click_event(this.view["KW_BTN_DELETE"],this.on_click_delete.bind(this))
        this.add_click_event(this.view["KW_BTN_CLEAR"],this.on_click_clear.bind(this))
        
        for(let index = 0; index <= 9; index++){
            let btnName = "KW_BTN_NUM_" + index
            this.add_click_event(this.view[btnName],this.on_click_number.bind(this));
        }

    }

    initUI(){
        for (var index = 1 ;index <= this.KW_TOTAL_ROOM_NUM_COUNT; index ++){
            var numName = 'KW_SHOW_NUM_' + index
            this.set_string(this.view[numName],"");
        } 
    }

    on_click_close(sender: cc.Component){
        this.close()
    }

    on_click_delete(sender: cc.Component){
        for (var index = this.KW_TOTAL_ROOM_NUM_COUNT ;index >=1 ; index --){
            var numName = 'KW_SHOW_NUM_' + index
            var str = this.get_string(this.view[numName])
            if (str != ""){
                this.set_string(this.view[numName],"")
                this._text_index = index;
                break;
            }
        }
    }

    on_click_clear(sender: cc.Component){
        for (var index = 1 ;index <= this.KW_TOTAL_ROOM_NUM_COUNT; index ++){
            var numName = 'KW_SHOW_NUM_' + index
            this.set_string(this.view[numName],"");
        }
        this._text_index = 1
    }

    on_click_number(sender: cc.Component){
        let btnName = sender.node.name
        let btnNumStr = StringUtil.getNumberSuffixByString(btnName);
        // console.log(btnName , btnNumStr)
        let textName = 'KW_SHOW_NUM_' + this._text_index
        this.set_string(this.view[textName],String(btnNumStr))
        
        if(this._text_index == this.KW_TOTAL_ROOM_NUM_COUNT){
            var roomid = ""
            for (var index = 1 ;index <= this.KW_TOTAL_ROOM_NUM_COUNT; index ++){
                var numName = 'KW_SHOW_NUM_' + index
                var num = this.get_string(this.view[numName])
                roomid = roomid + num;
            }
            console.log("roomid: " , roomid)
            LobbySendGameHoodleMsg.send_join_room(roomid)
        }
        this._text_index++;
    }
    
    ////////////////
    on_event_join_room(body:any){
        let udata =  body;
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                this.close()
            }
        }
    }
}