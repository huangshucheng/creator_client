import UIController from '../../../framework/uibase/UIController';
import EventManager from '../../../framework/manager/EventManager';
import { Cmd, CmdName } from "../../../framework/protocol/AuthProto";
import Response from '../../../framework/config/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import LoginScene from '../LoginScene/LoginScene';
import Storage from '../../../framework/utils/Storage';
import LSDefine from '../../../framework/config/LSDefine';
import UserInfo from '../../../framework/common/UserInfo';
import DialogManager from '../../../framework/manager/DialogManager';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneRecvAuthMsg extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        this.add_event_dispatcher()
    }

    add_event_dispatcher(){
        EventManager.on(CmdName[Cmd.eGetUserCenterInfoRes], this, this.on_event_center_info)
        EventManager.on(CmdName[Cmd.eLoginOutRes], this, this.on_event_login_out)
        EventManager.on(CmdName[Cmd.eReloginRes], this, this.on_event_relogin)
    }

    on_event_center_info(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        if(udata){
            let udataStr = udata.userCenterInfoString
            if(udataStr){
                UserInfo.set_uinfo(udataStr)
                let lobyShowUI = this.get_script("LobbySceneShowUI")
                if(lobyShowUI){
                    lobyShowUI.show_user_info()
                }
            }
        }
    }

    on_event_login_out(event:cc.Event.EventCustom){
        let udata = event.getUserData()
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                cc.log("on_event_login_out")
                SceneManager.getInstance().enter_scene_asyc(new LoginScene())
                DialogManager.getInstance().show_weak_hint("退出成功!")
            }
        }
    }

    on_event_relogin(event:cc.Event.EventCustom){
        cc.log("on_event_relogin...")
        SceneManager.getInstance().enter_scene_asyc(new LoginScene())
        DialogManager.getInstance().show_weak_hint("您已经被挤号,自动退出!")
    }

}
