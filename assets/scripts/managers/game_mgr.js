var event_mgr = require("event_mgr");
var res_mgr = require("res_mgr");
var sound_mgr = require("sound_mgr");
var net_mgr = require("net_mgr");

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log("init game framework ... ...");
        // 初始化，框架里面的每个管理模块，所以这个是通用的;
        event_mgr.init();
        this.addComponent("sound_mgr");
        this.addComponent("net_mgr");
        // end 
        cc.log("init game framework success!");
        this.cur_scene = null;
    },

    start () {

    },

    enter_scene(scene) {
        if (scene === null) {
            return;
        }

        if (this.cur_scene !== null) {
            this.cur_scene.destroy(this.cur_scene !== scene);
        }

        this.cur_scene = scene;
        scene.enter();
    },

    preload_scene(scene, on_process, on_finished) {
        scene.preload();
    },
    // update (dt) {},
});
