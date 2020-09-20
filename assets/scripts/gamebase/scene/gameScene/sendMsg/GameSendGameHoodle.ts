import NetWork from '../../../../framework/network/NetWork';
import GameHoodleConfig from '../../../../framework/config/GameHoodleConfig';
import ArrayUtil from '../../../../framework/utils/ArrayUtil';
import Stype from '../../../../framework/protocol/Stype';
import GameHoodleProto from '../../../../framework/protocol/protofile/GameHoodleProto';

export default class GameSendGameHoodleMsg {
    
    static send(ctype:number, body?:any){
        NetWork.getInstance().send_msg(Stype.S_TYPE.GameHoodle,ctype,body)
    }

    static send_check_link_game(){
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.eCheckLinkGameReq);
    }

    static send_login_logic(){
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.eLoginLogicReq);
    }

    static send_exit_room(){
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.eExitRoomReq);
    }

    static send_dessolve_room(){
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.eDessolveReq);
    }

    static send_back_room(){
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.eBackRoomReq);
    }

    static send_user_ready(){
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.eUserReadyReq)
    }

    static send_get_player_ball_info() {
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.eUserBallInfoReq);
    }

    static send_ball_compose(level: number, count?: number) {
        if (!count) {
            count = 1;
        }
        let body = {
            updatetype: GameHoodleConfig.BALL_UPDATE_TYPE.COMPOSE_TYPE,
            level: level,
            count: count,
        }
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.eUpdateUserBallReq, body);
    }

    static send_store_list_req(){
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.eStoreListReq);
    }

    static send_buy_product(productinfo:any){
        if(!productinfo || ArrayUtil.GetArrayLen(productinfo) <= 0){
            return;
        }
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.eBuyThingsReq, productinfo);
    }

    ////////////////////////
    //游戏具体逻辑
    ////////////////////////

    //玩家射击
    static send_player_shoot(seatid:number, posx:number, posy:number, shootpower:number){
        let body = {
            seatid:seatid,
            posx:String(posx),
            posy:String(posy),
            shootpower:Number(shootpower),
        }
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.ePlayerShootReq,body);
    }

    //玩家位置发送到服务端，保持各个玩家位置同步
    /*
    body :OnePlayerPos类型数组
    OnePlayerPos: 
    {
        seatid:number,
        posx:string,
        posy:string,
    }
    */
    static send_all_player_ball_pos(posArray:Array<any>){
        let body = {
            positions: posArray,
        }
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.ePlayerBallPosReq,body);
    }

    //客户端发送玩家被击中
    static send_player_is_shooted(src_seatid:number, des_seatid:number){
        let body = {
            srcseatid: src_seatid,
            desseatid: des_seatid,
        }
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.ePlayerIsShootedReq,body);
    }

    static send_get_user_config(){
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.eUserConfigReq);
    }

    static send_use_ball(balllevel:number){
        if(balllevel <= 0){
            return;
        }
        let body = {
            balllevel: balllevel,
        }
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.eUseHoodleBallReq,body);
    }

    static send_use_emoj(emojIndex:number) {
        let body = {
            emojconfig: String(emojIndex),
        }
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.eUserEmojReq, body);
    }

    static send_play_again(uids:Array<number>){
        let body = {
            otheruids: uids,
        }
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.eUserPlayAgainReq,body);
    }

    static send_play_again_answer(requseruid:number,rescode:number){
        let body = {
            requseruid: requseruid,
            responsecode: rescode,
        }
        GameSendGameHoodleMsg.send(GameHoodleProto.XY_ID.eUserPlayAgainAnswerReq,body);
    }
}