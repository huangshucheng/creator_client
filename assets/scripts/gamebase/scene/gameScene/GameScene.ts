import BaseScene from '../../../framework/uibase/BaseScene';

export default class GameScene extends BaseScene {

    constructor(){
        super();
        this._prefab_name = "ui_prefabs/games/GameSceneUI"
        this._script_name = "GameSceneCtrl"
        this._scene_name  = "GameScene"
    }

}