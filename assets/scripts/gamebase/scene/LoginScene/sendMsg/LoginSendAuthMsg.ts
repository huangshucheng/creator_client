import NetWork from '../../../../framework/network/NetWork';
import { Stype } from '../../../../framework/protocol/Stype';
import { Cmd } from "../../../../framework/protocol/AuthProto";

export default class LoginSendAuthMsg {
    
    static send(ctype:number, body:any){
        NetWork.getInstance().send_msg(Stype.Auth,ctype,body)
    }

    static send_guest_login(guest_key){
        let body = {
            guestkey : String(guest_key),
        }
        LoginSendAuthMsg.send(Cmd.eGuestLoginReq,body)
    }

    static send_uname_login(uname:string, upwd:string){
        let body = {
            uname:String(uname),
			upwd:String(upwd),
        }
        LoginSendAuthMsg.send(Cmd.eUnameLoginReq,body)
    }

    static send_uname_regist(uname:string, upwdmd5:string){
        let body = {
            uname: String(uname),
            upwdmd5: String(upwdmd5),
        }
        LoginSendAuthMsg.send(Cmd.eUnameRegistReq,body);
    }

    static send_wechat_login(logincode: string, wechatuserinfo:string){
        let body = {
            logincode:logincode,
            userlogininfo: wechatuserinfo,
        }
        LoginSendAuthMsg.send(Cmd.eWeChatLoginReq,body);
    }

    static send_wechat_session_login(wechatsessionkey: string){
        let body = {
            wechatsessionkey : wechatsessionkey,
        }
        LoginSendAuthMsg.send(Cmd.eWeChatSessionLoginReq, body);
    }

}