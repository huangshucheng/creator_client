interface ISceneBase {
    preload(process_callfunc:Function, finished_callfunc:Function)
    enter();
    destroy(is_release_res:boolean);
    get_name();
}

export default class BaseScene implements ISceneBase {

    protected _prefab_name = "";
    protected _script_name = "";
    protected _canvas = null;
    protected _scene_ui = null;
    protected _scene_name = "BaseScene";

    constructor(){
        this._canvas = cc.find("Canvas")
    }

    async preload(process_callfunc:Function, finished_callfunc:Function){

    }

    async enter(){

    }

    destroy(is_release_res:boolean){

    }

    get_name(){
        return this._scene_name;
    }

}
