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
    }
};

module.exports = UI_manager;