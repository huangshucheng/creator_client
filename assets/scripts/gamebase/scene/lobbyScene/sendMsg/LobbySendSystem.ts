import NetWork from '../../../../framework/network/NetWork';
import { Stype } from '../../../../framework/protocol/Stype';
import { Cmd } from '../../../../framework/protocol/SystemProto';
import CellManager from '../../../../framework/manager/CellManager';

export default class LobbySendSystem {

    static send(ctype: number, body?: any) {
        NetWork.getInstance().send_msg(Stype.GameSystem, ctype, body)
    }

    static send_get_reward_info() {
        LobbySendSystem.send(Cmd.eLoginRewardConfigReq);
    }

    static send_sign_req(signofday:number) {
        if(signofday <= 0 || signofday > 7){
            return;
        }
        let body = {
            signofday : signofday,
        }
        CellManager.getInstance().start("CellRewardSign", body, 5);
    }
}