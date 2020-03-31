import { SocketDelegate, ISocketDelegate } from './SocketDelegate';
import { SocketState } from './Socket';
import GameAppConfig from '../config/GameAppConfig';
import PlatForm from '../config/PlatForm';

class NetWork {
    public static readonly instance: NetWork = new NetWork();
    private _socketDelegate: SocketDelegate = null;
    private _url: string = null;

    constructor(){
        if(GameAppConfig.IS_LOCAL_DEBUG){
            this._url = "ws://" + GameAppConfig.LOCAL_IP + ":" + GameAppConfig.REMOTE_WECHAT_PORT + "/ws"
        }else{
            if(PlatForm.isWeChatGame()){
                this._url = "wss://" + GameAppConfig.REMOTE_IP + ":" + GameAppConfig.REMOTE_WECHAT_PORT + "/wss"
            }else{
                this._url = "ws://" + GameAppConfig.REMOTE_IP + ":" + GameAppConfig.NATIVE_PLATFORM_PORT + "/ws"
            }
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