export default class SceneManager {
    public static readonly instance: SceneManager = new SceneManager();

    private _curScene: any  = null;

    public static getInstance(){
        return SceneManager.instance;
    }

    private constructor(){
        this._curScene == null;
    }

    enter_scene_asyc(scene:any){
        
    }

    enter_scene(scene:any){
        if(scene == null){
            return;
        }

        if(this._curScene){
            let isDestroy = this._curScene.get_name() != scene.get_name()
            this._curScene.destroy(isDestroy)
        }

        this._curScene = scene;
        scene.enter();
        cc.log("enter scene: ", this._curScene.get_name())
    }
    
}