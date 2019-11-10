export default class StringUtil {
    
    static random_string(len: number): string{
        var $chars: string = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; 
        var maxPos: number = $chars.length;
    　　var str: string = '';
    　　for (let i = 0; i < len; i++) {
    　　　　str += $chars.charAt(Math.floor(Math.random() * maxPos));
    　　}
    　　return str;
    }
    
    static random_int_str(len: number): string {
        var $chars: string = '0123456789'; 
        var maxPos: number = $chars.length;
    　　var str: string = '';
    　　for (let i = 0; i < len; i++) {
    　　　　str += $chars.charAt(Math.floor(Math.random() * maxPos));
    　　}
    　　return str;
    }
    
    // 随机的生成[begin, end] 范围内的数据
    static random_int(begin: number, end: number): number {
        var num: number = begin + Math.random() * (end - begin + 1);
        num = Math.floor(num);
        if (num > end) {
            num = end;
        }
        return num;
    }

     // buf协议，写入字符串的字节数，String扩充一个接口
     static utf8_byte_len(str:string) {
        let totalLength = 0;
        for (let i = 0; i < str.length; i++) {
            let charCode = str.charCodeAt(i);
            if (charCode < 0x007f) {
                totalLength = totalLength + 1;
            } 
            else if ((0x0080 <= charCode) && (charCode <= 0x07ff)) {
                totalLength += 2;
            } 
            else if ((0x0800 <= charCode) && (charCode <= 0xffff)) {
                totalLength += 3;
            }
        }
        return totalLength; 
    }

    static str_repeat(i, m) {
        for (var o = []; m > 0; o[--m] = i);
        return o.join('');
    }

    //格式字符串 let str = g.stringFunction.format("%2d", num)
   static format(...rest: any[]): string {
        let i = 0, a, f = arguments[i++], o = [], m, p, c, x, s = '';
        while (f) {
            if (m = /^[^\x25]+/.exec(f)) {
                o.push(m[0]);
            }
            else if (m = /^\x25{2}/.exec(f)) {
                o.push('%');
            }
            else if (m = /^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(f)) {
                if (((a = arguments[m[1] || i++]) == null) || (a == undefined)) {
                    throw ('Too few arguments.');
                }
                if (/[^s]/.test(m[7]) && (typeof (a) != 'number')) {
                    throw ('Expecting number but found ' + typeof (a));
                }
                switch (m[7]) {
                    case 'b': a = a.toString(2); break;
                    case 'c': a = String.fromCharCode(a); break;
                    case 'd': a = parseInt(a); break;
                    case 'e': a = m[6] ? a.toExponential(m[6]) : a.toExponential(); break;
                    case 'f': a = m[6] ? parseFloat(a).toFixed(m[6]) : parseFloat(a); break;
                    case 'o': a = a.toString(8); break;
                    case 's': a = ((a = String(a)) && m[6] ? a.substring(0, m[6]) : a); break;
                    case 'u': a = Math.abs(a); break;
                    case 'x': a = a.toString(16); break;
                    case 'X': a = a.toString(16).toUpperCase(); break;
                }
                a = (/[def]/.test(m[7]) && m[2] && a >= 0 ? '+' + a : a);
                c = m[3] ? m[3] == '0' ? '0' : m[3].charAt(1) : ' ';
                x = m[5] - String(a).length - s.length;
                p = m[5] ? this.str_repeat(c, x) : '';
                o.push(s + (m[4] ? a + p : p + a));
            }
            else {
                throw ('unkown error ?!');
            }
            f = f.substring(m[0].length);
        }
        return o.join('');
    }

    //查找字符串中结尾数字
   public getNumberSuffixByString(str: string): number {
        let len = str.length;
        let lastNumber = -1;
        for (let i = 1; i < len; ++i) {
            let tempNumber = Number(str.substr(-i));
            if (tempNumber) {
                lastNumber = tempNumber
            } else {
                return lastNumber
            }
        }
        return lastNumber;
    }

    public uint8ArrayToString(uint8Array): string {
        var dataString = "";
        for (var i = 0; i < uint8Array.length; i++) {
            dataString += String.fromCharCode(uint8Array[i]);
        }
        return dataString
    }

    public stringToUint8Array(str): Uint8Array {
        var arr = [];
        for (var i = 0, j = str.length; i < j; ++i) {
            arr.push(str.charCodeAt(i));
        }
        var tmpUint8Array = new Uint8Array(arr);
        return tmpUint8Array
    }
}