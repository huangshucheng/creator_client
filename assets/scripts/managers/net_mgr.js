var event_mgr = require("event_mgr");
var State = {
    Disconnected: 0, // 断开连接
    Connecting: 1, // 正在连接
    Connected: 2, // 已经连接;
};

var net_mgr = cc.Class({
    extends: cc.Component,

    statics: {
        Instance: null,
    },

    properties: {
        url: "ws://127.0.0.1:6081/ws",
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
        console.log('hcc>>net_mgr>>onLoad')
    },

    _on_opened(event) {
        this.state = State.Connected;
        cc.log("connect to server: " + this.url + " sucess!");
        event_mgr.dispatch_event("net_connect", null);
    },

    _on_recv_data(event) {
        event_mgr.dispatch_event("net_message", event.data);
    },

    close_socket() {
        if (this.state == State.Connected) {
            if (this.sock !== null) {
                this.sock.close();
                this.sock = null;
            }
            event_mgr.dispatch_event("net_disconnect", null);
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

    send_data(data_arraybuf) {
        if (this.state == State.Connected && this.sock) {
            this.sock.send(data_arraybuf);
        }
    },

    update (dt) {
        if (this.state != State.Disconnected) {
            return;
        }

        this.connect_to_server();
    },
});
