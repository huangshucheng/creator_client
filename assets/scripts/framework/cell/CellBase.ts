
import { Cell } from '../../framework/cell/Cell';
import ArrayUtil from '../utils/ArrayUtil';
import ProtoCmd from '../protocol/ProtoCmd';
import Stype from '../protocol/Stype';

//Cell模板类
class CellBase extends Cell {

    start(data: any, stype: number, ctype: number, timeOutTime?: number) {
        if(!timeOutTime){
            timeOutTime = 5;
        }

        if (!ArrayUtil.ValueOf(Stype.S_TYPE, stype)) {
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
