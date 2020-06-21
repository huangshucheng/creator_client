//匹配界面
import UIDialog from '../../framework/uibase/UIDialog';
import LobbySendGameHoodleMsg from '../scene/lobbyScene/sendMsg/LobbySendGameHoodle';
import { CmdName, Cmd } from '../../framework/protocol/GameHoodleProto';
import Response from '../../framework/protocol/Response';
import { ResourceManager } from '../../framework/manager/ResourceManager';
import StringUtil from '../../framework/utils/StringUtil';
import { Stype } from '../../framework/protocol/Stype';

let BALL_TEXTURE_KEY_STR = "games/balls/ball_level_%s.png"

const { ccclass, property } = cc._decorator;

@ccclass
export default class MatchDialog extends UIDialog {

    onLoad(){
        super.onLoad()
    }

    start () {
        super.start();
        this.add_protocol_delegate();
        this.show_match_ani();
    }

    add_cmd_handler_map() {
        this._cmd_handler_map = {
            [Cmd.eUserMatchRes]: this.on_event_match,
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
                        let headIndex = 1;
                        let json_object = JSON.parse(userinfostring);
                        if(json_object){
                            headIndex = json_object.uface;
                        }
                        let ball_level = json_object.userconfig.user_ball_level || 1;
                        let ufaceImg = StringUtil.format(BALL_TEXTURE_KEY_STR, ball_level);
                        this.set_sprite_asyc(this.seek_child_by_name(infoNode,"KW_IMG_HEAD"),ufaceImg);
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

    on_event_match(body: any){
        let udata = body;
        if (udata) {
            let status = udata.status
            if (status == Response.OK) {
                let matchsuccess = udata.matchsuccess;
                if (matchsuccess == true) {
                    this.set_string(this.view["KW_TEXT_TIP"],"匹配完成!");
                    let textNode = this.view["KW_TEXT_TIP"];
                    if(textNode){
                        textNode.stopAllActions();
                    }
                    this.set_visible(this.view["KW_UI_BTN_CANCEL"],false);
                }else{
                    this.set_string(this.view["KW_TEXT_TIP"], "请稍候，正在匹配中");
                }
            } else if (status == Response.NOT_YOUR_TURN) {
                this.set_string(this.view["KW_TEXT_TIP"], "请稍等候，正在匹配中");
            }
        }
    }

    show_match_ani(){
        let textNode = this.view["KW_TEXT_TIP"];
        if(textNode){
            let tmpnumber = 0;
            let tmpStr = ".";
            let delay = cc.delayTime(0.5);
            let callfunc = cc.callFunc(function(){
                tmpnumber++;
                if(tmpnumber % 3 == 0){
                    tmpStr = "...";
                }else if (tmpnumber % 3 == 1){
                    tmpStr = ".";
                }else{
                    tmpStr = "..";
                } 
                this.set_string(this.view["KW_TEXT_TIP"], "请稍候，正在匹配中" + tmpStr);
            }.bind(this));
            textNode.stopAllActions();
            textNode.runAction(cc.repeatForever(cc.sequence(delay, callfunc)))
        }
    }

}