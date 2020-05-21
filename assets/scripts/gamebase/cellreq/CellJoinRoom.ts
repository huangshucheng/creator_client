import { Cell } from '../../framework/cell/Cell';
import { Stype } from '../../framework/protocol/Stype';
import { Cmd } from '../../framework/protocol/GameHoodleProto';

class CellJoinRoom extends Cell {

    start(data:any, stype:number, ctype:number, timeOutTime:number): boolean {
        if (!super.start(data, stype, ctype, timeOutTime)) {
            return false;
        }
        return true;
    }

    onMsgReceive(stype:number, ctype:number, body:any) {
        if (stype != Stype.GameHoodle || ctype != Cmd.eJoinRoomRes){
            this.fail(body);
            return;
        }
        this.success(body);
    }
}

export = CellJoinRoom;
