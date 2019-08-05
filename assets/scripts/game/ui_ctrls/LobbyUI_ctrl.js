var UI_ctrl 		= require("UI_ctrl");
var net_mgr 		= require("net_mgr")
var GameApp 		= require("../game/managers/network/node_modules/GameApp");
var Cmd 			= require("../game/managers/node_modules/Cmd");
var cmd_name_map 	= require("../game/managers/node_modules/cmd_name_map");
var Stype 			= require("../game/managers/node_modules/Stype");
var Respones 		= require("Respones")
var LoginScene      = require("LoginScene");
var event_mgr 		= require("event_mgr");
var event_name 		= require("../game/managers/node_modules/event_name");
var LocalStorageName = require("LocalStorageName")

var KW_BTN_SET 		    	= "KW_LOBBY_TOP_BG/KW_BTN_SET"
var KW_BTN_LOGIN_LOGIC 		= "KW_LOBBY_TOP_BG/KW_BTN_LOGIN_LOGIC"
var KW_TEXT_VERSION 		= "KW_TEXT_VERSION"
var KW_TEXT_NET_STATUS 		= "KW_TEXT_NET_STATUS"

var IMG_HEAD 				= "KW_LOBBY_TOP_BG/IMG_USER_INFO_BG/IMG_HEAD"
var TEXT_USER_NAME 			= "KW_LOBBY_TOP_BG/IMG_USER_INFO_BG/TEXT_USER_NAME"
var TEXT_USER_ID 			= "KW_LOBBY_TOP_BG/IMG_USER_INFO_BG/TEXT_USER_ID"
var TEXT_COIN 				= "KW_LOBBY_TOP_BG/IMG_COIN_BG/TEXT_COIN"
var TEXT_DIAMOND 				= "KW_LOBBY_TOP_BG/IMG_DIAMOND_BG/TEXT_DIAMOND"

cc.Class({
	extends: UI_ctrl,

	properties: {
		_connect_count : 0,
	},

	onLoad() {
		UI_ctrl.prototype.onLoad.call(this);
        this.view[KW_TEXT_VERSION].getComponent(cc.Label).string = "3.0.0"; // test

        this.add_net_event_listener();
        this.add_button_event_listener();
    },
    
	start() {
		
		this.init_UI();
	},

    add_net_event_listener(){
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eHeartBeatRes],this,this.on_event_heartbeat)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eLoginOutRes],this,this.on_event_login_out)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eGuestLoginRes],this,this.on_event_guest_login)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eUnameLoginRes],this,this.on_event_uname_login)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eRelogin],this,this.on_event_relogin)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eLoginLogicRes],this,this.on_event_login_logic)
		event_mgr.add_event_listenner(cmd_name_map[Cmd.eGetUgameInfoRes],this,this.on_event_ugame_info)
		///////////////////////
		event_mgr.add_event_listenner(event_name.net_connect,this,this.on_event_net_connect)
		event_mgr.add_event_listenner(event_name.net_disconnect,this,this.on_event_net_disconnect)
		event_mgr.add_event_listenner(event_name.net_connecting, this,this.on_event_net_connecting);
    },

    add_button_event_listener(){
        this.add_button_listener(KW_BTN_SET, this, this.on_set_click_event);
        this.add_button_listener(KW_BTN_LOGIN_LOGIC, this, this.on_set_click_login_logic);
    },
	/////////////////////////网络事件
	on_event_heartbeat(udata){
        cc.log('lobbyUI: on_event_heartbeat')
		if(udata.status == 1){
			net_mgr.Instance.send_msg(Stype.Logic,Cmd.eHeartBeatReq,null)
		}
	},

	on_event_login_out(udata){
		if(udata.status == Respones.OK){
			var self = this
			var on_process = function(percent){
				//self.view[KW_TEXT_VERSION].getComponent(cc.Label).string = "loading: " + percent * 100 + "%"
			};
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
			}
		}
	},
	//玩家登录
	on_event_uname_login(udata){
		console.log('on_event_uname_login ' + udata);
		if(udata.status === Respones.OK){
			if(udata.uinfo){
				cc.sys.localStorage.setItem(LocalStorageName.user_info_self,JSON.stringify(udata.uinfo));
			}
		}else{
			this.view[KW_TEXT_NET_STATUS].getComponent(cc.Label).string = "账号或密码错误";
		}
	},

	on_event_relogin(udata){
		var on_process = function(percent){};
		var on_finished = function(){
			GameApp.Instance.enter_scene(LoginScene);
		};
		GameApp.Instance.preload_scene(LoginScene,on_process,on_finished)
	},

	on_event_login_logic(udata){
		if(udata.status == Respones.OK){
			cc.log("on_event_login_logic>> OK")			
		}
	},	

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

	on_event_ugame_info(udata){
		var uchip = udata.uinfo.uchip;
		var uchip2 = udata.uinfo.uchip2;
		this.view[TEXT_COIN].getComponent(cc.Label).string = String(uchip);
		this.view[TEXT_DIAMOND].getComponent(cc.Label).string = String(uchip2);
	},
	//断开连接
	on_event_net_disconnect(udata){
		this._connect_count += 1; 
		this.view[KW_TEXT_NET_STATUS].getComponent(cc.Label).string = "连接失败: " + udata + " ," + this._connect_count
	},
	//正在连接
	on_event_net_connecting(udata){
		this._connect_count += 1; 
		this.view[KW_TEXT_NET_STATUS].getComponent(cc.Label).string = "正在连接.... " + this._connect_count;
	},
    ///////////////////////// button 事件
    on_set_click_event(sender){
		net_mgr.Instance.send_msg(Stype.Auth,Cmd.eLoginOutReq)
	},
	
	on_set_click_login_logic(sender){
		// net_mgr.Instance.send_msg(Stype.Logic,Cmd.eLoginLogicReq)
		net_mgr.Instance.send_msg(Stype.System,Cmd.eGetUgameInfoReq)
		/////test
		// var proto_file_path = "protos/test.proto";
		// cc.loader.loadRes(proto_file_path, function (err, protos) {
		//     if (err) {
		//        console.log("load proto error ==> ", err)
		//         return
		//     }
		//     var root = protobuf.parse(protos).root
		//     //TEST
		// 	var rs = root.lookup("UserGameInfo")
		// 	var msg_tb = {
		// 		 uchip : 1000,
		// 		 uexp : 2000,
		// 		 uvip : 3000,
		// 		 uchip2 : 4,
		// 		 uchip3 : 5,
		// 		 udata1 : 6,
		// 		 udata2 : 7,
		// 		 udata3 : 8,
		// 		 bonuesstatus : 9,
		// 		 bonues : 10,
		// 		 days : 11,
		// 	}
		//     var msg = rs.create(msg_tb)
		//     cc.log("hcc>> " + "msg ", msg)
		//     var buf = rs.encode(msg).finish()
		//    	cc.log("hcc>> " + "buf ", buf)
		//     var decode = rs.decode(new Uint8Array(buf))
		//     cc.log("hcc>> " + "decode ", decode)
		//     cc.log("hcc>> " + "decode json: ",JSON.stringify(decode))
		// });
	},
	/////////////////////////
	init_UI(){
		var uinfo = JSON.parse(cc.sys.localStorage.getItem(LocalStorageName.user_info_self)); 
		this.view[TEXT_USER_NAME].getComponent(cc.Label).string	= uinfo.unick;
		this.view[TEXT_USER_ID].getComponent(cc.Label).string = uinfo.brandid;

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
		event_mgr.remove_event_listenner(cmd_name_map[Cmd.eGetUgameInfoRes],this,this.on_event_ugame_info)
		
		event_mgr.remove_event_listenner(event_name.net_connect,this,this.on_event_net_connect)
		event_mgr.remove_event_listenner(event_name.net_disconnect,this,this.on_event_net_disconnect)
		event_mgr.remove_event_listenner(event_name.net_connecting,this,this.on_event_net_connecting)
		
	},
});