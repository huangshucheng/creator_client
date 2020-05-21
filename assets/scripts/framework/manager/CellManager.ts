interface cellAndName {
    cellObj: any;
    name: string;
}

class CellManager {
    public static readonly staticInstance: CellManager = new CellManager();

    private _cellArray: Array<cellAndName> = [];

    public static getInstance(){
        return CellManager.staticInstance;
    }

    public start(className:string, data:any, stype:number, ctype:number, time:number) {
        let cn = require(className);
        let classObject = new cn;
        classObject.start(data, stype, ctype, time);
        let t = {
            cellObj: classObject,
            name: className,
        }
        this._cellArray.push(t);
        // console.log("hcc>>CellManager start: len: ", this._cellArray.length );
        return classObject
    }

    public addCellCallBack(classObj: any, callBack: Function) {
        if (classObj){
            classObj.addCellCallBack(callBack)
        }
    }

    //移除cell模块对象，用于cell模块stop后调用。
    public removeCellModule(classObj: any) {
        let findIndex = null;
        for (let index = 0; index < this._cellArray.length; index++){
            if(this._cellArray[index].cellObj === classObj){
                findIndex = index;
                // console.log("hcc>>removeCellModule findIndex: " , findIndex);
                break;
            }
        }
        if (findIndex != null){
            this._cellArray.splice(findIndex, 1);
            // console.log("hcc>>CellManager removeCellModule: len: ", this._cellArray.length);
        }
    }

    public resetAllCell() {
        for (let obj of this._cellArray) {
            obj.cellObj.stop();
        }
    }
}

export default CellManager;