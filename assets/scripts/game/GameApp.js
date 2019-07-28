var game_mgr = require("game_mgr");
var event_mgr = require("event_mgr");
var res_mgr = require("res_mgr");
var sound_mgr = require("sound_mgr");
var net_mgr = require("net_mgr");

var LoginScene = require("LoginScene");
var proto_file_path = "protos/game.proto";

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
		// local proto file
		var self = this;
		cc.loader.loadRes(proto_file_path, function (err, protos) {
		    if (err) {
		       console.log("load proto error ==> ", err)
		        return
		    }
		    self.protobufRoot = protobuf.parse(protos).root
		    //TEST
		    // var rs = root.lookup("GuestLoginReq")
		    // var msg = rs.create({guestKey:"hccfuck222"})
		    // cc.log("hcc>> " + "msg ", msg)
		    // var buf = rs.encode(msg).finish()
		   	// cc.log("hcc>> " + "buf ", buf)
		    // var decode = rs.decode(new Uint8Array(buf))
		    // cc.log("hcc>> " + "decode ", decode)
		    // cc.log("hcc>> " + "decode json: ",JSON.stringify(decode))
		});
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