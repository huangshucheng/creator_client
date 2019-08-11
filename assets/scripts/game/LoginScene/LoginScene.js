var res_mgr         = require("res_mgr");
var UI_manager      = require("UI_manager");
var sound_mgr       = require("sound_mgr");

var UI_PREFABS_NAME = "LoginUI"

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

        this.ui = UI_manager.show_ui_at(this.canvas, UI_PREFABS_NAME);

        //sound_mgr.Instance.play_music("sounds/bgm_scene2", true);
        //sound_mgr.Instance.play_effect("sounds/sfx_box_appear");
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
        cc.log("LoginScene>>ondestroy");
    },

    getUIName(){
        return UI_PREFABS_NAME;
    },
};

module.exports = scene;


