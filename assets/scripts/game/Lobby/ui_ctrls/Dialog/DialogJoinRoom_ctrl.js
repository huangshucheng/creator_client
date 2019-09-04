var UI_ctrl 		= require("UI_ctrl");

var KW_JOIN_ROOM_BG     = "KW_JOIN_ROOM_BG"
var KW_BTN_CLOSE        = "KW_BTN_CLOSE"
var KW_BTN_NUM          = "KW_BTN_NUM_"
var KW_SHOW_NUM_BG      = "KW_SHOW_NUM_BG_"
var KW_SHOW_NUM         = "KW_SHOW_NUM_"
var KW_BTN_DELETE       = "KW_BTN_DELETE"
var KW_BTN_CLEAR        = "KW_BTN_CLEAR"
var KW_PANEL_MASK       = "KW_PANEL_MASK"

var net_mgr 		= require("net_mgr")
var Cmd 			= require("Cmd");
var Stype 			= require("Stype");
var event_mgr 		= require("event_mgr");
var cmd_name_map 	= require("cmd_name_map");
var Respones 		= require("Respones")

var KW_TOTAL_ROOM_NUM_COUNT = 6

cc.Class({
    name:"DialogJoinRoom_ctrl",
    extends: UI_ctrl,

    properties: {
        _text_index : 1,
    },

    onLoad () {
        UI_ctrl.prototype.onLoad.call(this);
        this.init_UI();
        this.add_net_event_listener();
        this.add_button_event_listener();
        cc.log("DialogJoinRoom onload");
    },

    start () {
        cc.log("DialogJoinRoom start");
    },

    add_net_event_listener(){
        event_mgr.add_event_listenner(cmd_name_map[Cmd.eJoinRoomRes],this,this.on_event_join_box_room)
    },

    add_button_event_listener(){
        this.add_button_listener(KW_JOIN_ROOM_BG + '/' + KW_BTN_CLOSE, this, this.on_click_close);
        this.add_button_listener(KW_PANEL_MASK, this, this.on_click_close); //TODO
        this.add_button_listener(KW_JOIN_ROOM_BG + '/' + KW_BTN_CLEAR, this, this.on_click_clear);
        this.add_button_listener(KW_JOIN_ROOM_BG + '/' + KW_BTN_DELETE, this, this.on_click_delete);
        for(var index = 0 ;index <= 9 ;index++){
            var btnName = KW_JOIN_ROOM_BG + "/" + KW_BTN_NUM + index
            this.add_button_listener(btnName,this,this.on_click_number)
            var btn = this.view[btnName]
            if (btn){
                btn.btnNum = index;
            }
        }
    },

    init_UI(){
        for (var index = 1 ;index <= KW_TOTAL_ROOM_NUM_COUNT; index ++){
            var numName = KW_JOIN_ROOM_BG + "/" +  KW_SHOW_NUM_BG + index + "/" + KW_SHOW_NUM + index
            this.set_string(numName,"");
        }
    },

    on_event_join_box_room(udata){
        var status = udata.status
		if (status == Respones.OK){
            this.node.destroy()
		}
    },

    /////////////////////////
    on_click_close(sender){
        this.node.destroy()
    },

    on_click_clear(sender){
        for (var index = 1 ;index <= KW_TOTAL_ROOM_NUM_COUNT; index ++){
            var numName = KW_JOIN_ROOM_BG + "/" +  KW_SHOW_NUM_BG + index + "/" + KW_SHOW_NUM + index
            this.set_string(numName,"");
        }
        this._text_index = 1
    },

    on_click_delete(sender){
        for (var index = KW_TOTAL_ROOM_NUM_COUNT ;index >=1 ; index --){
            var numName = KW_JOIN_ROOM_BG + "/" +  KW_SHOW_NUM_BG + index + "/" + KW_SHOW_NUM + index
            var str = this.get_string(numName)
            if (str != ""){
                this.set_string(numName,"")
                this._text_index = index;
                break;
            }
        }
    },

    on_click_number(sender){
        var btnNum = sender.node.btnNum
        cc.log("btnNum: " +  btnNum)
        var numName = KW_JOIN_ROOM_BG + "/" +  KW_SHOW_NUM_BG + this._text_index + "/" + KW_SHOW_NUM + this._text_index
        this.set_string(numName , btnNum)

        if(this._text_index == KW_TOTAL_ROOM_NUM_COUNT){
            var roomid = ""
            for (var index = 1 ;index <= KW_TOTAL_ROOM_NUM_COUNT; index ++){
                var numName = KW_JOIN_ROOM_BG + "/" +  KW_SHOW_NUM_BG + index + "/" + KW_SHOW_NUM + index
                var num = this.get_string(numName)
                roomid = roomid + num;
            }
            var msg = {
                roomid : roomid,
            }
            net_mgr.Instance.send_msg(Stype.Logic,Cmd.eJoinRoomReq,msg)
        }
        this._text_index += 1;
    },
    ////////////////////////
    onDestroy(){
        this.remove_event_listenner();
    },
    
    remove_event_listenner(){
        event_mgr.remove_event_listenner(cmd_name_map[Cmd.eJoinRoomRes],this,this.on_event_join_box_room)
    },

    // update (dt) {},
});
