/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.AuthProto = (function() {

    /**
     * Namespace AuthProto.
     * @exports AuthProto
     * @namespace
     */
    var AuthProto = {};

    /**
     * Cmd enum.
     * @name AuthProto.Cmd
     * @enum {string}
     * @property {number} INVALED=0 INVALED value
     * @property {number} eUnameLoginReq=1 eUnameLoginReq value
     * @property {number} eUnameLoginRes=2 eUnameLoginRes value
     * @property {number} eGuestLoginReq=3 eGuestLoginReq value
     * @property {number} eGuestLoginRes=4 eGuestLoginRes value
     * @property {number} eUnameRegistReq=5 eUnameRegistReq value
     * @property {number} eUnameRegistRes=6 eUnameRegistRes value
     * @property {number} ePhoneRegistReq=7 ePhoneRegistReq value
     * @property {number} ePhoneRegistRes=8 ePhoneRegistRes value
     * @property {number} eGetPhoneRegVerNumReq=9 eGetPhoneRegVerNumReq value
     * @property {number} eGetPhoneRegVerNumRes=10 eGetPhoneRegVerNumRes value
     * @property {number} eBindPhoneNumberReq=11 eBindPhoneNumberReq value
     * @property {number} eBindPhoneNumberRes=12 eBindPhoneNumberRes value
     * @property {number} eResetUserPwdReq=13 eResetUserPwdReq value
     * @property {number} eResetUserPwdRes=14 eResetUserPwdRes value
     * @property {number} eLoginOutReq=15 eLoginOutReq value
     * @property {number} eLoginOutRes=16 eLoginOutRes value
     * @property {number} eEditProfileReq=17 eEditProfileReq value
     * @property {number} eEditProfileRes=18 eEditProfileRes value
     * @property {number} eAccountUpgradeReq=19 eAccountUpgradeReq value
     * @property {number} eAccountUpgradeRes=20 eAccountUpgradeRes value
     * @property {number} eGetUserCenterInfoReq=21 eGetUserCenterInfoReq value
     * @property {number} eGetUserCenterInfoRes=22 eGetUserCenterInfoRes value
     * @property {number} eReloginRes=23 eReloginRes value
     * @property {number} eWeChatLoginReq=24 eWeChatLoginReq value
     * @property {number} eWeChatLoginRes=25 eWeChatLoginRes value
     * @property {number} eWeChatSessionLoginReq=26 eWeChatSessionLoginReq value
     * @property {number} eWeChatSessionLoginRes=27 eWeChatSessionLoginRes value
     */
    AuthProto.Cmd = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INVALED"] = 0;
        values[valuesById[1] = "eUnameLoginReq"] = 1;
        values[valuesById[2] = "eUnameLoginRes"] = 2;
        values[valuesById[3] = "eGuestLoginReq"] = 3;
        values[valuesById[4] = "eGuestLoginRes"] = 4;
        values[valuesById[5] = "eUnameRegistReq"] = 5;
        values[valuesById[6] = "eUnameRegistRes"] = 6;
        values[valuesById[7] = "ePhoneRegistReq"] = 7;
        values[valuesById[8] = "ePhoneRegistRes"] = 8;
        values[valuesById[9] = "eGetPhoneRegVerNumReq"] = 9;
        values[valuesById[10] = "eGetPhoneRegVerNumRes"] = 10;
        values[valuesById[11] = "eBindPhoneNumberReq"] = 11;
        values[valuesById[12] = "eBindPhoneNumberRes"] = 12;
        values[valuesById[13] = "eResetUserPwdReq"] = 13;
        values[valuesById[14] = "eResetUserPwdRes"] = 14;
        values[valuesById[15] = "eLoginOutReq"] = 15;
        values[valuesById[16] = "eLoginOutRes"] = 16;
        values[valuesById[17] = "eEditProfileReq"] = 17;
        values[valuesById[18] = "eEditProfileRes"] = 18;
        values[valuesById[19] = "eAccountUpgradeReq"] = 19;
        values[valuesById[20] = "eAccountUpgradeRes"] = 20;
        values[valuesById[21] = "eGetUserCenterInfoReq"] = 21;
        values[valuesById[22] = "eGetUserCenterInfoRes"] = 22;
        values[valuesById[23] = "eReloginRes"] = 23;
        values[valuesById[24] = "eWeChatLoginReq"] = 24;
        values[valuesById[25] = "eWeChatLoginRes"] = 25;
        values[valuesById[26] = "eWeChatSessionLoginReq"] = 26;
        values[valuesById[27] = "eWeChatSessionLoginRes"] = 27;
        return values;
    })();

    AuthProto.UnameLoginReq = (function() {

        /**
         * Properties of an UnameLoginReq.
         * @memberof AuthProto
         * @interface IUnameLoginReq
         * @property {string} uname UnameLoginReq uname
         * @property {string} upwd UnameLoginReq upwd
         */

        /**
         * Constructs a new UnameLoginReq.
         * @memberof AuthProto
         * @classdesc Represents an UnameLoginReq.
         * @implements IUnameLoginReq
         * @constructor
         * @param {AuthProto.IUnameLoginReq=} [properties] Properties to set
         */
        function UnameLoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UnameLoginReq uname.
         * @member {string} uname
         * @memberof AuthProto.UnameLoginReq
         * @instance
         */
        UnameLoginReq.prototype.uname = "";

        /**
         * UnameLoginReq upwd.
         * @member {string} upwd
         * @memberof AuthProto.UnameLoginReq
         * @instance
         */
        UnameLoginReq.prototype.upwd = "";

        /**
         * Creates a new UnameLoginReq instance using the specified properties.
         * @function create
         * @memberof AuthProto.UnameLoginReq
         * @static
         * @param {AuthProto.IUnameLoginReq=} [properties] Properties to set
         * @returns {AuthProto.UnameLoginReq} UnameLoginReq instance
         */
        UnameLoginReq.create = function create(properties) {
            return new UnameLoginReq(properties);
        };

        /**
         * Encodes the specified UnameLoginReq message. Does not implicitly {@link AuthProto.UnameLoginReq.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.UnameLoginReq
         * @static
         * @param {AuthProto.IUnameLoginReq} message UnameLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnameLoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uname);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.upwd);
            return writer;
        };

        /**
         * Encodes the specified UnameLoginReq message, length delimited. Does not implicitly {@link AuthProto.UnameLoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.UnameLoginReq
         * @static
         * @param {AuthProto.IUnameLoginReq} message UnameLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnameLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnameLoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.UnameLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.UnameLoginReq} UnameLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnameLoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.UnameLoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uname = reader.string();
                    break;
                case 2:
                    message.upwd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uname"))
                throw $util.ProtocolError("missing required 'uname'", { instance: message });
            if (!message.hasOwnProperty("upwd"))
                throw $util.ProtocolError("missing required 'upwd'", { instance: message });
            return message;
        };

        /**
         * Decodes an UnameLoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.UnameLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.UnameLoginReq} UnameLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnameLoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnameLoginReq message.
         * @function verify
         * @memberof AuthProto.UnameLoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnameLoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.uname))
                return "uname: string expected";
            if (!$util.isString(message.upwd))
                return "upwd: string expected";
            return null;
        };

        /**
         * Creates an UnameLoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.UnameLoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.UnameLoginReq} UnameLoginReq
         */
        UnameLoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.UnameLoginReq)
                return object;
            var message = new $root.AuthProto.UnameLoginReq();
            if (object.uname != null)
                message.uname = String(object.uname);
            if (object.upwd != null)
                message.upwd = String(object.upwd);
            return message;
        };

        /**
         * Creates a plain object from an UnameLoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.UnameLoginReq
         * @static
         * @param {AuthProto.UnameLoginReq} message UnameLoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnameLoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uname = "";
                object.upwd = "";
            }
            if (message.uname != null && message.hasOwnProperty("uname"))
                object.uname = message.uname;
            if (message.upwd != null && message.hasOwnProperty("upwd"))
                object.upwd = message.upwd;
            return object;
        };

        /**
         * Converts this UnameLoginReq to JSON.
         * @function toJSON
         * @memberof AuthProto.UnameLoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnameLoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UnameLoginReq;
    })();

    AuthProto.UnameLoginRes = (function() {

        /**
         * Properties of an UnameLoginRes.
         * @memberof AuthProto
         * @interface IUnameLoginRes
         * @property {number|null} [status] UnameLoginRes status
         * @property {number|null} [uid] UnameLoginRes uid
         * @property {string|null} [userlogininfo] UnameLoginRes userlogininfo
         */

        /**
         * Constructs a new UnameLoginRes.
         * @memberof AuthProto
         * @classdesc Represents an UnameLoginRes.
         * @implements IUnameLoginRes
         * @constructor
         * @param {AuthProto.IUnameLoginRes=} [properties] Properties to set
         */
        function UnameLoginRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UnameLoginRes status.
         * @member {number} status
         * @memberof AuthProto.UnameLoginRes
         * @instance
         */
        UnameLoginRes.prototype.status = 0;

        /**
         * UnameLoginRes uid.
         * @member {number} uid
         * @memberof AuthProto.UnameLoginRes
         * @instance
         */
        UnameLoginRes.prototype.uid = 0;

        /**
         * UnameLoginRes userlogininfo.
         * @member {string} userlogininfo
         * @memberof AuthProto.UnameLoginRes
         * @instance
         */
        UnameLoginRes.prototype.userlogininfo = "";

        /**
         * Creates a new UnameLoginRes instance using the specified properties.
         * @function create
         * @memberof AuthProto.UnameLoginRes
         * @static
         * @param {AuthProto.IUnameLoginRes=} [properties] Properties to set
         * @returns {AuthProto.UnameLoginRes} UnameLoginRes instance
         */
        UnameLoginRes.create = function create(properties) {
            return new UnameLoginRes(properties);
        };

        /**
         * Encodes the specified UnameLoginRes message. Does not implicitly {@link AuthProto.UnameLoginRes.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.UnameLoginRes
         * @static
         * @param {AuthProto.IUnameLoginRes} message UnameLoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnameLoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.uid);
            if (message.userlogininfo != null && message.hasOwnProperty("userlogininfo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userlogininfo);
            return writer;
        };

        /**
         * Encodes the specified UnameLoginRes message, length delimited. Does not implicitly {@link AuthProto.UnameLoginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.UnameLoginRes
         * @static
         * @param {AuthProto.IUnameLoginRes} message UnameLoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnameLoginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnameLoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.UnameLoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.UnameLoginRes} UnameLoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnameLoginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.UnameLoginRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.uid = reader.int32();
                    break;
                case 3:
                    message.userlogininfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UnameLoginRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.UnameLoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.UnameLoginRes} UnameLoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnameLoginRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnameLoginRes message.
         * @function verify
         * @memberof AuthProto.UnameLoginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnameLoginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.userlogininfo != null && message.hasOwnProperty("userlogininfo"))
                if (!$util.isString(message.userlogininfo))
                    return "userlogininfo: string expected";
            return null;
        };

        /**
         * Creates an UnameLoginRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.UnameLoginRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.UnameLoginRes} UnameLoginRes
         */
        UnameLoginRes.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.UnameLoginRes)
                return object;
            var message = new $root.AuthProto.UnameLoginRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.userlogininfo != null)
                message.userlogininfo = String(object.userlogininfo);
            return message;
        };

        /**
         * Creates a plain object from an UnameLoginRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.UnameLoginRes
         * @static
         * @param {AuthProto.UnameLoginRes} message UnameLoginRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnameLoginRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.uid = 0;
                object.userlogininfo = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.userlogininfo != null && message.hasOwnProperty("userlogininfo"))
                object.userlogininfo = message.userlogininfo;
            return object;
        };

        /**
         * Converts this UnameLoginRes to JSON.
         * @function toJSON
         * @memberof AuthProto.UnameLoginRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnameLoginRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UnameLoginRes;
    })();

    AuthProto.GuestLoginReq = (function() {

        /**
         * Properties of a GuestLoginReq.
         * @memberof AuthProto
         * @interface IGuestLoginReq
         * @property {string} guestkey GuestLoginReq guestkey
         */

        /**
         * Constructs a new GuestLoginReq.
         * @memberof AuthProto
         * @classdesc Represents a GuestLoginReq.
         * @implements IGuestLoginReq
         * @constructor
         * @param {AuthProto.IGuestLoginReq=} [properties] Properties to set
         */
        function GuestLoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuestLoginReq guestkey.
         * @member {string} guestkey
         * @memberof AuthProto.GuestLoginReq
         * @instance
         */
        GuestLoginReq.prototype.guestkey = "";

        /**
         * Creates a new GuestLoginReq instance using the specified properties.
         * @function create
         * @memberof AuthProto.GuestLoginReq
         * @static
         * @param {AuthProto.IGuestLoginReq=} [properties] Properties to set
         * @returns {AuthProto.GuestLoginReq} GuestLoginReq instance
         */
        GuestLoginReq.create = function create(properties) {
            return new GuestLoginReq(properties);
        };

        /**
         * Encodes the specified GuestLoginReq message. Does not implicitly {@link AuthProto.GuestLoginReq.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.GuestLoginReq
         * @static
         * @param {AuthProto.IGuestLoginReq} message GuestLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuestLoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.guestkey);
            return writer;
        };

        /**
         * Encodes the specified GuestLoginReq message, length delimited. Does not implicitly {@link AuthProto.GuestLoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.GuestLoginReq
         * @static
         * @param {AuthProto.IGuestLoginReq} message GuestLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuestLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuestLoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.GuestLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.GuestLoginReq} GuestLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuestLoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.GuestLoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guestkey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("guestkey"))
                throw $util.ProtocolError("missing required 'guestkey'", { instance: message });
            return message;
        };

        /**
         * Decodes a GuestLoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.GuestLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.GuestLoginReq} GuestLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuestLoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuestLoginReq message.
         * @function verify
         * @memberof AuthProto.GuestLoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuestLoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.guestkey))
                return "guestkey: string expected";
            return null;
        };

        /**
         * Creates a GuestLoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.GuestLoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.GuestLoginReq} GuestLoginReq
         */
        GuestLoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.GuestLoginReq)
                return object;
            var message = new $root.AuthProto.GuestLoginReq();
            if (object.guestkey != null)
                message.guestkey = String(object.guestkey);
            return message;
        };

        /**
         * Creates a plain object from a GuestLoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.GuestLoginReq
         * @static
         * @param {AuthProto.GuestLoginReq} message GuestLoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuestLoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.guestkey = "";
            if (message.guestkey != null && message.hasOwnProperty("guestkey"))
                object.guestkey = message.guestkey;
            return object;
        };

        /**
         * Converts this GuestLoginReq to JSON.
         * @function toJSON
         * @memberof AuthProto.GuestLoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuestLoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GuestLoginReq;
    })();

    AuthProto.GuestLoginRes = (function() {

        /**
         * Properties of a GuestLoginRes.
         * @memberof AuthProto
         * @interface IGuestLoginRes
         * @property {number} status GuestLoginRes status
         * @property {number|null} [uid] GuestLoginRes uid
         * @property {string|null} [userlogininfo] GuestLoginRes userlogininfo
         */

        /**
         * Constructs a new GuestLoginRes.
         * @memberof AuthProto
         * @classdesc Represents a GuestLoginRes.
         * @implements IGuestLoginRes
         * @constructor
         * @param {AuthProto.IGuestLoginRes=} [properties] Properties to set
         */
        function GuestLoginRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuestLoginRes status.
         * @member {number} status
         * @memberof AuthProto.GuestLoginRes
         * @instance
         */
        GuestLoginRes.prototype.status = 0;

        /**
         * GuestLoginRes uid.
         * @member {number} uid
         * @memberof AuthProto.GuestLoginRes
         * @instance
         */
        GuestLoginRes.prototype.uid = 0;

        /**
         * GuestLoginRes userlogininfo.
         * @member {string} userlogininfo
         * @memberof AuthProto.GuestLoginRes
         * @instance
         */
        GuestLoginRes.prototype.userlogininfo = "";

        /**
         * Creates a new GuestLoginRes instance using the specified properties.
         * @function create
         * @memberof AuthProto.GuestLoginRes
         * @static
         * @param {AuthProto.IGuestLoginRes=} [properties] Properties to set
         * @returns {AuthProto.GuestLoginRes} GuestLoginRes instance
         */
        GuestLoginRes.create = function create(properties) {
            return new GuestLoginRes(properties);
        };

        /**
         * Encodes the specified GuestLoginRes message. Does not implicitly {@link AuthProto.GuestLoginRes.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.GuestLoginRes
         * @static
         * @param {AuthProto.IGuestLoginRes} message GuestLoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuestLoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.uid);
            if (message.userlogininfo != null && message.hasOwnProperty("userlogininfo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userlogininfo);
            return writer;
        };

        /**
         * Encodes the specified GuestLoginRes message, length delimited. Does not implicitly {@link AuthProto.GuestLoginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.GuestLoginRes
         * @static
         * @param {AuthProto.IGuestLoginRes} message GuestLoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuestLoginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuestLoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.GuestLoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.GuestLoginRes} GuestLoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuestLoginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.GuestLoginRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.uid = reader.int32();
                    break;
                case 3:
                    message.userlogininfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a GuestLoginRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.GuestLoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.GuestLoginRes} GuestLoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuestLoginRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuestLoginRes message.
         * @function verify
         * @memberof AuthProto.GuestLoginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuestLoginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.userlogininfo != null && message.hasOwnProperty("userlogininfo"))
                if (!$util.isString(message.userlogininfo))
                    return "userlogininfo: string expected";
            return null;
        };

        /**
         * Creates a GuestLoginRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.GuestLoginRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.GuestLoginRes} GuestLoginRes
         */
        GuestLoginRes.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.GuestLoginRes)
                return object;
            var message = new $root.AuthProto.GuestLoginRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.userlogininfo != null)
                message.userlogininfo = String(object.userlogininfo);
            return message;
        };

        /**
         * Creates a plain object from a GuestLoginRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.GuestLoginRes
         * @static
         * @param {AuthProto.GuestLoginRes} message GuestLoginRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuestLoginRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.uid = 0;
                object.userlogininfo = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.userlogininfo != null && message.hasOwnProperty("userlogininfo"))
                object.userlogininfo = message.userlogininfo;
            return object;
        };

        /**
         * Converts this GuestLoginRes to JSON.
         * @function toJSON
         * @memberof AuthProto.GuestLoginRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuestLoginRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GuestLoginRes;
    })();

    AuthProto.UnameRegistReq = (function() {

        /**
         * Properties of an UnameRegistReq.
         * @memberof AuthProto
         * @interface IUnameRegistReq
         * @property {string} uname UnameRegistReq uname
         * @property {string} upwdmd5 UnameRegistReq upwdmd5
         */

        /**
         * Constructs a new UnameRegistReq.
         * @memberof AuthProto
         * @classdesc Represents an UnameRegistReq.
         * @implements IUnameRegistReq
         * @constructor
         * @param {AuthProto.IUnameRegistReq=} [properties] Properties to set
         */
        function UnameRegistReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UnameRegistReq uname.
         * @member {string} uname
         * @memberof AuthProto.UnameRegistReq
         * @instance
         */
        UnameRegistReq.prototype.uname = "";

        /**
         * UnameRegistReq upwdmd5.
         * @member {string} upwdmd5
         * @memberof AuthProto.UnameRegistReq
         * @instance
         */
        UnameRegistReq.prototype.upwdmd5 = "";

        /**
         * Creates a new UnameRegistReq instance using the specified properties.
         * @function create
         * @memberof AuthProto.UnameRegistReq
         * @static
         * @param {AuthProto.IUnameRegistReq=} [properties] Properties to set
         * @returns {AuthProto.UnameRegistReq} UnameRegistReq instance
         */
        UnameRegistReq.create = function create(properties) {
            return new UnameRegistReq(properties);
        };

        /**
         * Encodes the specified UnameRegistReq message. Does not implicitly {@link AuthProto.UnameRegistReq.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.UnameRegistReq
         * @static
         * @param {AuthProto.IUnameRegistReq} message UnameRegistReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnameRegistReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uname);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.upwdmd5);
            return writer;
        };

        /**
         * Encodes the specified UnameRegistReq message, length delimited. Does not implicitly {@link AuthProto.UnameRegistReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.UnameRegistReq
         * @static
         * @param {AuthProto.IUnameRegistReq} message UnameRegistReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnameRegistReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnameRegistReq message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.UnameRegistReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.UnameRegistReq} UnameRegistReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnameRegistReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.UnameRegistReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uname = reader.string();
                    break;
                case 2:
                    message.upwdmd5 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uname"))
                throw $util.ProtocolError("missing required 'uname'", { instance: message });
            if (!message.hasOwnProperty("upwdmd5"))
                throw $util.ProtocolError("missing required 'upwdmd5'", { instance: message });
            return message;
        };

        /**
         * Decodes an UnameRegistReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.UnameRegistReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.UnameRegistReq} UnameRegistReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnameRegistReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnameRegistReq message.
         * @function verify
         * @memberof AuthProto.UnameRegistReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnameRegistReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.uname))
                return "uname: string expected";
            if (!$util.isString(message.upwdmd5))
                return "upwdmd5: string expected";
            return null;
        };

        /**
         * Creates an UnameRegistReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.UnameRegistReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.UnameRegistReq} UnameRegistReq
         */
        UnameRegistReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.UnameRegistReq)
                return object;
            var message = new $root.AuthProto.UnameRegistReq();
            if (object.uname != null)
                message.uname = String(object.uname);
            if (object.upwdmd5 != null)
                message.upwdmd5 = String(object.upwdmd5);
            return message;
        };

        /**
         * Creates a plain object from an UnameRegistReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.UnameRegistReq
         * @static
         * @param {AuthProto.UnameRegistReq} message UnameRegistReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnameRegistReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uname = "";
                object.upwdmd5 = "";
            }
            if (message.uname != null && message.hasOwnProperty("uname"))
                object.uname = message.uname;
            if (message.upwdmd5 != null && message.hasOwnProperty("upwdmd5"))
                object.upwdmd5 = message.upwdmd5;
            return object;
        };

        /**
         * Converts this UnameRegistReq to JSON.
         * @function toJSON
         * @memberof AuthProto.UnameRegistReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnameRegistReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UnameRegistReq;
    })();

    AuthProto.UnameRegistRes = (function() {

        /**
         * Properties of an UnameRegistRes.
         * @memberof AuthProto
         * @interface IUnameRegistRes
         * @property {number} status UnameRegistRes status
         */

        /**
         * Constructs a new UnameRegistRes.
         * @memberof AuthProto
         * @classdesc Represents an UnameRegistRes.
         * @implements IUnameRegistRes
         * @constructor
         * @param {AuthProto.IUnameRegistRes=} [properties] Properties to set
         */
        function UnameRegistRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UnameRegistRes status.
         * @member {number} status
         * @memberof AuthProto.UnameRegistRes
         * @instance
         */
        UnameRegistRes.prototype.status = 0;

        /**
         * Creates a new UnameRegistRes instance using the specified properties.
         * @function create
         * @memberof AuthProto.UnameRegistRes
         * @static
         * @param {AuthProto.IUnameRegistRes=} [properties] Properties to set
         * @returns {AuthProto.UnameRegistRes} UnameRegistRes instance
         */
        UnameRegistRes.create = function create(properties) {
            return new UnameRegistRes(properties);
        };

        /**
         * Encodes the specified UnameRegistRes message. Does not implicitly {@link AuthProto.UnameRegistRes.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.UnameRegistRes
         * @static
         * @param {AuthProto.IUnameRegistRes} message UnameRegistRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnameRegistRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified UnameRegistRes message, length delimited. Does not implicitly {@link AuthProto.UnameRegistRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.UnameRegistRes
         * @static
         * @param {AuthProto.IUnameRegistRes} message UnameRegistRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnameRegistRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnameRegistRes message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.UnameRegistRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.UnameRegistRes} UnameRegistRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnameRegistRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.UnameRegistRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes an UnameRegistRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.UnameRegistRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.UnameRegistRes} UnameRegistRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnameRegistRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnameRegistRes message.
         * @function verify
         * @memberof AuthProto.UnameRegistRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnameRegistRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates an UnameRegistRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.UnameRegistRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.UnameRegistRes} UnameRegistRes
         */
        UnameRegistRes.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.UnameRegistRes)
                return object;
            var message = new $root.AuthProto.UnameRegistRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from an UnameRegistRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.UnameRegistRes
         * @static
         * @param {AuthProto.UnameRegistRes} message UnameRegistRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnameRegistRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this UnameRegistRes to JSON.
         * @function toJSON
         * @memberof AuthProto.UnameRegistRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnameRegistRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UnameRegistRes;
    })();

    AuthProto.PhoneRegistReq = (function() {

        /**
         * Properties of a PhoneRegistReq.
         * @memberof AuthProto
         * @interface IPhoneRegistReq
         */

        /**
         * Constructs a new PhoneRegistReq.
         * @memberof AuthProto
         * @classdesc Represents a PhoneRegistReq.
         * @implements IPhoneRegistReq
         * @constructor
         * @param {AuthProto.IPhoneRegistReq=} [properties] Properties to set
         */
        function PhoneRegistReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PhoneRegistReq instance using the specified properties.
         * @function create
         * @memberof AuthProto.PhoneRegistReq
         * @static
         * @param {AuthProto.IPhoneRegistReq=} [properties] Properties to set
         * @returns {AuthProto.PhoneRegistReq} PhoneRegistReq instance
         */
        PhoneRegistReq.create = function create(properties) {
            return new PhoneRegistReq(properties);
        };

        /**
         * Encodes the specified PhoneRegistReq message. Does not implicitly {@link AuthProto.PhoneRegistReq.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.PhoneRegistReq
         * @static
         * @param {AuthProto.IPhoneRegistReq} message PhoneRegistReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhoneRegistReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PhoneRegistReq message, length delimited. Does not implicitly {@link AuthProto.PhoneRegistReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.PhoneRegistReq
         * @static
         * @param {AuthProto.IPhoneRegistReq} message PhoneRegistReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhoneRegistReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PhoneRegistReq message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.PhoneRegistReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.PhoneRegistReq} PhoneRegistReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhoneRegistReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.PhoneRegistReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PhoneRegistReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.PhoneRegistReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.PhoneRegistReq} PhoneRegistReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhoneRegistReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PhoneRegistReq message.
         * @function verify
         * @memberof AuthProto.PhoneRegistReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PhoneRegistReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PhoneRegistReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.PhoneRegistReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.PhoneRegistReq} PhoneRegistReq
         */
        PhoneRegistReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.PhoneRegistReq)
                return object;
            return new $root.AuthProto.PhoneRegistReq();
        };

        /**
         * Creates a plain object from a PhoneRegistReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.PhoneRegistReq
         * @static
         * @param {AuthProto.PhoneRegistReq} message PhoneRegistReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PhoneRegistReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PhoneRegistReq to JSON.
         * @function toJSON
         * @memberof AuthProto.PhoneRegistReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PhoneRegistReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PhoneRegistReq;
    })();

    AuthProto.PhoneRegistRes = (function() {

        /**
         * Properties of a PhoneRegistRes.
         * @memberof AuthProto
         * @interface IPhoneRegistRes
         */

        /**
         * Constructs a new PhoneRegistRes.
         * @memberof AuthProto
         * @classdesc Represents a PhoneRegistRes.
         * @implements IPhoneRegistRes
         * @constructor
         * @param {AuthProto.IPhoneRegistRes=} [properties] Properties to set
         */
        function PhoneRegistRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PhoneRegistRes instance using the specified properties.
         * @function create
         * @memberof AuthProto.PhoneRegistRes
         * @static
         * @param {AuthProto.IPhoneRegistRes=} [properties] Properties to set
         * @returns {AuthProto.PhoneRegistRes} PhoneRegistRes instance
         */
        PhoneRegistRes.create = function create(properties) {
            return new PhoneRegistRes(properties);
        };

        /**
         * Encodes the specified PhoneRegistRes message. Does not implicitly {@link AuthProto.PhoneRegistRes.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.PhoneRegistRes
         * @static
         * @param {AuthProto.IPhoneRegistRes} message PhoneRegistRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhoneRegistRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PhoneRegistRes message, length delimited. Does not implicitly {@link AuthProto.PhoneRegistRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.PhoneRegistRes
         * @static
         * @param {AuthProto.IPhoneRegistRes} message PhoneRegistRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhoneRegistRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PhoneRegistRes message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.PhoneRegistRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.PhoneRegistRes} PhoneRegistRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhoneRegistRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.PhoneRegistRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PhoneRegistRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.PhoneRegistRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.PhoneRegistRes} PhoneRegistRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhoneRegistRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PhoneRegistRes message.
         * @function verify
         * @memberof AuthProto.PhoneRegistRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PhoneRegistRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PhoneRegistRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.PhoneRegistRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.PhoneRegistRes} PhoneRegistRes
         */
        PhoneRegistRes.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.PhoneRegistRes)
                return object;
            return new $root.AuthProto.PhoneRegistRes();
        };

        /**
         * Creates a plain object from a PhoneRegistRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.PhoneRegistRes
         * @static
         * @param {AuthProto.PhoneRegistRes} message PhoneRegistRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PhoneRegistRes.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PhoneRegistRes to JSON.
         * @function toJSON
         * @memberof AuthProto.PhoneRegistRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PhoneRegistRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PhoneRegistRes;
    })();

    AuthProto.GetPhoneRegVerNumReq = (function() {

        /**
         * Properties of a GetPhoneRegVerNumReq.
         * @memberof AuthProto
         * @interface IGetPhoneRegVerNumReq
         */

        /**
         * Constructs a new GetPhoneRegVerNumReq.
         * @memberof AuthProto
         * @classdesc Represents a GetPhoneRegVerNumReq.
         * @implements IGetPhoneRegVerNumReq
         * @constructor
         * @param {AuthProto.IGetPhoneRegVerNumReq=} [properties] Properties to set
         */
        function GetPhoneRegVerNumReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetPhoneRegVerNumReq instance using the specified properties.
         * @function create
         * @memberof AuthProto.GetPhoneRegVerNumReq
         * @static
         * @param {AuthProto.IGetPhoneRegVerNumReq=} [properties] Properties to set
         * @returns {AuthProto.GetPhoneRegVerNumReq} GetPhoneRegVerNumReq instance
         */
        GetPhoneRegVerNumReq.create = function create(properties) {
            return new GetPhoneRegVerNumReq(properties);
        };

        /**
         * Encodes the specified GetPhoneRegVerNumReq message. Does not implicitly {@link AuthProto.GetPhoneRegVerNumReq.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.GetPhoneRegVerNumReq
         * @static
         * @param {AuthProto.IGetPhoneRegVerNumReq} message GetPhoneRegVerNumReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPhoneRegVerNumReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetPhoneRegVerNumReq message, length delimited. Does not implicitly {@link AuthProto.GetPhoneRegVerNumReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.GetPhoneRegVerNumReq
         * @static
         * @param {AuthProto.IGetPhoneRegVerNumReq} message GetPhoneRegVerNumReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPhoneRegVerNumReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPhoneRegVerNumReq message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.GetPhoneRegVerNumReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.GetPhoneRegVerNumReq} GetPhoneRegVerNumReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPhoneRegVerNumReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.GetPhoneRegVerNumReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPhoneRegVerNumReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.GetPhoneRegVerNumReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.GetPhoneRegVerNumReq} GetPhoneRegVerNumReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPhoneRegVerNumReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPhoneRegVerNumReq message.
         * @function verify
         * @memberof AuthProto.GetPhoneRegVerNumReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPhoneRegVerNumReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetPhoneRegVerNumReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.GetPhoneRegVerNumReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.GetPhoneRegVerNumReq} GetPhoneRegVerNumReq
         */
        GetPhoneRegVerNumReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.GetPhoneRegVerNumReq)
                return object;
            return new $root.AuthProto.GetPhoneRegVerNumReq();
        };

        /**
         * Creates a plain object from a GetPhoneRegVerNumReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.GetPhoneRegVerNumReq
         * @static
         * @param {AuthProto.GetPhoneRegVerNumReq} message GetPhoneRegVerNumReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPhoneRegVerNumReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetPhoneRegVerNumReq to JSON.
         * @function toJSON
         * @memberof AuthProto.GetPhoneRegVerNumReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPhoneRegVerNumReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPhoneRegVerNumReq;
    })();

    AuthProto.GetPhoneRegVerNumRes = (function() {

        /**
         * Properties of a GetPhoneRegVerNumRes.
         * @memberof AuthProto
         * @interface IGetPhoneRegVerNumRes
         */

        /**
         * Constructs a new GetPhoneRegVerNumRes.
         * @memberof AuthProto
         * @classdesc Represents a GetPhoneRegVerNumRes.
         * @implements IGetPhoneRegVerNumRes
         * @constructor
         * @param {AuthProto.IGetPhoneRegVerNumRes=} [properties] Properties to set
         */
        function GetPhoneRegVerNumRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetPhoneRegVerNumRes instance using the specified properties.
         * @function create
         * @memberof AuthProto.GetPhoneRegVerNumRes
         * @static
         * @param {AuthProto.IGetPhoneRegVerNumRes=} [properties] Properties to set
         * @returns {AuthProto.GetPhoneRegVerNumRes} GetPhoneRegVerNumRes instance
         */
        GetPhoneRegVerNumRes.create = function create(properties) {
            return new GetPhoneRegVerNumRes(properties);
        };

        /**
         * Encodes the specified GetPhoneRegVerNumRes message. Does not implicitly {@link AuthProto.GetPhoneRegVerNumRes.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.GetPhoneRegVerNumRes
         * @static
         * @param {AuthProto.IGetPhoneRegVerNumRes} message GetPhoneRegVerNumRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPhoneRegVerNumRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetPhoneRegVerNumRes message, length delimited. Does not implicitly {@link AuthProto.GetPhoneRegVerNumRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.GetPhoneRegVerNumRes
         * @static
         * @param {AuthProto.IGetPhoneRegVerNumRes} message GetPhoneRegVerNumRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPhoneRegVerNumRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPhoneRegVerNumRes message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.GetPhoneRegVerNumRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.GetPhoneRegVerNumRes} GetPhoneRegVerNumRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPhoneRegVerNumRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.GetPhoneRegVerNumRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPhoneRegVerNumRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.GetPhoneRegVerNumRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.GetPhoneRegVerNumRes} GetPhoneRegVerNumRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPhoneRegVerNumRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPhoneRegVerNumRes message.
         * @function verify
         * @memberof AuthProto.GetPhoneRegVerNumRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPhoneRegVerNumRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetPhoneRegVerNumRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.GetPhoneRegVerNumRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.GetPhoneRegVerNumRes} GetPhoneRegVerNumRes
         */
        GetPhoneRegVerNumRes.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.GetPhoneRegVerNumRes)
                return object;
            return new $root.AuthProto.GetPhoneRegVerNumRes();
        };

        /**
         * Creates a plain object from a GetPhoneRegVerNumRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.GetPhoneRegVerNumRes
         * @static
         * @param {AuthProto.GetPhoneRegVerNumRes} message GetPhoneRegVerNumRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPhoneRegVerNumRes.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetPhoneRegVerNumRes to JSON.
         * @function toJSON
         * @memberof AuthProto.GetPhoneRegVerNumRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPhoneRegVerNumRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPhoneRegVerNumRes;
    })();

    AuthProto.BindPhoneNumberReq = (function() {

        /**
         * Properties of a BindPhoneNumberReq.
         * @memberof AuthProto
         * @interface IBindPhoneNumberReq
         */

        /**
         * Constructs a new BindPhoneNumberReq.
         * @memberof AuthProto
         * @classdesc Represents a BindPhoneNumberReq.
         * @implements IBindPhoneNumberReq
         * @constructor
         * @param {AuthProto.IBindPhoneNumberReq=} [properties] Properties to set
         */
        function BindPhoneNumberReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BindPhoneNumberReq instance using the specified properties.
         * @function create
         * @memberof AuthProto.BindPhoneNumberReq
         * @static
         * @param {AuthProto.IBindPhoneNumberReq=} [properties] Properties to set
         * @returns {AuthProto.BindPhoneNumberReq} BindPhoneNumberReq instance
         */
        BindPhoneNumberReq.create = function create(properties) {
            return new BindPhoneNumberReq(properties);
        };

        /**
         * Encodes the specified BindPhoneNumberReq message. Does not implicitly {@link AuthProto.BindPhoneNumberReq.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.BindPhoneNumberReq
         * @static
         * @param {AuthProto.IBindPhoneNumberReq} message BindPhoneNumberReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BindPhoneNumberReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BindPhoneNumberReq message, length delimited. Does not implicitly {@link AuthProto.BindPhoneNumberReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.BindPhoneNumberReq
         * @static
         * @param {AuthProto.IBindPhoneNumberReq} message BindPhoneNumberReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BindPhoneNumberReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BindPhoneNumberReq message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.BindPhoneNumberReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.BindPhoneNumberReq} BindPhoneNumberReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BindPhoneNumberReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.BindPhoneNumberReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BindPhoneNumberReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.BindPhoneNumberReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.BindPhoneNumberReq} BindPhoneNumberReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BindPhoneNumberReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BindPhoneNumberReq message.
         * @function verify
         * @memberof AuthProto.BindPhoneNumberReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BindPhoneNumberReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BindPhoneNumberReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.BindPhoneNumberReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.BindPhoneNumberReq} BindPhoneNumberReq
         */
        BindPhoneNumberReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.BindPhoneNumberReq)
                return object;
            return new $root.AuthProto.BindPhoneNumberReq();
        };

        /**
         * Creates a plain object from a BindPhoneNumberReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.BindPhoneNumberReq
         * @static
         * @param {AuthProto.BindPhoneNumberReq} message BindPhoneNumberReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BindPhoneNumberReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BindPhoneNumberReq to JSON.
         * @function toJSON
         * @memberof AuthProto.BindPhoneNumberReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BindPhoneNumberReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BindPhoneNumberReq;
    })();

    AuthProto.BindPhoneNumberRes = (function() {

        /**
         * Properties of a BindPhoneNumberRes.
         * @memberof AuthProto
         * @interface IBindPhoneNumberRes
         */

        /**
         * Constructs a new BindPhoneNumberRes.
         * @memberof AuthProto
         * @classdesc Represents a BindPhoneNumberRes.
         * @implements IBindPhoneNumberRes
         * @constructor
         * @param {AuthProto.IBindPhoneNumberRes=} [properties] Properties to set
         */
        function BindPhoneNumberRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BindPhoneNumberRes instance using the specified properties.
         * @function create
         * @memberof AuthProto.BindPhoneNumberRes
         * @static
         * @param {AuthProto.IBindPhoneNumberRes=} [properties] Properties to set
         * @returns {AuthProto.BindPhoneNumberRes} BindPhoneNumberRes instance
         */
        BindPhoneNumberRes.create = function create(properties) {
            return new BindPhoneNumberRes(properties);
        };

        /**
         * Encodes the specified BindPhoneNumberRes message. Does not implicitly {@link AuthProto.BindPhoneNumberRes.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.BindPhoneNumberRes
         * @static
         * @param {AuthProto.IBindPhoneNumberRes} message BindPhoneNumberRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BindPhoneNumberRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BindPhoneNumberRes message, length delimited. Does not implicitly {@link AuthProto.BindPhoneNumberRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.BindPhoneNumberRes
         * @static
         * @param {AuthProto.IBindPhoneNumberRes} message BindPhoneNumberRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BindPhoneNumberRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BindPhoneNumberRes message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.BindPhoneNumberRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.BindPhoneNumberRes} BindPhoneNumberRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BindPhoneNumberRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.BindPhoneNumberRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BindPhoneNumberRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.BindPhoneNumberRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.BindPhoneNumberRes} BindPhoneNumberRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BindPhoneNumberRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BindPhoneNumberRes message.
         * @function verify
         * @memberof AuthProto.BindPhoneNumberRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BindPhoneNumberRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BindPhoneNumberRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.BindPhoneNumberRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.BindPhoneNumberRes} BindPhoneNumberRes
         */
        BindPhoneNumberRes.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.BindPhoneNumberRes)
                return object;
            return new $root.AuthProto.BindPhoneNumberRes();
        };

        /**
         * Creates a plain object from a BindPhoneNumberRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.BindPhoneNumberRes
         * @static
         * @param {AuthProto.BindPhoneNumberRes} message BindPhoneNumberRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BindPhoneNumberRes.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BindPhoneNumberRes to JSON.
         * @function toJSON
         * @memberof AuthProto.BindPhoneNumberRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BindPhoneNumberRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BindPhoneNumberRes;
    })();

    AuthProto.ResetUserPwdReq = (function() {

        /**
         * Properties of a ResetUserPwdReq.
         * @memberof AuthProto
         * @interface IResetUserPwdReq
         */

        /**
         * Constructs a new ResetUserPwdReq.
         * @memberof AuthProto
         * @classdesc Represents a ResetUserPwdReq.
         * @implements IResetUserPwdReq
         * @constructor
         * @param {AuthProto.IResetUserPwdReq=} [properties] Properties to set
         */
        function ResetUserPwdReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ResetUserPwdReq instance using the specified properties.
         * @function create
         * @memberof AuthProto.ResetUserPwdReq
         * @static
         * @param {AuthProto.IResetUserPwdReq=} [properties] Properties to set
         * @returns {AuthProto.ResetUserPwdReq} ResetUserPwdReq instance
         */
        ResetUserPwdReq.create = function create(properties) {
            return new ResetUserPwdReq(properties);
        };

        /**
         * Encodes the specified ResetUserPwdReq message. Does not implicitly {@link AuthProto.ResetUserPwdReq.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.ResetUserPwdReq
         * @static
         * @param {AuthProto.IResetUserPwdReq} message ResetUserPwdReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetUserPwdReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ResetUserPwdReq message, length delimited. Does not implicitly {@link AuthProto.ResetUserPwdReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.ResetUserPwdReq
         * @static
         * @param {AuthProto.IResetUserPwdReq} message ResetUserPwdReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetUserPwdReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResetUserPwdReq message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.ResetUserPwdReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.ResetUserPwdReq} ResetUserPwdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetUserPwdReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.ResetUserPwdReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResetUserPwdReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.ResetUserPwdReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.ResetUserPwdReq} ResetUserPwdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetUserPwdReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResetUserPwdReq message.
         * @function verify
         * @memberof AuthProto.ResetUserPwdReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResetUserPwdReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ResetUserPwdReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.ResetUserPwdReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.ResetUserPwdReq} ResetUserPwdReq
         */
        ResetUserPwdReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.ResetUserPwdReq)
                return object;
            return new $root.AuthProto.ResetUserPwdReq();
        };

        /**
         * Creates a plain object from a ResetUserPwdReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.ResetUserPwdReq
         * @static
         * @param {AuthProto.ResetUserPwdReq} message ResetUserPwdReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResetUserPwdReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ResetUserPwdReq to JSON.
         * @function toJSON
         * @memberof AuthProto.ResetUserPwdReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResetUserPwdReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResetUserPwdReq;
    })();

    AuthProto.ResetUserPwdRes = (function() {

        /**
         * Properties of a ResetUserPwdRes.
         * @memberof AuthProto
         * @interface IResetUserPwdRes
         */

        /**
         * Constructs a new ResetUserPwdRes.
         * @memberof AuthProto
         * @classdesc Represents a ResetUserPwdRes.
         * @implements IResetUserPwdRes
         * @constructor
         * @param {AuthProto.IResetUserPwdRes=} [properties] Properties to set
         */
        function ResetUserPwdRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ResetUserPwdRes instance using the specified properties.
         * @function create
         * @memberof AuthProto.ResetUserPwdRes
         * @static
         * @param {AuthProto.IResetUserPwdRes=} [properties] Properties to set
         * @returns {AuthProto.ResetUserPwdRes} ResetUserPwdRes instance
         */
        ResetUserPwdRes.create = function create(properties) {
            return new ResetUserPwdRes(properties);
        };

        /**
         * Encodes the specified ResetUserPwdRes message. Does not implicitly {@link AuthProto.ResetUserPwdRes.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.ResetUserPwdRes
         * @static
         * @param {AuthProto.IResetUserPwdRes} message ResetUserPwdRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetUserPwdRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ResetUserPwdRes message, length delimited. Does not implicitly {@link AuthProto.ResetUserPwdRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.ResetUserPwdRes
         * @static
         * @param {AuthProto.IResetUserPwdRes} message ResetUserPwdRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetUserPwdRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResetUserPwdRes message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.ResetUserPwdRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.ResetUserPwdRes} ResetUserPwdRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetUserPwdRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.ResetUserPwdRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResetUserPwdRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.ResetUserPwdRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.ResetUserPwdRes} ResetUserPwdRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetUserPwdRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResetUserPwdRes message.
         * @function verify
         * @memberof AuthProto.ResetUserPwdRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResetUserPwdRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ResetUserPwdRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.ResetUserPwdRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.ResetUserPwdRes} ResetUserPwdRes
         */
        ResetUserPwdRes.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.ResetUserPwdRes)
                return object;
            return new $root.AuthProto.ResetUserPwdRes();
        };

        /**
         * Creates a plain object from a ResetUserPwdRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.ResetUserPwdRes
         * @static
         * @param {AuthProto.ResetUserPwdRes} message ResetUserPwdRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResetUserPwdRes.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ResetUserPwdRes to JSON.
         * @function toJSON
         * @memberof AuthProto.ResetUserPwdRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResetUserPwdRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResetUserPwdRes;
    })();

    AuthProto.LoginOutReq = (function() {

        /**
         * Properties of a LoginOutReq.
         * @memberof AuthProto
         * @interface ILoginOutReq
         */

        /**
         * Constructs a new LoginOutReq.
         * @memberof AuthProto
         * @classdesc Represents a LoginOutReq.
         * @implements ILoginOutReq
         * @constructor
         * @param {AuthProto.ILoginOutReq=} [properties] Properties to set
         */
        function LoginOutReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LoginOutReq instance using the specified properties.
         * @function create
         * @memberof AuthProto.LoginOutReq
         * @static
         * @param {AuthProto.ILoginOutReq=} [properties] Properties to set
         * @returns {AuthProto.LoginOutReq} LoginOutReq instance
         */
        LoginOutReq.create = function create(properties) {
            return new LoginOutReq(properties);
        };

        /**
         * Encodes the specified LoginOutReq message. Does not implicitly {@link AuthProto.LoginOutReq.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.LoginOutReq
         * @static
         * @param {AuthProto.ILoginOutReq} message LoginOutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginOutReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LoginOutReq message, length delimited. Does not implicitly {@link AuthProto.LoginOutReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.LoginOutReq
         * @static
         * @param {AuthProto.ILoginOutReq} message LoginOutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginOutReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginOutReq message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.LoginOutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.LoginOutReq} LoginOutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginOutReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.LoginOutReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginOutReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.LoginOutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.LoginOutReq} LoginOutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginOutReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginOutReq message.
         * @function verify
         * @memberof AuthProto.LoginOutReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginOutReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a LoginOutReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.LoginOutReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.LoginOutReq} LoginOutReq
         */
        LoginOutReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.LoginOutReq)
                return object;
            return new $root.AuthProto.LoginOutReq();
        };

        /**
         * Creates a plain object from a LoginOutReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.LoginOutReq
         * @static
         * @param {AuthProto.LoginOutReq} message LoginOutReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginOutReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this LoginOutReq to JSON.
         * @function toJSON
         * @memberof AuthProto.LoginOutReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginOutReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginOutReq;
    })();

    AuthProto.LoginOutRes = (function() {

        /**
         * Properties of a LoginOutRes.
         * @memberof AuthProto
         * @interface ILoginOutRes
         * @property {number} status LoginOutRes status
         */

        /**
         * Constructs a new LoginOutRes.
         * @memberof AuthProto
         * @classdesc Represents a LoginOutRes.
         * @implements ILoginOutRes
         * @constructor
         * @param {AuthProto.ILoginOutRes=} [properties] Properties to set
         */
        function LoginOutRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginOutRes status.
         * @member {number} status
         * @memberof AuthProto.LoginOutRes
         * @instance
         */
        LoginOutRes.prototype.status = 0;

        /**
         * Creates a new LoginOutRes instance using the specified properties.
         * @function create
         * @memberof AuthProto.LoginOutRes
         * @static
         * @param {AuthProto.ILoginOutRes=} [properties] Properties to set
         * @returns {AuthProto.LoginOutRes} LoginOutRes instance
         */
        LoginOutRes.create = function create(properties) {
            return new LoginOutRes(properties);
        };

        /**
         * Encodes the specified LoginOutRes message. Does not implicitly {@link AuthProto.LoginOutRes.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.LoginOutRes
         * @static
         * @param {AuthProto.ILoginOutRes} message LoginOutRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginOutRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified LoginOutRes message, length delimited. Does not implicitly {@link AuthProto.LoginOutRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.LoginOutRes
         * @static
         * @param {AuthProto.ILoginOutRes} message LoginOutRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginOutRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginOutRes message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.LoginOutRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.LoginOutRes} LoginOutRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginOutRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.LoginOutRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a LoginOutRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.LoginOutRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.LoginOutRes} LoginOutRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginOutRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginOutRes message.
         * @function verify
         * @memberof AuthProto.LoginOutRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginOutRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates a LoginOutRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.LoginOutRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.LoginOutRes} LoginOutRes
         */
        LoginOutRes.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.LoginOutRes)
                return object;
            var message = new $root.AuthProto.LoginOutRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginOutRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.LoginOutRes
         * @static
         * @param {AuthProto.LoginOutRes} message LoginOutRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginOutRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this LoginOutRes to JSON.
         * @function toJSON
         * @memberof AuthProto.LoginOutRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginOutRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginOutRes;
    })();

    AuthProto.EditProfileReq = (function() {

        /**
         * Properties of an EditProfileReq.
         * @memberof AuthProto
         * @interface IEditProfileReq
         * @property {string} unick EditProfileReq unick
         * @property {number} uface EditProfileReq uface
         * @property {number} usex EditProfileReq usex
         */

        /**
         * Constructs a new EditProfileReq.
         * @memberof AuthProto
         * @classdesc Represents an EditProfileReq.
         * @implements IEditProfileReq
         * @constructor
         * @param {AuthProto.IEditProfileReq=} [properties] Properties to set
         */
        function EditProfileReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EditProfileReq unick.
         * @member {string} unick
         * @memberof AuthProto.EditProfileReq
         * @instance
         */
        EditProfileReq.prototype.unick = "";

        /**
         * EditProfileReq uface.
         * @member {number} uface
         * @memberof AuthProto.EditProfileReq
         * @instance
         */
        EditProfileReq.prototype.uface = 0;

        /**
         * EditProfileReq usex.
         * @member {number} usex
         * @memberof AuthProto.EditProfileReq
         * @instance
         */
        EditProfileReq.prototype.usex = 0;

        /**
         * Creates a new EditProfileReq instance using the specified properties.
         * @function create
         * @memberof AuthProto.EditProfileReq
         * @static
         * @param {AuthProto.IEditProfileReq=} [properties] Properties to set
         * @returns {AuthProto.EditProfileReq} EditProfileReq instance
         */
        EditProfileReq.create = function create(properties) {
            return new EditProfileReq(properties);
        };

        /**
         * Encodes the specified EditProfileReq message. Does not implicitly {@link AuthProto.EditProfileReq.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.EditProfileReq
         * @static
         * @param {AuthProto.IEditProfileReq} message EditProfileReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditProfileReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.unick);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.uface);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.usex);
            return writer;
        };

        /**
         * Encodes the specified EditProfileReq message, length delimited. Does not implicitly {@link AuthProto.EditProfileReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.EditProfileReq
         * @static
         * @param {AuthProto.IEditProfileReq} message EditProfileReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditProfileReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EditProfileReq message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.EditProfileReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.EditProfileReq} EditProfileReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditProfileReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.EditProfileReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.unick = reader.string();
                    break;
                case 2:
                    message.uface = reader.int32();
                    break;
                case 3:
                    message.usex = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("unick"))
                throw $util.ProtocolError("missing required 'unick'", { instance: message });
            if (!message.hasOwnProperty("uface"))
                throw $util.ProtocolError("missing required 'uface'", { instance: message });
            if (!message.hasOwnProperty("usex"))
                throw $util.ProtocolError("missing required 'usex'", { instance: message });
            return message;
        };

        /**
         * Decodes an EditProfileReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.EditProfileReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.EditProfileReq} EditProfileReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditProfileReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EditProfileReq message.
         * @function verify
         * @memberof AuthProto.EditProfileReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EditProfileReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.unick))
                return "unick: string expected";
            if (!$util.isInteger(message.uface))
                return "uface: integer expected";
            if (!$util.isInteger(message.usex))
                return "usex: integer expected";
            return null;
        };

        /**
         * Creates an EditProfileReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.EditProfileReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.EditProfileReq} EditProfileReq
         */
        EditProfileReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.EditProfileReq)
                return object;
            var message = new $root.AuthProto.EditProfileReq();
            if (object.unick != null)
                message.unick = String(object.unick);
            if (object.uface != null)
                message.uface = object.uface | 0;
            if (object.usex != null)
                message.usex = object.usex | 0;
            return message;
        };

        /**
         * Creates a plain object from an EditProfileReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.EditProfileReq
         * @static
         * @param {AuthProto.EditProfileReq} message EditProfileReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EditProfileReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.unick = "";
                object.uface = 0;
                object.usex = 0;
            }
            if (message.unick != null && message.hasOwnProperty("unick"))
                object.unick = message.unick;
            if (message.uface != null && message.hasOwnProperty("uface"))
                object.uface = message.uface;
            if (message.usex != null && message.hasOwnProperty("usex"))
                object.usex = message.usex;
            return object;
        };

        /**
         * Converts this EditProfileReq to JSON.
         * @function toJSON
         * @memberof AuthProto.EditProfileReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EditProfileReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EditProfileReq;
    })();

    AuthProto.EditProfileRes = (function() {

        /**
         * Properties of an EditProfileRes.
         * @memberof AuthProto
         * @interface IEditProfileRes
         * @property {number} status EditProfileRes status
         */

        /**
         * Constructs a new EditProfileRes.
         * @memberof AuthProto
         * @classdesc Represents an EditProfileRes.
         * @implements IEditProfileRes
         * @constructor
         * @param {AuthProto.IEditProfileRes=} [properties] Properties to set
         */
        function EditProfileRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EditProfileRes status.
         * @member {number} status
         * @memberof AuthProto.EditProfileRes
         * @instance
         */
        EditProfileRes.prototype.status = 0;

        /**
         * Creates a new EditProfileRes instance using the specified properties.
         * @function create
         * @memberof AuthProto.EditProfileRes
         * @static
         * @param {AuthProto.IEditProfileRes=} [properties] Properties to set
         * @returns {AuthProto.EditProfileRes} EditProfileRes instance
         */
        EditProfileRes.create = function create(properties) {
            return new EditProfileRes(properties);
        };

        /**
         * Encodes the specified EditProfileRes message. Does not implicitly {@link AuthProto.EditProfileRes.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.EditProfileRes
         * @static
         * @param {AuthProto.IEditProfileRes} message EditProfileRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditProfileRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified EditProfileRes message, length delimited. Does not implicitly {@link AuthProto.EditProfileRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.EditProfileRes
         * @static
         * @param {AuthProto.IEditProfileRes} message EditProfileRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditProfileRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EditProfileRes message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.EditProfileRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.EditProfileRes} EditProfileRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditProfileRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.EditProfileRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes an EditProfileRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.EditProfileRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.EditProfileRes} EditProfileRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditProfileRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EditProfileRes message.
         * @function verify
         * @memberof AuthProto.EditProfileRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EditProfileRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates an EditProfileRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.EditProfileRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.EditProfileRes} EditProfileRes
         */
        EditProfileRes.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.EditProfileRes)
                return object;
            var message = new $root.AuthProto.EditProfileRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from an EditProfileRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.EditProfileRes
         * @static
         * @param {AuthProto.EditProfileRes} message EditProfileRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EditProfileRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this EditProfileRes to JSON.
         * @function toJSON
         * @memberof AuthProto.EditProfileRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EditProfileRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EditProfileRes;
    })();

    AuthProto.AccountUpgradeReq = (function() {

        /**
         * Properties of an AccountUpgradeReq.
         * @memberof AuthProto
         * @interface IAccountUpgradeReq
         * @property {string} uname AccountUpgradeReq uname
         * @property {string} upwdmd5 AccountUpgradeReq upwdmd5
         */

        /**
         * Constructs a new AccountUpgradeReq.
         * @memberof AuthProto
         * @classdesc Represents an AccountUpgradeReq.
         * @implements IAccountUpgradeReq
         * @constructor
         * @param {AuthProto.IAccountUpgradeReq=} [properties] Properties to set
         */
        function AccountUpgradeReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountUpgradeReq uname.
         * @member {string} uname
         * @memberof AuthProto.AccountUpgradeReq
         * @instance
         */
        AccountUpgradeReq.prototype.uname = "";

        /**
         * AccountUpgradeReq upwdmd5.
         * @member {string} upwdmd5
         * @memberof AuthProto.AccountUpgradeReq
         * @instance
         */
        AccountUpgradeReq.prototype.upwdmd5 = "";

        /**
         * Creates a new AccountUpgradeReq instance using the specified properties.
         * @function create
         * @memberof AuthProto.AccountUpgradeReq
         * @static
         * @param {AuthProto.IAccountUpgradeReq=} [properties] Properties to set
         * @returns {AuthProto.AccountUpgradeReq} AccountUpgradeReq instance
         */
        AccountUpgradeReq.create = function create(properties) {
            return new AccountUpgradeReq(properties);
        };

        /**
         * Encodes the specified AccountUpgradeReq message. Does not implicitly {@link AuthProto.AccountUpgradeReq.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.AccountUpgradeReq
         * @static
         * @param {AuthProto.IAccountUpgradeReq} message AccountUpgradeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountUpgradeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uname);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.upwdmd5);
            return writer;
        };

        /**
         * Encodes the specified AccountUpgradeReq message, length delimited. Does not implicitly {@link AuthProto.AccountUpgradeReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.AccountUpgradeReq
         * @static
         * @param {AuthProto.IAccountUpgradeReq} message AccountUpgradeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountUpgradeReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountUpgradeReq message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.AccountUpgradeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.AccountUpgradeReq} AccountUpgradeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountUpgradeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.AccountUpgradeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uname = reader.string();
                    break;
                case 2:
                    message.upwdmd5 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uname"))
                throw $util.ProtocolError("missing required 'uname'", { instance: message });
            if (!message.hasOwnProperty("upwdmd5"))
                throw $util.ProtocolError("missing required 'upwdmd5'", { instance: message });
            return message;
        };

        /**
         * Decodes an AccountUpgradeReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.AccountUpgradeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.AccountUpgradeReq} AccountUpgradeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountUpgradeReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountUpgradeReq message.
         * @function verify
         * @memberof AuthProto.AccountUpgradeReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountUpgradeReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.uname))
                return "uname: string expected";
            if (!$util.isString(message.upwdmd5))
                return "upwdmd5: string expected";
            return null;
        };

        /**
         * Creates an AccountUpgradeReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.AccountUpgradeReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.AccountUpgradeReq} AccountUpgradeReq
         */
        AccountUpgradeReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.AccountUpgradeReq)
                return object;
            var message = new $root.AuthProto.AccountUpgradeReq();
            if (object.uname != null)
                message.uname = String(object.uname);
            if (object.upwdmd5 != null)
                message.upwdmd5 = String(object.upwdmd5);
            return message;
        };

        /**
         * Creates a plain object from an AccountUpgradeReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.AccountUpgradeReq
         * @static
         * @param {AuthProto.AccountUpgradeReq} message AccountUpgradeReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountUpgradeReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uname = "";
                object.upwdmd5 = "";
            }
            if (message.uname != null && message.hasOwnProperty("uname"))
                object.uname = message.uname;
            if (message.upwdmd5 != null && message.hasOwnProperty("upwdmd5"))
                object.upwdmd5 = message.upwdmd5;
            return object;
        };

        /**
         * Converts this AccountUpgradeReq to JSON.
         * @function toJSON
         * @memberof AuthProto.AccountUpgradeReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountUpgradeReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountUpgradeReq;
    })();

    AuthProto.AccountUpgradeRes = (function() {

        /**
         * Properties of an AccountUpgradeRes.
         * @memberof AuthProto
         * @interface IAccountUpgradeRes
         * @property {number} status AccountUpgradeRes status
         */

        /**
         * Constructs a new AccountUpgradeRes.
         * @memberof AuthProto
         * @classdesc Represents an AccountUpgradeRes.
         * @implements IAccountUpgradeRes
         * @constructor
         * @param {AuthProto.IAccountUpgradeRes=} [properties] Properties to set
         */
        function AccountUpgradeRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountUpgradeRes status.
         * @member {number} status
         * @memberof AuthProto.AccountUpgradeRes
         * @instance
         */
        AccountUpgradeRes.prototype.status = 0;

        /**
         * Creates a new AccountUpgradeRes instance using the specified properties.
         * @function create
         * @memberof AuthProto.AccountUpgradeRes
         * @static
         * @param {AuthProto.IAccountUpgradeRes=} [properties] Properties to set
         * @returns {AuthProto.AccountUpgradeRes} AccountUpgradeRes instance
         */
        AccountUpgradeRes.create = function create(properties) {
            return new AccountUpgradeRes(properties);
        };

        /**
         * Encodes the specified AccountUpgradeRes message. Does not implicitly {@link AuthProto.AccountUpgradeRes.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.AccountUpgradeRes
         * @static
         * @param {AuthProto.IAccountUpgradeRes} message AccountUpgradeRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountUpgradeRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified AccountUpgradeRes message, length delimited. Does not implicitly {@link AuthProto.AccountUpgradeRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.AccountUpgradeRes
         * @static
         * @param {AuthProto.IAccountUpgradeRes} message AccountUpgradeRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountUpgradeRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountUpgradeRes message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.AccountUpgradeRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.AccountUpgradeRes} AccountUpgradeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountUpgradeRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.AccountUpgradeRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes an AccountUpgradeRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.AccountUpgradeRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.AccountUpgradeRes} AccountUpgradeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountUpgradeRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountUpgradeRes message.
         * @function verify
         * @memberof AuthProto.AccountUpgradeRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountUpgradeRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates an AccountUpgradeRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.AccountUpgradeRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.AccountUpgradeRes} AccountUpgradeRes
         */
        AccountUpgradeRes.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.AccountUpgradeRes)
                return object;
            var message = new $root.AuthProto.AccountUpgradeRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from an AccountUpgradeRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.AccountUpgradeRes
         * @static
         * @param {AuthProto.AccountUpgradeRes} message AccountUpgradeRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountUpgradeRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this AccountUpgradeRes to JSON.
         * @function toJSON
         * @memberof AuthProto.AccountUpgradeRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountUpgradeRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountUpgradeRes;
    })();

    AuthProto.GetUserCenterInfoReq = (function() {

        /**
         * Properties of a GetUserCenterInfoReq.
         * @memberof AuthProto
         * @interface IGetUserCenterInfoReq
         */

        /**
         * Constructs a new GetUserCenterInfoReq.
         * @memberof AuthProto
         * @classdesc Represents a GetUserCenterInfoReq.
         * @implements IGetUserCenterInfoReq
         * @constructor
         * @param {AuthProto.IGetUserCenterInfoReq=} [properties] Properties to set
         */
        function GetUserCenterInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetUserCenterInfoReq instance using the specified properties.
         * @function create
         * @memberof AuthProto.GetUserCenterInfoReq
         * @static
         * @param {AuthProto.IGetUserCenterInfoReq=} [properties] Properties to set
         * @returns {AuthProto.GetUserCenterInfoReq} GetUserCenterInfoReq instance
         */
        GetUserCenterInfoReq.create = function create(properties) {
            return new GetUserCenterInfoReq(properties);
        };

        /**
         * Encodes the specified GetUserCenterInfoReq message. Does not implicitly {@link AuthProto.GetUserCenterInfoReq.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.GetUserCenterInfoReq
         * @static
         * @param {AuthProto.IGetUserCenterInfoReq} message GetUserCenterInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserCenterInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetUserCenterInfoReq message, length delimited. Does not implicitly {@link AuthProto.GetUserCenterInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.GetUserCenterInfoReq
         * @static
         * @param {AuthProto.IGetUserCenterInfoReq} message GetUserCenterInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserCenterInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserCenterInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.GetUserCenterInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.GetUserCenterInfoReq} GetUserCenterInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserCenterInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.GetUserCenterInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserCenterInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.GetUserCenterInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.GetUserCenterInfoReq} GetUserCenterInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserCenterInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserCenterInfoReq message.
         * @function verify
         * @memberof AuthProto.GetUserCenterInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserCenterInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetUserCenterInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.GetUserCenterInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.GetUserCenterInfoReq} GetUserCenterInfoReq
         */
        GetUserCenterInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.GetUserCenterInfoReq)
                return object;
            return new $root.AuthProto.GetUserCenterInfoReq();
        };

        /**
         * Creates a plain object from a GetUserCenterInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.GetUserCenterInfoReq
         * @static
         * @param {AuthProto.GetUserCenterInfoReq} message GetUserCenterInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserCenterInfoReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetUserCenterInfoReq to JSON.
         * @function toJSON
         * @memberof AuthProto.GetUserCenterInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserCenterInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserCenterInfoReq;
    })();

    AuthProto.GetUserCenterInfoRes = (function() {

        /**
         * Properties of a GetUserCenterInfoRes.
         * @memberof AuthProto
         * @interface IGetUserCenterInfoRes
         * @property {number} status GetUserCenterInfoRes status
         * @property {string|null} [usercenterinfostring] GetUserCenterInfoRes usercenterinfostring
         */

        /**
         * Constructs a new GetUserCenterInfoRes.
         * @memberof AuthProto
         * @classdesc Represents a GetUserCenterInfoRes.
         * @implements IGetUserCenterInfoRes
         * @constructor
         * @param {AuthProto.IGetUserCenterInfoRes=} [properties] Properties to set
         */
        function GetUserCenterInfoRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserCenterInfoRes status.
         * @member {number} status
         * @memberof AuthProto.GetUserCenterInfoRes
         * @instance
         */
        GetUserCenterInfoRes.prototype.status = 0;

        /**
         * GetUserCenterInfoRes usercenterinfostring.
         * @member {string} usercenterinfostring
         * @memberof AuthProto.GetUserCenterInfoRes
         * @instance
         */
        GetUserCenterInfoRes.prototype.usercenterinfostring = "";

        /**
         * Creates a new GetUserCenterInfoRes instance using the specified properties.
         * @function create
         * @memberof AuthProto.GetUserCenterInfoRes
         * @static
         * @param {AuthProto.IGetUserCenterInfoRes=} [properties] Properties to set
         * @returns {AuthProto.GetUserCenterInfoRes} GetUserCenterInfoRes instance
         */
        GetUserCenterInfoRes.create = function create(properties) {
            return new GetUserCenterInfoRes(properties);
        };

        /**
         * Encodes the specified GetUserCenterInfoRes message. Does not implicitly {@link AuthProto.GetUserCenterInfoRes.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.GetUserCenterInfoRes
         * @static
         * @param {AuthProto.IGetUserCenterInfoRes} message GetUserCenterInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserCenterInfoRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.usercenterinfostring != null && message.hasOwnProperty("usercenterinfostring"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.usercenterinfostring);
            return writer;
        };

        /**
         * Encodes the specified GetUserCenterInfoRes message, length delimited. Does not implicitly {@link AuthProto.GetUserCenterInfoRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.GetUserCenterInfoRes
         * @static
         * @param {AuthProto.IGetUserCenterInfoRes} message GetUserCenterInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserCenterInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserCenterInfoRes message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.GetUserCenterInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.GetUserCenterInfoRes} GetUserCenterInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserCenterInfoRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.GetUserCenterInfoRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.usercenterinfostring = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a GetUserCenterInfoRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.GetUserCenterInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.GetUserCenterInfoRes} GetUserCenterInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserCenterInfoRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserCenterInfoRes message.
         * @function verify
         * @memberof AuthProto.GetUserCenterInfoRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserCenterInfoRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.usercenterinfostring != null && message.hasOwnProperty("usercenterinfostring"))
                if (!$util.isString(message.usercenterinfostring))
                    return "usercenterinfostring: string expected";
            return null;
        };

        /**
         * Creates a GetUserCenterInfoRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.GetUserCenterInfoRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.GetUserCenterInfoRes} GetUserCenterInfoRes
         */
        GetUserCenterInfoRes.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.GetUserCenterInfoRes)
                return object;
            var message = new $root.AuthProto.GetUserCenterInfoRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.usercenterinfostring != null)
                message.usercenterinfostring = String(object.usercenterinfostring);
            return message;
        };

        /**
         * Creates a plain object from a GetUserCenterInfoRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.GetUserCenterInfoRes
         * @static
         * @param {AuthProto.GetUserCenterInfoRes} message GetUserCenterInfoRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserCenterInfoRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.usercenterinfostring = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.usercenterinfostring != null && message.hasOwnProperty("usercenterinfostring"))
                object.usercenterinfostring = message.usercenterinfostring;
            return object;
        };

        /**
         * Converts this GetUserCenterInfoRes to JSON.
         * @function toJSON
         * @memberof AuthProto.GetUserCenterInfoRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserCenterInfoRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserCenterInfoRes;
    })();

    AuthProto.ReloginRes = (function() {

        /**
         * Properties of a ReloginRes.
         * @memberof AuthProto
         * @interface IReloginRes
         */

        /**
         * Constructs a new ReloginRes.
         * @memberof AuthProto
         * @classdesc Represents a ReloginRes.
         * @implements IReloginRes
         * @constructor
         * @param {AuthProto.IReloginRes=} [properties] Properties to set
         */
        function ReloginRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReloginRes instance using the specified properties.
         * @function create
         * @memberof AuthProto.ReloginRes
         * @static
         * @param {AuthProto.IReloginRes=} [properties] Properties to set
         * @returns {AuthProto.ReloginRes} ReloginRes instance
         */
        ReloginRes.create = function create(properties) {
            return new ReloginRes(properties);
        };

        /**
         * Encodes the specified ReloginRes message. Does not implicitly {@link AuthProto.ReloginRes.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.ReloginRes
         * @static
         * @param {AuthProto.IReloginRes} message ReloginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReloginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReloginRes message, length delimited. Does not implicitly {@link AuthProto.ReloginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.ReloginRes
         * @static
         * @param {AuthProto.IReloginRes} message ReloginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReloginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReloginRes message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.ReloginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.ReloginRes} ReloginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReloginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.ReloginRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReloginRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.ReloginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.ReloginRes} ReloginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReloginRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReloginRes message.
         * @function verify
         * @memberof AuthProto.ReloginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReloginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReloginRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.ReloginRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.ReloginRes} ReloginRes
         */
        ReloginRes.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.ReloginRes)
                return object;
            return new $root.AuthProto.ReloginRes();
        };

        /**
         * Creates a plain object from a ReloginRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.ReloginRes
         * @static
         * @param {AuthProto.ReloginRes} message ReloginRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReloginRes.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReloginRes to JSON.
         * @function toJSON
         * @memberof AuthProto.ReloginRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReloginRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReloginRes;
    })();

    AuthProto.WeChatLoginReq = (function() {

        /**
         * Properties of a WeChatLoginReq.
         * @memberof AuthProto
         * @interface IWeChatLoginReq
         * @property {string} logincode WeChatLoginReq logincode
         * @property {string} userlogininfo WeChatLoginReq userlogininfo
         */

        /**
         * Constructs a new WeChatLoginReq.
         * @memberof AuthProto
         * @classdesc Represents a WeChatLoginReq.
         * @implements IWeChatLoginReq
         * @constructor
         * @param {AuthProto.IWeChatLoginReq=} [properties] Properties to set
         */
        function WeChatLoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WeChatLoginReq logincode.
         * @member {string} logincode
         * @memberof AuthProto.WeChatLoginReq
         * @instance
         */
        WeChatLoginReq.prototype.logincode = "";

        /**
         * WeChatLoginReq userlogininfo.
         * @member {string} userlogininfo
         * @memberof AuthProto.WeChatLoginReq
         * @instance
         */
        WeChatLoginReq.prototype.userlogininfo = "";

        /**
         * Creates a new WeChatLoginReq instance using the specified properties.
         * @function create
         * @memberof AuthProto.WeChatLoginReq
         * @static
         * @param {AuthProto.IWeChatLoginReq=} [properties] Properties to set
         * @returns {AuthProto.WeChatLoginReq} WeChatLoginReq instance
         */
        WeChatLoginReq.create = function create(properties) {
            return new WeChatLoginReq(properties);
        };

        /**
         * Encodes the specified WeChatLoginReq message. Does not implicitly {@link AuthProto.WeChatLoginReq.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.WeChatLoginReq
         * @static
         * @param {AuthProto.IWeChatLoginReq} message WeChatLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeChatLoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.logincode);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.userlogininfo);
            return writer;
        };

        /**
         * Encodes the specified WeChatLoginReq message, length delimited. Does not implicitly {@link AuthProto.WeChatLoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.WeChatLoginReq
         * @static
         * @param {AuthProto.IWeChatLoginReq} message WeChatLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeChatLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WeChatLoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.WeChatLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.WeChatLoginReq} WeChatLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeChatLoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.WeChatLoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.logincode = reader.string();
                    break;
                case 2:
                    message.userlogininfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("logincode"))
                throw $util.ProtocolError("missing required 'logincode'", { instance: message });
            if (!message.hasOwnProperty("userlogininfo"))
                throw $util.ProtocolError("missing required 'userlogininfo'", { instance: message });
            return message;
        };

        /**
         * Decodes a WeChatLoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.WeChatLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.WeChatLoginReq} WeChatLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeChatLoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WeChatLoginReq message.
         * @function verify
         * @memberof AuthProto.WeChatLoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WeChatLoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.logincode))
                return "logincode: string expected";
            if (!$util.isString(message.userlogininfo))
                return "userlogininfo: string expected";
            return null;
        };

        /**
         * Creates a WeChatLoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.WeChatLoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.WeChatLoginReq} WeChatLoginReq
         */
        WeChatLoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.WeChatLoginReq)
                return object;
            var message = new $root.AuthProto.WeChatLoginReq();
            if (object.logincode != null)
                message.logincode = String(object.logincode);
            if (object.userlogininfo != null)
                message.userlogininfo = String(object.userlogininfo);
            return message;
        };

        /**
         * Creates a plain object from a WeChatLoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.WeChatLoginReq
         * @static
         * @param {AuthProto.WeChatLoginReq} message WeChatLoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WeChatLoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.logincode = "";
                object.userlogininfo = "";
            }
            if (message.logincode != null && message.hasOwnProperty("logincode"))
                object.logincode = message.logincode;
            if (message.userlogininfo != null && message.hasOwnProperty("userlogininfo"))
                object.userlogininfo = message.userlogininfo;
            return object;
        };

        /**
         * Converts this WeChatLoginReq to JSON.
         * @function toJSON
         * @memberof AuthProto.WeChatLoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WeChatLoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WeChatLoginReq;
    })();

    AuthProto.WeChatLoginRes = (function() {

        /**
         * Properties of a WeChatLoginRes.
         * @memberof AuthProto
         * @interface IWeChatLoginRes
         * @property {number} status WeChatLoginRes status
         * @property {number|null} [uid] WeChatLoginRes uid
         * @property {string|null} [userlogininfo] WeChatLoginRes userlogininfo
         */

        /**
         * Constructs a new WeChatLoginRes.
         * @memberof AuthProto
         * @classdesc Represents a WeChatLoginRes.
         * @implements IWeChatLoginRes
         * @constructor
         * @param {AuthProto.IWeChatLoginRes=} [properties] Properties to set
         */
        function WeChatLoginRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WeChatLoginRes status.
         * @member {number} status
         * @memberof AuthProto.WeChatLoginRes
         * @instance
         */
        WeChatLoginRes.prototype.status = 0;

        /**
         * WeChatLoginRes uid.
         * @member {number} uid
         * @memberof AuthProto.WeChatLoginRes
         * @instance
         */
        WeChatLoginRes.prototype.uid = 0;

        /**
         * WeChatLoginRes userlogininfo.
         * @member {string} userlogininfo
         * @memberof AuthProto.WeChatLoginRes
         * @instance
         */
        WeChatLoginRes.prototype.userlogininfo = "";

        /**
         * Creates a new WeChatLoginRes instance using the specified properties.
         * @function create
         * @memberof AuthProto.WeChatLoginRes
         * @static
         * @param {AuthProto.IWeChatLoginRes=} [properties] Properties to set
         * @returns {AuthProto.WeChatLoginRes} WeChatLoginRes instance
         */
        WeChatLoginRes.create = function create(properties) {
            return new WeChatLoginRes(properties);
        };

        /**
         * Encodes the specified WeChatLoginRes message. Does not implicitly {@link AuthProto.WeChatLoginRes.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.WeChatLoginRes
         * @static
         * @param {AuthProto.IWeChatLoginRes} message WeChatLoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeChatLoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.uid);
            if (message.userlogininfo != null && message.hasOwnProperty("userlogininfo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userlogininfo);
            return writer;
        };

        /**
         * Encodes the specified WeChatLoginRes message, length delimited. Does not implicitly {@link AuthProto.WeChatLoginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.WeChatLoginRes
         * @static
         * @param {AuthProto.IWeChatLoginRes} message WeChatLoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeChatLoginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WeChatLoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.WeChatLoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.WeChatLoginRes} WeChatLoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeChatLoginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.WeChatLoginRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    message.uid = reader.int32();
                    break;
                case 3:
                    message.userlogininfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a WeChatLoginRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.WeChatLoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.WeChatLoginRes} WeChatLoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeChatLoginRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WeChatLoginRes message.
         * @function verify
         * @memberof AuthProto.WeChatLoginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WeChatLoginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.userlogininfo != null && message.hasOwnProperty("userlogininfo"))
                if (!$util.isString(message.userlogininfo))
                    return "userlogininfo: string expected";
            return null;
        };

        /**
         * Creates a WeChatLoginRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.WeChatLoginRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.WeChatLoginRes} WeChatLoginRes
         */
        WeChatLoginRes.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.WeChatLoginRes)
                return object;
            var message = new $root.AuthProto.WeChatLoginRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.userlogininfo != null)
                message.userlogininfo = String(object.userlogininfo);
            return message;
        };

        /**
         * Creates a plain object from a WeChatLoginRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.WeChatLoginRes
         * @static
         * @param {AuthProto.WeChatLoginRes} message WeChatLoginRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WeChatLoginRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.uid = 0;
                object.userlogininfo = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.userlogininfo != null && message.hasOwnProperty("userlogininfo"))
                object.userlogininfo = message.userlogininfo;
            return object;
        };

        /**
         * Converts this WeChatLoginRes to JSON.
         * @function toJSON
         * @memberof AuthProto.WeChatLoginRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WeChatLoginRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WeChatLoginRes;
    })();

    AuthProto.WeChatSessionLoginReq = (function() {

        /**
         * Properties of a WeChatSessionLoginReq.
         * @memberof AuthProto
         * @interface IWeChatSessionLoginReq
         * @property {string} wechatsessionkey WeChatSessionLoginReq wechatsessionkey
         */

        /**
         * Constructs a new WeChatSessionLoginReq.
         * @memberof AuthProto
         * @classdesc Represents a WeChatSessionLoginReq.
         * @implements IWeChatSessionLoginReq
         * @constructor
         * @param {AuthProto.IWeChatSessionLoginReq=} [properties] Properties to set
         */
        function WeChatSessionLoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WeChatSessionLoginReq wechatsessionkey.
         * @member {string} wechatsessionkey
         * @memberof AuthProto.WeChatSessionLoginReq
         * @instance
         */
        WeChatSessionLoginReq.prototype.wechatsessionkey = "";

        /**
         * Creates a new WeChatSessionLoginReq instance using the specified properties.
         * @function create
         * @memberof AuthProto.WeChatSessionLoginReq
         * @static
         * @param {AuthProto.IWeChatSessionLoginReq=} [properties] Properties to set
         * @returns {AuthProto.WeChatSessionLoginReq} WeChatSessionLoginReq instance
         */
        WeChatSessionLoginReq.create = function create(properties) {
            return new WeChatSessionLoginReq(properties);
        };

        /**
         * Encodes the specified WeChatSessionLoginReq message. Does not implicitly {@link AuthProto.WeChatSessionLoginReq.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.WeChatSessionLoginReq
         * @static
         * @param {AuthProto.IWeChatSessionLoginReq} message WeChatSessionLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeChatSessionLoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.wechatsessionkey);
            return writer;
        };

        /**
         * Encodes the specified WeChatSessionLoginReq message, length delimited. Does not implicitly {@link AuthProto.WeChatSessionLoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.WeChatSessionLoginReq
         * @static
         * @param {AuthProto.IWeChatSessionLoginReq} message WeChatSessionLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeChatSessionLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WeChatSessionLoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.WeChatSessionLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.WeChatSessionLoginReq} WeChatSessionLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeChatSessionLoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.WeChatSessionLoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.wechatsessionkey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("wechatsessionkey"))
                throw $util.ProtocolError("missing required 'wechatsessionkey'", { instance: message });
            return message;
        };

        /**
         * Decodes a WeChatSessionLoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.WeChatSessionLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.WeChatSessionLoginReq} WeChatSessionLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeChatSessionLoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WeChatSessionLoginReq message.
         * @function verify
         * @memberof AuthProto.WeChatSessionLoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WeChatSessionLoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.wechatsessionkey))
                return "wechatsessionkey: string expected";
            return null;
        };

        /**
         * Creates a WeChatSessionLoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.WeChatSessionLoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.WeChatSessionLoginReq} WeChatSessionLoginReq
         */
        WeChatSessionLoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.WeChatSessionLoginReq)
                return object;
            var message = new $root.AuthProto.WeChatSessionLoginReq();
            if (object.wechatsessionkey != null)
                message.wechatsessionkey = String(object.wechatsessionkey);
            return message;
        };

        /**
         * Creates a plain object from a WeChatSessionLoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.WeChatSessionLoginReq
         * @static
         * @param {AuthProto.WeChatSessionLoginReq} message WeChatSessionLoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WeChatSessionLoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.wechatsessionkey = "";
            if (message.wechatsessionkey != null && message.hasOwnProperty("wechatsessionkey"))
                object.wechatsessionkey = message.wechatsessionkey;
            return object;
        };

        /**
         * Converts this WeChatSessionLoginReq to JSON.
         * @function toJSON
         * @memberof AuthProto.WeChatSessionLoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WeChatSessionLoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WeChatSessionLoginReq;
    })();

    AuthProto.WeChatSessionLoginRes = (function() {

        /**
         * Properties of a WeChatSessionLoginRes.
         * @memberof AuthProto
         * @interface IWeChatSessionLoginRes
         * @property {number} status WeChatSessionLoginRes status
         * @property {number|null} [uid] WeChatSessionLoginRes uid
         * @property {string|null} [userlogininfo] WeChatSessionLoginRes userlogininfo
         */

        /**
         * Constructs a new WeChatSessionLoginRes.
         * @memberof AuthProto
         * @classdesc Represents a WeChatSessionLoginRes.
         * @implements IWeChatSessionLoginRes
         * @constructor
         * @param {AuthProto.IWeChatSessionLoginRes=} [properties] Properties to set
         */
        function WeChatSessionLoginRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WeChatSessionLoginRes status.
         * @member {number} status
         * @memberof AuthProto.WeChatSessionLoginRes
         * @instance
         */
        WeChatSessionLoginRes.prototype.status = 0;

        /**
         * WeChatSessionLoginRes uid.
         * @member {number} uid
         * @memberof AuthProto.WeChatSessionLoginRes
         * @instance
         */
        WeChatSessionLoginRes.prototype.uid = 0;

        /**
         * WeChatSessionLoginRes userlogininfo.
         * @member {string} userlogininfo
         * @memberof AuthProto.WeChatSessionLoginRes
         * @instance
         */
        WeChatSessionLoginRes.prototype.userlogininfo = "";

        /**
         * Creates a new WeChatSessionLoginRes instance using the specified properties.
         * @function create
         * @memberof AuthProto.WeChatSessionLoginRes
         * @static
         * @param {AuthProto.IWeChatSessionLoginRes=} [properties] Properties to set
         * @returns {AuthProto.WeChatSessionLoginRes} WeChatSessionLoginRes instance
         */
        WeChatSessionLoginRes.create = function create(properties) {
            return new WeChatSessionLoginRes(properties);
        };

        /**
         * Encodes the specified WeChatSessionLoginRes message. Does not implicitly {@link AuthProto.WeChatSessionLoginRes.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.WeChatSessionLoginRes
         * @static
         * @param {AuthProto.IWeChatSessionLoginRes} message WeChatSessionLoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeChatSessionLoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.uid);
            if (message.userlogininfo != null && message.hasOwnProperty("userlogininfo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userlogininfo);
            return writer;
        };

        /**
         * Encodes the specified WeChatSessionLoginRes message, length delimited. Does not implicitly {@link AuthProto.WeChatSessionLoginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.WeChatSessionLoginRes
         * @static
         * @param {AuthProto.IWeChatSessionLoginRes} message WeChatSessionLoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeChatSessionLoginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WeChatSessionLoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.WeChatSessionLoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.WeChatSessionLoginRes} WeChatSessionLoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeChatSessionLoginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.WeChatSessionLoginRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    message.uid = reader.int32();
                    break;
                case 3:
                    message.userlogininfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a WeChatSessionLoginRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.WeChatSessionLoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.WeChatSessionLoginRes} WeChatSessionLoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeChatSessionLoginRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WeChatSessionLoginRes message.
         * @function verify
         * @memberof AuthProto.WeChatSessionLoginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WeChatSessionLoginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.userlogininfo != null && message.hasOwnProperty("userlogininfo"))
                if (!$util.isString(message.userlogininfo))
                    return "userlogininfo: string expected";
            return null;
        };

        /**
         * Creates a WeChatSessionLoginRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.WeChatSessionLoginRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.WeChatSessionLoginRes} WeChatSessionLoginRes
         */
        WeChatSessionLoginRes.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.WeChatSessionLoginRes)
                return object;
            var message = new $root.AuthProto.WeChatSessionLoginRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.userlogininfo != null)
                message.userlogininfo = String(object.userlogininfo);
            return message;
        };

        /**
         * Creates a plain object from a WeChatSessionLoginRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.WeChatSessionLoginRes
         * @static
         * @param {AuthProto.WeChatSessionLoginRes} message WeChatSessionLoginRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WeChatSessionLoginRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.uid = 0;
                object.userlogininfo = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.userlogininfo != null && message.hasOwnProperty("userlogininfo"))
                object.userlogininfo = message.userlogininfo;
            return object;
        };

        /**
         * Converts this WeChatSessionLoginRes to JSON.
         * @function toJSON
         * @memberof AuthProto.WeChatSessionLoginRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WeChatSessionLoginRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WeChatSessionLoginRes;
    })();

    return AuthProto;
})();

$root.TalkProto = (function() {

    /**
     * Namespace TalkProto.
     * @exports TalkProto
     * @namespace
     */
    var TalkProto = {};

    /**
     * Cmd enum.
     * @name TalkProto.Cmd
     * @enum {string}
     * @property {number} INVALED=0 INVALED value
     * @property {number} eLoginReq=1 eLoginReq value
     * @property {number} eLoginRes=2 eLoginRes value
     * @property {number} eExitReq=3 eExitReq value
     * @property {number} eExitRes=4 eExitRes value
     * @property {number} eSendMsgReq=5 eSendMsgReq value
     * @property {number} eSendMsgRes=6 eSendMsgRes value
     * @property {number} eOnUserLogin=7 eOnUserLogin value
     * @property {number} eOnUserExit=8 eOnUserExit value
     * @property {number} eOnSendMsg=9 eOnSendMsg value
     */
    TalkProto.Cmd = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INVALED"] = 0;
        values[valuesById[1] = "eLoginReq"] = 1;
        values[valuesById[2] = "eLoginRes"] = 2;
        values[valuesById[3] = "eExitReq"] = 3;
        values[valuesById[4] = "eExitRes"] = 4;
        values[valuesById[5] = "eSendMsgReq"] = 5;
        values[valuesById[6] = "eSendMsgRes"] = 6;
        values[valuesById[7] = "eOnUserLogin"] = 7;
        values[valuesById[8] = "eOnUserExit"] = 8;
        values[valuesById[9] = "eOnSendMsg"] = 9;
        return values;
    })();

    TalkProto.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof TalkProto
         * @interface ILoginReq
         */

        /**
         * Constructs a new LoginReq.
         * @memberof TalkProto
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {TalkProto.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof TalkProto.LoginReq
         * @static
         * @param {TalkProto.ILoginReq=} [properties] Properties to set
         * @returns {TalkProto.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link TalkProto.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof TalkProto.LoginReq
         * @static
         * @param {TalkProto.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link TalkProto.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TalkProto.LoginReq
         * @static
         * @param {TalkProto.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof TalkProto.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TalkProto.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TalkProto.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TalkProto.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TalkProto.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof TalkProto.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TalkProto.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TalkProto.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.TalkProto.LoginReq)
                return object;
            return new $root.TalkProto.LoginReq();
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TalkProto.LoginReq
         * @static
         * @param {TalkProto.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof TalkProto.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginReq;
    })();

    TalkProto.LoginRes = (function() {

        /**
         * Properties of a LoginRes.
         * @memberof TalkProto
         * @interface ILoginRes
         * @property {number} status LoginRes status
         */

        /**
         * Constructs a new LoginRes.
         * @memberof TalkProto
         * @classdesc Represents a LoginRes.
         * @implements ILoginRes
         * @constructor
         * @param {TalkProto.ILoginRes=} [properties] Properties to set
         */
        function LoginRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRes status.
         * @member {number} status
         * @memberof TalkProto.LoginRes
         * @instance
         */
        LoginRes.prototype.status = 0;

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @function create
         * @memberof TalkProto.LoginRes
         * @static
         * @param {TalkProto.ILoginRes=} [properties] Properties to set
         * @returns {TalkProto.LoginRes} LoginRes instance
         */
        LoginRes.create = function create(properties) {
            return new LoginRes(properties);
        };

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link TalkProto.LoginRes.verify|verify} messages.
         * @function encode
         * @memberof TalkProto.LoginRes
         * @static
         * @param {TalkProto.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link TalkProto.LoginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TalkProto.LoginRes
         * @static
         * @param {TalkProto.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof TalkProto.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TalkProto.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TalkProto.LoginRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TalkProto.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TalkProto.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRes message.
         * @function verify
         * @memberof TalkProto.LoginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TalkProto.LoginRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TalkProto.LoginRes} LoginRes
         */
        LoginRes.fromObject = function fromObject(object) {
            if (object instanceof $root.TalkProto.LoginRes)
                return object;
            var message = new $root.TalkProto.LoginRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TalkProto.LoginRes
         * @static
         * @param {TalkProto.LoginRes} message LoginRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this LoginRes to JSON.
         * @function toJSON
         * @memberof TalkProto.LoginRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRes;
    })();

    TalkProto.ExitReq = (function() {

        /**
         * Properties of an ExitReq.
         * @memberof TalkProto
         * @interface IExitReq
         */

        /**
         * Constructs a new ExitReq.
         * @memberof TalkProto
         * @classdesc Represents an ExitReq.
         * @implements IExitReq
         * @constructor
         * @param {TalkProto.IExitReq=} [properties] Properties to set
         */
        function ExitReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ExitReq instance using the specified properties.
         * @function create
         * @memberof TalkProto.ExitReq
         * @static
         * @param {TalkProto.IExitReq=} [properties] Properties to set
         * @returns {TalkProto.ExitReq} ExitReq instance
         */
        ExitReq.create = function create(properties) {
            return new ExitReq(properties);
        };

        /**
         * Encodes the specified ExitReq message. Does not implicitly {@link TalkProto.ExitReq.verify|verify} messages.
         * @function encode
         * @memberof TalkProto.ExitReq
         * @static
         * @param {TalkProto.IExitReq} message ExitReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ExitReq message, length delimited. Does not implicitly {@link TalkProto.ExitReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TalkProto.ExitReq
         * @static
         * @param {TalkProto.IExitReq} message ExitReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitReq message from the specified reader or buffer.
         * @function decode
         * @memberof TalkProto.ExitReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TalkProto.ExitReq} ExitReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TalkProto.ExitReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExitReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TalkProto.ExitReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TalkProto.ExitReq} ExitReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitReq message.
         * @function verify
         * @memberof TalkProto.ExitReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an ExitReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TalkProto.ExitReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TalkProto.ExitReq} ExitReq
         */
        ExitReq.fromObject = function fromObject(object) {
            if (object instanceof $root.TalkProto.ExitReq)
                return object;
            return new $root.TalkProto.ExitReq();
        };

        /**
         * Creates a plain object from an ExitReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TalkProto.ExitReq
         * @static
         * @param {TalkProto.ExitReq} message ExitReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ExitReq to JSON.
         * @function toJSON
         * @memberof TalkProto.ExitReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitReq;
    })();

    TalkProto.ExitRes = (function() {

        /**
         * Properties of an ExitRes.
         * @memberof TalkProto
         * @interface IExitRes
         * @property {number} status ExitRes status
         */

        /**
         * Constructs a new ExitRes.
         * @memberof TalkProto
         * @classdesc Represents an ExitRes.
         * @implements IExitRes
         * @constructor
         * @param {TalkProto.IExitRes=} [properties] Properties to set
         */
        function ExitRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExitRes status.
         * @member {number} status
         * @memberof TalkProto.ExitRes
         * @instance
         */
        ExitRes.prototype.status = 0;

        /**
         * Creates a new ExitRes instance using the specified properties.
         * @function create
         * @memberof TalkProto.ExitRes
         * @static
         * @param {TalkProto.IExitRes=} [properties] Properties to set
         * @returns {TalkProto.ExitRes} ExitRes instance
         */
        ExitRes.create = function create(properties) {
            return new ExitRes(properties);
        };

        /**
         * Encodes the specified ExitRes message. Does not implicitly {@link TalkProto.ExitRes.verify|verify} messages.
         * @function encode
         * @memberof TalkProto.ExitRes
         * @static
         * @param {TalkProto.IExitRes} message ExitRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified ExitRes message, length delimited. Does not implicitly {@link TalkProto.ExitRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TalkProto.ExitRes
         * @static
         * @param {TalkProto.IExitRes} message ExitRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitRes message from the specified reader or buffer.
         * @function decode
         * @memberof TalkProto.ExitRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TalkProto.ExitRes} ExitRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TalkProto.ExitRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes an ExitRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TalkProto.ExitRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TalkProto.ExitRes} ExitRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitRes message.
         * @function verify
         * @memberof TalkProto.ExitRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates an ExitRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TalkProto.ExitRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TalkProto.ExitRes} ExitRes
         */
        ExitRes.fromObject = function fromObject(object) {
            if (object instanceof $root.TalkProto.ExitRes)
                return object;
            var message = new $root.TalkProto.ExitRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from an ExitRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TalkProto.ExitRes
         * @static
         * @param {TalkProto.ExitRes} message ExitRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this ExitRes to JSON.
         * @function toJSON
         * @memberof TalkProto.ExitRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitRes;
    })();

    TalkProto.SendMsgReq = (function() {

        /**
         * Properties of a SendMsgReq.
         * @memberof TalkProto
         * @interface ISendMsgReq
         * @property {string} content SendMsgReq content
         */

        /**
         * Constructs a new SendMsgReq.
         * @memberof TalkProto
         * @classdesc Represents a SendMsgReq.
         * @implements ISendMsgReq
         * @constructor
         * @param {TalkProto.ISendMsgReq=} [properties] Properties to set
         */
        function SendMsgReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendMsgReq content.
         * @member {string} content
         * @memberof TalkProto.SendMsgReq
         * @instance
         */
        SendMsgReq.prototype.content = "";

        /**
         * Creates a new SendMsgReq instance using the specified properties.
         * @function create
         * @memberof TalkProto.SendMsgReq
         * @static
         * @param {TalkProto.ISendMsgReq=} [properties] Properties to set
         * @returns {TalkProto.SendMsgReq} SendMsgReq instance
         */
        SendMsgReq.create = function create(properties) {
            return new SendMsgReq(properties);
        };

        /**
         * Encodes the specified SendMsgReq message. Does not implicitly {@link TalkProto.SendMsgReq.verify|verify} messages.
         * @function encode
         * @memberof TalkProto.SendMsgReq
         * @static
         * @param {TalkProto.ISendMsgReq} message SendMsgReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMsgReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified SendMsgReq message, length delimited. Does not implicitly {@link TalkProto.SendMsgReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TalkProto.SendMsgReq
         * @static
         * @param {TalkProto.ISendMsgReq} message SendMsgReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMsgReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendMsgReq message from the specified reader or buffer.
         * @function decode
         * @memberof TalkProto.SendMsgReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TalkProto.SendMsgReq} SendMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMsgReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TalkProto.SendMsgReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("content"))
                throw $util.ProtocolError("missing required 'content'", { instance: message });
            return message;
        };

        /**
         * Decodes a SendMsgReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TalkProto.SendMsgReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TalkProto.SendMsgReq} SendMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMsgReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendMsgReq message.
         * @function verify
         * @memberof TalkProto.SendMsgReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendMsgReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.content))
                return "content: string expected";
            return null;
        };

        /**
         * Creates a SendMsgReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TalkProto.SendMsgReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TalkProto.SendMsgReq} SendMsgReq
         */
        SendMsgReq.fromObject = function fromObject(object) {
            if (object instanceof $root.TalkProto.SendMsgReq)
                return object;
            var message = new $root.TalkProto.SendMsgReq();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a SendMsgReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TalkProto.SendMsgReq
         * @static
         * @param {TalkProto.SendMsgReq} message SendMsgReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendMsgReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.content = "";
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this SendMsgReq to JSON.
         * @function toJSON
         * @memberof TalkProto.SendMsgReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendMsgReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendMsgReq;
    })();

    TalkProto.SendMsgRes = (function() {

        /**
         * Properties of a SendMsgRes.
         * @memberof TalkProto
         * @interface ISendMsgRes
         * @property {number} status SendMsgRes status
         */

        /**
         * Constructs a new SendMsgRes.
         * @memberof TalkProto
         * @classdesc Represents a SendMsgRes.
         * @implements ISendMsgRes
         * @constructor
         * @param {TalkProto.ISendMsgRes=} [properties] Properties to set
         */
        function SendMsgRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendMsgRes status.
         * @member {number} status
         * @memberof TalkProto.SendMsgRes
         * @instance
         */
        SendMsgRes.prototype.status = 0;

        /**
         * Creates a new SendMsgRes instance using the specified properties.
         * @function create
         * @memberof TalkProto.SendMsgRes
         * @static
         * @param {TalkProto.ISendMsgRes=} [properties] Properties to set
         * @returns {TalkProto.SendMsgRes} SendMsgRes instance
         */
        SendMsgRes.create = function create(properties) {
            return new SendMsgRes(properties);
        };

        /**
         * Encodes the specified SendMsgRes message. Does not implicitly {@link TalkProto.SendMsgRes.verify|verify} messages.
         * @function encode
         * @memberof TalkProto.SendMsgRes
         * @static
         * @param {TalkProto.ISendMsgRes} message SendMsgRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMsgRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified SendMsgRes message, length delimited. Does not implicitly {@link TalkProto.SendMsgRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TalkProto.SendMsgRes
         * @static
         * @param {TalkProto.ISendMsgRes} message SendMsgRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMsgRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendMsgRes message from the specified reader or buffer.
         * @function decode
         * @memberof TalkProto.SendMsgRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TalkProto.SendMsgRes} SendMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMsgRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TalkProto.SendMsgRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a SendMsgRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TalkProto.SendMsgRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TalkProto.SendMsgRes} SendMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMsgRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendMsgRes message.
         * @function verify
         * @memberof TalkProto.SendMsgRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendMsgRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates a SendMsgRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TalkProto.SendMsgRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TalkProto.SendMsgRes} SendMsgRes
         */
        SendMsgRes.fromObject = function fromObject(object) {
            if (object instanceof $root.TalkProto.SendMsgRes)
                return object;
            var message = new $root.TalkProto.SendMsgRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendMsgRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TalkProto.SendMsgRes
         * @static
         * @param {TalkProto.SendMsgRes} message SendMsgRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendMsgRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this SendMsgRes to JSON.
         * @function toJSON
         * @memberof TalkProto.SendMsgRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendMsgRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendMsgRes;
    })();

    TalkProto.OnUserLogin = (function() {

        /**
         * Properties of an OnUserLogin.
         * @memberof TalkProto
         * @interface IOnUserLogin
         * @property {string} ip OnUserLogin ip
         * @property {number} port OnUserLogin port
         */

        /**
         * Constructs a new OnUserLogin.
         * @memberof TalkProto
         * @classdesc Represents an OnUserLogin.
         * @implements IOnUserLogin
         * @constructor
         * @param {TalkProto.IOnUserLogin=} [properties] Properties to set
         */
        function OnUserLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OnUserLogin ip.
         * @member {string} ip
         * @memberof TalkProto.OnUserLogin
         * @instance
         */
        OnUserLogin.prototype.ip = "";

        /**
         * OnUserLogin port.
         * @member {number} port
         * @memberof TalkProto.OnUserLogin
         * @instance
         */
        OnUserLogin.prototype.port = 0;

        /**
         * Creates a new OnUserLogin instance using the specified properties.
         * @function create
         * @memberof TalkProto.OnUserLogin
         * @static
         * @param {TalkProto.IOnUserLogin=} [properties] Properties to set
         * @returns {TalkProto.OnUserLogin} OnUserLogin instance
         */
        OnUserLogin.create = function create(properties) {
            return new OnUserLogin(properties);
        };

        /**
         * Encodes the specified OnUserLogin message. Does not implicitly {@link TalkProto.OnUserLogin.verify|verify} messages.
         * @function encode
         * @memberof TalkProto.OnUserLogin
         * @static
         * @param {TalkProto.IOnUserLogin} message OnUserLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnUserLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.port);
            return writer;
        };

        /**
         * Encodes the specified OnUserLogin message, length delimited. Does not implicitly {@link TalkProto.OnUserLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TalkProto.OnUserLogin
         * @static
         * @param {TalkProto.IOnUserLogin} message OnUserLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnUserLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnUserLogin message from the specified reader or buffer.
         * @function decode
         * @memberof TalkProto.OnUserLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TalkProto.OnUserLogin} OnUserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnUserLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TalkProto.OnUserLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                case 2:
                    message.port = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ip"))
                throw $util.ProtocolError("missing required 'ip'", { instance: message });
            if (!message.hasOwnProperty("port"))
                throw $util.ProtocolError("missing required 'port'", { instance: message });
            return message;
        };

        /**
         * Decodes an OnUserLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TalkProto.OnUserLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TalkProto.OnUserLogin} OnUserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnUserLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnUserLogin message.
         * @function verify
         * @memberof TalkProto.OnUserLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnUserLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ip))
                return "ip: string expected";
            if (!$util.isInteger(message.port))
                return "port: integer expected";
            return null;
        };

        /**
         * Creates an OnUserLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TalkProto.OnUserLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TalkProto.OnUserLogin} OnUserLogin
         */
        OnUserLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.TalkProto.OnUserLogin)
                return object;
            var message = new $root.TalkProto.OnUserLogin();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.port != null)
                message.port = object.port | 0;
            return message;
        };

        /**
         * Creates a plain object from an OnUserLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TalkProto.OnUserLogin
         * @static
         * @param {TalkProto.OnUserLogin} message OnUserLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnUserLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ip = "";
                object.port = 0;
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            return object;
        };

        /**
         * Converts this OnUserLogin to JSON.
         * @function toJSON
         * @memberof TalkProto.OnUserLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnUserLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OnUserLogin;
    })();

    TalkProto.OnUserExit = (function() {

        /**
         * Properties of an OnUserExit.
         * @memberof TalkProto
         * @interface IOnUserExit
         * @property {string} ip OnUserExit ip
         * @property {number} port OnUserExit port
         */

        /**
         * Constructs a new OnUserExit.
         * @memberof TalkProto
         * @classdesc Represents an OnUserExit.
         * @implements IOnUserExit
         * @constructor
         * @param {TalkProto.IOnUserExit=} [properties] Properties to set
         */
        function OnUserExit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OnUserExit ip.
         * @member {string} ip
         * @memberof TalkProto.OnUserExit
         * @instance
         */
        OnUserExit.prototype.ip = "";

        /**
         * OnUserExit port.
         * @member {number} port
         * @memberof TalkProto.OnUserExit
         * @instance
         */
        OnUserExit.prototype.port = 0;

        /**
         * Creates a new OnUserExit instance using the specified properties.
         * @function create
         * @memberof TalkProto.OnUserExit
         * @static
         * @param {TalkProto.IOnUserExit=} [properties] Properties to set
         * @returns {TalkProto.OnUserExit} OnUserExit instance
         */
        OnUserExit.create = function create(properties) {
            return new OnUserExit(properties);
        };

        /**
         * Encodes the specified OnUserExit message. Does not implicitly {@link TalkProto.OnUserExit.verify|verify} messages.
         * @function encode
         * @memberof TalkProto.OnUserExit
         * @static
         * @param {TalkProto.IOnUserExit} message OnUserExit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnUserExit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.port);
            return writer;
        };

        /**
         * Encodes the specified OnUserExit message, length delimited. Does not implicitly {@link TalkProto.OnUserExit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TalkProto.OnUserExit
         * @static
         * @param {TalkProto.IOnUserExit} message OnUserExit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnUserExit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnUserExit message from the specified reader or buffer.
         * @function decode
         * @memberof TalkProto.OnUserExit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TalkProto.OnUserExit} OnUserExit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnUserExit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TalkProto.OnUserExit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                case 2:
                    message.port = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ip"))
                throw $util.ProtocolError("missing required 'ip'", { instance: message });
            if (!message.hasOwnProperty("port"))
                throw $util.ProtocolError("missing required 'port'", { instance: message });
            return message;
        };

        /**
         * Decodes an OnUserExit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TalkProto.OnUserExit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TalkProto.OnUserExit} OnUserExit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnUserExit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnUserExit message.
         * @function verify
         * @memberof TalkProto.OnUserExit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnUserExit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ip))
                return "ip: string expected";
            if (!$util.isInteger(message.port))
                return "port: integer expected";
            return null;
        };

        /**
         * Creates an OnUserExit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TalkProto.OnUserExit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TalkProto.OnUserExit} OnUserExit
         */
        OnUserExit.fromObject = function fromObject(object) {
            if (object instanceof $root.TalkProto.OnUserExit)
                return object;
            var message = new $root.TalkProto.OnUserExit();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.port != null)
                message.port = object.port | 0;
            return message;
        };

        /**
         * Creates a plain object from an OnUserExit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TalkProto.OnUserExit
         * @static
         * @param {TalkProto.OnUserExit} message OnUserExit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnUserExit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ip = "";
                object.port = 0;
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            return object;
        };

        /**
         * Converts this OnUserExit to JSON.
         * @function toJSON
         * @memberof TalkProto.OnUserExit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnUserExit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OnUserExit;
    })();

    TalkProto.OnSendMsg = (function() {

        /**
         * Properties of an OnSendMsg.
         * @memberof TalkProto
         * @interface IOnSendMsg
         * @property {string} ip OnSendMsg ip
         * @property {number} port OnSendMsg port
         * @property {string} content OnSendMsg content
         */

        /**
         * Constructs a new OnSendMsg.
         * @memberof TalkProto
         * @classdesc Represents an OnSendMsg.
         * @implements IOnSendMsg
         * @constructor
         * @param {TalkProto.IOnSendMsg=} [properties] Properties to set
         */
        function OnSendMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OnSendMsg ip.
         * @member {string} ip
         * @memberof TalkProto.OnSendMsg
         * @instance
         */
        OnSendMsg.prototype.ip = "";

        /**
         * OnSendMsg port.
         * @member {number} port
         * @memberof TalkProto.OnSendMsg
         * @instance
         */
        OnSendMsg.prototype.port = 0;

        /**
         * OnSendMsg content.
         * @member {string} content
         * @memberof TalkProto.OnSendMsg
         * @instance
         */
        OnSendMsg.prototype.content = "";

        /**
         * Creates a new OnSendMsg instance using the specified properties.
         * @function create
         * @memberof TalkProto.OnSendMsg
         * @static
         * @param {TalkProto.IOnSendMsg=} [properties] Properties to set
         * @returns {TalkProto.OnSendMsg} OnSendMsg instance
         */
        OnSendMsg.create = function create(properties) {
            return new OnSendMsg(properties);
        };

        /**
         * Encodes the specified OnSendMsg message. Does not implicitly {@link TalkProto.OnSendMsg.verify|verify} messages.
         * @function encode
         * @memberof TalkProto.OnSendMsg
         * @static
         * @param {TalkProto.IOnSendMsg} message OnSendMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnSendMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.port);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified OnSendMsg message, length delimited. Does not implicitly {@link TalkProto.OnSendMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TalkProto.OnSendMsg
         * @static
         * @param {TalkProto.IOnSendMsg} message OnSendMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnSendMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnSendMsg message from the specified reader or buffer.
         * @function decode
         * @memberof TalkProto.OnSendMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TalkProto.OnSendMsg} OnSendMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnSendMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TalkProto.OnSendMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                case 2:
                    message.port = reader.int32();
                    break;
                case 3:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ip"))
                throw $util.ProtocolError("missing required 'ip'", { instance: message });
            if (!message.hasOwnProperty("port"))
                throw $util.ProtocolError("missing required 'port'", { instance: message });
            if (!message.hasOwnProperty("content"))
                throw $util.ProtocolError("missing required 'content'", { instance: message });
            return message;
        };

        /**
         * Decodes an OnSendMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TalkProto.OnSendMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TalkProto.OnSendMsg} OnSendMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnSendMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnSendMsg message.
         * @function verify
         * @memberof TalkProto.OnSendMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnSendMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ip))
                return "ip: string expected";
            if (!$util.isInteger(message.port))
                return "port: integer expected";
            if (!$util.isString(message.content))
                return "content: string expected";
            return null;
        };

        /**
         * Creates an OnSendMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TalkProto.OnSendMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TalkProto.OnSendMsg} OnSendMsg
         */
        OnSendMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.TalkProto.OnSendMsg)
                return object;
            var message = new $root.TalkProto.OnSendMsg();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.port != null)
                message.port = object.port | 0;
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from an OnSendMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TalkProto.OnSendMsg
         * @static
         * @param {TalkProto.OnSendMsg} message OnSendMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnSendMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ip = "";
                object.port = 0;
                object.content = "";
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this OnSendMsg to JSON.
         * @function toJSON
         * @memberof TalkProto.OnSendMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnSendMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OnSendMsg;
    })();

    return TalkProto;
})();

$root.GameHoodleProto = (function() {

    /**
     * Namespace GameHoodleProto.
     * @exports GameHoodleProto
     * @namespace
     */
    var GameHoodleProto = {};

    /**
     * Cmd enum.
     * @name GameHoodleProto.Cmd
     * @enum {string}
     * @property {number} INVALED=0 INVALED value
     * @property {number} eCreateRoomReq=1 eCreateRoomReq value
     * @property {number} eCreateRoomRes=2 eCreateRoomRes value
     * @property {number} eJoinRoomReq=3 eJoinRoomReq value
     * @property {number} eJoinRoomRes=4 eJoinRoomRes value
     * @property {number} eExitRoomReq=5 eExitRoomReq value
     * @property {number} eExitRoomRes=6 eExitRoomRes value
     * @property {number} eDessolveReq=7 eDessolveReq value
     * @property {number} eDessolveRes=8 eDessolveRes value
     * @property {number} eGetRoomStatusReq=9 eGetRoomStatusReq value
     * @property {number} eGetRoomStatusRes=10 eGetRoomStatusRes value
     * @property {number} eBackRoomReq=11 eBackRoomReq value
     * @property {number} eBackRoomRes=12 eBackRoomRes value
     * @property {number} eCheckLinkGameReq=13 eCheckLinkGameReq value
     * @property {number} eCheckLinkGameRes=14 eCheckLinkGameRes value
     * @property {number} eUserInfoRes=15 eUserInfoRes value
     * @property {number} eGameRuleRes=16 eGameRuleRes value
     * @property {number} eRoomIdRes=17 eRoomIdRes value
     * @property {number} ePlayCountRes=18 ePlayCountRes value
     * @property {number} eUserReadyReq=19 eUserReadyReq value
     * @property {number} eUserReadyRes=20 eUserReadyRes value
     * @property {number} eGameStartRes=21 eGameStartRes value
     * @property {number} eGameEndRes=22 eGameEndRes value
     * @property {number} eLoginLogicReq=23 eLoginLogicReq value
     * @property {number} eLoginLogicRes=24 eLoginLogicRes value
     * @property {number} eUserOfflineRes=25 eUserOfflineRes value
     * @property {number} ePlayerFirstBallPosRes=26 ePlayerFirstBallPosRes value
     * @property {number} ePlayerPowerRes=27 ePlayerPowerRes value
     * @property {number} ePlayerShootReq=28 ePlayerShootReq value
     * @property {number} ePlayerShootRes=29 ePlayerShootRes value
     * @property {number} ePlayerBallPosReq=30 ePlayerBallPosReq value
     * @property {number} ePlayerBallPosRes=31 ePlayerBallPosRes value
     * @property {number} ePlayerIsShootedReq=32 ePlayerIsShootedReq value
     * @property {number} ePlayerIsShootedRes=33 ePlayerIsShootedRes value
     * @property {number} eGameResultRes=34 eGameResultRes value
     * @property {number} eTotalGameResultRes=35 eTotalGameResultRes value
     * @property {number} ePlayerScoreRes=36 ePlayerScoreRes value
     * @property {number} eUserMatchReq=37 eUserMatchReq value
     * @property {number} eUserMatchRes=38 eUserMatchRes value
     * @property {number} eUserStopMatchReq=39 eUserStopMatchReq value
     * @property {number} eUserStopMatchRes=40 eUserStopMatchRes value
     * @property {number} eUserGameInfoReq=41 eUserGameInfoReq value
     * @property {number} eUserGameInfoRes=42 eUserGameInfoRes value
     * @property {number} eUserBallInfoReq=43 eUserBallInfoReq value
     * @property {number} eUserBallInfoRes=44 eUserBallInfoRes value
     * @property {number} eUpdateUserBallReq=45 eUpdateUserBallReq value
     * @property {number} eUpdateUserBallRes=46 eUpdateUserBallRes value
     * @property {number} eStoreListReq=47 eStoreListReq value
     * @property {number} eStoreListRes=48 eStoreListRes value
     * @property {number} eBuyThingsReq=49 eBuyThingsReq value
     * @property {number} eBuyThingsRes=50 eBuyThingsRes value
     * @property {number} eUseHoodleBallReq=51 eUseHoodleBallReq value
     * @property {number} eUseHoodleBallRes=52 eUseHoodleBallRes value
     * @property {number} eUserConfigReq=53 eUserConfigReq value
     * @property {number} eUserConfigRes=54 eUserConfigRes value
     */
    GameHoodleProto.Cmd = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INVALED"] = 0;
        values[valuesById[1] = "eCreateRoomReq"] = 1;
        values[valuesById[2] = "eCreateRoomRes"] = 2;
        values[valuesById[3] = "eJoinRoomReq"] = 3;
        values[valuesById[4] = "eJoinRoomRes"] = 4;
        values[valuesById[5] = "eExitRoomReq"] = 5;
        values[valuesById[6] = "eExitRoomRes"] = 6;
        values[valuesById[7] = "eDessolveReq"] = 7;
        values[valuesById[8] = "eDessolveRes"] = 8;
        values[valuesById[9] = "eGetRoomStatusReq"] = 9;
        values[valuesById[10] = "eGetRoomStatusRes"] = 10;
        values[valuesById[11] = "eBackRoomReq"] = 11;
        values[valuesById[12] = "eBackRoomRes"] = 12;
        values[valuesById[13] = "eCheckLinkGameReq"] = 13;
        values[valuesById[14] = "eCheckLinkGameRes"] = 14;
        values[valuesById[15] = "eUserInfoRes"] = 15;
        values[valuesById[16] = "eGameRuleRes"] = 16;
        values[valuesById[17] = "eRoomIdRes"] = 17;
        values[valuesById[18] = "ePlayCountRes"] = 18;
        values[valuesById[19] = "eUserReadyReq"] = 19;
        values[valuesById[20] = "eUserReadyRes"] = 20;
        values[valuesById[21] = "eGameStartRes"] = 21;
        values[valuesById[22] = "eGameEndRes"] = 22;
        values[valuesById[23] = "eLoginLogicReq"] = 23;
        values[valuesById[24] = "eLoginLogicRes"] = 24;
        values[valuesById[25] = "eUserOfflineRes"] = 25;
        values[valuesById[26] = "ePlayerFirstBallPosRes"] = 26;
        values[valuesById[27] = "ePlayerPowerRes"] = 27;
        values[valuesById[28] = "ePlayerShootReq"] = 28;
        values[valuesById[29] = "ePlayerShootRes"] = 29;
        values[valuesById[30] = "ePlayerBallPosReq"] = 30;
        values[valuesById[31] = "ePlayerBallPosRes"] = 31;
        values[valuesById[32] = "ePlayerIsShootedReq"] = 32;
        values[valuesById[33] = "ePlayerIsShootedRes"] = 33;
        values[valuesById[34] = "eGameResultRes"] = 34;
        values[valuesById[35] = "eTotalGameResultRes"] = 35;
        values[valuesById[36] = "ePlayerScoreRes"] = 36;
        values[valuesById[37] = "eUserMatchReq"] = 37;
        values[valuesById[38] = "eUserMatchRes"] = 38;
        values[valuesById[39] = "eUserStopMatchReq"] = 39;
        values[valuesById[40] = "eUserStopMatchRes"] = 40;
        values[valuesById[41] = "eUserGameInfoReq"] = 41;
        values[valuesById[42] = "eUserGameInfoRes"] = 42;
        values[valuesById[43] = "eUserBallInfoReq"] = 43;
        values[valuesById[44] = "eUserBallInfoRes"] = 44;
        values[valuesById[45] = "eUpdateUserBallReq"] = 45;
        values[valuesById[46] = "eUpdateUserBallRes"] = 46;
        values[valuesById[47] = "eStoreListReq"] = 47;
        values[valuesById[48] = "eStoreListRes"] = 48;
        values[valuesById[49] = "eBuyThingsReq"] = 49;
        values[valuesById[50] = "eBuyThingsRes"] = 50;
        values[valuesById[51] = "eUseHoodleBallReq"] = 51;
        values[valuesById[52] = "eUseHoodleBallRes"] = 52;
        values[valuesById[53] = "eUserConfigReq"] = 53;
        values[valuesById[54] = "eUserConfigRes"] = 54;
        return values;
    })();

    GameHoodleProto.CreateRoomReq = (function() {

        /**
         * Properties of a CreateRoomReq.
         * @memberof GameHoodleProto
         * @interface ICreateRoomReq
         * @property {string} gamerule CreateRoomReq gamerule
         */

        /**
         * Constructs a new CreateRoomReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a CreateRoomReq.
         * @implements ICreateRoomReq
         * @constructor
         * @param {GameHoodleProto.ICreateRoomReq=} [properties] Properties to set
         */
        function CreateRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomReq gamerule.
         * @member {string} gamerule
         * @memberof GameHoodleProto.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.gamerule = "";

        /**
         * Creates a new CreateRoomReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.CreateRoomReq
         * @static
         * @param {GameHoodleProto.ICreateRoomReq=} [properties] Properties to set
         * @returns {GameHoodleProto.CreateRoomReq} CreateRoomReq instance
         */
        CreateRoomReq.create = function create(properties) {
            return new CreateRoomReq(properties);
        };

        /**
         * Encodes the specified CreateRoomReq message. Does not implicitly {@link GameHoodleProto.CreateRoomReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.CreateRoomReq
         * @static
         * @param {GameHoodleProto.ICreateRoomReq} message CreateRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.gamerule);
            return writer;
        };

        /**
         * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link GameHoodleProto.CreateRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.CreateRoomReq
         * @static
         * @param {GameHoodleProto.ICreateRoomReq} message CreateRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.CreateRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.CreateRoomReq} CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.CreateRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gamerule = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("gamerule"))
                throw $util.ProtocolError("missing required 'gamerule'", { instance: message });
            return message;
        };

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.CreateRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.CreateRoomReq} CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomReq message.
         * @function verify
         * @memberof GameHoodleProto.CreateRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.gamerule))
                return "gamerule: string expected";
            return null;
        };

        /**
         * Creates a CreateRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.CreateRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.CreateRoomReq} CreateRoomReq
         */
        CreateRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.CreateRoomReq)
                return object;
            var message = new $root.GameHoodleProto.CreateRoomReq();
            if (object.gamerule != null)
                message.gamerule = String(object.gamerule);
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.CreateRoomReq
         * @static
         * @param {GameHoodleProto.CreateRoomReq} message CreateRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.gamerule = "";
            if (message.gamerule != null && message.hasOwnProperty("gamerule"))
                object.gamerule = message.gamerule;
            return object;
        };

        /**
         * Converts this CreateRoomReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.CreateRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoomReq;
    })();

    GameHoodleProto.CreateRoomRes = (function() {

        /**
         * Properties of a CreateRoomRes.
         * @memberof GameHoodleProto
         * @interface ICreateRoomRes
         * @property {number} status CreateRoomRes status
         */

        /**
         * Constructs a new CreateRoomRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a CreateRoomRes.
         * @implements ICreateRoomRes
         * @constructor
         * @param {GameHoodleProto.ICreateRoomRes=} [properties] Properties to set
         */
        function CreateRoomRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomRes status.
         * @member {number} status
         * @memberof GameHoodleProto.CreateRoomRes
         * @instance
         */
        CreateRoomRes.prototype.status = 0;

        /**
         * Creates a new CreateRoomRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.CreateRoomRes
         * @static
         * @param {GameHoodleProto.ICreateRoomRes=} [properties] Properties to set
         * @returns {GameHoodleProto.CreateRoomRes} CreateRoomRes instance
         */
        CreateRoomRes.create = function create(properties) {
            return new CreateRoomRes(properties);
        };

        /**
         * Encodes the specified CreateRoomRes message. Does not implicitly {@link GameHoodleProto.CreateRoomRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.CreateRoomRes
         * @static
         * @param {GameHoodleProto.ICreateRoomRes} message CreateRoomRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            return writer;
        };

        /**
         * Encodes the specified CreateRoomRes message, length delimited. Does not implicitly {@link GameHoodleProto.CreateRoomRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.CreateRoomRes
         * @static
         * @param {GameHoodleProto.ICreateRoomRes} message CreateRoomRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.CreateRoomRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.CreateRoomRes} CreateRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.CreateRoomRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a CreateRoomRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.CreateRoomRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.CreateRoomRes} CreateRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomRes message.
         * @function verify
         * @memberof GameHoodleProto.CreateRoomRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates a CreateRoomRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.CreateRoomRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.CreateRoomRes} CreateRoomRes
         */
        CreateRoomRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.CreateRoomRes)
                return object;
            var message = new $root.GameHoodleProto.CreateRoomRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.CreateRoomRes
         * @static
         * @param {GameHoodleProto.CreateRoomRes} message CreateRoomRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this CreateRoomRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.CreateRoomRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoomRes;
    })();

    GameHoodleProto.JoinRoomReq = (function() {

        /**
         * Properties of a JoinRoomReq.
         * @memberof GameHoodleProto
         * @interface IJoinRoomReq
         * @property {string} roomid JoinRoomReq roomid
         */

        /**
         * Constructs a new JoinRoomReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a JoinRoomReq.
         * @implements IJoinRoomReq
         * @constructor
         * @param {GameHoodleProto.IJoinRoomReq=} [properties] Properties to set
         */
        function JoinRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomReq roomid.
         * @member {string} roomid
         * @memberof GameHoodleProto.JoinRoomReq
         * @instance
         */
        JoinRoomReq.prototype.roomid = "";

        /**
         * Creates a new JoinRoomReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.JoinRoomReq
         * @static
         * @param {GameHoodleProto.IJoinRoomReq=} [properties] Properties to set
         * @returns {GameHoodleProto.JoinRoomReq} JoinRoomReq instance
         */
        JoinRoomReq.create = function create(properties) {
            return new JoinRoomReq(properties);
        };

        /**
         * Encodes the specified JoinRoomReq message. Does not implicitly {@link GameHoodleProto.JoinRoomReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.JoinRoomReq
         * @static
         * @param {GameHoodleProto.IJoinRoomReq} message JoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomid);
            return writer;
        };

        /**
         * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link GameHoodleProto.JoinRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.JoinRoomReq
         * @static
         * @param {GameHoodleProto.IJoinRoomReq} message JoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.JoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.JoinRoomReq} JoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.JoinRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("roomid"))
                throw $util.ProtocolError("missing required 'roomid'", { instance: message });
            return message;
        };

        /**
         * Decodes a JoinRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.JoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.JoinRoomReq} JoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomReq message.
         * @function verify
         * @memberof GameHoodleProto.JoinRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.roomid))
                return "roomid: string expected";
            return null;
        };

        /**
         * Creates a JoinRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.JoinRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.JoinRoomReq} JoinRoomReq
         */
        JoinRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.JoinRoomReq)
                return object;
            var message = new $root.GameHoodleProto.JoinRoomReq();
            if (object.roomid != null)
                message.roomid = String(object.roomid);
            return message;
        };

        /**
         * Creates a plain object from a JoinRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.JoinRoomReq
         * @static
         * @param {GameHoodleProto.JoinRoomReq} message JoinRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.roomid = "";
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                object.roomid = message.roomid;
            return object;
        };

        /**
         * Converts this JoinRoomReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.JoinRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinRoomReq;
    })();

    GameHoodleProto.JoinRoomRes = (function() {

        /**
         * Properties of a JoinRoomRes.
         * @memberof GameHoodleProto
         * @interface IJoinRoomRes
         * @property {number} status JoinRoomRes status
         */

        /**
         * Constructs a new JoinRoomRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a JoinRoomRes.
         * @implements IJoinRoomRes
         * @constructor
         * @param {GameHoodleProto.IJoinRoomRes=} [properties] Properties to set
         */
        function JoinRoomRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomRes status.
         * @member {number} status
         * @memberof GameHoodleProto.JoinRoomRes
         * @instance
         */
        JoinRoomRes.prototype.status = 0;

        /**
         * Creates a new JoinRoomRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.JoinRoomRes
         * @static
         * @param {GameHoodleProto.IJoinRoomRes=} [properties] Properties to set
         * @returns {GameHoodleProto.JoinRoomRes} JoinRoomRes instance
         */
        JoinRoomRes.create = function create(properties) {
            return new JoinRoomRes(properties);
        };

        /**
         * Encodes the specified JoinRoomRes message. Does not implicitly {@link GameHoodleProto.JoinRoomRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.JoinRoomRes
         * @static
         * @param {GameHoodleProto.IJoinRoomRes} message JoinRoomRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            return writer;
        };

        /**
         * Encodes the specified JoinRoomRes message, length delimited. Does not implicitly {@link GameHoodleProto.JoinRoomRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.JoinRoomRes
         * @static
         * @param {GameHoodleProto.IJoinRoomRes} message JoinRoomRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.JoinRoomRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.JoinRoomRes} JoinRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.JoinRoomRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a JoinRoomRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.JoinRoomRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.JoinRoomRes} JoinRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomRes message.
         * @function verify
         * @memberof GameHoodleProto.JoinRoomRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates a JoinRoomRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.JoinRoomRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.JoinRoomRes} JoinRoomRes
         */
        JoinRoomRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.JoinRoomRes)
                return object;
            var message = new $root.GameHoodleProto.JoinRoomRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a JoinRoomRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.JoinRoomRes
         * @static
         * @param {GameHoodleProto.JoinRoomRes} message JoinRoomRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRoomRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this JoinRoomRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.JoinRoomRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRoomRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinRoomRes;
    })();

    GameHoodleProto.ExitRoomReq = (function() {

        /**
         * Properties of an ExitRoomReq.
         * @memberof GameHoodleProto
         * @interface IExitRoomReq
         */

        /**
         * Constructs a new ExitRoomReq.
         * @memberof GameHoodleProto
         * @classdesc Represents an ExitRoomReq.
         * @implements IExitRoomReq
         * @constructor
         * @param {GameHoodleProto.IExitRoomReq=} [properties] Properties to set
         */
        function ExitRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ExitRoomReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.ExitRoomReq
         * @static
         * @param {GameHoodleProto.IExitRoomReq=} [properties] Properties to set
         * @returns {GameHoodleProto.ExitRoomReq} ExitRoomReq instance
         */
        ExitRoomReq.create = function create(properties) {
            return new ExitRoomReq(properties);
        };

        /**
         * Encodes the specified ExitRoomReq message. Does not implicitly {@link GameHoodleProto.ExitRoomReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.ExitRoomReq
         * @static
         * @param {GameHoodleProto.IExitRoomReq} message ExitRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ExitRoomReq message, length delimited. Does not implicitly {@link GameHoodleProto.ExitRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.ExitRoomReq
         * @static
         * @param {GameHoodleProto.IExitRoomReq} message ExitRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.ExitRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.ExitRoomReq} ExitRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.ExitRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExitRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.ExitRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.ExitRoomReq} ExitRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitRoomReq message.
         * @function verify
         * @memberof GameHoodleProto.ExitRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an ExitRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.ExitRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.ExitRoomReq} ExitRoomReq
         */
        ExitRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.ExitRoomReq)
                return object;
            return new $root.GameHoodleProto.ExitRoomReq();
        };

        /**
         * Creates a plain object from an ExitRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.ExitRoomReq
         * @static
         * @param {GameHoodleProto.ExitRoomReq} message ExitRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitRoomReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ExitRoomReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.ExitRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitRoomReq;
    })();

    GameHoodleProto.ExitRoomRes = (function() {

        /**
         * Properties of an ExitRoomRes.
         * @memberof GameHoodleProto
         * @interface IExitRoomRes
         * @property {number} status ExitRoomRes status
         * @property {number|null} [numberid] ExitRoomRes numberid
         */

        /**
         * Constructs a new ExitRoomRes.
         * @memberof GameHoodleProto
         * @classdesc Represents an ExitRoomRes.
         * @implements IExitRoomRes
         * @constructor
         * @param {GameHoodleProto.IExitRoomRes=} [properties] Properties to set
         */
        function ExitRoomRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExitRoomRes status.
         * @member {number} status
         * @memberof GameHoodleProto.ExitRoomRes
         * @instance
         */
        ExitRoomRes.prototype.status = 0;

        /**
         * ExitRoomRes numberid.
         * @member {number} numberid
         * @memberof GameHoodleProto.ExitRoomRes
         * @instance
         */
        ExitRoomRes.prototype.numberid = 0;

        /**
         * Creates a new ExitRoomRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.ExitRoomRes
         * @static
         * @param {GameHoodleProto.IExitRoomRes=} [properties] Properties to set
         * @returns {GameHoodleProto.ExitRoomRes} ExitRoomRes instance
         */
        ExitRoomRes.create = function create(properties) {
            return new ExitRoomRes(properties);
        };

        /**
         * Encodes the specified ExitRoomRes message. Does not implicitly {@link GameHoodleProto.ExitRoomRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.ExitRoomRes
         * @static
         * @param {GameHoodleProto.IExitRoomRes} message ExitRoomRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.numberid != null && message.hasOwnProperty("numberid"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.numberid);
            return writer;
        };

        /**
         * Encodes the specified ExitRoomRes message, length delimited. Does not implicitly {@link GameHoodleProto.ExitRoomRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.ExitRoomRes
         * @static
         * @param {GameHoodleProto.IExitRoomRes} message ExitRoomRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitRoomRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.ExitRoomRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.ExitRoomRes} ExitRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.ExitRoomRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    message.numberid = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes an ExitRoomRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.ExitRoomRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.ExitRoomRes} ExitRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitRoomRes message.
         * @function verify
         * @memberof GameHoodleProto.ExitRoomRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitRoomRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.numberid != null && message.hasOwnProperty("numberid"))
                if (!$util.isInteger(message.numberid))
                    return "numberid: integer expected";
            return null;
        };

        /**
         * Creates an ExitRoomRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.ExitRoomRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.ExitRoomRes} ExitRoomRes
         */
        ExitRoomRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.ExitRoomRes)
                return object;
            var message = new $root.GameHoodleProto.ExitRoomRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.numberid != null)
                message.numberid = object.numberid | 0;
            return message;
        };

        /**
         * Creates a plain object from an ExitRoomRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.ExitRoomRes
         * @static
         * @param {GameHoodleProto.ExitRoomRes} message ExitRoomRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitRoomRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.numberid = 0;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.numberid != null && message.hasOwnProperty("numberid"))
                object.numberid = message.numberid;
            return object;
        };

        /**
         * Converts this ExitRoomRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.ExitRoomRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitRoomRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitRoomRes;
    })();

    GameHoodleProto.DessolveReq = (function() {

        /**
         * Properties of a DessolveReq.
         * @memberof GameHoodleProto
         * @interface IDessolveReq
         */

        /**
         * Constructs a new DessolveReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a DessolveReq.
         * @implements IDessolveReq
         * @constructor
         * @param {GameHoodleProto.IDessolveReq=} [properties] Properties to set
         */
        function DessolveReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DessolveReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.DessolveReq
         * @static
         * @param {GameHoodleProto.IDessolveReq=} [properties] Properties to set
         * @returns {GameHoodleProto.DessolveReq} DessolveReq instance
         */
        DessolveReq.create = function create(properties) {
            return new DessolveReq(properties);
        };

        /**
         * Encodes the specified DessolveReq message. Does not implicitly {@link GameHoodleProto.DessolveReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.DessolveReq
         * @static
         * @param {GameHoodleProto.IDessolveReq} message DessolveReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DessolveReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DessolveReq message, length delimited. Does not implicitly {@link GameHoodleProto.DessolveReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.DessolveReq
         * @static
         * @param {GameHoodleProto.IDessolveReq} message DessolveReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DessolveReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DessolveReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.DessolveReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.DessolveReq} DessolveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DessolveReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.DessolveReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DessolveReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.DessolveReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.DessolveReq} DessolveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DessolveReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DessolveReq message.
         * @function verify
         * @memberof GameHoodleProto.DessolveReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DessolveReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a DessolveReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.DessolveReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.DessolveReq} DessolveReq
         */
        DessolveReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.DessolveReq)
                return object;
            return new $root.GameHoodleProto.DessolveReq();
        };

        /**
         * Creates a plain object from a DessolveReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.DessolveReq
         * @static
         * @param {GameHoodleProto.DessolveReq} message DessolveReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DessolveReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this DessolveReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.DessolveReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DessolveReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DessolveReq;
    })();

    GameHoodleProto.DessolveRes = (function() {

        /**
         * Properties of a DessolveRes.
         * @memberof GameHoodleProto
         * @interface IDessolveRes
         * @property {number} status DessolveRes status
         */

        /**
         * Constructs a new DessolveRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a DessolveRes.
         * @implements IDessolveRes
         * @constructor
         * @param {GameHoodleProto.IDessolveRes=} [properties] Properties to set
         */
        function DessolveRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DessolveRes status.
         * @member {number} status
         * @memberof GameHoodleProto.DessolveRes
         * @instance
         */
        DessolveRes.prototype.status = 0;

        /**
         * Creates a new DessolveRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.DessolveRes
         * @static
         * @param {GameHoodleProto.IDessolveRes=} [properties] Properties to set
         * @returns {GameHoodleProto.DessolveRes} DessolveRes instance
         */
        DessolveRes.create = function create(properties) {
            return new DessolveRes(properties);
        };

        /**
         * Encodes the specified DessolveRes message. Does not implicitly {@link GameHoodleProto.DessolveRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.DessolveRes
         * @static
         * @param {GameHoodleProto.IDessolveRes} message DessolveRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DessolveRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            return writer;
        };

        /**
         * Encodes the specified DessolveRes message, length delimited. Does not implicitly {@link GameHoodleProto.DessolveRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.DessolveRes
         * @static
         * @param {GameHoodleProto.IDessolveRes} message DessolveRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DessolveRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DessolveRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.DessolveRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.DessolveRes} DessolveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DessolveRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.DessolveRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a DessolveRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.DessolveRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.DessolveRes} DessolveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DessolveRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DessolveRes message.
         * @function verify
         * @memberof GameHoodleProto.DessolveRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DessolveRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates a DessolveRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.DessolveRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.DessolveRes} DessolveRes
         */
        DessolveRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.DessolveRes)
                return object;
            var message = new $root.GameHoodleProto.DessolveRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a DessolveRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.DessolveRes
         * @static
         * @param {GameHoodleProto.DessolveRes} message DessolveRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DessolveRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this DessolveRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.DessolveRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DessolveRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DessolveRes;
    })();

    GameHoodleProto.GetRoomStatusReq = (function() {

        /**
         * Properties of a GetRoomStatusReq.
         * @memberof GameHoodleProto
         * @interface IGetRoomStatusReq
         */

        /**
         * Constructs a new GetRoomStatusReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a GetRoomStatusReq.
         * @implements IGetRoomStatusReq
         * @constructor
         * @param {GameHoodleProto.IGetRoomStatusReq=} [properties] Properties to set
         */
        function GetRoomStatusReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetRoomStatusReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.GetRoomStatusReq
         * @static
         * @param {GameHoodleProto.IGetRoomStatusReq=} [properties] Properties to set
         * @returns {GameHoodleProto.GetRoomStatusReq} GetRoomStatusReq instance
         */
        GetRoomStatusReq.create = function create(properties) {
            return new GetRoomStatusReq(properties);
        };

        /**
         * Encodes the specified GetRoomStatusReq message. Does not implicitly {@link GameHoodleProto.GetRoomStatusReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.GetRoomStatusReq
         * @static
         * @param {GameHoodleProto.IGetRoomStatusReq} message GetRoomStatusReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomStatusReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetRoomStatusReq message, length delimited. Does not implicitly {@link GameHoodleProto.GetRoomStatusReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.GetRoomStatusReq
         * @static
         * @param {GameHoodleProto.IGetRoomStatusReq} message GetRoomStatusReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomStatusReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoomStatusReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.GetRoomStatusReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.GetRoomStatusReq} GetRoomStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomStatusReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.GetRoomStatusReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRoomStatusReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.GetRoomStatusReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.GetRoomStatusReq} GetRoomStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomStatusReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRoomStatusReq message.
         * @function verify
         * @memberof GameHoodleProto.GetRoomStatusReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRoomStatusReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetRoomStatusReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.GetRoomStatusReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.GetRoomStatusReq} GetRoomStatusReq
         */
        GetRoomStatusReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.GetRoomStatusReq)
                return object;
            return new $root.GameHoodleProto.GetRoomStatusReq();
        };

        /**
         * Creates a plain object from a GetRoomStatusReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.GetRoomStatusReq
         * @static
         * @param {GameHoodleProto.GetRoomStatusReq} message GetRoomStatusReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoomStatusReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetRoomStatusReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.GetRoomStatusReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoomStatusReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRoomStatusReq;
    })();

    GameHoodleProto.GetRoomStatusRes = (function() {

        /**
         * Properties of a GetRoomStatusRes.
         * @memberof GameHoodleProto
         * @interface IGetRoomStatusRes
         * @property {number} status GetRoomStatusRes status
         */

        /**
         * Constructs a new GetRoomStatusRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a GetRoomStatusRes.
         * @implements IGetRoomStatusRes
         * @constructor
         * @param {GameHoodleProto.IGetRoomStatusRes=} [properties] Properties to set
         */
        function GetRoomStatusRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoomStatusRes status.
         * @member {number} status
         * @memberof GameHoodleProto.GetRoomStatusRes
         * @instance
         */
        GetRoomStatusRes.prototype.status = 0;

        /**
         * Creates a new GetRoomStatusRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.GetRoomStatusRes
         * @static
         * @param {GameHoodleProto.IGetRoomStatusRes=} [properties] Properties to set
         * @returns {GameHoodleProto.GetRoomStatusRes} GetRoomStatusRes instance
         */
        GetRoomStatusRes.create = function create(properties) {
            return new GetRoomStatusRes(properties);
        };

        /**
         * Encodes the specified GetRoomStatusRes message. Does not implicitly {@link GameHoodleProto.GetRoomStatusRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.GetRoomStatusRes
         * @static
         * @param {GameHoodleProto.IGetRoomStatusRes} message GetRoomStatusRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomStatusRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            return writer;
        };

        /**
         * Encodes the specified GetRoomStatusRes message, length delimited. Does not implicitly {@link GameHoodleProto.GetRoomStatusRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.GetRoomStatusRes
         * @static
         * @param {GameHoodleProto.IGetRoomStatusRes} message GetRoomStatusRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomStatusRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoomStatusRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.GetRoomStatusRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.GetRoomStatusRes} GetRoomStatusRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomStatusRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.GetRoomStatusRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a GetRoomStatusRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.GetRoomStatusRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.GetRoomStatusRes} GetRoomStatusRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomStatusRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRoomStatusRes message.
         * @function verify
         * @memberof GameHoodleProto.GetRoomStatusRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRoomStatusRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates a GetRoomStatusRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.GetRoomStatusRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.GetRoomStatusRes} GetRoomStatusRes
         */
        GetRoomStatusRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.GetRoomStatusRes)
                return object;
            var message = new $root.GameHoodleProto.GetRoomStatusRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetRoomStatusRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.GetRoomStatusRes
         * @static
         * @param {GameHoodleProto.GetRoomStatusRes} message GetRoomStatusRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoomStatusRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this GetRoomStatusRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.GetRoomStatusRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoomStatusRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRoomStatusRes;
    })();

    GameHoodleProto.BackRoomReq = (function() {

        /**
         * Properties of a BackRoomReq.
         * @memberof GameHoodleProto
         * @interface IBackRoomReq
         */

        /**
         * Constructs a new BackRoomReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a BackRoomReq.
         * @implements IBackRoomReq
         * @constructor
         * @param {GameHoodleProto.IBackRoomReq=} [properties] Properties to set
         */
        function BackRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BackRoomReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.BackRoomReq
         * @static
         * @param {GameHoodleProto.IBackRoomReq=} [properties] Properties to set
         * @returns {GameHoodleProto.BackRoomReq} BackRoomReq instance
         */
        BackRoomReq.create = function create(properties) {
            return new BackRoomReq(properties);
        };

        /**
         * Encodes the specified BackRoomReq message. Does not implicitly {@link GameHoodleProto.BackRoomReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.BackRoomReq
         * @static
         * @param {GameHoodleProto.IBackRoomReq} message BackRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BackRoomReq message, length delimited. Does not implicitly {@link GameHoodleProto.BackRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.BackRoomReq
         * @static
         * @param {GameHoodleProto.IBackRoomReq} message BackRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BackRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.BackRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.BackRoomReq} BackRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.BackRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BackRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.BackRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.BackRoomReq} BackRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BackRoomReq message.
         * @function verify
         * @memberof GameHoodleProto.BackRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BackRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BackRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.BackRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.BackRoomReq} BackRoomReq
         */
        BackRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.BackRoomReq)
                return object;
            return new $root.GameHoodleProto.BackRoomReq();
        };

        /**
         * Creates a plain object from a BackRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.BackRoomReq
         * @static
         * @param {GameHoodleProto.BackRoomReq} message BackRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BackRoomReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BackRoomReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.BackRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BackRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BackRoomReq;
    })();

    GameHoodleProto.BackRoomRes = (function() {

        /**
         * Properties of a BackRoomRes.
         * @memberof GameHoodleProto
         * @interface IBackRoomRes
         * @property {number} status BackRoomRes status
         */

        /**
         * Constructs a new BackRoomRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a BackRoomRes.
         * @implements IBackRoomRes
         * @constructor
         * @param {GameHoodleProto.IBackRoomRes=} [properties] Properties to set
         */
        function BackRoomRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BackRoomRes status.
         * @member {number} status
         * @memberof GameHoodleProto.BackRoomRes
         * @instance
         */
        BackRoomRes.prototype.status = 0;

        /**
         * Creates a new BackRoomRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.BackRoomRes
         * @static
         * @param {GameHoodleProto.IBackRoomRes=} [properties] Properties to set
         * @returns {GameHoodleProto.BackRoomRes} BackRoomRes instance
         */
        BackRoomRes.create = function create(properties) {
            return new BackRoomRes(properties);
        };

        /**
         * Encodes the specified BackRoomRes message. Does not implicitly {@link GameHoodleProto.BackRoomRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.BackRoomRes
         * @static
         * @param {GameHoodleProto.IBackRoomRes} message BackRoomRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackRoomRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            return writer;
        };

        /**
         * Encodes the specified BackRoomRes message, length delimited. Does not implicitly {@link GameHoodleProto.BackRoomRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.BackRoomRes
         * @static
         * @param {GameHoodleProto.IBackRoomRes} message BackRoomRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BackRoomRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.BackRoomRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.BackRoomRes} BackRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackRoomRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.BackRoomRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a BackRoomRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.BackRoomRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.BackRoomRes} BackRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackRoomRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BackRoomRes message.
         * @function verify
         * @memberof GameHoodleProto.BackRoomRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BackRoomRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates a BackRoomRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.BackRoomRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.BackRoomRes} BackRoomRes
         */
        BackRoomRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.BackRoomRes)
                return object;
            var message = new $root.GameHoodleProto.BackRoomRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a BackRoomRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.BackRoomRes
         * @static
         * @param {GameHoodleProto.BackRoomRes} message BackRoomRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BackRoomRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this BackRoomRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.BackRoomRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BackRoomRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BackRoomRes;
    })();

    GameHoodleProto.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof GameHoodleProto
         * @interface IUserInfo
         * @property {string} numberid UserInfo numberid
         * @property {string} userinfostring UserInfo userinfostring
         */

        /**
         * Constructs a new UserInfo.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {GameHoodleProto.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo numberid.
         * @member {string} numberid
         * @memberof GameHoodleProto.UserInfo
         * @instance
         */
        UserInfo.prototype.numberid = "";

        /**
         * UserInfo userinfostring.
         * @member {string} userinfostring
         * @memberof GameHoodleProto.UserInfo
         * @instance
         */
        UserInfo.prototype.userinfostring = "";

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserInfo
         * @static
         * @param {GameHoodleProto.IUserInfo=} [properties] Properties to set
         * @returns {GameHoodleProto.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link GameHoodleProto.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserInfo
         * @static
         * @param {GameHoodleProto.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.numberid);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.userinfostring);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link GameHoodleProto.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserInfo
         * @static
         * @param {GameHoodleProto.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.numberid = reader.string();
                    break;
                case 2:
                    message.userinfostring = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("numberid"))
                throw $util.ProtocolError("missing required 'numberid'", { instance: message });
            if (!message.hasOwnProperty("userinfostring"))
                throw $util.ProtocolError("missing required 'userinfostring'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof GameHoodleProto.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.numberid))
                return "numberid: string expected";
            if (!$util.isString(message.userinfostring))
                return "userinfostring: string expected";
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserInfo)
                return object;
            var message = new $root.GameHoodleProto.UserInfo();
            if (object.numberid != null)
                message.numberid = String(object.numberid);
            if (object.userinfostring != null)
                message.userinfostring = String(object.userinfostring);
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserInfo
         * @static
         * @param {GameHoodleProto.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.numberid = "";
                object.userinfostring = "";
            }
            if (message.numberid != null && message.hasOwnProperty("numberid"))
                object.numberid = message.numberid;
            if (message.userinfostring != null && message.hasOwnProperty("userinfostring"))
                object.userinfostring = message.userinfostring;
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    GameHoodleProto.CheckLinkGameReq = (function() {

        /**
         * Properties of a CheckLinkGameReq.
         * @memberof GameHoodleProto
         * @interface ICheckLinkGameReq
         */

        /**
         * Constructs a new CheckLinkGameReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a CheckLinkGameReq.
         * @implements ICheckLinkGameReq
         * @constructor
         * @param {GameHoodleProto.ICheckLinkGameReq=} [properties] Properties to set
         */
        function CheckLinkGameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CheckLinkGameReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.CheckLinkGameReq
         * @static
         * @param {GameHoodleProto.ICheckLinkGameReq=} [properties] Properties to set
         * @returns {GameHoodleProto.CheckLinkGameReq} CheckLinkGameReq instance
         */
        CheckLinkGameReq.create = function create(properties) {
            return new CheckLinkGameReq(properties);
        };

        /**
         * Encodes the specified CheckLinkGameReq message. Does not implicitly {@link GameHoodleProto.CheckLinkGameReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.CheckLinkGameReq
         * @static
         * @param {GameHoodleProto.ICheckLinkGameReq} message CheckLinkGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckLinkGameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CheckLinkGameReq message, length delimited. Does not implicitly {@link GameHoodleProto.CheckLinkGameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.CheckLinkGameReq
         * @static
         * @param {GameHoodleProto.ICheckLinkGameReq} message CheckLinkGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckLinkGameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckLinkGameReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.CheckLinkGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.CheckLinkGameReq} CheckLinkGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckLinkGameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.CheckLinkGameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CheckLinkGameReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.CheckLinkGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.CheckLinkGameReq} CheckLinkGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckLinkGameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckLinkGameReq message.
         * @function verify
         * @memberof GameHoodleProto.CheckLinkGameReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckLinkGameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CheckLinkGameReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.CheckLinkGameReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.CheckLinkGameReq} CheckLinkGameReq
         */
        CheckLinkGameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.CheckLinkGameReq)
                return object;
            return new $root.GameHoodleProto.CheckLinkGameReq();
        };

        /**
         * Creates a plain object from a CheckLinkGameReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.CheckLinkGameReq
         * @static
         * @param {GameHoodleProto.CheckLinkGameReq} message CheckLinkGameReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckLinkGameReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CheckLinkGameReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.CheckLinkGameReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckLinkGameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CheckLinkGameReq;
    })();

    GameHoodleProto.CheckLinkGameRes = (function() {

        /**
         * Properties of a CheckLinkGameRes.
         * @memberof GameHoodleProto
         * @interface ICheckLinkGameRes
         * @property {number} status CheckLinkGameRes status
         */

        /**
         * Constructs a new CheckLinkGameRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a CheckLinkGameRes.
         * @implements ICheckLinkGameRes
         * @constructor
         * @param {GameHoodleProto.ICheckLinkGameRes=} [properties] Properties to set
         */
        function CheckLinkGameRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CheckLinkGameRes status.
         * @member {number} status
         * @memberof GameHoodleProto.CheckLinkGameRes
         * @instance
         */
        CheckLinkGameRes.prototype.status = 0;

        /**
         * Creates a new CheckLinkGameRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.CheckLinkGameRes
         * @static
         * @param {GameHoodleProto.ICheckLinkGameRes=} [properties] Properties to set
         * @returns {GameHoodleProto.CheckLinkGameRes} CheckLinkGameRes instance
         */
        CheckLinkGameRes.create = function create(properties) {
            return new CheckLinkGameRes(properties);
        };

        /**
         * Encodes the specified CheckLinkGameRes message. Does not implicitly {@link GameHoodleProto.CheckLinkGameRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.CheckLinkGameRes
         * @static
         * @param {GameHoodleProto.ICheckLinkGameRes} message CheckLinkGameRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckLinkGameRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            return writer;
        };

        /**
         * Encodes the specified CheckLinkGameRes message, length delimited. Does not implicitly {@link GameHoodleProto.CheckLinkGameRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.CheckLinkGameRes
         * @static
         * @param {GameHoodleProto.ICheckLinkGameRes} message CheckLinkGameRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckLinkGameRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckLinkGameRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.CheckLinkGameRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.CheckLinkGameRes} CheckLinkGameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckLinkGameRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.CheckLinkGameRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a CheckLinkGameRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.CheckLinkGameRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.CheckLinkGameRes} CheckLinkGameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckLinkGameRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckLinkGameRes message.
         * @function verify
         * @memberof GameHoodleProto.CheckLinkGameRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckLinkGameRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates a CheckLinkGameRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.CheckLinkGameRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.CheckLinkGameRes} CheckLinkGameRes
         */
        CheckLinkGameRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.CheckLinkGameRes)
                return object;
            var message = new $root.GameHoodleProto.CheckLinkGameRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a CheckLinkGameRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.CheckLinkGameRes
         * @static
         * @param {GameHoodleProto.CheckLinkGameRes} message CheckLinkGameRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckLinkGameRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this CheckLinkGameRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.CheckLinkGameRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckLinkGameRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CheckLinkGameRes;
    })();

    GameHoodleProto.UserInfoRes = (function() {

        /**
         * Properties of a UserInfoRes.
         * @memberof GameHoodleProto
         * @interface IUserInfoRes
         * @property {Array.<GameHoodleProto.IUserInfo>|null} [userinfo] UserInfoRes userinfo
         */

        /**
         * Constructs a new UserInfoRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserInfoRes.
         * @implements IUserInfoRes
         * @constructor
         * @param {GameHoodleProto.IUserInfoRes=} [properties] Properties to set
         */
        function UserInfoRes(properties) {
            this.userinfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfoRes userinfo.
         * @member {Array.<GameHoodleProto.IUserInfo>} userinfo
         * @memberof GameHoodleProto.UserInfoRes
         * @instance
         */
        UserInfoRes.prototype.userinfo = $util.emptyArray;

        /**
         * Creates a new UserInfoRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserInfoRes
         * @static
         * @param {GameHoodleProto.IUserInfoRes=} [properties] Properties to set
         * @returns {GameHoodleProto.UserInfoRes} UserInfoRes instance
         */
        UserInfoRes.create = function create(properties) {
            return new UserInfoRes(properties);
        };

        /**
         * Encodes the specified UserInfoRes message. Does not implicitly {@link GameHoodleProto.UserInfoRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserInfoRes
         * @static
         * @param {GameHoodleProto.IUserInfoRes} message UserInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userinfo != null && message.userinfo.length)
                for (var i = 0; i < message.userinfo.length; ++i)
                    $root.GameHoodleProto.UserInfo.encode(message.userinfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserInfoRes message, length delimited. Does not implicitly {@link GameHoodleProto.UserInfoRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserInfoRes
         * @static
         * @param {GameHoodleProto.IUserInfoRes} message UserInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfoRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserInfoRes} UserInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserInfoRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.userinfo && message.userinfo.length))
                        message.userinfo = [];
                    message.userinfo.push($root.GameHoodleProto.UserInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfoRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserInfoRes} UserInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfoRes message.
         * @function verify
         * @memberof GameHoodleProto.UserInfoRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfoRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userinfo != null && message.hasOwnProperty("userinfo")) {
                if (!Array.isArray(message.userinfo))
                    return "userinfo: array expected";
                for (var i = 0; i < message.userinfo.length; ++i) {
                    var error = $root.GameHoodleProto.UserInfo.verify(message.userinfo[i]);
                    if (error)
                        return "userinfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserInfoRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserInfoRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserInfoRes} UserInfoRes
         */
        UserInfoRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserInfoRes)
                return object;
            var message = new $root.GameHoodleProto.UserInfoRes();
            if (object.userinfo) {
                if (!Array.isArray(object.userinfo))
                    throw TypeError(".GameHoodleProto.UserInfoRes.userinfo: array expected");
                message.userinfo = [];
                for (var i = 0; i < object.userinfo.length; ++i) {
                    if (typeof object.userinfo[i] !== "object")
                        throw TypeError(".GameHoodleProto.UserInfoRes.userinfo: object expected");
                    message.userinfo[i] = $root.GameHoodleProto.UserInfo.fromObject(object.userinfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserInfoRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserInfoRes
         * @static
         * @param {GameHoodleProto.UserInfoRes} message UserInfoRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfoRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userinfo = [];
            if (message.userinfo && message.userinfo.length) {
                object.userinfo = [];
                for (var j = 0; j < message.userinfo.length; ++j)
                    object.userinfo[j] = $root.GameHoodleProto.UserInfo.toObject(message.userinfo[j], options);
            }
            return object;
        };

        /**
         * Converts this UserInfoRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserInfoRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfoRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfoRes;
    })();

    GameHoodleProto.GameRuleRes = (function() {

        /**
         * Properties of a GameRuleRes.
         * @memberof GameHoodleProto
         * @interface IGameRuleRes
         * @property {string} gamerule GameRuleRes gamerule
         */

        /**
         * Constructs a new GameRuleRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a GameRuleRes.
         * @implements IGameRuleRes
         * @constructor
         * @param {GameHoodleProto.IGameRuleRes=} [properties] Properties to set
         */
        function GameRuleRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameRuleRes gamerule.
         * @member {string} gamerule
         * @memberof GameHoodleProto.GameRuleRes
         * @instance
         */
        GameRuleRes.prototype.gamerule = "";

        /**
         * Creates a new GameRuleRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.GameRuleRes
         * @static
         * @param {GameHoodleProto.IGameRuleRes=} [properties] Properties to set
         * @returns {GameHoodleProto.GameRuleRes} GameRuleRes instance
         */
        GameRuleRes.create = function create(properties) {
            return new GameRuleRes(properties);
        };

        /**
         * Encodes the specified GameRuleRes message. Does not implicitly {@link GameHoodleProto.GameRuleRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.GameRuleRes
         * @static
         * @param {GameHoodleProto.IGameRuleRes} message GameRuleRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRuleRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.gamerule);
            return writer;
        };

        /**
         * Encodes the specified GameRuleRes message, length delimited. Does not implicitly {@link GameHoodleProto.GameRuleRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.GameRuleRes
         * @static
         * @param {GameHoodleProto.IGameRuleRes} message GameRuleRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRuleRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameRuleRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.GameRuleRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.GameRuleRes} GameRuleRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRuleRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.GameRuleRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gamerule = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("gamerule"))
                throw $util.ProtocolError("missing required 'gamerule'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameRuleRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.GameRuleRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.GameRuleRes} GameRuleRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRuleRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameRuleRes message.
         * @function verify
         * @memberof GameHoodleProto.GameRuleRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameRuleRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.gamerule))
                return "gamerule: string expected";
            return null;
        };

        /**
         * Creates a GameRuleRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.GameRuleRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.GameRuleRes} GameRuleRes
         */
        GameRuleRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.GameRuleRes)
                return object;
            var message = new $root.GameHoodleProto.GameRuleRes();
            if (object.gamerule != null)
                message.gamerule = String(object.gamerule);
            return message;
        };

        /**
         * Creates a plain object from a GameRuleRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.GameRuleRes
         * @static
         * @param {GameHoodleProto.GameRuleRes} message GameRuleRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameRuleRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.gamerule = "";
            if (message.gamerule != null && message.hasOwnProperty("gamerule"))
                object.gamerule = message.gamerule;
            return object;
        };

        /**
         * Converts this GameRuleRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.GameRuleRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameRuleRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameRuleRes;
    })();

    GameHoodleProto.RoomIdRes = (function() {

        /**
         * Properties of a RoomIdRes.
         * @memberof GameHoodleProto
         * @interface IRoomIdRes
         * @property {string} roomid RoomIdRes roomid
         */

        /**
         * Constructs a new RoomIdRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a RoomIdRes.
         * @implements IRoomIdRes
         * @constructor
         * @param {GameHoodleProto.IRoomIdRes=} [properties] Properties to set
         */
        function RoomIdRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomIdRes roomid.
         * @member {string} roomid
         * @memberof GameHoodleProto.RoomIdRes
         * @instance
         */
        RoomIdRes.prototype.roomid = "";

        /**
         * Creates a new RoomIdRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.RoomIdRes
         * @static
         * @param {GameHoodleProto.IRoomIdRes=} [properties] Properties to set
         * @returns {GameHoodleProto.RoomIdRes} RoomIdRes instance
         */
        RoomIdRes.create = function create(properties) {
            return new RoomIdRes(properties);
        };

        /**
         * Encodes the specified RoomIdRes message. Does not implicitly {@link GameHoodleProto.RoomIdRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.RoomIdRes
         * @static
         * @param {GameHoodleProto.IRoomIdRes} message RoomIdRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomIdRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomid);
            return writer;
        };

        /**
         * Encodes the specified RoomIdRes message, length delimited. Does not implicitly {@link GameHoodleProto.RoomIdRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.RoomIdRes
         * @static
         * @param {GameHoodleProto.IRoomIdRes} message RoomIdRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomIdRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomIdRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.RoomIdRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.RoomIdRes} RoomIdRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomIdRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.RoomIdRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("roomid"))
                throw $util.ProtocolError("missing required 'roomid'", { instance: message });
            return message;
        };

        /**
         * Decodes a RoomIdRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.RoomIdRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.RoomIdRes} RoomIdRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomIdRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomIdRes message.
         * @function verify
         * @memberof GameHoodleProto.RoomIdRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomIdRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.roomid))
                return "roomid: string expected";
            return null;
        };

        /**
         * Creates a RoomIdRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.RoomIdRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.RoomIdRes} RoomIdRes
         */
        RoomIdRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.RoomIdRes)
                return object;
            var message = new $root.GameHoodleProto.RoomIdRes();
            if (object.roomid != null)
                message.roomid = String(object.roomid);
            return message;
        };

        /**
         * Creates a plain object from a RoomIdRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.RoomIdRes
         * @static
         * @param {GameHoodleProto.RoomIdRes} message RoomIdRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomIdRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.roomid = "";
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                object.roomid = message.roomid;
            return object;
        };

        /**
         * Converts this RoomIdRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.RoomIdRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomIdRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomIdRes;
    })();

    GameHoodleProto.PlayCountRes = (function() {

        /**
         * Properties of a PlayCountRes.
         * @memberof GameHoodleProto
         * @interface IPlayCountRes
         * @property {string} playcount PlayCountRes playcount
         * @property {string} totalplaycount PlayCountRes totalplaycount
         */

        /**
         * Constructs a new PlayCountRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a PlayCountRes.
         * @implements IPlayCountRes
         * @constructor
         * @param {GameHoodleProto.IPlayCountRes=} [properties] Properties to set
         */
        function PlayCountRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayCountRes playcount.
         * @member {string} playcount
         * @memberof GameHoodleProto.PlayCountRes
         * @instance
         */
        PlayCountRes.prototype.playcount = "";

        /**
         * PlayCountRes totalplaycount.
         * @member {string} totalplaycount
         * @memberof GameHoodleProto.PlayCountRes
         * @instance
         */
        PlayCountRes.prototype.totalplaycount = "";

        /**
         * Creates a new PlayCountRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.PlayCountRes
         * @static
         * @param {GameHoodleProto.IPlayCountRes=} [properties] Properties to set
         * @returns {GameHoodleProto.PlayCountRes} PlayCountRes instance
         */
        PlayCountRes.create = function create(properties) {
            return new PlayCountRes(properties);
        };

        /**
         * Encodes the specified PlayCountRes message. Does not implicitly {@link GameHoodleProto.PlayCountRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.PlayCountRes
         * @static
         * @param {GameHoodleProto.IPlayCountRes} message PlayCountRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayCountRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.playcount);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.totalplaycount);
            return writer;
        };

        /**
         * Encodes the specified PlayCountRes message, length delimited. Does not implicitly {@link GameHoodleProto.PlayCountRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.PlayCountRes
         * @static
         * @param {GameHoodleProto.IPlayCountRes} message PlayCountRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayCountRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayCountRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.PlayCountRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.PlayCountRes} PlayCountRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayCountRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.PlayCountRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playcount = reader.string();
                    break;
                case 2:
                    message.totalplaycount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playcount"))
                throw $util.ProtocolError("missing required 'playcount'", { instance: message });
            if (!message.hasOwnProperty("totalplaycount"))
                throw $util.ProtocolError("missing required 'totalplaycount'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayCountRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.PlayCountRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.PlayCountRes} PlayCountRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayCountRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayCountRes message.
         * @function verify
         * @memberof GameHoodleProto.PlayCountRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayCountRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.playcount))
                return "playcount: string expected";
            if (!$util.isString(message.totalplaycount))
                return "totalplaycount: string expected";
            return null;
        };

        /**
         * Creates a PlayCountRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.PlayCountRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.PlayCountRes} PlayCountRes
         */
        PlayCountRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.PlayCountRes)
                return object;
            var message = new $root.GameHoodleProto.PlayCountRes();
            if (object.playcount != null)
                message.playcount = String(object.playcount);
            if (object.totalplaycount != null)
                message.totalplaycount = String(object.totalplaycount);
            return message;
        };

        /**
         * Creates a plain object from a PlayCountRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.PlayCountRes
         * @static
         * @param {GameHoodleProto.PlayCountRes} message PlayCountRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayCountRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playcount = "";
                object.totalplaycount = "";
            }
            if (message.playcount != null && message.hasOwnProperty("playcount"))
                object.playcount = message.playcount;
            if (message.totalplaycount != null && message.hasOwnProperty("totalplaycount"))
                object.totalplaycount = message.totalplaycount;
            return object;
        };

        /**
         * Converts this PlayCountRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.PlayCountRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayCountRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayCountRes;
    })();

    GameHoodleProto.UserReadyReq = (function() {

        /**
         * Properties of a UserReadyReq.
         * @memberof GameHoodleProto
         * @interface IUserReadyReq
         */

        /**
         * Constructs a new UserReadyReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserReadyReq.
         * @implements IUserReadyReq
         * @constructor
         * @param {GameHoodleProto.IUserReadyReq=} [properties] Properties to set
         */
        function UserReadyReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UserReadyReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserReadyReq
         * @static
         * @param {GameHoodleProto.IUserReadyReq=} [properties] Properties to set
         * @returns {GameHoodleProto.UserReadyReq} UserReadyReq instance
         */
        UserReadyReq.create = function create(properties) {
            return new UserReadyReq(properties);
        };

        /**
         * Encodes the specified UserReadyReq message. Does not implicitly {@link GameHoodleProto.UserReadyReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserReadyReq
         * @static
         * @param {GameHoodleProto.IUserReadyReq} message UserReadyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReadyReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserReadyReq message, length delimited. Does not implicitly {@link GameHoodleProto.UserReadyReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserReadyReq
         * @static
         * @param {GameHoodleProto.IUserReadyReq} message UserReadyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReadyReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReadyReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserReadyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserReadyReq} UserReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReadyReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserReadyReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserReadyReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserReadyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserReadyReq} UserReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReadyReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserReadyReq message.
         * @function verify
         * @memberof GameHoodleProto.UserReadyReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserReadyReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a UserReadyReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserReadyReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserReadyReq} UserReadyReq
         */
        UserReadyReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserReadyReq)
                return object;
            return new $root.GameHoodleProto.UserReadyReq();
        };

        /**
         * Creates a plain object from a UserReadyReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserReadyReq
         * @static
         * @param {GameHoodleProto.UserReadyReq} message UserReadyReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReadyReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserReadyReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserReadyReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReadyReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReadyReq;
    })();

    GameHoodleProto.UserReadyRes = (function() {

        /**
         * Properties of a UserReadyRes.
         * @memberof GameHoodleProto
         * @interface IUserReadyRes
         * @property {number} status UserReadyRes status
         * @property {number|null} [seatid] UserReadyRes seatid
         * @property {number|null} [userstate] UserReadyRes userstate
         */

        /**
         * Constructs a new UserReadyRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserReadyRes.
         * @implements IUserReadyRes
         * @constructor
         * @param {GameHoodleProto.IUserReadyRes=} [properties] Properties to set
         */
        function UserReadyRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserReadyRes status.
         * @member {number} status
         * @memberof GameHoodleProto.UserReadyRes
         * @instance
         */
        UserReadyRes.prototype.status = 0;

        /**
         * UserReadyRes seatid.
         * @member {number} seatid
         * @memberof GameHoodleProto.UserReadyRes
         * @instance
         */
        UserReadyRes.prototype.seatid = 0;

        /**
         * UserReadyRes userstate.
         * @member {number} userstate
         * @memberof GameHoodleProto.UserReadyRes
         * @instance
         */
        UserReadyRes.prototype.userstate = 0;

        /**
         * Creates a new UserReadyRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserReadyRes
         * @static
         * @param {GameHoodleProto.IUserReadyRes=} [properties] Properties to set
         * @returns {GameHoodleProto.UserReadyRes} UserReadyRes instance
         */
        UserReadyRes.create = function create(properties) {
            return new UserReadyRes(properties);
        };

        /**
         * Encodes the specified UserReadyRes message. Does not implicitly {@link GameHoodleProto.UserReadyRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserReadyRes
         * @static
         * @param {GameHoodleProto.IUserReadyRes} message UserReadyRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReadyRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.seatid != null && message.hasOwnProperty("seatid"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.seatid);
            if (message.userstate != null && message.hasOwnProperty("userstate"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.userstate);
            return writer;
        };

        /**
         * Encodes the specified UserReadyRes message, length delimited. Does not implicitly {@link GameHoodleProto.UserReadyRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserReadyRes
         * @static
         * @param {GameHoodleProto.IUserReadyRes} message UserReadyRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReadyRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReadyRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserReadyRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserReadyRes} UserReadyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReadyRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserReadyRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    message.seatid = reader.sint32();
                    break;
                case 3:
                    message.userstate = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserReadyRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserReadyRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserReadyRes} UserReadyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReadyRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserReadyRes message.
         * @function verify
         * @memberof GameHoodleProto.UserReadyRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserReadyRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.seatid != null && message.hasOwnProperty("seatid"))
                if (!$util.isInteger(message.seatid))
                    return "seatid: integer expected";
            if (message.userstate != null && message.hasOwnProperty("userstate"))
                if (!$util.isInteger(message.userstate))
                    return "userstate: integer expected";
            return null;
        };

        /**
         * Creates a UserReadyRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserReadyRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserReadyRes} UserReadyRes
         */
        UserReadyRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserReadyRes)
                return object;
            var message = new $root.GameHoodleProto.UserReadyRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.seatid != null)
                message.seatid = object.seatid | 0;
            if (object.userstate != null)
                message.userstate = object.userstate | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserReadyRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserReadyRes
         * @static
         * @param {GameHoodleProto.UserReadyRes} message UserReadyRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReadyRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.seatid = 0;
                object.userstate = 0;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.seatid != null && message.hasOwnProperty("seatid"))
                object.seatid = message.seatid;
            if (message.userstate != null && message.hasOwnProperty("userstate"))
                object.userstate = message.userstate;
            return object;
        };

        /**
         * Converts this UserReadyRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserReadyRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReadyRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReadyRes;
    })();

    GameHoodleProto.GameStartRes = (function() {

        /**
         * Properties of a GameStartRes.
         * @memberof GameHoodleProto
         * @interface IGameStartRes
         * @property {number} status GameStartRes status
         */

        /**
         * Constructs a new GameStartRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a GameStartRes.
         * @implements IGameStartRes
         * @constructor
         * @param {GameHoodleProto.IGameStartRes=} [properties] Properties to set
         */
        function GameStartRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameStartRes status.
         * @member {number} status
         * @memberof GameHoodleProto.GameStartRes
         * @instance
         */
        GameStartRes.prototype.status = 0;

        /**
         * Creates a new GameStartRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.GameStartRes
         * @static
         * @param {GameHoodleProto.IGameStartRes=} [properties] Properties to set
         * @returns {GameHoodleProto.GameStartRes} GameStartRes instance
         */
        GameStartRes.create = function create(properties) {
            return new GameStartRes(properties);
        };

        /**
         * Encodes the specified GameStartRes message. Does not implicitly {@link GameHoodleProto.GameStartRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.GameStartRes
         * @static
         * @param {GameHoodleProto.IGameStartRes} message GameStartRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStartRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            return writer;
        };

        /**
         * Encodes the specified GameStartRes message, length delimited. Does not implicitly {@link GameHoodleProto.GameStartRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.GameStartRes
         * @static
         * @param {GameHoodleProto.IGameStartRes} message GameStartRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStartRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameStartRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.GameStartRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.GameStartRes} GameStartRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStartRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.GameStartRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameStartRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.GameStartRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.GameStartRes} GameStartRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStartRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameStartRes message.
         * @function verify
         * @memberof GameHoodleProto.GameStartRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameStartRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates a GameStartRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.GameStartRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.GameStartRes} GameStartRes
         */
        GameStartRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.GameStartRes)
                return object;
            var message = new $root.GameHoodleProto.GameStartRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameStartRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.GameStartRes
         * @static
         * @param {GameHoodleProto.GameStartRes} message GameStartRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameStartRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this GameStartRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.GameStartRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameStartRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameStartRes;
    })();

    GameHoodleProto.GameEndRes = (function() {

        /**
         * Properties of a GameEndRes.
         * @memberof GameHoodleProto
         * @interface IGameEndRes
         * @property {Array.<number>|null} [status] GameEndRes status
         */

        /**
         * Constructs a new GameEndRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a GameEndRes.
         * @implements IGameEndRes
         * @constructor
         * @param {GameHoodleProto.IGameEndRes=} [properties] Properties to set
         */
        function GameEndRes(properties) {
            this.status = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameEndRes status.
         * @member {Array.<number>} status
         * @memberof GameHoodleProto.GameEndRes
         * @instance
         */
        GameEndRes.prototype.status = $util.emptyArray;

        /**
         * Creates a new GameEndRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.GameEndRes
         * @static
         * @param {GameHoodleProto.IGameEndRes=} [properties] Properties to set
         * @returns {GameHoodleProto.GameEndRes} GameEndRes instance
         */
        GameEndRes.create = function create(properties) {
            return new GameEndRes(properties);
        };

        /**
         * Encodes the specified GameEndRes message. Does not implicitly {@link GameHoodleProto.GameEndRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.GameEndRes
         * @static
         * @param {GameHoodleProto.IGameEndRes} message GameEndRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameEndRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.status.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.status.length; ++i)
                    writer.sint32(message.status[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified GameEndRes message, length delimited. Does not implicitly {@link GameHoodleProto.GameEndRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.GameEndRes
         * @static
         * @param {GameHoodleProto.IGameEndRes} message GameEndRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameEndRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameEndRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.GameEndRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.GameEndRes} GameEndRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameEndRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.GameEndRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.status && message.status.length))
                        message.status = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.status.push(reader.sint32());
                    } else
                        message.status.push(reader.sint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameEndRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.GameEndRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.GameEndRes} GameEndRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameEndRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameEndRes message.
         * @function verify
         * @memberof GameHoodleProto.GameEndRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameEndRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                if (!Array.isArray(message.status))
                    return "status: array expected";
                for (var i = 0; i < message.status.length; ++i)
                    if (!$util.isInteger(message.status[i]))
                        return "status: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a GameEndRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.GameEndRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.GameEndRes} GameEndRes
         */
        GameEndRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.GameEndRes)
                return object;
            var message = new $root.GameHoodleProto.GameEndRes();
            if (object.status) {
                if (!Array.isArray(object.status))
                    throw TypeError(".GameHoodleProto.GameEndRes.status: array expected");
                message.status = [];
                for (var i = 0; i < object.status.length; ++i)
                    message.status[i] = object.status[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a GameEndRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.GameEndRes
         * @static
         * @param {GameHoodleProto.GameEndRes} message GameEndRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameEndRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.status = [];
            if (message.status && message.status.length) {
                object.status = [];
                for (var j = 0; j < message.status.length; ++j)
                    object.status[j] = message.status[j];
            }
            return object;
        };

        /**
         * Converts this GameEndRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.GameEndRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameEndRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameEndRes;
    })();

    GameHoodleProto.UserOfflineRes = (function() {

        /**
         * Properties of a UserOfflineRes.
         * @memberof GameHoodleProto
         * @interface IUserOfflineRes
         * @property {number} seatid UserOfflineRes seatid
         */

        /**
         * Constructs a new UserOfflineRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserOfflineRes.
         * @implements IUserOfflineRes
         * @constructor
         * @param {GameHoodleProto.IUserOfflineRes=} [properties] Properties to set
         */
        function UserOfflineRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserOfflineRes seatid.
         * @member {number} seatid
         * @memberof GameHoodleProto.UserOfflineRes
         * @instance
         */
        UserOfflineRes.prototype.seatid = 0;

        /**
         * Creates a new UserOfflineRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserOfflineRes
         * @static
         * @param {GameHoodleProto.IUserOfflineRes=} [properties] Properties to set
         * @returns {GameHoodleProto.UserOfflineRes} UserOfflineRes instance
         */
        UserOfflineRes.create = function create(properties) {
            return new UserOfflineRes(properties);
        };

        /**
         * Encodes the specified UserOfflineRes message. Does not implicitly {@link GameHoodleProto.UserOfflineRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserOfflineRes
         * @static
         * @param {GameHoodleProto.IUserOfflineRes} message UserOfflineRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOfflineRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.seatid);
            return writer;
        };

        /**
         * Encodes the specified UserOfflineRes message, length delimited. Does not implicitly {@link GameHoodleProto.UserOfflineRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserOfflineRes
         * @static
         * @param {GameHoodleProto.IUserOfflineRes} message UserOfflineRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOfflineRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserOfflineRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserOfflineRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserOfflineRes} UserOfflineRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserOfflineRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserOfflineRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatid = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatid"))
                throw $util.ProtocolError("missing required 'seatid'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserOfflineRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserOfflineRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserOfflineRes} UserOfflineRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserOfflineRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserOfflineRes message.
         * @function verify
         * @memberof GameHoodleProto.UserOfflineRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserOfflineRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatid))
                return "seatid: integer expected";
            return null;
        };

        /**
         * Creates a UserOfflineRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserOfflineRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserOfflineRes} UserOfflineRes
         */
        UserOfflineRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserOfflineRes)
                return object;
            var message = new $root.GameHoodleProto.UserOfflineRes();
            if (object.seatid != null)
                message.seatid = object.seatid | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserOfflineRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserOfflineRes
         * @static
         * @param {GameHoodleProto.UserOfflineRes} message UserOfflineRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserOfflineRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.seatid = 0;
            if (message.seatid != null && message.hasOwnProperty("seatid"))
                object.seatid = message.seatid;
            return object;
        };

        /**
         * Converts this UserOfflineRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserOfflineRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserOfflineRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserOfflineRes;
    })();

    GameHoodleProto.LoginLogicReq = (function() {

        /**
         * Properties of a LoginLogicReq.
         * @memberof GameHoodleProto
         * @interface ILoginLogicReq
         */

        /**
         * Constructs a new LoginLogicReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a LoginLogicReq.
         * @implements ILoginLogicReq
         * @constructor
         * @param {GameHoodleProto.ILoginLogicReq=} [properties] Properties to set
         */
        function LoginLogicReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LoginLogicReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.LoginLogicReq
         * @static
         * @param {GameHoodleProto.ILoginLogicReq=} [properties] Properties to set
         * @returns {GameHoodleProto.LoginLogicReq} LoginLogicReq instance
         */
        LoginLogicReq.create = function create(properties) {
            return new LoginLogicReq(properties);
        };

        /**
         * Encodes the specified LoginLogicReq message. Does not implicitly {@link GameHoodleProto.LoginLogicReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.LoginLogicReq
         * @static
         * @param {GameHoodleProto.ILoginLogicReq} message LoginLogicReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginLogicReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LoginLogicReq message, length delimited. Does not implicitly {@link GameHoodleProto.LoginLogicReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.LoginLogicReq
         * @static
         * @param {GameHoodleProto.ILoginLogicReq} message LoginLogicReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginLogicReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginLogicReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.LoginLogicReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.LoginLogicReq} LoginLogicReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginLogicReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.LoginLogicReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginLogicReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.LoginLogicReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.LoginLogicReq} LoginLogicReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginLogicReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginLogicReq message.
         * @function verify
         * @memberof GameHoodleProto.LoginLogicReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginLogicReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a LoginLogicReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.LoginLogicReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.LoginLogicReq} LoginLogicReq
         */
        LoginLogicReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.LoginLogicReq)
                return object;
            return new $root.GameHoodleProto.LoginLogicReq();
        };

        /**
         * Creates a plain object from a LoginLogicReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.LoginLogicReq
         * @static
         * @param {GameHoodleProto.LoginLogicReq} message LoginLogicReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginLogicReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this LoginLogicReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.LoginLogicReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginLogicReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginLogicReq;
    })();

    GameHoodleProto.LoginLogicRes = (function() {

        /**
         * Properties of a LoginLogicRes.
         * @memberof GameHoodleProto
         * @interface ILoginLogicRes
         * @property {number} status LoginLogicRes status
         */

        /**
         * Constructs a new LoginLogicRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a LoginLogicRes.
         * @implements ILoginLogicRes
         * @constructor
         * @param {GameHoodleProto.ILoginLogicRes=} [properties] Properties to set
         */
        function LoginLogicRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginLogicRes status.
         * @member {number} status
         * @memberof GameHoodleProto.LoginLogicRes
         * @instance
         */
        LoginLogicRes.prototype.status = 0;

        /**
         * Creates a new LoginLogicRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.LoginLogicRes
         * @static
         * @param {GameHoodleProto.ILoginLogicRes=} [properties] Properties to set
         * @returns {GameHoodleProto.LoginLogicRes} LoginLogicRes instance
         */
        LoginLogicRes.create = function create(properties) {
            return new LoginLogicRes(properties);
        };

        /**
         * Encodes the specified LoginLogicRes message. Does not implicitly {@link GameHoodleProto.LoginLogicRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.LoginLogicRes
         * @static
         * @param {GameHoodleProto.ILoginLogicRes} message LoginLogicRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginLogicRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            return writer;
        };

        /**
         * Encodes the specified LoginLogicRes message, length delimited. Does not implicitly {@link GameHoodleProto.LoginLogicRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.LoginLogicRes
         * @static
         * @param {GameHoodleProto.ILoginLogicRes} message LoginLogicRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginLogicRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginLogicRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.LoginLogicRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.LoginLogicRes} LoginLogicRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginLogicRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.LoginLogicRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a LoginLogicRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.LoginLogicRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.LoginLogicRes} LoginLogicRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginLogicRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginLogicRes message.
         * @function verify
         * @memberof GameHoodleProto.LoginLogicRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginLogicRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates a LoginLogicRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.LoginLogicRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.LoginLogicRes} LoginLogicRes
         */
        LoginLogicRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.LoginLogicRes)
                return object;
            var message = new $root.GameHoodleProto.LoginLogicRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginLogicRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.LoginLogicRes
         * @static
         * @param {GameHoodleProto.LoginLogicRes} message LoginLogicRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginLogicRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this LoginLogicRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.LoginLogicRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginLogicRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginLogicRes;
    })();

    GameHoodleProto.OnePlayerPos = (function() {

        /**
         * Properties of an OnePlayerPos.
         * @memberof GameHoodleProto
         * @interface IOnePlayerPos
         * @property {number} seatid OnePlayerPos seatid
         * @property {string} posx OnePlayerPos posx
         * @property {string} posy OnePlayerPos posy
         */

        /**
         * Constructs a new OnePlayerPos.
         * @memberof GameHoodleProto
         * @classdesc Represents an OnePlayerPos.
         * @implements IOnePlayerPos
         * @constructor
         * @param {GameHoodleProto.IOnePlayerPos=} [properties] Properties to set
         */
        function OnePlayerPos(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OnePlayerPos seatid.
         * @member {number} seatid
         * @memberof GameHoodleProto.OnePlayerPos
         * @instance
         */
        OnePlayerPos.prototype.seatid = 0;

        /**
         * OnePlayerPos posx.
         * @member {string} posx
         * @memberof GameHoodleProto.OnePlayerPos
         * @instance
         */
        OnePlayerPos.prototype.posx = "";

        /**
         * OnePlayerPos posy.
         * @member {string} posy
         * @memberof GameHoodleProto.OnePlayerPos
         * @instance
         */
        OnePlayerPos.prototype.posy = "";

        /**
         * Creates a new OnePlayerPos instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.OnePlayerPos
         * @static
         * @param {GameHoodleProto.IOnePlayerPos=} [properties] Properties to set
         * @returns {GameHoodleProto.OnePlayerPos} OnePlayerPos instance
         */
        OnePlayerPos.create = function create(properties) {
            return new OnePlayerPos(properties);
        };

        /**
         * Encodes the specified OnePlayerPos message. Does not implicitly {@link GameHoodleProto.OnePlayerPos.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.OnePlayerPos
         * @static
         * @param {GameHoodleProto.IOnePlayerPos} message OnePlayerPos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnePlayerPos.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.seatid);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.posx);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.posy);
            return writer;
        };

        /**
         * Encodes the specified OnePlayerPos message, length delimited. Does not implicitly {@link GameHoodleProto.OnePlayerPos.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.OnePlayerPos
         * @static
         * @param {GameHoodleProto.IOnePlayerPos} message OnePlayerPos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnePlayerPos.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnePlayerPos message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.OnePlayerPos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.OnePlayerPos} OnePlayerPos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnePlayerPos.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.OnePlayerPos();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatid = reader.sint32();
                    break;
                case 2:
                    message.posx = reader.string();
                    break;
                case 3:
                    message.posy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatid"))
                throw $util.ProtocolError("missing required 'seatid'", { instance: message });
            if (!message.hasOwnProperty("posx"))
                throw $util.ProtocolError("missing required 'posx'", { instance: message });
            if (!message.hasOwnProperty("posy"))
                throw $util.ProtocolError("missing required 'posy'", { instance: message });
            return message;
        };

        /**
         * Decodes an OnePlayerPos message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.OnePlayerPos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.OnePlayerPos} OnePlayerPos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnePlayerPos.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnePlayerPos message.
         * @function verify
         * @memberof GameHoodleProto.OnePlayerPos
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnePlayerPos.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatid))
                return "seatid: integer expected";
            if (!$util.isString(message.posx))
                return "posx: string expected";
            if (!$util.isString(message.posy))
                return "posy: string expected";
            return null;
        };

        /**
         * Creates an OnePlayerPos message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.OnePlayerPos
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.OnePlayerPos} OnePlayerPos
         */
        OnePlayerPos.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.OnePlayerPos)
                return object;
            var message = new $root.GameHoodleProto.OnePlayerPos();
            if (object.seatid != null)
                message.seatid = object.seatid | 0;
            if (object.posx != null)
                message.posx = String(object.posx);
            if (object.posy != null)
                message.posy = String(object.posy);
            return message;
        };

        /**
         * Creates a plain object from an OnePlayerPos message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.OnePlayerPos
         * @static
         * @param {GameHoodleProto.OnePlayerPos} message OnePlayerPos
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnePlayerPos.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.seatid = 0;
                object.posx = "";
                object.posy = "";
            }
            if (message.seatid != null && message.hasOwnProperty("seatid"))
                object.seatid = message.seatid;
            if (message.posx != null && message.hasOwnProperty("posx"))
                object.posx = message.posx;
            if (message.posy != null && message.hasOwnProperty("posy"))
                object.posy = message.posy;
            return object;
        };

        /**
         * Converts this OnePlayerPos to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.OnePlayerPos
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnePlayerPos.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OnePlayerPos;
    })();

    GameHoodleProto.OnePlayerPower = (function() {

        /**
         * Properties of an OnePlayerPower.
         * @memberof GameHoodleProto
         * @interface IOnePlayerPower
         * @property {number} seatid OnePlayerPower seatid
         * @property {number} power OnePlayerPower power
         */

        /**
         * Constructs a new OnePlayerPower.
         * @memberof GameHoodleProto
         * @classdesc Represents an OnePlayerPower.
         * @implements IOnePlayerPower
         * @constructor
         * @param {GameHoodleProto.IOnePlayerPower=} [properties] Properties to set
         */
        function OnePlayerPower(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OnePlayerPower seatid.
         * @member {number} seatid
         * @memberof GameHoodleProto.OnePlayerPower
         * @instance
         */
        OnePlayerPower.prototype.seatid = 0;

        /**
         * OnePlayerPower power.
         * @member {number} power
         * @memberof GameHoodleProto.OnePlayerPower
         * @instance
         */
        OnePlayerPower.prototype.power = 0;

        /**
         * Creates a new OnePlayerPower instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.OnePlayerPower
         * @static
         * @param {GameHoodleProto.IOnePlayerPower=} [properties] Properties to set
         * @returns {GameHoodleProto.OnePlayerPower} OnePlayerPower instance
         */
        OnePlayerPower.create = function create(properties) {
            return new OnePlayerPower(properties);
        };

        /**
         * Encodes the specified OnePlayerPower message. Does not implicitly {@link GameHoodleProto.OnePlayerPower.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.OnePlayerPower
         * @static
         * @param {GameHoodleProto.IOnePlayerPower} message OnePlayerPower message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnePlayerPower.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.seatid);
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.power);
            return writer;
        };

        /**
         * Encodes the specified OnePlayerPower message, length delimited. Does not implicitly {@link GameHoodleProto.OnePlayerPower.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.OnePlayerPower
         * @static
         * @param {GameHoodleProto.IOnePlayerPower} message OnePlayerPower message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnePlayerPower.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnePlayerPower message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.OnePlayerPower
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.OnePlayerPower} OnePlayerPower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnePlayerPower.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.OnePlayerPower();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatid = reader.sint32();
                    break;
                case 2:
                    message.power = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatid"))
                throw $util.ProtocolError("missing required 'seatid'", { instance: message });
            if (!message.hasOwnProperty("power"))
                throw $util.ProtocolError("missing required 'power'", { instance: message });
            return message;
        };

        /**
         * Decodes an OnePlayerPower message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.OnePlayerPower
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.OnePlayerPower} OnePlayerPower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnePlayerPower.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnePlayerPower message.
         * @function verify
         * @memberof GameHoodleProto.OnePlayerPower
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnePlayerPower.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatid))
                return "seatid: integer expected";
            if (!$util.isInteger(message.power))
                return "power: integer expected";
            return null;
        };

        /**
         * Creates an OnePlayerPower message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.OnePlayerPower
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.OnePlayerPower} OnePlayerPower
         */
        OnePlayerPower.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.OnePlayerPower)
                return object;
            var message = new $root.GameHoodleProto.OnePlayerPower();
            if (object.seatid != null)
                message.seatid = object.seatid | 0;
            if (object.power != null)
                message.power = object.power | 0;
            return message;
        };

        /**
         * Creates a plain object from an OnePlayerPower message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.OnePlayerPower
         * @static
         * @param {GameHoodleProto.OnePlayerPower} message OnePlayerPower
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnePlayerPower.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.seatid = 0;
                object.power = 0;
            }
            if (message.seatid != null && message.hasOwnProperty("seatid"))
                object.seatid = message.seatid;
            if (message.power != null && message.hasOwnProperty("power"))
                object.power = message.power;
            return object;
        };

        /**
         * Converts this OnePlayerPower to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.OnePlayerPower
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnePlayerPower.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OnePlayerPower;
    })();

    GameHoodleProto.OnePlayerScore = (function() {

        /**
         * Properties of an OnePlayerScore.
         * @memberof GameHoodleProto
         * @interface IOnePlayerScore
         * @property {number} seatid OnePlayerScore seatid
         * @property {string} score OnePlayerScore score
         */

        /**
         * Constructs a new OnePlayerScore.
         * @memberof GameHoodleProto
         * @classdesc Represents an OnePlayerScore.
         * @implements IOnePlayerScore
         * @constructor
         * @param {GameHoodleProto.IOnePlayerScore=} [properties] Properties to set
         */
        function OnePlayerScore(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OnePlayerScore seatid.
         * @member {number} seatid
         * @memberof GameHoodleProto.OnePlayerScore
         * @instance
         */
        OnePlayerScore.prototype.seatid = 0;

        /**
         * OnePlayerScore score.
         * @member {string} score
         * @memberof GameHoodleProto.OnePlayerScore
         * @instance
         */
        OnePlayerScore.prototype.score = "";

        /**
         * Creates a new OnePlayerScore instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.OnePlayerScore
         * @static
         * @param {GameHoodleProto.IOnePlayerScore=} [properties] Properties to set
         * @returns {GameHoodleProto.OnePlayerScore} OnePlayerScore instance
         */
        OnePlayerScore.create = function create(properties) {
            return new OnePlayerScore(properties);
        };

        /**
         * Encodes the specified OnePlayerScore message. Does not implicitly {@link GameHoodleProto.OnePlayerScore.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.OnePlayerScore
         * @static
         * @param {GameHoodleProto.IOnePlayerScore} message OnePlayerScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnePlayerScore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.seatid);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.score);
            return writer;
        };

        /**
         * Encodes the specified OnePlayerScore message, length delimited. Does not implicitly {@link GameHoodleProto.OnePlayerScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.OnePlayerScore
         * @static
         * @param {GameHoodleProto.IOnePlayerScore} message OnePlayerScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnePlayerScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnePlayerScore message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.OnePlayerScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.OnePlayerScore} OnePlayerScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnePlayerScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.OnePlayerScore();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatid = reader.sint32();
                    break;
                case 2:
                    message.score = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatid"))
                throw $util.ProtocolError("missing required 'seatid'", { instance: message });
            if (!message.hasOwnProperty("score"))
                throw $util.ProtocolError("missing required 'score'", { instance: message });
            return message;
        };

        /**
         * Decodes an OnePlayerScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.OnePlayerScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.OnePlayerScore} OnePlayerScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnePlayerScore.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnePlayerScore message.
         * @function verify
         * @memberof GameHoodleProto.OnePlayerScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnePlayerScore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatid))
                return "seatid: integer expected";
            if (!$util.isString(message.score))
                return "score: string expected";
            return null;
        };

        /**
         * Creates an OnePlayerScore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.OnePlayerScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.OnePlayerScore} OnePlayerScore
         */
        OnePlayerScore.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.OnePlayerScore)
                return object;
            var message = new $root.GameHoodleProto.OnePlayerScore();
            if (object.seatid != null)
                message.seatid = object.seatid | 0;
            if (object.score != null)
                message.score = String(object.score);
            return message;
        };

        /**
         * Creates a plain object from an OnePlayerScore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.OnePlayerScore
         * @static
         * @param {GameHoodleProto.OnePlayerScore} message OnePlayerScore
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnePlayerScore.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.seatid = 0;
                object.score = "";
            }
            if (message.seatid != null && message.hasOwnProperty("seatid"))
                object.seatid = message.seatid;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            return object;
        };

        /**
         * Converts this OnePlayerScore to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.OnePlayerScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnePlayerScore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OnePlayerScore;
    })();

    GameHoodleProto.OnPlayerGolds = (function() {

        /**
         * Properties of an OnPlayerGolds.
         * @memberof GameHoodleProto
         * @interface IOnPlayerGolds
         * @property {number} seatid OnPlayerGolds seatid
         * @property {string} gold OnPlayerGolds gold
         */

        /**
         * Constructs a new OnPlayerGolds.
         * @memberof GameHoodleProto
         * @classdesc Represents an OnPlayerGolds.
         * @implements IOnPlayerGolds
         * @constructor
         * @param {GameHoodleProto.IOnPlayerGolds=} [properties] Properties to set
         */
        function OnPlayerGolds(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OnPlayerGolds seatid.
         * @member {number} seatid
         * @memberof GameHoodleProto.OnPlayerGolds
         * @instance
         */
        OnPlayerGolds.prototype.seatid = 0;

        /**
         * OnPlayerGolds gold.
         * @member {string} gold
         * @memberof GameHoodleProto.OnPlayerGolds
         * @instance
         */
        OnPlayerGolds.prototype.gold = "";

        /**
         * Creates a new OnPlayerGolds instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.OnPlayerGolds
         * @static
         * @param {GameHoodleProto.IOnPlayerGolds=} [properties] Properties to set
         * @returns {GameHoodleProto.OnPlayerGolds} OnPlayerGolds instance
         */
        OnPlayerGolds.create = function create(properties) {
            return new OnPlayerGolds(properties);
        };

        /**
         * Encodes the specified OnPlayerGolds message. Does not implicitly {@link GameHoodleProto.OnPlayerGolds.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.OnPlayerGolds
         * @static
         * @param {GameHoodleProto.IOnPlayerGolds} message OnPlayerGolds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnPlayerGolds.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.seatid);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.gold);
            return writer;
        };

        /**
         * Encodes the specified OnPlayerGolds message, length delimited. Does not implicitly {@link GameHoodleProto.OnPlayerGolds.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.OnPlayerGolds
         * @static
         * @param {GameHoodleProto.IOnPlayerGolds} message OnPlayerGolds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnPlayerGolds.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnPlayerGolds message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.OnPlayerGolds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.OnPlayerGolds} OnPlayerGolds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnPlayerGolds.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.OnPlayerGolds();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatid = reader.sint32();
                    break;
                case 2:
                    message.gold = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatid"))
                throw $util.ProtocolError("missing required 'seatid'", { instance: message });
            if (!message.hasOwnProperty("gold"))
                throw $util.ProtocolError("missing required 'gold'", { instance: message });
            return message;
        };

        /**
         * Decodes an OnPlayerGolds message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.OnPlayerGolds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.OnPlayerGolds} OnPlayerGolds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnPlayerGolds.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnPlayerGolds message.
         * @function verify
         * @memberof GameHoodleProto.OnPlayerGolds
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnPlayerGolds.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatid))
                return "seatid: integer expected";
            if (!$util.isString(message.gold))
                return "gold: string expected";
            return null;
        };

        /**
         * Creates an OnPlayerGolds message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.OnPlayerGolds
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.OnPlayerGolds} OnPlayerGolds
         */
        OnPlayerGolds.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.OnPlayerGolds)
                return object;
            var message = new $root.GameHoodleProto.OnPlayerGolds();
            if (object.seatid != null)
                message.seatid = object.seatid | 0;
            if (object.gold != null)
                message.gold = String(object.gold);
            return message;
        };

        /**
         * Creates a plain object from an OnPlayerGolds message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.OnPlayerGolds
         * @static
         * @param {GameHoodleProto.OnPlayerGolds} message OnPlayerGolds
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnPlayerGolds.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.seatid = 0;
                object.gold = "";
            }
            if (message.seatid != null && message.hasOwnProperty("seatid"))
                object.seatid = message.seatid;
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            return object;
        };

        /**
         * Converts this OnPlayerGolds to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.OnPlayerGolds
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnPlayerGolds.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OnPlayerGolds;
    })();

    GameHoodleProto.PlayerFirstBallPosRes = (function() {

        /**
         * Properties of a PlayerFirstBallPosRes.
         * @memberof GameHoodleProto
         * @interface IPlayerFirstBallPosRes
         * @property {Array.<GameHoodleProto.IOnePlayerPos>|null} [positions] PlayerFirstBallPosRes positions
         */

        /**
         * Constructs a new PlayerFirstBallPosRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a PlayerFirstBallPosRes.
         * @implements IPlayerFirstBallPosRes
         * @constructor
         * @param {GameHoodleProto.IPlayerFirstBallPosRes=} [properties] Properties to set
         */
        function PlayerFirstBallPosRes(properties) {
            this.positions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerFirstBallPosRes positions.
         * @member {Array.<GameHoodleProto.IOnePlayerPos>} positions
         * @memberof GameHoodleProto.PlayerFirstBallPosRes
         * @instance
         */
        PlayerFirstBallPosRes.prototype.positions = $util.emptyArray;

        /**
         * Creates a new PlayerFirstBallPosRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.PlayerFirstBallPosRes
         * @static
         * @param {GameHoodleProto.IPlayerFirstBallPosRes=} [properties] Properties to set
         * @returns {GameHoodleProto.PlayerFirstBallPosRes} PlayerFirstBallPosRes instance
         */
        PlayerFirstBallPosRes.create = function create(properties) {
            return new PlayerFirstBallPosRes(properties);
        };

        /**
         * Encodes the specified PlayerFirstBallPosRes message. Does not implicitly {@link GameHoodleProto.PlayerFirstBallPosRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.PlayerFirstBallPosRes
         * @static
         * @param {GameHoodleProto.IPlayerFirstBallPosRes} message PlayerFirstBallPosRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerFirstBallPosRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.positions != null && message.positions.length)
                for (var i = 0; i < message.positions.length; ++i)
                    $root.GameHoodleProto.OnePlayerPos.encode(message.positions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerFirstBallPosRes message, length delimited. Does not implicitly {@link GameHoodleProto.PlayerFirstBallPosRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.PlayerFirstBallPosRes
         * @static
         * @param {GameHoodleProto.IPlayerFirstBallPosRes} message PlayerFirstBallPosRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerFirstBallPosRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerFirstBallPosRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.PlayerFirstBallPosRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.PlayerFirstBallPosRes} PlayerFirstBallPosRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerFirstBallPosRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.PlayerFirstBallPosRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.positions && message.positions.length))
                        message.positions = [];
                    message.positions.push($root.GameHoodleProto.OnePlayerPos.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerFirstBallPosRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.PlayerFirstBallPosRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.PlayerFirstBallPosRes} PlayerFirstBallPosRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerFirstBallPosRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerFirstBallPosRes message.
         * @function verify
         * @memberof GameHoodleProto.PlayerFirstBallPosRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerFirstBallPosRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.positions != null && message.hasOwnProperty("positions")) {
                if (!Array.isArray(message.positions))
                    return "positions: array expected";
                for (var i = 0; i < message.positions.length; ++i) {
                    var error = $root.GameHoodleProto.OnePlayerPos.verify(message.positions[i]);
                    if (error)
                        return "positions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PlayerFirstBallPosRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.PlayerFirstBallPosRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.PlayerFirstBallPosRes} PlayerFirstBallPosRes
         */
        PlayerFirstBallPosRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.PlayerFirstBallPosRes)
                return object;
            var message = new $root.GameHoodleProto.PlayerFirstBallPosRes();
            if (object.positions) {
                if (!Array.isArray(object.positions))
                    throw TypeError(".GameHoodleProto.PlayerFirstBallPosRes.positions: array expected");
                message.positions = [];
                for (var i = 0; i < object.positions.length; ++i) {
                    if (typeof object.positions[i] !== "object")
                        throw TypeError(".GameHoodleProto.PlayerFirstBallPosRes.positions: object expected");
                    message.positions[i] = $root.GameHoodleProto.OnePlayerPos.fromObject(object.positions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerFirstBallPosRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.PlayerFirstBallPosRes
         * @static
         * @param {GameHoodleProto.PlayerFirstBallPosRes} message PlayerFirstBallPosRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerFirstBallPosRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.positions = [];
            if (message.positions && message.positions.length) {
                object.positions = [];
                for (var j = 0; j < message.positions.length; ++j)
                    object.positions[j] = $root.GameHoodleProto.OnePlayerPos.toObject(message.positions[j], options);
            }
            return object;
        };

        /**
         * Converts this PlayerFirstBallPosRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.PlayerFirstBallPosRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerFirstBallPosRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerFirstBallPosRes;
    })();

    GameHoodleProto.PlayerPowerRes = (function() {

        /**
         * Properties of a PlayerPowerRes.
         * @memberof GameHoodleProto
         * @interface IPlayerPowerRes
         * @property {Array.<GameHoodleProto.IOnePlayerPower>|null} [powers] PlayerPowerRes powers
         */

        /**
         * Constructs a new PlayerPowerRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a PlayerPowerRes.
         * @implements IPlayerPowerRes
         * @constructor
         * @param {GameHoodleProto.IPlayerPowerRes=} [properties] Properties to set
         */
        function PlayerPowerRes(properties) {
            this.powers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerPowerRes powers.
         * @member {Array.<GameHoodleProto.IOnePlayerPower>} powers
         * @memberof GameHoodleProto.PlayerPowerRes
         * @instance
         */
        PlayerPowerRes.prototype.powers = $util.emptyArray;

        /**
         * Creates a new PlayerPowerRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.PlayerPowerRes
         * @static
         * @param {GameHoodleProto.IPlayerPowerRes=} [properties] Properties to set
         * @returns {GameHoodleProto.PlayerPowerRes} PlayerPowerRes instance
         */
        PlayerPowerRes.create = function create(properties) {
            return new PlayerPowerRes(properties);
        };

        /**
         * Encodes the specified PlayerPowerRes message. Does not implicitly {@link GameHoodleProto.PlayerPowerRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.PlayerPowerRes
         * @static
         * @param {GameHoodleProto.IPlayerPowerRes} message PlayerPowerRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerPowerRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.powers != null && message.powers.length)
                for (var i = 0; i < message.powers.length; ++i)
                    $root.GameHoodleProto.OnePlayerPower.encode(message.powers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerPowerRes message, length delimited. Does not implicitly {@link GameHoodleProto.PlayerPowerRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.PlayerPowerRes
         * @static
         * @param {GameHoodleProto.IPlayerPowerRes} message PlayerPowerRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerPowerRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerPowerRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.PlayerPowerRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.PlayerPowerRes} PlayerPowerRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerPowerRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.PlayerPowerRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.powers && message.powers.length))
                        message.powers = [];
                    message.powers.push($root.GameHoodleProto.OnePlayerPower.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerPowerRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.PlayerPowerRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.PlayerPowerRes} PlayerPowerRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerPowerRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerPowerRes message.
         * @function verify
         * @memberof GameHoodleProto.PlayerPowerRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerPowerRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.powers != null && message.hasOwnProperty("powers")) {
                if (!Array.isArray(message.powers))
                    return "powers: array expected";
                for (var i = 0; i < message.powers.length; ++i) {
                    var error = $root.GameHoodleProto.OnePlayerPower.verify(message.powers[i]);
                    if (error)
                        return "powers." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PlayerPowerRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.PlayerPowerRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.PlayerPowerRes} PlayerPowerRes
         */
        PlayerPowerRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.PlayerPowerRes)
                return object;
            var message = new $root.GameHoodleProto.PlayerPowerRes();
            if (object.powers) {
                if (!Array.isArray(object.powers))
                    throw TypeError(".GameHoodleProto.PlayerPowerRes.powers: array expected");
                message.powers = [];
                for (var i = 0; i < object.powers.length; ++i) {
                    if (typeof object.powers[i] !== "object")
                        throw TypeError(".GameHoodleProto.PlayerPowerRes.powers: object expected");
                    message.powers[i] = $root.GameHoodleProto.OnePlayerPower.fromObject(object.powers[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerPowerRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.PlayerPowerRes
         * @static
         * @param {GameHoodleProto.PlayerPowerRes} message PlayerPowerRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerPowerRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.powers = [];
            if (message.powers && message.powers.length) {
                object.powers = [];
                for (var j = 0; j < message.powers.length; ++j)
                    object.powers[j] = $root.GameHoodleProto.OnePlayerPower.toObject(message.powers[j], options);
            }
            return object;
        };

        /**
         * Converts this PlayerPowerRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.PlayerPowerRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerPowerRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerPowerRes;
    })();

    GameHoodleProto.PlayerShootReq = (function() {

        /**
         * Properties of a PlayerShootReq.
         * @memberof GameHoodleProto
         * @interface IPlayerShootReq
         * @property {number} seatid PlayerShootReq seatid
         * @property {string} posx PlayerShootReq posx
         * @property {string} posy PlayerShootReq posy
         * @property {number|null} [shootpower] PlayerShootReq shootpower
         */

        /**
         * Constructs a new PlayerShootReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a PlayerShootReq.
         * @implements IPlayerShootReq
         * @constructor
         * @param {GameHoodleProto.IPlayerShootReq=} [properties] Properties to set
         */
        function PlayerShootReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerShootReq seatid.
         * @member {number} seatid
         * @memberof GameHoodleProto.PlayerShootReq
         * @instance
         */
        PlayerShootReq.prototype.seatid = 0;

        /**
         * PlayerShootReq posx.
         * @member {string} posx
         * @memberof GameHoodleProto.PlayerShootReq
         * @instance
         */
        PlayerShootReq.prototype.posx = "";

        /**
         * PlayerShootReq posy.
         * @member {string} posy
         * @memberof GameHoodleProto.PlayerShootReq
         * @instance
         */
        PlayerShootReq.prototype.posy = "";

        /**
         * PlayerShootReq shootpower.
         * @member {number} shootpower
         * @memberof GameHoodleProto.PlayerShootReq
         * @instance
         */
        PlayerShootReq.prototype.shootpower = 0;

        /**
         * Creates a new PlayerShootReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.PlayerShootReq
         * @static
         * @param {GameHoodleProto.IPlayerShootReq=} [properties] Properties to set
         * @returns {GameHoodleProto.PlayerShootReq} PlayerShootReq instance
         */
        PlayerShootReq.create = function create(properties) {
            return new PlayerShootReq(properties);
        };

        /**
         * Encodes the specified PlayerShootReq message. Does not implicitly {@link GameHoodleProto.PlayerShootReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.PlayerShootReq
         * @static
         * @param {GameHoodleProto.IPlayerShootReq} message PlayerShootReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerShootReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.seatid);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.posx);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.posy);
            if (message.shootpower != null && message.hasOwnProperty("shootpower"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.shootpower);
            return writer;
        };

        /**
         * Encodes the specified PlayerShootReq message, length delimited. Does not implicitly {@link GameHoodleProto.PlayerShootReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.PlayerShootReq
         * @static
         * @param {GameHoodleProto.IPlayerShootReq} message PlayerShootReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerShootReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerShootReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.PlayerShootReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.PlayerShootReq} PlayerShootReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerShootReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.PlayerShootReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatid = reader.sint32();
                    break;
                case 2:
                    message.posx = reader.string();
                    break;
                case 3:
                    message.posy = reader.string();
                    break;
                case 4:
                    message.shootpower = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatid"))
                throw $util.ProtocolError("missing required 'seatid'", { instance: message });
            if (!message.hasOwnProperty("posx"))
                throw $util.ProtocolError("missing required 'posx'", { instance: message });
            if (!message.hasOwnProperty("posy"))
                throw $util.ProtocolError("missing required 'posy'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerShootReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.PlayerShootReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.PlayerShootReq} PlayerShootReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerShootReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerShootReq message.
         * @function verify
         * @memberof GameHoodleProto.PlayerShootReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerShootReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatid))
                return "seatid: integer expected";
            if (!$util.isString(message.posx))
                return "posx: string expected";
            if (!$util.isString(message.posy))
                return "posy: string expected";
            if (message.shootpower != null && message.hasOwnProperty("shootpower"))
                if (!$util.isInteger(message.shootpower))
                    return "shootpower: integer expected";
            return null;
        };

        /**
         * Creates a PlayerShootReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.PlayerShootReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.PlayerShootReq} PlayerShootReq
         */
        PlayerShootReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.PlayerShootReq)
                return object;
            var message = new $root.GameHoodleProto.PlayerShootReq();
            if (object.seatid != null)
                message.seatid = object.seatid | 0;
            if (object.posx != null)
                message.posx = String(object.posx);
            if (object.posy != null)
                message.posy = String(object.posy);
            if (object.shootpower != null)
                message.shootpower = object.shootpower | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerShootReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.PlayerShootReq
         * @static
         * @param {GameHoodleProto.PlayerShootReq} message PlayerShootReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerShootReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.seatid = 0;
                object.posx = "";
                object.posy = "";
                object.shootpower = 0;
            }
            if (message.seatid != null && message.hasOwnProperty("seatid"))
                object.seatid = message.seatid;
            if (message.posx != null && message.hasOwnProperty("posx"))
                object.posx = message.posx;
            if (message.posy != null && message.hasOwnProperty("posy"))
                object.posy = message.posy;
            if (message.shootpower != null && message.hasOwnProperty("shootpower"))
                object.shootpower = message.shootpower;
            return object;
        };

        /**
         * Converts this PlayerShootReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.PlayerShootReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerShootReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerShootReq;
    })();

    GameHoodleProto.PlayerShootRes = (function() {

        /**
         * Properties of a PlayerShootRes.
         * @memberof GameHoodleProto
         * @interface IPlayerShootRes
         * @property {number} status PlayerShootRes status
         * @property {number} seatid PlayerShootRes seatid
         * @property {string} posx PlayerShootRes posx
         * @property {string} posy PlayerShootRes posy
         * @property {number|null} [shootpower] PlayerShootRes shootpower
         */

        /**
         * Constructs a new PlayerShootRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a PlayerShootRes.
         * @implements IPlayerShootRes
         * @constructor
         * @param {GameHoodleProto.IPlayerShootRes=} [properties] Properties to set
         */
        function PlayerShootRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerShootRes status.
         * @member {number} status
         * @memberof GameHoodleProto.PlayerShootRes
         * @instance
         */
        PlayerShootRes.prototype.status = 0;

        /**
         * PlayerShootRes seatid.
         * @member {number} seatid
         * @memberof GameHoodleProto.PlayerShootRes
         * @instance
         */
        PlayerShootRes.prototype.seatid = 0;

        /**
         * PlayerShootRes posx.
         * @member {string} posx
         * @memberof GameHoodleProto.PlayerShootRes
         * @instance
         */
        PlayerShootRes.prototype.posx = "";

        /**
         * PlayerShootRes posy.
         * @member {string} posy
         * @memberof GameHoodleProto.PlayerShootRes
         * @instance
         */
        PlayerShootRes.prototype.posy = "";

        /**
         * PlayerShootRes shootpower.
         * @member {number} shootpower
         * @memberof GameHoodleProto.PlayerShootRes
         * @instance
         */
        PlayerShootRes.prototype.shootpower = 0;

        /**
         * Creates a new PlayerShootRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.PlayerShootRes
         * @static
         * @param {GameHoodleProto.IPlayerShootRes=} [properties] Properties to set
         * @returns {GameHoodleProto.PlayerShootRes} PlayerShootRes instance
         */
        PlayerShootRes.create = function create(properties) {
            return new PlayerShootRes(properties);
        };

        /**
         * Encodes the specified PlayerShootRes message. Does not implicitly {@link GameHoodleProto.PlayerShootRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.PlayerShootRes
         * @static
         * @param {GameHoodleProto.IPlayerShootRes} message PlayerShootRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerShootRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.seatid);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.posx);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.posy);
            if (message.shootpower != null && message.hasOwnProperty("shootpower"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.shootpower);
            return writer;
        };

        /**
         * Encodes the specified PlayerShootRes message, length delimited. Does not implicitly {@link GameHoodleProto.PlayerShootRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.PlayerShootRes
         * @static
         * @param {GameHoodleProto.IPlayerShootRes} message PlayerShootRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerShootRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerShootRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.PlayerShootRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.PlayerShootRes} PlayerShootRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerShootRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.PlayerShootRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    message.seatid = reader.sint32();
                    break;
                case 3:
                    message.posx = reader.string();
                    break;
                case 4:
                    message.posy = reader.string();
                    break;
                case 5:
                    message.shootpower = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            if (!message.hasOwnProperty("seatid"))
                throw $util.ProtocolError("missing required 'seatid'", { instance: message });
            if (!message.hasOwnProperty("posx"))
                throw $util.ProtocolError("missing required 'posx'", { instance: message });
            if (!message.hasOwnProperty("posy"))
                throw $util.ProtocolError("missing required 'posy'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerShootRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.PlayerShootRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.PlayerShootRes} PlayerShootRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerShootRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerShootRes message.
         * @function verify
         * @memberof GameHoodleProto.PlayerShootRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerShootRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (!$util.isInteger(message.seatid))
                return "seatid: integer expected";
            if (!$util.isString(message.posx))
                return "posx: string expected";
            if (!$util.isString(message.posy))
                return "posy: string expected";
            if (message.shootpower != null && message.hasOwnProperty("shootpower"))
                if (!$util.isInteger(message.shootpower))
                    return "shootpower: integer expected";
            return null;
        };

        /**
         * Creates a PlayerShootRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.PlayerShootRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.PlayerShootRes} PlayerShootRes
         */
        PlayerShootRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.PlayerShootRes)
                return object;
            var message = new $root.GameHoodleProto.PlayerShootRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.seatid != null)
                message.seatid = object.seatid | 0;
            if (object.posx != null)
                message.posx = String(object.posx);
            if (object.posy != null)
                message.posy = String(object.posy);
            if (object.shootpower != null)
                message.shootpower = object.shootpower | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerShootRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.PlayerShootRes
         * @static
         * @param {GameHoodleProto.PlayerShootRes} message PlayerShootRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerShootRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.seatid = 0;
                object.posx = "";
                object.posy = "";
                object.shootpower = 0;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.seatid != null && message.hasOwnProperty("seatid"))
                object.seatid = message.seatid;
            if (message.posx != null && message.hasOwnProperty("posx"))
                object.posx = message.posx;
            if (message.posy != null && message.hasOwnProperty("posy"))
                object.posy = message.posy;
            if (message.shootpower != null && message.hasOwnProperty("shootpower"))
                object.shootpower = message.shootpower;
            return object;
        };

        /**
         * Converts this PlayerShootRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.PlayerShootRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerShootRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerShootRes;
    })();

    GameHoodleProto.PlayerBallPosReq = (function() {

        /**
         * Properties of a PlayerBallPosReq.
         * @memberof GameHoodleProto
         * @interface IPlayerBallPosReq
         * @property {Array.<GameHoodleProto.IOnePlayerPos>|null} [positions] PlayerBallPosReq positions
         */

        /**
         * Constructs a new PlayerBallPosReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a PlayerBallPosReq.
         * @implements IPlayerBallPosReq
         * @constructor
         * @param {GameHoodleProto.IPlayerBallPosReq=} [properties] Properties to set
         */
        function PlayerBallPosReq(properties) {
            this.positions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerBallPosReq positions.
         * @member {Array.<GameHoodleProto.IOnePlayerPos>} positions
         * @memberof GameHoodleProto.PlayerBallPosReq
         * @instance
         */
        PlayerBallPosReq.prototype.positions = $util.emptyArray;

        /**
         * Creates a new PlayerBallPosReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.PlayerBallPosReq
         * @static
         * @param {GameHoodleProto.IPlayerBallPosReq=} [properties] Properties to set
         * @returns {GameHoodleProto.PlayerBallPosReq} PlayerBallPosReq instance
         */
        PlayerBallPosReq.create = function create(properties) {
            return new PlayerBallPosReq(properties);
        };

        /**
         * Encodes the specified PlayerBallPosReq message. Does not implicitly {@link GameHoodleProto.PlayerBallPosReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.PlayerBallPosReq
         * @static
         * @param {GameHoodleProto.IPlayerBallPosReq} message PlayerBallPosReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerBallPosReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.positions != null && message.positions.length)
                for (var i = 0; i < message.positions.length; ++i)
                    $root.GameHoodleProto.OnePlayerPos.encode(message.positions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerBallPosReq message, length delimited. Does not implicitly {@link GameHoodleProto.PlayerBallPosReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.PlayerBallPosReq
         * @static
         * @param {GameHoodleProto.IPlayerBallPosReq} message PlayerBallPosReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerBallPosReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerBallPosReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.PlayerBallPosReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.PlayerBallPosReq} PlayerBallPosReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerBallPosReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.PlayerBallPosReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.positions && message.positions.length))
                        message.positions = [];
                    message.positions.push($root.GameHoodleProto.OnePlayerPos.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerBallPosReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.PlayerBallPosReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.PlayerBallPosReq} PlayerBallPosReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerBallPosReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerBallPosReq message.
         * @function verify
         * @memberof GameHoodleProto.PlayerBallPosReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerBallPosReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.positions != null && message.hasOwnProperty("positions")) {
                if (!Array.isArray(message.positions))
                    return "positions: array expected";
                for (var i = 0; i < message.positions.length; ++i) {
                    var error = $root.GameHoodleProto.OnePlayerPos.verify(message.positions[i]);
                    if (error)
                        return "positions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PlayerBallPosReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.PlayerBallPosReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.PlayerBallPosReq} PlayerBallPosReq
         */
        PlayerBallPosReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.PlayerBallPosReq)
                return object;
            var message = new $root.GameHoodleProto.PlayerBallPosReq();
            if (object.positions) {
                if (!Array.isArray(object.positions))
                    throw TypeError(".GameHoodleProto.PlayerBallPosReq.positions: array expected");
                message.positions = [];
                for (var i = 0; i < object.positions.length; ++i) {
                    if (typeof object.positions[i] !== "object")
                        throw TypeError(".GameHoodleProto.PlayerBallPosReq.positions: object expected");
                    message.positions[i] = $root.GameHoodleProto.OnePlayerPos.fromObject(object.positions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerBallPosReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.PlayerBallPosReq
         * @static
         * @param {GameHoodleProto.PlayerBallPosReq} message PlayerBallPosReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerBallPosReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.positions = [];
            if (message.positions && message.positions.length) {
                object.positions = [];
                for (var j = 0; j < message.positions.length; ++j)
                    object.positions[j] = $root.GameHoodleProto.OnePlayerPos.toObject(message.positions[j], options);
            }
            return object;
        };

        /**
         * Converts this PlayerBallPosReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.PlayerBallPosReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerBallPosReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerBallPosReq;
    })();

    GameHoodleProto.PlayerBallPosRes = (function() {

        /**
         * Properties of a PlayerBallPosRes.
         * @memberof GameHoodleProto
         * @interface IPlayerBallPosRes
         * @property {number} status PlayerBallPosRes status
         * @property {Array.<GameHoodleProto.IOnePlayerPos>|null} [positions] PlayerBallPosRes positions
         */

        /**
         * Constructs a new PlayerBallPosRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a PlayerBallPosRes.
         * @implements IPlayerBallPosRes
         * @constructor
         * @param {GameHoodleProto.IPlayerBallPosRes=} [properties] Properties to set
         */
        function PlayerBallPosRes(properties) {
            this.positions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerBallPosRes status.
         * @member {number} status
         * @memberof GameHoodleProto.PlayerBallPosRes
         * @instance
         */
        PlayerBallPosRes.prototype.status = 0;

        /**
         * PlayerBallPosRes positions.
         * @member {Array.<GameHoodleProto.IOnePlayerPos>} positions
         * @memberof GameHoodleProto.PlayerBallPosRes
         * @instance
         */
        PlayerBallPosRes.prototype.positions = $util.emptyArray;

        /**
         * Creates a new PlayerBallPosRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.PlayerBallPosRes
         * @static
         * @param {GameHoodleProto.IPlayerBallPosRes=} [properties] Properties to set
         * @returns {GameHoodleProto.PlayerBallPosRes} PlayerBallPosRes instance
         */
        PlayerBallPosRes.create = function create(properties) {
            return new PlayerBallPosRes(properties);
        };

        /**
         * Encodes the specified PlayerBallPosRes message. Does not implicitly {@link GameHoodleProto.PlayerBallPosRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.PlayerBallPosRes
         * @static
         * @param {GameHoodleProto.IPlayerBallPosRes} message PlayerBallPosRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerBallPosRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.positions != null && message.positions.length)
                for (var i = 0; i < message.positions.length; ++i)
                    $root.GameHoodleProto.OnePlayerPos.encode(message.positions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerBallPosRes message, length delimited. Does not implicitly {@link GameHoodleProto.PlayerBallPosRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.PlayerBallPosRes
         * @static
         * @param {GameHoodleProto.IPlayerBallPosRes} message PlayerBallPosRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerBallPosRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerBallPosRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.PlayerBallPosRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.PlayerBallPosRes} PlayerBallPosRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerBallPosRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.PlayerBallPosRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    if (!(message.positions && message.positions.length))
                        message.positions = [];
                    message.positions.push($root.GameHoodleProto.OnePlayerPos.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerBallPosRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.PlayerBallPosRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.PlayerBallPosRes} PlayerBallPosRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerBallPosRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerBallPosRes message.
         * @function verify
         * @memberof GameHoodleProto.PlayerBallPosRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerBallPosRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.positions != null && message.hasOwnProperty("positions")) {
                if (!Array.isArray(message.positions))
                    return "positions: array expected";
                for (var i = 0; i < message.positions.length; ++i) {
                    var error = $root.GameHoodleProto.OnePlayerPos.verify(message.positions[i]);
                    if (error)
                        return "positions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PlayerBallPosRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.PlayerBallPosRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.PlayerBallPosRes} PlayerBallPosRes
         */
        PlayerBallPosRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.PlayerBallPosRes)
                return object;
            var message = new $root.GameHoodleProto.PlayerBallPosRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.positions) {
                if (!Array.isArray(object.positions))
                    throw TypeError(".GameHoodleProto.PlayerBallPosRes.positions: array expected");
                message.positions = [];
                for (var i = 0; i < object.positions.length; ++i) {
                    if (typeof object.positions[i] !== "object")
                        throw TypeError(".GameHoodleProto.PlayerBallPosRes.positions: object expected");
                    message.positions[i] = $root.GameHoodleProto.OnePlayerPos.fromObject(object.positions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerBallPosRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.PlayerBallPosRes
         * @static
         * @param {GameHoodleProto.PlayerBallPosRes} message PlayerBallPosRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerBallPosRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.positions = [];
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.positions && message.positions.length) {
                object.positions = [];
                for (var j = 0; j < message.positions.length; ++j)
                    object.positions[j] = $root.GameHoodleProto.OnePlayerPos.toObject(message.positions[j], options);
            }
            return object;
        };

        /**
         * Converts this PlayerBallPosRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.PlayerBallPosRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerBallPosRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerBallPosRes;
    })();

    GameHoodleProto.PlayerIsShootedReq = (function() {

        /**
         * Properties of a PlayerIsShootedReq.
         * @memberof GameHoodleProto
         * @interface IPlayerIsShootedReq
         * @property {number} srcseatid PlayerIsShootedReq srcseatid
         * @property {number} desseatid PlayerIsShootedReq desseatid
         */

        /**
         * Constructs a new PlayerIsShootedReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a PlayerIsShootedReq.
         * @implements IPlayerIsShootedReq
         * @constructor
         * @param {GameHoodleProto.IPlayerIsShootedReq=} [properties] Properties to set
         */
        function PlayerIsShootedReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerIsShootedReq srcseatid.
         * @member {number} srcseatid
         * @memberof GameHoodleProto.PlayerIsShootedReq
         * @instance
         */
        PlayerIsShootedReq.prototype.srcseatid = 0;

        /**
         * PlayerIsShootedReq desseatid.
         * @member {number} desseatid
         * @memberof GameHoodleProto.PlayerIsShootedReq
         * @instance
         */
        PlayerIsShootedReq.prototype.desseatid = 0;

        /**
         * Creates a new PlayerIsShootedReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.PlayerIsShootedReq
         * @static
         * @param {GameHoodleProto.IPlayerIsShootedReq=} [properties] Properties to set
         * @returns {GameHoodleProto.PlayerIsShootedReq} PlayerIsShootedReq instance
         */
        PlayerIsShootedReq.create = function create(properties) {
            return new PlayerIsShootedReq(properties);
        };

        /**
         * Encodes the specified PlayerIsShootedReq message. Does not implicitly {@link GameHoodleProto.PlayerIsShootedReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.PlayerIsShootedReq
         * @static
         * @param {GameHoodleProto.IPlayerIsShootedReq} message PlayerIsShootedReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerIsShootedReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.srcseatid);
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.desseatid);
            return writer;
        };

        /**
         * Encodes the specified PlayerIsShootedReq message, length delimited. Does not implicitly {@link GameHoodleProto.PlayerIsShootedReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.PlayerIsShootedReq
         * @static
         * @param {GameHoodleProto.IPlayerIsShootedReq} message PlayerIsShootedReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerIsShootedReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerIsShootedReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.PlayerIsShootedReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.PlayerIsShootedReq} PlayerIsShootedReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerIsShootedReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.PlayerIsShootedReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.srcseatid = reader.sint32();
                    break;
                case 2:
                    message.desseatid = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("srcseatid"))
                throw $util.ProtocolError("missing required 'srcseatid'", { instance: message });
            if (!message.hasOwnProperty("desseatid"))
                throw $util.ProtocolError("missing required 'desseatid'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerIsShootedReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.PlayerIsShootedReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.PlayerIsShootedReq} PlayerIsShootedReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerIsShootedReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerIsShootedReq message.
         * @function verify
         * @memberof GameHoodleProto.PlayerIsShootedReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerIsShootedReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.srcseatid))
                return "srcseatid: integer expected";
            if (!$util.isInteger(message.desseatid))
                return "desseatid: integer expected";
            return null;
        };

        /**
         * Creates a PlayerIsShootedReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.PlayerIsShootedReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.PlayerIsShootedReq} PlayerIsShootedReq
         */
        PlayerIsShootedReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.PlayerIsShootedReq)
                return object;
            var message = new $root.GameHoodleProto.PlayerIsShootedReq();
            if (object.srcseatid != null)
                message.srcseatid = object.srcseatid | 0;
            if (object.desseatid != null)
                message.desseatid = object.desseatid | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerIsShootedReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.PlayerIsShootedReq
         * @static
         * @param {GameHoodleProto.PlayerIsShootedReq} message PlayerIsShootedReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerIsShootedReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.srcseatid = 0;
                object.desseatid = 0;
            }
            if (message.srcseatid != null && message.hasOwnProperty("srcseatid"))
                object.srcseatid = message.srcseatid;
            if (message.desseatid != null && message.hasOwnProperty("desseatid"))
                object.desseatid = message.desseatid;
            return object;
        };

        /**
         * Converts this PlayerIsShootedReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.PlayerIsShootedReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerIsShootedReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerIsShootedReq;
    })();

    GameHoodleProto.PlayerIsShootedRes = (function() {

        /**
         * Properties of a PlayerIsShootedRes.
         * @memberof GameHoodleProto
         * @interface IPlayerIsShootedRes
         * @property {number} status PlayerIsShootedRes status
         * @property {number} srcseatid PlayerIsShootedRes srcseatid
         * @property {number} desseatid PlayerIsShootedRes desseatid
         */

        /**
         * Constructs a new PlayerIsShootedRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a PlayerIsShootedRes.
         * @implements IPlayerIsShootedRes
         * @constructor
         * @param {GameHoodleProto.IPlayerIsShootedRes=} [properties] Properties to set
         */
        function PlayerIsShootedRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerIsShootedRes status.
         * @member {number} status
         * @memberof GameHoodleProto.PlayerIsShootedRes
         * @instance
         */
        PlayerIsShootedRes.prototype.status = 0;

        /**
         * PlayerIsShootedRes srcseatid.
         * @member {number} srcseatid
         * @memberof GameHoodleProto.PlayerIsShootedRes
         * @instance
         */
        PlayerIsShootedRes.prototype.srcseatid = 0;

        /**
         * PlayerIsShootedRes desseatid.
         * @member {number} desseatid
         * @memberof GameHoodleProto.PlayerIsShootedRes
         * @instance
         */
        PlayerIsShootedRes.prototype.desseatid = 0;

        /**
         * Creates a new PlayerIsShootedRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.PlayerIsShootedRes
         * @static
         * @param {GameHoodleProto.IPlayerIsShootedRes=} [properties] Properties to set
         * @returns {GameHoodleProto.PlayerIsShootedRes} PlayerIsShootedRes instance
         */
        PlayerIsShootedRes.create = function create(properties) {
            return new PlayerIsShootedRes(properties);
        };

        /**
         * Encodes the specified PlayerIsShootedRes message. Does not implicitly {@link GameHoodleProto.PlayerIsShootedRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.PlayerIsShootedRes
         * @static
         * @param {GameHoodleProto.IPlayerIsShootedRes} message PlayerIsShootedRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerIsShootedRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.srcseatid);
            writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.desseatid);
            return writer;
        };

        /**
         * Encodes the specified PlayerIsShootedRes message, length delimited. Does not implicitly {@link GameHoodleProto.PlayerIsShootedRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.PlayerIsShootedRes
         * @static
         * @param {GameHoodleProto.IPlayerIsShootedRes} message PlayerIsShootedRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerIsShootedRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerIsShootedRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.PlayerIsShootedRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.PlayerIsShootedRes} PlayerIsShootedRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerIsShootedRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.PlayerIsShootedRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    message.srcseatid = reader.sint32();
                    break;
                case 3:
                    message.desseatid = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            if (!message.hasOwnProperty("srcseatid"))
                throw $util.ProtocolError("missing required 'srcseatid'", { instance: message });
            if (!message.hasOwnProperty("desseatid"))
                throw $util.ProtocolError("missing required 'desseatid'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerIsShootedRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.PlayerIsShootedRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.PlayerIsShootedRes} PlayerIsShootedRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerIsShootedRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerIsShootedRes message.
         * @function verify
         * @memberof GameHoodleProto.PlayerIsShootedRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerIsShootedRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (!$util.isInteger(message.srcseatid))
                return "srcseatid: integer expected";
            if (!$util.isInteger(message.desseatid))
                return "desseatid: integer expected";
            return null;
        };

        /**
         * Creates a PlayerIsShootedRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.PlayerIsShootedRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.PlayerIsShootedRes} PlayerIsShootedRes
         */
        PlayerIsShootedRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.PlayerIsShootedRes)
                return object;
            var message = new $root.GameHoodleProto.PlayerIsShootedRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.srcseatid != null)
                message.srcseatid = object.srcseatid | 0;
            if (object.desseatid != null)
                message.desseatid = object.desseatid | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerIsShootedRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.PlayerIsShootedRes
         * @static
         * @param {GameHoodleProto.PlayerIsShootedRes} message PlayerIsShootedRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerIsShootedRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.srcseatid = 0;
                object.desseatid = 0;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.srcseatid != null && message.hasOwnProperty("srcseatid"))
                object.srcseatid = message.srcseatid;
            if (message.desseatid != null && message.hasOwnProperty("desseatid"))
                object.desseatid = message.desseatid;
            return object;
        };

        /**
         * Converts this PlayerIsShootedRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.PlayerIsShootedRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerIsShootedRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerIsShootedRes;
    })();

    GameHoodleProto.GameResultRes = (function() {

        /**
         * Properties of a GameResultRes.
         * @memberof GameHoodleProto
         * @interface IGameResultRes
         * @property {Array.<GameHoodleProto.IOnePlayerScore>|null} [scores] GameResultRes scores
         */

        /**
         * Constructs a new GameResultRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a GameResultRes.
         * @implements IGameResultRes
         * @constructor
         * @param {GameHoodleProto.IGameResultRes=} [properties] Properties to set
         */
        function GameResultRes(properties) {
            this.scores = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameResultRes scores.
         * @member {Array.<GameHoodleProto.IOnePlayerScore>} scores
         * @memberof GameHoodleProto.GameResultRes
         * @instance
         */
        GameResultRes.prototype.scores = $util.emptyArray;

        /**
         * Creates a new GameResultRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.GameResultRes
         * @static
         * @param {GameHoodleProto.IGameResultRes=} [properties] Properties to set
         * @returns {GameHoodleProto.GameResultRes} GameResultRes instance
         */
        GameResultRes.create = function create(properties) {
            return new GameResultRes(properties);
        };

        /**
         * Encodes the specified GameResultRes message. Does not implicitly {@link GameHoodleProto.GameResultRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.GameResultRes
         * @static
         * @param {GameHoodleProto.IGameResultRes} message GameResultRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResultRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.scores != null && message.scores.length)
                for (var i = 0; i < message.scores.length; ++i)
                    $root.GameHoodleProto.OnePlayerScore.encode(message.scores[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameResultRes message, length delimited. Does not implicitly {@link GameHoodleProto.GameResultRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.GameResultRes
         * @static
         * @param {GameHoodleProto.IGameResultRes} message GameResultRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResultRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameResultRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.GameResultRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.GameResultRes} GameResultRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResultRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.GameResultRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.scores && message.scores.length))
                        message.scores = [];
                    message.scores.push($root.GameHoodleProto.OnePlayerScore.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameResultRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.GameResultRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.GameResultRes} GameResultRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResultRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameResultRes message.
         * @function verify
         * @memberof GameHoodleProto.GameResultRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameResultRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.scores != null && message.hasOwnProperty("scores")) {
                if (!Array.isArray(message.scores))
                    return "scores: array expected";
                for (var i = 0; i < message.scores.length; ++i) {
                    var error = $root.GameHoodleProto.OnePlayerScore.verify(message.scores[i]);
                    if (error)
                        return "scores." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameResultRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.GameResultRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.GameResultRes} GameResultRes
         */
        GameResultRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.GameResultRes)
                return object;
            var message = new $root.GameHoodleProto.GameResultRes();
            if (object.scores) {
                if (!Array.isArray(object.scores))
                    throw TypeError(".GameHoodleProto.GameResultRes.scores: array expected");
                message.scores = [];
                for (var i = 0; i < object.scores.length; ++i) {
                    if (typeof object.scores[i] !== "object")
                        throw TypeError(".GameHoodleProto.GameResultRes.scores: object expected");
                    message.scores[i] = $root.GameHoodleProto.OnePlayerScore.fromObject(object.scores[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameResultRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.GameResultRes
         * @static
         * @param {GameHoodleProto.GameResultRes} message GameResultRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameResultRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.scores = [];
            if (message.scores && message.scores.length) {
                object.scores = [];
                for (var j = 0; j < message.scores.length; ++j)
                    object.scores[j] = $root.GameHoodleProto.OnePlayerScore.toObject(message.scores[j], options);
            }
            return object;
        };

        /**
         * Converts this GameResultRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.GameResultRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameResultRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameResultRes;
    })();

    GameHoodleProto.TotalGameResultRes = (function() {

        /**
         * Properties of a TotalGameResultRes.
         * @memberof GameHoodleProto
         * @interface ITotalGameResultRes
         * @property {Array.<GameHoodleProto.IOnePlayerScore>|null} [scores] TotalGameResultRes scores
         * @property {Array.<GameHoodleProto.IOnPlayerGolds>|null} [golds] TotalGameResultRes golds
         */

        /**
         * Constructs a new TotalGameResultRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a TotalGameResultRes.
         * @implements ITotalGameResultRes
         * @constructor
         * @param {GameHoodleProto.ITotalGameResultRes=} [properties] Properties to set
         */
        function TotalGameResultRes(properties) {
            this.scores = [];
            this.golds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TotalGameResultRes scores.
         * @member {Array.<GameHoodleProto.IOnePlayerScore>} scores
         * @memberof GameHoodleProto.TotalGameResultRes
         * @instance
         */
        TotalGameResultRes.prototype.scores = $util.emptyArray;

        /**
         * TotalGameResultRes golds.
         * @member {Array.<GameHoodleProto.IOnPlayerGolds>} golds
         * @memberof GameHoodleProto.TotalGameResultRes
         * @instance
         */
        TotalGameResultRes.prototype.golds = $util.emptyArray;

        /**
         * Creates a new TotalGameResultRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.TotalGameResultRes
         * @static
         * @param {GameHoodleProto.ITotalGameResultRes=} [properties] Properties to set
         * @returns {GameHoodleProto.TotalGameResultRes} TotalGameResultRes instance
         */
        TotalGameResultRes.create = function create(properties) {
            return new TotalGameResultRes(properties);
        };

        /**
         * Encodes the specified TotalGameResultRes message. Does not implicitly {@link GameHoodleProto.TotalGameResultRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.TotalGameResultRes
         * @static
         * @param {GameHoodleProto.ITotalGameResultRes} message TotalGameResultRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TotalGameResultRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.scores != null && message.scores.length)
                for (var i = 0; i < message.scores.length; ++i)
                    $root.GameHoodleProto.OnePlayerScore.encode(message.scores[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.golds != null && message.golds.length)
                for (var i = 0; i < message.golds.length; ++i)
                    $root.GameHoodleProto.OnPlayerGolds.encode(message.golds[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TotalGameResultRes message, length delimited. Does not implicitly {@link GameHoodleProto.TotalGameResultRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.TotalGameResultRes
         * @static
         * @param {GameHoodleProto.ITotalGameResultRes} message TotalGameResultRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TotalGameResultRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TotalGameResultRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.TotalGameResultRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.TotalGameResultRes} TotalGameResultRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TotalGameResultRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.TotalGameResultRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.scores && message.scores.length))
                        message.scores = [];
                    message.scores.push($root.GameHoodleProto.OnePlayerScore.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.golds && message.golds.length))
                        message.golds = [];
                    message.golds.push($root.GameHoodleProto.OnPlayerGolds.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TotalGameResultRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.TotalGameResultRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.TotalGameResultRes} TotalGameResultRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TotalGameResultRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TotalGameResultRes message.
         * @function verify
         * @memberof GameHoodleProto.TotalGameResultRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TotalGameResultRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.scores != null && message.hasOwnProperty("scores")) {
                if (!Array.isArray(message.scores))
                    return "scores: array expected";
                for (var i = 0; i < message.scores.length; ++i) {
                    var error = $root.GameHoodleProto.OnePlayerScore.verify(message.scores[i]);
                    if (error)
                        return "scores." + error;
                }
            }
            if (message.golds != null && message.hasOwnProperty("golds")) {
                if (!Array.isArray(message.golds))
                    return "golds: array expected";
                for (var i = 0; i < message.golds.length; ++i) {
                    var error = $root.GameHoodleProto.OnPlayerGolds.verify(message.golds[i]);
                    if (error)
                        return "golds." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TotalGameResultRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.TotalGameResultRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.TotalGameResultRes} TotalGameResultRes
         */
        TotalGameResultRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.TotalGameResultRes)
                return object;
            var message = new $root.GameHoodleProto.TotalGameResultRes();
            if (object.scores) {
                if (!Array.isArray(object.scores))
                    throw TypeError(".GameHoodleProto.TotalGameResultRes.scores: array expected");
                message.scores = [];
                for (var i = 0; i < object.scores.length; ++i) {
                    if (typeof object.scores[i] !== "object")
                        throw TypeError(".GameHoodleProto.TotalGameResultRes.scores: object expected");
                    message.scores[i] = $root.GameHoodleProto.OnePlayerScore.fromObject(object.scores[i]);
                }
            }
            if (object.golds) {
                if (!Array.isArray(object.golds))
                    throw TypeError(".GameHoodleProto.TotalGameResultRes.golds: array expected");
                message.golds = [];
                for (var i = 0; i < object.golds.length; ++i) {
                    if (typeof object.golds[i] !== "object")
                        throw TypeError(".GameHoodleProto.TotalGameResultRes.golds: object expected");
                    message.golds[i] = $root.GameHoodleProto.OnPlayerGolds.fromObject(object.golds[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TotalGameResultRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.TotalGameResultRes
         * @static
         * @param {GameHoodleProto.TotalGameResultRes} message TotalGameResultRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TotalGameResultRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.scores = [];
                object.golds = [];
            }
            if (message.scores && message.scores.length) {
                object.scores = [];
                for (var j = 0; j < message.scores.length; ++j)
                    object.scores[j] = $root.GameHoodleProto.OnePlayerScore.toObject(message.scores[j], options);
            }
            if (message.golds && message.golds.length) {
                object.golds = [];
                for (var j = 0; j < message.golds.length; ++j)
                    object.golds[j] = $root.GameHoodleProto.OnPlayerGolds.toObject(message.golds[j], options);
            }
            return object;
        };

        /**
         * Converts this TotalGameResultRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.TotalGameResultRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TotalGameResultRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TotalGameResultRes;
    })();

    GameHoodleProto.PlayerScoreRes = (function() {

        /**
         * Properties of a PlayerScoreRes.
         * @memberof GameHoodleProto
         * @interface IPlayerScoreRes
         * @property {Array.<GameHoodleProto.IOnePlayerScore>|null} [scores] PlayerScoreRes scores
         */

        /**
         * Constructs a new PlayerScoreRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a PlayerScoreRes.
         * @implements IPlayerScoreRes
         * @constructor
         * @param {GameHoodleProto.IPlayerScoreRes=} [properties] Properties to set
         */
        function PlayerScoreRes(properties) {
            this.scores = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerScoreRes scores.
         * @member {Array.<GameHoodleProto.IOnePlayerScore>} scores
         * @memberof GameHoodleProto.PlayerScoreRes
         * @instance
         */
        PlayerScoreRes.prototype.scores = $util.emptyArray;

        /**
         * Creates a new PlayerScoreRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.PlayerScoreRes
         * @static
         * @param {GameHoodleProto.IPlayerScoreRes=} [properties] Properties to set
         * @returns {GameHoodleProto.PlayerScoreRes} PlayerScoreRes instance
         */
        PlayerScoreRes.create = function create(properties) {
            return new PlayerScoreRes(properties);
        };

        /**
         * Encodes the specified PlayerScoreRes message. Does not implicitly {@link GameHoodleProto.PlayerScoreRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.PlayerScoreRes
         * @static
         * @param {GameHoodleProto.IPlayerScoreRes} message PlayerScoreRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerScoreRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.scores != null && message.scores.length)
                for (var i = 0; i < message.scores.length; ++i)
                    $root.GameHoodleProto.OnePlayerScore.encode(message.scores[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerScoreRes message, length delimited. Does not implicitly {@link GameHoodleProto.PlayerScoreRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.PlayerScoreRes
         * @static
         * @param {GameHoodleProto.IPlayerScoreRes} message PlayerScoreRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerScoreRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerScoreRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.PlayerScoreRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.PlayerScoreRes} PlayerScoreRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerScoreRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.PlayerScoreRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.scores && message.scores.length))
                        message.scores = [];
                    message.scores.push($root.GameHoodleProto.OnePlayerScore.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerScoreRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.PlayerScoreRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.PlayerScoreRes} PlayerScoreRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerScoreRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerScoreRes message.
         * @function verify
         * @memberof GameHoodleProto.PlayerScoreRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerScoreRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.scores != null && message.hasOwnProperty("scores")) {
                if (!Array.isArray(message.scores))
                    return "scores: array expected";
                for (var i = 0; i < message.scores.length; ++i) {
                    var error = $root.GameHoodleProto.OnePlayerScore.verify(message.scores[i]);
                    if (error)
                        return "scores." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PlayerScoreRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.PlayerScoreRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.PlayerScoreRes} PlayerScoreRes
         */
        PlayerScoreRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.PlayerScoreRes)
                return object;
            var message = new $root.GameHoodleProto.PlayerScoreRes();
            if (object.scores) {
                if (!Array.isArray(object.scores))
                    throw TypeError(".GameHoodleProto.PlayerScoreRes.scores: array expected");
                message.scores = [];
                for (var i = 0; i < object.scores.length; ++i) {
                    if (typeof object.scores[i] !== "object")
                        throw TypeError(".GameHoodleProto.PlayerScoreRes.scores: object expected");
                    message.scores[i] = $root.GameHoodleProto.OnePlayerScore.fromObject(object.scores[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerScoreRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.PlayerScoreRes
         * @static
         * @param {GameHoodleProto.PlayerScoreRes} message PlayerScoreRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerScoreRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.scores = [];
            if (message.scores && message.scores.length) {
                object.scores = [];
                for (var j = 0; j < message.scores.length; ++j)
                    object.scores[j] = $root.GameHoodleProto.OnePlayerScore.toObject(message.scores[j], options);
            }
            return object;
        };

        /**
         * Converts this PlayerScoreRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.PlayerScoreRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerScoreRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerScoreRes;
    })();

    GameHoodleProto.UserMatchReq = (function() {

        /**
         * Properties of a UserMatchReq.
         * @memberof GameHoodleProto
         * @interface IUserMatchReq
         * @property {number} zoomid UserMatchReq zoomid
         */

        /**
         * Constructs a new UserMatchReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserMatchReq.
         * @implements IUserMatchReq
         * @constructor
         * @param {GameHoodleProto.IUserMatchReq=} [properties] Properties to set
         */
        function UserMatchReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserMatchReq zoomid.
         * @member {number} zoomid
         * @memberof GameHoodleProto.UserMatchReq
         * @instance
         */
        UserMatchReq.prototype.zoomid = 0;

        /**
         * Creates a new UserMatchReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserMatchReq
         * @static
         * @param {GameHoodleProto.IUserMatchReq=} [properties] Properties to set
         * @returns {GameHoodleProto.UserMatchReq} UserMatchReq instance
         */
        UserMatchReq.create = function create(properties) {
            return new UserMatchReq(properties);
        };

        /**
         * Encodes the specified UserMatchReq message. Does not implicitly {@link GameHoodleProto.UserMatchReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserMatchReq
         * @static
         * @param {GameHoodleProto.IUserMatchReq} message UserMatchReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMatchReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.zoomid);
            return writer;
        };

        /**
         * Encodes the specified UserMatchReq message, length delimited. Does not implicitly {@link GameHoodleProto.UserMatchReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserMatchReq
         * @static
         * @param {GameHoodleProto.IUserMatchReq} message UserMatchReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMatchReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserMatchReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserMatchReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserMatchReq} UserMatchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMatchReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserMatchReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.zoomid = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("zoomid"))
                throw $util.ProtocolError("missing required 'zoomid'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserMatchReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserMatchReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserMatchReq} UserMatchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMatchReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserMatchReq message.
         * @function verify
         * @memberof GameHoodleProto.UserMatchReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserMatchReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.zoomid))
                return "zoomid: integer expected";
            return null;
        };

        /**
         * Creates a UserMatchReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserMatchReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserMatchReq} UserMatchReq
         */
        UserMatchReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserMatchReq)
                return object;
            var message = new $root.GameHoodleProto.UserMatchReq();
            if (object.zoomid != null)
                message.zoomid = object.zoomid | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserMatchReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserMatchReq
         * @static
         * @param {GameHoodleProto.UserMatchReq} message UserMatchReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserMatchReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.zoomid = 0;
            if (message.zoomid != null && message.hasOwnProperty("zoomid"))
                object.zoomid = message.zoomid;
            return object;
        };

        /**
         * Converts this UserMatchReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserMatchReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserMatchReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserMatchReq;
    })();

    GameHoodleProto.UserMatchRes = (function() {

        /**
         * Properties of a UserMatchRes.
         * @memberof GameHoodleProto
         * @interface IUserMatchRes
         * @property {number} status UserMatchRes status
         * @property {boolean|null} [matchsuccess] UserMatchRes matchsuccess
         * @property {Array.<GameHoodleProto.IUserInfo>|null} [userinfo] UserMatchRes userinfo
         */

        /**
         * Constructs a new UserMatchRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserMatchRes.
         * @implements IUserMatchRes
         * @constructor
         * @param {GameHoodleProto.IUserMatchRes=} [properties] Properties to set
         */
        function UserMatchRes(properties) {
            this.userinfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserMatchRes status.
         * @member {number} status
         * @memberof GameHoodleProto.UserMatchRes
         * @instance
         */
        UserMatchRes.prototype.status = 0;

        /**
         * UserMatchRes matchsuccess.
         * @member {boolean} matchsuccess
         * @memberof GameHoodleProto.UserMatchRes
         * @instance
         */
        UserMatchRes.prototype.matchsuccess = false;

        /**
         * UserMatchRes userinfo.
         * @member {Array.<GameHoodleProto.IUserInfo>} userinfo
         * @memberof GameHoodleProto.UserMatchRes
         * @instance
         */
        UserMatchRes.prototype.userinfo = $util.emptyArray;

        /**
         * Creates a new UserMatchRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserMatchRes
         * @static
         * @param {GameHoodleProto.IUserMatchRes=} [properties] Properties to set
         * @returns {GameHoodleProto.UserMatchRes} UserMatchRes instance
         */
        UserMatchRes.create = function create(properties) {
            return new UserMatchRes(properties);
        };

        /**
         * Encodes the specified UserMatchRes message. Does not implicitly {@link GameHoodleProto.UserMatchRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserMatchRes
         * @static
         * @param {GameHoodleProto.IUserMatchRes} message UserMatchRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMatchRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.matchsuccess != null && message.hasOwnProperty("matchsuccess"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.matchsuccess);
            if (message.userinfo != null && message.userinfo.length)
                for (var i = 0; i < message.userinfo.length; ++i)
                    $root.GameHoodleProto.UserInfo.encode(message.userinfo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserMatchRes message, length delimited. Does not implicitly {@link GameHoodleProto.UserMatchRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserMatchRes
         * @static
         * @param {GameHoodleProto.IUserMatchRes} message UserMatchRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMatchRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserMatchRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserMatchRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserMatchRes} UserMatchRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMatchRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserMatchRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    message.matchsuccess = reader.bool();
                    break;
                case 3:
                    if (!(message.userinfo && message.userinfo.length))
                        message.userinfo = [];
                    message.userinfo.push($root.GameHoodleProto.UserInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserMatchRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserMatchRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserMatchRes} UserMatchRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMatchRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserMatchRes message.
         * @function verify
         * @memberof GameHoodleProto.UserMatchRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserMatchRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.matchsuccess != null && message.hasOwnProperty("matchsuccess"))
                if (typeof message.matchsuccess !== "boolean")
                    return "matchsuccess: boolean expected";
            if (message.userinfo != null && message.hasOwnProperty("userinfo")) {
                if (!Array.isArray(message.userinfo))
                    return "userinfo: array expected";
                for (var i = 0; i < message.userinfo.length; ++i) {
                    var error = $root.GameHoodleProto.UserInfo.verify(message.userinfo[i]);
                    if (error)
                        return "userinfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserMatchRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserMatchRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserMatchRes} UserMatchRes
         */
        UserMatchRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserMatchRes)
                return object;
            var message = new $root.GameHoodleProto.UserMatchRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.matchsuccess != null)
                message.matchsuccess = Boolean(object.matchsuccess);
            if (object.userinfo) {
                if (!Array.isArray(object.userinfo))
                    throw TypeError(".GameHoodleProto.UserMatchRes.userinfo: array expected");
                message.userinfo = [];
                for (var i = 0; i < object.userinfo.length; ++i) {
                    if (typeof object.userinfo[i] !== "object")
                        throw TypeError(".GameHoodleProto.UserMatchRes.userinfo: object expected");
                    message.userinfo[i] = $root.GameHoodleProto.UserInfo.fromObject(object.userinfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserMatchRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserMatchRes
         * @static
         * @param {GameHoodleProto.UserMatchRes} message UserMatchRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserMatchRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userinfo = [];
            if (options.defaults) {
                object.status = 0;
                object.matchsuccess = false;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.matchsuccess != null && message.hasOwnProperty("matchsuccess"))
                object.matchsuccess = message.matchsuccess;
            if (message.userinfo && message.userinfo.length) {
                object.userinfo = [];
                for (var j = 0; j < message.userinfo.length; ++j)
                    object.userinfo[j] = $root.GameHoodleProto.UserInfo.toObject(message.userinfo[j], options);
            }
            return object;
        };

        /**
         * Converts this UserMatchRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserMatchRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserMatchRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserMatchRes;
    })();

    GameHoodleProto.UserStopMatchReq = (function() {

        /**
         * Properties of a UserStopMatchReq.
         * @memberof GameHoodleProto
         * @interface IUserStopMatchReq
         */

        /**
         * Constructs a new UserStopMatchReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserStopMatchReq.
         * @implements IUserStopMatchReq
         * @constructor
         * @param {GameHoodleProto.IUserStopMatchReq=} [properties] Properties to set
         */
        function UserStopMatchReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UserStopMatchReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserStopMatchReq
         * @static
         * @param {GameHoodleProto.IUserStopMatchReq=} [properties] Properties to set
         * @returns {GameHoodleProto.UserStopMatchReq} UserStopMatchReq instance
         */
        UserStopMatchReq.create = function create(properties) {
            return new UserStopMatchReq(properties);
        };

        /**
         * Encodes the specified UserStopMatchReq message. Does not implicitly {@link GameHoodleProto.UserStopMatchReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserStopMatchReq
         * @static
         * @param {GameHoodleProto.IUserStopMatchReq} message UserStopMatchReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStopMatchReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserStopMatchReq message, length delimited. Does not implicitly {@link GameHoodleProto.UserStopMatchReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserStopMatchReq
         * @static
         * @param {GameHoodleProto.IUserStopMatchReq} message UserStopMatchReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStopMatchReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserStopMatchReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserStopMatchReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserStopMatchReq} UserStopMatchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStopMatchReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserStopMatchReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserStopMatchReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserStopMatchReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserStopMatchReq} UserStopMatchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStopMatchReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserStopMatchReq message.
         * @function verify
         * @memberof GameHoodleProto.UserStopMatchReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserStopMatchReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a UserStopMatchReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserStopMatchReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserStopMatchReq} UserStopMatchReq
         */
        UserStopMatchReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserStopMatchReq)
                return object;
            return new $root.GameHoodleProto.UserStopMatchReq();
        };

        /**
         * Creates a plain object from a UserStopMatchReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserStopMatchReq
         * @static
         * @param {GameHoodleProto.UserStopMatchReq} message UserStopMatchReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserStopMatchReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserStopMatchReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserStopMatchReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserStopMatchReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserStopMatchReq;
    })();

    GameHoodleProto.UserStopMatchRes = (function() {

        /**
         * Properties of a UserStopMatchRes.
         * @memberof GameHoodleProto
         * @interface IUserStopMatchRes
         * @property {number} status UserStopMatchRes status
         */

        /**
         * Constructs a new UserStopMatchRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserStopMatchRes.
         * @implements IUserStopMatchRes
         * @constructor
         * @param {GameHoodleProto.IUserStopMatchRes=} [properties] Properties to set
         */
        function UserStopMatchRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserStopMatchRes status.
         * @member {number} status
         * @memberof GameHoodleProto.UserStopMatchRes
         * @instance
         */
        UserStopMatchRes.prototype.status = 0;

        /**
         * Creates a new UserStopMatchRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserStopMatchRes
         * @static
         * @param {GameHoodleProto.IUserStopMatchRes=} [properties] Properties to set
         * @returns {GameHoodleProto.UserStopMatchRes} UserStopMatchRes instance
         */
        UserStopMatchRes.create = function create(properties) {
            return new UserStopMatchRes(properties);
        };

        /**
         * Encodes the specified UserStopMatchRes message. Does not implicitly {@link GameHoodleProto.UserStopMatchRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserStopMatchRes
         * @static
         * @param {GameHoodleProto.IUserStopMatchRes} message UserStopMatchRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStopMatchRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            return writer;
        };

        /**
         * Encodes the specified UserStopMatchRes message, length delimited. Does not implicitly {@link GameHoodleProto.UserStopMatchRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserStopMatchRes
         * @static
         * @param {GameHoodleProto.IUserStopMatchRes} message UserStopMatchRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStopMatchRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserStopMatchRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserStopMatchRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserStopMatchRes} UserStopMatchRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStopMatchRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserStopMatchRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserStopMatchRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserStopMatchRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserStopMatchRes} UserStopMatchRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStopMatchRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserStopMatchRes message.
         * @function verify
         * @memberof GameHoodleProto.UserStopMatchRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserStopMatchRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates a UserStopMatchRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserStopMatchRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserStopMatchRes} UserStopMatchRes
         */
        UserStopMatchRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserStopMatchRes)
                return object;
            var message = new $root.GameHoodleProto.UserStopMatchRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserStopMatchRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserStopMatchRes
         * @static
         * @param {GameHoodleProto.UserStopMatchRes} message UserStopMatchRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserStopMatchRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this UserStopMatchRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserStopMatchRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserStopMatchRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserStopMatchRes;
    })();

    GameHoodleProto.UserGameInfoReq = (function() {

        /**
         * Properties of a UserGameInfoReq.
         * @memberof GameHoodleProto
         * @interface IUserGameInfoReq
         */

        /**
         * Constructs a new UserGameInfoReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserGameInfoReq.
         * @implements IUserGameInfoReq
         * @constructor
         * @param {GameHoodleProto.IUserGameInfoReq=} [properties] Properties to set
         */
        function UserGameInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UserGameInfoReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserGameInfoReq
         * @static
         * @param {GameHoodleProto.IUserGameInfoReq=} [properties] Properties to set
         * @returns {GameHoodleProto.UserGameInfoReq} UserGameInfoReq instance
         */
        UserGameInfoReq.create = function create(properties) {
            return new UserGameInfoReq(properties);
        };

        /**
         * Encodes the specified UserGameInfoReq message. Does not implicitly {@link GameHoodleProto.UserGameInfoReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserGameInfoReq
         * @static
         * @param {GameHoodleProto.IUserGameInfoReq} message UserGameInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserGameInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserGameInfoReq message, length delimited. Does not implicitly {@link GameHoodleProto.UserGameInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserGameInfoReq
         * @static
         * @param {GameHoodleProto.IUserGameInfoReq} message UserGameInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserGameInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserGameInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserGameInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserGameInfoReq} UserGameInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserGameInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserGameInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserGameInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserGameInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserGameInfoReq} UserGameInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserGameInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserGameInfoReq message.
         * @function verify
         * @memberof GameHoodleProto.UserGameInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserGameInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a UserGameInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserGameInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserGameInfoReq} UserGameInfoReq
         */
        UserGameInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserGameInfoReq)
                return object;
            return new $root.GameHoodleProto.UserGameInfoReq();
        };

        /**
         * Creates a plain object from a UserGameInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserGameInfoReq
         * @static
         * @param {GameHoodleProto.UserGameInfoReq} message UserGameInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserGameInfoReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserGameInfoReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserGameInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserGameInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserGameInfoReq;
    })();

    GameHoodleProto.UserGameInfoRes = (function() {

        /**
         * Properties of a UserGameInfoRes.
         * @memberof GameHoodleProto
         * @interface IUserGameInfoRes
         * @property {number} status UserGameInfoRes status
         * @property {string|null} [userinfostring] UserGameInfoRes userinfostring
         */

        /**
         * Constructs a new UserGameInfoRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserGameInfoRes.
         * @implements IUserGameInfoRes
         * @constructor
         * @param {GameHoodleProto.IUserGameInfoRes=} [properties] Properties to set
         */
        function UserGameInfoRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserGameInfoRes status.
         * @member {number} status
         * @memberof GameHoodleProto.UserGameInfoRes
         * @instance
         */
        UserGameInfoRes.prototype.status = 0;

        /**
         * UserGameInfoRes userinfostring.
         * @member {string} userinfostring
         * @memberof GameHoodleProto.UserGameInfoRes
         * @instance
         */
        UserGameInfoRes.prototype.userinfostring = "";

        /**
         * Creates a new UserGameInfoRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserGameInfoRes
         * @static
         * @param {GameHoodleProto.IUserGameInfoRes=} [properties] Properties to set
         * @returns {GameHoodleProto.UserGameInfoRes} UserGameInfoRes instance
         */
        UserGameInfoRes.create = function create(properties) {
            return new UserGameInfoRes(properties);
        };

        /**
         * Encodes the specified UserGameInfoRes message. Does not implicitly {@link GameHoodleProto.UserGameInfoRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserGameInfoRes
         * @static
         * @param {GameHoodleProto.IUserGameInfoRes} message UserGameInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserGameInfoRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.userinfostring != null && message.hasOwnProperty("userinfostring"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userinfostring);
            return writer;
        };

        /**
         * Encodes the specified UserGameInfoRes message, length delimited. Does not implicitly {@link GameHoodleProto.UserGameInfoRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserGameInfoRes
         * @static
         * @param {GameHoodleProto.IUserGameInfoRes} message UserGameInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserGameInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserGameInfoRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserGameInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserGameInfoRes} UserGameInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserGameInfoRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserGameInfoRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    message.userinfostring = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserGameInfoRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserGameInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserGameInfoRes} UserGameInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserGameInfoRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserGameInfoRes message.
         * @function verify
         * @memberof GameHoodleProto.UserGameInfoRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserGameInfoRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.userinfostring != null && message.hasOwnProperty("userinfostring"))
                if (!$util.isString(message.userinfostring))
                    return "userinfostring: string expected";
            return null;
        };

        /**
         * Creates a UserGameInfoRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserGameInfoRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserGameInfoRes} UserGameInfoRes
         */
        UserGameInfoRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserGameInfoRes)
                return object;
            var message = new $root.GameHoodleProto.UserGameInfoRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.userinfostring != null)
                message.userinfostring = String(object.userinfostring);
            return message;
        };

        /**
         * Creates a plain object from a UserGameInfoRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserGameInfoRes
         * @static
         * @param {GameHoodleProto.UserGameInfoRes} message UserGameInfoRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserGameInfoRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.userinfostring = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.userinfostring != null && message.hasOwnProperty("userinfostring"))
                object.userinfostring = message.userinfostring;
            return object;
        };

        /**
         * Converts this UserGameInfoRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserGameInfoRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserGameInfoRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserGameInfoRes;
    })();

    GameHoodleProto.UserBallInfoReq = (function() {

        /**
         * Properties of a UserBallInfoReq.
         * @memberof GameHoodleProto
         * @interface IUserBallInfoReq
         */

        /**
         * Constructs a new UserBallInfoReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserBallInfoReq.
         * @implements IUserBallInfoReq
         * @constructor
         * @param {GameHoodleProto.IUserBallInfoReq=} [properties] Properties to set
         */
        function UserBallInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UserBallInfoReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserBallInfoReq
         * @static
         * @param {GameHoodleProto.IUserBallInfoReq=} [properties] Properties to set
         * @returns {GameHoodleProto.UserBallInfoReq} UserBallInfoReq instance
         */
        UserBallInfoReq.create = function create(properties) {
            return new UserBallInfoReq(properties);
        };

        /**
         * Encodes the specified UserBallInfoReq message. Does not implicitly {@link GameHoodleProto.UserBallInfoReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserBallInfoReq
         * @static
         * @param {GameHoodleProto.IUserBallInfoReq} message UserBallInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBallInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserBallInfoReq message, length delimited. Does not implicitly {@link GameHoodleProto.UserBallInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserBallInfoReq
         * @static
         * @param {GameHoodleProto.IUserBallInfoReq} message UserBallInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBallInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserBallInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserBallInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserBallInfoReq} UserBallInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBallInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserBallInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserBallInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserBallInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserBallInfoReq} UserBallInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBallInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserBallInfoReq message.
         * @function verify
         * @memberof GameHoodleProto.UserBallInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserBallInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a UserBallInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserBallInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserBallInfoReq} UserBallInfoReq
         */
        UserBallInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserBallInfoReq)
                return object;
            return new $root.GameHoodleProto.UserBallInfoReq();
        };

        /**
         * Creates a plain object from a UserBallInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserBallInfoReq
         * @static
         * @param {GameHoodleProto.UserBallInfoReq} message UserBallInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserBallInfoReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserBallInfoReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserBallInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserBallInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserBallInfoReq;
    })();

    GameHoodleProto.UserBallInfoRes = (function() {

        /**
         * Properties of a UserBallInfoRes.
         * @memberof GameHoodleProto
         * @interface IUserBallInfoRes
         * @property {number} status UserBallInfoRes status
         * @property {string|null} [userballinfostring] UserBallInfoRes userballinfostring
         */

        /**
         * Constructs a new UserBallInfoRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserBallInfoRes.
         * @implements IUserBallInfoRes
         * @constructor
         * @param {GameHoodleProto.IUserBallInfoRes=} [properties] Properties to set
         */
        function UserBallInfoRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserBallInfoRes status.
         * @member {number} status
         * @memberof GameHoodleProto.UserBallInfoRes
         * @instance
         */
        UserBallInfoRes.prototype.status = 0;

        /**
         * UserBallInfoRes userballinfostring.
         * @member {string} userballinfostring
         * @memberof GameHoodleProto.UserBallInfoRes
         * @instance
         */
        UserBallInfoRes.prototype.userballinfostring = "";

        /**
         * Creates a new UserBallInfoRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserBallInfoRes
         * @static
         * @param {GameHoodleProto.IUserBallInfoRes=} [properties] Properties to set
         * @returns {GameHoodleProto.UserBallInfoRes} UserBallInfoRes instance
         */
        UserBallInfoRes.create = function create(properties) {
            return new UserBallInfoRes(properties);
        };

        /**
         * Encodes the specified UserBallInfoRes message. Does not implicitly {@link GameHoodleProto.UserBallInfoRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserBallInfoRes
         * @static
         * @param {GameHoodleProto.IUserBallInfoRes} message UserBallInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBallInfoRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.userballinfostring != null && message.hasOwnProperty("userballinfostring"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userballinfostring);
            return writer;
        };

        /**
         * Encodes the specified UserBallInfoRes message, length delimited. Does not implicitly {@link GameHoodleProto.UserBallInfoRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserBallInfoRes
         * @static
         * @param {GameHoodleProto.IUserBallInfoRes} message UserBallInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBallInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserBallInfoRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserBallInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserBallInfoRes} UserBallInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBallInfoRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserBallInfoRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    message.userballinfostring = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserBallInfoRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserBallInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserBallInfoRes} UserBallInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBallInfoRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserBallInfoRes message.
         * @function verify
         * @memberof GameHoodleProto.UserBallInfoRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserBallInfoRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.userballinfostring != null && message.hasOwnProperty("userballinfostring"))
                if (!$util.isString(message.userballinfostring))
                    return "userballinfostring: string expected";
            return null;
        };

        /**
         * Creates a UserBallInfoRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserBallInfoRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserBallInfoRes} UserBallInfoRes
         */
        UserBallInfoRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserBallInfoRes)
                return object;
            var message = new $root.GameHoodleProto.UserBallInfoRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.userballinfostring != null)
                message.userballinfostring = String(object.userballinfostring);
            return message;
        };

        /**
         * Creates a plain object from a UserBallInfoRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserBallInfoRes
         * @static
         * @param {GameHoodleProto.UserBallInfoRes} message UserBallInfoRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserBallInfoRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.userballinfostring = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.userballinfostring != null && message.hasOwnProperty("userballinfostring"))
                object.userballinfostring = message.userballinfostring;
            return object;
        };

        /**
         * Converts this UserBallInfoRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserBallInfoRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserBallInfoRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserBallInfoRes;
    })();

    GameHoodleProto.UpdateUserBallReq = (function() {

        /**
         * Properties of an UpdateUserBallReq.
         * @memberof GameHoodleProto
         * @interface IUpdateUserBallReq
         * @property {number} updatetype UpdateUserBallReq updatetype
         * @property {number} level UpdateUserBallReq level
         * @property {number} count UpdateUserBallReq count
         */

        /**
         * Constructs a new UpdateUserBallReq.
         * @memberof GameHoodleProto
         * @classdesc Represents an UpdateUserBallReq.
         * @implements IUpdateUserBallReq
         * @constructor
         * @param {GameHoodleProto.IUpdateUserBallReq=} [properties] Properties to set
         */
        function UpdateUserBallReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateUserBallReq updatetype.
         * @member {number} updatetype
         * @memberof GameHoodleProto.UpdateUserBallReq
         * @instance
         */
        UpdateUserBallReq.prototype.updatetype = 0;

        /**
         * UpdateUserBallReq level.
         * @member {number} level
         * @memberof GameHoodleProto.UpdateUserBallReq
         * @instance
         */
        UpdateUserBallReq.prototype.level = 0;

        /**
         * UpdateUserBallReq count.
         * @member {number} count
         * @memberof GameHoodleProto.UpdateUserBallReq
         * @instance
         */
        UpdateUserBallReq.prototype.count = 0;

        /**
         * Creates a new UpdateUserBallReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UpdateUserBallReq
         * @static
         * @param {GameHoodleProto.IUpdateUserBallReq=} [properties] Properties to set
         * @returns {GameHoodleProto.UpdateUserBallReq} UpdateUserBallReq instance
         */
        UpdateUserBallReq.create = function create(properties) {
            return new UpdateUserBallReq(properties);
        };

        /**
         * Encodes the specified UpdateUserBallReq message. Does not implicitly {@link GameHoodleProto.UpdateUserBallReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UpdateUserBallReq
         * @static
         * @param {GameHoodleProto.IUpdateUserBallReq} message UpdateUserBallReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUserBallReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.updatetype);
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.level);
            writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.count);
            return writer;
        };

        /**
         * Encodes the specified UpdateUserBallReq message, length delimited. Does not implicitly {@link GameHoodleProto.UpdateUserBallReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UpdateUserBallReq
         * @static
         * @param {GameHoodleProto.IUpdateUserBallReq} message UpdateUserBallReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUserBallReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateUserBallReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UpdateUserBallReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UpdateUserBallReq} UpdateUserBallReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUserBallReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UpdateUserBallReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.updatetype = reader.sint32();
                    break;
                case 2:
                    message.level = reader.sint32();
                    break;
                case 3:
                    message.count = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("updatetype"))
                throw $util.ProtocolError("missing required 'updatetype'", { instance: message });
            if (!message.hasOwnProperty("level"))
                throw $util.ProtocolError("missing required 'level'", { instance: message });
            if (!message.hasOwnProperty("count"))
                throw $util.ProtocolError("missing required 'count'", { instance: message });
            return message;
        };

        /**
         * Decodes an UpdateUserBallReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UpdateUserBallReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UpdateUserBallReq} UpdateUserBallReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUserBallReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateUserBallReq message.
         * @function verify
         * @memberof GameHoodleProto.UpdateUserBallReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateUserBallReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.updatetype))
                return "updatetype: integer expected";
            if (!$util.isInteger(message.level))
                return "level: integer expected";
            if (!$util.isInteger(message.count))
                return "count: integer expected";
            return null;
        };

        /**
         * Creates an UpdateUserBallReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UpdateUserBallReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UpdateUserBallReq} UpdateUserBallReq
         */
        UpdateUserBallReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UpdateUserBallReq)
                return object;
            var message = new $root.GameHoodleProto.UpdateUserBallReq();
            if (object.updatetype != null)
                message.updatetype = object.updatetype | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.count != null)
                message.count = object.count | 0;
            return message;
        };

        /**
         * Creates a plain object from an UpdateUserBallReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UpdateUserBallReq
         * @static
         * @param {GameHoodleProto.UpdateUserBallReq} message UpdateUserBallReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateUserBallReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.updatetype = 0;
                object.level = 0;
                object.count = 0;
            }
            if (message.updatetype != null && message.hasOwnProperty("updatetype"))
                object.updatetype = message.updatetype;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this UpdateUserBallReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UpdateUserBallReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateUserBallReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateUserBallReq;
    })();

    GameHoodleProto.UpdateUserBallRes = (function() {

        /**
         * Properties of an UpdateUserBallRes.
         * @memberof GameHoodleProto
         * @interface IUpdateUserBallRes
         * @property {number} status UpdateUserBallRes status
         * @property {string|null} [userballinfostring] UpdateUserBallRes userballinfostring
         */

        /**
         * Constructs a new UpdateUserBallRes.
         * @memberof GameHoodleProto
         * @classdesc Represents an UpdateUserBallRes.
         * @implements IUpdateUserBallRes
         * @constructor
         * @param {GameHoodleProto.IUpdateUserBallRes=} [properties] Properties to set
         */
        function UpdateUserBallRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateUserBallRes status.
         * @member {number} status
         * @memberof GameHoodleProto.UpdateUserBallRes
         * @instance
         */
        UpdateUserBallRes.prototype.status = 0;

        /**
         * UpdateUserBallRes userballinfostring.
         * @member {string} userballinfostring
         * @memberof GameHoodleProto.UpdateUserBallRes
         * @instance
         */
        UpdateUserBallRes.prototype.userballinfostring = "";

        /**
         * Creates a new UpdateUserBallRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UpdateUserBallRes
         * @static
         * @param {GameHoodleProto.IUpdateUserBallRes=} [properties] Properties to set
         * @returns {GameHoodleProto.UpdateUserBallRes} UpdateUserBallRes instance
         */
        UpdateUserBallRes.create = function create(properties) {
            return new UpdateUserBallRes(properties);
        };

        /**
         * Encodes the specified UpdateUserBallRes message. Does not implicitly {@link GameHoodleProto.UpdateUserBallRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UpdateUserBallRes
         * @static
         * @param {GameHoodleProto.IUpdateUserBallRes} message UpdateUserBallRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUserBallRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.userballinfostring != null && message.hasOwnProperty("userballinfostring"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userballinfostring);
            return writer;
        };

        /**
         * Encodes the specified UpdateUserBallRes message, length delimited. Does not implicitly {@link GameHoodleProto.UpdateUserBallRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UpdateUserBallRes
         * @static
         * @param {GameHoodleProto.IUpdateUserBallRes} message UpdateUserBallRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUserBallRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateUserBallRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UpdateUserBallRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UpdateUserBallRes} UpdateUserBallRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUserBallRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UpdateUserBallRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    message.userballinfostring = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes an UpdateUserBallRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UpdateUserBallRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UpdateUserBallRes} UpdateUserBallRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUserBallRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateUserBallRes message.
         * @function verify
         * @memberof GameHoodleProto.UpdateUserBallRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateUserBallRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.userballinfostring != null && message.hasOwnProperty("userballinfostring"))
                if (!$util.isString(message.userballinfostring))
                    return "userballinfostring: string expected";
            return null;
        };

        /**
         * Creates an UpdateUserBallRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UpdateUserBallRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UpdateUserBallRes} UpdateUserBallRes
         */
        UpdateUserBallRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UpdateUserBallRes)
                return object;
            var message = new $root.GameHoodleProto.UpdateUserBallRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.userballinfostring != null)
                message.userballinfostring = String(object.userballinfostring);
            return message;
        };

        /**
         * Creates a plain object from an UpdateUserBallRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UpdateUserBallRes
         * @static
         * @param {GameHoodleProto.UpdateUserBallRes} message UpdateUserBallRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateUserBallRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.userballinfostring = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.userballinfostring != null && message.hasOwnProperty("userballinfostring"))
                object.userballinfostring = message.userballinfostring;
            return object;
        };

        /**
         * Converts this UpdateUserBallRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UpdateUserBallRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateUserBallRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateUserBallRes;
    })();

    GameHoodleProto.OneStoreProp = (function() {

        /**
         * Properties of an OneStoreProp.
         * @memberof GameHoodleProto
         * @interface IOneStoreProp
         * @property {number} propsvrindex OneStoreProp propsvrindex
         * @property {number} propid OneStoreProp propid
         * @property {number} propcount OneStoreProp propcount
         * @property {number} propprice OneStoreProp propprice
         * @property {string} propinfo OneStoreProp propinfo
         */

        /**
         * Constructs a new OneStoreProp.
         * @memberof GameHoodleProto
         * @classdesc Represents an OneStoreProp.
         * @implements IOneStoreProp
         * @constructor
         * @param {GameHoodleProto.IOneStoreProp=} [properties] Properties to set
         */
        function OneStoreProp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OneStoreProp propsvrindex.
         * @member {number} propsvrindex
         * @memberof GameHoodleProto.OneStoreProp
         * @instance
         */
        OneStoreProp.prototype.propsvrindex = 0;

        /**
         * OneStoreProp propid.
         * @member {number} propid
         * @memberof GameHoodleProto.OneStoreProp
         * @instance
         */
        OneStoreProp.prototype.propid = 0;

        /**
         * OneStoreProp propcount.
         * @member {number} propcount
         * @memberof GameHoodleProto.OneStoreProp
         * @instance
         */
        OneStoreProp.prototype.propcount = 0;

        /**
         * OneStoreProp propprice.
         * @member {number} propprice
         * @memberof GameHoodleProto.OneStoreProp
         * @instance
         */
        OneStoreProp.prototype.propprice = 0;

        /**
         * OneStoreProp propinfo.
         * @member {string} propinfo
         * @memberof GameHoodleProto.OneStoreProp
         * @instance
         */
        OneStoreProp.prototype.propinfo = "";

        /**
         * Creates a new OneStoreProp instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.OneStoreProp
         * @static
         * @param {GameHoodleProto.IOneStoreProp=} [properties] Properties to set
         * @returns {GameHoodleProto.OneStoreProp} OneStoreProp instance
         */
        OneStoreProp.create = function create(properties) {
            return new OneStoreProp(properties);
        };

        /**
         * Encodes the specified OneStoreProp message. Does not implicitly {@link GameHoodleProto.OneStoreProp.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.OneStoreProp
         * @static
         * @param {GameHoodleProto.IOneStoreProp} message OneStoreProp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OneStoreProp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.propsvrindex);
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.propid);
            writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.propcount);
            writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.propprice);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.propinfo);
            return writer;
        };

        /**
         * Encodes the specified OneStoreProp message, length delimited. Does not implicitly {@link GameHoodleProto.OneStoreProp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.OneStoreProp
         * @static
         * @param {GameHoodleProto.IOneStoreProp} message OneStoreProp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OneStoreProp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OneStoreProp message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.OneStoreProp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.OneStoreProp} OneStoreProp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OneStoreProp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.OneStoreProp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.propsvrindex = reader.sint32();
                    break;
                case 2:
                    message.propid = reader.sint32();
                    break;
                case 3:
                    message.propcount = reader.sint32();
                    break;
                case 4:
                    message.propprice = reader.sint32();
                    break;
                case 5:
                    message.propinfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("propsvrindex"))
                throw $util.ProtocolError("missing required 'propsvrindex'", { instance: message });
            if (!message.hasOwnProperty("propid"))
                throw $util.ProtocolError("missing required 'propid'", { instance: message });
            if (!message.hasOwnProperty("propcount"))
                throw $util.ProtocolError("missing required 'propcount'", { instance: message });
            if (!message.hasOwnProperty("propprice"))
                throw $util.ProtocolError("missing required 'propprice'", { instance: message });
            if (!message.hasOwnProperty("propinfo"))
                throw $util.ProtocolError("missing required 'propinfo'", { instance: message });
            return message;
        };

        /**
         * Decodes an OneStoreProp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.OneStoreProp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.OneStoreProp} OneStoreProp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OneStoreProp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OneStoreProp message.
         * @function verify
         * @memberof GameHoodleProto.OneStoreProp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OneStoreProp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.propsvrindex))
                return "propsvrindex: integer expected";
            if (!$util.isInteger(message.propid))
                return "propid: integer expected";
            if (!$util.isInteger(message.propcount))
                return "propcount: integer expected";
            if (!$util.isInteger(message.propprice))
                return "propprice: integer expected";
            if (!$util.isString(message.propinfo))
                return "propinfo: string expected";
            return null;
        };

        /**
         * Creates an OneStoreProp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.OneStoreProp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.OneStoreProp} OneStoreProp
         */
        OneStoreProp.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.OneStoreProp)
                return object;
            var message = new $root.GameHoodleProto.OneStoreProp();
            if (object.propsvrindex != null)
                message.propsvrindex = object.propsvrindex | 0;
            if (object.propid != null)
                message.propid = object.propid | 0;
            if (object.propcount != null)
                message.propcount = object.propcount | 0;
            if (object.propprice != null)
                message.propprice = object.propprice | 0;
            if (object.propinfo != null)
                message.propinfo = String(object.propinfo);
            return message;
        };

        /**
         * Creates a plain object from an OneStoreProp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.OneStoreProp
         * @static
         * @param {GameHoodleProto.OneStoreProp} message OneStoreProp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OneStoreProp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.propsvrindex = 0;
                object.propid = 0;
                object.propcount = 0;
                object.propprice = 0;
                object.propinfo = "";
            }
            if (message.propsvrindex != null && message.hasOwnProperty("propsvrindex"))
                object.propsvrindex = message.propsvrindex;
            if (message.propid != null && message.hasOwnProperty("propid"))
                object.propid = message.propid;
            if (message.propcount != null && message.hasOwnProperty("propcount"))
                object.propcount = message.propcount;
            if (message.propprice != null && message.hasOwnProperty("propprice"))
                object.propprice = message.propprice;
            if (message.propinfo != null && message.hasOwnProperty("propinfo"))
                object.propinfo = message.propinfo;
            return object;
        };

        /**
         * Converts this OneStoreProp to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.OneStoreProp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OneStoreProp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OneStoreProp;
    })();

    GameHoodleProto.StoreListReq = (function() {

        /**
         * Properties of a StoreListReq.
         * @memberof GameHoodleProto
         * @interface IStoreListReq
         */

        /**
         * Constructs a new StoreListReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a StoreListReq.
         * @implements IStoreListReq
         * @constructor
         * @param {GameHoodleProto.IStoreListReq=} [properties] Properties to set
         */
        function StoreListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new StoreListReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.StoreListReq
         * @static
         * @param {GameHoodleProto.IStoreListReq=} [properties] Properties to set
         * @returns {GameHoodleProto.StoreListReq} StoreListReq instance
         */
        StoreListReq.create = function create(properties) {
            return new StoreListReq(properties);
        };

        /**
         * Encodes the specified StoreListReq message. Does not implicitly {@link GameHoodleProto.StoreListReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.StoreListReq
         * @static
         * @param {GameHoodleProto.IStoreListReq} message StoreListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StoreListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified StoreListReq message, length delimited. Does not implicitly {@link GameHoodleProto.StoreListReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.StoreListReq
         * @static
         * @param {GameHoodleProto.IStoreListReq} message StoreListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StoreListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StoreListReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.StoreListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.StoreListReq} StoreListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StoreListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.StoreListReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StoreListReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.StoreListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.StoreListReq} StoreListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StoreListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StoreListReq message.
         * @function verify
         * @memberof GameHoodleProto.StoreListReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StoreListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a StoreListReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.StoreListReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.StoreListReq} StoreListReq
         */
        StoreListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.StoreListReq)
                return object;
            return new $root.GameHoodleProto.StoreListReq();
        };

        /**
         * Creates a plain object from a StoreListReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.StoreListReq
         * @static
         * @param {GameHoodleProto.StoreListReq} message StoreListReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StoreListReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this StoreListReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.StoreListReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StoreListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StoreListReq;
    })();

    GameHoodleProto.StoreListRes = (function() {

        /**
         * Properties of a StoreListRes.
         * @memberof GameHoodleProto
         * @interface IStoreListRes
         * @property {number} status StoreListRes status
         * @property {Array.<GameHoodleProto.IOneStoreProp>|null} [storeprops] StoreListRes storeprops
         */

        /**
         * Constructs a new StoreListRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a StoreListRes.
         * @implements IStoreListRes
         * @constructor
         * @param {GameHoodleProto.IStoreListRes=} [properties] Properties to set
         */
        function StoreListRes(properties) {
            this.storeprops = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StoreListRes status.
         * @member {number} status
         * @memberof GameHoodleProto.StoreListRes
         * @instance
         */
        StoreListRes.prototype.status = 0;

        /**
         * StoreListRes storeprops.
         * @member {Array.<GameHoodleProto.IOneStoreProp>} storeprops
         * @memberof GameHoodleProto.StoreListRes
         * @instance
         */
        StoreListRes.prototype.storeprops = $util.emptyArray;

        /**
         * Creates a new StoreListRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.StoreListRes
         * @static
         * @param {GameHoodleProto.IStoreListRes=} [properties] Properties to set
         * @returns {GameHoodleProto.StoreListRes} StoreListRes instance
         */
        StoreListRes.create = function create(properties) {
            return new StoreListRes(properties);
        };

        /**
         * Encodes the specified StoreListRes message. Does not implicitly {@link GameHoodleProto.StoreListRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.StoreListRes
         * @static
         * @param {GameHoodleProto.IStoreListRes} message StoreListRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StoreListRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.storeprops != null && message.storeprops.length)
                for (var i = 0; i < message.storeprops.length; ++i)
                    $root.GameHoodleProto.OneStoreProp.encode(message.storeprops[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StoreListRes message, length delimited. Does not implicitly {@link GameHoodleProto.StoreListRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.StoreListRes
         * @static
         * @param {GameHoodleProto.IStoreListRes} message StoreListRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StoreListRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StoreListRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.StoreListRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.StoreListRes} StoreListRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StoreListRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.StoreListRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    if (!(message.storeprops && message.storeprops.length))
                        message.storeprops = [];
                    message.storeprops.push($root.GameHoodleProto.OneStoreProp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a StoreListRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.StoreListRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.StoreListRes} StoreListRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StoreListRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StoreListRes message.
         * @function verify
         * @memberof GameHoodleProto.StoreListRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StoreListRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.storeprops != null && message.hasOwnProperty("storeprops")) {
                if (!Array.isArray(message.storeprops))
                    return "storeprops: array expected";
                for (var i = 0; i < message.storeprops.length; ++i) {
                    var error = $root.GameHoodleProto.OneStoreProp.verify(message.storeprops[i]);
                    if (error)
                        return "storeprops." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StoreListRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.StoreListRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.StoreListRes} StoreListRes
         */
        StoreListRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.StoreListRes)
                return object;
            var message = new $root.GameHoodleProto.StoreListRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.storeprops) {
                if (!Array.isArray(object.storeprops))
                    throw TypeError(".GameHoodleProto.StoreListRes.storeprops: array expected");
                message.storeprops = [];
                for (var i = 0; i < object.storeprops.length; ++i) {
                    if (typeof object.storeprops[i] !== "object")
                        throw TypeError(".GameHoodleProto.StoreListRes.storeprops: object expected");
                    message.storeprops[i] = $root.GameHoodleProto.OneStoreProp.fromObject(object.storeprops[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a StoreListRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.StoreListRes
         * @static
         * @param {GameHoodleProto.StoreListRes} message StoreListRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StoreListRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.storeprops = [];
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.storeprops && message.storeprops.length) {
                object.storeprops = [];
                for (var j = 0; j < message.storeprops.length; ++j)
                    object.storeprops[j] = $root.GameHoodleProto.OneStoreProp.toObject(message.storeprops[j], options);
            }
            return object;
        };

        /**
         * Converts this StoreListRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.StoreListRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StoreListRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StoreListRes;
    })();

    GameHoodleProto.BuyThingsReq = (function() {

        /**
         * Properties of a BuyThingsReq.
         * @memberof GameHoodleProto
         * @interface IBuyThingsReq
         * @property {number} propsvrindex BuyThingsReq propsvrindex
         * @property {number} propid BuyThingsReq propid
         * @property {number} propcount BuyThingsReq propcount
         * @property {number} propprice BuyThingsReq propprice
         * @property {string} propinfo BuyThingsReq propinfo
         */

        /**
         * Constructs a new BuyThingsReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a BuyThingsReq.
         * @implements IBuyThingsReq
         * @constructor
         * @param {GameHoodleProto.IBuyThingsReq=} [properties] Properties to set
         */
        function BuyThingsReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuyThingsReq propsvrindex.
         * @member {number} propsvrindex
         * @memberof GameHoodleProto.BuyThingsReq
         * @instance
         */
        BuyThingsReq.prototype.propsvrindex = 0;

        /**
         * BuyThingsReq propid.
         * @member {number} propid
         * @memberof GameHoodleProto.BuyThingsReq
         * @instance
         */
        BuyThingsReq.prototype.propid = 0;

        /**
         * BuyThingsReq propcount.
         * @member {number} propcount
         * @memberof GameHoodleProto.BuyThingsReq
         * @instance
         */
        BuyThingsReq.prototype.propcount = 0;

        /**
         * BuyThingsReq propprice.
         * @member {number} propprice
         * @memberof GameHoodleProto.BuyThingsReq
         * @instance
         */
        BuyThingsReq.prototype.propprice = 0;

        /**
         * BuyThingsReq propinfo.
         * @member {string} propinfo
         * @memberof GameHoodleProto.BuyThingsReq
         * @instance
         */
        BuyThingsReq.prototype.propinfo = "";

        /**
         * Creates a new BuyThingsReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.BuyThingsReq
         * @static
         * @param {GameHoodleProto.IBuyThingsReq=} [properties] Properties to set
         * @returns {GameHoodleProto.BuyThingsReq} BuyThingsReq instance
         */
        BuyThingsReq.create = function create(properties) {
            return new BuyThingsReq(properties);
        };

        /**
         * Encodes the specified BuyThingsReq message. Does not implicitly {@link GameHoodleProto.BuyThingsReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.BuyThingsReq
         * @static
         * @param {GameHoodleProto.IBuyThingsReq} message BuyThingsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyThingsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.propsvrindex);
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.propid);
            writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.propcount);
            writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.propprice);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.propinfo);
            return writer;
        };

        /**
         * Encodes the specified BuyThingsReq message, length delimited. Does not implicitly {@link GameHoodleProto.BuyThingsReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.BuyThingsReq
         * @static
         * @param {GameHoodleProto.IBuyThingsReq} message BuyThingsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyThingsReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BuyThingsReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.BuyThingsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.BuyThingsReq} BuyThingsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyThingsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.BuyThingsReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.propsvrindex = reader.sint32();
                    break;
                case 2:
                    message.propid = reader.sint32();
                    break;
                case 3:
                    message.propcount = reader.sint32();
                    break;
                case 4:
                    message.propprice = reader.sint32();
                    break;
                case 5:
                    message.propinfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("propsvrindex"))
                throw $util.ProtocolError("missing required 'propsvrindex'", { instance: message });
            if (!message.hasOwnProperty("propid"))
                throw $util.ProtocolError("missing required 'propid'", { instance: message });
            if (!message.hasOwnProperty("propcount"))
                throw $util.ProtocolError("missing required 'propcount'", { instance: message });
            if (!message.hasOwnProperty("propprice"))
                throw $util.ProtocolError("missing required 'propprice'", { instance: message });
            if (!message.hasOwnProperty("propinfo"))
                throw $util.ProtocolError("missing required 'propinfo'", { instance: message });
            return message;
        };

        /**
         * Decodes a BuyThingsReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.BuyThingsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.BuyThingsReq} BuyThingsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyThingsReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BuyThingsReq message.
         * @function verify
         * @memberof GameHoodleProto.BuyThingsReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BuyThingsReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.propsvrindex))
                return "propsvrindex: integer expected";
            if (!$util.isInteger(message.propid))
                return "propid: integer expected";
            if (!$util.isInteger(message.propcount))
                return "propcount: integer expected";
            if (!$util.isInteger(message.propprice))
                return "propprice: integer expected";
            if (!$util.isString(message.propinfo))
                return "propinfo: string expected";
            return null;
        };

        /**
         * Creates a BuyThingsReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.BuyThingsReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.BuyThingsReq} BuyThingsReq
         */
        BuyThingsReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.BuyThingsReq)
                return object;
            var message = new $root.GameHoodleProto.BuyThingsReq();
            if (object.propsvrindex != null)
                message.propsvrindex = object.propsvrindex | 0;
            if (object.propid != null)
                message.propid = object.propid | 0;
            if (object.propcount != null)
                message.propcount = object.propcount | 0;
            if (object.propprice != null)
                message.propprice = object.propprice | 0;
            if (object.propinfo != null)
                message.propinfo = String(object.propinfo);
            return message;
        };

        /**
         * Creates a plain object from a BuyThingsReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.BuyThingsReq
         * @static
         * @param {GameHoodleProto.BuyThingsReq} message BuyThingsReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuyThingsReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.propsvrindex = 0;
                object.propid = 0;
                object.propcount = 0;
                object.propprice = 0;
                object.propinfo = "";
            }
            if (message.propsvrindex != null && message.hasOwnProperty("propsvrindex"))
                object.propsvrindex = message.propsvrindex;
            if (message.propid != null && message.hasOwnProperty("propid"))
                object.propid = message.propid;
            if (message.propcount != null && message.hasOwnProperty("propcount"))
                object.propcount = message.propcount;
            if (message.propprice != null && message.hasOwnProperty("propprice"))
                object.propprice = message.propprice;
            if (message.propinfo != null && message.hasOwnProperty("propinfo"))
                object.propinfo = message.propinfo;
            return object;
        };

        /**
         * Converts this BuyThingsReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.BuyThingsReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuyThingsReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuyThingsReq;
    })();

    GameHoodleProto.BuyThingsRes = (function() {

        /**
         * Properties of a BuyThingsRes.
         * @memberof GameHoodleProto
         * @interface IBuyThingsRes
         * @property {number} status BuyThingsRes status
         * @property {number|null} [propsvrindex] BuyThingsRes propsvrindex
         * @property {number|null} [propid] BuyThingsRes propid
         * @property {number|null} [propcount] BuyThingsRes propcount
         * @property {number|null} [propprice] BuyThingsRes propprice
         * @property {string|null} [propinfo] BuyThingsRes propinfo
         */

        /**
         * Constructs a new BuyThingsRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a BuyThingsRes.
         * @implements IBuyThingsRes
         * @constructor
         * @param {GameHoodleProto.IBuyThingsRes=} [properties] Properties to set
         */
        function BuyThingsRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuyThingsRes status.
         * @member {number} status
         * @memberof GameHoodleProto.BuyThingsRes
         * @instance
         */
        BuyThingsRes.prototype.status = 0;

        /**
         * BuyThingsRes propsvrindex.
         * @member {number} propsvrindex
         * @memberof GameHoodleProto.BuyThingsRes
         * @instance
         */
        BuyThingsRes.prototype.propsvrindex = 0;

        /**
         * BuyThingsRes propid.
         * @member {number} propid
         * @memberof GameHoodleProto.BuyThingsRes
         * @instance
         */
        BuyThingsRes.prototype.propid = 0;

        /**
         * BuyThingsRes propcount.
         * @member {number} propcount
         * @memberof GameHoodleProto.BuyThingsRes
         * @instance
         */
        BuyThingsRes.prototype.propcount = 0;

        /**
         * BuyThingsRes propprice.
         * @member {number} propprice
         * @memberof GameHoodleProto.BuyThingsRes
         * @instance
         */
        BuyThingsRes.prototype.propprice = 0;

        /**
         * BuyThingsRes propinfo.
         * @member {string} propinfo
         * @memberof GameHoodleProto.BuyThingsRes
         * @instance
         */
        BuyThingsRes.prototype.propinfo = "";

        /**
         * Creates a new BuyThingsRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.BuyThingsRes
         * @static
         * @param {GameHoodleProto.IBuyThingsRes=} [properties] Properties to set
         * @returns {GameHoodleProto.BuyThingsRes} BuyThingsRes instance
         */
        BuyThingsRes.create = function create(properties) {
            return new BuyThingsRes(properties);
        };

        /**
         * Encodes the specified BuyThingsRes message. Does not implicitly {@link GameHoodleProto.BuyThingsRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.BuyThingsRes
         * @static
         * @param {GameHoodleProto.IBuyThingsRes} message BuyThingsRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyThingsRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.propsvrindex != null && message.hasOwnProperty("propsvrindex"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.propsvrindex);
            if (message.propid != null && message.hasOwnProperty("propid"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.propid);
            if (message.propcount != null && message.hasOwnProperty("propcount"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.propcount);
            if (message.propprice != null && message.hasOwnProperty("propprice"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.propprice);
            if (message.propinfo != null && message.hasOwnProperty("propinfo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.propinfo);
            return writer;
        };

        /**
         * Encodes the specified BuyThingsRes message, length delimited. Does not implicitly {@link GameHoodleProto.BuyThingsRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.BuyThingsRes
         * @static
         * @param {GameHoodleProto.IBuyThingsRes} message BuyThingsRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyThingsRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BuyThingsRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.BuyThingsRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.BuyThingsRes} BuyThingsRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyThingsRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.BuyThingsRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    message.propsvrindex = reader.sint32();
                    break;
                case 3:
                    message.propid = reader.sint32();
                    break;
                case 4:
                    message.propcount = reader.sint32();
                    break;
                case 5:
                    message.propprice = reader.sint32();
                    break;
                case 6:
                    message.propinfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a BuyThingsRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.BuyThingsRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.BuyThingsRes} BuyThingsRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyThingsRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BuyThingsRes message.
         * @function verify
         * @memberof GameHoodleProto.BuyThingsRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BuyThingsRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.propsvrindex != null && message.hasOwnProperty("propsvrindex"))
                if (!$util.isInteger(message.propsvrindex))
                    return "propsvrindex: integer expected";
            if (message.propid != null && message.hasOwnProperty("propid"))
                if (!$util.isInteger(message.propid))
                    return "propid: integer expected";
            if (message.propcount != null && message.hasOwnProperty("propcount"))
                if (!$util.isInteger(message.propcount))
                    return "propcount: integer expected";
            if (message.propprice != null && message.hasOwnProperty("propprice"))
                if (!$util.isInteger(message.propprice))
                    return "propprice: integer expected";
            if (message.propinfo != null && message.hasOwnProperty("propinfo"))
                if (!$util.isString(message.propinfo))
                    return "propinfo: string expected";
            return null;
        };

        /**
         * Creates a BuyThingsRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.BuyThingsRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.BuyThingsRes} BuyThingsRes
         */
        BuyThingsRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.BuyThingsRes)
                return object;
            var message = new $root.GameHoodleProto.BuyThingsRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.propsvrindex != null)
                message.propsvrindex = object.propsvrindex | 0;
            if (object.propid != null)
                message.propid = object.propid | 0;
            if (object.propcount != null)
                message.propcount = object.propcount | 0;
            if (object.propprice != null)
                message.propprice = object.propprice | 0;
            if (object.propinfo != null)
                message.propinfo = String(object.propinfo);
            return message;
        };

        /**
         * Creates a plain object from a BuyThingsRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.BuyThingsRes
         * @static
         * @param {GameHoodleProto.BuyThingsRes} message BuyThingsRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuyThingsRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.propsvrindex = 0;
                object.propid = 0;
                object.propcount = 0;
                object.propprice = 0;
                object.propinfo = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.propsvrindex != null && message.hasOwnProperty("propsvrindex"))
                object.propsvrindex = message.propsvrindex;
            if (message.propid != null && message.hasOwnProperty("propid"))
                object.propid = message.propid;
            if (message.propcount != null && message.hasOwnProperty("propcount"))
                object.propcount = message.propcount;
            if (message.propprice != null && message.hasOwnProperty("propprice"))
                object.propprice = message.propprice;
            if (message.propinfo != null && message.hasOwnProperty("propinfo"))
                object.propinfo = message.propinfo;
            return object;
        };

        /**
         * Converts this BuyThingsRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.BuyThingsRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuyThingsRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuyThingsRes;
    })();

    GameHoodleProto.UseHoodleBallReq = (function() {

        /**
         * Properties of a UseHoodleBallReq.
         * @memberof GameHoodleProto
         * @interface IUseHoodleBallReq
         * @property {number} balllevel UseHoodleBallReq balllevel
         */

        /**
         * Constructs a new UseHoodleBallReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a UseHoodleBallReq.
         * @implements IUseHoodleBallReq
         * @constructor
         * @param {GameHoodleProto.IUseHoodleBallReq=} [properties] Properties to set
         */
        function UseHoodleBallReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UseHoodleBallReq balllevel.
         * @member {number} balllevel
         * @memberof GameHoodleProto.UseHoodleBallReq
         * @instance
         */
        UseHoodleBallReq.prototype.balllevel = 0;

        /**
         * Creates a new UseHoodleBallReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UseHoodleBallReq
         * @static
         * @param {GameHoodleProto.IUseHoodleBallReq=} [properties] Properties to set
         * @returns {GameHoodleProto.UseHoodleBallReq} UseHoodleBallReq instance
         */
        UseHoodleBallReq.create = function create(properties) {
            return new UseHoodleBallReq(properties);
        };

        /**
         * Encodes the specified UseHoodleBallReq message. Does not implicitly {@link GameHoodleProto.UseHoodleBallReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UseHoodleBallReq
         * @static
         * @param {GameHoodleProto.IUseHoodleBallReq} message UseHoodleBallReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseHoodleBallReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.balllevel);
            return writer;
        };

        /**
         * Encodes the specified UseHoodleBallReq message, length delimited. Does not implicitly {@link GameHoodleProto.UseHoodleBallReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UseHoodleBallReq
         * @static
         * @param {GameHoodleProto.IUseHoodleBallReq} message UseHoodleBallReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseHoodleBallReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UseHoodleBallReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UseHoodleBallReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UseHoodleBallReq} UseHoodleBallReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseHoodleBallReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UseHoodleBallReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.balllevel = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("balllevel"))
                throw $util.ProtocolError("missing required 'balllevel'", { instance: message });
            return message;
        };

        /**
         * Decodes a UseHoodleBallReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UseHoodleBallReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UseHoodleBallReq} UseHoodleBallReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseHoodleBallReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UseHoodleBallReq message.
         * @function verify
         * @memberof GameHoodleProto.UseHoodleBallReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UseHoodleBallReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.balllevel))
                return "balllevel: integer expected";
            return null;
        };

        /**
         * Creates a UseHoodleBallReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UseHoodleBallReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UseHoodleBallReq} UseHoodleBallReq
         */
        UseHoodleBallReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UseHoodleBallReq)
                return object;
            var message = new $root.GameHoodleProto.UseHoodleBallReq();
            if (object.balllevel != null)
                message.balllevel = object.balllevel | 0;
            return message;
        };

        /**
         * Creates a plain object from a UseHoodleBallReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UseHoodleBallReq
         * @static
         * @param {GameHoodleProto.UseHoodleBallReq} message UseHoodleBallReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UseHoodleBallReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.balllevel = 0;
            if (message.balllevel != null && message.hasOwnProperty("balllevel"))
                object.balllevel = message.balllevel;
            return object;
        };

        /**
         * Converts this UseHoodleBallReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UseHoodleBallReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UseHoodleBallReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UseHoodleBallReq;
    })();

    GameHoodleProto.UseHoodleBallRes = (function() {

        /**
         * Properties of a UseHoodleBallRes.
         * @memberof GameHoodleProto
         * @interface IUseHoodleBallRes
         * @property {number} status UseHoodleBallRes status
         * @property {number|null} [balllevel] UseHoodleBallRes balllevel
         */

        /**
         * Constructs a new UseHoodleBallRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a UseHoodleBallRes.
         * @implements IUseHoodleBallRes
         * @constructor
         * @param {GameHoodleProto.IUseHoodleBallRes=} [properties] Properties to set
         */
        function UseHoodleBallRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UseHoodleBallRes status.
         * @member {number} status
         * @memberof GameHoodleProto.UseHoodleBallRes
         * @instance
         */
        UseHoodleBallRes.prototype.status = 0;

        /**
         * UseHoodleBallRes balllevel.
         * @member {number} balllevel
         * @memberof GameHoodleProto.UseHoodleBallRes
         * @instance
         */
        UseHoodleBallRes.prototype.balllevel = 0;

        /**
         * Creates a new UseHoodleBallRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UseHoodleBallRes
         * @static
         * @param {GameHoodleProto.IUseHoodleBallRes=} [properties] Properties to set
         * @returns {GameHoodleProto.UseHoodleBallRes} UseHoodleBallRes instance
         */
        UseHoodleBallRes.create = function create(properties) {
            return new UseHoodleBallRes(properties);
        };

        /**
         * Encodes the specified UseHoodleBallRes message. Does not implicitly {@link GameHoodleProto.UseHoodleBallRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UseHoodleBallRes
         * @static
         * @param {GameHoodleProto.IUseHoodleBallRes} message UseHoodleBallRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseHoodleBallRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.balllevel != null && message.hasOwnProperty("balllevel"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.balllevel);
            return writer;
        };

        /**
         * Encodes the specified UseHoodleBallRes message, length delimited. Does not implicitly {@link GameHoodleProto.UseHoodleBallRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UseHoodleBallRes
         * @static
         * @param {GameHoodleProto.IUseHoodleBallRes} message UseHoodleBallRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseHoodleBallRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UseHoodleBallRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UseHoodleBallRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UseHoodleBallRes} UseHoodleBallRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseHoodleBallRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UseHoodleBallRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    message.balllevel = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a UseHoodleBallRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UseHoodleBallRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UseHoodleBallRes} UseHoodleBallRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseHoodleBallRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UseHoodleBallRes message.
         * @function verify
         * @memberof GameHoodleProto.UseHoodleBallRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UseHoodleBallRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.balllevel != null && message.hasOwnProperty("balllevel"))
                if (!$util.isInteger(message.balllevel))
                    return "balllevel: integer expected";
            return null;
        };

        /**
         * Creates a UseHoodleBallRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UseHoodleBallRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UseHoodleBallRes} UseHoodleBallRes
         */
        UseHoodleBallRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UseHoodleBallRes)
                return object;
            var message = new $root.GameHoodleProto.UseHoodleBallRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.balllevel != null)
                message.balllevel = object.balllevel | 0;
            return message;
        };

        /**
         * Creates a plain object from a UseHoodleBallRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UseHoodleBallRes
         * @static
         * @param {GameHoodleProto.UseHoodleBallRes} message UseHoodleBallRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UseHoodleBallRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.balllevel = 0;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.balllevel != null && message.hasOwnProperty("balllevel"))
                object.balllevel = message.balllevel;
            return object;
        };

        /**
         * Converts this UseHoodleBallRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UseHoodleBallRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UseHoodleBallRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UseHoodleBallRes;
    })();

    GameHoodleProto.UserConfigReq = (function() {

        /**
         * Properties of a UserConfigReq.
         * @memberof GameHoodleProto
         * @interface IUserConfigReq
         */

        /**
         * Constructs a new UserConfigReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserConfigReq.
         * @implements IUserConfigReq
         * @constructor
         * @param {GameHoodleProto.IUserConfigReq=} [properties] Properties to set
         */
        function UserConfigReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UserConfigReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserConfigReq
         * @static
         * @param {GameHoodleProto.IUserConfigReq=} [properties] Properties to set
         * @returns {GameHoodleProto.UserConfigReq} UserConfigReq instance
         */
        UserConfigReq.create = function create(properties) {
            return new UserConfigReq(properties);
        };

        /**
         * Encodes the specified UserConfigReq message. Does not implicitly {@link GameHoodleProto.UserConfigReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserConfigReq
         * @static
         * @param {GameHoodleProto.IUserConfigReq} message UserConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserConfigReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserConfigReq message, length delimited. Does not implicitly {@link GameHoodleProto.UserConfigReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserConfigReq
         * @static
         * @param {GameHoodleProto.IUserConfigReq} message UserConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserConfigReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserConfigReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserConfigReq} UserConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserConfigReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserConfigReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserConfigReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserConfigReq} UserConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserConfigReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserConfigReq message.
         * @function verify
         * @memberof GameHoodleProto.UserConfigReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserConfigReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a UserConfigReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserConfigReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserConfigReq} UserConfigReq
         */
        UserConfigReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserConfigReq)
                return object;
            return new $root.GameHoodleProto.UserConfigReq();
        };

        /**
         * Creates a plain object from a UserConfigReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserConfigReq
         * @static
         * @param {GameHoodleProto.UserConfigReq} message UserConfigReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserConfigReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserConfigReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserConfigReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserConfigReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserConfigReq;
    })();

    GameHoodleProto.UserConfigRes = (function() {

        /**
         * Properties of a UserConfigRes.
         * @memberof GameHoodleProto
         * @interface IUserConfigRes
         * @property {number} status UserConfigRes status
         * @property {string|null} [userconfigstring] UserConfigRes userconfigstring
         */

        /**
         * Constructs a new UserConfigRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserConfigRes.
         * @implements IUserConfigRes
         * @constructor
         * @param {GameHoodleProto.IUserConfigRes=} [properties] Properties to set
         */
        function UserConfigRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserConfigRes status.
         * @member {number} status
         * @memberof GameHoodleProto.UserConfigRes
         * @instance
         */
        UserConfigRes.prototype.status = 0;

        /**
         * UserConfigRes userconfigstring.
         * @member {string} userconfigstring
         * @memberof GameHoodleProto.UserConfigRes
         * @instance
         */
        UserConfigRes.prototype.userconfigstring = "";

        /**
         * Creates a new UserConfigRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserConfigRes
         * @static
         * @param {GameHoodleProto.IUserConfigRes=} [properties] Properties to set
         * @returns {GameHoodleProto.UserConfigRes} UserConfigRes instance
         */
        UserConfigRes.create = function create(properties) {
            return new UserConfigRes(properties);
        };

        /**
         * Encodes the specified UserConfigRes message. Does not implicitly {@link GameHoodleProto.UserConfigRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserConfigRes
         * @static
         * @param {GameHoodleProto.IUserConfigRes} message UserConfigRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserConfigRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.userconfigstring != null && message.hasOwnProperty("userconfigstring"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userconfigstring);
            return writer;
        };

        /**
         * Encodes the specified UserConfigRes message, length delimited. Does not implicitly {@link GameHoodleProto.UserConfigRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserConfigRes
         * @static
         * @param {GameHoodleProto.IUserConfigRes} message UserConfigRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserConfigRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserConfigRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserConfigRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserConfigRes} UserConfigRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserConfigRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserConfigRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    message.userconfigstring = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserConfigRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserConfigRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserConfigRes} UserConfigRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserConfigRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserConfigRes message.
         * @function verify
         * @memberof GameHoodleProto.UserConfigRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserConfigRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.userconfigstring != null && message.hasOwnProperty("userconfigstring"))
                if (!$util.isString(message.userconfigstring))
                    return "userconfigstring: string expected";
            return null;
        };

        /**
         * Creates a UserConfigRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserConfigRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserConfigRes} UserConfigRes
         */
        UserConfigRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserConfigRes)
                return object;
            var message = new $root.GameHoodleProto.UserConfigRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.userconfigstring != null)
                message.userconfigstring = String(object.userconfigstring);
            return message;
        };

        /**
         * Creates a plain object from a UserConfigRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserConfigRes
         * @static
         * @param {GameHoodleProto.UserConfigRes} message UserConfigRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserConfigRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.userconfigstring = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.userconfigstring != null && message.hasOwnProperty("userconfigstring"))
                object.userconfigstring = message.userconfigstring;
            return object;
        };

        /**
         * Converts this UserConfigRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserConfigRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserConfigRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserConfigRes;
    })();

    return GameHoodleProto;
})();

module.exports = $root;
