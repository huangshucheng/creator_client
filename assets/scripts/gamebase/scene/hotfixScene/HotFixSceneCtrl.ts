import UIController from '../../../framework/uibase/UIController';
import Log from '../../../framework/utils/Log';
import UIFunction from '../../../framework/common/UIFunciton';
import { ResourceManager } from '../../../framework/manager/ResourceManager';
import StringUtil from '../../../framework/utils/StringUtil';
import SceneManager from '../../../framework/manager/SceneManager';
import LoginScene from '../LoginScene/LoginScene';
import HotUpdateNew from '../../../framework/hotfix/HotUpdateNew';

const {ccclass, property} = cc._decorator;

@ccclass
export default class HotFixSceneCtrl extends UIController {

    _progressbar: cc.ProgressBar = null;

    _urlArray: string[] = [ 
                            "ui_prefabs/login/",
                            "ui_prefabs/lobby/",
                            "ui_prefabs/dialog/",
                            "ui_prefabs/hotfix/",
                            "ui_prefabs/games/",
                            "textures/lobby/",
                            "textures/dialog/",
                            "mainfest/",
                            "config/",
                          ]

    _completedFlag:any = []
    _tryTimes = 0;

    _resourceMap: number[] = []

    onLoad () {
        // cc.debug.setDisplayStats(false)
        super.onLoad()
        let progressNode = this.view["KW_PROGRESS_BAR"]
        if(progressNode){
            this._progressbar = progressNode.getComponent(cc.ProgressBar);
            this._progressbar.progress = 0;
        }

        for (let index = 0; index < this._urlArray.length; index++) {
            this.preloadRes(this._urlArray[index])
        }

    }

    start () {
        // this.enter_login_scene()
    }

    preloadRes(url: string) {
        let _this = this
        let progressNumber = 0;
        ResourceManager.getInstance().loadResDirAsyc(url, function (completedCount, totalCount, item) {
            if(totalCount != 0){
                progressNumber = completedCount / totalCount;
                _this._progressbar.progress = progressNumber
                let num = Math.max(1, progressNumber * 100)
                let pstr = `${StringUtil.format("%2d", num)}%`
                let tipstr  = "正在载入资源中... " + completedCount + "/" + totalCount
                // _this.set_string(_this.view["KW_TEXT_PERCENT"],pstr)
                _this.set_string(_this.view["KW_TEXT_PROGRESS_TIP"],tipstr)
            }
        }, function (error: Error, resource: any[], urls: string[]) {
            if (error) {
                console.warn(error)
                if (_this._tryTimes < 3) {
                    _this._tryTimes++
                    _this.preloadRes(url)
                } else {
                    console.warn("res load failed!")
                }
            } else {
                _this._completedFlag.push(true)
                if (_this._completedFlag.length >= _this._urlArray.length){
                    _this.set_string(_this.view["KW_TEXT_PROGRESS_TIP"],"资源加载完成!")
                    _this.enter_login_scene()
                }
            }
        })
    }

    enter_login_scene() {
        let hotupdateMgr = HotUpdateNew.getInstance();
        hotupdateMgr.checkUpdate(function(isNeedUpdate:boolean) {
            if(isNeedUpdate){
                cc.log("hcc>>enter_login_scene>>is need hotupdate............");
                hotupdateMgr.hotUpdateStart();
                hotupdateMgr.setUpdateSuccessCallback(function(isSuccess:boolean) {
                    if(isSuccess){
                        SceneManager.getInstance().enter_scene_asyc(new LoginScene())
                    }
                })
            }else{
                SceneManager.getInstance().enter_scene_asyc(new LoginScene())
            }
        })
    }
}
