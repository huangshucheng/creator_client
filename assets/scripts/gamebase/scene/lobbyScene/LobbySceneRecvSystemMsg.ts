import UIController from '../../../framework/uibase/UIController';
import Response from '../../../framework/protocol/Response';
import DialogManager from '../../../framework/manager/DialogManager';
import Stype from '../../../framework/protocol/Stype';
import SystemProto from '../../../framework/protocol/protofile/SystemProto';
import SendLobbyMsg from '../../sendMsg/SendLobbyMsg';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneRecvSystemMsg extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        super.start();
        this.add_protocol_delegate();
    }

    add_event_dispatcher(){
    }
    
    add_cmd_handler_map() {
        this._cmd_handler_map = {
            [SystemProto.XY_ID.RES_USERSHARE]: this.on_event_share_res.bind(this),
        }
    }
    
    on_recv_server_message(stype: number, ctype: number, body: any) {
        if (stype !== Stype.S_TYPE.System) {
            return;
        }

        if (this._cmd_handler_map[ctype]) {
            this._cmd_handler_map[ctype].call(this, body);
        }
    }

    on_event_share_res(body:any){
        if(body && body.status == Response.SUCCESS){
            DialogManager.getInstance().show_weak_hint("分享成功！");
            SendLobbyMsg.send_get_ugame_info();
            let dialog = DialogManager.getInstance().show_poplayer("RewardDialog");
            if (dialog) {
                let script = dialog.getComponent("RewardDialog");
                if (script) {
                    let item = script.add_item();
                    if (item) {
                        this.set_sprite_asyc(this.seek_child_by_name(item, "KW_IMG_ITEM_BODY"), "lobby/lobby_coin.png");
                        this.set_string(this.seek_child_by_name(item, "KW_TEXT_DESC"), "1000");
                    }
                }
            }
        }else{
            DialogManager.getInstance().show_weak_hint("今日已分享,明日分享可获得1000金币!");
        }
    }

}
