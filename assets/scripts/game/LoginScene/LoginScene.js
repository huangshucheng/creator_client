var res_mgr         = require("res_mgr");
var UI_manager      = require("UI_manager");
var sound_mgr       = require("sound_mgr");

// 标准资源包的格式;
var res_pkg = {
    prefabs: [
        "ui_prefabs/LoginUI", 
    ],

    sprite_frames:[],
    
    audio_clips: [
        // "sounds/bgm_scene2",
        // "sounds/sfx_box_appear",
    ],
    
    sprite_atlases: [],
    text_assets:[],
    fonts_assets: [
        // "fonts/FZZYJT.TTF",
        // "fonts/jiancuyuan.TTF",
    ],
    other_file:[],
};

var scene = {

    preload(on_process, on_finished) {
        res_mgr.Instance.preload_res_pkg(res_pkg, on_process, on_finished);
    }, 

    enter() {
        this.canvas = cc.find("Canvas");
        if (this.canvas === null) {
            cc.error("[LoginScene]: canvas is null");
        }

        this.ui = UI_manager.show_ui_at(this.canvas, "LoginUI");

        //sound_mgr.Instance.play_music("sounds/bgm_scene2", true);
        //sound_mgr.Instance.play_effect("sounds/sfx_box_appear");
    },

    // 删除当前场景的数据, 
    // bRelease:是否执行资源卸载; // 同一个场景切换的时候，可能不用卸载资源
    // bRelease一般为true,只有同一个场景切换到新的自己这个场景，为false;
    destroy(bRelease) { 
        // 删除你的游戏内容
        this.ui.destroy()
        // this.ui.removeFromParent();

        // 卸载哪些资源包由你自己根据游戏决定;
        if (bRelease) { // 你要释放的资源包;
            res_mgr.Instance.release_res_pkg(res_pkg);
        }
    },
    onDestroy(){
        cc.log("LoginScene>>ondestroy");
    },
};

module.exports = scene;


