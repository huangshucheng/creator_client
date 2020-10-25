import Queue from '../utils/Queue';

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

    show_poplayer(className:string):cc.Node{
        let obj = require(className);
        if(obj && obj.show_layer){
            let resNode: cc.Node = obj.show_layer();
            if (resNode) {
                resNode.zIndex = DialogZorder.dialog;
                this._popMap[className] = resNode;
                return resNode;
            }
        }
        return null;
    }

    close_layer(className: string) {
        let node = this._popMap[className]
        if (node && cc.isValid(node)) {
            node.destroy()
            delete this._popMap[className];
        }
    }

    get_layer(className: string): cc.Node {
        return this._popMap[className] || null;
    }

    clear_layer() {
        for (let key in this._popMap) {
            if(cc.isValid(this._popMap[key])){
                this._popMap[key].destroy()
            }
        }
        this._popMap = {}
    }
    
    remove_layer_from_map(node: cc.Node) {
        let removeKey = null;
        for (let key in this._popMap) {
            if(cc.isValid(this._popMap[key])){
                if(node == this._popMap[key]){
                    removeKey = key;
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
        let resNode:cc.Node = this.show_poplayer("WeakHintDialog");
        if (resNode){
            if (resNode && cc.isValid(resNode)){
                let component = resNode.getComponent("WeakHintDialog")
                if(component && cc.isValid(component) && component.show){
                    component.show(str)
                }
                this._weakhint.forEach((key, value) => {
                    let hint: cc.Node = value;
                    if(cc.isValid(hint)){
                        let component = hint.getComponent("WeakHintDialog")
                        if(component && cc.isValid(component) && component.move){
                            component.move()
                        }
                    }
                })
                this._weakhint.enqueue(resNode);
            }
        }
    }

    show_common_layer(btnNum?: number){
        if(!btnNum){
            btnNum = 1;
        }
        this.close_layer("CommonDialog");
        let resNode:cc.Node = this.show_poplayer("CommonDialog");
        if (resNode){
            if(cc.isValid(resNode)){
                let component =  resNode.getComponent("CommonDialog")
                if(component && cc.isValid(component)){
                    if (component.set_btn_num){
                        component.set_btn_num(btnNum)
                    }
                }
                return resNode;
            }
        }
    }

    show_loading_layer(){
        this.close_layer("LoadingDialog");
        this.show_poplayer("LoadingDialog")
    }

    close_loading_layer(){
        this.close_layer("LoadingDialog");
    }

}