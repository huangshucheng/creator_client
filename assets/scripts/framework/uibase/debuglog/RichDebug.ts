import RichDebugMainLayer from './RichDebugMainLayer';
import RichLogData from './RichLogData';

export default class RichDebug {
    static UPDATE_DEBUG_INFO_KEY = "add_debug_info";

    static debugInfo = {
        warns: 0,//警告
        errors: 0,//错误
    };

    static async show_debug(){
        RichDebugMainLayer.show_layer();
    }

    static hide_debug(){
        RichDebugMainLayer.hide_layer();
    }

    static get_log_data(){
        return RichLogData.getInstance().get_log();
    }

    static push_log(data:any) {
        RichLogData.getInstance().push_log(data);
        cc.game.emit(RichDebug.UPDATE_DEBUG_INFO_KEY,data);
    }

    static log(type:string, args:any) {
        switch (type) {
            case "warn":
                RichDebug.debugInfo.warns++;
                break;
            case "error":
                RichDebug.debugInfo.errors++;
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
        var _console = {
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
            // 做自己的处理
            RichDebug.log("log", args);
            // 调用原方法输出
            _console.log.apply(this, Array.prototype.slice.call(arguments, 0));
        };
        console.warn = function (...args) {
            RichDebug.log("warn", args);
            // 调用原方法输出
            _console.warn.apply(this, Array.prototype.slice.call(arguments, 0));
        };
        console.debug = function (...args) {
            // 做自己的处理
            RichDebug.log("debug", args);
            // 调用原方法输出
            _console.debug.apply(this, Array.prototype.slice.call(arguments, 0));
        };
        console.error = function (...args) {
            RichDebug.log("error", args);
            // 调用原方法输出
            _console.error.apply(this, Array.prototype.slice.call(arguments, 0));
        };
    }
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

    window.onerror = function (msg, url, line, col, error) {
        var stacks = [];
        if (error && error.stack) {
            //如果浏览器有堆栈信息，直接使用
            stacks.push(error.stack.toString());
        }
        RichDebug.log("error", stacks);
        // return true;   //错误不会console浏览器上,如需要，可将这样注释
    };
    */
}