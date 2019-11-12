import BaseScene from '../../../framework/uibase/BaseScene';

export default class LobbyScene extends BaseScene {

    constructor(){
        super();
        this._prefab_name   = "ui_prefabs/lobby/LobbyUI"
        this._script_name   = "LobbySceneCtrl"
        this._scene_name    = "LobbyScene";
    }

    enter(){
        super.enter()
    }

    destroy(is_release_res:boolean){
        super.destroy(is_release_res)
    }
}
