
var res_mgr = cc.Class({
    extends: cc.Component,

    statics: {
        Instance: null,
    },

    properties: {
        lancher_prefabs: {
            type: cc.Prefab,
            default: [],
        },

        lancher_sprite_frames: {
            type: cc.SpriteFrame,
            default: [],
        },

        lancher_audio_clips: {
            type: cc.AudioClip,
            default: [],
        },

        lancher_sprite_atlases: {
            type: cc.SpriteAtlas,
            default: [],
        },
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        if (res_mgr.Instance === null) {
            res_mgr.Instance = this;
        }
        else {
            this.destroy();
            cc.error("[error]:res_mgr has multi instances");
            return;
        }


    },

    // res_set:  {prefabs: [], sprite_frames:[], audio_clips: [], sprite_atlases: []}
    // on_progress: 进度条函数: function(per) [0, 1]
    // on_load_finished 装载结束的函数,  function() {}  
    preload_res_pkg(res_set, on_progress, on_load_finished) {
        this.now_loaded = 0;
        this.total_num = 0;

        var key = null;
        for(key in res_set) {
            this.total_num += res_set[key].length;
        }

        if (this.total_num === 0) {
            if (on_load_finished) {
                on_load_finished();
            }
            return;
        }

        var _this = this;
        for(key in res_set) {
            for(var i = 0; i < res_set[key].length; i ++) {
                var url = res_set[key][i];
                cc.loader.loadRes(url, function(err, obj) {
                    if (err) {
                        cc.error("[res_mgr]", err);
                    }

                    _this.now_loaded ++;
                    if (on_progress) {
                        on_progress(_this.now_loaded / _this.total_num);
                    }

                    if (_this.now_loaded >= _this.total_num) {
                        if (on_load_finished) {
                            on_load_finished();
                        }
                    }
                });
            }
        }
    },

    // 释放一个资源集合包;
    release_res_pkg(res_set) {
        if (true){
            return
        }
        if (res_set.sprite_frames && res_set.sprite_frames.length > 0) {
            cc.loader.release(res_set.sprite_frames)
        }

        if (res_set.audio_clips && res_set.audio_clips.length > 0) {
            cc.loader.release(res_set.audio_clips)
        }

        if (res_set.sprite_atlases && res_set.sprite_atlases.length > 0) {
            cc.loader.release(res_set.sprite_atlases)
        }

        if (res_set.prefabs && res_set.prefabs.length > 0) {
            for(var i = 0; i < res_set.prefabs.length; i ++) {
                var url = res_set.prefabs[i];
                var deps = cc.loader.getDependsRecursively(url);
                cc.loader.release(deps);
                cc.loader.release(url);
            }
        }
    },

    // 返回要获取的资源
    get_res(url) {
        return cc.loader.getRes(url);
    },

    start () {

    },

    update (dt) {},
});
