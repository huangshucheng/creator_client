import UIController from '../../../framework/uibase/UIController';
import UserInfo from '../../../framework/common/UserInfo';

let HEAD_PATH = "lobby/rectheader/1";

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
            // this.set_string(this.view['TEXT_USER_NAME'],UserInfo.get_unick()) 
            this.set_string(this.view['TEXT_USER_NAME'],UserInfo.get_uname()) //TODO 暂时先显示玩家账号
            this.set_string(this.view['TEXT_USER_ID'],UserInfo.get_numberid())
            let ufaceImg = HEAD_PATH + UserInfo.get_uface();
            this.set_sprite_asyc(this.view["IMG_HEAD"],ufaceImg)
            this.set_string(this.view['TEXT_COIN'],"0")
            console.log("hcc>>LobbySceneShowUI>>show_user_info " , ufaceImg)
        }
    }
}
