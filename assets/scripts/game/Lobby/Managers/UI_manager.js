var res_mgr = require("res_mgr");

var UI_manager = {
    show_ui_at(parent, ui_name) {
        var prefab = res_mgr.Instance.get_res("ui_prefabs/" + ui_name);
        var item = null;
        if (prefab) {
            item = cc.instantiate(prefab);
            parent.addChild(item);
            item.addComponent(ui_name + "_ctrl");
        }
        return item;
    },

    show_dialog(ui_name){
        var resName = "ui_prefabs/dialog/" + ui_name
        var prefab = res_mgr.Instance.get_res(resName);
        var item = null;
        if (prefab){
            item = cc.instantiate(prefab)
            item.addComponent(ui_name + "_ctrl")
            cc.director.getScene().addChild(item)
            item.name = ui_name
        }else{
            var res_pkg = {prefabs:[resName]};
            res_mgr.Instance.preload_res_pkg(res_pkg,null,function(){
                var prefab = res_mgr.Instance.get_res(resName);
                item = cc.instantiate(prefab)
                item.addComponent(ui_name + "_ctrl")
                cc.director.getScene().addChild(item)
                item.name = ui_name
            });
        }
        return item;
    },

    hide_dialog(ui_name){
        var dialog = cc.director.getScene().getChildByName(ui_name);
        if (dialog){
            dialog.destroy()
        }
    },
};

module.exports = UI_manager;