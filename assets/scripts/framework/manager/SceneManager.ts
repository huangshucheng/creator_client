import { ISceneBase } from '../uibase/BaseScene';

export default class SceneManager {
    public static readonly instance: SceneManager = new SceneManager();

    private _curScene: ISceneBase  = null;

    public static getInstance(){
        return SceneManager.instance;
    }

    private constructor(){
        this._curScene == null;
    }

    async enter_scene_asyc(scene:ISceneBase){
        if (!scene || !scene.show_scene){
            return;
        }

        await scene.show_scene();
        if(this._curScene){
            let isDestroy:boolean = this._curScene.get_name() != scene.get_name();
            this._curScene.destroy_scene(isDestroy);
        }
        this._curScene = scene;
        console.log("enter scene:", this._curScene.get_name());
    }
}