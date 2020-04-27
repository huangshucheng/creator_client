export default class Log {
    private static _logLevel = 0;  // 0:debug, 1:info

    private static _colors = {
        green: "color:#00CD00;",
        blue: "color:#0066FF;",
        red: "color:#FF0000;",
        black: "color:#000000;",
    }

    static info(message?: any, ...optionalParams: any[]){
        if(this._logLevel > 1){
            return
        }
        console.info(Log._stack(2), Log._getDateString(),message, ...optionalParams);
    }

    static debug(message?: any, ...optionalParams: any[]){
        if (this._logLevel > 0) {
            return;
        }
        console.debug(Log._getDateString(),message, ...optionalParams);
    }

    static error(message?: any, ...optionalParams: any[]){
        console.error(Log._getDateString(),message, ...optionalParams)
    }

    static warn(message?: any, ...optionalParams: any[]){
        console.warn(Log._getDateString(), message , optionalParams)
    }

    /*
    //green
    static info(msg?: string) {
        if (this._logLevel > 1) {
            return;
        }
        var backLog = console.log || console.log || window["log"];
        backLog.call(this, "%c%s%s " + cc.js.formatStr.apply(cc, arguments), Log._colors.black, Log._getDateString(), Log._stack(2));
    };
    //blue
    static debug(msg?: string) {
        if (this._logLevel > 0) {
            return;
        }
        var backLog = console.log || console.log || window["log"];
        backLog.call(this, "%c%s%s " + cc.js.formatStr.apply(cc, arguments), Log._colors.blue, Log._getDateString(), Log._stack(2));
    };
    //red
    static error(msg?: string) {
        var backLog = console.log || console.log || window["log"];
        backLog.call(this, "%c%s%s " + cc.js.formatStr.apply(cc, arguments), Log._colors.red, Log._getDateString(), Log._stack(2));
    };
    */

    private static _getDateString() {
        var d = new Date();
        var str = d.getHours() + "";
        var timeStr = "";
        timeStr += (str.length == 1 ? ("0" + str) : str) + ":";
        str = d.getMinutes() + "";
        timeStr += (str.length == 1 ? ("0" + str) : str) + ":";
        str = d.getSeconds() + "";
        timeStr += (str.length == 1 ? ("0" + str) : str) + ".";
        str = d.getMilliseconds() + "";
        if (str.length == 1) str = "00" + str;
        if (str.length == 2) str = "0" + str;
        timeStr += str;
        timeStr = "[" + timeStr + "]";
        return timeStr;
    };

    public static _stack(index) {
        var e = new Error();
        var lines = e.stack.split("");
        lines.shift();
        var result = [];
        lines.forEach(function (line) {
            line = line.substring(7);
            var lineBreak = line.split(" ");
            if (lineBreak.length < 2) {
                result.push(lineBreak[0]);
            } else {
                result.push({ [lineBreak[0]]: lineBreak[1] });
            }
        });
        var list = [];
        if (index <= result.length - 1) {
            for (var a in result[index]) {
                list.push(a);
            }
        }
        if (list.length > 0) {
            var splitList = list[0].split(".");
            if (splitList.length >= 2) {
                return ("[" + splitList[0] + ".js->" + splitList[1] + "]");
            }
        }
        return "";
    }
}