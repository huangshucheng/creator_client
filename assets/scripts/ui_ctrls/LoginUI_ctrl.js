var UI_ctrl = require("UI_ctrl");
var UI_manager = require("UI_manager");
var net_mgr = require("net_mgr")

cc.Class({
	extends: UI_ctrl,

	properties: {
	},

	onLoad() {
		UI_ctrl.prototype.onLoad.call(this);
		this.view["version"].getComponent(cc.Label).string = "2.0.0";

		this.add_button_listen("btn_green", this, this.on_start_click);
	},

	on_start_click() {
		console.log('hcc>>>>>>');
		net_mgr.Instance.connect_to_server()
	},

	start() {
	},

});