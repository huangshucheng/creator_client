import NetWork from '../../../../framework/network/NetWork';
import { Stype } from '../../../../framework/protocol/Stype';
import { Cmd } from '../../../../framework/protocol/GameHoodleProto';

export default class LobbySendGameHoodleMsg {
    
    static send(ctype:number, body?:any){
        NetWork.getInstance().send_msg(Stype.GameHoodle,ctype,body)
    }

    static send_login_logic(){
        LobbySendGameHoodleMsg.send(Cmd.eLoginLogicReq);
    }

    static send_create_room(roominfo: string){
        if (roominfo == null || roominfo == ''){
            return;
        }
        LobbySendGameHoodleMsg.send(Cmd.eCreateRoomReq,{roominfo: roominfo});
    }

    static send_join_room(roomid: string){
        if (roomid == null || roomid == ''){
            return;
        }
        LobbySendGameHoodleMsg.send(Cmd.eJoinRoomReq, {roomid: roomid});
    }

    static send_exit_room(){
        LobbySendGameHoodleMsg.send(Cmd.eExitRoomReq);
    }

    static send_dessolve_room(){
        LobbySendGameHoodleMsg.send(Cmd.eDessolveReq);
    }

    static send_get_room_status(){
        LobbySendGameHoodleMsg.send(Cmd.eGetRoomStatusReq);
    }

    static send_back_room(){
        LobbySendGameHoodleMsg.send(Cmd.eBackRoomReq);
    }

}