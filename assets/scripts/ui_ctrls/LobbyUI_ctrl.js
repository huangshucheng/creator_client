var UI_ctrl 		= require("UI_ctrl");
var net_mgr 		= require("net_mgr")
var GameApp 		= require("GameApp");
var Cmd 			= require("Cmd");
var cmd_name_map 	= require("cmd_name_map");
var Stype 			= require("Stype");
var LoginScene      = require("LoginScene")
var event_mgr 		= require("event_mgr");

var KW_BTN_SET 		    = "KW_LOBBY_TOP_BG/KW_BTN_SET"
var KW_TEXT_VERSION 	= "KW_TEXT_VERSION"

cc.Class({
	extends: UI_ctrl,

	properties: {

	},

	onLoad() {
		UI_ctrl.prototype.onLoad.call(this);
        this.view[KW_TEXT_VERSION].getComponent(cc.Label).string = "3.0.0"; // test

        this.add_net_event_listener();
        this.add_button_event_listener();
    },
    
	start() {

    },

    add_net_event_listener(){
        event_mgr.add_event_listenner(cmd_name_map[Cmd.eHeartBeatRes],this,this.on_event_heartbeat)
    },

    add_button_event_listener(){
        this.add_button_listener(KW_BTN_SET, this, this.on_set_click_event);
    },

	on_event_heartbeat(event_name,udata){
        cc.log('lobbyUI: on_event_heartbeat')
		if(udata.status == 1){
			net_mgr.Instance.send_msg(Stype.Logic,Cmd.eHeartBeatReq,null)
		}
	},

    /////////////////////////
    on_set_click_event(){
        var self = this
		var on_process = function(percent){
            cc.log("on_process>> " + percent);
            self.view[KW_TEXT_VERSION].getComponent(cc.Label).string = "loading: " + percent * 100 + "%"
		};

		var on_finished = function(){
			cc.log("on_finished>> ");
			GameApp.Instance.enter_scene(LoginScene);
		};
		GameApp.Instance.preload_scene(LoginScene,on_process,on_finished)
    },



    onDestroy(){
        cc.log("loobbyUI>>destory....")
        this.remove_event_listenner();
	},
    
	remove_event_listenner(){
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eHeartBeatRes],this,this.on_event_heartbeat)
	},
});