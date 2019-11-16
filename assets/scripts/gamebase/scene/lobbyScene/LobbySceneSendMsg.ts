import NetWork from '../../../framework/network/NetWork';
import { Stype } from '../../../framework/protocol/Stype';
import { Cmd } from "./../../../framework/protocol/AuthProto";

export default class LobbySceneSendMsg {
    
    static send(ctype:number, body:any){
        NetWork.getInstance().send_msg(Stype.Auth,ctype,body)
    }

    static send_get_center_info(uname:string, upwdmd5:string){
        let body = {
            uname: String(uname),
            upwdmd5: String(upwdmd5),
        }
        LobbySceneSendMsg.send(Cmd.eGetUserCenterInfoReq,body);
    }

    static send_get_guest_center_info(guestkey:string){

    }

}