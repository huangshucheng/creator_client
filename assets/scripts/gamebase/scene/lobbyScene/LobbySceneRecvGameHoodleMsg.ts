import UIController from '../../../framework/uibase/UIController';
import { Cmd, CmdName } from "../../../framework/protocol/GameHoodleProto";
import Response from '../../../framework/protocol/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import UserInfo from '../../../framework/common/UserInfo';
import GameScene from '../gameScene/GameScene';
import DialogManager from '../../../framework/manager/DialogManager';
import LobbyScene from './LobbyScene';
import LobbySendGameHoodleMsg from './sendMsg/LobbySendGameHoodle';
import RoomData from '../../common/RoomData';
import { Stype } from '../../../framework/protocol/Stype';
import GameSendGameHoodleMsg from '../gameScene/sendMsg/GameSendGameHoodle';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneRecvGameHoodleMsg extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        super.start();
        this.add_protocol_delegate();
    }

    add_cmd_handler_map(){
        this._cmd_handler_map = {
            [Cmd.eLoginLogicRes]: this.on_event_login_logic,
            [Cmd.eCreateRoomRes]: this.on_event_create_room,
            [Cmd.eJoinRoomRes]: this.on_event_join_room,
            [Cmd.eExitRoomRes]: this.on_event_exit_room,
            [Cmd.eDessolveRes]: this.on_event_dessolve_room,
            [Cmd.eGetRoomStatusRes]: this.on_event_get_room_status,
            [Cmd.eBackRoomRes]: this.on_event_back_room,
            [Cmd.eUserMatchRes]: this.on_event_match,
            [Cmd.eUserStopMatchRes]: this.on_event_match_stop,
            [Cmd.eUserGameInfoRes]: this.on_event_ugame_info,
            [Cmd.eUserConfigRes]: this.on_event_ugame_config_info,
            [Cmd.eUserPlayAgainAnswerRes]: this.on_event_play_again_answer,
            [Cmd.eUserPlayAgainStartRes]: this.on_event_play_again_start,
            [Cmd.eRoomListConfigRes]: this.on_event_room_config,
        }
    }

    on_recv_server_message(stype: number, ctype: number, body: any) {
        if (stype !== Stype.GameHoodle) {
            return;
        }
        if (this._cmd_handler_map[ctype]) {
            this._cmd_handler_map[ctype].call(this, body);
        }
    }

    on_event_login_logic(body:any){
        if (body){
            if (body.status == Response.OK){
                LobbySendGameHoodleMsg.send_get_room_status();
                LobbySendGameHoodleMsg.send_get_ugame_info();
                LobbySendGameHoodleMsg.send_get_uball_info();
                LobbySendGameHoodleMsg.send_get_room_list_config();
                DialogManager.getInstance().show_weak_hint("登录游戏服务成功!")

                //登录逻辑服务成功,如果是通过分享进来的,通过分享的房间号，自动去加入房间
                let roomid = RoomData.getInstance().get_share_roomid();
                if (roomid != "") {
                    LobbySendGameHoodleMsg.send_join_room(String(roomid));
                }
            }
        }
    }

    on_event_create_room(body:any){
        if (body){
            let status = body.status
            if(status == Response.OK){
                SceneManager.getInstance().enter_scene_asyc(new GameScene())
            }else{
                DialogManager.getInstance().show_weak_hint("房间创建失败!")
            }
        }
    }

    on_event_join_room(body:any){
        if (body){
            let status = body.status
            if(status == Response.OK){
                SceneManager.getInstance().enter_scene_asyc(new GameScene())
            }else{
                DialogManager.getInstance().show_weak_hint("加入房间失败!")
            }
        }
        RoomData.getInstance().set_share_roomid("");
    }

    on_event_exit_room(body:any){
        if (body){
            let status = body.status
            if(status == Response.OK){
                SceneManager.getInstance().enter_scene_asyc(new LobbyScene())
                RoomData.getInstance().clear_room_data();
            }else{
                DialogManager.getInstance().show_weak_hint("退出房间失败!")
            }
        }
    }

    on_event_dessolve_room(body:any){
        if (body){
            let status = body.status
            if(status == Response.OK){
                SceneManager.getInstance().enter_scene_asyc(new LobbyScene())
                RoomData.getInstance().clear_room_data();
            }else{
                DialogManager.getInstance().show_weak_hint("解散房间失败!")
            }
        }
    }

    on_event_get_room_status(body:any){
        if (body){
            this.do_on_view("LobbySceneShowUI", "show_room_status", body.status);
        }
    }

    on_event_back_room(body:any){
        if (body){
            let status = body.status
            if(status == Response.OK){
                SceneManager.getInstance().enter_scene_asyc(new GameScene())
            }else{
                DialogManager.getInstance().show_weak_hint("返回房间失败!")
            }
        }
    }

    on_event_match(body:any){
        if (body){
            let status = body.status
            if(status == Response.OK){
                let matchsuccess = body.matchsuccess;
                if(matchsuccess == true){
                    DialogManager.getInstance().show_weak_hint("匹配完成!")
                    this.scheduleOnce(function(dt:number){
                        DialogManager.getInstance().close_dialog("MatchDialog");
                        SceneManager.getInstance().enter_scene_asyc(new GameScene())
                    },1.0)
                }

                let userinfo = body.userinfo;
                if(!matchsuccess && userinfo){
                    let matchDialog = DialogManager.getInstance().get_dialog("MatchDialog");
                    if (matchDialog && cc.isValid(matchDialog)){
                        let script = matchDialog.getComponent("MatchDialog");
                        if (script) {
                            script.show_math_user_info(userinfo);
                        }
                    }else{
                        DialogManager.getInstance().show_dialog_asyc("ui_prefabs/dialog/DialogMatch","MatchDialog",function(resNode:cc.Node){
                            if(resNode && cc.isValid(resNode)){
                                let script = resNode.getComponent("MatchDialog");
                                if(script){
                                    script.show_math_user_info(userinfo);
                                }
                            }
                        })
                    }
                }
            }else if(status == Response.NOT_YOUR_TURN){
                DialogManager.getInstance().show_weak_hint("请稍等候，正在匹配中。。。。");
            }else{
                DialogManager.getInstance().show_weak_hint("匹配失败,您当前还不能匹配!");
            }
        }
    }

    on_event_match_stop(body:any){
        if (body){
            let status = body.status
            if(status == Response.OK){
                DialogManager.getInstance().show_weak_hint("您已取消匹配!")
            }else{
                DialogManager.getInstance().show_weak_hint("取消失败!")
            }
        }
    }

    on_event_ugame_info(body:any){
        if (body){
            let status = body.status
            if(status == Response.OK){
                let ugame_info = JSON.parse(body.userinfostring);
                UserInfo.set_ugame_info(ugame_info);
                this.do_on_view("LobbySceneShowUI", "show_user_info");
                GameSendGameHoodleMsg.send_get_user_config();
            }
        }
    }

    on_event_ugame_config_info(body:any){
        if (body) {
            let status = body.status
            if (status == Response.OK) {
                let ugame_config = JSON.parse(body.userconfigstring);
                if (ugame_config){
                    let gameinfo = UserInfo.get_ugame_info();
                    if(gameinfo){
                        UserInfo.set_uface(ugame_config.user_ball_level)
                        this.do_on_view("LobbySceneShowUI", "show_user_info");
                    }
                }
            }
        }
    }

    //收到别的玩家的对局邀请
    on_event_play_again_answer(body:any){
        if (body && body.status == Response.OK) {
            let config = JSON.parse(body.ansconfig);
            let requserunick = config.requserunick;
            let requseruid = config.requseruid;
            let showStr = "玩家【" + requserunick + "】邀请你再次对局，是否答应？"
            DialogManager.getInstance().show_common_dialog(2, function (dialogScript: any) {
                if (dialogScript) {
                    dialogScript.set_content_text(showStr);
                    dialogScript.set_btn_callback(
                        function () { GameSendGameHoodleMsg.send_play_again_answer(requseruid, Response.OK); },
                        function () { GameSendGameHoodleMsg.send_play_again_answer(requseruid, Response.INVALID_PARAMS); },
                        function () { GameSendGameHoodleMsg.send_play_again_answer(requseruid, Response.INVALID_PARAMS); },
                    )
                }
            });
        }
    }

    //再次对局
    on_event_play_again_start(body:any){
        if (body && body.status == Response.OK) {
            SceneManager.getInstance().enter_scene_asyc(new GameScene());
        }
    }

    on_event_room_config(body:any){
        if (body && body.status == Response.OK) {
            let config = JSON.parse(body.config);
            for(let key in config){
                let confObj = config[key];
                this.do_on_view("LobbySceneShowUI", "show_room_list_btn", confObj);
                this.do_on_view("LobbySceneTouchEvent", "add_room_list_click", confObj);
            }
        }
    }
}
