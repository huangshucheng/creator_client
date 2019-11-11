import UIController from '../../../framework/uibase/UIController';
import Log from '../../../framework/utils/Log';
import UIFunction from '../../../framework/common/UIFunciton';
import { ResourceManager } from '../../../framework/manager/ResourceManager';
import StringUtil from '../../../framework/utils/StringUtil';
import SceneManager from '../../../framework/manager/SceneManager';
import LoginScene from '../LoginScene/LoginScene';

const {ccclass, property} = cc._decorator;

@ccclass
export default class HotFixSceneCtrl extends UIController {

    _progressbar: cc.ProgressBar = null;

    _urlArray: string[] = [ 
                            "ui_prefabs/login", 
                            "ui_prefabs/lobby", 
                            "ui_prefabs/dialog",
                            "ui_prefabs/hotfix", 
                            "textures/lobby", 
                            "textures/dialog", 
                            "config/",
                          ]
    // _progressMap: Map<string, number> = new Map
    _completedFlag: boolean[] = []
    _tryTimes = 0;

    onLoad () {
        // cc.debug.setDisplayStats(false)
        super.onLoad()
        Log.info("HotFixSceneCtrl onLoad()")
        // Log.info("hcc>>hotfixScenen",this.view)

        this._progressbar = this.view["KW_PROGRESS_BAR"].getComponent(cc.ProgressBar)
        this._progressbar.progress = 0

        // for (let index = 0; index < this._urlArray.length; index++) {
        //     this._progressMap.set(this._urlArray[index], 0)
        // }
        // for (let index = 0; index < this._urlArray.length; index++) {
        //     this.preloadRes(this._urlArray[index])
        // }
        this.enter_login_scene()
    }

    start () {
        
    }

    preloadRes(url: string) {
        let self = this
        let progress = 0
        ResourceManager.getInstance().loadResDir(url, function (completedCount, totalCount, item) {
            progress = completedCount / totalCount;
            self._progressbar.progress = progress
            let num = Math.max(1, progress * 100)
            let pstr = `${StringUtil.format("%2d", num)}%`
            let tipstr  = "正在载入资源中... " + completedCount + "/" + totalCount
            self.set_visible(self.view["KW_TEXT_PERCENT"],true)
            self.set_string(self.view["KW_TEXT_PERCENT"],pstr)
            self.set_string(self.view["KW_TEXT_PROGRESS_TIP"],tipstr)
            // cc.log("percent: " , num , " ,total: " , totalCount)
        }, function (error: Error, resource: any[], urls: string[]) {
            if (error) {
                console.warn(error)
                if (self._tryTimes < 3) {
                    self._tryTimes++
                    self.preloadRes(url)
                } else {
                    self.set_visible(self.view["KW_TEXT_PERCENT"],false)
                    console.warn("res load failed!")
                }
            } else {
                self._completedFlag.push(true)
                if (self._completedFlag.length >= self._urlArray.length){
                    self.set_string(self.view["KW_TEXT_PROGRESS_TIP"],"资源加载完成!")
                    self.enter_login_scene()
                }
            }
        })
    }

    enter_login_scene() {
        let scene = new LoginScene();
        SceneManager.getInstance().enter_scene(scene)
    }
}
