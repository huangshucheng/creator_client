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
        ResourceManager.getInstance().loadResAsyc(this._prefab_name, cc.Prefab, function(error: Error, resource: any){
            if(!error){
                _this._scene_ui = UIFunction.getInstance().add_to_scene(resource, _this._script_name)
            }
        },function (completedCount: number, totalCount: number, item: any){
            cc.log("load scene: " + _this._scene_name + " ,percent: " + completedCount + "/" + totalCount);
        })
    }
    //销毁场景和资源
    destroy(is_release_res:boolean){
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
