import NetWork from '../../../../framework/network/NetWork';
import CellManager from '../../../../framework/manager/CellManager';
import Stype from '../../../../framework/protocol/Stype';
import GameHoodleProto from '../../../../framework/protocol/protofile/GameHoodleProto';

export default class LobbySendGameHoodleMsg {
    
    static send(ctype:number, body?:any){
        NetWork.getInstance().send_msg(Stype.S_TYPE.GameHoodle,ctype,body)
    }

    //登录游戏服务
    static send_login_logic(){
        // LobbySendGameHoodleMsg.send(GameHoodleProto.XY_ID.eLoginLogicReq);
        CellManager.getInstance().start("CellLoginLogic", null, 5);
    }

    //创建房间
    static send_create_room(gamerule: string){
        if (gamerule == null || gamerule == ''){
            return;
        }
        let body = { gamerule: gamerule };
        CellManager.getInstance().start("CellCreateRoom", body, 5);
    }

    //加入房间
    static send_join_room(roomid: string){
        if (roomid == null || roomid == ''){
            return;
        }
        console.log("hcc>>send_join_room: " , roomid);
        LobbySendGameHoodleMsg.send(GameHoodleProto.XY_ID.eJoinRoomReq, {roomid: roomid});
    }

    //退出房间
    static send_exit_room(){
        LobbySendGameHoodleMsg.send(GameHoodleProto.XY_ID.eExitRoomReq);
    }

    //解散房间
    static send_dessolve_room(){
        LobbySendGameHoodleMsg.send(GameHoodleProto.XY_ID.eDessolveReq);
    }

    //是否创建了房间
    static send_get_room_status(){
        LobbySendGameHoodleMsg.send(GameHoodleProto.XY_ID.eGetRoomStatusReq);
    }

    //游戏服务信息
    static send_get_ugame_info(){
        LobbySendGameHoodleMsg.send(GameHoodleProto.XY_ID.eUserGameInfoReq);
    }

    //返回房间
    static send_back_room(){
        CellManager.getInstance().start("CellBackRoom", null, 5);
    }

    //玩家匹配
    static send_user_match(roomlevel:number){
        let body = {roomlevel : roomlevel}
        CellManager.getInstance().start("CellMatchRoom", body, 5);
    }

    //玩家取消匹配
    static send_user_stop_match(){
        LobbySendGameHoodleMsg.send(GameHoodleProto.XY_ID.eUserStopMatchReq);
    }

    //获取小球信息
    static send_get_uball_info(){
        LobbySendGameHoodleMsg.send(GameHoodleProto.XY_ID.eUserBallInfoReq)
    }

    //合成，销售小球
    static send_update_uball_info(updatetype:number,level:number, count?:number){
        if(!count){
            count = 0;
        }
        let body = {
            updatetype : updatetype,
            level: level,
            count: count,
        }
        LobbySendGameHoodleMsg.send(GameHoodleProto.XY_ID.eUpdateUserBallReq,body);
    }

    //获取小球信息
    static send_get_room_list_config() {
        LobbySendGameHoodleMsg.send(GameHoodleProto.XY_ID.eRoomListConfigReq);
    }

}