import UIController from '../../../framework/uibase/UIController';
import GameSendGameHoodleMsg from './sendMsg/GameSendGameHoodle';
import UserInfo from '../../../framework/common/UserInfo';

const {ccclass, property} = cc._decorator;

let HEAD_PATH = "lobby/rectheader/1";

@ccclass
export default class GameSceneShowUI extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        this.initUI()
    }

    initUI(){
        for(let i = 1; i<=4; i++){
            let viewstr = "KW_PANEL_USER_INFO_" + i;
            this.set_visible(this.view[viewstr], false)
        }
    }

    show_user_info(udata:any){
        for(let i = 1; i<=4; i++){
            let viewstr = "KW_PANEL_USER_INFO_" + i;
            this.set_visible(this.view[viewstr], false)
        }
        if(udata.userinfo){
            udata.userinfo.forEach(value => {
                let numberid = value.numberid;
                let infostr = value.userInfoString;
                let infoObj = JSON.parse(infostr);
                // cc.log("hcc>>userinfo numid: " , numberid , " ,info: " , infostr);
                if(numberid == UserInfo.get_numberid()){
                    let info_node = this.view["KW_PANEL_USER_INFO_1"];
                    this.update_one_user_info(info_node,infoObj);
                }else{
                    let info_node = this.view["KW_PANEL_USER_INFO_2"];
                    this.update_one_user_info(info_node,infoObj);
                }
            });
        }
    }

    update_one_user_info(info_node:cc.Node,infoObj:any){
        if(!cc.isValid(info_node)){
            return;
        }

        this.set_visible(info_node, true)
        this.set_string(info_node.getChildByName("KW_TEXT_NAME"),infoObj.uname)
        let ufaceImg = HEAD_PATH + infoObj.uface;
        this.set_sprite_asyc(info_node.getChildByName("KW_IMG_HEAD"),ufaceImg)
    }
    
}