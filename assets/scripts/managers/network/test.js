// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

var network = require("network");
var proto_man = require("proto_man");

var Stype = {
    Auth: 1,
};

var Cmd = {
    LoginReq: 1,
    LoginRes: 2,
};

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        network.connect("ws://127.0.0.1:6081/ws", proto_man.PROTO_JSON)
        var cmd_handler = {}
        cmd_handler[Stype.Auth] = this.on_auth_server_return.bind(this);

        network.register_serivces_handler(cmd_handler);

        this.scheduleOnce(this.test.bind(this), 5);
    },

    on_auth_server_return(stype, ctype, body) {
        console.log(stype, ctype, body)
    },

    test() {
        var body = {status: 1};
        network.send_cmd(Stype.Auth, Cmd.LoginReq, body);
    },

    // update (dt) {},
});
