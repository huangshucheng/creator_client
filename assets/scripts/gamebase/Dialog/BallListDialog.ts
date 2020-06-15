//我的弹珠页面

import UIDialog from '../../framework/uibase/UIDialog';
import { CmdName, Cmd } from '../../framework/protocol/GameHoodleProto';
import Response from '../../framework/protocol/Response';
import GameSendGameHoodleMsg from '../scene/gameScene/sendMsg/GameSendGameHoodle';
import { ResourceManager } from '../../framework/manager/ResourceManager';
import { Stype } from '../../framework/protocol/Stype';
import DialogManager from '../../framework/manager/DialogManager';
import StringUtil from '../../framework/utils/StringUtil';
import CommonDialog from './CommonDialog';

let BALL_NAME_KEY_STR = "ball_name_level_"
let BALL_TEXTURE_KEY_STR = "games/balls/ball_level_%s.png"

const { ccclass, property } = cc._decorator;

@ccclass
export default class BallListDialog extends UIDialog {

    _ball_info_str = "";
    _cur_user_ball_level = "1";

    onLoad(){
        super.onLoad()
    }
    
    start () {
        super.start()
        this.initUI();
        this.add_protocol_delegate();
        GameSendGameHoodleMsg.send_get_player_ball_info();
        GameSendGameHoodleMsg.send_get_user_config();
    }

    add_cmd_handler_map() {
        this._cmd_handler_map = {
            [Cmd.eUserBallInfoRes]: this.on_event_user_ball_info,
            [Cmd.eUserConfigRes]: this.on_event_user_config,
            [Cmd.eUseHoodleBallRes]: this.on_event_use_hoodleball,
        }
    }

    on_recv_server_message(stype: number, ctype: number, body: any){
        if (stype !== Stype.GameHoodle) {
            return;
        }

        if (this._cmd_handler_map[ctype]) {
            this._cmd_handler_map[ctype].call(this, body);
        }
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"],this.on_click_close.bind(this))
    }

    initUI(){
        this.clear_ball_layout();
    }

    /////////
    on_click_close(sender: cc.Component){
        this.close();
    }

    onKeyDown(event: cc.Event) {
        super.onKeyDown(event);
    }
    
    //info_str: "lv_1"
    get_ball_level(info_str: string): string {
        let level_str = info_str.split("_");
        return level_str[1];
    }

    /////////
    on_event_user_ball_info(body:any){
        let udata =  body;
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                this._ball_info_str = udata.userballinfostring;
                this.show_user_ball_info(udata.userballinfostring);
            }
        }
    }

    on_event_user_config(body:any){
        if(body){
            let status = body.status;
            if(status == Response.OK){
                let userconfigsobj = JSON.parse(body.userconfigstring);
                let user_ball_level = userconfigsobj["user_ball_level"];
                this._cur_user_ball_level = user_ball_level;
                if(user_ball_level){
                    this.show_cur_use_ball(user_ball_level);
                }
            }
        }
    }

    on_event_use_hoodleball(body:any){
        if (body) {
            let status = body.status;
            if (status == Response.OK) {
                let user_ball_level = body.balllevel;
                if (user_ball_level) {
                    this.show_user_ball_info(this._ball_info_str)
                    this.show_cur_use_ball(user_ball_level);
                    this._cur_user_ball_level = user_ball_level;
                    GameSendGameHoodleMsg.send_get_user_config();
                    DialogManager.getInstance().show_weak_hint("使用成功!");
                }
            }else{
                DialogManager.getInstance().show_weak_hint("使用失败!");
            }
        }
    }

    show_cur_use_ball(ballLevel:number){
        let user_ball_level = ballLevel;
        if (user_ball_level) {
            let scrollview: cc.Node = this.view["KW_SCROLLVIEW_NEW"];
            if (scrollview) {
                let content: cc.Node = this.seek_child_by_name(scrollview, "content")
                let layout: cc.Node = this.seek_child_by_name(content, "KW_LAYOUT")
                if (layout) {
                    let childStr = BALL_NAME_KEY_STR + user_ball_level;
                    let findNode = this.seek_child_by_name(layout, childStr);
                    if (findNode) {
                        let setString = user_ball_level + "级(使用中)";
                        this.set_string(this.seek_child_by_name(findNode, "KW_TEXT_LEVEL"), setString);
                    }
                }
            }
        }
    }

    clear_ball_layout(){
        let scrollview:cc.Node = this.view["KW_SCROLLVIEW_NEW"];
        if(scrollview){
            let content:cc.Node = this.seek_child_by_name(scrollview,"content")
            let layout:cc.Node = this.seek_child_by_name(content,"KW_LAYOUT")
            if (layout){
                layout.removeAllChildren();
            }
        }

        let composeLayer = this.view["KW_LAYOUT_COMPOSE"]
        if (composeLayer){
            composeLayer.removeAllChildren();
        }
        this.set_visible(this.view["KW_TEXT_TITLE_UNDO"], false);
    }

    //showUI
    show_user_ball_info(ball_info_json:string){
        this.clear_ball_layout();
        let ball_info_obj = null;
        try {
            ball_info_obj = JSON.parse(ball_info_json);
        } catch (error) {
            console.error(error)
            return;
        }
        //test
        // for(let index = 1 ;index <= 58; index++){
        //     let strrr = "lv_" + index;
        //     ball_info_obj[strrr] = "1";
        // }

        if(ball_info_obj){
            let scrollview:cc.Node = this.view["KW_SCROLLVIEW_NEW"];
            let layout_ball:cc.Node = this.seek_child_by_name(scrollview,"KW_LAYOUT")
            let ball_count_all = 0;
            let prefab_size = null;
            if(scrollview){
                console.log("hcc>>ball_info_obj: " , ball_info_obj)
                for(let key in ball_info_obj){
                    let level_count:string  = ball_info_obj[key];
                    let level: string = this.get_ball_level(key);
                    if (level_count && level){
                        let prefab = ResourceManager.getInstance().getRes("ui_prefabs/games/HoodleBallShow", cc.Prefab)
                        if(prefab){
                            let infoNode:any = this.add_to_node(layout_ball, prefab)
                            if(infoNode){
                                infoNode.name = BALL_NAME_KEY_STR + level;
                                this.set_string(this.seek_child_by_name(infoNode,"KW_TEXT_COUNT"),level_count);
                                this.set_string(this.seek_child_by_name(infoNode,"KW_TEXT_LEVEL"), String(level) +  "级");
                                this.set_visible(this.seek_child_by_name(infoNode, "KW_TEXT_COUNT"), false);
                                this.set_visible(this.seek_child_by_name(infoNode, "KW_IMG_LEVEL_BG"), false);
                                let ballNameStr = StringUtil.format(BALL_TEXTURE_KEY_STR,level);
                                this.set_sprite_asyc(this.seek_child_by_name(infoNode, "KW_IMG_BALL_BODY"), ballNameStr);
                                this.add_click_evenet_with_data(infoNode, "on_click_ball_select",{level: level, count: level_count})
                            }
                            let conSize = infoNode.getContentSize();
                            ball_count_all++;
                            prefab_size = conSize;
                        }
                    }
                }
                let content:cc.Node = this.seek_child_by_name(scrollview,"content")
                if(content && ball_count_all > 30){
                    let height = prefab_size.height * Math.ceil((ball_count_all / 5)) + 200
                    content.setContentSize(content.getContentSize().width, height);
                    let scrollCom:cc.ScrollView = scrollview.getComponent(cc.ScrollView);
                    if (scrollCom){
                        scrollCom.scrollToTop(0.01);
                    }
                }
            }
        }
    }

    on_click_ball_select(event:cc.Event, data:any){
        let ballComponent: cc.Component = event.target.getComponent(cc.Button);
        console.log("hcc>>on_click_ball_select", ballComponent.node.name, data);
        if(!data){
            return
        }
        let level = Number(data.level);
        let _this = this;
        let resNode: cc.Node = DialogManager.getInstance().show_common_dialog();
        if (resNode) {
            let script: CommonDialog = resNode.getComponent("CommonDialog");
            if (script) {
                let showTextStr = "确定使用（" + level + "）级弹珠吗？"
                script.set_content_text(showTextStr);
                script.set_btn_callback(
                    function () { 
                        if (Number(_this._cur_user_ball_level) == level) {
                            DialogManager.getInstance().show_weak_hint("当前已经使用该等级!");
                            return
                        }
                        GameSendGameHoodleMsg.send_use_ball(level);
                     },
                    function () { },
                    function () { },
                )
            }
        }
    }
}