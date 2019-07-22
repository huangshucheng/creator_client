
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

    add_button_listen(view_name, caller, func) {
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

    // update (dt) {},
});
