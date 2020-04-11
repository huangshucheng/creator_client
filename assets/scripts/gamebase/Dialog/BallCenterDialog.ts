import UIDialog from '../../framework/uibase/UIDialog';
import EventManager from '../../framework/manager/EventManager';
import { CmdName, Cmd } from '../../framework/protocol/GameHoodleProto';
import Response from '../../framework/config/Response';
import GameSendGameHoodleMsg from '../scene/gameScene/sendMsg/GameSendGameHoodle';
import { ResourceManager } from '../../framework/manager/ResourceManager';
import ArrayUtil from '../../framework/utils/ArrayUtil';
import GameAppConfig from '../../framework/config/GameAppConfig';
import DialogManager from '../../framework/manager/DialogManager';

const { ccclass, property } = cc._decorator;

@ccclass
export default class BallCenterDialog extends UIDialog {

    onLoad(){
        super.onLoad()
        this.add_event_dispatcher()
        this.add_button_event_listener()
    }

    start () {
        this.initUI();
        GameSendGameHoodleMsg.send_get_player_ball_info();
        //test
        // this.show_ball_test();
    }

    add_event_dispatcher(){
        EventManager.on(CmdName[Cmd.eUserBallInfoRes], this, this.on_event_user_ball_info)
        EventManager.on(CmdName[Cmd.eUpdateUserBallRes], this, this.on_event_update_user_ball_info)
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"],this.on_click_close.bind(this))
        this.add_click_event(this.view["KW_BTN_COMPOSE"],this.on_click_compose.bind(this))
        
    }

    onDestroy(){

    }

    initUI(){
        this.clear_ball_layout();
    }

    /////////
    on_click_close(sender: cc.Component){
        this.close();
    }

    on_click_compose(sender: cc.Component){
        let level = this.get_ball_compose_info();
        if (level){
            GameSendGameHoodleMsg.send_ball_compose(Number(level));
        }
    }
    
    onKeyDown(event: cc.Event) {
        super.onKeyDown(event);
    }
    
    get_ball_compose_info(){
        let compose_layer = this.view["KW_LAYOUT_COMPOSE"]
        if (!compose_layer){
            return;
        }
        let children = compose_layer.children;
        let level_array = [];
        for(let key in children){
            let comp_node = children[key];
            let level_node = this.seek_child_by_name(comp_node,"KW_TEXT_LEVEL");
            let level_str:string = this.get_string(level_node);
            let level_array_split = level_str.split("级")
            if (ArrayUtil.GetArrayLen(level_array_split) > 0 ){
                let level = level_array_split[0];
                console.log("hcc>>level: " , level);
                level_array.push(level);
            }
        }

        if (level_array.length != GameAppConfig.BALL_COMPOSE_COUNT){
            console.log("11111");
            DialogManager.getInstance().show_weak_hint("小球合成需要3个，目前不足!")
            return;
        }

        let level_table = {}
        for(let index = 0; index < level_array.length; index++){
            level_table[level_array[index]] = index;
        }

        let array_len = ArrayUtil.GetArrayLen(level_table);
        if(array_len != 1){
            console.log("22222");
            DialogManager.getInstance().show_weak_hint("不能同时合成多种小球，只能放置一种!")
            return;
        }

        return level_array[0];
    }

    //info_str: "lv_1"
    get_ball_level(info_str: string): string {
        let level_str = info_str.split("_");
        return level_str[1];
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

    on_event_update_user_ball_info(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                this.clear_ball_layout();
                this.show_user_ball_info(udata.userballinfostring);
                DialogManager.getInstance().show_weak_hint("合成成功!")
            }else{
                DialogManager.getInstance().show_weak_hint("合成失败!")
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
    }

    show_ball_test(){
        let scrollview:cc.Node = this.view["KW_SCROLLVIEW_NEW"];
        let layout_ball:cc.Node = this.seek_child_by_name(scrollview,"KW_LAYOUT")
        let ball_count_all = 0;
        let prefab_size = null;
        if(scrollview){
            for(let index = 1;index <= 30;index++){
                let prefab = ResourceManager.getInstance().getRes("ui_prefabs/games/HoodleBallShow", cc.Prefab)
                if(prefab){
                    let infoNode:cc.Node = this.add_to_node(layout_ball, prefab)
                    let conSize = infoNode.getContentSize();
                    ball_count_all++;
                    prefab_size = conSize;
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
        for(let idx = 8 ; idx <= 20; idx++){
            let key = "lv_" + String(idx+1);
            tmp_array[key] = 10;
        }
        ball_info_obj = tmp_array;
        */
        //

        if(ball_info_obj){
            let scrollview:cc.Node = this.view["KW_SCROLLVIEW_NEW"];
            let layout_ball:cc.Node = this.seek_child_by_name(scrollview,"KW_LAYOUT")
            let ball_count_all = 0;
            let prefab_size = null;
            if(scrollview){
                cc.log("hcc>>ball_info_obj: " , ball_info_obj)
                for(let key in ball_info_obj){
                    let level_count:string  = ball_info_obj[key];
                    let level: string = this.get_ball_level(key);
                    if (level_count && Number(level_count) != 0 && level){
                        let prefab = ResourceManager.getInstance().getRes("ui_prefabs/games/HoodleBallShow", cc.Prefab)
                        if(prefab){
                            let infoNode:any = this.add_to_node(layout_ball, prefab)
                            if(infoNode){
                                infoNode.info_obj = { level: level, count: level_count };
                                this.set_string(this.seek_child_by_name(infoNode,"KW_TEXT_COUNT"),level_count);
                                this.set_string(this.seek_child_by_name(infoNode,"KW_TEXT_LEVEL"), String(level) +  "级");
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
                }
            }
        }
    }

    on_click_ball_select(event:cc.Event, data:any){
        let ballComponent: cc.Component = event.target.getComponent(cc.Button);
        cc.log("hcc>>on_click_ball_select", ballComponent.node.name, data);
        if(!data){
            return
        }
        let level = Number(data.level);
        let count = Number(data.count);
        let compose_layer = this.view["KW_LAYOUT_COMPOSE"];
        let textCountNode = this.seek_child_by_name(ballComponent.node, "KW_TEXT_COUNT");
        let textCount = Number(this.get_string(textCountNode));
        if (level && count && compose_layer && textCount){
            if (textCount > 0 && count > 0 && compose_layer.childrenCount < GameAppConfig.BALL_COMPOSE_COUNT){
                textCount = textCount -1;
                this.set_string(this.seek_child_by_name(ballComponent.node,"KW_TEXT_COUNT"),String(textCount))
                //
                let newNode: cc.Node = cc.instantiate(event.target);
                this.clear_btn_click_event(newNode); //remove old click event
                compose_layer.addChild(newNode);
                newNode.y = 0;
                this.set_string(this.seek_child_by_name(newNode, "KW_TEXT_COUNT"), "1");
                this.add_click_evenet_with_data(newNode, "on_click_ball_unselect", data)
            }    
        }
    }

    on_click_ball_unselect(event:cc.Event, data:any){
        let ballComponent: cc.Component = event.target.getComponent(cc.Button);
        cc.log("hcc>>on_click_ball_unselect", ballComponent.node.name, data);
        if (!data) {
            return
        }
        let scrollview: cc.Node = this.view["KW_SCROLLVIEW_NEW"];
        let layout_ball: cc.Node = this.seek_child_by_name(scrollview, "KW_LAYOUT")
        if (layout_ball){
            let children = layout_ball.children;
            for (let key in children) {
                let childNode:any = children[key];
                let info_obj = childNode.info_obj;
                if (info_obj) {
                    if (info_obj.level == data.level && info_obj.count == data.count) { //等级和个数都相等
                        let originCount = this.get_string(this.seek_child_by_name(childNode, "KW_TEXT_COUNT"));
                        let tmpCount = Number(originCount) + 1;
                        this.set_string(this.seek_child_by_name(childNode, "KW_TEXT_COUNT"), String(tmpCount));
                        event.target.destroy();
                        break;
                    }
                }
            }
        }
    }
}