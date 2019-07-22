var game_mgr = require("game_mgr");
var event_mgr = require("event_mgr");
var res_mgr = require("res_mgr");
var sound_mgr = require("sound_mgr");

var login_scene = require("login_scene");

var game_app = cc.Class({
	extends: game_mgr,

	statics: {
		Instance: null, 
	},

	properties: {
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

		
	},

	start() {
		this.enter_scene(login_scene);
		this.scheduleOnce(function(){
			sound_mgr.Instance.stop_music();
		}.bind(this), 5);
	},

	
});