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
        CellManager.getInstance().start("CellLoginLogic", null, 5);
    }

    //玩家匹配
    // static send_user_match(roomlevel:number){
    //     let body = {roomlevel : roomlevel}
    //     CellManager.getInstance().start("CellMatchRoom", body, 5);
    // }

    // //获取小球信息
    // static send_get_uball_info(){
    //     LobbySendGameHoodleMsg.send(GameHoodleProto.XY_ID.eUserBallInfoReq)
    // }

    //合成，销售小球
    // static send_update_uball_info(updatetype:number,level:number, count?:number){
    //     if(!count){
    //         count = 0;
    //     }
    //     let body = {
    //         updatetype : updatetype,
    //         level: level,
    //         count: count,
    //     }
    //     LobbySendGameHoodleMsg.send(GameHoodleProto.XY_ID.eUpdateUserBallReq,body);
    // }

    //获取小球信息
    // static send_get_room_list_config() {
    //     LobbySendGameHoodleMsg.send(GameHoodleProto.XY_ID.eRoomListConfigReq);
    // }

}