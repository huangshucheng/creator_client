export default class Storage {

    static set(key:string, value:any){
        cc.sys.localStorage.setItem(key,JSON.stringify(value));
    }
    
    static get(key:string){
        let res = cc.sys.localStorage.getItem(key,JSON.stringify(key));
        if(res && res != "undefined" && res != undefined){
            return JSON.parse(res);
        }
        return null;
    }
    
    static remove(key:string){
        cc.sys.localStorage.removeItem(key);
    }
    
}