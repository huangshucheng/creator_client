import { ResourceManager } from '../manager/ResourceManager';
import { AudioManager } from '../manager/AudioManager';

let resMgr = ResourceManager.getInstance();

export default class UIFunction {
    private static readonly instance: UIFunction = new UIFunction();

    _designResolution: cc.Size = null;

    public static getInstance(){
        return this.instance;
    }

    //调整canvas大小适配屏幕
    resize_screen() {
        var cvs = cc.find('Canvas').getComponent(cc.Canvas);
        //保存原始设计分辨率，供屏幕大小变化时使用
        if (!this._designResolution) {
            this._designResolution = cvs.designResolution
        }
        var dr = this._designResolution;
        var s = cc.view.getFrameSize();
        var rw = s.width;
        var rh = s.height;
        var finalW = rw;
        var finalH = rh;

        if ((rw / rh) > (dr.width / dr.height)) {
            finalH = dr.height;
            finalW = finalH * rw / rh;
        }
        else {
            finalW = dr.width;
            finalH = rh / rw * finalW;
        }
        cvs.designResolution = cc.size(finalW, finalH);
        cvs.node.width = finalW;
        cvs.node.height = finalH;
        cvs.node.emit('resize');
    }

    public node_exist(node: cc.Node) {
        let isExist = (node && cc.isValid(node));
        if(isExist == false){
            console.error(node.name , "is null")
        }
        return isExist;
    }

    public add_click_event(target: cc.Node, callback: Function, obj:any) {
        if (!this.node_exist(target)){
            return
        }
        var component:cc.Component = target.getComponent(cc.Button);
        if (!component) {
            return;
        }

        let isvalid = cc.isValid(obj);
        if (!isvalid){
            return;
        }

        obj.isBtnClick = false
        let func = function () {
            if(obj && cc.isValid(obj)){
                if (obj.isBtnClick) {
                    return
                }
                obj.isBtnClick = true
                setTimeout(function () {
                    if(obj && cc.isValid(obj)){
                        obj.isBtnClick = false
                    }
                }, 1)
                AudioManager.getInstance().playEffect("btn_pop.wav");
                // AudioManager.getInstance().playEffect("btn_click.wav");
                callback.call(obj, component)
            }
        }
        target.on("click", func, obj);
    }

    public add_click_evenet_with_data(target:cc.Node, callbackName:string, obj:cc.Component, customEventData?:any){

        if (!callbackName || typeof(callbackName) != "string" || callbackName == ""){
            console.error("add_click_evenet_with_data>>callbackName is not string");
            return;
        }

        if (!this.node_exist(target)) {
            console.error("add_click_evenet_with_data>>target node is not exist");
            return
        }

        let btnComponent: cc.Button = target.getComponent(cc.Button);
        if (!btnComponent) {
            console.error("add_click_evenet_with_data>>component is not exist");
            return;
        }

        this.clear_btn_click_event(target); //清理点之间就有的点击事件

        let fileName: string = obj.name;    // 例"LobbyUI<LobbySceneTouchEvent>"
        let matchStr = fileName.match(/(?:<)(.*)(?:>)/i);//获取尖括号中字符串
        if(!matchStr[1]){
            console.error("add_click_evenet_with_data>> " + callbackName + " , matchStr is not exist");
            return;
        }

        let clickEventHandler       = new cc.Component.EventHandler();
        clickEventHandler.target    = obj.node;             // 这个 node 节点是你的事件处理代码组件所属的节点
        clickEventHandler.component = matchStr[1];          // 代码文件名
        clickEventHandler.handler   = callbackName;
        if (customEventData){
            clickEventHandler.customEventData = customEventData; //自定义字符串
        }
        btnComponent.clickEvents.push(clickEventHandler);
    }

    clear_btn_click_event(target: cc.Node) {
        if (!this.node_exist(target)) {
            return;
        }
        let component: cc.Button = target.getComponent(cc.Button);
        if (!component) {
            return;
        }
        if (component.clickEvents.length > 0){
            component.clickEvents.splice(0, component.clickEvents.length); //remove old click event
        }
    }

    add_slide_event(target: cc.Node, callback: Function, obj: any){
        if (!this.node_exist(target)){
            return
        }
        var component:cc.Component = target.getComponent(cc.Slider);
        if (!component) {
            return;
        }

        let isvalid = cc.isValid(obj);
        if (!isvalid){
            return;
        }

        let func = function () {
            if(obj && cc.isValid(obj)){
                callback.call(obj, component)
            }
        }
        target.on("slide", func, obj);

    }

    set_string(target: cc.Node, str: string){
        if (!this.node_exist(target)){
            return
        }
        let label = target.getComponent(cc.Label)
        if (!label) {
            return;
        }
        str = str == null ? "" : str;
        label.string = String(str);
    }

    set_rich_string(target:cc.Node, str:string){
        if (!this.node_exist(target)) {
            return
        }
        let label = target.getComponent(cc.RichText)
        if (!label) {
            return;
        }
        str = str == null ? "" : str;
        label.string = String(str);
    }

    get_string(target: cc.Node){
        if (!this.node_exist(target)){
            return
        }
        let label = target.getComponent(cc.Label)
        if (!label) {
            return;
        }
        
        return label.string;
    }

    set_editbox_string(target: cc.Node, str:string){
        if (!this.node_exist(target)){
            return
        }
        let editBox = target.getComponent(cc.EditBox)
        if (!editBox) {
            return;
        }
        str = str == null ? "" : str;
        editBox.string = String(str);
    }

    get_editbox_string(view_node: cc.Node): string {
        if (!this.node_exist(view_node)){
            return
        }
        var eNode = view_node.getComponent(cc.EditBox)
        if (!eNode) {
            return;
        }
        return eNode.string;
    };

    //设置图片 同步方法
    set_sprite(target: cc.Node, str: string) {
        if (!this.node_exist(target)) {
            return;
        }
        let sprite = target.getComponent(cc.Sprite)
        if (!sprite) {
            return;
        }
        let spriteFrame = resMgr.getRes(str, cc.SpriteFrame);
        if (spriteFrame) {
            try {
                if(spriteFrame.isValid == true){
                    sprite.spriteFrame = spriteFrame  
                }
            } catch (error) {
                console.error(error)
            }   
        } else {
            console.warn(`load SpriteFrame ${str} failed`)
        }
    }

    //设置图片 异步方法
    async set_sprite_async(target: cc.Node, path: string) {
        if (!this.node_exist(target)) {
            return;
        }
        let sprite = target.getComponent(cc.Sprite)
        if (!sprite) {
            return;
        }
        try {
            let resource = resMgr.getRes(path, cc.SpriteFrame);
            if (!resource){
                resource = await resMgr.loadResAsync(path, cc.SpriteFrame);
            }
            if (resource){
                if (resource.isValid == true) {
                    sprite.spriteFrame = resource;
                }
            }
        } catch (error) {
            console.warn(error);
        }
    }

    //从plist合图设置图片 同步方法
    set_sprite_from_atlas(target: cc.Node, strAtlas: string, str: string) {
        if (!this.node_exist(target)) {
            return;
        }

        let sprite = target.getComponent(cc.Sprite)
        if (!sprite) {
            return;
        }
        let atlas = resMgr.getRes(strAtlas, cc.SpriteAtlas);
        if (atlas) {
            let frame = atlas.getSpriteFrame(str);
            if (frame) {
                sprite.spriteFrame = frame;
            } else {
                console.warn(`SpriteAtlas ${strAtlas} has no ${str} SpriteFrame`)
            }
        } else {
            console.warn(`load SpriteAtlas ${strAtlas} failed`)
        }
    }

    //从plist合图设置图片 异步方法
    async set_sprite_from_atlas_async(target: cc.Node, strAtlas: string, str: string) {
        if (!this.node_exist(target)) {
            return;
        }
        let sprite = target.getComponent(cc.Sprite)
        if (!sprite) {
            return;
        }
        try {
            let atlas = resMgr.getRes(strAtlas, cc.SpriteFrame);
            if(!atlas){
                atlas = await resMgr.loadResAsync(strAtlas, cc.SpriteAtlas);
            }
            if (atlas) {
                let frame = atlas.getSpriteFrame(str);
                if (frame) {
                    sprite.spriteFrame = frame;
                } else {
                    console.warn(`SpriteAtlas ${strAtlas} has no ${str} SpriteFrame`)
                }
            }
        } catch (error) {
            console.warn(error);
        }
    }

    set_visible(target: cc.Node, visible:boolean){
        if (!this.node_exist(target)) {
            return;
        }
        target.active = visible;
    }

    get_visible(target: cc.Node){
        if (!this.node_exist(target)) {
            return;
        }
        return target.active;
    }
    //
    add_to_node(parent: cc.Node, prefab: cc.Prefab, scriptName?: string): cc.Node {
        if (!cc.isValid(parent)){
            return;
        }
        if (prefab) {
            var item = cc.instantiate(prefab);
            if (item) {
                parent.addChild(item);
                item.position = cc.v2(0,0)
                if (scriptName) {
                    item.addComponent(scriptName);
                }
                return item;
            }
        }
        return null;
    }
    //
    add_to_scene(prefab: cc.Prefab, scriptName: string = null): cc.Node {
        if (prefab) {
            var node = cc.instantiate(prefab);
            if(node){
                let root = cc.director.getScene().getChildByName("Canvas");
                if (root){
                    root.addChild(node);
                    node.position = cc.v2(0, 0);
                    if (scriptName) {
                        node.addComponent(scriptName);
                    }
                }
            }
            return node;
        }
        return null;
    }

    //添加按钮事件
    add_check_click(target: cc.Node, callback: Function, obj: any) {
        if (!this.node_exist(target)) {
            return;
        }
        let component = target.getComponent(cc.Toggle)
        if (!component) {
            return;
        }
        let func = function (toggle: cc.Toggle) {
            if (toggle.node.interactable == false) {
                return;
            }
            callback.call(obj, component.node)
        }
        target.on('toggle', func, obj);
    }

    is_checked(target: cc.Node) {
        if (!this.node_exist(target)) {
            return false;
        }
        let toggle = target.getComponent(cc.Toggle)
        if (!toggle) {
            return false;
        }
        return toggle.isChecked
    }

    set_checked(target: cc.Node, check: boolean) {
        if (!this.node_exist(target)) {
            return;
        }
        let toggle:any = target.getComponent(cc.Toggle)
        if (!toggle) {
            return;
        }
        if (check) {
            toggle._N$isChecked = true;
            toggle._updateCheckMark();

        } else {
            toggle._N$isChecked = false;
            toggle._updateCheckMark();
        }
    }

    // 加载预制体到节点上 异步方法
     async add_prefab_to_node_async(parent: cc.Node, path: string, scriptName?: string) {
        try {
            let resource:any = resMgr.getRes(path, cc.Prefab);
            if(!resource){
                console.log("add_prefab_to_node_async>> resource: ", path, " is not exist!!");
                resource = await resMgr.loadResAsync(path, cc.Prefab);
            }else{
                console.log("add_prefab_to_node_async>> resource: ", path, " is exist!!");
            }
            if(resource){
                return this.add_to_node(parent, resource, scriptName);
            }
         } catch (error) {
             console.warn(error);
         }
    };

    // 加载预制体到节点上 同步方法
    add_prefab_to_node(parent: cc.Node, path: string, scriptName: string = null) {
        let prefab = resMgr.getRes(path, cc.Prefab)
        if(prefab){
            return this.add_to_node(parent, prefab, scriptName)
        }
    };

    //添加prefab到场景中,异步函数
   async add_prefab_to_scene_async(path: string, scriptName?: string) {
       try {
           let resource = resMgr.getRes(path, cc.Prefab);
           if(!resource){
               resource = await resMgr.loadResAsync(path, cc.Prefab);
               console.log("resource: ", path, " is not exist!!");
            }else{
                console.log("resource: " , path, " is exist!!");
           }
           if (resource) {
               return this.add_to_scene(resource, scriptName);
           }
       } catch (error) {
           console.warn(error);
       }
    }

    //添加prefab到场景中 同步函数
    add_prefab_to_scene(path: string, scriptName: string = null) {
        let prefab = resMgr.getRes(path, cc.Prefab)
        if(prefab){
            return this.add_to_scene(prefab, scriptName)
        }
    }

    is_pos_in_area(node: cc.Node, pos: cc.Vec2): boolean {
        let nodeBounding = node.getBoundingBox()
        let worldPos = node.getParent().convertToNodeSpace(pos)
        if (nodeBounding.contains(worldPos)) {
            return true
        }
        return false
    }

    set_head_img_by_url(target: cc.Node, url: string) {
        if (!this.node_exist(target)) {
            return;
        }
        let sprite = target.getComponent(cc.Sprite)
        if (!sprite) {
            return;
        }
        cc.loader.load({ url: url, type: 'jpg' }, function (err, tex) {
            sprite.spriteFrame = new cc.SpriteFrame(tex);
        });
    }

    seek_widget_by_name(root: cc.Node, name: string): cc.Node {
        if (!root) {
            return null;
        }
        if (root.name == name) {
            return root;
        }
        let arrayRootChildren = root.children;
        for (let child of arrayRootChildren) {
            if (child) {
                let res = this.seek_widget_by_name(child, name);
                if (res != null) {
                    return res;
                }
            }
        }
        return null;
    }
    
    //设置头像,因为可能出现地址不带图片格式的情况，所以下面指定了type为jpg
    set_headimg_url(target: cc.Node, url: string, fixWidth?: number) {
        if (!this.node_exist(target)) {
            return;
        }
        let sprite = target.getComponent(cc.Sprite)
        if (!sprite) {
            return;
        }
        
        cc.loader.load({ url: url + '?file=a.jpg', type: 'jpg' }, function (err:any, tex:any) {
            sprite.spriteFrame = new cc.SpriteFrame(tex);
        });

        if(fixWidth){
            let consize = target.getContentSize();
            target.setScale(fixWidth / consize.width, fixWidth / consize.height)
        }
    }
}