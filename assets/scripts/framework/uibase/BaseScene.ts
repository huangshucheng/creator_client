interface ISceneBase {
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
    //进入场景
    async enter(){

    }
    //销毁场景和资源
    destroy(is_release_res:boolean){

    }
    //场景名称
    get_name(){
        return this._scene_name;
    }

}
