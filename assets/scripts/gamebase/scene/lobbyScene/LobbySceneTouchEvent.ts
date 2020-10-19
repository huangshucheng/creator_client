import UIController from '../../../framework/uibase/UIController';
import DialogManager from '../../../framework/manager/DialogManager';
import LobbySendGameHoodleMsg from './sendMsg/LobbySendGameHoodle';
import GameHoodleConfig from '../../../framework/config/GameHoodleConfig';
import PlatForm from '../../../framework/config/PlatForm';
import RewardDialog from '../../dialog/RewardDialog';
import UserInfo from '../../../framework/common/UserInfo';
import LobbySendSystem from './sendMsg/LobbySendSystem';
import { AudioManager } from '../../../framework/manager/AudioManager';
import LSDefine from '../../../framework/config/LSDefine';
import Storage from '../../../framework/utils/Storage';
import CommonDialog from '../../dialog/CommonDialog';
import WeChatLogin from '../../../framework/utils/WeChatLogin';
import LobbySendMsg from './sendMsg/LobbySendMsg';

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
        this.add_click_event(this.view["KW_BTN_SHARE"], this.on_click_share.bind(this))
        //带参数的点击事件
        // this.add_click_evenet_with_data(this.view["KW_BTN_BALL"], "on_click_ball_dialog_data",[1,2,3,5]) // test
    }
    
    //test
    on_click_ball_dialog_data(event: cc.Event, customEventData: any) {
        // let tgNode: cc.Node = event.target;
        // let btn = tgNode.getComponent(cc.Button);
    }

    on_click_set(sender:cc.Component) {
        DialogManager.getInstance().show_dialog_async("ui_prefabs/dialog/DialogMyCenter","MyCenterDialog")
    }

    on_click_create_room(sender:cc.Component){
        if (this.is_guest_login_wechat_game()){
            DialogManager.getInstance().show_dialog("ui_prefabs/dialog/DialogAuth", "AuthDialog");
            return;
        }

        let ruleStr = JSON.stringify(GameHoodleConfig.BOX_GAME_RULE);
        // let ruleStr = JSON.stringify({playCount:4});
        LobbySendMsg.send_create_room(ruleStr);
        LobbySendMsg.send_get_room_status();
    }

    on_click_login_logic(sender:cc.Component){
    }

    on_click_join_room(sender: cc.Component){
        if (this.is_guest_login_wechat_game()){
            DialogManager.getInstance().show_dialog("ui_prefabs/dialog/DialogAuth", "AuthDialog");
            return;
        }
        DialogManager.getInstance().show_dialog_async("ui_prefabs/dialog/DialogJoinRoom","JoinRoomDialog")
    }

    on_click_head(sender: cc.Component){
        if (this.is_guest_login_wechat_game()) {
            DialogManager.getInstance().show_dialog("ui_prefabs/dialog/DialogAuth", "AuthDialog");
            return;
        }
        DialogManager.getInstance().show_dialog_async("ui_prefabs/dialog/DialogMyCenter","MyCenterDialog")
    }

    on_click_back_room(sender: cc.Component){
        LobbySendMsg.send_get_room_status();
        LobbySendMsg.send_back_room();
    }

    on_click_match_room_with_data(event: cc.Event, customEventData: any){
        if (this.is_guest_login_wechat_game()) {
            DialogManager.getInstance().show_dialog("ui_prefabs/dialog/DialogAuth", "AuthDialog");
            return;
        }
        console.log("on_click_match_room_with_data" , customEventData);
        let roomlevel = customEventData.roomlevel;
        if (roomlevel){
            // LobbySendGameHoodleMsg.send_user_match(roomlevel);
        }
        AudioManager.getInstance().playBtnClick();
    }
    
    on_click_match_stop(sender: cc.Component){
        // LobbySendGameHoodleMsg.send_user_stop_match();
    }

    on_click_ball_compose(sender: cc.Component){
        DialogManager.getInstance().show_dialog_async("ui_prefabs/dialog/DialogBallCenter","BallCenterDialog")
    }

    on_click_store(sender: cc.Component){
        DialogManager.getInstance().show_dialog_async("ui_prefabs/dialog/DialogStore", "StoreDialog")
    }

    on_click_ball_list(sender:cc.Component){
        DialogManager.getInstance().show_dialog_async("ui_prefabs/dialog/DialogBallList", "BallListDialog")
    }

    add_room_list_click(confobj:any){
        let roomlevel = confobj.roomlevel;
        if(roomlevel){
            let roombtnkeystr = "BTN_MATCH_ROOM_" + confobj.roomlevel;
            this.add_click_evenet_with_data(this.view[roombtnkeystr], "on_click_match_room_with_data", confobj);
        }
    }

    on_click_sign(sender: cc.Component){
        DialogManager.getInstance().show_dialog_async("ui_prefabs/dialog/DialogSign", "SignDialog");
        //test
        // let config = {level:6}
        // LobbySendSystem.send_add_uchip(GameHoodleConfig.KW_PROP_ID_COIN, 50);
        // LobbySendSystem.send_add_uchip(GameHoodleConfig.KW_PROP_ID_BALL, 1, JSON.stringify(config));
    }

    on_click_share(sender:cc.Component){
        console.log("hcc>>on_click_share....");
        /*
        LobbySendSystem.send_share();
        let share_img_path = cc.url.raw("resources/textures/shareimg/ball_games_hare_img.png")
        console.log("hcc>>share_img_path: ", share_img_path);
        if (!share_img_path || share_img_path == "") {
            return;
        }

        let shareInfo = {
            title: UserInfo.get_unick() + "请你一起来玩弹珠,赶紧来吧!",
            imageUrl: share_img_path,
            query: "",
            success: function (res: any) {
            },
            fail: function (res: any) {
            },
            complete: function () {
            },
        }

        if (!PlatForm.isWeChatGame()) {
            return;
        }
        wx.shareAppMessage(shareInfo)
        */
        LobbySendMsg.send_get_room_status();
    }

    is_guest_login_wechat_game(){
        if(!PlatForm.isWeChatGame()){
            return false;
        }
        let loginType = Storage.get(LSDefine.USER_LOGIN_TYPE);
        if (loginType == LSDefine.LOGIN_TYPE_GUEST ) {
            return true;
        }
    }
}
