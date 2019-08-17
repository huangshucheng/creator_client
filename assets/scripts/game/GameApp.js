var game_mgr = require("game_mgr");
var sound_mgr = require("sound_mgr");
var net_mgr = require("net_mgr");

var LoginScene = require("LoginScene");

var GameApp = cc.Class({
	extends: game_mgr,

	statics: {
		Instance: null, 
	},

	properties: {
		
	},

	onLoad() {
		if (GameApp.Instance === null) {
			GameApp.Instance = this;
		}
		else {
			cc.error("[error]:GameApp has multi instances");
			this.destroy();
			return;
		}

		game_mgr.prototype.onLoad.call(this);
		this.protobufRoot =  null;
		//connect to websocket server
		net_mgr.Instance.connect_to_server();
	},

	start() {
		// this.enter_scene(LoginScene);
		var on_process = function(percent){
			cc.log("on_process>> " + percent);
		};

		var self = this;
		var on_finished = function(){
			cc.log("on_finished>> ");
			self.enter_scene(LoginScene);
		};
		this.preload_scene(LoginScene,on_process,on_finished)
	},

	get_protobuf_root(){
		return this.protobufRoot;
	},
});