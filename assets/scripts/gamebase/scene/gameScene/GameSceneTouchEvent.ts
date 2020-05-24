import UIController from '../../../framework/uibase/UIController';
import DialogManager from '../../../framework/manager/DialogManager';
import GameSendGameHoodleMsg from './sendMsg/GameSendGameHoodle';
import SceneManager from '../../../framework/manager/SceneManager';
import LobbyScene from '../lobbyScene/LobbyScene';
import PlatForm from '../../../framework/config/PlatForm';
import RoomData from '../../common/RoomData';

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
        this.add_click_event(this.view["KW_BTN_BACK_LOBBY"],this.on_click_back_lobby)
        this.add_click_event(this.view["KW_BTN_SHARE"],this.on_click_share)
    }

    on_click_setting(sender:cc.Component){
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogSetting","SettingDialog")
        
    }

    on_click_setting2(sender:cc.Component){
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogGameResult","GameResultDialog",function(resNode:cc.Node){
            if(resNode){
                let script = resNode.getComponent("GameResultDialog");
                if (script){
                    script.set_title_text("恭喜恭喜")
                    script.set_reward_text("获得猪一头！")
                    script.set_score_text("text1111:+1\n" + "test2222:-1");
                }
            }
        })

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

}
