import NetWork from '../network/NetWork';
import CellManager from '../manager/CellManager';

export class Cell {
    _callBacks: Array<Function>;
    _startTime: number;
    _endTime: number;
    _timeOutTime: number;
    _cellScheduleScriptID: number;
    _isStart: boolean;
    _msg: string;

    public static TYPE:any = {
        NONE: 0,
        SUCCESS: 1,
        FAIL: 2,
        TIMEOUT: 3,
    }

    constructor() {
        this._callBacks     = [];
        this._startTime     = 0;
        this._endTime       = 0;
        this._timeOutTime   = 0;
        this._isStart       = false;
        this._msg           = "";
        this._cellScheduleScriptID = 0;
    }

    start(data:any, stype:number, ctype:number, timeout:number):boolean{
        if(!stype || !ctype){
            return false;
        }
        this._startTime = new Date().getTime();
        this._timeOutTime = timeout;
        if (this._isStart) {
            return false;
        }
        this._isStart = true;
        if (timeout > 0) {
            this._cellScheduleScriptID = setTimeout(() => {
                this.timeout(null)
            }, this._timeOutTime * 1000);
        }

        NetWork.getInstance().add_protocol_delegate(this, this.onMsgReceive.bind(this));
        NetWork.getInstance().send_msg(stype, ctype, data);
        return true;
    }

    onMsgReceive(stype:number, ctype:number, body:any){

    }

    protected stop(){
        if (this._cellScheduleScriptID != 0) {
            clearTimeout(this._cellScheduleScriptID);
            this._cellScheduleScriptID = 0;
        }

        this._callBacks = [];
        this._isStart = false;
        CellManager.getInstance().removeCellModule(this);
        NetWork.getInstance().remove_protocol_delegate(this);
    }

    addCellCallBack(callBackFunc: Function){
        this._callBacks.forEach(element => {
            if (element == callBackFunc) {
                return;
            }
        });
        this._callBacks.push(callBackFunc);
    }

    dealCell(type: number, data?: any){
        this._endTime = new Date().getTime();
        this._callBacks.forEach(element => {
            element(this, type, data);
        });
        this.stop();
    }

    public success(data?: any) {
        this.dealCell(Cell.TYPE.SUCCESS, data);
    }

    public fail(data?: any) {
        if (this.getMessage() == "") {
            this.setMessage("请求服务器失败，请检查网络!");
        }
        this.dealCell(Cell.TYPE.FAIL, data);
    }

    public timeout(data?: any) {
        if (this.getMessage() == "") {
            this.setMessage("请求服务器超时，请检查网络!")
        }
        this.dealCell(Cell.TYPE.TIMEOUT, data);
    }

    protected getLeftTime():number {
        if (this._endTime == 0) {
            return this._timeOutTime - (new Date().getTime() - this._startTime)
        } else {
            return this._timeOutTime - (this._endTime - this._startTime)
        }
    }

    protected setMessage(msg: string) {
        this._msg = msg;
    }

    public getMessage(): string {
        return this._msg;
    }

}

