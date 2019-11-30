import UIController from '../../../framework/uibase/UIController';
import DialogManager from '../../../framework/manager/DialogManager';
import LobbySendGameHoodleMsg from './sendMsg/LobbySendGameHoodle';

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
        this.add_click_event(this.view["BTN_BACK_ROOM"],this.on_click_back_room.bind(this))
        this.add_click_event(this.view["IMG_HEAD"],this.on_click_head.bind(this))
        
    }

    on_click_set(sender:cc.Component) {
        // LobbySceneSendAuthMsg.send_login_out()
        // SceneManager.getInstance().enter_scene_asyc(new LoginScene())

        //test
        // DialogManager.getInstance().show_common_dialog(2,function (resComp:any) {
        //     if(resComp){
        //         resComp.set_content_text("你好你好，在干啥呢？？？？,你好你好，在干啥呢？？？？,,,你好你好，在干啥呢？？？？,,,你好你好，在干啥呢？？？？")
        //     }
        // })

        // let qrcode = QRCode.generate("huangshucheng")
        // let qrcode_html = QRCode.generatePNG("huangshucheng")
        // cc.sys.openURL(qrcode_html)
        // cc.log(qrcode_html)

        // let ecde = Base64.encode("huangshucheng")
        // cc.log("ecde: " , ecde)
        // let ssss = Base64.decode(ecde)
        // cc.log("decode: " , ssss)
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogMyCenter","MyCenterDialog")
    }

    on_click_create_room(sender:cc.Component){
        // SceneManager.getInstance().enter_scene_asyc(new GameScene())
        LobbySendGameHoodleMsg.send_create_room("roominfo:hcc>>room rule/////////////////////////////");
    }

    on_click_login_logic(sender:cc.Component){
        ////test
        // LobbySceneSendAuthMsg.send_login_out()

        DialogManager.getInstance().show_weak_hint("你好你好，在干啥呢？？？？啊啊大打发士大夫阿道夫")
        DialogManager.getInstance().show_weak_hint("你好你好")
        
    }

    on_click_join_room(sender: cc.Component){
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogJoinRoom","JoinRoomDialog")
    }

    on_click_head(sender: cc.Component){
        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogMyCenter","MyCenterDialog")
    }

    on_click_back_room(sender: cc.Component){
        LobbySendGameHoodleMsg.send_back_room();
    }

}
