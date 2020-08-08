/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobuf");

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

module.exports = $root;
