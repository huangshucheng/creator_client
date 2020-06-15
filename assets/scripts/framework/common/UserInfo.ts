export default class UserInfo {
    private static _uinfo:any = {};
    private static _ugame_info:any = {}

    private constructor() {
        
    }

    static set_uinfo(uinfo:string){
        let tmpInfo = null;
        try {
            tmpInfo = JSON.parse(uinfo)
            console.log("uinfo: " , tmpInfo)
        } catch (error) {
            console.error(error)
        }

        this._uinfo = tmpInfo
    }

    static get_uinfo(){
        return this._uinfo;
    }
    //玩家昵称
    static get_unick(){
        return this._uinfo.unick || "";
    }

    static get_numberid(){
        return this._uinfo.numberid || 0;
    }

    static set_uface(uface:number){
        this._uinfo.uface = uface;
    }

    static get_uface(){
        return this._uinfo.uface || 0;
    }

    static get_usex(){
        return this._uinfo.usex || 0;
    }
    //登录账号
    static get_uname(){
        return this._uinfo.uname || "";
    }

    static set_ugame_info(ugame_info:any){
        this._ugame_info = ugame_info
    }

    static get_ugame_info(){
        return this._ugame_info;
    }

    static get_uchip(){
        return this._ugame_info.uchip || 0;
    }

    static get_avatrurl(){
        return this._uinfo.avatarurl || "";
    }

}