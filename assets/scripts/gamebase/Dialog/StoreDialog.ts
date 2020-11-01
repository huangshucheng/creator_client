//商城界面

import UIDialog from '../../framework/uibase/UIDialog';
import Response from '../../framework/protocol/Response';
import { ResourceManager } from '../../framework/manager/ResourceManager';
import ArrayUtil from '../../framework/utils/ArrayUtil';
import DialogManager from '../../framework/manager/DialogManager';
import UserInfo from '../../framework/common/UserInfo';
import StringUtil from '../../framework/utils/StringUtil';
import { AudioManager } from '../../framework/manager/AudioManager';
import Stype from '../../framework/protocol/Stype';
import SendLobbyMsg from '../sendMsg/SendLobbyMsg';
import UIFunction from '../../framework/common/UIFunciton';

let BALL_TEXTURE_KEY_STR = "games/balls/ball_level_%s.png"

const { ccclass, property } = cc._decorator;

@ccclass
class StoreDialog extends UIDialog {

    static show_layer() {
        return UIFunction.getInstance().add_prefab_to_scene("ui_prefabs/dialog/DialogStore", "StoreDialog")
    }

    onLoad(){
        super.onLoad()
    }

    start () {
        super.start();
        this.initUI();
        this.add_protocol_delegate();
        // SendGameMsg.send_store_list_req();
    }

    add_cmd_handler_map() {
        this._cmd_handler_map = {
            // [GameHoodleProto.XY_ID.eStoreListRes]: this.on_event_store_list.bind(this),
            // [GameHoodleProto.XY_ID.eBuyThingsRes]: this.on_event_buy_things.bind(this),
            // [GameHoodleProto.XY_ID.eUserGameInfoRes]: this.on_event_ugame_info.bind(this),
        }
    }

    on_recv_server_message(stype: number, ctype: number, body: any) {
        if (stype !== Stype.S_TYPE.GameHoodle) {
            return;
        }

        if (this._cmd_handler_map[ctype]) {
            this._cmd_handler_map[ctype].call(this, body);
        }
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"], this.on_click_close.bind(this))
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
    on_event_store_list(body:any){
        let udata = body;
        if (udata) {
            let status = udata.status
            if (status == Response.SUCCESS) {
                this.show_store_product_info(udata.storeprops);
            }
        }
    }

    on_event_buy_things(body:any) {
        let udata = body;
        if (udata) {
            let status = udata.status
            if (status == Response.SUCCESS) {
                //刷新金币
                SendLobbyMsg.send_get_ugame_info();
                DialogManager.getInstance().show_weak_hint("购买成功!")
            }
            else{
                DialogManager.getInstance().show_weak_hint("购买失败,金币不足!")
            }
        }
    }

    //刷新金币
    on_event_ugame_info(body:any) {
        let udata = body;
        console.log("on_event_ugame_info", udata)
        if (udata) {
            let status = udata.status
            if (status == Response.SUCCESS) {
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
                        let ballNameStr = StringUtil.format(BALL_TEXTURE_KEY_STR, storeprop_info.level);
                        this.set_sprite_asyc(this.seek_child_by_name(infoNode, "KW_IMG_BALL_BODY"), ballNameStr);
                        this.add_click_evenet_with_data(infoNode, "on_click_product", storeprop);
                    }
                    let conSize = infoNode.getContentSize();
                    ball_count_all++;
                    prefab_size = conSize;
                }
            }
            let content:cc.Node = this.seek_child_by_name(scrollview,"content")
            if(content && ball_count_all > 30){
                let height = prefab_size.height * Math.ceil((ball_count_all / 4)) + 130
                content.setContentSize(content.getContentSize().width, height);
                let scrollCom: cc.ScrollView = scrollview.getComponent(cc.ScrollView);
                if (scrollCom) {
                    scrollCom.scrollToTop(0.01);
                }
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
        let level_obj = JSON.parse(data.propinfo);
        let showTextStr = "确定将购买" + data.propcount + "个" + level_obj.level + "级弹珠吗?" + "需要" + data.propprice + "金币哦!"
        let resNode: cc.Node = DialogManager.getInstance().show_common_layer();
        if (resNode) {
            let script = resNode.getComponent("CommonDialog");
            if (script) {
                script.set_content_text(showTextStr);
                script.set_btn_callback(
                    // function () { SendGameMsg.send_buy_product(req_body); },
                )
            }
        }
        AudioManager.getInstance().playBtnClick();

    }

}

export = StoreDialog;