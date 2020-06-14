export default class Http {
    private static readonly instance: Http = new Http();

    private constructor() {

    }

    public static getInstance() {
        return Http.instance;
    }

    get(url: string): Promise<object> {
        return new Promise(res => {
            try {
                let xhr = new XMLHttpRequest()
                xhr.responseType = "json"
                xhr.open("GET", url, true)
                // xhr.setRequestHeader("Content-Type", "application/json")
                // xhr.setRequestHeader("withCredentials", "true")
                if (cc.sys.isNative) {
                    xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
                }

                xhr.onerror = () => { throw new Error("xhr-on-error") }
                xhr.ontimeout = () => { throw new Error("xhr-on-timeout") }
                xhr.onreadystatechange = () => {
                    if (xhr.readyState != 4) { return }
                    if (xhr.status >= 200 && xhr.status < 400) {
                        res(xhr.response)
                    } else {
                        throw new Error("xhr-status-not-200-400")
                    }
                }
                xhr.send()
            } catch (error) {
                console.error(error)
                res(null)
            }
        })
    }

    post(url: string, body: object): Promise<object> {
        return new Promise(res => {
            try {
                let xhr = new XMLHttpRequest();
                xhr.responseType = "json"
                xhr.open("POST", url, true)
                if (cc.sys.isNative) {
                    xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
                }
                // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                xhr.onerror = () => { throw new Error("xhr-on-error") }
                xhr.ontimeout = () => { throw new Error("xhr-on-timeout") }
                xhr.onreadystatechange = () => {
                    if (xhr.readyState != 4) { return }
                    if (xhr.status >= 200 && xhr.status < 400) {
                        res(xhr.response)
                    } else {
                        throw new Error("xhr-status-not-200-400");
                    }
                }
                xhr.send(this.getRequestParameters(body))
            } catch (error) {
                console.error(error)
                res(null)
            }
        })
    }

    getRequestParameters(params: Object): string {
        var pars: string = "",
            name: any
        for (name in params) {
            pars += `${name}=${params[name]}&`
        }
        return pars.substr(0, pars.length - 1)
    }

    download(url:string, callback?:any) {
        return new Promise(res => {
            try {
                let xhr = new XMLHttpRequest();
                xhr.timeout = 5000;
                xhr.responseType = "arraybuffer";
                xhr.open("GET", url, true);
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
                        res(ints);
                    }
                    else {
                        throw new Error(xhr.readyState + ":" + xhr.status);
                    }
                };
                xhr.send();
            } catch (error) {
                console.error(error);
                res(null);
            }
        });

    }
}