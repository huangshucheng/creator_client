
cc.Class({
    extends: cc.Component,

    properties: {
    },

    load_all_object(root, path) {
        for(let i = 0; i < root.childrenCount; i ++) {
            this.view[path + root.children[i].name] = root.children[i];
            this.load_all_object(root.children[i], path + root.children[i].name + "/");
        }
    },
    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        this.view = {};
        this.load_all_object(this.node, "");
    },

    start () {

    },
    //view_name: 节点路径+名称， 可带 '/'
    //root :开始查找的节点, 可为null,从根节点开始查找
    ui_find(view_name,root){
        if(this.view[view_name]){
            return this.view[view_name];
        }
        return cc.find(view_name,root);
    },
    //view_name, 不带 '/'
    seekWidgetByName(view_name,root){
        if(root == null){
            root = this.node
        }
        if (root.name == view_name){
            return root;
        }
        for(let i = 0; i < root.childrenCount; i++) {
            var node = this.seekWidgetByName(root.children[i],view_name);
            if(node){
                return node;
            }
        }
        return null;
    },

    add_button_listener(view_name, caller, func) {
        if(view_name == null){
            return;
        }
        var view_node = this.view[view_name];
        if (!view_node) {
            return;
        }
        
        var button = view_node.getComponent(cc.Button);
        if (!button) {
            return;
        }

        view_node.on("click", func, caller);
    },

    set_string(view_name,str){
        var view_node = this.view[view_name];
        if (!view_node) {
            return;
        }
        
        var label = view_node.getComponent(cc.Label);
        if (!label) {
            return;
        }
        str = str == null ? "" : str;
        label.string = String(str);
    },

    get_string(view_name){
        var view_node = this.view[view_name];
        if (!view_node) {
            return;
        }
        
        var label = view_node.getComponent(cc.Label);
        if (!label) {
            return;
        }
        return label.string;
    },

    set_visible(view_name,visible){
        var view_node = this.view[view_name];
        if (!view_node) {
            return;
        }
        view_node.active = visible        
    },

    get_visible(view_name){
        var view_node = this.view[view_name];
        if (!view_node) {
            return;
        }
        return view_node.active;   
    },

    load_texture(view_name,url){
        var view_node = this.view[view_name];
        if (!view_node) {
            return;
        }
        var texture2d = cc.loader.getRes(url);
        if(texture2d){
            var spriteFrame = new cc.SpriteFrame(texture2d);
            if(spriteFrame){
                var sprite = view_node.getComponent(cc.Sprite)
                if(sprite){
                    sprite.spriteFrame = spriteFrame
                }
            }
        }else{
            cc.loader.loadRes(url,cc.SpriteFrame,function(err,spriteFrame){
                if (err){
                    cc.error(err);
                    return;
                }
                var sprite = view_node.getComponent(cc.Sprite)
                if(sprite){
                    sprite.spriteFrame  =spriteFrame;
                }
　　　　    });
        }
    },
    // update (dt) {},
});
