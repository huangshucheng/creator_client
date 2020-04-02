export default class PlatForm {
    constructor() {
    }

    static getPlatForm():string{
        return cc.sys.os;
    }

    static printPlatForm(){
        cc.log("platform:" + PlatForm.getPlatForm())
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

    //获取本地ip,浏览器有用，模拟器无效
    //  onNewIp - your listener function for new IPs
    static getUserIP(onNewIP:Function) {
        let myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        if(!myPeerConnection){
            return;
        }

        let pc = new myPeerConnection({
           iceServers: []
       });

       let noop = function() {};
       let localIPs = {};
       let ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
    
        function iterateIP(ip:any) {
           if (!localIPs[ip]){
               if(onNewIP){
                    onNewIP(ip);
               }
            } 
           localIPs[ip] = true;
        }
    
        //create a bogus data channel
       pc.createDataChannel("");
    
       // create offer and set local description
       pc.createOffer().then(function(sdp:any) {
           sdp.sdp.split('\n').forEach(function(line:any) {
               if (line.indexOf('candidate') < 0){
                return;
               } 
                line.match(ipRegex).forEach(iterateIP);
           });
           pc.setLocalDescription(sdp, noop, noop);
       }).catch(function(reason:any) {
            console.log(reason);
       });
    
       //sten for candidate events
       pc.onicecandidate = function(ice:any) {
           if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
           ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
       };
    }

}