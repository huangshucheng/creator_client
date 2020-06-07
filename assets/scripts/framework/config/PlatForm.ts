export default class PlatForm {
    constructor() {
    }

    static getPlatForm():string{
        return cc.sys.os;
    }

    static printPlatForm(){
        console.log("platform:" + PlatForm.getPlatForm())
    }
    //是否win32
    static isWin32(){
        return cc.sys.os == cc.sys.OS_WINDOWS;
    }
    //是否安卓
    static isAndroid():boolean{
        return cc.sys.os == cc.sys.OS_ANDROID;
    }
    //是否IOS
    static isIOS():boolean{
        return cc.sys.os == cc.sys.OS_IOS;
    }
    //是否原生环境
    static isNative():boolean{
        return cc.sys.isNative
    }
    //是否安卓原生环境
    static isAndroidNative():boolean{
        return PlatForm.isNative() && PlatForm.isAndroid();
    }
    //是否IOS原生环境
    static isIOSNative(){
        return PlatForm.isNative() && PlatForm.isIOS();
    }
    //是安卓微信小游戏
    static isAndroidWeChatGame(){
        return (PlatForm.isNative() == false) && PlatForm.isAndroid() && PlatForm.isWeChatGame();
    }
    //是IOS微信小游戏
    static isIOSWeChatGame(){
        return (PlatForm.isNative() == false) && PlatForm.isIOS() && PlatForm.isWeChatGame();
    }
    //是否微信小游戏
    static isWeChatGame(){
        if(cc.sys.platform == cc.sys.WECHAT_GAME){
            return true;
        }
        return false;
    }

    // 获得当前域名
    static getCurDomain() {
        return `${window.location.protocol}//${window.location.hostname}`
    }
}