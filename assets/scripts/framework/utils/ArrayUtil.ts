class ArrayUtil {
    //删除数组[]内元素，不适用对象{}
    static ArrayRemove(array:any,obj:any):boolean{
        //TODO ,array 用typeof判断类型，分对象或者数组
        var idx = array.indexOf(obj)
        if (idx > -1){
            array.splice(idx,1)
            return true;
        }
        return false;
    }
    //获取对象{},或者数组[],的长度
    static GetArrayLen(array:any){
        let count = 0;
        for (const key in array) {
            count++;
        }
        return count;
    }
    //合并两个{}对象
    static ObjCat(obj1:any, obj2:any){
        let outObj = ArrayUtil.ObjClone(obj1);
        for(let key in obj2){
            outObj[key] = obj2[key];
        }
        return outObj;
    }

    // js 对象 clone 方法
    static ObjClone(obj: any) {
        let copy: any = {};
        for (let attr in obj) {
            copy[attr] = typeof (obj[attr]) === 'object' ? this.ObjClone(obj[attr]) : obj[attr];
        }
        return copy;
    }
}

export default ArrayUtil;