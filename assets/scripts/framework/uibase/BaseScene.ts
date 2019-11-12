import { ResourceManager } from "../manager/ResourceManager";
import UIFunction from "../common/UIFunciton";

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
    enter(){
        let _this = this;
        ResourceManager.getInstance().loadResAsyc(this._prefab_name,cc.Prefab,function (error: Error, resource: any) {
            if(!error){
                _this._scene_ui = UIFunction.getInstance().add_to_scene(resource, _this._script_name)
            }
        },function (completedCount: number, totalCount: number, item: any) {
            cc.log("completeCount: " , completedCount," totalCount: ", totalCount)
        })
    }
    //销毁场景和资源
    destroy(is_release_res:boolean){
        if(this._scene_ui){
            this._scene_ui.destroy()
        }
    }
    //场景名称
    get_name(){
        return this._scene_name;
    }

}
