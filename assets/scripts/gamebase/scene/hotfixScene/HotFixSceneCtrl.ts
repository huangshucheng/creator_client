import UIController from '../../../framework/uibase/UIController';
import { ResourceManager } from '../../../framework/manager/ResourceManager';
import SceneManager from '../../../framework/manager/SceneManager';
import LoginScene from '../loginScene/LoginScene';
import HotUpdateNew from '../../../framework/hotfix/HotUpdateNew';
import PlatForm from '../../../framework/config/PlatForm';
import DialogManager from '../../../framework/manager/DialogManager';
import NetWork from '../../../framework/network/NetWork';
import CommonDialog from '../../dialog/CommonDialog';

const {ccclass, property} = cc._decorator;

@ccclass
export default class HotFixSceneCtrl extends UIController {

    _progressbar: cc.ProgressBar = null;

    // _urlArray: string[] = [ 
    //     "ui_prefabs/login/",
    //     "ui_prefabs/lobby/",
    //     "ui_prefabs/hotfix/",
    //     "ui_prefabs/games/",
    //     "ui_prefabs/dialog/",
    //     "textures/games/",
    //     "textures/lobby/",
    //     "textures/dialog/",
    //     "textures/shareimg/",
    //     "mainfest/",
    // ]

    _urlArray: string[] = [
        "ui_prefabs/",
        "textures/",
        "sounds/",
        "mainfest/",
    ]

    _tryTimes = 0;

    onLoad () {
        super.onLoad()
    }

    start () {
        this.setProgress(0);
        this.checkHotUpdate();
    }

    checkHotUpdate(){
        let hotupdateMgr = HotUpdateNew.getInstance();
        let _this = this;
        hotupdateMgr.checkUpdate(function (isNeedUpdate: boolean) {
            console.log("hcc>>enter_login_scene>>is need hotupdate: " , isNeedUpdate);
            if (isNeedUpdate) {
                hotupdateMgr.hotUpdateStart();
                hotupdateMgr.setUpdateCallback(function(isSuccess: boolean, percent?:number, tipString?:string) {
                    console.log("hcc>>hotupdate: isSuccess: " , isSuccess , "  ,percent: " , percent, "  ,tipstring: " , tipString);
                    if (percent){
                        _this.setProgress(percent);
                    }
                    if(tipString){
                        _this.set_string(_this.view["KW_TEXT_PROGRESS_TIP"], tipString)        
                    }
                    if (isSuccess) {
                        _this.set_string(_this.view["KW_TEXT_PROGRESS_TIP"], "热更新完成!")
                        if (PlatForm.isAndroidNative() || PlatForm.isIOSNative() || PlatForm.isWin32()) {
                            let resNode: cc.Node = DialogManager.getInstance().show_common_dialog();
                            if (resNode) {
                                let script: CommonDialog = resNode.getComponent("CommonDialog");
                                if (script) {
                                    script.set_content_text("更新完成,请重启!");
                                    script.set_btn_callback(
                                        function () { cc.game.restart(); },
                                        function () { cc.game.restart(); },
                                        function () { cc.game.restart(); },
                                    )
                                }
                            }
                        }
                    }
                })
            } else {
                _this.set_string(_this.view["KW_TEXT_PROGRESS_TIP"], "已是最新版本！");
                _this.setProgress(1.0);
                _this.startPreloadRes();
            }
        })
    }

    startPreloadRes(){
        let resArrayLen = this._urlArray.length;
        if (resArrayLen > 0){
            let firstResStr = this._urlArray[0];
            // console.log("hcc>>loadRes: ", firstResStr);
            this.preloadRes(firstResStr,function() {
                this._urlArray.shift();
                this.startPreloadRes();
            }.bind(this));
        }else{
            this.enter_login_scene();
        }
    }
    
    setProgress(progressNumber:any){
        let progressNode = this.view["KW_PROGRESS_BAR"]
        if (progressNode) {
            let progressbar = progressNode.getComponent(cc.ProgressBar);
            progressbar.progress = progressNumber;
        }
    }

    preloadRes(url: string, successfunc:Function) {
        let _this = this
        let progressNumber = 0;
        ResourceManager.getInstance().loadResDirAsyc(url, function (completedCount: number, totalCount: number, item: any) {
            if (totalCount != 0) {
                progressNumber = Math.floor((completedCount / totalCount) * 100);
                _this.setProgress(progressNumber / 100);
                let tipstr = "资源加载中,进度:" + completedCount + "/" + totalCount + "\n" + progressNumber + "%";
                _this.set_string(_this.view["KW_TEXT_PROGRESS_TIP"], tipstr)
                // console.log("loadRes:[" + url + "]" + completedCount + "/" + totalCount , "percent:" , progressNumber);
            }
        }, function (error: Error, resource: any[], urls: string[]) {
            if (error) {
                console.warn("hcc>>preloadRes error: ", error)
                if (_this._tryTimes < 10) {
                    _this._tryTimes++
                    _this.preloadRes(url,successfunc)
                } else {
                    successfunc.call(this); //试了10次加载失败，继续下一个
                    console.warn("hcc>>res load failed!")
                }
            } else {
                _this._tryTimes = 0;
                if(successfunc){
                    successfunc.call(this);
                }
            }
        })
    }

    enter_login_scene() {
        NetWork.getInstance().connect(); //连接网络
        SceneManager.getInstance().enter_scene_asyc(new LoginScene());
    }
}
