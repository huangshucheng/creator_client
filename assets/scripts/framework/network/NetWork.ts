import { SocketDelegate, ISocketDelegate } from './SocketDelegate';
import { SocketState } from './Socket';
import AppConfig from '../config/AppConfig';

class NetWork {
    public static readonly instance: NetWork = new NetWork();
    private _socketDelegate: SocketDelegate = null;
    private _url: string = null;

    constructor(){
        if(AppConfig.IS_LOCAL_DEBUG){
            this._url = "ws://" + AppConfig.LOCAL_IP + ":" + AppConfig.REMOTE_PORT + "/ws"
        }else{
            this._url = "wss://" + AppConfig.REMOTE_IP + ":" + AppConfig.REMOTE_PORT + "/wss"
        }
        this._socketDelegate = new SocketDelegate()
    }
    
    public static getInstance(){
        return NetWork.instance;
    }

    connect(){
        if (!this._url || !this._socketDelegate){
            return
        }
        this._socketDelegate.connect(this._url);
    }

    reconnect(){
        if (!this._url || !this._socketDelegate){
            return;
        }
        let state = this._socketDelegate.get_socket_state()
        if(state == SocketState.OPEN || state == SocketState.CONNECTING){
            cc.warn("socket is opend or connecting")
            return
        }
        this._socketDelegate.connect(this._url);
    }
    
    close() {
        if (this._socketDelegate != null) {
            this._socketDelegate.close_connect();
        }
    }

    send_msg(stype:number, ctype:number, body?:any){
        if (this._socketDelegate != null) {
            this._socketDelegate.send_msg(stype, ctype, body);
        }
    }
}

export default NetWork;