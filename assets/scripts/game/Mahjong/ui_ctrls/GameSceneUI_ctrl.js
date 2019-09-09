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
var GameFunction 	= require("GameFunction")
var RoomData 		= require("RoomData")
var UI_manager 		= require("UI_manager");
var LocalStorageName 	= require("LocalStorageName");

var KW_TEXT_VERSION 	= "KW_TEXT_VERSION";
var KW_TEXT_NET_STATUS 	= "KW_TEXT_NET_STATUS";
var KW_TEXT_RULE 		= "KW_TEXT_RULE";
var KW_TEXT_ROOM_NUM 	= "KW_TEXT_ROOM_NUM";
var KW_TEXT_PLAY_COUNT 	= "KW_TEXT_PLAY_COUNT";
var KW_PANEL_USER_INFO  = "KW_PANEL_USER_INFO_"; ////KW_PANEL_USER_INFO_1 ...

var BTN_BACK		= "BTN_BACK";
var BTN_DESSOLVE	= "BTN_DESSOLVE";
var KW_BTN_READY 	= "KW_BTN_READY";
var KW_TEXT_NAME 	= "KW_TEXT_NAME"
var KW_TEXT_SCORE 	= "KW_TEXT_SCORE"
var KW_IMG_OFFINLE 	= "KW_IMG_OFFINLE"
var KW_IMG_MASTER 	= "KW_IMG_MASTER"
var KW_IMG_READY 	= "KW_IMG_READY"
var KW_IMG_HEAD 	= "KW_IMG_HEAD"

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
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eDessolveRes],this,this.on_event_dessolve_box_room)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eUserReadyRes],this,this.on_event_ready)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eCheckLinkGameRes],this,this.on_event_check_link_game)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eRoomInfoRes],this,this.on_event_room_info)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eRoomIdRes],this,this.on_event_room_id)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.ePlayCountRes],this,this.on_event_play_count)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eUserArrivedInfos],this,this.on_event_user_arrive_infos)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eExitRoomRes],this,this.on_event_user_exit_room)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eUserOffLine],this,this.on_event_user_off_line)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eAllUserState],this,this.on_event_all_use_state)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eGameStart],this,this.on_event_game_start)

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
			net_mgr.Instance.send_msg(Stype.Logic,Cmd.eBackRoomReq)
		}
	},
	//玩家信息 TODO
	on_event_ugame_info(udata){
		var uchip = udata.uinfo.uchip;
		var uchip2 = udata.uinfo.uchip2;
	},
	//返回房间
	on_event_back_box_room(udata){
		var status = udata.status
		if (status == Respones.OK){
			cc.log("hcc>>back room success!")
		}
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
		if (udata.status == 1){
			var brandid = udata.brandid
			var seatid = udata.seatid
			var userstate = udata.userstate
			var player = RoomData.getInstance().get_player_by_seatid(seatid)
			var uinfo = player.get_uinfo()
			if (uinfo){
				uinfo.userstate = userstate
				player.set_uinfo(uinfo);
				this.update_user_info();
			}
		}

		var count =  RoomData.getInstance().get_player_count()
		cc.log(count)
	},

	on_event_check_link_game(udata){
		cc.log("on_event_check_link_game" + udata.status)
	},

	on_event_room_info(udata){
		var roominfo = udata.roominfo;
		var playerNum = GameFunction.getStrValue(roominfo,"playerNum")
		var playCount = GameFunction.getStrValue(roominfo,"playCount")
		var isAAPay = GameFunction.getStrValue(roominfo,"isAAPay")
		var baseScore = GameFunction.getStrValue(roominfo,"baseScore")
		cc.log( "hcc>>rule: " , playerNum , playCount , isAAPay , baseScore)
		var rule = ""
		rule = playerNum + "人," + playCount + "局," + baseScore + "分"
		this.set_string(KW_TEXT_RULE,rule);
		RoomData.getInstance().set_game_rule(roominfo)
	},

	on_event_room_id(udata){
		var roomid = udata.roomid;
		RoomData.getInstance().set_room_id(roomid)
		this.set_string(KW_TEXT_ROOM_NUM,"房间号:" + roomid);
	},
	on_event_play_count(udata){
		var playcount = udata.playcount;
		var totalplaycount = udata.totalplaycount;
		this.set_string(KW_TEXT_PLAY_COUNT,"局数:" + playcount + "/" + totalplaycount);
		RoomData.getInstance().set_play_count(playcount)
		RoomData.getInstance().set_total_play_count(totalplaycount)
	},
	on_event_user_arrive_infos(udata){
		var userinfo = udata.userinfo
		for(var i = 0 ;i<userinfo.length;i++){
			var brandid = userinfo[i].brandid;
			var seatid = userinfo[i].seatid;
			var info = userinfo[i];
			RoomData.getInstance().update_player_by_uinfo(info)
		}
		this.update_user_info();
	},

	on_event_user_exit_room(udata){
		var status = udata.status
		if (status == Respones.OK){
			var userinfo = udata.userinfo
			var ishost = userinfo.ishost
			var isoffline = userinfo.isoffline
			var seatid = userinfo.seatid
			if (ishost || isoffline){
				RoomData.getInstance().update_player_by_uinfo(userinfo)
			}else{
				RoomData.getInstance().remove_player_by_uinfo(userinfo)
			}
			this.update_user_info();
		}else{
			cc.log("exit room failed...")
		}
	},

	on_event_user_off_line(udata){
		var info = udata.userinfo
		RoomData.getInstance().update_player_by_uinfo(info)
		this.update_user_info();
	},

	on_event_all_use_state(udata){
		var state = udata.userstate
		for(var index in state){
			var seatid = state[index].seatid
			var userstate = state[index].userstate
			var player = RoomData.getInstance().get_player_by_seatid(seatid)
			var uinfo = player.get_uinfo()
			if (uinfo){
				uinfo.userstate = userstate
				player.set_uinfo(uinfo)
			}
		}
		this.update_user_info();
	},

	on_event_game_start(udata){
		if (udata.status == Respones.OK){
			cc.log("start game...")
		}
	},
	///////////////////////////////// 网络链接
	//网络连接成功
	on_event_net_connect(udata){
		this._connect_count = 0; 
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
		net_mgr.Instance.send_msg(Stype.Logic,Cmd.eExitRoomReq);
		var on_process = function(percent){};
		var on_finished = function(){
			GameApp.Instance.enter_scene(LobbyScene);
		};
		GameApp.Instance.preload_scene(LobbyScene,on_process,on_finished)
	},

	on_click_dessolve(sender){
		net_mgr.Instance.send_msg(Stype.Logic,Cmd.eDessolveReq);
	},

	on_click_ready(sender){
		var msg = {readystate : 1};
		net_mgr.Instance.send_msg(Stype.Logic,Cmd.eUserReadyReq,msg);
	},
	/////////////////////////
	init_UI(){
		UI_manager.show_dialog("DialogGame")
	},

	update_user_info(){
		//serverseat: 1 - 4
		var maxPlayer = GameFunction.getMaxPlayerCount();
		for(var serverSeat = 1; serverSeat <= maxPlayer; serverSeat++){
			var localSeat = GameFunction.serverSeatToLocal(serverSeat)
			cc.log("localseat: " + localSeat)
			var player = RoomData.getInstance().get_player_by_seatid(serverSeat)
			if (player){
				var localInfo = player.get_uinfo();
				cc.log("localInfo: " + JSON.stringify(localInfo));
				this.set_visible(KW_PANEL_USER_INFO + localSeat,true);
				this.set_string(KW_PANEL_USER_INFO + localSeat + "/" +  KW_TEXT_NAME,localInfo.unick);
				this.set_string(KW_PANEL_USER_INFO + localSeat + "/" +  KW_TEXT_SCORE,1000);
				this.set_visible(KW_PANEL_USER_INFO + localSeat + "/" +  KW_IMG_OFFINLE,localInfo.isoffline);
				this.set_visible(KW_PANEL_USER_INFO + localSeat + "/" +  KW_IMG_MASTER,localInfo.ishost);
				this.set_visible(KW_PANEL_USER_INFO + localSeat + "/" +  KW_IMG_READY,localInfo.userstate == 2);
				//self ready
				if (localInfo.seatid == GameFunction.getSelfServerSeat()){
					this.set_visible(KW_BTN_READY,localInfo.userstate < 2 ? true : false)
				}
				//gamestart
				if (localInfo.userstate == 3){
					this.set_visible(KW_BTN_READY, false)
					this.set_visible(KW_PANEL_USER_INFO + localSeat + "/" +  KW_IMG_READY,false);
				}
				var url =  "rectheader/" + (10 + localInfo.uface) + ".png";
				this.load_texture(KW_PANEL_USER_INFO + localSeat + "/" + KW_IMG_HEAD,url);
			}else{
				cc.log("user not exist: " + localSeat)
				this.set_visible(KW_PANEL_USER_INFO + localSeat,false);
			}
		}
	},

    onDestroy(){
        cc.log("GameSceneUI>>destory....")
		this.remove_event_listenner();
		UI_manager.hide_dialog("DialogGame")
		RoomData.getInstance().clear()
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
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eDessolveRes],this,this.on_event_dessolve_box_room)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eUserReadyRes],this,this.on_event_ready)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eCheckLinkGameRes],this,this.on_event_check_link_game)

		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eRoomInfoRes],this,this.on_event_room_info)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eRoomIdRes],this,this.on_event_room_id)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.ePlayCountRes],this,this.on_event_play_count)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eUserArrivedInfos],this,this.on_event_user_arrive_infos)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eExitRoomRes],this,this.on_event_user_exit_room)
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eGameStart],this,this.on_event_game_start)

		/////////////////////
		event_mgr.remove_event_listenner(event_name.net_connect,this,this.on_event_net_connect)
		event_mgr.remove_event_listenner(event_name.net_disconnect,this,this.on_event_net_disconnect)
		event_mgr.remove_event_listenner(event_name.net_connecting,this,this.on_event_net_connecting)
		
	},
});