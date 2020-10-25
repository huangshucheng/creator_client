export default class LobbyProto {

    public static protoNameSpace: string = "lobby.client.proto";//proto命名空间
    public static protoFileName: string = "LobbyProtoMsg"; //编译出来后xxxProtoMsg.js的文件名，不用加.js

    public static XY_ID = {
        INVALED : 0,
        REQ_LOGINLOBBY : 20001,
        RES_LOGINLOBBY : 20002,
        REQ_CERATEROOM : 20003,
        RES_CERATEROOM : 20004,
        REQ_JOINROOM : 20005,
        RES_JOINROOM : 20006,
        REQ_EXITROOM : 20007,
        RES_EXITROOM : 20008,
        REQ_BACKROOM : 20009,
        RES_BACKROOM : 20010,
        REQ_DESSOLVEROOM : 20011,
        RES_DESSOLVEROOM : 20012,
        REQ_ROOMSTATUS : 20013,
        RES_ROOMSTATUS : 20014,
        REQ_GAMEINFO : 20015,
        RES_GAMEINFO : 20016,
    }

    public static XY_NAME = {

        [LobbyProto.XY_ID.REQ_LOGINLOBBY]: "ReqLoginLobby",
        [LobbyProto.XY_ID.RES_LOGINLOBBY]: "ResLoginLobby",

        [LobbyProto.XY_ID.REQ_CERATEROOM]: "ReqCreateRoom",
        [LobbyProto.XY_ID.RES_CERATEROOM]: "ResCreateRoom",

        [LobbyProto.XY_ID.REQ_JOINROOM]: "ReqJoinRoom",
        [LobbyProto.XY_ID.RES_JOINROOM]: "ResJoinRoom",

        [LobbyProto.XY_ID.REQ_EXITROOM]: "ReqExitRoom",
        [LobbyProto.XY_ID.RES_EXITROOM]: "ResExitRoom",

        [LobbyProto.XY_ID.REQ_BACKROOM]: "ReqBackRoom",
        [LobbyProto.XY_ID.RES_BACKROOM]: "ResBackRoom",

        [LobbyProto.XY_ID.REQ_DESSOLVEROOM]: "ReqDessolveRoom",
        [LobbyProto.XY_ID.RES_DESSOLVEROOM]: "ResDessolveRoom",

        [LobbyProto.XY_ID.REQ_ROOMSTATUS]: "ReqRoomStatus",
        [LobbyProto.XY_ID.RES_ROOMSTATUS]: "ResRoomStatus",

        [LobbyProto.XY_ID.REQ_GAMEINFO]: "ReqGameInfo",
        [LobbyProto.XY_ID.RES_GAMEINFO]: "ResGameInfo",
    }

}