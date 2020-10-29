export default class RichLogData {
    _logData:Array<any> = [];

    public static readonly staticInstance: RichLogData = new RichLogData();

    public static getInstance() {
        return RichLogData.staticInstance;
    }

    push_log(data:any){
        if(this._logData.length > 1000){
            this._logData.shift();
        }
        this._logData.push(data);
    }

    get_log(){
        return this._logData;
    }
}