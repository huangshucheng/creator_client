import UIController from '../../../framework/uibase/UIController';
import DialogManager from '../../../framework/manager/DialogManager';
import LobbySendGameHoodleMsg from './sendMsg/LobbySendGameHoodle';
import GameHoodleConfig from '../../../framework/config/GameHoodleConfig';
import { AudioManager } from '../../../framework/manager/AudioManager';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneTouchEvent extends UIController {

    onLoad() {
        super.onLoad()
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_SET"],this.on_click_set.bind(this))
        this.add_click_event(this.view["BTN_CREATE_ROOM"],this.on_click_create_room.bind(this))
        this.add_click_event(this.view["KW_BTN_LOGIN_LOGIC"],this.on_click_login_logic.bind(this))
        this.add_click_event(this.view["BTN_JOIN_ROOM"],this.on_click_join_room.bind(this))
        this.add_click_event(this.view["BTN_BACK_ROOM"],this.on_click_back_room.bind(this))
        this.add_click_event(this.view["IMG_HEAD"],this.on_click_head.bind(this))
        this.add_click_event(this.view["BTN_MATCH_STOP"],this.on_click_match_stop.bind(this))
        this.add_click_event(this.view["KW_BTN_BALL_COMPOSE"], this.on_click_ball_compose.bind(this))
        this.add_click_event(this.view["KW_BTN_STORE"], this.on_click_store.bind(this))
        this.add_click_event(this.view["KW_BTN_BALL_LIST"], this.on_click_ball_list.bind(this))
        this.add_click_event(this.view["KW_BTN_SIGN"], this.on_click_sign.bind(this))
        //带参数的点击事件
        // this.add_click_evenet_with_data(this.view["KW_BTN_BALL"], "on_click_ball_dialog_data",[1,2,3,5]) // test
    }
    
    //test
    on_click_ball_dialog_data(event: cc.Event, customEventData: any) {
        // let tgNode: cc.Node = event.target;
        // let btn = tgNode.getComponent(cc.Button);
        // console.log("hccccc11111", customEventData, btn.name, tgNode.name);
    }

    on_click_set(sender:cc.Component) {
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogMyCenter","MyCenterDialog")
    }

    on_click_create_room(sender:cc.Component){
        let ruleStr = JSON.stringify(GameHoodleConfig.BOX_GAME_RULE);
        LobbySendGameHoodleMsg.send_create_room(ruleStr);
        LobbySendGameHoodleMsg.send_get_room_status();
    }

    on_click_login_logic(sender:cc.Component){
    }

    on_click_join_room(sender: cc.Component){
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogJoinRoom","JoinRoomDialog")
    }

    on_click_head(sender: cc.Component){
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogMyCenter","MyCenterDialog")
    }

    on_click_back_room(sender: cc.Component){
        LobbySendGameHoodleMsg.send_get_room_status();
        LobbySendGameHoodleMsg.send_back_room();
    }

    on_click_match_room_with_data(event: cc.Event, customEventData: any){
        console.log("on_click_match_room_with_data" , customEventData);
        let roomlevel = customEventData.roomlevel;
        if (roomlevel){
            LobbySendGameHoodleMsg.send_user_match(roomlevel);
        }
    }
    
    on_click_match_stop(sender: cc.Component){
        LobbySendGameHoodleMsg.send_user_stop_match();
    }

    on_click_ball_compose(sender: cc.Component){
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogBallCenter","BallCenterDialog")
    }

    on_click_store(sender: cc.Component){
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogStore", "StoreDialog")

        //test
        // DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogLoading", "LoadingDialog");
        // DialogManager.getInstance().close_dialog("LoadingDialog");
        // DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogVideoAd", "VideoAdDialog");
        // DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogGameStart", "GameStartDialog");
    }

    on_click_ball_list(sender:cc.Component){
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogBallList", "BallListDialog")
    }

    add_room_list_click(confobj:any){
        let roomlevel = confobj.roomlevel;
        if(roomlevel){
            let roombtnkeystr = "BTN_MATCH_ROOM_" + confobj.roomlevel;
            this.add_click_evenet_with_data(this.view[roombtnkeystr], "on_click_match_room_with_data", confobj);
        }
    }

    on_click_sign(sender: cc.Component){
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogSign", "SignDialog")
    }
}
