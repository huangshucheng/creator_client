var game_mgr = require("game_mgr");
var event_mgr = require("event_mgr");
var res_mgr = require("res_mgr");
var sound_mgr = require("sound_mgr");

var login_scene = require("login_scene");
var proto_file_path = "protos/game.proto";

var game_app = cc.Class({
	extends: game_mgr,

	statics: {
		Instance: null, 
	},

	properties: {
		protobufRoot: null,
	},

	onLoad() {
		if (game_app.Instance === null) {
			game_app.Instance = this;
		}
		else {
			cc.error("[error]:game_app has multi instances");
			this.destroy();
			return;
		}

		game_mgr.prototype.onLoad.call(this);
		
		// local proto file
		var self = this
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
		})   
	},

	start() {
		this.enter_scene(login_scene);
		this.scheduleOnce(function(){
			sound_mgr.Instance.stop_music();
		}.bind(this), 5);
	},

	get_protobuf_root(){
		return this.protobufRoot;
	},
});