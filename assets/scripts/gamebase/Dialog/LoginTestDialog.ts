//商城界面

import UIDialog from '../../framework/uibase/UIDialog';
import ArrayUtil from '../../framework/utils/ArrayUtil';
import { AudioManager } from '../../framework/manager/AudioManager';
import Stype from '../../framework/protocol/Stype';
import GameAppConfig from '../../framework/config/GameAppConfig';
import SendAuthMsg from '../sendMsg/SendAuthMsg';
import UIFunction from '../../framework/common/UIFunciton';

const { ccclass, property } = cc._decorator;

@ccclass
class LoginTestDialog extends UIDialog {

    static show_layer() {
        return UIFunction.getInstance().add_prefab_to_scene("ui_prefabs/dialog/DialogLoginTest", "LoginTestDialog")
    }

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
        }
    }

    on_recv_server_message(stype: number, ctype: number, body: any) {
        if (stype !== Stype.S_TYPE.Auth) {
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
        this.show_store_product_info(GameAppConfig.TEST_ACCOUNT);
    }

    ///////// clickevent
    on_click_close(sender: cc.Component){
        this.close();
    }

    onKeyDown(event: cc.Event) {
        super.onKeyDown(event);
    }

    /////////
    clear_ball_layout(){
        let scrollview:cc.Node = this.view["KW_SCROLLVIEW_NEW"];
        if(scrollview){
            let content:cc.Node = this.seek_child_by_name(scrollview,"content")
            if (content){
                content.removeAllChildren();
            }
        }
    }

    //showUI
    show_store_product_info(account_info:any){
        this.clear_ball_layout();

        console.log("hcc>>account_info: ", account_info)
        if (!account_info){
            return;
        }

        if (ArrayUtil.GetArrayLen(account_info) <= 0){
            return;
        }

        let scrollview:cc.Node = this.view["KW_SCROLLVIEW_NEW"];
        let layout_ball: cc.Node = this.seek_child_by_name(scrollview,"content");
        let ball_count_all = 0;
        let prefab_size = null;
        let node_item = this.seek_child_by_name(this.view["DialogLoginTest"], "NODE_ITEM");
        if(scrollview && node_item){
            for (let key in account_info){
                let account = key;
                let password = account_info[key];
                let info = { [account] : password}
                let prefab = cc.instantiate(node_item)
                if(prefab){
                    let infoNode:any = this.add_to_node(layout_ball, prefab)
                    if(infoNode){
                        this.set_string(this.seek_child_by_name(infoNode, "KW_TEXT_ACCOUNT"), account);
                        this.add_click_evenet_with_data(infoNode, "on_click_product", info);
                    }
                    let conSize = infoNode.getContentSize();
                    ball_count_all++;
                    prefab_size = conSize;
                }
            }
            let content:cc.Node = this.seek_child_by_name(scrollview,"content")
            if(content && ball_count_all > 27){
                let height = prefab_size.height * (Math.ceil((ball_count_all / 3)) + 10);
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
        for(let key in data){
            SendAuthMsg.send_uname_login(key,data[key]);
        }
        AudioManager.getInstance().playBtnClick();
        this.close();
    }
}

export = LoginTestDialog;