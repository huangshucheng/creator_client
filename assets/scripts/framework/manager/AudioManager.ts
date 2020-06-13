import Storage from '../utils/Storage';

export class AudioManager {

    private _musicVolume: number = 1.0;
    private _effectVolume: number = 1.0;
    private static _instance: AudioManager;

   constructor() {
        this.init();
    }

    static getInstance(): AudioManager {
        if (!AudioManager._instance) {
            AudioManager._instance = new AudioManager();
        }
        return this._instance;
    }

    private init() {
        // 初始化音量值
        let musicVolume = Storage.get("musicVolume");
        let effectVolume = Storage.get("effectVolume");
        this.musicVolume = (musicVolume == null ? this.musicVolume : parseFloat(musicVolume));
        this.effectVolume = (effectVolume == null ? this.effectVolume : parseFloat(effectVolume));
        // 游戏进入后台时触发
        cc.game.on(cc.game.EVENT_HIDE, function () {
            this.pauseAll();
        }.bind(this));
        // 游戏进入前台时触发
        cc.game.on(cc.game.EVENT_SHOW, function () {
            this.resumeAll();
        }.bind(this));
    }

    private getAudioUrl(url) {
        return cc.url.raw("resources/sounds/" + url);
    }

    public playEffect(url) {
        let id;
        let audioUrl = this.getAudioUrl(url);
        (<any>cc.AudioClip)._loadByUrl(audioUrl, function (err, clip) {
            if (clip) {
                id = cc.audioEngine.playEffect(clip, false);
            }
        });
        return id;
    }

    public playMusic(url) {
        let id;
        (<any>cc.AudioClip)._loadByUrl(this.getAudioUrl(url), function (err, clip) {
            if (clip) {
                id = cc.audioEngine.playMusic(clip, true);
            }
        });
        return id;
    }

    public pauseAll() {
        cc.audioEngine.pauseAll();
    }

    public resumeAll() {
        cc.audioEngine.resumeAll();
    }

    get musicVolume() {
        return this._musicVolume;
    }

    set musicVolume(volume) {
        this._musicVolume = ((volume >= 0 || volume <= 1) ? volume : this._musicVolume);
        cc.audioEngine.setMusicVolume(this._musicVolume);
        Storage.set("musicVolume", volume);
    }

    get effectVolume() {
        return this._effectVolume;
    }

    set effectVolume(volume) {
        this._effectVolume = ((volume >= 0 || volume <= 1) ? volume : this.effectVolume);
        cc.audioEngine.setEffectsVolume(this.effectVolume);
        Storage.set("effectVolume", volume);
    }

}
