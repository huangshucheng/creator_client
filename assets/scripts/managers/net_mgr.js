var event_mgr = require("event_mgr");
var proto_man = require("proto_man");

var State = {
    Disconnected: 0, // 断开连接
    Connecting: 1, // 正在连接
    Connected: 2, // 已经连接;
};

var net_event = {
    net_connect: "net_connect",
    net_message: "net_message",
    net_disconnect: "net_disconnect",
}

var net_mgr = cc.Class({
    extends: cc.Component,

    statics: {
        Instance: null,
    },

    properties: {
        url: "ws://127.0.0.1:6081/ws",
        proto_type: 2, //1:json , 2:protobuf
    },

    // LIFE-CYCLE CALLBACKS:

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
        event_mgr.dispatch_event(net_event.net_connect, null);
    },

    _on_recv_data(event) {
        var str_or_buf = event.data;
        var msg_data = proto_man.decode_cmd(this.proto_type, str_or_buf);
        if (!msg_data) {
            return;
        }
        event_mgr.dispatch_event(net_event.net_message, msg_data);
        console.log("hcc>>recv_data: " + "stype: " + msg_data.stype + " ,ctype: " + msg_data.ctype + " ,body: " + msg_data.body);
    },

    close_socket() {
        if (this.state == State.Connected) {
            if (this.sock !== null) {
                this.sock.close();
                this.sock = null;
            }
            event_mgr.dispatch_event(net_event.net_disconnect, null);
        }
        
        this.state = State.Disconnected;
    },

    _on_socket_close(event) {
        this.close_socket();
    },

    _on_socket_err(event) {
        this.close_socket();
    },

    // 发起连接;
    connect_to_server() {
        if (this.state != State.Disconnected) {
            return;
        }

        this.state = State.Connecting;
        this.sock = new WebSocket(this.url); // H5标准，底层做好了;
        this.sock.binaryType = "arraybuffer";

        this.sock.onopen = this._on_opened.bind(this);
        this.sock.onmessage = this._on_recv_data.bind(this);
        this.sock.onclose = this._on_socket_close.bind(this);
        this.sock.onerror = this._on_socket_err.bind(this);
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
        if (this.state != State.Disconnected) {
            return;
        }

        this.connect_to_server();
    },
});
