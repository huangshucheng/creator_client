//签到
import CellBase = require('../../framework/cell/CellBase');
import DialogManager from '../../framework/manager/DialogManager';
import { Cell } from '../../framework/cell/Cell';
import Stype from '../../framework/protocol/Stype';
import SystemProto from '../../framework/protocol/protofile/SystemProto';

class CellRewardSign extends CellBase {

    start(body:any, timeOutTime:number): boolean {
        DialogManager.getInstance().show_loading_layer();
        if (!super.start(body, Stype.S_TYPE.System, SystemProto.XY_ID.REQ_LOGINREWARDSIGN, timeOutTime)) {
            return false;
        }
        return true;
    }

    onMsgReceive(stype:number, ctype:number, body:any) {
        if (stype != Stype.S_TYPE.System || ctype != SystemProto.XY_ID.RES_LOGINREWARDSIGN){
            return;
        }
        this.success(body);
    }

    dealCell(type: number, data?: any) {
        super.dealCell(type, data);
        DialogManager.getInstance().close_loading_layer();
        if (type == Cell.TYPE.TIMEOUT) {
            DialogManager.getInstance().show_weak_hint("" + this.getMessage());
        }
    }
}

export = CellRewardSign;
