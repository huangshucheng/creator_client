var res_mgr = require("res_mgr");

// 标准资源包的格式;
var res_pkg = {
    prefabs: [
        // "ui_prefabs/LoginUI", 
    ],

    sprite_frames:[],
    
    audio_clips: [],
    
    sprite_atlases: [],
};

var scene = {
    preload(on_process, on_finished) {
        // 你还可以装载其它的资源包
        // end 
        res_mgr.Instance.preload_res_pkg(res_pkg, on_process, on_finished);
    }, 

    enter() {
    },

    // 删除当前场景的数据, 
    // bRelease:是否执行资源卸载; // 同一个场景切换的时候，可能不用卸载资源
    // bRelease一般为true,只有同一个场景切换到新的自己这个场景，为false;
    destroy(bRelease) { 
        // 卸载哪些资源包由你自己根据游戏决定;
        if (bRelease) { // 你要释放的资源包;
        }
    },
};

module.exports = scene;


