import RichDebugMainLayer from './RichDebugMainLayer';
import RichLogData from './RichLogData';
import PlatForm from '../../config/PlatForm';

export default class RichDebug {
    static UPDATE_DEBUG_INFO_KEY = "add_debug_info";

    static async show_debug(){
        RichDebugMainLayer.show_layer();
    }

    static hide_debug(){
        RichDebugMainLayer.hide_layer();
    }

    static get_log_data(){
        return RichLogData.getInstance().get_log();
    }

    static clear_log_data(){
        RichLogData.getInstance().clear_log();
        cc.game.emit(RichDebug.UPDATE_DEBUG_INFO_KEY);
    }

    static push_log(data:any) {
        RichLogData.getInstance().push_log(data);
        cc.game.emit(RichDebug.UPDATE_DEBUG_INFO_KEY,data);
    }

    static get_debuginfo(){
        return RichLogData.getInstance().debugInfo;
    }

    //args: 数组，内容是字符串
    static log(type:string, args:any) {
        if (typeof (args) != "object"){
            return
        }
        switch (type) {
            case "warn":
                RichLogData.getInstance().debugInfo.warns++;
                break;
            case "error":
                RichLogData.getInstance().debugInfo.errors++;
                break;
        }

        // let timestr = new Date().toLocaleTimeString("chinese", { hour12: false })
        // args.unshift(timestr + ": "); //前面增加时间显示
        let data = { type: type, value: args.join("") };
        RichDebug.push_log(data);
    }
}

if (!CC_EDITOR) {
    if (typeof console != "undefined" && console) {
        let _console = {
            log: console.log,
            warn: console.warn,
            debug: console.debug,
            error: console.error,
            info: console.info,
        };
        console.info = function (...args) {
            // 做自己的处理
            RichDebug.log("log", args);
            // 调用原方法输出
            _console.info.apply(this, Array.prototype.slice.call(arguments, 0));
        };
        console.log = function (...args) {
            RichDebug.log("log", args);
            _console.log.apply(this, Array.prototype.slice.call(arguments, 0));
        };
        console.warn = function (...args) {
            RichDebug.log("warn", args);
            _console.warn.apply(this, Array.prototype.slice.call(arguments, 0));
        };
        console.debug = function (...args) {
            RichDebug.log("debug", args);
            _console.debug.apply(this, Array.prototype.slice.call(arguments, 0));
        };
        console.error = function (...args) {
            RichDebug.log("error", args);
            _console.error.apply(this, Array.prototype.slice.call(arguments, 0));
        };
    }

    //cc.log不做处理
    /*
    let _cc = {
        log: cc.log,
        warn: cc.warn,
        error: cc.error,
    };

    cc.log = function (...args) {
        // 做自己的处理
        RichDebug.log("log", args);
        // 调用原方法输出
        _cc.log.apply(this, Array.prototype.slice.call(arguments, 0));
    };
    cc.warn = function (...args) {
        RichDebug.log("warn", args);
        // 调用原方法输出
        _cc.warn.apply(this, Array.prototype.slice.call(arguments, 0));
    };
    cc.error = function (...args) {
        RichDebug.log("error", args);
        // 调用原方法输出
        _cc.error.apply(this, Array.prototype.slice.call(arguments, 0));
    };
    */

    if(PlatForm.isWeChatGame()){//微信小游戏
        wx.onError(function(error:any){
            try {
                let errStr = JSON.stringify(error) || "";
                RichDebug.log("error", ["【error:】" + errStr]);
            } catch (error) {
            }
        })
    }else if(PlatForm.isNative()){ //原生平台
        window.__errorHandler = function (file: string, line: string, message: string, stack: string) {
            // cc.log("file:", file);
            // cc.log("line:", line);
            // cc.log("message:", message);
            // cc.log("stack:", stack , typeof(stack));
            RichDebug.log("error", ["【errorMessage:】" + message]);
            RichDebug.log("error", ["【file:】" + file]);
            RichDebug.log("error", ["【line:】" + line]);
            RichDebug.log("error", ["【stack:】" + stack]);
            console.error("【error:】", message, stack);
        };
    }else{//浏览器或者其他平台
        window.onerror = function (errorMessage: string, file: string, line: number, colon: number, stack_obj: any) {
            // cc.log("errorMessage:", errorMessage);
            // cc.log("file:", file);
            // cc.log("line:", line);
            // cc.log("colon:", colon);
            // cc.log("stack:", stack_obj, typeof (stack_obj));
            RichDebug.log("error", ["【errorMessage:】" + errorMessage]);
            RichDebug.log("error", ["【file:】" + file]);
            RichDebug.log("error", ["【line:】" + line]);
            RichDebug.log("error", ["【stack:】" + stack_obj.stack || ""]);
            console.error("【error:】", errorMessage, stack_obj.stack);
        };
    }
}