//我的弹珠页面

import UIDialog from '../../framework/uibase/UIDialog';
import Response from '../../framework/protocol/Response';
import GameSendGameHoodleMsg from '../scene/gameScene/sendMsg/GameSendGameHoodle';
import { ResourceManager } from '../../framework/manager/ResourceManager';
import StringUtil from '../../framework/utils/StringUtil';
import { AudioManager } from '../../framework/manager/AudioManager';
import Stype from '../../framework/protocol/Stype';

let EMOJ_COUNT = 35;
let EMOJ_KEY_STR = "games/emoj/face_%d.png"

const { ccclass, property } = cc._decorator;

@ccclass
export default class EmojDialog extends UIDialog {

    _ball_info_str = "";

    onLoad(){
        super.onLoad()
    }
    
    start () {
        super.start()
        this.initUI();
        this.add_protocol_delegate();
    }

    add_cmd_handler_map() {
        this._cmd_handler_map = {
        }
    }

    on_recv_server_message(stype: number, ctype: number, body: any){
        if (stype !== Stype.S_TYPE.GameHoodle) {
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
        this.show_emoj();
    }

    on_click_close(sender: cc.Component){
        this.close();
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
    }

    show_emoj(){
        this.clear_ball_layout();
        let emoj_info_array = []
        for (let index = 1; index <= EMOJ_COUNT; index++){
            let ballkey = StringUtil.format(EMOJ_KEY_STR,index); 
            emoj_info_array[index] = ballkey;
        }

        if (emoj_info_array){
            let scrollview:cc.Node = this.view["KW_SCROLLVIEW_NEW"];
            let layout_ball:cc.Node = this.seek_child_by_name(scrollview,"KW_LAYOUT")
            let ball_count_all = 0;
            let prefab_size = null;
            if(scrollview){
                for (let key in emoj_info_array){
                    let ballStr = emoj_info_array[key];
                    let prefab = ResourceManager.getInstance().getRes("ui_prefabs/games/EmojShow", cc.Prefab)
                    if(prefab){
                        let infoNode:any = this.add_to_node(layout_ball, prefab)
                        if(infoNode){
                            this.set_sprite_asyc(this.seek_child_by_name(infoNode,"KW_EMOJ_NODE"),ballStr);
                            this.add_click_evenet_with_data(infoNode, "on_click_emoj_select",{index: key})
                        }
                        let conSize = infoNode.getContentSize();
                        ball_count_all++;
                        prefab_size = conSize;
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

    on_click_emoj_select(event:cc.Event, data:any){
        console.log("hcc>>on_click_emoj_select", data);
        if(!data){
            return
        }
        let index = Number(data.index);
        console.log("on_click_emoj_select index: " , index)
        GameSendGameHoodleMsg.send_use_emoj(index);
        this.close();
        AudioManager.getInstance().playBtnClick();
    }
}