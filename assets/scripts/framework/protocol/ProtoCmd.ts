import * as AuthProto from "./protofile/AuthProto"
import * as SystemProto from "./protofile/SystemProto"
import * as GameHoodleProto from "./protofile/GameHoodleProto"
import { Stype, StypeName } from './Stype';

let protoFilePath = "./protofileMsg/"

class ProtoCmd {
	
	//服务器下标->协议脚本
	  static StypeProtos:any = {
		  [Stype.Auth]: AuthProto,
		  [Stype.GameSystem]: SystemProto,
		  [Stype.GameHoodle] : GameHoodleProto,
	}
	
	//命名空间
	static getProtoName(stype: number){
		if(ProtoCmd.StypeProtos[stype]){
			return ProtoCmd.StypeProtos[stype].protoName
		}
	}
	
	//字段名称
	static getCmdName(stype:number, ctype:number){
		if(ProtoCmd.StypeProtos[stype]){
			return ProtoCmd.StypeProtos[stype].CmdName[ctype]
		}
	}

	//获取xxxproto.js文件对象
	static getProtoFileObj(stype:number){
		if (ProtoCmd.StypeProtos[stype]) {
			let protoNameMsg = ProtoCmd.StypeProtos[stype].protoNameMsg;
			if (protoNameMsg){
				try {
					return require(protoNameMsg); //creator 客户端不用带路径，node.js需要带路径
				} catch (error) {
					console.log(error)
				}
			}
		}
		return null;
	}


	//获取protobuf字段
	static getProtoMsg(stype:number, ctype:number){
		let proto_file_obj = ProtoCmd.getProtoFileObj(stype);
		if (!proto_file_obj){
			console.warn("getProtoMsg proto_file_obj is null");
			return;
		}

		let proto_name = ProtoCmd.getProtoName(stype);
		let cmd_name = ProtoCmd.getCmdName(stype, ctype);

		if (!proto_name || !cmd_name){
			console.warn("getProtoMsg stype:", stype , " or ctype:" , ctype , " is null");
			return;
		}

		let proto_namespace = proto_file_obj[proto_name];
		if (!proto_namespace){
			console.warn("getProtoMsg stype:", proto_name , "is null");
			return;
		}
		let proto_msg = proto_namespace[cmd_name];
		if (!proto_msg){
			console.warn("getProtoMsg cmd:", cmd_name, "is null");
			return;
		}
		return proto_msg;
	}
}

export default ProtoCmd;

