import UIController from '../../../framework/uibase/UIController';
import DialogManager from '../../../framework/manager/DialogManager';
import GameSendGameHoodleMsg from './sendMsg/GameSendGameHoodle';
import SceneManager from '../../../framework/manager/SceneManager';
import LobbyScene from '../lobbyScene/LobbyScene';
import PlatForm from '../../../framework/config/PlatForm';
import RoomData from '../../common/RoomData';
import Player from '../../common/Player';
import GameScene from './GameScene';
import UserInfo from '../../../framework/common/UserInfo';
import CommonDialog from '../../dialog/CommonDialog';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSceneTouchEvent extends UIController {

    onLoad() {
        super.onLoad()
    }

    add_button_event_listener(){
        this.add_click_event(this.view["BTN_SETTING"],this.on_click_setting)
        this.add_click_event(this.view["BTN_SETTING_2"],this.on_click_setting2)
        this.add_click_event(this.view["KW_BTN_READY"],this.on_click_ready)
        this.add_click_event(this.view["KW_BTN_BACK_LOBBY"], this.on_click_back_lobby)
        this.add_click_event(this.view["KW_BTN_PLAY_AGAIN"], this.on_click_play_again)
        this.add_click_event(this.view["KW_BTN_SHARE"], this.on_click_share)
        this.add_click_event(this.view["KW_BTN_EMOj"], this.on_click_emoj)
    }

    on_click_setting(sender:cc.Component){
        DialogManager.getInstance().show_dialog_async("ui_prefabs/dialog/DialogSetting","SettingDialog")
        
    }

    on_click_setting2(sender:cc.Component){
        // let resNode:any = DialogManager.getInstance().show_dialog_async("ui_prefabs/dialog/DialogGameResult","GameResultDialog");
        // if(resNode){
        //     let script = resNode.getComponent("GameResultDialog");
        //     if (script){
        //         script.set_title_text("恭喜恭喜")
        //         script.set_reward_text("获得猪一头！")
        //         script.set_score_text("text1111:+1\n" + "test2222:-1");
        //     }
        // }
    }

    on_click_ready(sender: cc.Component){
        GameSendGameHoodleMsg.send_user_ready()
    }

    on_click_back_lobby(sender: cc.Component){
        SceneManager.getInstance().enter_scene_asyc(new LobbyScene());
    }

    on_click_share(sender: cc.Component){
        console.log("hcc>>on_click_share....");
        if (!PlatForm.isWeChatGame()) {
            return;
        }

        let roomInfo = {
            roomid: RoomData.getInstance().get_room_id(),
            invite_unick: RoomData.getInstance().get_self_player().get_unick(),
        }

        let share_room_info = "roomid=" + roomInfo.roomid + "&invite_unick=" + roomInfo.invite_unick;
        console.log("hcc>>share_room_info:" , share_room_info)

        let share_img_path = cc.url.raw("resources/textures/shareimg/ball_games_hare_img.png")
        console.log("hcc>>share_img_path: ", share_img_path);
        if (!share_img_path || share_img_path == ""){
            return;
        }

        let shareInfo = {
            title : roomInfo.invite_unick + "请你一起来玩弹珠,房间:" + roomInfo.roomid,
            imageUrl: share_img_path,
            query: share_room_info,
            success: function(res:any) {
                console.log("hcc>>share success" , res);
            },
            fail : function(res:any){
                console.log("hcc>>share fail" , res);
            },
            complete: function(){
                console.log("hcc>>share complete");
            },
        }
        wx.shareAppMessage(shareInfo)
    }

    on_click_emoj(sender: cc.Component){
        DialogManager.getInstance().show_dialog("ui_prefabs/dialog/DialogEmoj", "EmojDialog");
        //test
        // SceneManager.getInstance().enter_scene_asyc(new GameScene())
    }

    async on_click_play_again(sender: cc.Component){
        let playerSet = RoomData.getInstance().get_all_player();
        let uidSet = [];
        for (let k in playerSet){
            let player:Player = playerSet[k];
            if (player.get_numberid() != UserInfo.get_numberid()){
                uidSet.push(player.get_uid());
            }
        }
        console.log("hcc>>on_click_play_again uids: " , uidSet);
        let resNode: cc.Node = await DialogManager.getInstance().show_common_dialog(2);
        if (resNode) {
            let script: CommonDialog = resNode.getComponent("CommonDialog");
            if (script) {
                script.set_content_text("确定再邀请该玩家再来一次对局吗!");
                script.set_can_touch_background(true);
                script.set_btn_callback(
                    function () { GameSendGameHoodleMsg.send_play_again(uidSet); },
                )
            }
        }
    }

}
