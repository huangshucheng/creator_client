import Queue from '../utils/Queue';
import UIFunction from '../common/UIFunciton';
import WeakHintDialog from '../../gamebase/dialog/WeakHintDialog';

enum DialogZorder {
    dialog = 10,
    loading = 100,
}

export default class DialogManager{
    public static readonly instance: DialogManager = new DialogManager();
    private _popMap = {} // "scriptName" -- > cc.Node
    private _weakhint: Queue<cc.Node> = new Queue;

    public static getInstance(){
        return DialogManager.instance;
    }

    show_dialog_asyc(path: string, scriptName: string, successCallback?:Function){
        let _this = this;
        UIFunction.getInstance().add_prefab_to_scene_async(path, scriptName ,function (resNode:any) {
            if(successCallback){
                successCallback(resNode)
            }
            if(resNode){
                resNode.zIndex = DialogZorder.dialog;
                _this._popMap[scriptName] = resNode;
            }
        })
    }

    show_dialog(path: string, scriptName: string): cc.Node {
        let node = UIFunction.getInstance().add_prefab_to_scene(path, scriptName)
        if (node) {
            this._popMap[scriptName] = node
            node.zIndex = DialogZorder.dialog;
            return node;
        }
        return null;
    }

    close_dialog(className: string) {
        let node = this._popMap[className]
        if (node && cc.isValid(node)) {
            node.destroy()
            delete this._popMap[className];
        }
    }

    get_dialog(className: string): cc.Node {
        return this._popMap[className] || null;
    }

    clear_dialog() {
        for (let key in this._popMap) {
            if(cc.isValid(this._popMap[key])){
                this._popMap[key].destroy()
            }
        }
        this._popMap = {}
    }
    
    remove_dialog_from_map(node: cc.Node) {
        let removeKey = null;
        for (let key in this._popMap) {
            if(cc.isValid(this._popMap[key])){
                if(node == this._popMap[key]){
                    removeKey = this._popMap[key]
                }
            }
        }
        if (removeKey) {
            delete this._popMap[removeKey]
        }
    }

    set_zorder(className: string, zOrder: number) {
        let node = this._popMap[className]
        if (node && cc.isValid(node)) {
            node.zIndex = zOrder
        }
    }

    dequeue_weakhint() {
        this._weakhint.dequeue()
    }

    show_weak_hint(str: string) {
        let _this = this;
        this.show_dialog_asyc("ui_prefabs/dialog/DialogWeakHint", "WeakHintDialog",function (resNode:any) {
            let hint = resNode;
            if(hint && cc.isValid(hint)){
                let component: WeakHintDialog = hint.getComponent("WeakHintDialog")
                if(component && cc.isValid(component) && component.show){
                    component.show(str)
                }
                _this._weakhint.forEach((key, value) => {
                    let hint: cc.Node = value;
                    if(cc.isValid(hint)){
                        let component: WeakHintDialog = hint.getComponent("WeakHintDialog")
                        if(component && cc.isValid(component) && component.move){
                            component.move()
                        }
                    }
                })
                _this._weakhint.enqueue(hint);

            }
        })
    }

    show_common_dialog(btnNum?: number, succeCallfunc?: Function){
        if(!btnNum){
            btnNum = 1;
        }
        this.show_dialog_asyc("ui_prefabs/dialog/DialogCommon", "CommonDialog",function (resNode:any) {
           if(resNode && cc.isValid(resNode)){
                let component =  resNode.getComponent("CommonDialog")
                if(component && cc.isValid(component)){
                    component.set_btn_num(btnNum)
                    if(succeCallfunc){
                        succeCallfunc(component)
                    }
                }
           }
        })
    }

    show_loading_dialog(){
        this.close_dialog("LoadingDialog");
        this.show_dialog_asyc("ui_prefabs/dialog/DialogLoading", "LoadingDialog",function(resNode:any){
            console.log("hcc>>show_loading_dialog");
        })
    }

    close_loading_dialog(){
        this.close_dialog("LoadingDialog");
    }

}