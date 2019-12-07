import * as TalkRoom from "./TalkProto"
import * as Auth from "./AuthProto"
import * as GameSystem from "./SystemProto"
import * as GameHoodleProto from "./GameHoodleProto"
import { Stype, StypeName } from './Stype';

class ProtoCmd {
	//服务器下标->协议脚本
	  static StypeProtos:any = {
		  [Stype.Auth] : Auth,
		  [Stype.GameSystem] : GameSystem,
		  [Stype.GameHoodle] : GameHoodleProto,
		  [Stype.TalkRoom] : TalkRoom,
	}
	
	//命名空间
	static getProtoName(stype: number):any{
		if(ProtoCmd.StypeProtos[stype]){
			return ProtoCmd.StypeProtos[stype].protoName
		}
		return null;
	}
	//字段名称
	static getCmdName(stype:number, ctype:number):any{
		if(ProtoCmd.StypeProtos[stype]){
			return ProtoCmd.StypeProtos[stype].CmdName[ctype]
		}
		return null;
	}
}

export default ProtoCmd;

