
class HttpUtil {
    //url前面要带http开头否则会报错
    static get(url:string, path:string, params?:any, callback?:Function) {
        let xhr: XMLHttpRequest = cc.loader.getXMLHttpRequest();
        xhr.timeout = 5000;
        let requestURL:string = url + path;
        if (params) {
            requestURL = requestURL + "?" + params;
        }
        xhr.open("GET", requestURL, true);
        if (cc.sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                console.log("http res(" + xhr.responseText.length + "):" + xhr.responseText);
                try {
                    let ret = xhr.responseText;
                    if (callback !== null) {
                        callback(null, ret);
                    }
                    return;
                } catch (e) {
                    callback(e, null);
                }
            }
            else {
                callback(xhr.readyState + ":" + xhr.status, null);
            }
        };
        xhr.send();
        return xhr;
    }

    static post(url:string, path:string, params?:any, body?:any, callback?:any) {
        let xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 5000;
        let requestURL = url + path;
        if (params) {
            requestURL = requestURL + "?" + params;
        }
        xhr.open("POST", requestURL, true);
        if (cc.sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }

        if (body) {
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Content-Length", body.length);
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                try {
                    let ret = xhr.responseText;
                    if (callback !== null) {
                        callback(null, ret);
                    }
                    return;
                } catch (e) {
                    callback(e, null);
                }
            }
            else {
                callback(xhr.readyState + ":" + xhr.status, null);
            }
        };
        if (body) {
            xhr.send(body);
        }
        return xhr;
    }

    static download(url:string, path:string, params?:any, callback?:any) {
        let xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 5000;
        let requestURL = url + path;
        if (params) {
            requestURL = requestURL + "?" + params;
        }

        xhr.responseType = "arraybuffer";
        xhr.open("GET", requestURL, true);
        if (cc.sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                let buffer = xhr.response;
                let dataview = new DataView(buffer);
                let ints = new Uint8Array(buffer.byteLength);
                for (let i = 0; i < ints.length; i++) {
                    ints[i] = dataview.getUint8(i);
                }
                callback(null, ints);
            }
            else {
                callback(xhr.readyState + ":" + xhr.status, null);
            }
        };
        xhr.send();
        return xhr;
    }
}

export default HttpUtil;


