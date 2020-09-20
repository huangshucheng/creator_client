import NetWork from '../../../../framework/network/NetWork';
import Stype from '../../../../framework/protocol/Stype';
import AuthProto from '../../../../framework/protocol/protofile/AuthProto';

export default class LobbySendAuthMsg {
    
    static send(ctype:number, body?:any){
        NetWork.getInstance().send_msg(Stype.S_TYPE.Auth,ctype,body)
    }

    static send_get_center_info(){
        LobbySendAuthMsg.send(AuthProto.XY_ID.REQ_USERCENTERINFO);
    }

    static send_login_out(){
        LobbySendAuthMsg.send(AuthProto.XY_ID.REQ_LOGINOUT);
    }
}