import { WSocket, ISocket, SocketState } from './Socket';
import ProtoTools from './ProtoTools';
import ProtoManater from '../manager/ProtoManager';
import EventManager from '../manager/EventManager';
import { ProtoType } from '../config/AppConfig';
import Log from '../utils/Log';
import ProtoCmd from '../protocol/ProtoCmd';
import { Stype,StypeName } from '../protocol/Stype';
import EventDefine from '../config/EventDefine';

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
        EventManager.emit(EventDefine.EVENT_NET_CONNECTED);
    }

    on_socket_message(data:string | ArrayBuffer){
        let decode_cmd = ProtoManater.decode_cmd(ProtoType,data)
        if(!decode_cmd){
            return
        }

        let cmd_name = ProtoCmd.getCmdName(decode_cmd.stype,decode_cmd.ctype)
        if (cmd_name){
            EventManager.emit(cmd_name,decode_cmd.body)
        }

        Log.info("###########################>>>recvstart")
        if (decode_cmd.body){
            Log.info(StypeName[decode_cmd.stype],cmd_name,JSON.stringify(decode_cmd.body));
        }
        Log.info("###########################>>>recvend")
    }

    on_socket_error(errMsg:any){
        EventManager.emit(EventDefine.EVENT_NET_ERROR);
    }

    on_socket_closed(msg:any){
        if (this._socket) {
            this._socket.close();
        }
        this._socket = null;
        EventManager.emit(EventDefine.EVENT_NET_CLOSED);
    }

    ///////////////////////////////////
    connect(url: string) {
        Log.info("socket connecting address: " + url)
        this._socket = new WSocket(url, this);
        this._socket.connect();
    }

    close_connect() {
        if (this._socket) {
            this._socket.close();
        }
    }

    send_msg(stype:number, ctype:number, body?:any){
        if(!this._socket || this._socket.get_state() != SocketState.OPEN){
            return
        }
        let encode_msg = ProtoManater.encode_cmd(stype,ctype,ProtoType,body)
        this._socket.send(encode_msg)
    }
}