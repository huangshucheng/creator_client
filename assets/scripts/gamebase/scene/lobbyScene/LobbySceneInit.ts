import UIController from '../../../framework/uibase/UIController';
import Log from '../../../framework/utils/Log';
import LobbySceneSendMsg from './LobbySceneSendMsg';
import Storage from '../../../framework/utils/Storage';
import LSDefine from '../../../framework/config/LSDefine';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneInit extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        let loginType =  Storage.get(LSDefine.USER_LOGIN_TYPE)
        if(loginType == LSDefine.LOGIN_TYPE_UNAME){
            let storageStr = Storage.get(LSDefine.USER_LOGIN_MSG)
            if(storageStr){
                let uname = storageStr.uname 
                let upwd = storageStr.upwd
                LobbySceneSendMsg.send_get_center_info(uname,upwd);
            }
        }else if(loginType == LSDefine.LOGIN_TYPE_GUEST){
            let guestkey = Storage.get(LSDefine.USER_LOGIN_GUEST_KEY)
            if(guestkey){
                LobbySceneSendMsg.send_get_guest_center_info(guestkey);
            }
        }
    }

}
