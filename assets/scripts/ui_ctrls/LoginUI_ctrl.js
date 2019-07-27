var UI_ctrl = require("UI_ctrl");
var UI_manager = require("UI_manager");
var net_mgr = require("net_mgr")
var game_app = require("game_app");
var Cmd = require("Cmd")

//test
var Stype = {
    Auth: 1,
};

// var Cmd = {
//     LoginReq: 1,
//     LoginRes: 2,
// };


cc.Class({
	extends: UI_ctrl,

	properties: {
	},

	onLoad() {
		UI_ctrl.prototype.onLoad.call(this);
		this.view["version"].getComponent(cc.Label).string = "2.0.0";

		this.add_button_listen("btn_green", this, this.on_start_click);
		//test
		net_mgr.Instance.connect_to_server();
	},

	on_start_click() {
		console.log('hcc>>>>>>');
		var msg = {
			uname:"test1111",
			upwd:"111111",
		}
		var rs = game_app.Instance.get_protobuf_root()
		cc.log(rs)

		net_mgr.Instance.send_msg(Stype.Auth,Cmd.eUnameLoginReq,msg)

		// var proto = "message A {\
		//     required uint32 a = 1;\
		// }\
		// message B {\
		//     required string b = 1;\
		// }";

		// console.log('proto: ' + proto);

  // 		var root = protobuf.parse(proto).root;
  //   	var messageA = root.lookup("A");
  //       var messageB = root.lookup("B");
  //       var msgA = messageA.create({a:1})
  //       var msgB = messageB.create({b:"huangshucheng"})
		// console.log('msgA: ' + msgA + " ,msgB: " + msgB );

		// var bufA = messageA.encode(msgA).finish()
		// var bufB = messageB.encode(msgB).finish()
		// console.log('bufA: ' + bufA + " ,bufB: " + bufB );

		// var decodeA = messageA.decode(new Uint8Array(bufA))
		// var decodeB = messageB.decode(new Uint8Array(bufB))
		// console.log('decodeA: ' + decodeA.a + " ,decodeB: " + decodeB.b );

		console.log('###############################');

		// var protores = "protos/game.proto";
		// cc.loader.loadRes(protores, function (err, protos) {
		//     if (err) {
		//        cc.log("load proto error ==> ", err)
		//         return
		//     }
		    
		// 	console.log('###############################');
		//     // var proto_text = protos.text

		//     cc.log("load proto ==> protos:")
		//     let root = protobuf.parse(protos).root
		//     let rs = root.lookup("GuestLoginReq")

		//     // let msg = rs.create({guest_key:"hccfuck222"})
		//     let msg = rs.create({guestKey:"hccfuck222"})
		//     cc.log("hcc>> " + "msg ", msg)
		    
		//     let buf = rs.encode(msg).finish()
		//    	cc.log("hcc>> " + "buf ", buf)

		//     let decode = rs.decode(new Uint8Array(buf))
		//     cc.log("hcc>> " + "decode ", decode)
		//     cc.log("hcc>> " + "decode json: ",JSON.stringify(decode))
		// })   

		// var rs = game_app.Instance.protobufRoot.lookup("GuestLoginReq")
	 //    let msg = rs.create({guestKey:"hccfuck222"})
	 //    cc.log("hcc>> " + "msg ", msg)
	    
	 //    let buf = rs.encode(msg).finish()
	 //   	cc.log("hcc>> " + "buf ", buf)

	 //    let decode = rs.decode(new Uint8Array(buf))
	 //    cc.log("hcc>> " + "decode ", decode)
	 //    cc.log("hcc>> " + "decode json: ",JSON.stringify(decode))

	},

	start() {
	},

});