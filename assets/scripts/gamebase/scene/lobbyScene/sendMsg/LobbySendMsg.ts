import NetWork from '../../../../framework/network/NetWork';
import Stype from '../../../../framework/protocol/Stype';
import LobbyProto from '../../../../framework/protocol/protofile/LobbyProto';
import CellManager from '../../../../framework/manager/CellManager';

export default class LobbySendMsg {

    static send(ctype: number, body?: any) {
        NetWork.getInstance().send_msg(Stype.S_TYPE.Lobby, ctype, body)
    }

    //登录游戏服务
    static send_login_lobby() {
        CellManager.getInstance().start("CellLoginLobby", null);
    }

    //创建房间
    static send_create_room(gamerule: string) {
        if (gamerule == null || gamerule == '') {
            return;
        }
        let body = { gamerule: gamerule };
        CellManager.getInstance().start("CellCreateRoom", body);
    }

    //加入房间
    static send_join_room(roomid: string) {
        if (roomid == null || roomid == '') {
            return;
        }
        console.log("hcc>>send_join_room: ", roomid);
        LobbySendMsg.send(LobbyProto.XY_ID.REQ_JOINROOM, { roomid: roomid });
    }

    //退出房间
    static send_exit_room() {
        LobbySendMsg.send(LobbyProto.XY_ID.REQ_EXITROOM);
    }

    //解散房间
    static send_dessolve_room() {
        LobbySendMsg.send(LobbyProto.XY_ID.REQ_DESSOLVEROOM);
    }

    //是否创建了房间
    static send_get_room_status() {
        LobbySendMsg.send(LobbyProto.XY_ID.REQ_ROOMSTATUS);
    }

    //返回房间
    static send_back_room() {
        CellManager.getInstance().start("CellBackRoom", null, 5);
    }

    //游戏服务信息
    static send_get_ugame_info(){
        LobbySendMsg.send(LobbyProto.XY_ID.REQ_GAMEINFO);
    }

}