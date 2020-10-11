import CellBase = require('../../../framework/cell/CellBase');
import DialogManager from '../../../framework/manager/DialogManager';
import { Cell } from '../../../framework/cell/Cell';
import Stype from '../../../framework/protocol/Stype';
import LobbyProto from '../../../framework/protocol/protofile/LobbyProto';

class CellJoinRoom extends CellBase {

    start(body:any, timeOutTime:number): boolean {
        DialogManager.getInstance().show_loading_dialog();
        if (!super.start(body, Stype.S_TYPE.Lobby, LobbyProto.XY_ID.REQ_JOINROOM, timeOutTime)) {
            return false;
        }
        return true;
    }

    onMsgReceive(stype:number, ctype:number, body:any) {
        if (stype != Stype.S_TYPE.Lobby || ctype != LobbyProto.XY_ID.RES_JOINROOM){
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

export = CellJoinRoom;
