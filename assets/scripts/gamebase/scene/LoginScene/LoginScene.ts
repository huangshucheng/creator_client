import BaseScene from '../../../framework/uibase/BaseScene';

export default class LoginScene extends BaseScene {

    constructor(){
        super();
        this._prefab_name   = "ui_prefabs/login/LoginUI"
        this._script_name   = "LoginSceneCtrl"
        this._scene_name    = "LoginScene";
    }
}