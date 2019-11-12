import BaseScene from '../../../framework/uibase/BaseScene';

export default class GameScene extends BaseScene {

    constructor(){
        super();
        this._prefab_name = "ui_prefabs/GameSceneUI"
        this._script_name = "GameSceneCtrl"
        this._scene_name  = "GameScene"
    }

    enter(){
        super.enter()
    }

    destroy(is_release_res:boolean){
        super.destroy(is_release_res)
    }
}