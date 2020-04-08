import UIDialog from '../../framework/uibase/UIDialog';
import EventManager from '../../framework/manager/EventManager';
import { CmdName, Cmd } from '../../framework/protocol/GameHoodleProto';
import Response from '../../framework/config/Response';
import GameSendGameHoodleMsg from '../scene/gameScene/sendMsg/GameSendGameHoodle';
import { ResourceManager } from '../../framework/manager/ResourceManager';
import ArrayUtil from '../../framework/utils/ArrayUtil';

const { ccclass, property } = cc._decorator;

@ccclass
export default class BallCenterDialog extends UIDialog {

    onLoad(){
        super.onLoad()
        GameSendGameHoodleMsg.send_get_player_ball_info();
    }

    start () {
        this.initUI();
        this.add_event_dispatcher()
        this.add_button_event_listener()
    }

    add_event_dispatcher(){
        EventManager.on(CmdName[Cmd.eUserBallInfoRes], this, this.on_event_user_ball_info)
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"],this.on_click_close.bind(this))
        
    }

    onDestroy(){

    }

    initUI(){
        let scrollview:cc.Node = this.view["KW_SCROLLVIEW_NEW"];
        if(scrollview){
            let content:cc.Node = this.seek_child_by_name(scrollview,"content")
            let layout:cc.Node = this.seek_child_by_name(content,"KW_LAYOUT")
            if (layout){
                layout.removeAllChildren();
                // content.setContentSize(1080,1920)
            }
        }
    }

    /////////
    on_click_close(sender: cc.Component){
        this.close();
    }
    
    onKeyDown(event: cc.Event) {
        super.onKeyDown(event);
    }
    
    /////////
    on_event_user_ball_info(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                this.show_user_ball_info(udata.userballinfostring);
            }
        }
    }

    //showUI
    show_user_ball_info(ball_info_json:string){
        let ball_info_obj = null;
        try {
            ball_info_obj = JSON.parse(ball_info_json);
        } catch (error) {
            console.error(error)
            return;
        }

 
        //test
        /*
        let tmp_array = ArrayUtil.ObjClone(ball_info_obj);
        for(let idx = 8 ; idx <= 60; idx++){
            let key = "lv_" + String(idx+1);
            tmp_array[key] = 10;
        }
        ball_info_obj = tmp_array;
        */
        //

        if(ball_info_obj){
            let scrollview:cc.Node = this.view["KW_SCROLLVIEW_NEW"];
            let ball_count_all = 0;
            let prefab_size = null;
            if(scrollview){
                for(let key in ball_info_obj){
                    let info_str:string     = key;
                    let level_str:any       = info_str.split("_");
                    let level:string        = level_str[1];
                    let level_count:string    = ball_info_obj[key];
                    if (level_count && level && Number(level_count) != 0){
                        
                        let prefab = ResourceManager.getInstance().getRes("ui_prefabs/games/HoodleBallShow", cc.Prefab)
                        if(prefab){
                            let scrollview:cc.Node = this.view["KW_SCROLLVIEW_NEW"];
                            if(scrollview){
                                let layout:cc.Node = this.seek_child_by_name(scrollview,"KW_LAYOUT")
                                let infoNode:cc.Node = this.add_to_node(layout, prefab)
                                if(infoNode){
                                    this.set_string(this.seek_child_by_name(infoNode,"KW_TEXT_COUNT"),level_count);
                                    this.set_string(this.seek_child_by_name(infoNode,"KW_TEXT_LEVEL"), String(level) +  "级");
                                }
                                let conSize = infoNode.getContentSize();
                                // console.log("hcc>>size:" , conSize);
                                ball_count_all++;
                                prefab_size = conSize;
                            }
                        }
                    }
                }

                let content:cc.Node = this.seek_child_by_name(scrollview,"content")
                let layout:cc.Node = this.seek_child_by_name(content,"KW_LAYOUT")
                if(content && layout && ball_count_all > 30){
                    let height = prefab_size.height * Math.ceil((ball_count_all / 5)) + 200
                    content.setContentSize(content.getContentSize().width, height);
                }

            }
        }
    }

}