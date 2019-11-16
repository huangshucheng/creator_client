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
        if(!scene || !scene.preload){
            return;
        }
        let _this = this;
        scene.preload(function (error: Error, resource: any) {
            if(error){
                cc.error("enter_scene_asyc error: " , error)
                return;
            }
            if(_this._curScene){
                let isDestroy = _this._curScene.get_name() != scene.get_name()
                _this._curScene.destroy(isDestroy)
            }
            _this._curScene = scene;
            cc.log("enter scene:", _this._curScene.get_name())
        },function (completedCount: number, totalCount: number, item: any) {
            cc.log("preload scene: %" + completedCount / totalCount * 100)            
        })
    }
}