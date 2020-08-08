import NetWork from '../../../../framework/network/NetWork';
import { Stype } from '../../../../framework/protocol/Stype';
import { Cmd } from "../../../../framework/protocol/protofile/AuthProto";

export default class LobbySendAuthMsg {
    
    static send(ctype:number, body?:any){
        NetWork.getInstance().send_msg(Stype.Auth,ctype,body)
    }

    static send_get_center_info(){
        LobbySendAuthMsg.send(Cmd.eGetUserCenterInfoReq);
    }

    static send_login_out(){
        LobbySendAuthMsg.send(Cmd.eLoginOutReq);
    }
}