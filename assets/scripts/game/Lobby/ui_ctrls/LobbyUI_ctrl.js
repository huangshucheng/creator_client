var UI_ctrl 		= require("UI_ctrl");
var net_mgr 		= require("net_mgr")
var GameApp 		= require("GameApp");
var Cmd 			= require("Cmd");
var cmd_name_map 	= require("cmd_name_map");
var Stype 			= require("Stype");
var Respones 		= require("Respones")
var LoginScene      = require("LoginScene");
var event_mgr 		= require("event_mgr");
var event_name 		= require("event_name");
var UI_manager 		= require("UI_manager")

var GameScene 		= require("GameScene");
var LocalStorageName = require("LocalStorageName");
var GameFunction 	= require("GameFunction")

var KW_LOBBY_TOP_BG 		= "KW_LOBBY_TOP_BG";
var KW_BTN_SET 		    	= KW_LOBBY_TOP_BG + "/KW_BTN_SET";
var KW_BTN_LOGIN_LOGIC 		= KW_LOBBY_TOP_BG + "/KW_BTN_LOGIN_LOGIC";
var KW_TEXT_VERSION 		= "KW_TEXT_VERSION";
var KW_TEXT_NET_STATUS 		= "KW_TEXT_NET_STATUS";

var IMG_HEAD 				= "KW_LOBBY_TOP_BG/IMG_USER_INFO_BG/IMG_HEAD";
var TEXT_USER_NAME 			= "KW_LOBBY_TOP_BG/IMG_USER_INFO_BG/TEXT_USER_NAME";
var TEXT_USER_ID 			= "KW_LOBBY_TOP_BG/IMG_USER_INFO_BG/TEXT_USER_ID";
var TEXT_COIN 				= "KW_LOBBY_TOP_BG/IMG_COIN_BG/TEXT_COIN";
var TEXT_DIAMOND 			= "KW_LOBBY_TOP_BG/IMG_DIAMOND_BG/TEXT_DIAMOND";

var KW_PANEL_MIDDLE 		= "KW_PANEL_MIDDLE";
var BTN_CREATE_ROOM 		= KW_PANEL_MIDDLE + "/BTN_CREATE_ROOM";
var BTN_BACK_ROOM 			= KW_PANEL_MIDDLE + "/BTN_BACK_ROOM";
var BTN_JOIN_ROOM 			= KW_PANEL_MIDDLE + "/BTN_JOIN_ROOM";

/*
生命周期:
onLoad
start
update
lateUpdate
onDestroy
onEnable
onDisable
*/ 
cc.Class({
	extends: UI_ctrl,

	properties: {
		_connect_count : 0,
	},

	onLoad() {
		UI_ctrl.prototype.onLoad.call(this);
		this.set_string(KW_TEXT_VERSION,"3.0.0")
		this.init_UI();

       	this.add_net_event_listener();
		this.add_button_event_listener();
		cc.log("hccccc onload");
    },
    
	start() {
		net_mgr.Instance.send_msg(Stype.System,Cmd.eGetUgameInfoReq);
		net_mgr.Instance.send_msg(Stype.Logic,Cmd.eLoginLogicReq)
		cc.log("hccccc start");
	},
	//net event
    add_net_event_listener(){
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eHeartBeatRes],this,this.on_event_heartbeat)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eLoginOutRes],this,this.on_event_login_out)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eGuestLoginRes],this,this.on_event_guest_login)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eUnameLoginRes],this,this.on_event_uname_login)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eRelogin],this,this.on_event_relogin)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eLoginLogicRes],this,this.on_event_login_logic)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eGetUgameInfoRes],this,this.on_event_ugame_info)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eGetCreateStatusRes],this,this.on_event_create_status)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eCreateRoomRes],this,this.on_event_create_box_room)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eBackRoomRes],this,this.on_event_back_box_room)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eJoinRoomRes],this,this.on_event_join_box_room)

		///////////////////////
		event_mgr.add_event_listenner(event_name.net_connect,this,this.on_event_net_connect)
		event_mgr.add_event_listenner(event_name.net_disconnect,this,this.on_event_net_disconnect)
		event_mgr.add_event_listenner(event_name.net_connecting, this,this.on_event_net_connecting);
    },
	//button click event
    add_button_event_listener(){
        this.add_button_listener(KW_BTN_SET, this, this.on_set_click_event);
		this.add_button_listener(KW_BTN_LOGIN_LOGIC, this, this.on_click_login_logic);
		
        this.add_button_listener(BTN_CREATE_ROOM, this, this.on_click_create_room);
        this.add_button_listener(BTN_BACK_ROOM, this, this.on_click_back_room);
        this.add_button_listener(BTN_JOIN_ROOM, this, this.on_click_join_room);
    },
	/////////////////////////网络事件
	on_event_heartbeat(udata){
        cc.log('lobbyUI: on_event_heartbeat')
		if(udata.status == 1){
			net_mgr.Instance.send_msg(Stype.Logic,Cmd.eHeartBeatReq,null)
		}
	},
	//退出登陆
	on_event_login_out(udata){
		if(udata.status == Respones.OK){
			var self = this
			var on_process = function(percent){};
			var on_finished = function(){
				GameApp.Instance.enter_scene(LoginScene);
			};
			GameApp.Instance.preload_scene(LoginScene,on_process,on_finished)
		}
	},
	//游客登录
	on_event_guest_login(udata){
		console.log('on_event_guest_login ' + udata);
		if(udata.status === Respones.OK){
			if(udata.uinfo){
				cc.sys.localStorage.setItem(LocalStorageName.user_info_self,JSON.stringify(udata.uinfo));
				net_mgr.Instance.send_msg(Stype.Logic,Cmd.eLoginLogicReq)
			}
		}
	},
	//玩家登录
	on_event_uname_login(udata){
		console.log('on_event_uname_login ' + udata);
		if(udata.status === Respones.OK){
			if(udata.uinfo){
				cc.sys.localStorage.setItem(LocalStorageName.user_info_self,JSON.stringify(udata.uinfo));
				net_mgr.Instance.send_msg(Stype.Logic,Cmd.eLoginLogicReq)
			}
		}else{
			this.set_string(KW_TEXT_NET_STATUS,"账号或密码错误");
		}
	},
	//重复登陆
	on_event_relogin(udata){
		var on_process = function(percent){};
		var on_finished = function(){
			GameApp.Instance.enter_scene(LoginScene);
		};
		GameApp.Instance.preload_scene(LoginScene,on_process,on_finished)
	},
	//登陆逻辑服
	on_event_login_logic(udata){
		if(udata.status == Respones.OK){
			cc.log("on_event_login_logic>> OK")		
			net_mgr.Instance.send_msg(Stype.Logic,Cmd.eGetCreateStatusReq);	
		}
	},
	//玩家信息
	on_event_ugame_info(udata){
		var uchip = udata.uinfo.uchip;
		var uchip2 = udata.uinfo.uchip2;
		this.set_string(TEXT_COIN,uchip);
		this.set_string(TEXT_DIAMOND,uchip2);
	},
	//是否创建房间
	on_event_create_status(udata){
		var status = udata.status;
		if(status == Respones.OK){
			this.set_visible(BTN_BACK_ROOM,true);
			this.set_visible(BTN_CREATE_ROOM,false);
		}else{
			this.set_visible(BTN_BACK_ROOM,false);
			this.set_visible(BTN_CREATE_ROOM,true);
		}
	},
	//创建房间
	on_event_create_box_room(udata){
		var status = udata.status
		if (status == Respones.OK){
			var _this = this
			var on_process = function(percent){};
			var on_finished = function(){
				GameApp.Instance.enter_scene(GameScene);
			};
			GameApp.Instance.preload_scene(GameScene,on_process,on_finished)
		}
	},
	//返回房间
	on_event_back_box_room(udata){
		var status = udata.status
		if (status == Respones.OK){
			var _this = this
			var on_process = function(percent){};
			var on_finished = function(){
				GameApp.Instance.enter_scene(GameScene);
			};
			GameApp.Instance.preload_scene(GameScene,on_process,on_finished)
		}
	},
	//加入房间
	on_event_join_box_room(udata){
		var status = udata.status
		if (status == Respones.OK){
			var _this = this
			var on_process = function(percent){};
			var on_finished = function(){
				GameApp.Instance.enter_scene(GameScene);
			};
			GameApp.Instance.preload_scene(GameScene,on_process,on_finished)
		}
	},
	
	///////////////////////////////// 网络链接
	//网络连接成功
	on_event_net_connect(udata){
		this.view[KW_TEXT_NET_STATUS].getComponent(cc.Label).string = "连接成功...."

		var loginType = cc.sys.localStorage.getItem(LocalStorageName.user_login_type)
		if (loginType == "uname"){
			var login_msg = JSON.parse(cc.sys.localStorage.getItem(LocalStorageName.user_login_msg))
			var uname = login_msg.uname
			var upwd = login_msg.upwd
			var msg = {
				uname:String(uname),
				upwd:String(upwd),
			}
			net_mgr.Instance.send_msg(Stype.Auth,Cmd.eUnameLoginReq,msg)
		}else if (loginType == "guest"){
			var keystr = cc.sys.localStorage.getItem(LocalStorageName.user_login_guest_msg)
			if(keystr!= null && keystr.length == 32){
				net_mgr.Instance.send_msg(Stype.Auth,Cmd.eGuestLoginReq,{guestkey : String(keystr)})
			}
		}
	},

	//断开连接
	on_event_net_disconnect(udata){
		this._connect_count += 1; 
		this.set_string(KW_TEXT_NET_STATUS,"连接失败: " + udata + " ," + this._connect_count)
	},
	//正在连接
	on_event_net_connecting(udata){
		this._connect_count += 1; 
		this.set_string(KW_TEXT_NET_STATUS,"正在连接.... " + this._connect_count)
	},
    ///////////////////////// button 事件
    on_set_click_event(sender){
		net_mgr.Instance.send_msg(Stype.Auth,Cmd.eLoginOutReq)
		cc.log("login out")
	},
	
	on_click_login_logic(sender){
		net_mgr.Instance.send_msg(Stype.Logic,Cmd.eGetCreateStatusReq);
		cc.log("create status....")
		// net_mgr.Instance.send_msg(Stype.Logic,Cmd.eLoginLogicReq)
		// test
		net_mgr.Instance.send_msg(Stype.System,Cmd.eGetSysMsgReq,{versionnum : 1})
		net_mgr.Instance.send_msg(Stype.System,Cmd.eGetWorldRankUchipReq)
		var node = this.seekWidgetByName(this.node,"BTN_CREATE_ROOM");
		cc.log("name: " + node.name);
	},

	on_click_create_room(sender){
		var playerNum = 3
		var playCount = 10
		var isAAPay = 1
		var baseScore = 1
		var gamerule = "playerNum='" + playerNum + "';"+ "playCount='" + playCount + "';" + "isAAPay='" + isAAPay + "';" + "baseScore='" + baseScore + "';"
		cc.log("gamerule: " + gamerule)
		var msg = {
			roominfo:String(gamerule),
		}
		 net_mgr.Instance.send_msg(Stype.Logic,Cmd.eCreateRoomReq,msg)
		//test
		// var playc = GameFunction.getStrValue(gamerule,"playCount")
		// cc.log("playc: " + playc)
		
	},

	on_click_back_room(sender){
		net_mgr.Instance.send_msg(Stype.Logic,Cmd.eBackRoomReq)
	},

	on_click_join_room(sender){
		UI_manager.show_dialog("DialogJoinRoom")
	},
	/////////////////////////
	init_UI(){
		var uinfo = JSON.parse(cc.sys.localStorage.getItem(LocalStorageName.user_info_self)); 
		this.set_string(TEXT_USER_NAME,uinfo.unick);
		this.set_string(TEXT_USER_ID,uinfo.brandid);

		var url =  "rectheader/" + (10 + uinfo.uface) + ".png";
		this.load_texture(IMG_HEAD,url);
	},

    onDestroy(){
        cc.log("loobbyUI>>destory....")
        this.remove_event_listenner();
	},
    
	remove_event_listenner(){
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eHeartBeatRes],this,this.on_event_heartbeat)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eLoginOutRes],this,this.on_event_login_out)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eGuestLoginRes],this,this.on_event_guest_login)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eUnameLoginRes],this,this.on_event_uname_login)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eRelogin],this,this.on_event_relogin)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eLoginLogicRes],this,this.on_event_login_logic)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eGetUgameInfoRes],this,this.on_event_ugame_info)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eGetCreateStatusRes],this,this.on_event_create_status)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eCreateRoomRes],this,this.on_event_create_box_room)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eBackRoomRes],this,this.on_event_back_box_room)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eJoinRoomRes],this,this.on_event_join_box_room)
		/////////////////////
		event_mgr.remove_event_listenner(event_name.net_connect,this,this.on_event_net_connect)
		event_mgr.remove_event_listenner(event_name.net_disconnect,this,this.on_event_net_disconnect)
		event_mgr.remove_event_listenner(event_name.net_connecting,this,this.on_event_net_connecting)
	},
});