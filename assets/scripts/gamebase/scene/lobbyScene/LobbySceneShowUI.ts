import UIController from '../../../framework/uibase/UIController';
import EventManager from '../../../framework/manager/EventManager';
import { Cmd, CmdName } from "../../../framework/protocol/AuthProto";
import Response from '../../../framework/config/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import LoginScene from '../LoginScene/LoginScene';
import Storage from '../../../framework/utils/Storage';
import LSDefine from '../../../framework/config/LSDefine';
import UserInfo from '../../../framework/common/UserInfo';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneShowUI extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        
    }

    show_user_info(){
        let user_info_bg = this.view["IMG_USER_INFO_BG"]
        if(user_info_bg){
            this.set_string(this.view['TEXT_USER_NAME'],UserInfo.get_unick())
            this.set_string(this.view['TEXT_USER_ID'],UserInfo.get_numberid())
            let ufaceImg = "lobby/rectheader/1" + UserInfo.get_uface();
            this.set_sprite_asyc(this.view["IMG_HEAD"],ufaceImg)
            this.set_string(this.view['TEXT_COIN'],"0")
        }
    }
}
