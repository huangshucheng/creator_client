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

		/////test
		/*
		// var AuthProto = require("game.Lobby.NetWork.Protocol.AuthProto")
		var AuthProto = require("AuthProto")
		var ProtoCmd = require("ProtoCmd")
		var dft = ProtoCmd.default
		var protoName = dft.getProtoName(2)
		var cmdName = dft.getCmdName(2,1)
		console.log("hcc>>>>>>>>>" , ProtoCmd)
		console.log("hcc>>>>>>>>>" , protoName, cmdName)
		*/

		// console.log("hcc>> AuthProto: " , AuthProto)
		// console.log("hcc>> cmd: " , AuthProto.Cmd)
		// console.log("hcc>> cmdName: " , AuthProto.CmdName)
		// console.log("hcc>> protoName: " , AuthProto.protoName)
		
		// var protobuf = require("protobuf")
		// console.log("hcc>>protobuf: " , protobuf)
		// var protobugMsg = require("protobufMsg")
		// console.log("hcc>>protobufMsg: " , protobugMsg)
	},

	start() {
		// this.enter_scene(LoginScene);
		var on_process = function(percent){
			cc.log("on_process>> " + percent);
		};

		var _this = this;
		var on_finished = function(){
			cc.log("on_finished>> ");
			_this.enter_scene(LoginScene);

			//connect to websocket server
			net_mgr.Instance.connect_to_server();
		};
		this.preload_scene(LoginScene,on_process,on_finished)
	},
});