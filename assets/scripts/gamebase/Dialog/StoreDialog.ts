import UIDialog from '../../framework/uibase/UIDialog';
import EventManager from '../../framework/manager/EventManager';
import { CmdName, Cmd } from '../../framework/protocol/GameHoodleProto';
import Response from '../../framework/protocol/Response';
import GameSendGameHoodleMsg from '../scene/gameScene/sendMsg/GameSendGameHoodle';
import { ResourceManager } from '../../framework/manager/ResourceManager';
import ArrayUtil from '../../framework/utils/ArrayUtil';
import DialogManager from '../../framework/manager/DialogManager';
import LobbySendGameHoodleMsg from '../scene/lobbyScene/sendMsg/LobbySendGameHoodle';
import UserInfo from '../../framework/common/UserInfo';

const { ccclass, property } = cc._decorator;

@ccclass
export default class StoreDialog extends UIDialog {

    onLoad(){
        super.onLoad()
        this.add_event_dispatcher()
        this.add_button_event_listener()
    }

    start () {
        this.initUI();
        GameSendGameHoodleMsg.send_store_list_req();
    }

    add_event_dispatcher(){
        EventManager.on(CmdName[Cmd.eStoreListRes], this, this.on_event_store_list);
        EventManager.on(CmdName[Cmd.eBuyThingsRes], this, this.on_event_buy_things);
        EventManager.on(CmdName[Cmd.eUserGameInfoRes], this, this.on_event_ugame_info);
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"], this.on_click_close.bind(this))
    }

    onDestroy(){

    }

    initUI(){
        this.clear_ball_layout();
        this.set_string(this.view["KW_TEXT_MY_CHIP"], "我的金币：" + UserInfo.get_uchip());
    }

    ///////// clickevent
    on_click_close(sender: cc.Component){
        this.close();
    }

    onKeyDown(event: cc.Event) {
        super.onKeyDown(event);
    }
    

    ///////// netkevent
    on_event_store_list(event: cc.Event.EventCustom){
        let udata = event.getUserData()
        if (udata) {
            let status = udata.status
            if (status == Response.OK) {
                this.show_store_product_info(udata.storeprops);
            }
        }
    }

    on_event_buy_things(event: cc.Event.EventCustom) {
        let udata = event.getUserData()
        if (udata) {
            let status = udata.status
            if (status == Response.OK) {
                //刷新金币
                LobbySendGameHoodleMsg.send_get_ugame_info();
                DialogManager.getInstance().show_weak_hint("购买成功!")
            }
            else{
                DialogManager.getInstance().show_weak_hint("购买失败,金币不足!")
            }
        }
    }

    //刷新金币
    on_event_ugame_info(event: cc.Event.EventCustom) {
        let udata = event.getUserData()
        console.log("on_event_ugame_info", udata)
        if (udata) {
            let status = udata.status
            if (status == Response.OK) {
                let ugame_info = JSON.parse(udata.userinfostring);
                let uchip = ugame_info.uchip;
                this.set_string(this.view["KW_TEXT_MY_CHIP"], "我的金币：" + String(uchip));
            }
        }
    }

    /////////
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

    //showUI
    show_store_product_info(storeprops_obj:any){
        this.clear_ball_layout();

        console.log("hcc>>storeprops_obj: ", storeprops_obj)
        if(!storeprops_obj){
            return;
        }

        if (ArrayUtil.GetArrayLen(storeprops_obj) <= 0){
            return;
        }

        let scrollview:cc.Node = this.view["KW_SCROLLVIEW_NEW"];
        let layout_ball:cc.Node = this.seek_child_by_name(scrollview,"KW_LAYOUT")
        let ball_count_all = 0;
        let prefab_size = null;
        if(scrollview){
            for (let key in storeprops_obj){
                let storeprop: any = storeprops_obj[key];
                let storeprop_info = JSON.parse(storeprop.propinfo)
                let prefab = ResourceManager.getInstance().getRes("ui_prefabs/games/StoreProduct", cc.Prefab)
                if(prefab){
                    let infoNode:any = this.add_to_node(layout_ball, prefab)
                    if(infoNode){
                        this.set_string(this.seek_child_by_name(infoNode, "KW_TEXT_PRICE"), storeprop.propprice + "金币");
                        this.set_string(this.seek_child_by_name(infoNode, "KW_TEXT_LEVEL"), storeprop_info.level +  "级");
                        this.add_click_evenet_with_data(infoNode, "on_click_product", storeprop);
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
            }
        }
    }

    on_click_product(event: cc.Event, data: any){
        if(!data){
            return;
        }
        
        console.log("hcc>>click: " , data);
        let req_body = {
            propsvrindex: data.propsvrindex,
            propid: data.propid,
            propcount: data.propcount,
            propprice: data.propprice,
            propinfo: data.propinfo,
        }
        
        DialogManager.getInstance().show_common_dialog(2, function (dialogScript: any) {
            if (dialogScript) {
                let level_obj = JSON.parse(data.propinfo);
                let showTextStr = "确定将购买" + data.propcount + "个" + level_obj.level + "级弹珠吗?" + "需要" + data.propprice + "金币哦!"
                dialogScript.set_content_text(showTextStr);
                dialogScript.set_btn_callback(
                    function () { GameSendGameHoodleMsg.send_buy_product(req_body);},
                )
            }
        });

    }

}