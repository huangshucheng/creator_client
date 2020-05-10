import UIController from '../../../framework/uibase/UIController';
import { ResourceManager } from '../../../framework/manager/ResourceManager';
import GameAppConfig from '../../../framework/config/GameAppConfig';
import HotUpdateNew from '../../../framework/hotfix/HotUpdateNew';
import WeChatLogin from '../../../framework/utils/WeChatLogin';
import PlatForm from '../../../framework/config/PlatForm';
import RoomData from '../../common/RoomData';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginSceneShowUI extends UIController {

    onLoad() {
        super.onLoad()
    }

    start () {
        this.show_version();
        //显示微信小游戏登录按钮
        WeChatLogin.create_authorize_btn(this.view["KW_BTN_WX_LOGIN"]);

        let _this = this;
        WeChatLogin.on_wx_foreground(function (qData: any) {
            console.log("hcc>>on_wx_foreground>>LoginSceneShowUI>>  roomid: ", qData.roomid);
            if (qData.roomid) {
                RoomData.getInstance().set_share_roomid(qData.roomid);
            }

            let roomid_tmp = qData.roomid;
            if (qData.roomid == undefined || qData.roomid == null || qData.roomid == ""){
                roomid_tmp = "roomid is null"
            }

            let shareinfo = WeChatLogin.get_share_info();
            if(shareinfo.roomid){
                roomid_tmp = shareinfo.roomid;
            }

            RoomData.getInstance().set_share_roomid(roomid_tmp);
            // _this.set_string(_this.view["KW_TEXT_SHARE_INFO"] , roomid_tmp);
        });
    }

    show_version() {
        this.set_string(this.view["KW_TEXT_VERSION"], HotUpdateNew.getInstance().getLocalVersion());
    }

}
