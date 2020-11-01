import PlatForm from "../config/PlatForm";
import DialogManager from '../manager/DialogManager';

export abstract class SDKAdapter{
    /**
     * 调用Java静态方法(Android)
     * @param className 类全名
     * @param methodNmae 方法名
     * @param paramType Java类型签名 
     * int     -> I
     * float   -> F
     * boolean -> Z 
     * string  -> Ljava/lang/String;
     * @param params 参数
     */
    public callJavaStaticFunc(className: string, methodNmae: string, paramTypeSignatures: string, ...params) {
        if (cc.sys.isNative && cc.sys.platform == cc.sys.ANDROID) {
            return jsb.reflection.callStaticMethod(className, methodNmae, paramTypeSignatures, ...params);
        }
    }


    /**
     * 调用OC静态方法(IOS)
     * @param className 类全名
     * @param methodNmae 方法名
     * @param params 参数
     */
    public callOcStaticFunc(className: string, methodNmae: string, ...params) {
        if (cc.sys.isNative && cc.sys.platform == cc.sys.IPHONE) {
            return jsb.reflection.callStaticMethod(className, methodNmae, ...params);
        }
    }

    public static copyStringToClipboard(str: string, callback?:Function) {
        if (PlatForm.isWeChatGame()){
            wx.setClipboardData({
                data: str,
                succecc: function() { if(callback) callback(true);},
                fail: function() {if(callback) callback(false);},
            });
        }else if (PlatForm.isWebBrowser()) {
            var input = str;
            const el = document.createElement('textarea');
            el.value = input;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            el.style.fontSize = '12pt'; // Prevent zooming on iOS
    
            const selection = getSelection();
            var originalRange = null;
            if (selection.rangeCount > 0) {
                originalRange = selection.getRangeAt(0);
            }
            document.body.appendChild(el);
            el.select();
            el.selectionStart = 0;
            el.selectionEnd = input.length;
    
            var success = false;
            try {
                success = document.execCommand('copy');
            } catch (err) { }
            document.body.removeChild(el);
            if (originalRange) {
                selection.removeAllRanges();
                selection.addRange(originalRange);
            }
            if(callback){
                callback(success);
            }
        }else{
            if (callback) {
                callback(false);
            }
        }
    }
}