var event_mgr       = require("event_mgr");
var proto_man       = require("proto_man");
var Cmd             = require("Cmd")
var Stype           = require("Stype")
var event_name      = require("event_name")
var ConfigKeyWord   = require("ConfigKeyWord")
var ProtoCmd        = require("ProtoCmd")

var State = {
    Disconnected: 0, // 断开连接
    Connecting: 1, // 正在连接
    Connected: 2, // 已经连接;
};

/*
WebSocket.CONNECTING = 0 // The connection is not yet open.
WebSocket.OPEN = 1 // The connection is open and ready to communicate.
WebSocket.CLOSING = 2 // The connection is in the process of closing.
WebSocket.CLOSED = 3 // The connection is closed or couldn't be opened.
*/

var W_STATE = {
    [0] : "CONNECTING",
    [1] : "OPEN",
    [2] : "CLOSING",
    [3] : "CLOSED",
}

var net_mgr = cc.Class({
    extends: cc.Component,

    statics: {
        Instance: null,
    },

    properties: {
        // url: "ws://192.168.2.130:6081/ws",
        url: "ws://" + ConfigKeyWord.localip + ":" + ConfigKeyWord.remoteport + "/ws",
        // url: "ws://" + ConfigKeyWord.remoteip + ":" + ConfigKeyWord.remoteport + "/ws",
        proto_type: proto_man.PROTO_BUF, //1:json , 2:protobuf
        // proto_type: proto_man.PROTO_JSON, //1:json , 2:protobuf
    },

    onLoad () {
        if (net_mgr.Instance === null) {
            net_mgr.Instance = this;
        }
        else {
            this.destroy();
            cc.error("[error]:net_mgr has multi instances");
            return;
        }

        this.state = State.Disconnected;
    },

    _on_opened(event) {
        this.state = State.Connected;
        cc.log("connect to server: " + this.url + " sucess!");
        event_mgr.dispatch_event(event_name.net_connect);
    },

    _on_recv_data(event) {
        var str_or_buf = event.data;
        var msg_data = proto_man.decode_cmd(this.proto_type, str_or_buf);
        if (!msg_data) {
            return;
        }
        var cmd_name = ProtoCmd.default.getCmdName(msg_data.stype, msg_data.ctype)
        if (cmd_name){
            event_mgr.dispatch_event(cmd_name, msg_data.body);    
        }

        // if(msg_data.ctype != Cmd.eHeartBeatRes){
            cc.log("###########################>>>recvstart")
            console.log("stype:" , Stype.StypeName[msg_data.stype] + " ,ctype:",cmd_name);
            if (msg_data.body){
                var jsonBody = JSON.stringify(msg_data.body);
                cc.log(jsonBody);
            }
            cc.log("###########################>>>recvend")
        // }
    },

    _on_socket_close(event) {
        this.close_socket(event.type);
    },

    _on_socket_err(event) {
        this.close_socket(event.type);
    },

    close_socket(eventType) {
        if (this.state == State.Connected) {
            if (this.sock !== null) {
                this.sock.close();
                this.sock = null;
            }
            event_mgr.dispatch_event(event_name.net_disconnect, eventType);
        }
        
        this.state = State.Disconnected;
    },

    // 发起连接;
    connect_to_server() {
        if (this.state != State.Disconnected) {
            return;
        }

        this.state = State.Connecting;
        this.sock = new WebSocket(this.url); // H5标准
        this.sock.binaryType = "arraybuffer";

        this.sock.onopen = this._on_opened.bind(this);
        this.sock.onmessage = this._on_recv_data.bind(this);
        this.sock.onclose = this._on_socket_close.bind(this);
        this.sock.onerror = this._on_socket_err.bind(this);

        event_mgr.dispatch_event(event_name.net_connecting, null);
    },

    start () {

    },

    send_msg(stype, ctype, msg) {
        if (this.state !== State.Connected || !this.sock) {
            return;
        }
        var buf = proto_man.encode_cmd(this.proto_type, stype, ctype, msg);
        this.sock.send(buf);
    },

    update (dt) {
        // cc.log("hcc>>readystate: " + this.sock.readyState + " ,state: " + W_STATE[this.sock.readyState])
        if (this.state != State.Disconnected) {
            return;
        }
        this.connect_to_server();
    },
});
