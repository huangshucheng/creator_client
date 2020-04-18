import { ResourceManager } from "../manager/ResourceManager";

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

/**
 main.js 加上
(function () {
    if (typeof window.jsb === 'object') {
        var hotUpdateSearchPaths = localStorage.getItem('HotUpdateSearchPaths');
        if (hotUpdateSearchPaths) {
            console.log("hcc>>hotUpdateSearchPaths:" , hotUpdateSearchPaths)
            jsb.fileUtils.setSearchPaths(JSON.parse(hotUpdateSearchPaths));
        }
    }
})();
 */

let hotUpdatePath = "hotUpdateCache";
let localManifestPath = "manifest/project";

class HotUpdateNew{
    public static readonly instance: HotUpdateNew = new HotUpdateNew();

    _assetsManager:any      = null;
    _updating:boolean       = false;
    _canRetry:boolean       = false;
    _manifestUrl:cc.Asset    = null;
    _updateSuccessCallback:Function = null;

    constructor(){
        this.init();
    }

    public static getInstance() {
        return HotUpdateNew.instance;
    }

    init(){
        let _this = this;
        ResourceManager.getInstance().loadResAsyc(localManifestPath, cc.Asset, function (error: Error, resource: any) {
            if (!error) {
                _this._manifestUrl = resource;
                cc.log("hcc>>manifest: ", resource.nativeUrl);
            } else {
                cc.log("hcc>>manifest error: ", error);
            }
        })

        cc.log("hcc>>111111111111");
        if (!this.checkPlatForm()) {
            return;
        }

        cc.log("hcc>>222222");
        let storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + hotUpdatePath);
        cc.log('hcc>>Storage path for remote asset : ', storagePath);
        this._assetsManager = new jsb.AssetsManager('', storagePath, this.versionCompareCallback);
        this._assetsManager.setVerifyCallback(this.assetsVerifyCallback)
        cc.log("hcc>>setEventCallback: " , this._assetsManager.setEventCallback);

        if (cc.sys.os === cc.sys.OS_ANDROID) {
            // Some Android device may slow down the download process when concurrent tasks is too much.
            // The value may not be accurate, please do more test and find what's most suitable for your game.
            this._assetsManager.setMaxConcurrentTask(2);
        }
    }

    setUpdateSuccessCallback(callback:Function) {
        this._updateSuccessCallback = callback;
    }

    checkPlatForm(){
        if(!cc.sys.isNative){
            cc.warn("not native platform,can not hotupdate!");
            return false;
        }
        return true;
    }

    //
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
            panel_info_string = 'Checking or updating ...';
            callback(false);
            return;
        }

        if (this._assetsManager.getState() === jsb.AssetsManager.State.UNINITED) {
            let url = this._manifestUrl.nativeUrl;
            cc.log("hcc>>_manifestUrl.nativeUrl111: " , url);
            if (cc.loader.md5Pipe) {
                url = cc.loader.md5Pipe.transformURL(url);
            }
            cc.log("hcc>>_manifestUrl.nativeUrl222: ", url);
            this._assetsManager.loadLocalManifest(url);
        }

        if (!this._assetsManager.getLocalManifest() || !this._assetsManager.getLocalManifest().isLoaded()) {
            panel_info_string = 'Failed to load local manifest ...';
            callback(false);
            return;
        }

        cc.log("hcc>>checkUpdate: " , panel_info_string);

        let checkUpdateCallback = function(event:any) {
            cc.log('hcc>>checkUpdateCallback,Code: ' + event.getEventCode());
            let panel_info_string = "";
            let eventCode = event.getEventCode();
            switch (eventCode) {
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
            cc.log("hcc>>checkUpdateCallback: ", panel_info_string)
            this._assetsManager.setEventCallback(null);
            this._updating = false;
            callback(eventCode == jsb.EventAssetsManager.NEW_VERSION_FOUND);
        }

        this._assetsManager.setEventCallback(checkUpdateCallback.bind(this));
        this._assetsManager.checkUpdate();
        this._updating = true;
    }

    //
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

    //callback
    //
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

    //
    versionCompareCallback(versionA: string, versionB: string) {
        cc.log("hcc>>JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
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

    //
    checkUpdateCallback (event:any) {
        cc.log('hcc>>checkUpdateCallback,Code: ' + event.getEventCode());
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
        this._assetsManager.setEventCallback(null);
        this._updating = false;
        cc.log("hcc>>checkUpdateCallback: " , panel_info_string)
    }

    updateCallback(event:any) {
        cc.log("hcc>>updateCallback");
        let needRestart:boolean     = false;
        let failed: boolean         = false;
        let panel_info_string:string = "";
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                panel_info_string = 'No local manifest file found, hot update skipped.';
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                // this.panel.byteProgress.progress = event.getPercent();
                // this.panel.fileProgress.progress = event.getPercentByFile();
                // this.panel.fileLabel.string = event.getDownloadedFiles() + ' / ' + event.getTotalFiles();
                // this.panel.byteLabel.string = event.getDownloadedBytes() + ' / ' + event.getTotalBytes();

                let msg = event.getMessage();
                if (msg) {
                    panel_info_string = 'Updated file: ' + msg;
                    cc.log("hcc>>percent: ", event.getPercent()/100 + '% : ' + msg);
                }
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                panel_info_string = 'Fail to download manifest file, hot update skipped.';
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                panel_info_string = 'Already up to date with the latest remote version.';
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                panel_info_string = 'Update finished. ' + event.getMessage();
                needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                panel_info_string = 'Update failed. ' + event.getMessage();
                this._updating = false;
                this._canRetry = true;
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                panel_info_string = 'Asset update error: ' + event.getAssetId() + ', ' + event.getMessage();
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                panel_info_string = event.getMessage();
                break;
            default:
                break;
        }

        cc.log("hcc>>updateCallback: ", panel_info_string);
        if (failed) {
            this._assetsManager.setEventCallback(null);
            this._updating = false;
        }

        if (needRestart) {
            this._assetsManager.setEventCallback(null);
            // Prepend the manifest's search path
            let searchPaths = jsb.fileUtils.getSearchPaths();
            let localManifest = this._assetsManager.getLocalManifest();
            if(localManifest){
                let newPaths = localManifest.getSearchPaths();
                console.log("hcc>>newPaths:" , JSON.stringify(newPaths));
                Array.prototype.unshift.apply(searchPaths, newPaths);
            }
            // This value will be retrieved and appended to the default search path during game startup,
            // please refer to samples/js-tests/main.js for detailed usage.
            // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.
            cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);
            cc.audioEngine.stopAll();
            cc.game.restart();
            if(this._updateSuccessCallback){
                this._updateSuccessCallback.call(true)
            }
        }
    }

    loadCustomManifest () {
        if (this._assetsManager.getState() === jsb.AssetsManager.State.UNINITED) {
            let storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + hotUpdatePath);
            let manifest = new jsb.Manifest(customManifestStr, storagePath);
            this._assetsManager.loadLocalManifest(manifest, storagePath);
            console.log("hcc>>loadCustomManifest.....success!");
        }
    }

    retry() {
        if (!this._updating && this._canRetry) {
            this._canRetry = false;
            this._assetsManager.downloadFailedAssets();
        }
    }

}

export default HotUpdateNew;
