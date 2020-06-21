import NetWork from '../../../../framework/network/NetWork';
import { Stype } from '../../../../framework/protocol/Stype';
import { Cmd } from '../../../../framework/protocol/SystemProto';
import CellManager from '../../../../framework/manager/CellManager';
import Response from '../../../../framework/protocol/Response';
import DialogManager from '../../../../framework/manager/DialogManager';
import GameHoodleConfig from '../../../../framework/config/GameHoodleConfig';
import StringUtil from '../../../../framework/utils/StringUtil';
import LobbySendGameHoodleMsg from './LobbySendGameHoodle';
import UIFunction from '../../../../framework/common/UIFunciton';

let BALL_TEXTURE_KEY_STR = "textures/games/balls/ball_level_%s.png"
let COIN_TEXTURE_KEY_STR = "textures/lobby/lobby_coin.png";

export default class LobbySendSystem {

    static send(ctype: number, body?: any) {
        NetWork.getInstance().send_msg(Stype.GameSystem, ctype, body)
    }

    //请求登录奖励
    static send_get_reward_info() {
        LobbySendSystem.send(Cmd.eLoginRewardConfigReq);
    }

    //发送签到
    static send_sign_req(signofday:number) {
        if(signofday <= 0 || signofday > 7){
            return;
        }
        let body = {
            signofday : signofday,
        }
        CellManager.getInstance().start("CellRewardSign", body, 5);
    }

    //发送分享
    static send_share(){
        LobbySendSystem.send(Cmd.eUserShareReq);
    }

    //增加玩家道具
    //propid: 金币：10001 ,弹珠：10002
    //propcount: 数量
    //config: json配置，弹珠需要配置，金币不需要： {level:1}
    static send_add_uchip(propid:number, propcount:number, config?:string){
        let req_body = {
            propid: propid,
            propcount: propcount,
            config: config,
        }
        let cell = CellManager.getInstance().start("CellAddUchip", req_body,5);
        CellManager.getInstance().addCellCallBack(cell,function(stype:number, ctype:number, body:any) {
            if (body) {
                if (body.status == Response.OK) {
                    let res_propid = body.propid;
                    let res_propcount = body.propcount;
                    let res_config = body.config;
                    if(!res_propid || !res_propcount){
                        return;
                    }

                    let showImg = null;
                    let showTipStr = null;
                    if (res_propid == GameHoodleConfig.KW_PROP_ID_COIN){
                        showImg = COIN_TEXTURE_KEY_STR;
                        showTipStr = "金币+" + res_propcount;
                    } else if (res_propid == GameHoodleConfig.KW_PROP_ID_BALL){
                        let configObj = JSON.parse(res_config);
                        if(configObj){
                            if (configObj.level){
                                showImg = StringUtil.format(BALL_TEXTURE_KEY_STR, configObj.level);
                                showTipStr = configObj.level + "级弹珠+" + res_propcount;
                            }
                        }
                    }

                    ////show reward
                    if (showImg && showTipStr){
                        let dialog = DialogManager.getInstance().show_dialog("ui_prefabs/dialog/DialogReward", "RewardDialog");
                        if (dialog) {
                            let script = dialog.getComponent("RewardDialog");
                            if (script) {
                                let item = script.add_item();
                                if (item) {
                                    let uiTool = UIFunction.getInstance();
                                    uiTool.set_sprite_async(uiTool.seek_widget_by_name(item, "KW_IMG_ITEM_BODY"), showImg);
                                    uiTool.set_string(uiTool.seek_widget_by_name(item, "KW_TEXT_DESC"), showTipStr);
                                }
                            }
                        }
                    }
                    LobbySendGameHoodleMsg.send_get_ugame_info();
                }else{
                    DialogManager.getInstance().show_weak_hint("增加失败!");
                }
            }
        });
    }

}