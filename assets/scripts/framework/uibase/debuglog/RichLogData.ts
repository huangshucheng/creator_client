export default class RichLogData {
    _logData:Array<any> = [];

    debugInfo = {
        warns: 0,//警告
        errors: 0,//错误
    };

    public static readonly staticInstance: RichLogData = new RichLogData();

    public static getInstance() {
        return RichLogData.staticInstance;
    }

    // data: {type:string, value:string}
    push_log(data:any){
        if(this._logData.length > 1000){
            this._logData.shift();
        }
        this._logData.push(data);
    }

    get_log(){
        return this._logData;
    }

    clear_log(){
        this._logData.splice(0);
        this.debugInfo.warns = 0;
        this.debugInfo.errors = 0;
    }
}