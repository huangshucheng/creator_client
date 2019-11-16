import BaseScene from '../../../framework/uibase/BaseScene';

export default class LobbyScene extends BaseScene {

    constructor(){
        super();
        this._prefab_name   = "ui_prefabs/lobby/LobbyUI"
        this._script_name   = "LobbySceneCtrl"
        this._scene_name    = "LobbyScene";
    }

    destroy(is_release_res:boolean){
        super.destroy(is_release_res)
    }
}
