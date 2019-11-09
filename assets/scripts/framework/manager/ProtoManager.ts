import ProtoTools from '../network/ProtoTools';

class ProtoManater {
    static PROTO_JSON:number = 1;  
    static PROTO_BUF:number = 2;

    // 加密
    static encrypt_cmd(str_of_buf:any) {
        return str_of_buf;
    }

    // 解密
    static decrypt_cmd(str_of_buf:any) {
        return str_of_buf;
    }

    static _protobuf_encode(stype:number, ctype:number, proto_type:number, body:any){
        return ProtoTools.encode_protobuf_cmd(stype, ctype, proto_type, body)
    }

    static _protobuf_decode(cmd_buf:DataView){
        let cmd = ProtoTools.decode_protobuf_cmd(cmd_buf, cmd_buf.byteLength)
        if (!cmd || typeof(cmd.stype)=="undefined" || typeof(cmd.ctype)=="undefined"){
            return null;
        }
        return cmd;
    }

    static _json_encode(stype:number, ctype:number, proto_type:number, body:any) {
        let str = JSON.stringify(body);
        let cmd_buf = ProtoTools.encode_json_cmd(stype, ctype, proto_type,str);
        return cmd_buf;
    }

    static _json_decode(cmd_buf:DataView) {
        let cmd = ProtoTools.decode_json_cmd(cmd_buf, cmd_buf.byteLength);
        let cmd_json = cmd.body;
        if (cmd_json !== null) {
            try {
                cmd.body = JSON.parse(cmd_json);
            }
            catch(e) {
                console.log(e);
                return null;
            }
        }
        
        if (!cmd || typeof(cmd.stype)=="undefined" || typeof(cmd.ctype)=="undefined"){
            return null;
        }
        return cmd;
    } 

    static encode_cmd(stype:number, ctype:number, proto_type:number, body:any) {
        let buf = null;
        let dataview = null;
        if (proto_type == ProtoManater.PROTO_JSON) {
            dataview = ProtoManater._json_encode(stype, ctype, ProtoManater.PROTO_JSON, body);
        }
        else { // buf协议
            dataview = ProtoManater._protobuf_encode(stype, ctype, ProtoManater.PROTO_BUF,body)
        }

        if(!dataview){
            return null
        }
        
        buf = dataview.buffer;
        if (buf) {
            buf = ProtoManater.encrypt_cmd(buf); // 加密	
        }
        return buf;
    }

    static decode_cmd(proto_type:number, str_or_buf:any) {
        let decrypt_buf = ProtoManater.decrypt_cmd(str_or_buf); // 解密
        var dataview = new DataView(decrypt_buf);
        if (dataview.byteLength < ProtoTools.HEADER_SIZE) {
            return null;
        }
        if (proto_type == ProtoManater.PROTO_JSON) {
            return ProtoManater._json_decode(dataview);
        }else{//buf 协议
            return ProtoManater._protobuf_decode(dataview);
        }
    }
}

export default ProtoManater;