import CellBase = require('../../../framework/cell/CellBase');
import DialogManager from '../../../framework/manager/DialogManager';
import { Cell } from '../../../framework/cell/Cell';
import Stype from '../../../framework/protocol/Stype';
import GameHoodleProto from '../../../framework/protocol/protofile/GameHoodleProto';

class CellLoginLogic extends CellBase {

    start(body:any, timeOutTime:number): boolean {
        DialogManager.getInstance().show_loading_layer();
        if (!super.start(body, Stype.S_TYPE.GameHoodle, GameHoodleProto.XY_ID.eLoginLogicReq, timeOutTime)) {
            return false;
        }
        return true;
    }

    onMsgReceive(stype:number, ctype:number, body:any) {
        if (stype != Stype.S_TYPE.GameHoodle || ctype != GameHoodleProto.XY_ID.eLoginLogicRes){
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

export = CellLoginLogic;
