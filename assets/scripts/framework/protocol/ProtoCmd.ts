import LobbyProto from './protofile/LobbyProto';
import AuthProto from './protofile/AuthProto';
import Stype from './Stype';
import SystemProto from './protofile/SystemProto';
import GameHoodleProto from './protofile/GameHoodleProto';

let protoFilePath = "./protofileMsg/"

class ProtoCmd {
	
	//服务器下标->协议脚本
	  static StypeProtos = {
		  [Stype.S_TYPE.Auth]: AuthProto,
		  [Stype.S_TYPE.System]: SystemProto,
		  [Stype.S_TYPE.GameHoodle] : GameHoodleProto,
		  [Stype.S_TYPE.Lobby]: LobbyProto,
	}
	
	//命名空间
	static getProtoName(stype: number){
		if(ProtoCmd.StypeProtos[stype]){
			return ProtoCmd.StypeProtos[stype].protoNameSpace;
		}
	}
	
	//字段名称
	static getCmdName(stype:number, ctype:number){
		if(ProtoCmd.StypeProtos[stype]){
			return ProtoCmd.StypeProtos[stype].XY_NAME[ctype];
		}
	}

	//获取xxxproto.js文件对象
	static getProtoFileObj(stype:number){
		if (ProtoCmd.StypeProtos[stype]) {
			let protoFileName = ProtoCmd.StypeProtos[stype].protoFileName;
			if (protoFileName){
				try {
					let proto_js_file = require(protoFileName); //creator 客户端不用带路径，node.js需要带路径
					return proto_js_file;
				} catch (error) {
					console.error(error);				
				}
			}
		}
	}

	//获取protobuf字段
	static getProtoMsg(stype:number, ctype:number){
		let proto_file_obj = ProtoCmd.getProtoFileObj(stype);
		if (!proto_file_obj){
			console.warn("getProtoMsg proto_file_obj is null,111");
			return;
		}

		let proto_namespace = ProtoCmd.getProtoName(stype);
		let cmd_name = ProtoCmd.getCmdName(stype, ctype);

		if (!proto_namespace || !cmd_name){
			console.warn("getProtoMsg stype:", stype , " or ctype:" , ctype , " is null,222");
			return;
		}

		let result_obj = proto_file_obj;
		if(proto_namespace.indexOf(".") > 0){
			let splitStr = proto_namespace.split(".");
			splitStr.forEach(value => {
				result_obj = result_obj[value];
				if (!result_obj){
					console.warn("getProtoMsg: " , value , "is null,333")
					return;
				}
			});
		}else{
			result_obj = result_obj[proto_namespace];
		}

		if (!result_obj) {
			console.warn("getProtoMsg cmd:", proto_namespace, "is null,444");
			return;
		}

		let proto_msg = result_obj[cmd_name];
		if (!proto_msg){
			console.warn("getProtoMsg cmd:", cmd_name, "is null,555");
			return;
		}
		return proto_msg;
	}
}

export default ProtoCmd;

