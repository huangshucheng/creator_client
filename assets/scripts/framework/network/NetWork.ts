import { SocketDelegate, ISocketDelegate } from './SocketDelegate';
import { AppConfig } from '../config/AppConfig';

class NetWork {
    private _socketDelegate: SocketDelegate = null;
    private _url: string = null;

    constructor(){
        // connect remote
        // this._url = "wss://" + AppConfig.remoteip + ":" + AppConfig.remoteport + "/wss"
        // connect lcoal
        this._url = "ws://" + AppConfig.localip + ":" + AppConfig.remoteport + "/ws"
    }

    connect(){
        if (this._socketDelegate != null) {
            this._socketDelegate.close_connect();
        }

        if (!this._url){
            return
        }

        this._socketDelegate = new SocketDelegate();
        this._socketDelegate.connect(this._url);
    }
    
    close() {
        if (this._socketDelegate != null) {
            this._socketDelegate.close_connect();
        }
        this._socketDelegate = null;
    }

    send_msg(stype:number, ctype:number, body?:any){
        if (this._socketDelegate != null) {
            this._socketDelegate.send_msg(stype, ctype, body);
        }
    }
}

export default NetWork;