var ProtoCmd 	= require("ProtoCmd")
var protobufMsg = require("protobufMsg")
console.log("hcc>>tool>>protobufMsg: " , protobufMsg)

// cmd_buf dataview
function read_int8(cmd_buf, offset) {
	return cmd_buf.getInt8(offset);
}

function write_int8(cmd_buf, offset, value) {
	cmd_buf.setInt8(offset, value);
}

function read_uint8(cmd_buf,offset){
	return cmd_buf.getUint8(offset)
}

function write_uint8(cmd_buf, offset, value){
	cmd_buf.setUint8(offset,value)
}

function read_int16(cmd_buf, offset) {
	return cmd_buf.getInt16(offset, true);
}

function write_int16(cmd_buf, offset, value) {
	cmd_buf.setInt16(offset, value, true);
}

function read_int32(cmd_buf, offset) {
	return cmd_buf.getInt32(offset, true);
}

function write_int32(cmd_buf, offset, value) {
	cmd_buf.setInt32(offset, value, true);
}

function read_uint32(cmd_buf, offset) {
	return cmd_buf.getUint32(offset, true);
}

function write_uint32(cmd_buf, offset, value) {
	cmd_buf.setUint32(offset, value, true);
}

function read_str(cmd_buf, offset, byte_len) {
	return cmd_buf.read_utf8(offset, byte_len);
}

function write_str(cmd_buf, offset, str) {
	cmd_buf.write_utf8(offset, str);
}

function write_uint8_array(cmd_buf, offset, uint8array){
	cmd_buf.write_uint8_array(offset, uint8array)
}

function read_uint8_array(cmd_buf, offset, byte_len){
	return cmd_buf.read_uint8_array(offset,byte_len)
}

function read_float(cmd_buf, offset) {
	return cmd_buf.getFloat32(offset, true);
}

function write_float(cmd_buf, offset, value) {
	cmd_buf.setFloat32(offset, value, true);
}

var string_to_uint8_array = function(bstr){
    var len = bstr.length
    var uint8_array = new Uint8Array();
    for(var i = 0; i < len; i++){
        uint8_array[i] = bstr.charCodeAt(i);
    }
    return uint8_array;
}

var uint8_array_to_string = function(arr){
    var str = new String();
    for(var i = 0; i< arr.length; i++){
        str += String.fromCharCode(arr[i]);
    }
    return str;
}

function alloc_buffer(total_len) {
	var buf = new ArrayBuffer(total_len);
	var dataview = new DataView(buf);
	return dataview;
}

function write_cmd_header_inbuf(cmd_buf, stype, ctype, proto_type) {
	write_int16(cmd_buf, 0, stype);
	write_int16(cmd_buf, 2, ctype);
	write_uint32(cmd_buf, 4, 0);
	write_int16(cmd_buf, 8, proto_type);
	return proto_tools.header_size;
}

function encode_json_cmd(stype, ctype, proto_type, str) {
	var byte_len = str.utf8_byte_len();
	var total_len = proto_tools.header_size + byte_len;
	var cmd_buf = alloc_buffer(total_len);
	var offset = write_cmd_header_inbuf(cmd_buf, stype, ctype, proto_type);
	write_str(cmd_buf, offset, str);
	return cmd_buf;
}

function decode_json_cmd(cmd_buf, buf_len) {
	var cmd = {};
	cmd.stype = read_int16(cmd_buf, 0);
	cmd.ctype = read_int16(cmd_buf, 2);
	cmd.utag  = read_int32(cmd_buf, 4);
	cmd.proto_type = read_int16(cmd_buf, 8);
	if (buf_len > proto_tools.header_size) {
		cmd.body = read_str(cmd_buf, proto_tools.header_size, buf_len - proto_tools.header_size);
	}
	return cmd;
}

//解码protobuf
function decode_protobuf_cmd(cmd_buf, buf_len){
	var cmd = {};
	cmd.stype 		= read_int16(cmd_buf, 0);
	cmd.ctype 		= read_int16(cmd_buf, 2);
	cmd.utag 		= read_int32(cmd_buf, 4);
	cmd.proto_type 	= read_int16(cmd_buf,8)
	if (buf_len > proto_tools.header_size) {
		var bodyBuf 	= read_uint8_array(cmd_buf, proto_tools.header_size, buf_len - proto_tools.header_size);
		var styp_name 	= ProtoCmd.default.getProtoName(cmd.stype)
		var cmd_name 	= ProtoCmd.default.getCmdName(cmd.stype, cmd.ctype)
		if (!styp_name || !cmd_name){
			cc.error("msgType stype_name or cmd_name null");
			return cmd;
		}

		if (!protobufMsg[styp_name]) {
			cc.error("msgType stype_name null");
			return cmd;
		}

		let msgType = protobufMsg[styp_name][cmd_name]
		if(!msgType){
			cc.error("msgType is null");
			return cmd;
		}

		let error = msgType.verify(bodyBuf)
		if(error){
			cc.error(error)
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

/*
stype: int 服务号
ctype: int 命令号
body: 表对象转成的string对象,和protobuf对应，如：
{
	guestKey:"hcc"
}
 */
function encode_protobuf_cmd(stype, ctype, proto_type, body){
	var styp_name 	= ProtoCmd.default.getProtoName(stype)
	var cmd_name 	= ProtoCmd.default.getCmdName(stype, ctype)
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

	let error = msgType.verify(body)
	if(error){
		cc.error("encode_protobuf error: ", error);
		return null;
	}

	var message = msgType.create(body)
	if (message){
		try {
			var emcode_msg 	= msgType.encode(message).finish()// uint8_array_buf: {Uint8Array}
			var byte_len 	= emcode_msg.byteLength;
			var total_len 	= proto_tools.header_size + byte_len;
			var cmd_buf 	= alloc_buffer(total_len);
			var offset 		= write_cmd_header_inbuf(cmd_buf, stype, ctype, proto_type);
			write_uint8_array(cmd_buf, offset, emcode_msg);
			//test
			// var decode_cmd = decode_protobuf_cmd(cmd_buf,cmd_buf.byteLength)
			return cmd_buf;
		} catch (error) {
			cc.error(error)
		}
	}
}

var proto_tools = {
	header_size: 10,
	
	read_int8: read_int8,
	write_int8: write_int8,

	read_int16: read_int16,
	write_int16, write_int16,

	read_int32: read_int32,
	write_int32, write_int32,

	read_uint32: read_uint32,
	write_uint32: write_uint32,

	read_float: read_float,
	write_float: write_float,

	alloc_buffer: alloc_buffer,

	encode_json_cmd: encode_json_cmd,
	decode_json_cmd: decode_json_cmd,

	encode_protobuf_cmd: encode_protobuf_cmd,
	decode_protobuf_cmd: decode_protobuf_cmd,
};

module.exports = proto_tools;