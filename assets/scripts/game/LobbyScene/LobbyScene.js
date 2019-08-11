var res_mgr         = require("res_mgr");
var UI_manager      = require("UI_manager");
var UI_PREFABS_NAME = "LobbyUI"

// 标准资源包的格式;
var res_pkg = {
    prefabs: [
        "ui_prefabs/LobbyUI", 
    ],

    sprite_frames:[
        "rectheader/11",
        "rectheader/12",
        "rectheader/13",
        "rectheader/14",
        "rectheader/15",
        "rectheader/16",
        "rectheader/17",
        "rectheader/18",
        "rectheader/19",
    ],
    audio_clips: [],
    sprite_atlases: [],
    text_assets:[],
    other_file:[],
};

var scene = {
    preload(on_process, on_finished) {
        res_mgr.Instance.preload_res_pkg(res_pkg, on_process, on_finished);
    }, 

    enter() {
        this.canvas = cc.find("Canvas");
        if (this.canvas === null) {
            cc.error("[GameLobbyScene]: canvas is null");
        }

        this.ui = UI_manager.show_ui_at(this.canvas, UI_PREFABS_NAME);
    },

    // 删除当前场景的数据, 
    destroy(bRelease) { 
        if(this.ui){
            this.ui.destroy()
        }
        // 卸载哪些资源包由你自己根据游戏决定;
        if (bRelease) { // 你要释放的资源包;
            res_mgr.Instance.release_res_pkg(res_pkg);
        }
    },
    onDestroy(){
        cc.log("LobbyScene>>ondestroy");
    },

    getUIName(){
        return UI_PREFABS_NAME;
    },
};

module.exports = scene;


