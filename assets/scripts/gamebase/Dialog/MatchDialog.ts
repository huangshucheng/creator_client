import UIDialog from '../../framework/uibase/UIDialog';
import LobbySendGameHoodleMsg from '../scene/lobbyScene/sendMsg/LobbySendGameHoodle';
import EventManager from '../../framework/manager/EventManager';
import { CmdName, Cmd } from '../../framework/protocol/GameHoodleProto';
import Response from '../../framework/protocol/Response';
import { ResourceManager } from '../../framework/manager/ResourceManager';
import StringUtil from '../../framework/utils/StringUtil';
import RoomData from '../common/RoomData';
import { Stype } from '../../framework/protocol/Stype';

//匹配界面

const { ccclass, property } = cc._decorator;

@ccclass
export default class MatchDialog extends UIDialog {

    onLoad(){
        super.onLoad()
    }

    start () {
        super.start();
        this.add_protocol_delegate();
    }

    add_cmd_handler_map() {
        this._cmd_handler_map = {
            [Cmd.eUserStopMatchRes]: this.on_event_match_stop,
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
        this.add_click_event(this.view["KW_UI_BTN_CANCEL"],this.on_click_cancel.bind(this))
    }

    on_click_cancel(sender: cc.Component){
        LobbySendGameHoodleMsg.send_user_stop_match();
        this.close();
    }

    ////////////
    show_math_user_info(userinfo:any){
        if (userinfo){
            let layout_user = this.view["KW_LAYOUT_MATCH_USER"];
            if (layout_user){
                layout_user.destroyAllChildren();
            }
            userinfo.forEach(element => {
                let numberid = element.numberid;
                let userinfostring = element.userinfostring;
                let prefab = ResourceManager.getInstance().getRes("ui_prefabs/games/PrefabUserInfo", cc.Prefab)
                if(prefab){
                    let infoNode = this.add_to_node(this.view["KW_LAYOUT_MATCH_USER"],prefab)
                    if(infoNode){
                        // this.set_string(this.seek_child_by_name(infoNode,"KW_TEXT_NAME"),numberid);
                        let headIndex = 1;
                        let json_object = JSON.parse(userinfostring);
                        if(json_object){
                            headIndex = json_object.uface;
                        }
                        let headString = "lobby/rectheader/1" + headIndex;
                        this.set_sprite(this.seek_child_by_name(infoNode,"KW_IMG_HEAD"),headString);
                        // this.set_string(this.seek_child_by_name(infoNode,"KW_TEXT_NAME"),json_object.uname);
                        this.set_string(this.seek_child_by_name(infoNode,"KW_TEXT_NAME"),json_object.unick);
                        this.set_string(this.seek_child_by_name(infoNode,"KW_TEXT_GOLD"),json_object.uchip);
                        this.set_visible(this.seek_child_by_name(infoNode,"KW_TEXT_GOLD"),true);

                        console.log("hcc>>show_math_user_info: url: ", json_object.avatarurl);
                        if (json_object.avatarurl && !StringUtil.isEmptyString(json_object.avatarurl)) {
                            this.set_headimg_url(this.seek_child_by_name(infoNode, "KW_IMG_HEAD"), json_object.avatarurl ,80);
                        }
                    }
                }
            });
        }
    }

    ////////////
    on_event_match_stop(body:any){
        let udata =  body;
        console.log("on_event_match_stop",udata)
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                this.close();
            }
        }
    }

}