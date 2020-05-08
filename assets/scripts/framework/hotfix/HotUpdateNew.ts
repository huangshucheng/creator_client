//用cocos creator 自带的jsb.AssetsManager更新

import { ResourceManager } from "../manager/ResourceManager";
import PlatForm from "../config/PlatForm";
import GameAppConfig from '../config/GameAppConfig';

//for test
let customManifestStr = JSON.stringify({
    "packageUrl": "http://192.168.50.220:5555/tutorial-hot-update/remote-assets/",
    "remoteManifestUrl": "http://192.168.50.220:5555/tutorial-hot-update/remote-assets/project.manifest",
    "remoteVersionUrl": "http://192.168.50.220:5555/tutorial-hot-update/remote-assets/version.manifest",
    "version": "1.10",
    "assets": {
        "src/cocos2d-jsb.js": {
            "size": 3341465,
            "md5": "fafdde66bd0a81d1e096799fb8b7af95"
        },
    },
    "searchPaths": []
});

let hotUpdatePath = "hotUpdateCache";
let hotUpdateSearchPaths = "HotUpdateSearchPaths" //热更新缓存保存本地key

class HotUpdateNew{
    public static readonly instance: HotUpdateNew = new HotUpdateNew();

    _assetsManager:any      = null;
    _updating:boolean       = false;
    _canRetry:boolean       = false;
    _manifestUrl:cc.Asset    = null;
    _updateCallback:Function = null;
    _localVersion:string     = "";

    constructor(){
        this.init();
    }

    public static getInstance() {
        return HotUpdateNew.instance;
    }

    //获得本地版本
    public getLocalVersion(){
        return this._localVersion;
    }

    init(){
        if (!this.checkPlatForm()) {
            return;
        }

        let _this = this;
        ResourceManager.getInstance().loadResAsyc(GameAppConfig.LOCAL_MANIFEST_PATH, cc.Asset, function (error: Error, resource: any) {
            if (!error) {
                _this._manifestUrl = resource;
                console.log("hcc>>manifest: ", resource.nativeUrl);
                if(_this._manifestUrl){
                    let url = _this._manifestUrl.nativeUrl;
                    console.log("hcc>>_manifestUrl.nativeUrl111>>init: ", url);
                    
                    if (cc.loader.md5Pipe) {
                        url = cc.loader.md5Pipe.transformURL(url);
                    }
                    console.log("hcc>>_manifestUrl.nativeUrl222>>init:  ", url);
                    if (!_this.checkPlatForm()) {
                        return;
                    }
                    let storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + hotUpdatePath);
                    console.log('hcc>>Storage path for remote asset : ', storagePath);
                    _this._assetsManager = new jsb.AssetsManager('', storagePath, _this.versionCompareCallback.bind(_this));
                    _this._assetsManager.setVerifyCallback(_this.assetsVerifyCallback.bind(_this))
                    if (cc.sys.os === cc.sys.OS_ANDROID) {
                        _this._assetsManager.setMaxConcurrentTask(2);
                    }
                    _this._assetsManager.loadLocalManifest(url);

                    let localMani = _this._assetsManager.getLocalManifest()
                    if (localMani && localMani.getVersion){
                        _this._localVersion = localMani.getVersion()
                        console.log("hcc>>localMani: ", localMani , " ,localversion:",localMani.getVersion())
                    }
                }
            } else {
                console.log("hcc>>manifest error: ", error);
            }
        })
    }

    //热更新回调
    setUpdateCallback(callback:Function) {
        this._updateCallback = callback;
    }

    //平台判断
    checkPlatForm(){
        if(!cc.sys.isNative){
            console.warn("not native platform,can not hotupdate!");
            return false;
        }
        return true;
    }

    //检测更新
    checkUpdate(callback:Function) {
        if (!this.checkPlatForm()) {
            callback(false);
            return;
        }

        if(!this._manifestUrl){
            callback(false);
            return;
        }

        let panel_info_string = "";
        if (this._updating) {
            callback(false);
            return;
        }

        if (!this._assetsManager){
            callback(false);
            return;
        }

        if (this._assetsManager.getState() === jsb.AssetsManager.State.UNINITED) {
            let url = this._manifestUrl.nativeUrl;
            console.log("hcc>>_manifestUrl.nativeUrl111: " , url);
            if (cc.loader.md5Pipe) {
                url = cc.loader.md5Pipe.transformURL(url);
            }
            console.log("hcc>>_manifestUrl.nativeUrl222: ", url);
            this._assetsManager.loadLocalManifest(url);
        }

        if (!this._assetsManager.getLocalManifest() || !this._assetsManager.getLocalManifest().isLoaded()) {
            console.log("hcc>>checkUpdate: Failed to load local manifest ...");
            callback(false);
            return;
        }

        console.log("hcc>>checkUpdate: " , panel_info_string);

        let checkUpdateCallback = function(event:any) {
            console.log('hcc>>checkUpdateCallback,Code: ' + event.getEventCode());
            let panel_info_string = "";
            let eventCode = event.getEventCode();
            switch (eventCode) {
                case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                    panel_info_string = "本地没有manifest文件!";
                    break;
                case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                    panel_info_string = "manifest下载失败!";
                    break;
                case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                    panel_info_string = "已经更新到最新版本!";
                    break;
                case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                    panel_info_string = '发现新版本，准备更新!';
                    break;
                default:
                    return;
            }
            console.log("hcc>>checkUpdateCallback: ", panel_info_string)
            this._assetsManager.setEventCallback(null);
            this._updating = false;
            callback(eventCode == jsb.EventAssetsManager.NEW_VERSION_FOUND);
        }

        this._assetsManager.setEventCallback(checkUpdateCallback.bind(this));
        this._assetsManager.checkUpdate();
        this._updating = true;
    }

    //开始更新
    hotUpdateStart():boolean {
        if (!this.checkPlatForm()) {
            return false;
        }

        if (!this._manifestUrl) {
            return false;
        }

        if (this._assetsManager && !this._updating) {
            this._assetsManager.setEventCallback(this.updateCallback.bind(this));
            if (this._assetsManager.getState() === jsb.AssetsManager.State.UNINITED) {
                let url = this._manifestUrl.nativeUrl;
                if (cc.loader.md5Pipe) {
                    url = cc.loader.md5Pipe.transformURL(url);
                }
                this._assetsManager.loadLocalManifest(url);
            }
            this._assetsManager.update();
            this._updating = true;
        }
        return true;
    }

    //资源对比回调
    assetsVerifyCallback(path: string, asset: any): boolean {
        let compressed = asset.compressed;
        let expectedMD5 = asset.md5;
        let relativePath = asset.path;
        let size = asset.size;
        let panel_info_string = "";
        if (compressed) {
            panel_info_string = "Verification passed : ", relativePath;
        }
        else {
            panel_info_string = "Verification passed : ", relativePath, ' (', expectedMD5, ')';
        }
        console.log("hcc>>assetsVerifyCallback:", panel_info_string);
        return true;
    }

    //版本对比回调
    versionCompareCallback(versionA: string, versionB: string) {
        console.log("hcc>>JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
        let vA = versionA.split('.');
        let vB = versionB.split('.');
        for (let i = 0; i < vA.length; ++i) {
            let a = parseInt(vA[i]);
            let b = parseInt(String(vB[i] || 0));
            if (a === b) {
                continue;
            }
            else {
                return a - b;
            }
        }
        if (vB.length > vA.length) {
            return -1;
        }
        else {
            return 0;
        }
    }

    //检测更新回调
    checkUpdateCallback (event:any) {
        console.log('hcc>>checkUpdateCallback,Code: ' + event.getEventCode());
        let panel_info_string = "";
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                panel_info_string = "No local manifest file found, hot update skipped.";
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                panel_info_string = "Fail to download manifest file, hot update skipped.";
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                panel_info_string = "Already up to date with the latest remote version.";
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                panel_info_string = 'New version found, please try to update.';
                break;
            default:
                return;
        }

        if (this._assetsManager){
            this._assetsManager.setEventCallback(null);
            this._updating = false;
        }
        console.log("hcc>>checkUpdateCallback: " , panel_info_string)
    }

    //热更新回调
    updateCallback(event:any) {
        if(!this._assetsManager){
            return;
        }
        console.log("hcc>>updateCallback, code: ", event.getEventCode());
        let needRestart:boolean     = false;
        let failed: boolean         = false;
        let panel_info_string:string = null;
        let update_percent = null;
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                panel_info_string = '本地没有manifest文件，更新失败!';
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                // console.log("hcc>> per11: ", event.getPercent(), event.getPercentByFile());
                // console.log("hcc>> per22: ", event.getDownloadedFiles(), event.getTotalFiles(), event.getDownloadedBytes(), event.getTotalBytes())
                update_percent      = Math.floor(event.getPercentByFile() * 100) / 100;
                let down_byte       = Math.floor(event.getDownloadedBytes() / 1024 / 1024 * 100) / 100;
                let total_byte      = Math.floor(event.getTotalBytes() / 1024 / 1024 * 100) / 100;
                panel_info_string   = "更新进度: " + down_byte + "M" + ' / ' + total_byte + "M"; 
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                panel_info_string = '下载manifest文件失败!';
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                panel_info_string = '已经更新到最新版本!';
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                panel_info_string = '更新成功! ' + event.getMessage();
                needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                panel_info_string = '更新失败! ' + event.getMessage();
                this._updating = false;
                this._canRetry = true;
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                panel_info_string = '资源更新失败! ' + event.getAssetId() + ', ' + event.getMessage();
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                panel_info_string = "资源解压失败! "  + event.getMessage();
                break;
            default:
                break;
        }

        if (this._updateCallback) {
            this._updateCallback.call(this, false, update_percent, panel_info_string);
        }

        console.log("hcc>>updateCallback: ", panel_info_string);
        if (failed) {
            this._assetsManager.setEventCallback(null);
            this._updating = false;
        }

        if (needRestart) {
            if (this._updateCallback) {
                this._updateCallback.call(this,true,update_percent, panel_info_string)
            }
            
            this._assetsManager.setEventCallback(null);
            // Prepend the manifest's search path
            let searchPaths = jsb.fileUtils.getSearchPaths();
            let localManifest = this._assetsManager.getLocalManifest();
            if(localManifest){
                let newPaths = localManifest.getSearchPaths();
                console.log("hcc>>newPaths:" , JSON.stringify(newPaths));
                Array.prototype.unshift.apply(searchPaths, newPaths);
            }
            cc.sys.localStorage.setItem(hotUpdateSearchPaths, JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);
            cc.audioEngine.stopAll();
            //PC上重启游戏会崩溃
            if(PlatForm.isAndroidNative() || PlatForm.isIOSNative()){
                cc.game.restart();
            }
        }
    }

    //加载本地manifest
    loadCustomManifest () {
        if (this._assetsManager && this._assetsManager.getState() === jsb.AssetsManager.State.UNINITED) {
            let storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + hotUpdatePath);
            let manifest = new jsb.Manifest(customManifestStr, storagePath);
            this._assetsManager.loadLocalManifest(manifest, storagePath);
        }
    }

    //下载失败时候，重新下载
    retry() {
        if (!this._updating && this._canRetry && this._assetsManager) {
            this._canRetry = false;
            this._assetsManager.downloadFailedAssets();
        }
    }

}

export default HotUpdateNew;
