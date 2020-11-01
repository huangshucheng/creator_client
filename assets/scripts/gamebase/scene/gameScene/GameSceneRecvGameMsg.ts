import UIController from '../../../framework/uibase/UIController';
import Response from '../../../framework/protocol/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import DialogManager from '../../../framework/manager/DialogManager';
import RoomData from '../../common/RoomData';
import { UserState } from '../../common/State';
import GameScene from './GameScene';
import Stype from '../../../framework/protocol/Stype';
import GameHoodleProto from '../../../framework/protocol/protofile/GameHoodleProto';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameSceneRecvGameMsg extends UIController {

    onLoad() {
        super.onLoad()
    }

    start() {
        super.start();
        this.add_protocol_delegate();
    }

    add_cmd_handler_map() {
        this._cmd_handler_map = {
            [GameHoodleProto.XY_ID.eRoomIdRes]: this.on_event_room_id.bind(this),
            [GameHoodleProto.XY_ID.ePlayCountRes]: this.on_event_play_count.bind(this),
            [GameHoodleProto.XY_ID.eUserInfoRes]: this.on_event_user_info.bind(this),
            [GameHoodleProto.XY_ID.eUserEmojRes]: this.on_event_emoj.bind(this),
            [GameHoodleProto.XY_ID.eUserReadyRes]: this.on_event_user_ready.bind(this),

            [GameHoodleProto.XY_ID.eUserOfflineRes]: this.on_event_user_offline.bind(this),
            [GameHoodleProto.XY_ID.eCheckLinkGameRes]: this.on_event_check_link.bind(this),
            [GameHoodleProto.XY_ID.eGameRuleRes]: this.on_event_game_rule.bind(this),
            [GameHoodleProto.XY_ID.eGameStartRes]: this.on_event_game_start.bind(this),
            [GameHoodleProto.XY_ID.ePlayerScoreRes]: this.on_event_player_score.bind(this),
            [GameHoodleProto.XY_ID.eGameResultRes]: this.on_event_game_result.bind(this),
            [GameHoodleProto.XY_ID.eTotalGameResultRes]: this.on_event_game_total_result.bind(this),
            // [GameHoodleProto.XY_ID.eUserPlayAgainRes]: this.on_event_play_again.bind(this),
            // [GameHoodleProto.XY_ID.eUserPlayAgainAnswerRes]: this.on_event_play_again_answer.bind(this),
            // [GameHoodleProto.XY_ID.eUserPlayAgainStartRes]: this.on_event_play_again_start.bind(this),
        }
    }

    on_recv_server_message(stype: number, ctype: number, body: any) {
        if (stype !== Stype.S_TYPE.GameHoodle) {
            return;
        }
        if (this._cmd_handler_map[ctype]) {
            this._cmd_handler_map[ctype].call(this, body);
        }
    }

    on_event_room_id(body: any) {
        if (body) {
            let roomid = body.roomid;
            if (roomid) {
                this.do_on_view("GameSceneShowUI", "show_room_id", roomid);
                RoomData.getInstance().set_room_id(roomid);
            }
        }
    }

    on_event_play_count(body: any) {
        if (body) {
            let playcount = body.playcount;
            let totalplaycount = body.totalplaycount;
            RoomData.getInstance().set_play_count(Number(playcount))
            RoomData.getInstance().set_totl_play_count(Number(totalplaycount))
            if (playcount && totalplaycount) {
                let playcountstr = "局数:" + String(playcount) + "/" + String(totalplaycount);
                this.do_on_view("GameSceneShowUI", "show_play_count", playcountstr);
            }
        }
    }

    on_event_user_info(body: any) {
        if (body) {
            try {
                if (body.userinfo) {
                    body.userinfo.forEach(value => {
                        let numberid = value.numberid;
                        let infostr = value.userinfostring;
                        let infoObj = JSON.parse(infostr);
                        RoomData.getInstance().add_player_by_uinfo(infoObj);
                        console.log("hcc>>userinfo numid: ", numberid, " ,info: ", infostr);
                    });
                }
                this.do_on_view("GameSceneShowUI", "show_user_info", body);
            } catch (error) {
                console.log("hcc>>error: ", error)
            }
        }
    }

    on_event_player_score(body: any) {
        if (body) {
            this.do_on_view("GameSceneShowUI", "show_player_score", body);
        }
    }

    on_event_user_offline(body: any) {
        console.log("on_event_user_offline", body)
        let seatid = body.seatid;
        if (seatid) {
            let player = RoomData.getInstance().get_player(seatid);
            if (player) {
                player.set_offline(true);
            }
        }
    }

    on_event_user_ready(body: any) {
        console.log("on_event_user_ready", body)
        if (body) {
            let status = body.status;
            let seatid = body.seatid;
            let userstate = body.userstate;
            if (status == Response.SUCCESS) {
                let player = RoomData.getInstance().get_player(seatid);
                if (player) {
                    player.set_user_state(UserState.Ready);
                    this.do_on_view("GameSceneShowUI", "show_user_ready", seatid, true);
                }
            }
        }
    }

    on_event_game_start(body: any) {
        this.do_on_view("GameSceneShowUI", "clear_table");
        this.do_on_view("GameSceneShowUI", "show_game_start_ani");
    }

    on_event_game_result(body: any) {
        this.set_visible(this.view["KW_BTN_READY"], false);
        this.scheduleOnce(function () {
            if (RoomData.getInstance().get_play_count() != RoomData.getInstance().get_total_play_count()) {
                this.set_visible(this.view["KW_BTN_READY"], true);
            }
        }, 1)
    }

    on_event_game_total_result(body: any) {
        this.scheduleOnce(function () {
            this.set_visible(this.view["KW_BTN_READY"], false);
            this.set_visible(this.view["KW_BTN_BACK_LOBBY"], true);
            this.set_visible(this.view["KW_BTN_PLAY_AGAIN"], true);
        }, 1.5)
    }

    on_event_emoj(body: any) {
        if (body && body.status == Response.SUCCESS) {
            let emojconfig = body.emojconfig;
            let configObj = JSON.parse(emojconfig);
            this.do_on_view("GameSceneShowUI", "show_emoj", Number(configObj.seatid), Number(configObj.emojconfig));
        }
    }

    //请求再次对局,返回
    on_event_play_again(body: any) {
        if (body && body.status == Response.SUCCESS) {
            if (body.responsecode == Response.SUCCESS) {
                //玩家答应了，再次对局
                let resNode: cc.Node = DialogManager.getInstance().show_common_layer();
                if (resNode) {
                    let script = resNode.getComponent("CommonDialog");
                    if (script) {
                        script.set_content_text("邀请玩家成功!");
                        script.set_can_touch_background(true);
                    }
                }

            } else {
                if (body.responsecode) {
                    let resNode: cc.Node = DialogManager.getInstance().show_common_layer();
                    if (resNode) {
                        let script = resNode.getComponent("CommonDialog");
                        if (script) {
                            script.set_content_text("玩家拒绝了您的邀请!");
                            script.set_can_touch_background(true);
                        }
                    }
                } else {
                    DialogManager.getInstance().show_weak_hint("请稍等，正在等待玩家回应。。。");
                }
            }
        } else {
            DialogManager.getInstance().show_weak_hint("对不起，对方暂时还不能被邀请!");
        }
    }

    //收到别的玩家的对局邀请
    on_event_play_again_answer(body: any) {
        if (body && body.status == Response.SUCCESS) {
            let config = JSON.parse(body.ansconfig);
            let requserunick = config.requserunick;
            let requseruid = config.requseruid;
            let showStr = "玩家【" + requserunick + "】邀请你再次对局，是否答应？"
            let resNode: cc.Node = DialogManager.getInstance().show_common_layer(2);
            if (resNode) {
                let script = resNode.getComponent("CommonDialog");
                if (script) {
                    script.set_content_text(showStr);
                    script.set_btn_callback(
                        // function () { SendGameMsg.send_play_again_answer(requseruid, Response.SUCCESS); },
                        // function () { SendGameMsg.send_play_again_answer(requseruid, Response.ERROR_1); },
                        // function () { SendGameMsg.send_play_again_answer(requseruid, Response.ERROR_1); },
                    )
                }
            }

        } else {
            DialogManager.getInstance().show_weak_hint("对不起，您当前还不能被邀请!");
        }
    }

    //再次对局
    on_event_play_again_start(body: any) {
        if (body && body.status == Response.SUCCESS) {
            SceneManager.getInstance().enter_scene_asyc(new GameScene());
        }
    }

    on_event_check_link(body:any){
        
    }

    on_event_game_rule(body:any){

    }
    
}
