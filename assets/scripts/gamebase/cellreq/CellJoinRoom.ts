import { Stype } from '../../framework/protocol/Stype';
import { Cmd } from '../../framework/protocol/GameHoodleProto';
import CellBase = require('../../framework/cell/CellBase');

class CellJoinRoom extends CellBase {

    start(data:any, stype:number, ctype:number, timeOutTime:number): boolean {
        if (!super.start(data, stype, ctype, timeOutTime)) {
            return false;
        }
        return true;
    }

    onMsgReceive(stype:number, ctype:number, body:any) {
        if(!super.onMsgReceive(stype, ctype, body)){
            return false;
        }
        if (stype != Stype.GameHoodle || ctype != Cmd.eJoinRoomRes){
            this.fail(body);
            return false;
        }
        this.success(body);
        return true;
    }
}

export = CellJoinRoom;
