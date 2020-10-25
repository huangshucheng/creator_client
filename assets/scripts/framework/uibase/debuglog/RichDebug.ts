import UIFunction from '../../common/UIFunciton';

export default class RichDebug {
    static logs:Array<any> = [];

    static debugInfo = {
        warns: 0,//警告
        errors: 0,//错误
    };

    static async show_debug(){
        if (cc.director.getScene().getChildByName("debug")) {
            console.log("已经存在一个debug-main")
            return
        }
        let node = await UIFunction.getInstance().add_prefab_to_scene_async("ui_prefabs/debug/RichDebugMain", "RichDebugControl");
        if(node){
            node.name = "debug";
            node.zIndex = 499
            node.parent = null
            cc.game.addPersistRootNode(node)
            // node.x = (-cc.winSize.width / 2) + node.width;
            // node.y = (-cc.winSize.height / 2) + node.height;
            node.x = node.width / 2;
            node.y = node.height / 2;
        }
    }

    static hide_debug(){
        let node = cc.director.getScene().getChildByName("debug");
        if (node) {
            node.destroy();
        }
    }

    static pushLog(data:any) {
        RichDebug.logs.push(data);
        cc.game.emit("add-debug-info", data);
        if (RichDebug.logs.length > 1000) {//最大保存1000条信息
            RichDebug.logs.shift();
        }
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
        args.unshift(new Date().toLocaleTimeString());
        let data = { type: type, value: args.join(" ") };
        RichDebug.pushLog(data);
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
}