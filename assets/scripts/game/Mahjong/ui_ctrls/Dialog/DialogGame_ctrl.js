var UI_ctrl 		= require("UI_ctrl");

var net_mgr 		= require("net_mgr")
var Cmd 			= require("Cmd");
var Stype 			= require("Stype");
var event_mgr 		= require("event_mgr");
var cmd_name_map 	= require("cmd_name_map");
var Respones 		= require("Respones")
var GameFunction 	= require("GameFunction")

var KW_SHOW_NUM_BG  = "KW_SHOW_NUM_BG_"
var KW_SHOW_NUM     = "KW_SHOW_NUM"

var KW_BUTTON_NUM   = 32

cc.Class({
    name:"DialogGame_ctrl",
    extends: UI_ctrl,

    properties: {
    },

    onLoad () {
        UI_ctrl.prototype.onLoad.call(this);
        this.init_UI();
        this.add_net_event_listener();
        this.add_button_event_listener();
        cc.log("DialogGame onload");
    },

    start () {
        cc.log("DialogGame start");
    },

    add_net_event_listener(){
        event_mgr.add_event_listenner(cmd_name_map[Cmd.eGameStart],this,this.on_event_game_start)
        event_mgr.add_event_listenner(cmd_name_map[Cmd.eTouZiNumRes],this,this.on_event_touzi_nums)
        event_mgr.add_event_listenner(cmd_name_map[Cmd.eClickTouZiBombRes],this,this.on_event_bomb_seat)
        event_mgr.add_event_listenner(cmd_name_map[Cmd.eGameResult],this,this.on_event_result)
        event_mgr.add_event_listenner(cmd_name_map[Cmd.eGameTotalResult],this,this.on_event_total_result)
    },

    add_button_event_listener(){
        for(var index = 1 ;index <= KW_BUTTON_NUM ;index++){
            var btnName = KW_SHOW_NUM_BG  + index
            this.add_button_listener(btnName,this,this.on_click_number)
            var btn = this.view[btnName]
            if (btn){
                btn.btnNum = index;
            }
        }
    },

    init_UI(){
        this.node.active = false;
    },

    /////////////////////////
    on_event_game_start(udata){
        var status = udata.status
        if (status == Respones.OK){
            this.node.active = true
        }
    },

    on_event_touzi_nums(udata){
        var nums = udata.touzinums
        var bombs = udata.bombnums
        cc.log("hcc>> nums: " + nums)
        cc.log("hcc>> bombs: " + bombs)
        for(var index = 0 ;index < nums.length ;index++){
            var btnName = KW_SHOW_NUM_BG  + (index + 1)
            var textName = KW_SHOW_NUM_BG  + (index + 1) + "/" + KW_SHOW_NUM
            this.set_visible(btnName , nums[index] != 0)
            this.set_string(textName,nums[index])
            this.view[textName].color = cc.color(0,0,0)
            for(var j = 0;j< bombs.length;j++){
                if(bombs[j] == nums[index]){
                    this.view[textName].color = cc.color(255,0,0)
                }
            }
        }
    },

    on_event_bomb_seat(udata){
        var seatid = udata.seatid;
        cc.log("bombseat: " + seatid)
    },

    on_event_result(udata){
        var scorelist = udata.score
        cc.log("on_event_result: " + scorelist)
        this.scheduleOnce(function(dt){
            this.node.active = false
        }.bind(this),2)
    },

    on_event_total_result(udata){
        var scorelist = udata.score
        cc.log("on_event_total_result: " + scorelist)
    },

    /////////////////////////
    on_click_number(sender){
        var btnNum = sender.node.btnNum
        // sender.node.active = false
        var selfSeat = GameFunction.getSelfServerSeat()
        cc.log("btnNum: " +  btnNum  +" selfSat: " + selfSeat)
        var msg = {
            seatid : selfSeat,
            touzinum : btnNum,
        }
        net_mgr.Instance.send_msg(Stype.Logic,Cmd.eClickTouZiNumReq,msg)
    },

    ////////////////////////
    onDestroy(){
        cc.log("DialogJoinRoom>>destory....")
        this.remove_event_listenner();
    },
    
    remove_event_listenner(){
        event_mgr.remove_event_listenner(cmd_name_map[Cmd.eGameStart],this,this.on_event_game_start)
        event_mgr.remove_event_listenner(cmd_name_map[Cmd.eTouZiNumRes],this,this.on_event_touzi_nums)
        event_mgr.remove_event_listenner(cmd_name_map[Cmd.eClickTouZiBombRes],this,this.on_event_bomb_seat)
        event_mgr.remove_event_listenner(cmd_name_map[Cmd.eGameResult],this,this.on_event_result)
        event_mgr.remove_event_listenner(cmd_name_map[Cmd.eGameTotalResult],this,this.on_event_total_result)
    },
});
