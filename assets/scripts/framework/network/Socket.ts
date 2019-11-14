import { ISocketDelegate } from "./SocketDelegate";

export enum SocketState {
    CONNECTING = 1,
    OPEN,
    CLOSING,
    CLOSED
};

export interface ISocket {
    connect();
    send(data: string | ArrayBuffer);
    close();
    get_state();
}

export class WSocket implements ISocket {
    private _url: string = "";
    private _webSocket: WebSocket = null;
    private _delegate: ISocketDelegate =  null;

    constructor(url:string , delegate: ISocketDelegate){
        this._url = url;
        this._delegate = delegate;
    }

    connect(){
        let webSocket = this._webSocket = new WebSocket(this._url);
        webSocket.binaryType = 'arraybuffer';
        webSocket.onopen = (event) => {
            cc.log("WSocket websocket connect " + this._url + " success!!")
            this._delegate.on_socket_open();
        };
        webSocket.onmessage = (event) => {
            this._delegate.on_socket_message(event.data);
        };
        webSocket.onerror = (event) => {
            this._delegate.on_socket_error(null);
            cc.error("WSocket websocket connect " + this._url + " error")
        };
        webSocket.onclose = (event) => {
            this._delegate.on_socket_closed(event.reason);
            cc.error("WSocket websocket connect " + this._url + " closed")
        }
    }

    send(data: string | ArrayBuffer){
        if (this._webSocket){
            this._webSocket.send(data);
        }
    }

    close(){
        if (!this._webSocket) {
            return;
        }
        try {
            this._webSocket.close();
        } catch (err) {
            cc.error('error while closing webSocket ' , err.toString());
        }
        this._webSocket = null;
    }
    get_state(){
        if (this._webSocket) {
            switch (this._webSocket.readyState) {
                case WebSocket.OPEN:
                    return SocketState.OPEN;
                case WebSocket.CONNECTING:
                    return SocketState.CONNECTING;
                case WebSocket.CLOSING:
                    return SocketState.CLOSING;
                case WebSocket.CLOSED:
                    return SocketState.CLOSED;
            }
        }
        return SocketState.CLOSED;
    }
}
