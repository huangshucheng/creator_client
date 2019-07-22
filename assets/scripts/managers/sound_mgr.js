var res_mgr = require("res_mgr");

var EFFECT_NUM = 8;

var sound_mgr = cc.Class({
    extends: cc.Component,

    statics: {
        Instance: null,
    },

    properties: {
    },


    onLoad () {
        if (sound_mgr.Instance === null) {
            sound_mgr.Instance = this;
        }
        else {
            cc.error("sound_mgr has multi instances!");
            this.destroy();
            return;
        }

        // 读取本地的参数, 0不静音，1 静音
        this.music_mute = cc.sys.localStorage.getItem("music_mute");
        this.music_mute = (!this.music_mute) ? 0 : this.music_mute;
        this.effect_mute = cc.sys.localStorage.getItem("effect_mute");
        this.effect_mute = (!this.effect_mute) ? 0 : this.effect_mute;

        this.effect_volume = cc.sys.localStorage.getItem("effect_volume");
        this.effect_volume = (!this.effect_volume)? 1: this.effect_volume;
        this.music_volume = cc.sys.localStorage.getItem("music_volume");
        this.music_volume = (!this.music_volume)? 1: this.music_volume;
        // end 

        this.music_as = this.node.addComponent(cc.AudioSource);
        this.music_as.mute = (this.music_mute == 1);
        this.music_as.volume = this.music_volume;

        this.effect_as = [];
        for(var i = 0; i < EFFECT_NUM; i ++) {
            var as = this.node.addComponent(cc.AudioSource);
            this.effect_as.push(as);
            as.mute = (this.effect_mute == 1);
            as.volume = this.effect_volume;
        }

        this.cur_as = 0;

    },

    get_music_volume() {
        return this.music_volume;
    },

    set_music_volume(value) {
        this.music_volume = value;
        this.music_as.volume = value;

        cc.sys.localStorage.setItem("music_volume", value);
    },

    get_music_mute() {
        return this.music_mute;
    },

    set_music_mute(b_mute) {
        var value = (b_mute) ? 1 : 0;
        if (this.music_mute == value) {
            return;
        }

        this.music_mute = value;
        this.music_as.mute = b_mute;

        cc.sys.localStorage.setItem("music_mute", value);
    },

    get_effect_volume() {
        return this.effect_volume;
    },

    set_effect_volume(value) {

        for(var i = 0; i < this.effect_as.length; i ++) {
            this.effect_as[i].volume = value;
        }

        this.effect_volume = value;
        cc.sys.localStorage.setItem("effect_volume", value);
    },

    get_effect_mute() {
        return this.effect_mute;
    },

    set_effect_mute(b_mute) {
        var value = (b_mute) ? 1 : 0;
        if (this.effect_mute == value) {
            return;
        }

        for(var i = 0; i < this.effect_as.length; i ++) {
            this.effect_as[i].mute = b_mute;
        }

        this.effect_mute = value;
        cc.sys.localStorage.setItem("effect_mute", value);
    },

    play_music(url, loop) {
        var loop = (loop) ? true : false;
        this.music_as.loop = loop;
        this.music_as.clip = res_mgr.Instance.get_res(url);
        if (this.music_as.clip) {
            this.music_as.play();
        }
        else {
            cc.error("music audio clip null: ", url);
        }
    },

    stop_music() {
        this.music_as.stop();
    },

    play_effect(url) {
        var as = this.effect_as[this.cur_as];
        this.cur_as ++;
        if (this.cur_as >= EFFECT_NUM) {
            this.cur_as = 0;
        }

        as.clip = res_mgr.Instance.get_res(url);
        if (as.clip) {
            as.play();
        }
        else {
            cc.error("effect audio clip null: ", url);
        }
    },

    start () {

    },

    // update (dt) {},
});
