// cmd_buf dataview
function read_int8(cmd_buf, offset) {
	// return cmd_buf.readInt8(offset);
	return cmd_buf.getInt8(offset);
}

function write_int8(cmd_buf, offset, value) {
	// cmd_buf.writeInt8(value, offset);
	cmd_buf.setInt8(offset, value);
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
	cmd[0] = read_int16(cmd_buf, 0);
	cmd[1] = read_int16(cmd_buf, 2);
	cmd[2] = null;
	if (buf_len > proto_tools.header_size) {
		cmd[2] = read_str(cmd_buf, proto_tools.header_size, buf_len - proto_tools.header_size);
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

	decode_json_cmd: decode_json_cmd,
	encode_json_cmd: encode_json_cmd,
};

module.exports = proto_tools;