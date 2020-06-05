import NetWork from '../../../../framework/network/NetWork';
import { Stype } from '../../../../framework/protocol/Stype';
import CellManager from '../../../../framework/manager/CellManager';

export default class LoginSendAuthMsg {
    
    static send(ctype:number, body:any){
        NetWork.getInstance().send_msg(Stype.Auth,ctype,body)
    }

    static send_guest_login(guest_key:string){
        let body = {
            guestkey : String(guest_key),
        }
        CellManager.getInstance().start("CellGuestLogin", body, 5);
    }

    static send_uname_login(uname:string, upwd:string){
        let body = {
            uname:String(uname),
			upwd:String(upwd),
        }
        CellManager.getInstance().start("CellUNameLogin", body, 5);
    }

    static send_uname_regist(uname:string, upwdmd5:string){
        let body = {
            uname: String(uname),
            upwdmd5: String(upwdmd5),
        }
        CellManager.getInstance().start("CellUNameRegist", body, 5);
    }

    static send_wechat_login(logincode: string, wechatuserinfo:string){
        let body = {
            logincode:logincode,
            userlogininfo: wechatuserinfo,
        }
        CellManager.getInstance().start("CellWeChatLogin", body, 5);
    }

    static send_wechat_session_login(wechatsessionkey: string){
        let body = {
            wechatsessionkey : wechatsessionkey,
        }
        CellManager.getInstance().start("CellWeChatSessionLogin", body, 10);
    }

}