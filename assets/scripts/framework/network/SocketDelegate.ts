import { WSocket, ISocket, SocketState } from './Socket';
import ProtoTools from './ProtoTools';
import ProtoManater from './ProtoManager';

import Log from '../utils/Log';

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
        Log.info("hcc>> on_socket_open")
        let body = {
            uname: "hccfundd",
            upwd: "111222",
        }
         let en_cmd = ProtoManater.encode_cmd(1,1,2,body)
         Log.info('en_cmd: ')
         Log.info(en_cmd)
         this.send_msg(en_cmd)
    }

    on_socket_message(data:string | ArrayBuffer){
        //TODO  decode data
        let decode_cmd = ProtoManater.decode_cmd(2,data)
        console.log("decode_cmd: " , JSON.stringify(decode_cmd))
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

    send_msg(msg:any){
        if(!this._socket || this._socket.get_state() != SocketState.OPEN){
            return
        }
        //TODO pack buff
        this._socket.send(msg)
    }
}