var res_mgr         = require("res_mgr");
var UI_manager      = require("UI_manager");
var sound_mgr       = require("sound_mgr");

// 标准资源包的格式;
var res_pkg = {
    prefabs: [
        "ui_prefabs/LobbyUI", 
    ],

    sprite_frames:[],
    
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

        this.ui = UI_manager.show_ui_at(this.canvas, "LobbyUI");

    },

    // 删除当前场景的数据, 
    // bRelease:是否执行资源卸载; // 同一个场景切换的时候，可能不用卸载资源
    // bRelease一般为true,只有同一个场景切换到新的自己这个场景，为false;
    destroy(bRelease) { 
        // 删除你的游戏内容
        // this.ui.removeFromParent();
        this.ui.destroy()
        // 卸载哪些资源包由你自己根据游戏决定;
        if (bRelease) { // 你要释放的资源包;
            res_mgr.Instance.release_res_pkg(res_pkg);
        }
    },
    onDestroy(){
        cc.log("LobbyScene>>ondestroy");
    },
};

module.exports = scene;


