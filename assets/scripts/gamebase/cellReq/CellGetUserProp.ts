//玩家道具:金币等
import CellBase = require('../../framework/cell/CellBase');
import DialogManager from '../../framework/manager/DialogManager';
import { Cell } from '../../framework/cell/Cell';
import Stype from '../../framework/protocol/Stype';
import GameHoodleProto from '../../framework/protocol/protofile/GameHoodleProto';

class CellGetUserProp extends CellBase {

    start(body:any, timeOutTime:number): boolean {
        DialogManager.getInstance().show_loading_dialog();
        if (!super.start(body, Stype.S_TYPE.GameHoodle, GameHoodleProto.XY_ID.eUserGameInfoReq, timeOutTime)) {
            return false;
        }
        return true;
    }

    onMsgReceive(stype:number, ctype:number, body:any) {
        if (stype != Stype.S_TYPE.GameHoodle || ctype != GameHoodleProto.XY_ID.eUserGameInfoRes){
            return;
        }
        this.success(body);
    }

    dealCell(type: number, data?: any) {
        super.dealCell(type, data);
        DialogManager.getInstance().close_loading_dialog();
        if (type == Cell.TYPE.TIMEOUT) {
            DialogManager.getInstance().show_weak_hint("" + this.getMessage());
        }
    }
}

export = CellGetUserProp;
