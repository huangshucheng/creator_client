/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

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
     * @property {number} eLoginLogicReq=101 eLoginLogicReq value
     * @property {number} eLoginLogicRes=102 eLoginLogicRes value
     * @property {number} eCheckLinkGameReq=103 eCheckLinkGameReq value
     * @property {number} eCheckLinkGameRes=104 eCheckLinkGameRes value
     * @property {number} eUserInfoRes=105 eUserInfoRes value
     * @property {number} eGameRuleRes=106 eGameRuleRes value
     * @property {number} eRoomIdRes=107 eRoomIdRes value
     * @property {number} ePlayCountRes=108 ePlayCountRes value
     * @property {number} eUserOfflineRes=109 eUserOfflineRes value
     * @property {number} eUserEmojReq=110 eUserEmojReq value
     * @property {number} eUserEmojRes=111 eUserEmojRes value
     * @property {number} eUserReadyReq=112 eUserReadyReq value
     * @property {number} eUserReadyRes=113 eUserReadyRes value
     * @property {number} eGameStartRes=114 eGameStartRes value
     * @property {number} eGameResultRes=115 eGameResultRes value
     * @property {number} eTotalGameResultRes=116 eTotalGameResultRes value
     * @property {number} ePlayerFirstBallPosRes=117 ePlayerFirstBallPosRes value
     * @property {number} ePlayerPowerRes=118 ePlayerPowerRes value
     * @property {number} ePlayerShootReq=119 ePlayerShootReq value
     * @property {number} ePlayerShootRes=120 ePlayerShootRes value
     * @property {number} ePlayerBallPosReq=121 ePlayerBallPosReq value
     * @property {number} ePlayerBallPosRes=122 ePlayerBallPosRes value
     * @property {number} ePlayerIsShootedReq=123 ePlayerIsShootedReq value
     * @property {number} ePlayerIsShootedRes=124 ePlayerIsShootedRes value
     * @property {number} ePlayerScoreRes=125 ePlayerScoreRes value
     */
    GameHoodleProto.Cmd = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INVALED"] = 0;
        values[valuesById[101] = "eLoginLogicReq"] = 101;
        values[valuesById[102] = "eLoginLogicRes"] = 102;
        values[valuesById[103] = "eCheckLinkGameReq"] = 103;
        values[valuesById[104] = "eCheckLinkGameRes"] = 104;
        values[valuesById[105] = "eUserInfoRes"] = 105;
        values[valuesById[106] = "eGameRuleRes"] = 106;
        values[valuesById[107] = "eRoomIdRes"] = 107;
        values[valuesById[108] = "ePlayCountRes"] = 108;
        values[valuesById[109] = "eUserOfflineRes"] = 109;
        values[valuesById[110] = "eUserEmojReq"] = 110;
        values[valuesById[111] = "eUserEmojRes"] = 111;
        values[valuesById[112] = "eUserReadyReq"] = 112;
        values[valuesById[113] = "eUserReadyRes"] = 113;
        values[valuesById[114] = "eGameStartRes"] = 114;
        values[valuesById[115] = "eGameResultRes"] = 115;
        values[valuesById[116] = "eTotalGameResultRes"] = 116;
        values[valuesById[117] = "ePlayerFirstBallPosRes"] = 117;
        values[valuesById[118] = "ePlayerPowerRes"] = 118;
        values[valuesById[119] = "ePlayerShootReq"] = 119;
        values[valuesById[120] = "ePlayerShootRes"] = 120;
        values[valuesById[121] = "ePlayerBallPosReq"] = 121;
        values[valuesById[122] = "ePlayerBallPosRes"] = 122;
        values[valuesById[123] = "ePlayerIsShootedReq"] = 123;
        values[valuesById[124] = "ePlayerIsShootedRes"] = 124;
        values[valuesById[125] = "ePlayerScoreRes"] = 125;
        return values;
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
         * @property {boolean|null} [isrobot] LoginLogicReq isrobot
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
         * LoginLogicReq isrobot.
         * @member {boolean} isrobot
         * @memberof GameHoodleProto.LoginLogicReq
         * @instance
         */
        LoginLogicReq.prototype.isrobot = false;

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
            if (message.isrobot != null && message.hasOwnProperty("isrobot"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isrobot);
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
                case 1:
                    message.isrobot = reader.bool();
                    break;
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
            if (message.isrobot != null && message.hasOwnProperty("isrobot"))
                if (typeof message.isrobot !== "boolean")
                    return "isrobot: boolean expected";
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
            var message = new $root.GameHoodleProto.LoginLogicReq();
            if (object.isrobot != null)
                message.isrobot = Boolean(object.isrobot);
            return message;
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
        LoginLogicReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.isrobot = false;
            if (message.isrobot != null && message.hasOwnProperty("isrobot"))
                object.isrobot = message.isrobot;
            return object;
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

    GameHoodleProto.OnePlayerGolds = (function() {

        /**
         * Properties of an OnePlayerGolds.
         * @memberof GameHoodleProto
         * @interface IOnePlayerGolds
         * @property {number} seatid OnePlayerGolds seatid
         * @property {string} gold OnePlayerGolds gold
         */

        /**
         * Constructs a new OnePlayerGolds.
         * @memberof GameHoodleProto
         * @classdesc Represents an OnePlayerGolds.
         * @implements IOnePlayerGolds
         * @constructor
         * @param {GameHoodleProto.IOnePlayerGolds=} [properties] Properties to set
         */
        function OnePlayerGolds(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OnePlayerGolds seatid.
         * @member {number} seatid
         * @memberof GameHoodleProto.OnePlayerGolds
         * @instance
         */
        OnePlayerGolds.prototype.seatid = 0;

        /**
         * OnePlayerGolds gold.
         * @member {string} gold
         * @memberof GameHoodleProto.OnePlayerGolds
         * @instance
         */
        OnePlayerGolds.prototype.gold = "";

        /**
         * Creates a new OnePlayerGolds instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.OnePlayerGolds
         * @static
         * @param {GameHoodleProto.IOnePlayerGolds=} [properties] Properties to set
         * @returns {GameHoodleProto.OnePlayerGolds} OnePlayerGolds instance
         */
        OnePlayerGolds.create = function create(properties) {
            return new OnePlayerGolds(properties);
        };

        /**
         * Encodes the specified OnePlayerGolds message. Does not implicitly {@link GameHoodleProto.OnePlayerGolds.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.OnePlayerGolds
         * @static
         * @param {GameHoodleProto.IOnePlayerGolds} message OnePlayerGolds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnePlayerGolds.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.seatid);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.gold);
            return writer;
        };

        /**
         * Encodes the specified OnePlayerGolds message, length delimited. Does not implicitly {@link GameHoodleProto.OnePlayerGolds.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.OnePlayerGolds
         * @static
         * @param {GameHoodleProto.IOnePlayerGolds} message OnePlayerGolds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnePlayerGolds.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnePlayerGolds message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.OnePlayerGolds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.OnePlayerGolds} OnePlayerGolds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnePlayerGolds.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.OnePlayerGolds();
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
         * Decodes an OnePlayerGolds message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.OnePlayerGolds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.OnePlayerGolds} OnePlayerGolds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnePlayerGolds.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnePlayerGolds message.
         * @function verify
         * @memberof GameHoodleProto.OnePlayerGolds
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnePlayerGolds.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatid))
                return "seatid: integer expected";
            if (!$util.isString(message.gold))
                return "gold: string expected";
            return null;
        };

        /**
         * Creates an OnePlayerGolds message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.OnePlayerGolds
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.OnePlayerGolds} OnePlayerGolds
         */
        OnePlayerGolds.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.OnePlayerGolds)
                return object;
            var message = new $root.GameHoodleProto.OnePlayerGolds();
            if (object.seatid != null)
                message.seatid = object.seatid | 0;
            if (object.gold != null)
                message.gold = String(object.gold);
            return message;
        };

        /**
         * Creates a plain object from an OnePlayerGolds message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.OnePlayerGolds
         * @static
         * @param {GameHoodleProto.OnePlayerGolds} message OnePlayerGolds
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnePlayerGolds.toObject = function toObject(message, options) {
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
         * Converts this OnePlayerGolds to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.OnePlayerGolds
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnePlayerGolds.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OnePlayerGolds;
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
         * @property {boolean|null} [isfinal] GameResultRes isfinal
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
         * GameResultRes isfinal.
         * @member {boolean} isfinal
         * @memberof GameHoodleProto.GameResultRes
         * @instance
         */
        GameResultRes.prototype.isfinal = false;

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
            if (message.isfinal != null && message.hasOwnProperty("isfinal"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isfinal);
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
                case 2:
                    message.isfinal = reader.bool();
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
            if (message.isfinal != null && message.hasOwnProperty("isfinal"))
                if (typeof message.isfinal !== "boolean")
                    return "isfinal: boolean expected";
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
            if (object.isfinal != null)
                message.isfinal = Boolean(object.isfinal);
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
            if (options.defaults)
                object.isfinal = false;
            if (message.scores && message.scores.length) {
                object.scores = [];
                for (var j = 0; j < message.scores.length; ++j)
                    object.scores[j] = $root.GameHoodleProto.OnePlayerScore.toObject(message.scores[j], options);
            }
            if (message.isfinal != null && message.hasOwnProperty("isfinal"))
                object.isfinal = message.isfinal;
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
         * @property {Array.<GameHoodleProto.IOnePlayerGolds>|null} [golds] TotalGameResultRes golds
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
         * @member {Array.<GameHoodleProto.IOnePlayerGolds>} golds
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
                    $root.GameHoodleProto.OnePlayerGolds.encode(message.golds[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.golds.push($root.GameHoodleProto.OnePlayerGolds.decode(reader, reader.uint32()));
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
                    var error = $root.GameHoodleProto.OnePlayerGolds.verify(message.golds[i]);
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
                    message.golds[i] = $root.GameHoodleProto.OnePlayerGolds.fromObject(object.golds[i]);
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
                    object.golds[j] = $root.GameHoodleProto.OnePlayerGolds.toObject(message.golds[j], options);
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

    GameHoodleProto.UserEmojReq = (function() {

        /**
         * Properties of a UserEmojReq.
         * @memberof GameHoodleProto
         * @interface IUserEmojReq
         * @property {string} emojconfig UserEmojReq emojconfig
         */

        /**
         * Constructs a new UserEmojReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserEmojReq.
         * @implements IUserEmojReq
         * @constructor
         * @param {GameHoodleProto.IUserEmojReq=} [properties] Properties to set
         */
        function UserEmojReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserEmojReq emojconfig.
         * @member {string} emojconfig
         * @memberof GameHoodleProto.UserEmojReq
         * @instance
         */
        UserEmojReq.prototype.emojconfig = "";

        /**
         * Creates a new UserEmojReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserEmojReq
         * @static
         * @param {GameHoodleProto.IUserEmojReq=} [properties] Properties to set
         * @returns {GameHoodleProto.UserEmojReq} UserEmojReq instance
         */
        UserEmojReq.create = function create(properties) {
            return new UserEmojReq(properties);
        };

        /**
         * Encodes the specified UserEmojReq message. Does not implicitly {@link GameHoodleProto.UserEmojReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserEmojReq
         * @static
         * @param {GameHoodleProto.IUserEmojReq} message UserEmojReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEmojReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.emojconfig);
            return writer;
        };

        /**
         * Encodes the specified UserEmojReq message, length delimited. Does not implicitly {@link GameHoodleProto.UserEmojReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserEmojReq
         * @static
         * @param {GameHoodleProto.IUserEmojReq} message UserEmojReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEmojReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserEmojReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserEmojReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserEmojReq} UserEmojReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEmojReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserEmojReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.emojconfig = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("emojconfig"))
                throw $util.ProtocolError("missing required 'emojconfig'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserEmojReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserEmojReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserEmojReq} UserEmojReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEmojReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserEmojReq message.
         * @function verify
         * @memberof GameHoodleProto.UserEmojReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserEmojReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.emojconfig))
                return "emojconfig: string expected";
            return null;
        };

        /**
         * Creates a UserEmojReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserEmojReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserEmojReq} UserEmojReq
         */
        UserEmojReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserEmojReq)
                return object;
            var message = new $root.GameHoodleProto.UserEmojReq();
            if (object.emojconfig != null)
                message.emojconfig = String(object.emojconfig);
            return message;
        };

        /**
         * Creates a plain object from a UserEmojReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserEmojReq
         * @static
         * @param {GameHoodleProto.UserEmojReq} message UserEmojReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserEmojReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.emojconfig = "";
            if (message.emojconfig != null && message.hasOwnProperty("emojconfig"))
                object.emojconfig = message.emojconfig;
            return object;
        };

        /**
         * Converts this UserEmojReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserEmojReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserEmojReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserEmojReq;
    })();

    GameHoodleProto.UserEmojRes = (function() {

        /**
         * Properties of a UserEmojRes.
         * @memberof GameHoodleProto
         * @interface IUserEmojRes
         * @property {number} status UserEmojRes status
         * @property {string|null} [emojconfig] UserEmojRes emojconfig
         */

        /**
         * Constructs a new UserEmojRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserEmojRes.
         * @implements IUserEmojRes
         * @constructor
         * @param {GameHoodleProto.IUserEmojRes=} [properties] Properties to set
         */
        function UserEmojRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserEmojRes status.
         * @member {number} status
         * @memberof GameHoodleProto.UserEmojRes
         * @instance
         */
        UserEmojRes.prototype.status = 0;

        /**
         * UserEmojRes emojconfig.
         * @member {string} emojconfig
         * @memberof GameHoodleProto.UserEmojRes
         * @instance
         */
        UserEmojRes.prototype.emojconfig = "";

        /**
         * Creates a new UserEmojRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserEmojRes
         * @static
         * @param {GameHoodleProto.IUserEmojRes=} [properties] Properties to set
         * @returns {GameHoodleProto.UserEmojRes} UserEmojRes instance
         */
        UserEmojRes.create = function create(properties) {
            return new UserEmojRes(properties);
        };

        /**
         * Encodes the specified UserEmojRes message. Does not implicitly {@link GameHoodleProto.UserEmojRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserEmojRes
         * @static
         * @param {GameHoodleProto.IUserEmojRes} message UserEmojRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEmojRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.emojconfig != null && message.hasOwnProperty("emojconfig"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.emojconfig);
            return writer;
        };

        /**
         * Encodes the specified UserEmojRes message, length delimited. Does not implicitly {@link GameHoodleProto.UserEmojRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserEmojRes
         * @static
         * @param {GameHoodleProto.IUserEmojRes} message UserEmojRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEmojRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserEmojRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserEmojRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserEmojRes} UserEmojRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEmojRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserEmojRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    message.emojconfig = reader.string();
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
         * Decodes a UserEmojRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserEmojRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserEmojRes} UserEmojRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEmojRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserEmojRes message.
         * @function verify
         * @memberof GameHoodleProto.UserEmojRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserEmojRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.emojconfig != null && message.hasOwnProperty("emojconfig"))
                if (!$util.isString(message.emojconfig))
                    return "emojconfig: string expected";
            return null;
        };

        /**
         * Creates a UserEmojRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserEmojRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserEmojRes} UserEmojRes
         */
        UserEmojRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserEmojRes)
                return object;
            var message = new $root.GameHoodleProto.UserEmojRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.emojconfig != null)
                message.emojconfig = String(object.emojconfig);
            return message;
        };

        /**
         * Creates a plain object from a UserEmojRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserEmojRes
         * @static
         * @param {GameHoodleProto.UserEmojRes} message UserEmojRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserEmojRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.emojconfig = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.emojconfig != null && message.hasOwnProperty("emojconfig"))
                object.emojconfig = message.emojconfig;
            return object;
        };

        /**
         * Converts this UserEmojRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserEmojRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserEmojRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserEmojRes;
    })();

    return GameHoodleProto;
})();

module.exports = $root;
