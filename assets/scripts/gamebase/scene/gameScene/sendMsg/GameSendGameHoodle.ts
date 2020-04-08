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
        GameSendGameHoodleMsg.send(Cmd.ePlayerShootReq,body);
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
        GameSendGameHoodleMsg.send(Cmd.ePlayerBallPosReq,body);
    }

    //客户端发送玩家被击中
    static send_player_is_shooted(src_seatid:number, des_seatid:number){
        let body = {
            srcseatid: src_seatid,
            desseatid: des_seatid,
        }
        GameSendGameHoodleMsg.send(Cmd.ePlayerIsShootedReq,body);
    }

    static send_get_player_ball_info(){
        GameSendGameHoodleMsg.send(Cmd.eUserBallInfoReq);
    }
}