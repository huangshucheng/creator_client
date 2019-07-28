var UI_ctrl 		= require("UI_ctrl");
var net_mgr 		= require("net_mgr")
var GameApp 		= require("GameApp");
var Stype 			= require("Stype");
var LobbyScene  	= require("LobbyScene");
var cmd_name_map 	= require("cmd_name_map")
var Cmd 			= require("Cmd");
var event_mgr 		= require("event_mgr");

var KW_IMG_LOGIN_BG 	= "KW_IMG_LOGIN_BG"
var KW_BTN_LOGIN 		= "KW_IMG_LOGIN_BG/KW_BTN_LOGIN"
var KW_INPUT_ACCOUNT 	= "KW_IMG_LOGIN_BG/KW_INPUT_ACCOUNT"
var KW_INPUT_PWD 		= "KW_IMG_LOGIN_BG/KW_INPUT_PWD"
var KW_BTN_GOTO_REGIST 	= "KW_IMG_LOGIN_BG/KW_BTN_GOTO_REGIST"

var KW_IMG_GUEST_LOGIN_BG 	= "KW_IMG_GUEST_LOGIN_BG"
var KW_BTN_REGIST 		  	= "KW_IMG_GUEST_LOGIN_BG/KW_BTN_REGIST"
var KW_BTN_CLOSE 			= "KW_IMG_GUEST_LOGIN_BG/KW_BTN_CLOSE" 
var KW_INPUT_ACCOUNT_REGIST = "KW_IMG_GUEST_LOGIN_BG/KW_INPUT_ACCOUNT"
var KW_INPUT_PWD_REGIST 	= "KW_IMG_GUEST_LOGIN_BG/KW_INPUT_PWD"

var KW_BTN_GUEST_LOGIN 		= "KW_BTN_GUEST_LOGIN"
var KW_TEXT_VERSION 		= "KW_TEXT_VERSION"

cc.Class({
	extends: UI_ctrl,

	properties: {

	},

	onLoad() {
		UI_ctrl.prototype.onLoad.call(this);
		this.view[KW_TEXT_VERSION].getComponent(cc.Label).string = "2.0.0"; //test
		
		this.add_net_event_listener();
		this.add_button_event_listener();
	},

	add_net_event_listener(){
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eGuestLoginRes],this,this.on_event_guest_login)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eUnameLoginRes],this,this.on_event_uname_login)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eHeartBeatRes],this,this.on_event_heartbeat)

		///TODO remove event listener
	},

	add_button_event_listener(){
		this.add_button_listener(KW_BTN_LOGIN, this, this.on_login_click_event);
		this.add_button_listener(KW_BTN_REGIST, this, this.on_regist_click_event);
		this.add_button_listener(KW_BTN_CLOSE, this, this.on_close_click_event);
		this.add_button_listener(KW_BTN_GUEST_LOGIN, this, this.on_guest_login_click_event);
		this.add_button_listener(KW_BTN_GOTO_REGIST, this, this.on_gotoregist_click_event);
	},

	on_event_uname_login(event_name, udata){
		console.log('on_event_uname_login ' + event_name + udata);
		if(udata.status === 1){
			// GameApp.Instance.enter_scene(LobbyScene);
			var self = this
			var on_process = function(percent){
				cc.log("Lobby>>on_process>> " + percent);
				self.view[KW_TEXT_VERSION].getComponent(cc.Label).string = "loading: " + percent * 100 + "%"
			};
	
			var on_finished = function(){
				cc.log("Lobby>>on_finished>> ");
				GameApp.Instance.enter_scene(LobbyScene);
			};
			GameApp.Instance.preload_scene(LobbyScene,on_process,on_finished)
		}
	},

	on_event_guest_login(event_name, udata){
		console.log('on_event_guest_login ' + data);
	},

	on_event_heartbeat(event_name,udata){
		cc.log('loginUI: on_event_heartbeat')
		if(udata.status == 1){
			net_mgr.Instance.send_msg(Stype.Logic,Cmd.eHeartBeatReq,null)
		}
	},
////////////////////////////////
	on_login_click_event(sender) {
		var uname = this.view[KW_INPUT_ACCOUNT].getComponent(cc.EditBox).string;
		var upwd = this.view[KW_INPUT_PWD].getComponent(cc.EditBox).string;
		cc.log("uname: " + uname + " ,upwd: " + upwd);
		var msg = {
			uname:uname,
			upwd:upwd,
		}
		net_mgr.Instance.send_msg(Stype.Auth,Cmd.eUnameLoginReq,msg)
	},

	on_regist_click_event(sender){
		var uname = this.view[KW_INPUT_ACCOUNT_REGIST].getComponent(cc.EditBox).string;
		var upwd = this.view[KW_INPUT_PWD_REGIST].getComponent(cc.EditBox).string;
		cc.log("regist>> uname: " + uname + " ,upwd: " + upwd);
		var msg = {
			uname:uname,
			upwdMd5:upwd,
		}
		net_mgr.Instance.send_msg(Stype.Auth,Cmd.eUserRegistReq,msg)
	},
	on_close_click_event(sender){
		this.view[KW_IMG_GUEST_LOGIN_BG].active = false;
	},

	on_guest_login_click_event(sender){
		cc.log("guest login")
	},

	on_gotoregist_click_event(sender){
		this.view[KW_IMG_GUEST_LOGIN_BG].active = true;
	},
///////////////////////////
	start() {
		cc.log("onstart....")
	},

	onDestroy(){
		cc.log("loginUI>>destory....")
		this.remove_event_listenner()
	},

	remove_event_listenner(){
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eUnameLoginRes],this,this.on_event_guest_login)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eUnameLoginRes],this,this.on_event_uname_login)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eHeartBeatRes],this,this.on_event_heartbeat)
	},

});