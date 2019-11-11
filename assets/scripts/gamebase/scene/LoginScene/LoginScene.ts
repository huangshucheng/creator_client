import UIFunction from '../../../framework/common/UIFunciton';
import BaseScene from '../../../framework/uibase/BaseScene';

export default class LoginScene extends BaseScene {

    constructor(){
        super();
        this._prefab_name   = "ui_prefabs/login/LoginUI"
        this._script_name   = "LoginSceneCtrl"
        this._scene_name    = "LoginScene";
    }

    enter(){
        //异步加载，可不提前加载资源
        this._scene_ui = UIFunction.getInstance().add_prefab_to_scene_async(this._prefab_name,this._script_name);
        //同步加载，需要提前加载资源
        // this._scene_ui =  UIFunction.getInstance().add_prefab_to_scene(this._prefab_name,this._script_name);
    }

    destroy(is_release_res:boolean){
        if(this._scene_ui){
            this._scene_ui.destroy()
        }
    }
}
