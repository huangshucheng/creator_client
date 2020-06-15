import Queue from '../utils/Queue';
import UIFunction from '../common/UIFunciton';
import WeakHintDialog from '../../gamebase/dialog/WeakHintDialog';
import CommonDialog from '../../gamebase/dialog/CommonDialog';

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

    async show_dialog_async(path: string, scriptName: string){
        let resNode:cc.Node = await UIFunction.getInstance().add_prefab_to_scene_async(path, scriptName);
        if (resNode){
            resNode.zIndex = DialogZorder.dialog;
            this._popMap[scriptName] = resNode;
            return resNode;
        }
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

    async show_weak_hint(str: string) {
        let resNode:cc.Node = await this.show_dialog_async("ui_prefabs/dialog/DialogWeakHint", "WeakHintDialog");
        if (resNode){
            if (resNode && cc.isValid(resNode)){
                let component: WeakHintDialog = resNode.getComponent("WeakHintDialog")
                if(component && cc.isValid(component) && component.show){
                    component.show(str)
                }
                this._weakhint.forEach((key, value) => {
                    let hint: cc.Node = value;
                    if(cc.isValid(hint)){
                        let component: WeakHintDialog = hint.getComponent("WeakHintDialog")
                        if(component && cc.isValid(component) && component.move){
                            component.move()
                        }
                    }
                })
                this._weakhint.enqueue(resNode);
            }
        }
    }

    show_common_dialog(btnNum?: number){
        if(!btnNum){
            btnNum = 1;
        }
        this.close_dialog("CommonDialog");
        let resNode:cc.Node = this.show_dialog("ui_prefabs/dialog/DialogCommon", "CommonDialog");
        if (resNode){
            if(cc.isValid(resNode)){
                let component: CommonDialog =  resNode.getComponent("CommonDialog")
                if(component && cc.isValid(component)){
                    if (component.set_btn_num){
                        component.set_btn_num(btnNum)
                    }
                }
                return resNode;
            }
        }
    }

    show_loading_dialog(){
        this.close_dialog("LoadingDialog");
        this.show_dialog("ui_prefabs/dialog/DialogLoading", "LoadingDialog")
    }

    close_loading_dialog(){
        this.close_dialog("LoadingDialog");
    }

}