/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.lobby = (function() {

    /**
     * Namespace lobby.
     * @exports lobby
     * @namespace
     */
    var lobby = {};

    lobby.client = (function() {

        /**
         * Namespace client.
         * @memberof lobby
         * @namespace
         */
        var client = {};

        client.proto = (function() {

            /**
             * Namespace proto.
             * @memberof lobby.client
             * @namespace
             */
            var proto = {};

            /**
             * XY_ID enum.
             * @name lobby.client.proto.XY_ID
             * @enum {string}
             * @property {number} INVALED=0 INVALED value
             * @property {number} REQ_LOGINLOBBY=20001 REQ_LOGINLOBBY value
             * @property {number} RES_LOBINLOBBY=20002 RES_LOBINLOBBY value
             * @property {number} REQ_CERATEROOM=20003 REQ_CERATEROOM value
             * @property {number} RES_CERATEROOM=20004 RES_CERATEROOM value
             * @property {number} REQ_JOINROOM=20005 REQ_JOINROOM value
             * @property {number} RES_JOINROOM=20006 RES_JOINROOM value
             * @property {number} REQ_EXITROOM=20007 REQ_EXITROOM value
             * @property {number} RES_EXITROOM=20008 RES_EXITROOM value
             * @property {number} REQ_BACKROOM=20009 REQ_BACKROOM value
             * @property {number} RES_BACKROOM=20010 RES_BACKROOM value
             * @property {number} REQ_DESSOLVEROOM=20011 REQ_DESSOLVEROOM value
             * @property {number} RES_DESSOLVEROOM=20012 RES_DESSOLVEROOM value
             * @property {number} REQ_ROOMSTATUS=20013 REQ_ROOMSTATUS value
             * @property {number} RES_ROOMSTATUS=20014 RES_ROOMSTATUS value
             * @property {number} REQ_GAMEINFO=20015 REQ_GAMEINFO value
             * @property {number} RES_GAMEINFO=20016 RES_GAMEINFO value
             */
            proto.XY_ID = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "INVALED"] = 0;
                values[valuesById[20001] = "REQ_LOGINLOBBY"] = 20001;
                values[valuesById[20002] = "RES_LOBINLOBBY"] = 20002;
                values[valuesById[20003] = "REQ_CERATEROOM"] = 20003;
                values[valuesById[20004] = "RES_CERATEROOM"] = 20004;
                values[valuesById[20005] = "REQ_JOINROOM"] = 20005;
                values[valuesById[20006] = "RES_JOINROOM"] = 20006;
                values[valuesById[20007] = "REQ_EXITROOM"] = 20007;
                values[valuesById[20008] = "RES_EXITROOM"] = 20008;
                values[valuesById[20009] = "REQ_BACKROOM"] = 20009;
                values[valuesById[20010] = "RES_BACKROOM"] = 20010;
                values[valuesById[20011] = "REQ_DESSOLVEROOM"] = 20011;
                values[valuesById[20012] = "RES_DESSOLVEROOM"] = 20012;
                values[valuesById[20013] = "REQ_ROOMSTATUS"] = 20013;
                values[valuesById[20014] = "RES_ROOMSTATUS"] = 20014;
                values[valuesById[20015] = "REQ_GAMEINFO"] = 20015;
                values[valuesById[20016] = "RES_GAMEINFO"] = 20016;
                return values;
            })();

            proto.ReqLoginLobby = (function() {

                /**
                 * Properties of a ReqLoginLobby.
                 * @memberof lobby.client.proto
                 * @interface IReqLoginLobby
                 * @property {boolean|null} [isrobot] ReqLoginLobby isrobot
                 */

                /**
                 * Constructs a new ReqLoginLobby.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a ReqLoginLobby.
                 * @implements IReqLoginLobby
                 * @constructor
                 * @param {lobby.client.proto.IReqLoginLobby=} [properties] Properties to set
                 */
                function ReqLoginLobby(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReqLoginLobby isrobot.
                 * @member {boolean} isrobot
                 * @memberof lobby.client.proto.ReqLoginLobby
                 * @instance
                 */
                ReqLoginLobby.prototype.isrobot = false;

                /**
                 * Creates a new ReqLoginLobby instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.ReqLoginLobby
                 * @static
                 * @param {lobby.client.proto.IReqLoginLobby=} [properties] Properties to set
                 * @returns {lobby.client.proto.ReqLoginLobby} ReqLoginLobby instance
                 */
                ReqLoginLobby.create = function create(properties) {
                    return new ReqLoginLobby(properties);
                };

                /**
                 * Encodes the specified ReqLoginLobby message. Does not implicitly {@link lobby.client.proto.ReqLoginLobby.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.ReqLoginLobby
                 * @static
                 * @param {lobby.client.proto.IReqLoginLobby} message ReqLoginLobby message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqLoginLobby.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.isrobot != null && message.hasOwnProperty("isrobot"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isrobot);
                    return writer;
                };

                /**
                 * Encodes the specified ReqLoginLobby message, length delimited. Does not implicitly {@link lobby.client.proto.ReqLoginLobby.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.ReqLoginLobby
                 * @static
                 * @param {lobby.client.proto.IReqLoginLobby} message ReqLoginLobby message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqLoginLobby.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqLoginLobby message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.ReqLoginLobby
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.ReqLoginLobby} ReqLoginLobby
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqLoginLobby.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.ReqLoginLobby();
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
                 * Decodes a ReqLoginLobby message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.ReqLoginLobby
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.ReqLoginLobby} ReqLoginLobby
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqLoginLobby.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqLoginLobby message.
                 * @function verify
                 * @memberof lobby.client.proto.ReqLoginLobby
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqLoginLobby.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.isrobot != null && message.hasOwnProperty("isrobot"))
                        if (typeof message.isrobot !== "boolean")
                            return "isrobot: boolean expected";
                    return null;
                };

                /**
                 * Creates a ReqLoginLobby message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.ReqLoginLobby
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.ReqLoginLobby} ReqLoginLobby
                 */
                ReqLoginLobby.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.ReqLoginLobby)
                        return object;
                    var message = new $root.lobby.client.proto.ReqLoginLobby();
                    if (object.isrobot != null)
                        message.isrobot = Boolean(object.isrobot);
                    return message;
                };

                /**
                 * Creates a plain object from a ReqLoginLobby message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.ReqLoginLobby
                 * @static
                 * @param {lobby.client.proto.ReqLoginLobby} message ReqLoginLobby
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqLoginLobby.toObject = function toObject(message, options) {
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
                 * Converts this ReqLoginLobby to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.ReqLoginLobby
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqLoginLobby.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqLoginLobby;
            })();

            proto.ResLoginLobby = (function() {

                /**
                 * Properties of a ResLoginLobby.
                 * @memberof lobby.client.proto
                 * @interface IResLoginLobby
                 * @property {number} status ResLoginLobby status
                 */

                /**
                 * Constructs a new ResLoginLobby.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a ResLoginLobby.
                 * @implements IResLoginLobby
                 * @constructor
                 * @param {lobby.client.proto.IResLoginLobby=} [properties] Properties to set
                 */
                function ResLoginLobby(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResLoginLobby status.
                 * @member {number} status
                 * @memberof lobby.client.proto.ResLoginLobby
                 * @instance
                 */
                ResLoginLobby.prototype.status = 0;

                /**
                 * Creates a new ResLoginLobby instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.ResLoginLobby
                 * @static
                 * @param {lobby.client.proto.IResLoginLobby=} [properties] Properties to set
                 * @returns {lobby.client.proto.ResLoginLobby} ResLoginLobby instance
                 */
                ResLoginLobby.create = function create(properties) {
                    return new ResLoginLobby(properties);
                };

                /**
                 * Encodes the specified ResLoginLobby message. Does not implicitly {@link lobby.client.proto.ResLoginLobby.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.ResLoginLobby
                 * @static
                 * @param {lobby.client.proto.IResLoginLobby} message ResLoginLobby message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResLoginLobby.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified ResLoginLobby message, length delimited. Does not implicitly {@link lobby.client.proto.ResLoginLobby.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.ResLoginLobby
                 * @static
                 * @param {lobby.client.proto.IResLoginLobby} message ResLoginLobby message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResLoginLobby.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResLoginLobby message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.ResLoginLobby
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.ResLoginLobby} ResLoginLobby
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResLoginLobby.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.ResLoginLobby();
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
                 * Decodes a ResLoginLobby message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.ResLoginLobby
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.ResLoginLobby} ResLoginLobby
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResLoginLobby.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResLoginLobby message.
                 * @function verify
                 * @memberof lobby.client.proto.ResLoginLobby
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResLoginLobby.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                    return null;
                };

                /**
                 * Creates a ResLoginLobby message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.ResLoginLobby
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.ResLoginLobby} ResLoginLobby
                 */
                ResLoginLobby.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.ResLoginLobby)
                        return object;
                    var message = new $root.lobby.client.proto.ResLoginLobby();
                    if (object.status != null)
                        message.status = object.status | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ResLoginLobby message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.ResLoginLobby
                 * @static
                 * @param {lobby.client.proto.ResLoginLobby} message ResLoginLobby
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResLoginLobby.toObject = function toObject(message, options) {
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
                 * Converts this ResLoginLobby to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.ResLoginLobby
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResLoginLobby.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * STATUS enum.
                 * @name lobby.client.proto.ResLoginLobby.STATUS
                 * @enum {string}
                 * @property {number} SUCCESS=0 SUCCESS value
                 * @property {number} FAILED=1 FAILED value
                 */
                ResLoginLobby.STATUS = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SUCCESS"] = 0;
                    values[valuesById[1] = "FAILED"] = 1;
                    return values;
                })();

                return ResLoginLobby;
            })();

            proto.ReqCreateRoom = (function() {

                /**
                 * Properties of a ReqCreateRoom.
                 * @memberof lobby.client.proto
                 * @interface IReqCreateRoom
                 * @property {string} gamerule ReqCreateRoom gamerule
                 */

                /**
                 * Constructs a new ReqCreateRoom.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a ReqCreateRoom.
                 * @implements IReqCreateRoom
                 * @constructor
                 * @param {lobby.client.proto.IReqCreateRoom=} [properties] Properties to set
                 */
                function ReqCreateRoom(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReqCreateRoom gamerule.
                 * @member {string} gamerule
                 * @memberof lobby.client.proto.ReqCreateRoom
                 * @instance
                 */
                ReqCreateRoom.prototype.gamerule = "";

                /**
                 * Creates a new ReqCreateRoom instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.ReqCreateRoom
                 * @static
                 * @param {lobby.client.proto.IReqCreateRoom=} [properties] Properties to set
                 * @returns {lobby.client.proto.ReqCreateRoom} ReqCreateRoom instance
                 */
                ReqCreateRoom.create = function create(properties) {
                    return new ReqCreateRoom(properties);
                };

                /**
                 * Encodes the specified ReqCreateRoom message. Does not implicitly {@link lobby.client.proto.ReqCreateRoom.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.ReqCreateRoom
                 * @static
                 * @param {lobby.client.proto.IReqCreateRoom} message ReqCreateRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqCreateRoom.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.gamerule);
                    return writer;
                };

                /**
                 * Encodes the specified ReqCreateRoom message, length delimited. Does not implicitly {@link lobby.client.proto.ReqCreateRoom.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.ReqCreateRoom
                 * @static
                 * @param {lobby.client.proto.IReqCreateRoom} message ReqCreateRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqCreateRoom.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqCreateRoom message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.ReqCreateRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.ReqCreateRoom} ReqCreateRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqCreateRoom.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.ReqCreateRoom();
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
                 * Decodes a ReqCreateRoom message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.ReqCreateRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.ReqCreateRoom} ReqCreateRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqCreateRoom.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqCreateRoom message.
                 * @function verify
                 * @memberof lobby.client.proto.ReqCreateRoom
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqCreateRoom.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.gamerule))
                        return "gamerule: string expected";
                    return null;
                };

                /**
                 * Creates a ReqCreateRoom message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.ReqCreateRoom
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.ReqCreateRoom} ReqCreateRoom
                 */
                ReqCreateRoom.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.ReqCreateRoom)
                        return object;
                    var message = new $root.lobby.client.proto.ReqCreateRoom();
                    if (object.gamerule != null)
                        message.gamerule = String(object.gamerule);
                    return message;
                };

                /**
                 * Creates a plain object from a ReqCreateRoom message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.ReqCreateRoom
                 * @static
                 * @param {lobby.client.proto.ReqCreateRoom} message ReqCreateRoom
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqCreateRoom.toObject = function toObject(message, options) {
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
                 * Converts this ReqCreateRoom to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.ReqCreateRoom
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqCreateRoom.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqCreateRoom;
            })();

            proto.ResCreateRoom = (function() {

                /**
                 * Properties of a ResCreateRoom.
                 * @memberof lobby.client.proto
                 * @interface IResCreateRoom
                 * @property {number} status ResCreateRoom status
                 */

                /**
                 * Constructs a new ResCreateRoom.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a ResCreateRoom.
                 * @implements IResCreateRoom
                 * @constructor
                 * @param {lobby.client.proto.IResCreateRoom=} [properties] Properties to set
                 */
                function ResCreateRoom(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResCreateRoom status.
                 * @member {number} status
                 * @memberof lobby.client.proto.ResCreateRoom
                 * @instance
                 */
                ResCreateRoom.prototype.status = 0;

                /**
                 * Creates a new ResCreateRoom instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.ResCreateRoom
                 * @static
                 * @param {lobby.client.proto.IResCreateRoom=} [properties] Properties to set
                 * @returns {lobby.client.proto.ResCreateRoom} ResCreateRoom instance
                 */
                ResCreateRoom.create = function create(properties) {
                    return new ResCreateRoom(properties);
                };

                /**
                 * Encodes the specified ResCreateRoom message. Does not implicitly {@link lobby.client.proto.ResCreateRoom.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.ResCreateRoom
                 * @static
                 * @param {lobby.client.proto.IResCreateRoom} message ResCreateRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResCreateRoom.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified ResCreateRoom message, length delimited. Does not implicitly {@link lobby.client.proto.ResCreateRoom.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.ResCreateRoom
                 * @static
                 * @param {lobby.client.proto.IResCreateRoom} message ResCreateRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResCreateRoom.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResCreateRoom message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.ResCreateRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.ResCreateRoom} ResCreateRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResCreateRoom.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.ResCreateRoom();
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
                 * Decodes a ResCreateRoom message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.ResCreateRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.ResCreateRoom} ResCreateRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResCreateRoom.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResCreateRoom message.
                 * @function verify
                 * @memberof lobby.client.proto.ResCreateRoom
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResCreateRoom.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                    return null;
                };

                /**
                 * Creates a ResCreateRoom message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.ResCreateRoom
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.ResCreateRoom} ResCreateRoom
                 */
                ResCreateRoom.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.ResCreateRoom)
                        return object;
                    var message = new $root.lobby.client.proto.ResCreateRoom();
                    if (object.status != null)
                        message.status = object.status | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ResCreateRoom message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.ResCreateRoom
                 * @static
                 * @param {lobby.client.proto.ResCreateRoom} message ResCreateRoom
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResCreateRoom.toObject = function toObject(message, options) {
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
                 * Converts this ResCreateRoom to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.ResCreateRoom
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResCreateRoom.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * STATUS enum.
                 * @name lobby.client.proto.ResCreateRoom.STATUS
                 * @enum {string}
                 * @property {number} SUCCESS=0 SUCCESS value
                 * @property {number} FAILED=1 FAILED value
                 */
                ResCreateRoom.STATUS = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SUCCESS"] = 0;
                    values[valuesById[1] = "FAILED"] = 1;
                    return values;
                })();

                return ResCreateRoom;
            })();

            proto.ReqJoinRoom = (function() {

                /**
                 * Properties of a ReqJoinRoom.
                 * @memberof lobby.client.proto
                 * @interface IReqJoinRoom
                 * @property {string} roomid ReqJoinRoom roomid
                 */

                /**
                 * Constructs a new ReqJoinRoom.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a ReqJoinRoom.
                 * @implements IReqJoinRoom
                 * @constructor
                 * @param {lobby.client.proto.IReqJoinRoom=} [properties] Properties to set
                 */
                function ReqJoinRoom(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReqJoinRoom roomid.
                 * @member {string} roomid
                 * @memberof lobby.client.proto.ReqJoinRoom
                 * @instance
                 */
                ReqJoinRoom.prototype.roomid = "";

                /**
                 * Creates a new ReqJoinRoom instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.ReqJoinRoom
                 * @static
                 * @param {lobby.client.proto.IReqJoinRoom=} [properties] Properties to set
                 * @returns {lobby.client.proto.ReqJoinRoom} ReqJoinRoom instance
                 */
                ReqJoinRoom.create = function create(properties) {
                    return new ReqJoinRoom(properties);
                };

                /**
                 * Encodes the specified ReqJoinRoom message. Does not implicitly {@link lobby.client.proto.ReqJoinRoom.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.ReqJoinRoom
                 * @static
                 * @param {lobby.client.proto.IReqJoinRoom} message ReqJoinRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqJoinRoom.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomid);
                    return writer;
                };

                /**
                 * Encodes the specified ReqJoinRoom message, length delimited. Does not implicitly {@link lobby.client.proto.ReqJoinRoom.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.ReqJoinRoom
                 * @static
                 * @param {lobby.client.proto.IReqJoinRoom} message ReqJoinRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqJoinRoom.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqJoinRoom message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.ReqJoinRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.ReqJoinRoom} ReqJoinRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqJoinRoom.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.ReqJoinRoom();
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
                 * Decodes a ReqJoinRoom message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.ReqJoinRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.ReqJoinRoom} ReqJoinRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqJoinRoom.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqJoinRoom message.
                 * @function verify
                 * @memberof lobby.client.proto.ReqJoinRoom
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqJoinRoom.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.roomid))
                        return "roomid: string expected";
                    return null;
                };

                /**
                 * Creates a ReqJoinRoom message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.ReqJoinRoom
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.ReqJoinRoom} ReqJoinRoom
                 */
                ReqJoinRoom.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.ReqJoinRoom)
                        return object;
                    var message = new $root.lobby.client.proto.ReqJoinRoom();
                    if (object.roomid != null)
                        message.roomid = String(object.roomid);
                    return message;
                };

                /**
                 * Creates a plain object from a ReqJoinRoom message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.ReqJoinRoom
                 * @static
                 * @param {lobby.client.proto.ReqJoinRoom} message ReqJoinRoom
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqJoinRoom.toObject = function toObject(message, options) {
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
                 * Converts this ReqJoinRoom to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.ReqJoinRoom
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqJoinRoom.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqJoinRoom;
            })();

            proto.ResJoinRoom = (function() {

                /**
                 * Properties of a ResJoinRoom.
                 * @memberof lobby.client.proto
                 * @interface IResJoinRoom
                 * @property {number} status ResJoinRoom status
                 */

                /**
                 * Constructs a new ResJoinRoom.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a ResJoinRoom.
                 * @implements IResJoinRoom
                 * @constructor
                 * @param {lobby.client.proto.IResJoinRoom=} [properties] Properties to set
                 */
                function ResJoinRoom(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResJoinRoom status.
                 * @member {number} status
                 * @memberof lobby.client.proto.ResJoinRoom
                 * @instance
                 */
                ResJoinRoom.prototype.status = 0;

                /**
                 * Creates a new ResJoinRoom instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.ResJoinRoom
                 * @static
                 * @param {lobby.client.proto.IResJoinRoom=} [properties] Properties to set
                 * @returns {lobby.client.proto.ResJoinRoom} ResJoinRoom instance
                 */
                ResJoinRoom.create = function create(properties) {
                    return new ResJoinRoom(properties);
                };

                /**
                 * Encodes the specified ResJoinRoom message. Does not implicitly {@link lobby.client.proto.ResJoinRoom.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.ResJoinRoom
                 * @static
                 * @param {lobby.client.proto.IResJoinRoom} message ResJoinRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResJoinRoom.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified ResJoinRoom message, length delimited. Does not implicitly {@link lobby.client.proto.ResJoinRoom.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.ResJoinRoom
                 * @static
                 * @param {lobby.client.proto.IResJoinRoom} message ResJoinRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResJoinRoom.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResJoinRoom message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.ResJoinRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.ResJoinRoom} ResJoinRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResJoinRoom.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.ResJoinRoom();
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
                 * Decodes a ResJoinRoom message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.ResJoinRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.ResJoinRoom} ResJoinRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResJoinRoom.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResJoinRoom message.
                 * @function verify
                 * @memberof lobby.client.proto.ResJoinRoom
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResJoinRoom.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                    return null;
                };

                /**
                 * Creates a ResJoinRoom message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.ResJoinRoom
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.ResJoinRoom} ResJoinRoom
                 */
                ResJoinRoom.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.ResJoinRoom)
                        return object;
                    var message = new $root.lobby.client.proto.ResJoinRoom();
                    if (object.status != null)
                        message.status = object.status | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ResJoinRoom message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.ResJoinRoom
                 * @static
                 * @param {lobby.client.proto.ResJoinRoom} message ResJoinRoom
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResJoinRoom.toObject = function toObject(message, options) {
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
                 * Converts this ResJoinRoom to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.ResJoinRoom
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResJoinRoom.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * STATUS enum.
                 * @name lobby.client.proto.ResJoinRoom.STATUS
                 * @enum {string}
                 * @property {number} SUCCESS=0 SUCCESS value
                 * @property {number} FAILED=1 FAILED value
                 */
                ResJoinRoom.STATUS = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SUCCESS"] = 0;
                    values[valuesById[1] = "FAILED"] = 1;
                    return values;
                })();

                return ResJoinRoom;
            })();

            proto.ReqExitRoom = (function() {

                /**
                 * Properties of a ReqExitRoom.
                 * @memberof lobby.client.proto
                 * @interface IReqExitRoom
                 */

                /**
                 * Constructs a new ReqExitRoom.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a ReqExitRoom.
                 * @implements IReqExitRoom
                 * @constructor
                 * @param {lobby.client.proto.IReqExitRoom=} [properties] Properties to set
                 */
                function ReqExitRoom(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new ReqExitRoom instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.ReqExitRoom
                 * @static
                 * @param {lobby.client.proto.IReqExitRoom=} [properties] Properties to set
                 * @returns {lobby.client.proto.ReqExitRoom} ReqExitRoom instance
                 */
                ReqExitRoom.create = function create(properties) {
                    return new ReqExitRoom(properties);
                };

                /**
                 * Encodes the specified ReqExitRoom message. Does not implicitly {@link lobby.client.proto.ReqExitRoom.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.ReqExitRoom
                 * @static
                 * @param {lobby.client.proto.IReqExitRoom} message ReqExitRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqExitRoom.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified ReqExitRoom message, length delimited. Does not implicitly {@link lobby.client.proto.ReqExitRoom.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.ReqExitRoom
                 * @static
                 * @param {lobby.client.proto.IReqExitRoom} message ReqExitRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqExitRoom.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqExitRoom message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.ReqExitRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.ReqExitRoom} ReqExitRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqExitRoom.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.ReqExitRoom();
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
                 * Decodes a ReqExitRoom message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.ReqExitRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.ReqExitRoom} ReqExitRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqExitRoom.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqExitRoom message.
                 * @function verify
                 * @memberof lobby.client.proto.ReqExitRoom
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqExitRoom.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a ReqExitRoom message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.ReqExitRoom
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.ReqExitRoom} ReqExitRoom
                 */
                ReqExitRoom.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.ReqExitRoom)
                        return object;
                    return new $root.lobby.client.proto.ReqExitRoom();
                };

                /**
                 * Creates a plain object from a ReqExitRoom message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.ReqExitRoom
                 * @static
                 * @param {lobby.client.proto.ReqExitRoom} message ReqExitRoom
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqExitRoom.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this ReqExitRoom to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.ReqExitRoom
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqExitRoom.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqExitRoom;
            })();

            proto.ResExitRoom = (function() {

                /**
                 * Properties of a ResExitRoom.
                 * @memberof lobby.client.proto
                 * @interface IResExitRoom
                 * @property {number} status ResExitRoom status
                 * @property {number|null} [numberid] ResExitRoom numberid
                 */

                /**
                 * Constructs a new ResExitRoom.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a ResExitRoom.
                 * @implements IResExitRoom
                 * @constructor
                 * @param {lobby.client.proto.IResExitRoom=} [properties] Properties to set
                 */
                function ResExitRoom(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResExitRoom status.
                 * @member {number} status
                 * @memberof lobby.client.proto.ResExitRoom
                 * @instance
                 */
                ResExitRoom.prototype.status = 0;

                /**
                 * ResExitRoom numberid.
                 * @member {number} numberid
                 * @memberof lobby.client.proto.ResExitRoom
                 * @instance
                 */
                ResExitRoom.prototype.numberid = 0;

                /**
                 * Creates a new ResExitRoom instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.ResExitRoom
                 * @static
                 * @param {lobby.client.proto.IResExitRoom=} [properties] Properties to set
                 * @returns {lobby.client.proto.ResExitRoom} ResExitRoom instance
                 */
                ResExitRoom.create = function create(properties) {
                    return new ResExitRoom(properties);
                };

                /**
                 * Encodes the specified ResExitRoom message. Does not implicitly {@link lobby.client.proto.ResExitRoom.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.ResExitRoom
                 * @static
                 * @param {lobby.client.proto.IResExitRoom} message ResExitRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResExitRoom.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    if (message.numberid != null && message.hasOwnProperty("numberid"))
                        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.numberid);
                    return writer;
                };

                /**
                 * Encodes the specified ResExitRoom message, length delimited. Does not implicitly {@link lobby.client.proto.ResExitRoom.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.ResExitRoom
                 * @static
                 * @param {lobby.client.proto.IResExitRoom} message ResExitRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResExitRoom.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResExitRoom message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.ResExitRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.ResExitRoom} ResExitRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResExitRoom.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.ResExitRoom();
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
                 * Decodes a ResExitRoom message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.ResExitRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.ResExitRoom} ResExitRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResExitRoom.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResExitRoom message.
                 * @function verify
                 * @memberof lobby.client.proto.ResExitRoom
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResExitRoom.verify = function verify(message) {
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
                 * Creates a ResExitRoom message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.ResExitRoom
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.ResExitRoom} ResExitRoom
                 */
                ResExitRoom.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.ResExitRoom)
                        return object;
                    var message = new $root.lobby.client.proto.ResExitRoom();
                    if (object.status != null)
                        message.status = object.status | 0;
                    if (object.numberid != null)
                        message.numberid = object.numberid | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ResExitRoom message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.ResExitRoom
                 * @static
                 * @param {lobby.client.proto.ResExitRoom} message ResExitRoom
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResExitRoom.toObject = function toObject(message, options) {
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
                 * Converts this ResExitRoom to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.ResExitRoom
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResExitRoom.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * STATUS enum.
                 * @name lobby.client.proto.ResExitRoom.STATUS
                 * @enum {string}
                 * @property {number} SUCCESS=0 SUCCESS value
                 * @property {number} FAILED=1 FAILED value
                 */
                ResExitRoom.STATUS = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SUCCESS"] = 0;
                    values[valuesById[1] = "FAILED"] = 1;
                    return values;
                })();

                return ResExitRoom;
            })();

            proto.ReqBackRoom = (function() {

                /**
                 * Properties of a ReqBackRoom.
                 * @memberof lobby.client.proto
                 * @interface IReqBackRoom
                 */

                /**
                 * Constructs a new ReqBackRoom.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a ReqBackRoom.
                 * @implements IReqBackRoom
                 * @constructor
                 * @param {lobby.client.proto.IReqBackRoom=} [properties] Properties to set
                 */
                function ReqBackRoom(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new ReqBackRoom instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.ReqBackRoom
                 * @static
                 * @param {lobby.client.proto.IReqBackRoom=} [properties] Properties to set
                 * @returns {lobby.client.proto.ReqBackRoom} ReqBackRoom instance
                 */
                ReqBackRoom.create = function create(properties) {
                    return new ReqBackRoom(properties);
                };

                /**
                 * Encodes the specified ReqBackRoom message. Does not implicitly {@link lobby.client.proto.ReqBackRoom.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.ReqBackRoom
                 * @static
                 * @param {lobby.client.proto.IReqBackRoom} message ReqBackRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqBackRoom.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified ReqBackRoom message, length delimited. Does not implicitly {@link lobby.client.proto.ReqBackRoom.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.ReqBackRoom
                 * @static
                 * @param {lobby.client.proto.IReqBackRoom} message ReqBackRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqBackRoom.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqBackRoom message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.ReqBackRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.ReqBackRoom} ReqBackRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqBackRoom.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.ReqBackRoom();
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
                 * Decodes a ReqBackRoom message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.ReqBackRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.ReqBackRoom} ReqBackRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqBackRoom.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqBackRoom message.
                 * @function verify
                 * @memberof lobby.client.proto.ReqBackRoom
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqBackRoom.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a ReqBackRoom message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.ReqBackRoom
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.ReqBackRoom} ReqBackRoom
                 */
                ReqBackRoom.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.ReqBackRoom)
                        return object;
                    return new $root.lobby.client.proto.ReqBackRoom();
                };

                /**
                 * Creates a plain object from a ReqBackRoom message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.ReqBackRoom
                 * @static
                 * @param {lobby.client.proto.ReqBackRoom} message ReqBackRoom
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqBackRoom.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this ReqBackRoom to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.ReqBackRoom
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqBackRoom.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqBackRoom;
            })();

            proto.ResBackRoom = (function() {

                /**
                 * Properties of a ResBackRoom.
                 * @memberof lobby.client.proto
                 * @interface IResBackRoom
                 * @property {number} status ResBackRoom status
                 */

                /**
                 * Constructs a new ResBackRoom.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a ResBackRoom.
                 * @implements IResBackRoom
                 * @constructor
                 * @param {lobby.client.proto.IResBackRoom=} [properties] Properties to set
                 */
                function ResBackRoom(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResBackRoom status.
                 * @member {number} status
                 * @memberof lobby.client.proto.ResBackRoom
                 * @instance
                 */
                ResBackRoom.prototype.status = 0;

                /**
                 * Creates a new ResBackRoom instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.ResBackRoom
                 * @static
                 * @param {lobby.client.proto.IResBackRoom=} [properties] Properties to set
                 * @returns {lobby.client.proto.ResBackRoom} ResBackRoom instance
                 */
                ResBackRoom.create = function create(properties) {
                    return new ResBackRoom(properties);
                };

                /**
                 * Encodes the specified ResBackRoom message. Does not implicitly {@link lobby.client.proto.ResBackRoom.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.ResBackRoom
                 * @static
                 * @param {lobby.client.proto.IResBackRoom} message ResBackRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResBackRoom.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified ResBackRoom message, length delimited. Does not implicitly {@link lobby.client.proto.ResBackRoom.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.ResBackRoom
                 * @static
                 * @param {lobby.client.proto.IResBackRoom} message ResBackRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResBackRoom.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResBackRoom message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.ResBackRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.ResBackRoom} ResBackRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResBackRoom.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.ResBackRoom();
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
                 * Decodes a ResBackRoom message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.ResBackRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.ResBackRoom} ResBackRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResBackRoom.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResBackRoom message.
                 * @function verify
                 * @memberof lobby.client.proto.ResBackRoom
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResBackRoom.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                    return null;
                };

                /**
                 * Creates a ResBackRoom message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.ResBackRoom
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.ResBackRoom} ResBackRoom
                 */
                ResBackRoom.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.ResBackRoom)
                        return object;
                    var message = new $root.lobby.client.proto.ResBackRoom();
                    if (object.status != null)
                        message.status = object.status | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ResBackRoom message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.ResBackRoom
                 * @static
                 * @param {lobby.client.proto.ResBackRoom} message ResBackRoom
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResBackRoom.toObject = function toObject(message, options) {
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
                 * Converts this ResBackRoom to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.ResBackRoom
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResBackRoom.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * STATUS enum.
                 * @name lobby.client.proto.ResBackRoom.STATUS
                 * @enum {string}
                 * @property {number} SUCCESS=0 SUCCESS value
                 * @property {number} FAILED=1 FAILED value
                 */
                ResBackRoom.STATUS = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SUCCESS"] = 0;
                    values[valuesById[1] = "FAILED"] = 1;
                    return values;
                })();

                return ResBackRoom;
            })();

            proto.ReqDessolveRoom = (function() {

                /**
                 * Properties of a ReqDessolveRoom.
                 * @memberof lobby.client.proto
                 * @interface IReqDessolveRoom
                 */

                /**
                 * Constructs a new ReqDessolveRoom.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a ReqDessolveRoom.
                 * @implements IReqDessolveRoom
                 * @constructor
                 * @param {lobby.client.proto.IReqDessolveRoom=} [properties] Properties to set
                 */
                function ReqDessolveRoom(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new ReqDessolveRoom instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.ReqDessolveRoom
                 * @static
                 * @param {lobby.client.proto.IReqDessolveRoom=} [properties] Properties to set
                 * @returns {lobby.client.proto.ReqDessolveRoom} ReqDessolveRoom instance
                 */
                ReqDessolveRoom.create = function create(properties) {
                    return new ReqDessolveRoom(properties);
                };

                /**
                 * Encodes the specified ReqDessolveRoom message. Does not implicitly {@link lobby.client.proto.ReqDessolveRoom.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.ReqDessolveRoom
                 * @static
                 * @param {lobby.client.proto.IReqDessolveRoom} message ReqDessolveRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqDessolveRoom.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified ReqDessolveRoom message, length delimited. Does not implicitly {@link lobby.client.proto.ReqDessolveRoom.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.ReqDessolveRoom
                 * @static
                 * @param {lobby.client.proto.IReqDessolveRoom} message ReqDessolveRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqDessolveRoom.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqDessolveRoom message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.ReqDessolveRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.ReqDessolveRoom} ReqDessolveRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqDessolveRoom.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.ReqDessolveRoom();
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
                 * Decodes a ReqDessolveRoom message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.ReqDessolveRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.ReqDessolveRoom} ReqDessolveRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqDessolveRoom.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqDessolveRoom message.
                 * @function verify
                 * @memberof lobby.client.proto.ReqDessolveRoom
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqDessolveRoom.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a ReqDessolveRoom message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.ReqDessolveRoom
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.ReqDessolveRoom} ReqDessolveRoom
                 */
                ReqDessolveRoom.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.ReqDessolveRoom)
                        return object;
                    return new $root.lobby.client.proto.ReqDessolveRoom();
                };

                /**
                 * Creates a plain object from a ReqDessolveRoom message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.ReqDessolveRoom
                 * @static
                 * @param {lobby.client.proto.ReqDessolveRoom} message ReqDessolveRoom
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqDessolveRoom.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this ReqDessolveRoom to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.ReqDessolveRoom
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqDessolveRoom.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqDessolveRoom;
            })();

            proto.ResDessolveRoom = (function() {

                /**
                 * Properties of a ResDessolveRoom.
                 * @memberof lobby.client.proto
                 * @interface IResDessolveRoom
                 * @property {number} status ResDessolveRoom status
                 */

                /**
                 * Constructs a new ResDessolveRoom.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a ResDessolveRoom.
                 * @implements IResDessolveRoom
                 * @constructor
                 * @param {lobby.client.proto.IResDessolveRoom=} [properties] Properties to set
                 */
                function ResDessolveRoom(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResDessolveRoom status.
                 * @member {number} status
                 * @memberof lobby.client.proto.ResDessolveRoom
                 * @instance
                 */
                ResDessolveRoom.prototype.status = 0;

                /**
                 * Creates a new ResDessolveRoom instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.ResDessolveRoom
                 * @static
                 * @param {lobby.client.proto.IResDessolveRoom=} [properties] Properties to set
                 * @returns {lobby.client.proto.ResDessolveRoom} ResDessolveRoom instance
                 */
                ResDessolveRoom.create = function create(properties) {
                    return new ResDessolveRoom(properties);
                };

                /**
                 * Encodes the specified ResDessolveRoom message. Does not implicitly {@link lobby.client.proto.ResDessolveRoom.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.ResDessolveRoom
                 * @static
                 * @param {lobby.client.proto.IResDessolveRoom} message ResDessolveRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResDessolveRoom.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified ResDessolveRoom message, length delimited. Does not implicitly {@link lobby.client.proto.ResDessolveRoom.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.ResDessolveRoom
                 * @static
                 * @param {lobby.client.proto.IResDessolveRoom} message ResDessolveRoom message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResDessolveRoom.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResDessolveRoom message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.ResDessolveRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.ResDessolveRoom} ResDessolveRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResDessolveRoom.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.ResDessolveRoom();
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
                 * Decodes a ResDessolveRoom message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.ResDessolveRoom
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.ResDessolveRoom} ResDessolveRoom
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResDessolveRoom.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResDessolveRoom message.
                 * @function verify
                 * @memberof lobby.client.proto.ResDessolveRoom
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResDessolveRoom.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                    return null;
                };

                /**
                 * Creates a ResDessolveRoom message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.ResDessolveRoom
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.ResDessolveRoom} ResDessolveRoom
                 */
                ResDessolveRoom.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.ResDessolveRoom)
                        return object;
                    var message = new $root.lobby.client.proto.ResDessolveRoom();
                    if (object.status != null)
                        message.status = object.status | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ResDessolveRoom message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.ResDessolveRoom
                 * @static
                 * @param {lobby.client.proto.ResDessolveRoom} message ResDessolveRoom
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResDessolveRoom.toObject = function toObject(message, options) {
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
                 * Converts this ResDessolveRoom to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.ResDessolveRoom
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResDessolveRoom.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * STATUS enum.
                 * @name lobby.client.proto.ResDessolveRoom.STATUS
                 * @enum {string}
                 * @property {number} SUCCESS=0 SUCCESS value
                 * @property {number} FAILED=1 FAILED value
                 */
                ResDessolveRoom.STATUS = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SUCCESS"] = 0;
                    values[valuesById[1] = "FAILED"] = 1;
                    return values;
                })();

                return ResDessolveRoom;
            })();

            proto.ReqRoomStatus = (function() {

                /**
                 * Properties of a ReqRoomStatus.
                 * @memberof lobby.client.proto
                 * @interface IReqRoomStatus
                 */

                /**
                 * Constructs a new ReqRoomStatus.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a ReqRoomStatus.
                 * @implements IReqRoomStatus
                 * @constructor
                 * @param {lobby.client.proto.IReqRoomStatus=} [properties] Properties to set
                 */
                function ReqRoomStatus(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new ReqRoomStatus instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.ReqRoomStatus
                 * @static
                 * @param {lobby.client.proto.IReqRoomStatus=} [properties] Properties to set
                 * @returns {lobby.client.proto.ReqRoomStatus} ReqRoomStatus instance
                 */
                ReqRoomStatus.create = function create(properties) {
                    return new ReqRoomStatus(properties);
                };

                /**
                 * Encodes the specified ReqRoomStatus message. Does not implicitly {@link lobby.client.proto.ReqRoomStatus.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.ReqRoomStatus
                 * @static
                 * @param {lobby.client.proto.IReqRoomStatus} message ReqRoomStatus message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqRoomStatus.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified ReqRoomStatus message, length delimited. Does not implicitly {@link lobby.client.proto.ReqRoomStatus.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.ReqRoomStatus
                 * @static
                 * @param {lobby.client.proto.IReqRoomStatus} message ReqRoomStatus message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqRoomStatus.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqRoomStatus message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.ReqRoomStatus
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.ReqRoomStatus} ReqRoomStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqRoomStatus.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.ReqRoomStatus();
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
                 * Decodes a ReqRoomStatus message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.ReqRoomStatus
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.ReqRoomStatus} ReqRoomStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqRoomStatus.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqRoomStatus message.
                 * @function verify
                 * @memberof lobby.client.proto.ReqRoomStatus
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqRoomStatus.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a ReqRoomStatus message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.ReqRoomStatus
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.ReqRoomStatus} ReqRoomStatus
                 */
                ReqRoomStatus.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.ReqRoomStatus)
                        return object;
                    return new $root.lobby.client.proto.ReqRoomStatus();
                };

                /**
                 * Creates a plain object from a ReqRoomStatus message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.ReqRoomStatus
                 * @static
                 * @param {lobby.client.proto.ReqRoomStatus} message ReqRoomStatus
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqRoomStatus.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this ReqRoomStatus to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.ReqRoomStatus
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqRoomStatus.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqRoomStatus;
            })();

            proto.ResRoomStatus = (function() {

                /**
                 * Properties of a ResRoomStatus.
                 * @memberof lobby.client.proto
                 * @interface IResRoomStatus
                 * @property {number} status ResRoomStatus status
                 */

                /**
                 * Constructs a new ResRoomStatus.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a ResRoomStatus.
                 * @implements IResRoomStatus
                 * @constructor
                 * @param {lobby.client.proto.IResRoomStatus=} [properties] Properties to set
                 */
                function ResRoomStatus(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResRoomStatus status.
                 * @member {number} status
                 * @memberof lobby.client.proto.ResRoomStatus
                 * @instance
                 */
                ResRoomStatus.prototype.status = 0;

                /**
                 * Creates a new ResRoomStatus instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.ResRoomStatus
                 * @static
                 * @param {lobby.client.proto.IResRoomStatus=} [properties] Properties to set
                 * @returns {lobby.client.proto.ResRoomStatus} ResRoomStatus instance
                 */
                ResRoomStatus.create = function create(properties) {
                    return new ResRoomStatus(properties);
                };

                /**
                 * Encodes the specified ResRoomStatus message. Does not implicitly {@link lobby.client.proto.ResRoomStatus.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.ResRoomStatus
                 * @static
                 * @param {lobby.client.proto.IResRoomStatus} message ResRoomStatus message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResRoomStatus.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified ResRoomStatus message, length delimited. Does not implicitly {@link lobby.client.proto.ResRoomStatus.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.ResRoomStatus
                 * @static
                 * @param {lobby.client.proto.IResRoomStatus} message ResRoomStatus message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResRoomStatus.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResRoomStatus message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.ResRoomStatus
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.ResRoomStatus} ResRoomStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResRoomStatus.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.ResRoomStatus();
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
                 * Decodes a ResRoomStatus message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.ResRoomStatus
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.ResRoomStatus} ResRoomStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResRoomStatus.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResRoomStatus message.
                 * @function verify
                 * @memberof lobby.client.proto.ResRoomStatus
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResRoomStatus.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                    return null;
                };

                /**
                 * Creates a ResRoomStatus message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.ResRoomStatus
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.ResRoomStatus} ResRoomStatus
                 */
                ResRoomStatus.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.ResRoomStatus)
                        return object;
                    var message = new $root.lobby.client.proto.ResRoomStatus();
                    if (object.status != null)
                        message.status = object.status | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ResRoomStatus message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.ResRoomStatus
                 * @static
                 * @param {lobby.client.proto.ResRoomStatus} message ResRoomStatus
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResRoomStatus.toObject = function toObject(message, options) {
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
                 * Converts this ResRoomStatus to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.ResRoomStatus
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResRoomStatus.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * STATUS enum.
                 * @name lobby.client.proto.ResRoomStatus.STATUS
                 * @enum {string}
                 * @property {number} SUCCESS=0 SUCCESS value
                 * @property {number} FAILED=1 FAILED value
                 */
                ResRoomStatus.STATUS = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SUCCESS"] = 0;
                    values[valuesById[1] = "FAILED"] = 1;
                    return values;
                })();

                return ResRoomStatus;
            })();

            proto.ReqGameInfo = (function() {

                /**
                 * Properties of a ReqGameInfo.
                 * @memberof lobby.client.proto
                 * @interface IReqGameInfo
                 */

                /**
                 * Constructs a new ReqGameInfo.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a ReqGameInfo.
                 * @implements IReqGameInfo
                 * @constructor
                 * @param {lobby.client.proto.IReqGameInfo=} [properties] Properties to set
                 */
                function ReqGameInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new ReqGameInfo instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.ReqGameInfo
                 * @static
                 * @param {lobby.client.proto.IReqGameInfo=} [properties] Properties to set
                 * @returns {lobby.client.proto.ReqGameInfo} ReqGameInfo instance
                 */
                ReqGameInfo.create = function create(properties) {
                    return new ReqGameInfo(properties);
                };

                /**
                 * Encodes the specified ReqGameInfo message. Does not implicitly {@link lobby.client.proto.ReqGameInfo.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.ReqGameInfo
                 * @static
                 * @param {lobby.client.proto.IReqGameInfo} message ReqGameInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqGameInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified ReqGameInfo message, length delimited. Does not implicitly {@link lobby.client.proto.ReqGameInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.ReqGameInfo
                 * @static
                 * @param {lobby.client.proto.IReqGameInfo} message ReqGameInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqGameInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqGameInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.ReqGameInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.ReqGameInfo} ReqGameInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqGameInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.ReqGameInfo();
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
                 * Decodes a ReqGameInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.ReqGameInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.ReqGameInfo} ReqGameInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqGameInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqGameInfo message.
                 * @function verify
                 * @memberof lobby.client.proto.ReqGameInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqGameInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a ReqGameInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.ReqGameInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.ReqGameInfo} ReqGameInfo
                 */
                ReqGameInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.ReqGameInfo)
                        return object;
                    return new $root.lobby.client.proto.ReqGameInfo();
                };

                /**
                 * Creates a plain object from a ReqGameInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.ReqGameInfo
                 * @static
                 * @param {lobby.client.proto.ReqGameInfo} message ReqGameInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqGameInfo.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this ReqGameInfo to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.ReqGameInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqGameInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqGameInfo;
            })();

            proto.ResGameInfo = (function() {

                /**
                 * Properties of a ResGameInfo.
                 * @memberof lobby.client.proto
                 * @interface IResGameInfo
                 * @property {number} status ResGameInfo status
                 * @property {string|null} [userinfostring] ResGameInfo userinfostring
                 */

                /**
                 * Constructs a new ResGameInfo.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a ResGameInfo.
                 * @implements IResGameInfo
                 * @constructor
                 * @param {lobby.client.proto.IResGameInfo=} [properties] Properties to set
                 */
                function ResGameInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResGameInfo status.
                 * @member {number} status
                 * @memberof lobby.client.proto.ResGameInfo
                 * @instance
                 */
                ResGameInfo.prototype.status = 0;

                /**
                 * ResGameInfo userinfostring.
                 * @member {string} userinfostring
                 * @memberof lobby.client.proto.ResGameInfo
                 * @instance
                 */
                ResGameInfo.prototype.userinfostring = "";

                /**
                 * Creates a new ResGameInfo instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.ResGameInfo
                 * @static
                 * @param {lobby.client.proto.IResGameInfo=} [properties] Properties to set
                 * @returns {lobby.client.proto.ResGameInfo} ResGameInfo instance
                 */
                ResGameInfo.create = function create(properties) {
                    return new ResGameInfo(properties);
                };

                /**
                 * Encodes the specified ResGameInfo message. Does not implicitly {@link lobby.client.proto.ResGameInfo.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.ResGameInfo
                 * @static
                 * @param {lobby.client.proto.IResGameInfo} message ResGameInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResGameInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    if (message.userinfostring != null && message.hasOwnProperty("userinfostring"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.userinfostring);
                    return writer;
                };

                /**
                 * Encodes the specified ResGameInfo message, length delimited. Does not implicitly {@link lobby.client.proto.ResGameInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.ResGameInfo
                 * @static
                 * @param {lobby.client.proto.IResGameInfo} message ResGameInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResGameInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResGameInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.ResGameInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.ResGameInfo} ResGameInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResGameInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.ResGameInfo();
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
                 * Decodes a ResGameInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.ResGameInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.ResGameInfo} ResGameInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResGameInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResGameInfo message.
                 * @function verify
                 * @memberof lobby.client.proto.ResGameInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResGameInfo.verify = function verify(message) {
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
                 * Creates a ResGameInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.ResGameInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.ResGameInfo} ResGameInfo
                 */
                ResGameInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.ResGameInfo)
                        return object;
                    var message = new $root.lobby.client.proto.ResGameInfo();
                    if (object.status != null)
                        message.status = object.status | 0;
                    if (object.userinfostring != null)
                        message.userinfostring = String(object.userinfostring);
                    return message;
                };

                /**
                 * Creates a plain object from a ResGameInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.ResGameInfo
                 * @static
                 * @param {lobby.client.proto.ResGameInfo} message ResGameInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResGameInfo.toObject = function toObject(message, options) {
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
                 * Converts this ResGameInfo to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.ResGameInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResGameInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ResGameInfo;
            })();

            return proto;
        })();

        return client;
    })();

    return lobby;
})();

module.exports = $root;
