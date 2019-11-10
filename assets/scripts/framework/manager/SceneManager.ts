import Log from '../utils/Log';

export default class SceneManager {
    public static readonly instance: SceneManager = new SceneManager();

    private _curScene: any  = null;

    public static getInstance(){
        return SceneManager.instance;
    }

    constructor(){
        this._curScene == null;
    }

    enter_scene(scene:any){
        if(scene == null){
            return;
        }

        if(this._curScene){
            this._curScene.destroy(this._curScene.get_name() != scene.get_name())
        }

        this._curScene = scene;
        scene.enter();
        Log.info("enter scene: ", this._curScene.get_name())
    }
    
}