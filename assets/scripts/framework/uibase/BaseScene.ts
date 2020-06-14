import UIFunction from "../common/UIFunciton";

export interface ISceneBase {
    show_scene():void;
    destroy_scene(is_release_res:boolean):void;
    get_name():string;
}

export default class BaseScene implements ISceneBase {

    protected _prefab_name:string   = "";
    protected _script_name:string   = "";
    protected _scene_name:string    = "BaseScene";
    protected _scene_ui:cc.Node     = null;

    constructor(){
    }

    async show_scene(){
        try {
            if (this._prefab_name != "" && this._script_name != ""){
                this._scene_ui = await UIFunction.getInstance().add_prefab_to_scene_async(this._prefab_name,this._script_name);
            }else{
                console.warn("prefab_name and script_name is empty string!!");    
            }
        } catch (error) {
            console.warn(error);
        }
    }

    //销毁场景和资源
    destroy_scene(is_release_res:boolean){
        if(this._scene_ui){
            this._scene_ui.destroy()
        }

        if(is_release_res){
            cc.loader.releaseRes(this._prefab_name);
            //暂时不删除依赖资源
            // let deps = cc.loader.getDependsRecursively(this._prefab_name);
            // cc.loader.release(deps);
        }
    }
    //场景名称
    get_name(){
        return this._scene_name;
    }

}
