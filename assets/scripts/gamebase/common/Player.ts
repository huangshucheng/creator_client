class  Player {
    
    _uinfo:any = {}

    constructor() {
        
    }

    set_uinfo(uinfo:any){
        this._uinfo = uinfo;
    }

    get_uinfo(){
        return this._uinfo;
    }

    get_numberid(){
        return this._uinfo.numberid;
    }

    get_seatid(){
        return this._uinfo.seatid;
    }
    
    set_offline(isoffline:boolean){
        this._uinfo.isoffline = isoffline;
    }

    get_offline(){
        return this._uinfo.isoffline;
    }

    get_is_host(){
        return this._uinfo.ishost;
    }

    set_user_state(userstate:number){
        this._uinfo.userstate = userstate;
    }

    get_user_state(){
        return this._uinfo.userstate;
    }

    reset(){
        this._uinfo = {}
    }
}

export default Player;