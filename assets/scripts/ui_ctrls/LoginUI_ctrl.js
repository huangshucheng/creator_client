var UI_ctrl = require("UI_ctrl");
var UI_manager = require("UI_manager");
var net_mgr = require("net_mgr")

//test
var Stype = {
    Auth: 1,
};

var Cmd = {
    LoginReq: 1,
    LoginRes: 2,
};


cc.Class({
	extends: UI_ctrl,

	properties: {
	},

	onLoad() {
		UI_ctrl.prototype.onLoad.call(this);
		this.view["version"].getComponent(cc.Label).string = "2.0.0";

		this.add_button_listen("btn_green", this, this.on_start_click);
		//test
		net_mgr.Instance.connect_to_server();
	},

	on_start_click() {
		console.log('hcc>>>>>>');
		//test
        var body = {guest_key:111};
		net_mgr.Instance.send_msg(Stype.Auth, Cmd.LoginReq, body);
	},

	start() {
	},

});