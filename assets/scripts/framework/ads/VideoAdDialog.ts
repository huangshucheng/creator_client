import PlatForm from '../config/PlatForm';
import EventManager from '../manager/EventManager';
import UIDialog from '../uibase/UIDialog';
/**
 * VideoAdDialog
 * 功能：激励视频广告组件
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class VideoAdDialog extends UIDialog {
    static caches: any = {}; //{ adUnitId, {VideoAdDialog, playCount} }

    //是否自动加载
    playOnLoad: boolean = true;
    
    //激励视频广告ID
    adUnitId: string = '';
    
    //播放最大次数
    maxCount: number = 10;

    onLoad() {
        super.onLoad();
        if (!this.adUnitId) {
            console.log('视频广告ID不存在，直接通过');
            if (this.playOnLoad) {
                this.simulationPlayVideoAd(10);
            }
            return;
        }

        if (PlatForm.isWeChatGame()) {
            this.init();
        } else if (this.playOnLoad) {
            this.simulationPlayVideoAd(10);
        }
    }

    /**
     * 初始化激励视频广告
     */
    init() {
        if (!PlatForm.isWeChatGame()){
            return;
        }
        let item = VideoAdDialog.caches[this.adUnitId];
        if (item) {
            console.log('视频广告已经创建');
            return;
        } else {
            item = { playCount: 0 };
            VideoAdDialog.caches[this.adUnitId] = item;
        }

        item.rewardedVideoAd = wx.createRewardedVideoAd({
            adUnitId: this.adUnitId
        });

        item.rewardedVideoAd.onLoad(() => {
            console.log('广告加载成功');
            //加载播放
            if (this.playOnLoad) {
                this.playOnLoad = false;
                this.play();
            }
        });

        item.rewardedVideoAd.onError(error => {
            console.log('广告加载失败：', error);
            item.rewardedVideoAd.load();
        });
    }

    /**
     * 播放广告
     */
    play() {
        if (!PlatForm.isWeChatGame()) {
            this.simulationPlayVideoAd();
            return;
        }

        let item = VideoAdDialog.caches[this.adUnitId];
        if (!item) {
            console.log(`广告${this.adUnitId}不存`);
            return;
        }

        if (item.playCount >= this.maxCount) {
            console.log(`广告${this.adUnitId}，到达放最大次数，退出播放`);
            return;
        }

        item.rewardedVideoAd.show();

        let callback = (res) => {
            item.rewardedVideoAd.offClose(callback);
            if (res && res.isEnded || res === undefined) {
                item.playCount++;
                // cc.Component.EventHandler.emitEvents(this.events, res);
                console.log("hcc>>play>>res: ", res);
            }
        }
        item.rewardedVideoAd.onClose(callback);
    }

    /**
     * 模拟播放视频广告，可以删除
     * @param second 模拟时间
     */
    simulationPlayVideoAd(second: number = 10) {
        
    }
}
