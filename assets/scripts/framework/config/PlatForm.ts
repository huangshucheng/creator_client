export default class PlatForm {
    constructor() {
    }

    static getPlatForm():string{
        return cc.sys.os;
    }

    static printPlatForm(){
        cc.log("platform:" + PlatForm.getPlatForm())
    }

    static isWin32(){
        return cc.sys.os == cc.sys.OS_WINDOWS;
    }

    static isAndroid():boolean{
        return cc.sys.os == cc.sys.OS_ANDROID;
    }

    static isIOS():boolean{
        return cc.sys.os == cc.sys.OS_IOS;
    }

    static isNative():boolean{
        return cc.sys.isNative
    }

    static isAndroidNative():boolean{
        return PlatForm.isNative() && PlatForm.isAndroid();
    }

    static isIOSNative(){
        return PlatForm.isNative() && PlatForm.isIOS();
    }

    static isAndroidWeChatGame(){
        return (PlatForm.isNative() == false) && PlatForm.isAndroid();
    }

    static isIOSWeChatGame(){
        return (PlatForm.isNative() == false) && PlatForm.isIOS();
    }

    static isWeChatGame(){
        return PlatForm.isAndroidWeChatGame() || PlatForm.isIOSWeChatGame();
    }

}