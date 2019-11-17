import NetWork from '../../../framework/network/NetWork';
import { Stype } from '../../../framework/protocol/Stype';
import { Cmd } from "../../../framework/protocol/AuthProto";

export default class LobbySceneSendAuthMsg {
    
    static send(ctype:number, body?:any){
        NetWork.getInstance().send_msg(Stype.Auth,ctype,body)
    }

    static send_get_center_info(){
        LobbySceneSendAuthMsg.send(Cmd.eGetUserCenterInfoReq);
    }

    static send_login_out(){
        LobbySceneSendAuthMsg.send(Cmd.eLoginOutReq);
    }
}