import BaseScene from '../../../framework/uibase/BaseScene';

export default class HotFixScene extends BaseScene {

    constructor(){
        super();
        this._prefab_name   = "ui_prefabs/hotfix/HotFixUI"
        this._script_name   = "HotFixSceneCtrl"
        this._scene_name    = "HotFixScene";
    }
}