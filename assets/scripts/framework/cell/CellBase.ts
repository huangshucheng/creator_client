
import { Cell } from '../../framework/cell/Cell';
import { Stype } from '../../framework/protocol/Stype';
import ArrayUtil from '../utils/ArrayUtil';
import ProtoCmd from '../protocol/ProtoCmd';

//Cell模板类
class CellBase extends Cell {

    start(data: any, stype: number, ctype: number, timeOutTime?: number) {
        if(!timeOutTime){
            timeOutTime = 5;
        }

        if (!ArrayUtil.ValueOf(Stype, stype)) {
            return false;
        }
        if (!ArrayUtil.ValueOf(ProtoCmd.StypeProtos[stype].Cmd, ctype)) {
            return false;
        }

        if (!super.start(data, stype, ctype, timeOutTime)) {
            return false;
        }

        return true;
    }

    onMsgReceive(stype: number, ctype: number, body: any) {
    }
}

export = CellBase;
