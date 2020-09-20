export default class LobbyProto {

    public static protoNameSpace: string = "lobby.client.proto";//proto命名空间
    public static protoFileName: string = "LobbyProtoMsg"; //编译出来后xxxProtoMsg.js的文件名，不用加.js

    public static XY_ID = {
        INVALED : 0,
        REQ_LOGINLOBBY : 20001,
        RESP_LOBINLOBBY : 20002,
    }

    public static XY_NAME = {
        [LobbyProto.XY_ID.REQ_LOGINLOBBY]: "reqLoginLobby",
        [LobbyProto.XY_ID.RESP_LOBINLOBBY]: "resLoginLobby",
    }
}