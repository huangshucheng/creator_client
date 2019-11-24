export default class Storage {

    static set(key:string, value:any){
        cc.sys.localStorage.setItem(key,JSON.stringify(value));
    }
    
    static get(key:string){
        let res = cc.sys.localStorage.getItem(key,JSON.stringify(key));
        let retString = null;
        if(res && res != "undefined" && res != undefined){
            try {
                retString = JSON.parse(res);    
            } catch (error) {
                cc.error(error)
            }
        }
        return retString;
    }
    
    static remove(key:string){
        cc.sys.localStorage.removeItem(key);
    }
    
}