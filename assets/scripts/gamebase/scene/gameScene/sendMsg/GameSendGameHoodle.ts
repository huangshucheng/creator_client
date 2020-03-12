import NetWork from '../../../../framework/network/NetWork';
import { Stype } from '../../../../framework/protocol/Stype';
import { Cmd } from '../../../../framework/protocol/GameHoodleProto';

export default class GameSendGameHoodleMsg {
    
    static send(ctype:number, body?:any){
        NetWork.getInstance().send_msg(Stype.GameHoodle,ctype,body)
    }

    static send_check_link_game(){
        GameSendGameHoodleMsg.send(Cmd.eCheckLinkGameReq);
    }

    static send_login_logic(){
        GameSendGameHoodleMsg.send(Cmd.eLoginLogicReq);
    }

    static send_exit_room(){
        GameSendGameHoodleMsg.send(Cmd.eExitRoomReq);
    }

    static send_dessolve_room(){
        GameSendGameHoodleMsg.send(Cmd.eDessolveReq);
    }

    static send_back_room(){
        GameSendGameHoodleMsg.send(Cmd.eBackRoomReq);
    }

    static send_user_ready(){
        GameSendGameHoodleMsg.send(Cmd.eUserReadyReq)
    }

    ////////////////////////
    //
    ////////////////////////

    static send_player_shoot(seatid:number, posx:number, posy:number){
        let body = {
            seatid:seatid,
            posx:String(posx),
            posy:String(posy),
        }
        GameSendGameHoodleMsg.send(Cmd.ePlayerShootReq,body);
    }

}