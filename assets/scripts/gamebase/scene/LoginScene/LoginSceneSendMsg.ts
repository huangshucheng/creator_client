import NetWork from '../../../framework/network/NetWork';
import { Stype } from '../../../framework/protocol/Stype';
import { Cmd } from "./../../../framework/protocol/AuthProto";

export default class LoginSceneSendMsg {
    
    static send(ctype:number, body:any){
        NetWork.getInstance().send_msg(Stype.Auth,ctype,body)
    }

    static send_guest_login(guest_key){
        let body = {
            guestkey : String(guest_key),
        }
         LoginSceneSendMsg.send(Cmd.eGuestLoginReq,body)
    }

    static send_uname_login(uname:string, upwd:string){
        let body = {
            uname:String(uname),
			upwd:String(upwd),
        }
        LoginSceneSendMsg.send(Cmd.eUnameLoginReq,body)
    }

}