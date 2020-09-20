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
             */
            proto.XY_ID = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "INVALED"] = 0;
                values[valuesById[20001] = "REQ_LOGINLOBBY"] = 20001;
                values[valuesById[20002] = "RES_LOBINLOBBY"] = 20002;
                return values;
            })();

            proto.reqLoginLobby = (function() {

                /**
                 * Properties of a reqLoginLobby.
                 * @memberof lobby.client.proto
                 * @interface IreqLoginLobby
                 * @property {boolean|null} [isrobot] reqLoginLobby isrobot
                 */

                /**
                 * Constructs a new reqLoginLobby.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a reqLoginLobby.
                 * @implements IreqLoginLobby
                 * @constructor
                 * @param {lobby.client.proto.IreqLoginLobby=} [properties] Properties to set
                 */
                function reqLoginLobby(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * reqLoginLobby isrobot.
                 * @member {boolean} isrobot
                 * @memberof lobby.client.proto.reqLoginLobby
                 * @instance
                 */
                reqLoginLobby.prototype.isrobot = false;

                /**
                 * Creates a new reqLoginLobby instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.reqLoginLobby
                 * @static
                 * @param {lobby.client.proto.IreqLoginLobby=} [properties] Properties to set
                 * @returns {lobby.client.proto.reqLoginLobby} reqLoginLobby instance
                 */
                reqLoginLobby.create = function create(properties) {
                    return new reqLoginLobby(properties);
                };

                /**
                 * Encodes the specified reqLoginLobby message. Does not implicitly {@link lobby.client.proto.reqLoginLobby.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.reqLoginLobby
                 * @static
                 * @param {lobby.client.proto.IreqLoginLobby} message reqLoginLobby message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                reqLoginLobby.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.isrobot != null && message.hasOwnProperty("isrobot"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isrobot);
                    return writer;
                };

                /**
                 * Encodes the specified reqLoginLobby message, length delimited. Does not implicitly {@link lobby.client.proto.reqLoginLobby.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.reqLoginLobby
                 * @static
                 * @param {lobby.client.proto.IreqLoginLobby} message reqLoginLobby message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                reqLoginLobby.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a reqLoginLobby message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.reqLoginLobby
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.reqLoginLobby} reqLoginLobby
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                reqLoginLobby.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.reqLoginLobby();
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
                 * Decodes a reqLoginLobby message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.reqLoginLobby
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.reqLoginLobby} reqLoginLobby
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                reqLoginLobby.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a reqLoginLobby message.
                 * @function verify
                 * @memberof lobby.client.proto.reqLoginLobby
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                reqLoginLobby.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.isrobot != null && message.hasOwnProperty("isrobot"))
                        if (typeof message.isrobot !== "boolean")
                            return "isrobot: boolean expected";
                    return null;
                };

                /**
                 * Creates a reqLoginLobby message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.reqLoginLobby
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.reqLoginLobby} reqLoginLobby
                 */
                reqLoginLobby.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.reqLoginLobby)
                        return object;
                    var message = new $root.lobby.client.proto.reqLoginLobby();
                    if (object.isrobot != null)
                        message.isrobot = Boolean(object.isrobot);
                    return message;
                };

                /**
                 * Creates a plain object from a reqLoginLobby message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.reqLoginLobby
                 * @static
                 * @param {lobby.client.proto.reqLoginLobby} message reqLoginLobby
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                reqLoginLobby.toObject = function toObject(message, options) {
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
                 * Converts this reqLoginLobby to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.reqLoginLobby
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                reqLoginLobby.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return reqLoginLobby;
            })();

            proto.resLoginLobby = (function() {

                /**
                 * Properties of a resLoginLobby.
                 * @memberof lobby.client.proto
                 * @interface IresLoginLobby
                 * @property {lobby.client.proto.resLoginLobby.LOGIN_LOBBY_STATUS|null} [status] resLoginLobby status
                 */

                /**
                 * Constructs a new resLoginLobby.
                 * @memberof lobby.client.proto
                 * @classdesc Represents a resLoginLobby.
                 * @implements IresLoginLobby
                 * @constructor
                 * @param {lobby.client.proto.IresLoginLobby=} [properties] Properties to set
                 */
                function resLoginLobby(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * resLoginLobby status.
                 * @member {lobby.client.proto.resLoginLobby.LOGIN_LOBBY_STATUS} status
                 * @memberof lobby.client.proto.resLoginLobby
                 * @instance
                 */
                resLoginLobby.prototype.status = 0;

                /**
                 * Creates a new resLoginLobby instance using the specified properties.
                 * @function create
                 * @memberof lobby.client.proto.resLoginLobby
                 * @static
                 * @param {lobby.client.proto.IresLoginLobby=} [properties] Properties to set
                 * @returns {lobby.client.proto.resLoginLobby} resLoginLobby instance
                 */
                resLoginLobby.create = function create(properties) {
                    return new resLoginLobby(properties);
                };

                /**
                 * Encodes the specified resLoginLobby message. Does not implicitly {@link lobby.client.proto.resLoginLobby.verify|verify} messages.
                 * @function encode
                 * @memberof lobby.client.proto.resLoginLobby
                 * @static
                 * @param {lobby.client.proto.IresLoginLobby} message resLoginLobby message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                resLoginLobby.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified resLoginLobby message, length delimited. Does not implicitly {@link lobby.client.proto.resLoginLobby.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof lobby.client.proto.resLoginLobby
                 * @static
                 * @param {lobby.client.proto.IresLoginLobby} message resLoginLobby message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                resLoginLobby.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a resLoginLobby message from the specified reader or buffer.
                 * @function decode
                 * @memberof lobby.client.proto.resLoginLobby
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {lobby.client.proto.resLoginLobby} resLoginLobby
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                resLoginLobby.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.client.proto.resLoginLobby();
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
                    return message;
                };

                /**
                 * Decodes a resLoginLobby message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof lobby.client.proto.resLoginLobby
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {lobby.client.proto.resLoginLobby} resLoginLobby
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                resLoginLobby.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a resLoginLobby message.
                 * @function verify
                 * @memberof lobby.client.proto.resLoginLobby
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                resLoginLobby.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a resLoginLobby message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof lobby.client.proto.resLoginLobby
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {lobby.client.proto.resLoginLobby} resLoginLobby
                 */
                resLoginLobby.fromObject = function fromObject(object) {
                    if (object instanceof $root.lobby.client.proto.resLoginLobby)
                        return object;
                    var message = new $root.lobby.client.proto.resLoginLobby();
                    switch (object.status) {
                    case "E_LOGIN_LOBBY_SUCCESS":
                    case 0:
                        message.status = 0;
                        break;
                    case "E_LOGIN_LOBBY_FAILED":
                    case 1:
                        message.status = 1;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a resLoginLobby message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof lobby.client.proto.resLoginLobby
                 * @static
                 * @param {lobby.client.proto.resLoginLobby} message resLoginLobby
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                resLoginLobby.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.status = options.enums === String ? "E_LOGIN_LOBBY_SUCCESS" : 0;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.lobby.client.proto.resLoginLobby.LOGIN_LOBBY_STATUS[message.status] : message.status;
                    return object;
                };

                /**
                 * Converts this resLoginLobby to JSON.
                 * @function toJSON
                 * @memberof lobby.client.proto.resLoginLobby
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                resLoginLobby.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * LOGIN_LOBBY_STATUS enum.
                 * @name lobby.client.proto.resLoginLobby.LOGIN_LOBBY_STATUS
                 * @enum {string}
                 * @property {number} E_LOGIN_LOBBY_SUCCESS=0 E_LOGIN_LOBBY_SUCCESS value
                 * @property {number} E_LOGIN_LOBBY_FAILED=1 E_LOGIN_LOBBY_FAILED value
                 */
                resLoginLobby.LOGIN_LOBBY_STATUS = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "E_LOGIN_LOBBY_SUCCESS"] = 0;
                    values[valuesById[1] = "E_LOGIN_LOBBY_FAILED"] = 1;
                    return values;
                })();

                return resLoginLobby;
            })();

            return proto;
        })();

        return client;
    })();

    return lobby;
})();

module.exports = $root;
