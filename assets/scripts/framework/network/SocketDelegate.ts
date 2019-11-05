import { WSocket, ISocket, SocketState } from './Socket';

export interface ISocketDelegate {
    on_socket_open();
    on_socket_message(data:string | ArrayBuffer);
    on_socket_error(errMsg:any);
    on_socket_closed(msg:any);
}

export class SocketDelegate implements ISocketDelegate {
    private _socket: ISocket;

    ///////////////////////////////////
    on_socket_open(){

    }

    on_socket_message(data:string | ArrayBuffer){
        //TODO  decode data
    }

    on_socket_error(errMsg:any){

    }

    on_socket_closed(msg:any){
        if (this._socket) {
            this._socket.close();
        }
        this._socket = null;
    }

    ///////////////////////////////////

    connect(url: string) {
        console.log("socket connecting address: " + url)
        this._socket = new WSocket(url, this);
        this._socket.connect();
    }

    close_connect() {
        if (this._socket) {
            this._socket.close();
        }
    }

    send_msg(stype:number, ctype:number, msg:any){
        if(!this._socket || this._socket.get_state() != SocketState.OPEN){
            return
        }
        //TODO pack buff
        this._socket.send(msg)
    }
}