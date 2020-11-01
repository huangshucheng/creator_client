import NetWork from '../../framework/network/NetWork';
import CellManager from '../../framework/manager/CellManager';
import Response from '../../framework/protocol/Response';
import DialogManager from '../../framework/manager/DialogManager';
import GameHoodleConfig from '../../framework/config/GameHoodleConfig';
import StringUtil from '../../framework/utils/StringUtil';
import UIFunction from '../../framework/common/UIFunciton';
import Stype from '../../framework/protocol/Stype';
import SystemProto from '../../framework/protocol/protofile/SystemProto';
import SendLobbyMsg from './SendLobbyMsg';

let BALL_TEXTURE_KEY_STR = "textures/games/balls/ball_level_%s.png"
let COIN_TEXTURE_KEY_STR = "textures/lobby/lobby_coin.png";

export default class SendSystem {

    static send(ctype: number, body?: any) {
        NetWork.getInstance().send_msg(Stype.S_TYPE.System, ctype, body)
    }

    //请求登录奖励
    static send_get_reward_info() {
        SendSystem.send(SystemProto.XY_ID.REQ_LOGINREWARDCONFIG);
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
        SendSystem.send(SystemProto.XY_ID.REQ_USERSHARE);
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
                if (body.status == Response.SUCCESS) {
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
                        let dialog = DialogManager.getInstance().show_poplayer("RewardDialog");
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
                    SendLobbyMsg.send_get_ugame_info();
                }else{
                    DialogManager.getInstance().show_weak_hint("增加失败!");
                }
            }
        });
    }

}