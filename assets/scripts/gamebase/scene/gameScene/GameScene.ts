import BaseScene from '../../../framework/uibase/BaseScene';
import { ResourceManager } from '../../../framework/manager/ResourceManager';
import UIFunction from '../../../framework/common/UIFunciton';

export default class GameScene extends BaseScene {

    constructor(){
        super();
        this._prefab_name = "ui_prefabs/games/GameSceneUI"
        this._script_name = "GameSceneCtrl"
        this._scene_name  = "GameScene"
    }

    destroy(is_release_res:boolean){
        super.destroy(is_release_res)
    }
}