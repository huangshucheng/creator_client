import UIFunction from '../../../framework/common/UIFunciton';
import BaseScene from '../../../framework/uibase/BaseScene';

export default class HotFixScene extends BaseScene {

    constructor(){
        super();
        this._prefab_name   = "ui_prefabs/hotfix/HotFixUI"
        this._script_name   = "HotFixSceneCtrl"
        this._scene_name    = "HotFixScene";
    }

    enter(){
        this._scene_ui = UIFunction.getInstance().add_prefab_to_scene_async(this._prefab_name,this._script_name);
        // cc.log("hcc>>hotfixscene: ", this._scene_ui)
    }

    destroy(is_release_res:boolean){
        if(this._scene_ui){
            this._scene_ui.destroy()
        }
    }
}