var UI_ctrl 		= require("UI_ctrl");
var net_mgr 		= require("net_mgr")
var GameApp 		= require("GameApp");
var Cmd 			= require("Cmd");
var cmd_name_map 	= require("cmd_name_map");
var Stype 			= require("Stype");
var Respones 		= require("Respones")
var LoginScene      = require("LoginScene");
var LobbyScene 		= require("LobbyScene")
var event_mgr 		= require("event_mgr");
var event_name 		= require("event_name");

var LocalStorageName = require("LocalStorageName");

var KW_TEXT_VERSION 	= "KW_TEXT_VERSION";
var KW_TEXT_NET_STATUS 	= "KW_TEXT_NET_STATUS";
var KW_TEXT_RULE 		= "KW_TEXT_RULE";
var KW_TEXT_ROOM_NUM 	= "KW_TEXT_ROOM_NUM";
var KW_TEXT_PLAY_COUNT 	= "KW_TEXT_PLAY_COUNT";
var KW_PANEL_USER_INFO  = "KW_PANEL_USER_INFO_"; ////KW_PANEL_USER_INFO_1 ...

var BTN_BACK		= "BTN_BACK";
var BTN_DESSOLVE	= "BTN_DESSOLVE";
var KW_BTN_READY 	= "KW_BTN_READY";

var MAX_PLAYER_COUNT = 4;
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
    },
    
	start() {
		net_mgr.Instance.send_msg(Stype.Logic,Cmd.eCheckLinkGameReq)
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
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eBackRoomRes],this,this.on_event_back_box_room)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eExitRoomRes],this,this.on_event_exit_box_room)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eDessolveRes],this,this.on_event_dessolve_box_room)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eUserReadyRes],this,this.on_event_ready)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eCheckLinkGameRes],this,this.on_event_check_link_game)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eRoomInfoRes],this,this.on_event_room_info)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eRoomIdRes],this,this.on_event_room_id)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.ePlayCountRes],this,this.on_event_play_count)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eUserArrivedInfos],this,this.on_event_user_arrive_infos)

		///////////////////////
		event_mgr.add_event_listenner(event_name.net_connect,this,this.on_event_net_connect)
		event_mgr.add_event_listenner(event_name.net_disconnect,this,this.on_event_net_disconnect)
		event_mgr.add_event_listenner(event_name.net_connecting, this,this.on_event_net_connecting);
    },
	//button click event
    add_button_event_listener(){
		this.add_button_listener(BTN_BACK, this, this.on_click_back);
		this.add_button_listener(BTN_DESSOLVE, this, this.on_click_dessolve);
		this.add_button_listener(KW_BTN_READY, this, this.on_click_ready);
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
		}
	},
	//玩家信息
	on_event_ugame_info(udata){
		var uchip = udata.uinfo.uchip;
		var uchip2 = udata.uinfo.uchip2;
	},
	//返回房间
	on_event_back_box_room(udata){
		var status = udata.status
		if (status == Respones.OK){
			// var on_process = function(percent){};
			// var on_finished = function(){
			// 	GameApp.Instance.enter_scene(GameScene);
			// };
			// GameApp.Instance.preload_scene(GameScene,on_process,on_finished)
		}
	},
	//退出房间
	on_event_exit_box_room(udata){
		cc.log("exit box room " + udata);
	},
	//解散房间
	on_event_dessolve_box_room(udata){
		var status = udata.status;
		if(status == Respones.OK){
			var on_process = function(percent){};
			var on_finished = function(){
				GameApp.Instance.enter_scene(LobbyScene);
			};
			GameApp.Instance.preload_scene(LobbyScene,on_process,on_finished)
		}
	},
	//准备
	on_event_ready(udata){
		cc.log("ready: " + udata.status)
	},

	on_event_check_link_game(udata){
		cc.log("on_event_check_link_game" + udata.status)
	},

	on_event_room_info(udata){
		var roominfo = udata.roominfo;
		this.set_string(KW_TEXT_RULE,roominfo);
	},

	on_event_room_id(udata){
		var roomid = udata.roomid;
		this.set_string(KW_TEXT_ROOM_NUM,"房间号:" + roomid);
	},
	on_event_play_count(udata){
		var playcount = udata.playcount;
		var totalplaycount = udata.totalplaycount;
		this.set_string(KW_TEXT_PLAY_COUNT,"局数:" + playcount + "/" + totalplaycount);
	},
	on_event_user_arrive_infos(udata){
		var userinfo = udata.userinfo
		for(var i = 0 ;i<userinfo.length;i++){
			var brandid = userinfo[i].brandid;
			var seatid = userinfo[i].seatid;
			var info = userinfo[i];
			cc.sys.localStorage.setItem(LocalStorageName.game_user_arrive_info + seatid ,JSON.stringify(info));
			// var jsoninfo = JSON.parse(cc.sys.localStorage.getItem(LocalStorageName.game_user_arrive_info + seatid)); 
			// cc.log("hcc>>jsoninfo: " + jsoninfo);
		}
		this.update_user_info();
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
	
	on_click_back(sender){
		var on_process = function(percent){};
		var on_finished = function(){
			GameApp.Instance.enter_scene(LobbyScene);
		};
		GameApp.Instance.preload_scene(LobbyScene,on_process,on_finished)
		net_mgr.Instance.send_msg(Stype.Logic,Cmd.eExitRoomReq);
	},

	on_click_dessolve(sender){
		net_mgr.Instance.send_msg(Stype.Logic,Cmd.eDessolveReq);
	},

	on_click_ready(sender){
		var msg = {readystate : 1};
		net_mgr.Instance.send_msg(Stype.Logic,Cmd.UserReadyReq,msg);
	},
	/////////////////////////
	init_UI(){
		// var uinfo = JSON.parse(cc.sys.localStorage.getItem(LocalStorageName.user_info_self));
	},

	update_user_info(){
		//serverseat: 1 - 4
		for(var serverSeat = 1; serverSeat <= MAX_PLAYER_COUNT; serverSeat++){
			var localInfo = cc.sys.localStorage.getItem(LocalStorageName.game_user_arrive_info + serverSeat);
			if(localInfo){
				var userinfo = JSON.parse(localInfo);
				cc.log("localInfo: " + localInfo);
				// var user_panel = this.seekWidgetByName(KW_PANEL_USER_INFO + serverSeat);
				// this.set_visible(KW_PANEL_USER_INFO + serverSeat,true);
			}else{
				cc.log("user not exist: " + serverSeat)
				// this.set_visible(KW_PANEL_USER_INFO + serverSeat,false);
			}
		}
	},

    onDestroy(){
        cc.log("GameSceneUI>>destory....")
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
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eBackRoomRes],this,this.on_event_back_box_room)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eExitRoomRes],this,this.on_event_exit_box_room)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eDessolveRes],this,this.on_event_dessolve_box_room)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eUserReadyRes],this,this.on_event_ready)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eCheckLinkGameRes],this,this.on_event_check_link_game)

		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eRoomInfoRes],this,this.on_event_room_info)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eRoomIdRes],this,this.on_event_room_id)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.ePlayCountRes],this,this.on_event_play_count)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eUserArrivedInfos],this,this.on_event_user_arrive_infos)

		/////////////////////
		event_mgr.remove_event_listenner(event_name.net_connect,this,this.on_event_net_connect)
		event_mgr.remove_event_listenner(event_name.net_disconnect,this,this.on_event_net_disconnect)
		event_mgr.remove_event_listenner(event_name.net_connecting,this,this.on_event_net_connecting)
		
	},
});