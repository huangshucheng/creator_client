import StringUtil from '../utils/StringUtil';
import DataViewUtil from '../utils/DataViewUtil';
import ProtoCmd from '../protocol/ProtoCmd';

let protobufMsg = require("../protocol/protobufMsg")

class ProtoTools {
    static HEADER_SIZE: number = 10;

    static alloc_buffer(total_len:number):DataView {
        let buf = new ArrayBuffer(total_len);
        let dataview = new DataView(buf);
        return dataview;
    }

    static read_int8(cmd_buf:DataView, offset:number) {
        return cmd_buf.getInt8(offset);
    }
    
    static write_int8(cmd_buf:DataView, offset:number, value:number) {
         cmd_buf.setInt8(offset, value);
    }
    
    static read_uint8(cmd_buf:DataView,offset:number){
        return cmd_buf.getUint8(offset)
    }
    
    static write_uint8(cmd_buf:DataView, offset:number, value:number){
        cmd_buf.setUint8(offset,value)
    }
    
    static read_int16(cmd_buf:DataView, offset:number) {
        return cmd_buf.getInt16(offset, true);
    }
    
    static write_int16(cmd_buf:DataView, offset:number, value:number) {
        cmd_buf.setInt16(offset, value, true);
    }
    
    static read_int32(cmd_buf:DataView, offset:number) {
        return cmd_buf.getInt32(offset, true);
    }
    
    static write_int32(cmd_buf:DataView, offset:number, value:number) {
        cmd_buf.setInt32(offset, value, true);
    }
    
    static read_uint32(cmd_buf:DataView, offset:number) {
        return cmd_buf.getUint32(offset, true);
    }
    
    static write_uint32(cmd_buf:DataView, offset:number, value:number) {
        cmd_buf.setUint32(offset, value, true);
    }
    
    static read_str(cmd_buf:DataView, offset:number, byte_len:number) {
        return DataViewUtil.read_utf8(cmd_buf,offset,byte_len);
    }
    
    static write_str(cmd_buf:DataView, offset:number, str:string) {
        DataViewUtil.write_utf8(cmd_buf,offset,str);
    }
    
    static write_uint8_array(cmd_buf:DataView, offset:number, uint8array:Uint8Array){
        DataViewUtil.write_uint8_array(cmd_buf,offset,uint8array);
    }
    
    static read_uint8_array(cmd_buf:DataView, offset:number, byte_len:number){
        return DataViewUtil.read_uint8_array(cmd_buf,offset,byte_len);
    }
    
    static read_float(cmd_buf:DataView, offset:number) {
        return cmd_buf.getFloat32(offset, true);
    }
    
    static write_float(cmd_buf:DataView, offset:number, value:number) {
        cmd_buf.setFloat32(offset, value, true);
    }
    
    static string_to_uint8_array(bstr:string){
        let len = bstr.length
        let uint8_array = new Uint8Array(len);
        for(let i = 0; i < len; i++){
            uint8_array[i] = bstr.charCodeAt(i);
        }
        return uint8_array;
    }
    
    static uint8_array_to_string(arr:Uint8Array){
        let str = new String();
        for(let i = 0; i< arr.length; i++){
            str += String.fromCharCode(arr[i]);
        }
        return str;
    }

    static write_cmd_header_inbuf(cmd_buf:DataView, stype:number, ctype:number, proto_type:number) {
        ProtoTools.write_int16(cmd_buf, 0, stype);
        ProtoTools.write_int16(cmd_buf, 2, ctype);
        ProtoTools.write_uint32(cmd_buf, 4, 0);
        ProtoTools.write_int16(cmd_buf, 8, proto_type);
        return ProtoTools.HEADER_SIZE;
    }
    
    static encode_json_cmd(stype:number, ctype:number, proto_type:number, str:string) {
        let byte_len = StringUtil.utf8_byte_len(str);
        let total_len = ProtoTools.HEADER_SIZE + byte_len;
        let cmd_buf = ProtoTools.alloc_buffer(total_len);
        let offset = ProtoTools.write_cmd_header_inbuf(cmd_buf, stype, ctype, proto_type);
        ProtoTools.write_str(cmd_buf, offset, str);
        return cmd_buf;
    }
    
    static decode_json_cmd(cmd_buf:DataView, buf_len:number) {
        let cmd:any = {};
        cmd.stype = ProtoTools.read_int16(cmd_buf, 0);
        cmd.ctype = ProtoTools.read_int16(cmd_buf, 2);
        cmd.utag  = ProtoTools.read_int32(cmd_buf, 4);
        cmd.proto_type = ProtoTools.read_int16(cmd_buf, 8);
        if (buf_len > ProtoTools.HEADER_SIZE) {
            cmd.body = ProtoTools.read_str(cmd_buf, ProtoTools.HEADER_SIZE, buf_len - ProtoTools.HEADER_SIZE);
        }
        return cmd;
    }

    //解码protobuf
    static decode_protobuf_cmd(cmd_buf:DataView, buf_len:number){
        let cmd:any = {};
        cmd.stype 		= ProtoTools.read_int16(cmd_buf, 0);
        cmd.ctype 		= ProtoTools.read_int16(cmd_buf, 2);
        cmd.utag 		= ProtoTools.read_int32(cmd_buf, 4);
        cmd.proto_type 	= ProtoTools.read_int16(cmd_buf,8)
        if (buf_len > ProtoTools.HEADER_SIZE) {
            let bodyBuf 	= ProtoTools.read_uint8_array(cmd_buf, ProtoTools.HEADER_SIZE, buf_len - ProtoTools.HEADER_SIZE);
            let styp_name 	= ProtoCmd.getProtoName(cmd.stype)
            let cmd_name 	= ProtoCmd.getCmdName(cmd.stype, cmd.ctype)
            if (!styp_name || !cmd_name){
                cc.error("decode_protobuf stype_name or cmd_name null");
                return cmd;
            }

            if (!protobufMsg[styp_name]) {
                cc.error("decode_protobuf stype_name null");
                return cmd;
            }

            let msgType = protobufMsg[styp_name][cmd_name]
            if(!msgType){
                cc.error("decode_protobuf msgType is null");
                return cmd;
            }
            let decodeMsg = null;
            try {
                decodeMsg = msgType.decode(new Uint8Array(bodyBuf))
            }
            catch(e) {
                cc.error(e)
                return cmd;
            }
            cmd.body = decodeMsg;
        }
        return cmd;
    }

    static encode_protobuf_cmd(stype:number, ctype:number, proto_type:number, body:any){
        let styp_name 	= ProtoCmd.getProtoName(stype)
        let cmd_name 	= ProtoCmd.getCmdName(stype, ctype)
        if (!styp_name || !cmd_name){
            cc.error("encode_protobuf stype_name or cmd_name null");
            return null;
        }
        
        if (!protobufMsg[styp_name]) {
            cc.error("encode_protobuf stype_name null");
            return null;
        }

        let msgType = protobufMsg[styp_name][cmd_name]
        if(!msgType){
            cc.error("encode_protobuf msgType is null");
            return null;
        }

        if(!body){
            body = {}
        }

        let error = msgType.verify(body)
        if(error){
            cc.error("encode_protobuf error: ", error);
            return null;
        }

        let message = msgType.create(body)
        if (message){
            try {
                let emcode_msg 	= msgType.encode(message).finish()// uint8_array_buf: {Uint8Array}
                let byte_len 	= emcode_msg.byteLength;
                let total_len 	= ProtoTools.HEADER_SIZE + byte_len;
                let cmd_buf 	= ProtoTools.alloc_buffer(total_len);
                let offset 		= ProtoTools.write_cmd_header_inbuf(cmd_buf, stype, ctype, proto_type);
                ProtoTools.write_uint8_array(cmd_buf, offset, emcode_msg);
                return cmd_buf;
            } catch (error) {
                cc.error(error)
            }
        }
    }

}

export default ProtoTools;