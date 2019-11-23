import UIController from '../../../framework/uibase/UIController';
import SceneManager from '../../../framework/manager/SceneManager';
import GameScene from '../gameScene/GameScene';
import LoginScene from '../LoginScene/LoginScene';
import LSDefine from '../../../framework/config/LSDefine';
import LobbySceneSendMsg from './LobbySceneSendAuthMsg';
import Storage from '../../../framework/utils/Storage';
import LobbySceneSendAuthMsg from './LobbySceneSendAuthMsg';
import DialogManager from '../../../framework/manager/DialogManager';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneTouchEvent extends UIController {

    onLoad() {
        super.onLoad()
    }

    start () {
        console.log("LoginSceneTouchEvent>>start")
        this.add_button_event_listener()
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_SET"],this.on_click_set.bind(this))
        this.add_click_event(this.view["BTN_CREATE_ROOM"],this.on_click_create_room.bind(this))
        this.add_click_event(this.view["KW_BTN_LOGIN_LOGIC"],this.on_click_login_logic.bind(this))
        this.add_click_event(this.view["BTN_JOIN_ROOM"],this.on_click_join_room.bind(this))
        this.add_click_event(this.view["IMG_HEAD"],this.on_click_head.bind(this))
        
    }

    on_click_set(sender:cc.Node) {
        // LobbySceneSendAuthMsg.send_login_out()
        // SceneManager.getInstance().enter_scene_asyc(new LoginScene())

        //test
        DialogManager.getInstance().show_common_dialog(2,function (resComp:any) {
            if(resComp){
                resComp.set_content_text("你好你好，在干啥呢？？？？,你好你好，在干啥呢？？？？,,,你好你好，在干啥呢？？？？,,,你好你好，在干啥呢？？？？")
            }
        })
    }

    on_click_create_room(sender:cc.Node){
        SceneManager.getInstance().enter_scene_asyc(new GameScene())
    }

    on_click_login_logic(sender:cc.Node){
        ////test
        // LobbySceneSendAuthMsg.send_login_out()

        DialogManager.getInstance().show_weak_hint("你好你好，在干啥呢？？？？啊啊大打发士大夫阿道夫")
        DialogManager.getInstance().show_weak_hint("你好你好")
        
    }

    on_click_join_room(sender: cc.Node){
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogJoinRoom","JoinRoomDialog")
    }

    on_click_head(sender: cc.Node){
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogMyCenter","MyCenterDialog")
    }

}
