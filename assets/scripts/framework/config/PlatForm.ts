export default class PlatForm {
    constructor() {
    
    }

    static getPlatForm(){

    }

    static printPlatForm(){
        cc.log("platform: " + cc.sys.os)

        if(cc.sys.os == cc.sys.OS_ANDROID){

        } 

        if(cc.sys.os == cc.sys.OS_IOS){

        }

        if(cc.sys.isNative){

        }

        if(cc.sys.isBrowser){

        }

        if(cc.sys.WECHAT_GAME){

        }
    }
}