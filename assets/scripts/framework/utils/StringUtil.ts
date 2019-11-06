class StringUtil {
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
}

export default StringUtil;