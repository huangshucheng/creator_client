//签到界面

import UIDialog from '../../framework/uibase/UIDialog';
import Response from '../../framework/protocol/Response';
import UserInfo from '../../framework/common/UserInfo';
import SendSystem from '../sendMsg/SendSystem';
import DialogManager from '../../framework/manager/DialogManager';
import CellManager from '../../framework/manager/CellManager';
import { Cell } from '../../framework/cell/Cell';
import { AudioManager } from '../../framework/manager/AudioManager';
import Stype from '../../framework/protocol/Stype';
import SystemProto from '../../framework/protocol/protofile/SystemProto';
import UIFunction from '../../framework/common/UIFunciton';

const { ccclass, property } = cc._decorator;

@ccclass
class SignDialog extends UIDialog {

    static show_layer() {
        return UIFunction.getInstance().add_prefab_to_scene("ui_prefabs/dialog/DialogSign", "SignDialog")
    }

    onLoad(){
        super.onLoad()
    }

    start () {
        super.start();
        this.initUI();
        this.add_protocol_delegate();
        SendSystem.send_get_reward_info();
    }

    add_cmd_handler_map() {
        this._cmd_handler_map = {
            [SystemProto.XY_ID.RES_LOGINREWARDCONFIG]: this.on_event_reward_info.bind(this),
            [SystemProto.XY_ID.RES_LOGINREWARDSIGN]: this.on_event_sign_res.bind(this),
        }
    }

    on_recv_server_message(stype: number, ctype: number, body: any) {
        if (stype !== Stype.S_TYPE.System) {
            return;
        }

        if (this._cmd_handler_map[ctype]) {
            this._cmd_handler_map[ctype].call(this, body);
        }
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"], this.on_click_close.bind(this))
    }

    initUI() {
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

    on_event_reward_info(body:any) {
        console.log("on_event_reward_info", body)
        if (body) {
            let status = body.status
            if (status == Response.SUCCESS) {
                this.show_reward_info(body);
            }
        }
    }

    //刷新金币
    on_event_ugame_info(cell: Cell, type: number, body: any) {
        // console.log("on_event_ugame_info111111111111111 " , body);
        if (body) {
            if (body.status == Response.SUCCESS) {
                let ugame_info = JSON.parse(body.userinfostring);
                let uchip = ugame_info.uchip;
                this.set_string(this.view["KW_TEXT_MY_CHIP"], "我的金币：" + String(uchip));
            }
        }
    }

    on_event_sign_res(body:any){
        if(body){
            let status = body.status;
            if (status == Response.SUCCESS){
                SendSystem.send_get_reward_info();
                DialogManager.getInstance().show_weak_hint("签到成功");
                let cell = CellManager.getInstance().start("CellGetUserProp",null,5);
                CellManager.getInstance().addCellCallBack(cell,this.on_event_ugame_info.bind(this));
               
                let rewardconfig = body.rewardconfig;
                if (rewardconfig){
                    let rewardObj = JSON.parse(rewardconfig);
                    let propid = rewardObj.propid;
                    let propcount = rewardObj.propcount;
                    let dialog = DialogManager.getInstance().show_poplayer("RewardDialog");
                    if (dialog) {
                        let script = dialog.getComponent("RewardDialog");
                        if (script) {
                            let item = script.add_item();
                            if (item) {
                                let lobby_coin = "lobby/lobby_coin.png";
                                this.set_sprite_asyc(this.seek_child_by_name(item, "KW_IMG_ITEM_BODY"),lobby_coin);
                                this.set_string(this.seek_child_by_name(item, "KW_TEXT_DESC"), propcount);
                            }
                        }
                    }
                }

            }else{
                DialogManager.getInstance().show_weak_hint("签到失败");
            }
        }
    }

    /////////
    clear_ball_layout(){
        let scrollview:cc.Node = this.view["KW_SCROLLVIEW_NEW"];
        if(scrollview){
            let content:cc.Node = this.seek_child_by_name(scrollview,"content")
            let layout:cc.Node = this.seek_child_by_name(content,"KW_LAYOUT")
            this.set_visible(layout, false);
        }
    }

    //showUI
    show_reward_info(body:any){
        console.log("hcc>>show_reward_info: ", body)
        if (!body){
            return;
        }

        let signdays = body.signdays;
        let istodaysign = body.istodaysign;
        if(signdays != null){
            this.set_string(this.view["KW_TEXT_TITLE"],"您已累计签到" + signdays + "天!");
        }

        let isSignStr = istodaysign ? "今日已经签到！" : "请点击签到！";
        this.set_string(this.view["KW_TEXT_SIGN_TIP"], isSignStr);

        let reward_info = JSON.parse(body.config);
        if (!reward_info){
            return;
        }

        let scrollview:cc.Node = this.view["KW_SCROLLVIEW_NEW"];
        let layout_ball:cc.Node = this.seek_child_by_name(scrollview,"KW_LAYOUT")
        this.set_visible(layout_ball, true);
        if(scrollview){
            for (let key in reward_info){
                let rewardprop: any = reward_info[key];
                let infoNode = this.view["NODE_ITEM_" + key];
                if(infoNode){
                    this.set_string(this.seek_child_by_name(infoNode, "KW_TEXT_DAY"), "第" + key + "天");
                    this.set_string(this.seek_child_by_name(infoNode, "KW_TEXT_COUNT"), rewardprop.propcount);
                    this.set_string(this.seek_child_by_name(infoNode, "KW_TEXT_STATE"), "");
                    if(rewardprop.isget == true){
                        this.set_string(this.seek_child_by_name(infoNode, "KW_TEXT_STATE"), "已签到");
                    }
                    if (rewardprop.canget == true){
                        this.set_string(this.seek_child_by_name(infoNode, "KW_TEXT_STATE"), "可签到");
                    }
                    this.add_click_evenet_with_data(infoNode, "on_click_sign", rewardprop);
                }
            }
        }
    }

    on_click_sign(event: cc.Event, data: any){
        if(data){
            if(data.canget == true){
                SendSystem.send_sign_req(data.day);
            }else{
                if(data.isget == true){
                    DialogManager.getInstance().show_weak_hint("不能重复签到哦！");
                }else {
                    DialogManager.getInstance().show_weak_hint("还不能签到哦！");
                }
            }
        }
        AudioManager.getInstance().playBtnClick();
    }
}

export = SignDialog;