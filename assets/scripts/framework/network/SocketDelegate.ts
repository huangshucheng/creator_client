import { WSocket, ISocket, SocketState } from './Socket';
import ProtoTools from './ProtoTools';
import ProtoManater from '../manager/ProtoManager';
import EventManager from '../manager/EventManager';
import ProtoCmd from '../protocol/ProtoCmd';
import EventDefine from '../config/EventDefine';
import GameAppConfig from '../config/GameAppConfig';
import Stype from '../protocol/Stype';

export interface ISocketDelegate {
    on_socket_open(): void;
    on_socket_message(data: string | ArrayBuffer): void;
    on_socket_error(errMsg: any): void;
    on_socket_closed(msg: any): void;
    get_socket_state():number;
    add_protocol_delegate(obj: any, callback: Function):void;
    remove_protocol_delegate(obj: any, callBack: Function): void;
}

export interface callBackObj {
    obj: any;
    callBack: Function;
}

export class SocketDelegate implements ISocketDelegate {
    private _socket: ISocket;
    private _protocolCallBackList: Array<callBackObj>;

    ///////////////////////////////////
    constructor(){
        this._protocolCallBackList = [];
    }

    on_socket_open(){
        EventManager.emit(EventDefine.EVENT_NET_CONNECTED);
    }

    on_socket_message(data:string | ArrayBuffer){
        let decode_cmd = ProtoManater.decode_cmd(GameAppConfig.PROTO_TYPE,data)
        if(!decode_cmd){
            return
        }
        let cmd_name = ProtoCmd.getCmdName(decode_cmd.stype, decode_cmd.ctype)

        console.log("\n\n###########################>>>recvstart")
        if (cmd_name){
            console.log("Svr=", Stype.S_NAME[decode_cmd.stype], " ,XY_NAME=", cmd_name, " ,XY_ID=" + decode_cmd.ctype);
            let cmdbody = ""
            try {
                cmdbody = JSON.stringify(decode_cmd.body)    
            } catch (error) {
            }
            console.log(cmdbody)
        }
        console.log("###########################>>>recvend\n\n")

        this._protocolCallBackList.forEach(element => {
            if (element.callBack) {
                element.callBack.call(this, decode_cmd.stype, decode_cmd.ctype, decode_cmd.body);
            }
        });
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

    add_protocol_delegate(obj: any, callBack: Function): void{
        let cbs: callBackObj = {
            obj: obj,
            callBack: callBack,
        }
        this._protocolCallBackList.push(cbs);
        console.log("hcc>>add_protocol_delegate: len: ", this._protocolCallBackList.length);
    }

    remove_protocol_delegate(obj: any, callBack?: Function): void{
        if(callBack && callBack != undefined){
            this._protocolCallBackList.forEach(element => {
                if (element.obj === obj && element.callBack === callBack) {
                    var index = this._protocolCallBackList.indexOf(element);
                    if (index > -1) {
                        this._protocolCallBackList.splice(index, 1);
                        console.log("hcc>>remove_protocol_delegate111: len: " , this._protocolCallBackList.length);
                    }
                }
            });
        }else{
            this._protocolCallBackList.forEach(element => {
                if (element.obj === obj) {
                    var index = this._protocolCallBackList.indexOf(element);
                    if (index > -1) {
                        this._protocolCallBackList.splice(index, 1);
                        console.log("hcc>>remove_protocol_delegate222: len: ", this._protocolCallBackList.length);
                    }
                }
            });
        }
    }

    remove_all_protocol_delegate(): void {
        this._protocolCallBackList.splice(0, this._protocolCallBackList.length)
    }

    ///////////////////////////////////
    connect(url: string) {
        console.log("socket is connecting address:", url)
        this._socket = new WSocket(url, this);
        this._socket.connect();
    }

    close_connect() {
        if (this._socket) {
            this._socket.close();
        }
    }

    get_socket_state(){
        if(this._socket){
            return this._socket.get_state()
        }
        return SocketState.CLOSED
    }

    send_msg(stype:number, ctype:number, body?:any){
        if(!this._socket || this._socket.get_state() != SocketState.OPEN){
            return
        }
        let encode_msg = ProtoManater.encode_cmd(stype,ctype,GameAppConfig.PROTO_TYPE,body)
        if(encode_msg){
            this._socket.send(encode_msg)
        }
    }
}