var Cmd = require("Cmd")
var cmd_name_map = require("cmd_name_map")
// cmd_buf dataview
function read_int8(cmd_buf, offset) {
	// return cmd_buf.readInt8(offset);
	return cmd_buf.getInt8(offset);
}

function write_int8(cmd_buf, offset, value) {
	// cmd_buf.writeInt8(value, offset);
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
	// cmd_buf.writeInt16LE(value, offset);
	cmd_buf.setInt16(offset, value, true);
}

function read_int32(cmd_buf, offset) {
	// return cmd_buf.readInt32LE(offset);
	return cmd_buf.getInt32(offset, true);
}

function write_int32(cmd_buf, offset, value) {
	// cmd_buf.writeInt32LE(value, offset);
	cmd_buf.setInt32(offset, value, true);
}

function read_uint32(cmd_buf, offset) {
	return cmd_buf.getUint32(offset, true);
}

function write_uint32(cmd_buf, offset, value) {
	cmd_buf.setUint32(offset, value, true);
}

function read_str(cmd_buf, offset, byte_len) {
	// return cmd_buf.toString("utf8", offset, offset + byte_len);
	return cmd_buf.read_utf8(offset, byte_len);
}

function write_str(cmd_buf, offset, str) {
	// cmd_buf.write(str, offset);
	cmd_buf.write_utf8(offset, str);
}

function write_uint8_array(cmd_buf, offset, uint8array){
	cmd_buf.write_uint8_array(offset, uint8array)
}

function read_uint8_array(cmd_buf, offset, byte_len){
	return cmd_buf.read_uint8_array(offset,byte_len)
}

function read_float(cmd_buf, offset) {
	// return cmd_buf.readFloatLE(offset);
	return cmd_buf.getFloat32(offset, true);
}

function write_float(cmd_buf, offset, value) {
	// cmd_buf.writeFloatLE(value, offset);
	cmd_buf.setFloat32(offset, value, true);
}

function alloc_buffer(total_len) {
	// return Buffer.allocUnsafe(total_len);
	var buf = new ArrayBuffer(total_len);
	var dataview = new DataView(buf);

	return dataview;
}

function write_cmd_header_inbuf(cmd_buf, stype, ctype) {
	write_int16(cmd_buf, 0, stype);
	write_int16(cmd_buf, 2, ctype);
	write_uint32(cmd_buf, 4, 0);
	return proto_tools.header_size;
}

function encode_json_cmd(stype, ctype, str) {
	var byte_len = str.utf8_byte_len();
	var total_len = proto_tools.header_size + byte_len;
	var cmd_buf = alloc_buffer(total_len);

	var offset = write_cmd_header_inbuf(cmd_buf, stype, ctype);
	write_str(cmd_buf, offset, str);

	return cmd_buf;
}

function decode_json_cmd(cmd_buf, buf_len) {
	var cmd = {};
	cmd.stype = read_int16(cmd_buf, 0);
	cmd.ctype = read_int16(cmd_buf, 2);
	cmd.utag  = read_int32(cmd_buf, 4);
	if (buf_len > proto_tools.header_size) {
		cmd.body = read_str(cmd_buf, proto_tools.header_size, buf_len - proto_tools.header_size);
	}
	return cmd;
}
/*
stype: int 服务号
ctype: int 命令号
str: 表对象转成的string对象,和protobuf对应，如：
{
	guestKey:"hcc"
}
 */
function encode_protobuf_cmd(stype, ctype, body){
	if (cmd_name_map[ctype] == null){
		return null
	}
	var game_app = require("game_app");
	var rs = game_app.Instance.get_protobuf_root().lookup(cmd_name_map[ctype])
	var msg = rs.create(body)
	var uint8_array_buf = rs.encode(msg).finish()// buf: {Uint8Array}

	///////////
	var byte_len 	= uint8_array_buf.length;
	var total_len 	= proto_tools.header_size + byte_len;
	var cmd_buf 	= alloc_buffer(total_len);

	var offset = write_cmd_header_inbuf(cmd_buf, stype, ctype);
	// write_str(cmd_buf, offset, buf);
	write_uint8_array(cmd_buf, offset, uint8_array_buf);
	return cmd_buf;
}

function decode_protobuf_cmd(cmd_buf, buf_len){
	var cmd = {};
	cmd.stype = read_int16(cmd_buf, 0);
	cmd.ctype = read_int16(cmd_buf, 2);
	cmd.utag = read_int32(cmd_buf, 4);
	if (buf_len > proto_tools.header_size) {
		var buf = read_uint8_array(cmd_buf, proto_tools.header_size, buf_len - proto_tools.header_size);
		if (cmd_name_map[cmd.ctype]){
			var game_app = require("game_app");
			var rs = game_app.Instance.get_protobuf_root().lookup(cmd_name_map[cmd.ctype])
			cmd.body = rs.decode(new Uint8Array(buf))
		}
	}
	return cmd;
}

var proto_tools = {
	header_size: 8,
	// 原操作
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