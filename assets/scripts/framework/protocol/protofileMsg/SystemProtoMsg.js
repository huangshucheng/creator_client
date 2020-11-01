/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.system = (function() {

    /**
     * Namespace system.
     * @exports system
     * @namespace
     */
    var system = {};

    system.client = (function() {

        /**
         * Namespace client.
         * @memberof system
         * @namespace
         */
        var client = {};

        client.proto = (function() {

            /**
             * Namespace proto.
             * @memberof system.client
             * @namespace
             */
            var proto = {};

            /**
             * XY_ID enum.
             * @name system.client.proto.XY_ID
             * @enum {string}
             * @property {number} INVALED=0 INVALED value
             * @property {number} REQ_LOGINREWARDCONFIG=101 REQ_LOGINREWARDCONFIG value
             * @property {number} RES_LOGINREWARDCONFIG=102 RES_LOGINREWARDCONFIG value
             * @property {number} REQ_LOGINREWARDSIGN=103 REQ_LOGINREWARDSIGN value
             * @property {number} RES_LOGINREWARDSIGN=104 RES_LOGINREWARDSIGN value
             * @property {number} REQ_USERSHARE=105 REQ_USERSHARE value
             * @property {number} RES_USERSHARE=106 RES_USERSHARE value
             * @property {number} REQ_USERADDCHIP=107 REQ_USERADDCHIP value
             * @property {number} RES_USERADDCHIP=108 RES_USERADDCHIP value
             */
            proto.XY_ID = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "INVALED"] = 0;
                values[valuesById[101] = "REQ_LOGINREWARDCONFIG"] = 101;
                values[valuesById[102] = "RES_LOGINREWARDCONFIG"] = 102;
                values[valuesById[103] = "REQ_LOGINREWARDSIGN"] = 103;
                values[valuesById[104] = "RES_LOGINREWARDSIGN"] = 104;
                values[valuesById[105] = "REQ_USERSHARE"] = 105;
                values[valuesById[106] = "RES_USERSHARE"] = 106;
                values[valuesById[107] = "REQ_USERADDCHIP"] = 107;
                values[valuesById[108] = "RES_USERADDCHIP"] = 108;
                return values;
            })();

            proto.reqLoginRewardConfig = (function() {

                /**
                 * Properties of a reqLoginRewardConfig.
                 * @memberof system.client.proto
                 * @interface IreqLoginRewardConfig
                 */

                /**
                 * Constructs a new reqLoginRewardConfig.
                 * @memberof system.client.proto
                 * @classdesc Represents a reqLoginRewardConfig.
                 * @implements IreqLoginRewardConfig
                 * @constructor
                 * @param {system.client.proto.IreqLoginRewardConfig=} [properties] Properties to set
                 */
                function reqLoginRewardConfig(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new reqLoginRewardConfig instance using the specified properties.
                 * @function create
                 * @memberof system.client.proto.reqLoginRewardConfig
                 * @static
                 * @param {system.client.proto.IreqLoginRewardConfig=} [properties] Properties to set
                 * @returns {system.client.proto.reqLoginRewardConfig} reqLoginRewardConfig instance
                 */
                reqLoginRewardConfig.create = function create(properties) {
                    return new reqLoginRewardConfig(properties);
                };

                /**
                 * Encodes the specified reqLoginRewardConfig message. Does not implicitly {@link system.client.proto.reqLoginRewardConfig.verify|verify} messages.
                 * @function encode
                 * @memberof system.client.proto.reqLoginRewardConfig
                 * @static
                 * @param {system.client.proto.IreqLoginRewardConfig} message reqLoginRewardConfig message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                reqLoginRewardConfig.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified reqLoginRewardConfig message, length delimited. Does not implicitly {@link system.client.proto.reqLoginRewardConfig.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof system.client.proto.reqLoginRewardConfig
                 * @static
                 * @param {system.client.proto.IreqLoginRewardConfig} message reqLoginRewardConfig message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                reqLoginRewardConfig.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a reqLoginRewardConfig message from the specified reader or buffer.
                 * @function decode
                 * @memberof system.client.proto.reqLoginRewardConfig
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {system.client.proto.reqLoginRewardConfig} reqLoginRewardConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                reqLoginRewardConfig.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.system.client.proto.reqLoginRewardConfig();
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
                 * Decodes a reqLoginRewardConfig message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof system.client.proto.reqLoginRewardConfig
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {system.client.proto.reqLoginRewardConfig} reqLoginRewardConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                reqLoginRewardConfig.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a reqLoginRewardConfig message.
                 * @function verify
                 * @memberof system.client.proto.reqLoginRewardConfig
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                reqLoginRewardConfig.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a reqLoginRewardConfig message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof system.client.proto.reqLoginRewardConfig
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {system.client.proto.reqLoginRewardConfig} reqLoginRewardConfig
                 */
                reqLoginRewardConfig.fromObject = function fromObject(object) {
                    if (object instanceof $root.system.client.proto.reqLoginRewardConfig)
                        return object;
                    return new $root.system.client.proto.reqLoginRewardConfig();
                };

                /**
                 * Creates a plain object from a reqLoginRewardConfig message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof system.client.proto.reqLoginRewardConfig
                 * @static
                 * @param {system.client.proto.reqLoginRewardConfig} message reqLoginRewardConfig
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                reqLoginRewardConfig.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this reqLoginRewardConfig to JSON.
                 * @function toJSON
                 * @memberof system.client.proto.reqLoginRewardConfig
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                reqLoginRewardConfig.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return reqLoginRewardConfig;
            })();

            proto.ResLoginRewardConfig = (function() {

                /**
                 * Properties of a ResLoginRewardConfig.
                 * @memberof system.client.proto
                 * @interface IResLoginRewardConfig
                 * @property {number} status ResLoginRewardConfig status
                 * @property {number|null} [signdays] ResLoginRewardConfig signdays
                 * @property {boolean|null} [istodaysign] ResLoginRewardConfig istodaysign
                 * @property {string|null} [config] ResLoginRewardConfig config
                 */

                /**
                 * Constructs a new ResLoginRewardConfig.
                 * @memberof system.client.proto
                 * @classdesc Represents a ResLoginRewardConfig.
                 * @implements IResLoginRewardConfig
                 * @constructor
                 * @param {system.client.proto.IResLoginRewardConfig=} [properties] Properties to set
                 */
                function ResLoginRewardConfig(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResLoginRewardConfig status.
                 * @member {number} status
                 * @memberof system.client.proto.ResLoginRewardConfig
                 * @instance
                 */
                ResLoginRewardConfig.prototype.status = 0;

                /**
                 * ResLoginRewardConfig signdays.
                 * @member {number} signdays
                 * @memberof system.client.proto.ResLoginRewardConfig
                 * @instance
                 */
                ResLoginRewardConfig.prototype.signdays = 0;

                /**
                 * ResLoginRewardConfig istodaysign.
                 * @member {boolean} istodaysign
                 * @memberof system.client.proto.ResLoginRewardConfig
                 * @instance
                 */
                ResLoginRewardConfig.prototype.istodaysign = false;

                /**
                 * ResLoginRewardConfig config.
                 * @member {string} config
                 * @memberof system.client.proto.ResLoginRewardConfig
                 * @instance
                 */
                ResLoginRewardConfig.prototype.config = "";

                /**
                 * Creates a new ResLoginRewardConfig instance using the specified properties.
                 * @function create
                 * @memberof system.client.proto.ResLoginRewardConfig
                 * @static
                 * @param {system.client.proto.IResLoginRewardConfig=} [properties] Properties to set
                 * @returns {system.client.proto.ResLoginRewardConfig} ResLoginRewardConfig instance
                 */
                ResLoginRewardConfig.create = function create(properties) {
                    return new ResLoginRewardConfig(properties);
                };

                /**
                 * Encodes the specified ResLoginRewardConfig message. Does not implicitly {@link system.client.proto.ResLoginRewardConfig.verify|verify} messages.
                 * @function encode
                 * @memberof system.client.proto.ResLoginRewardConfig
                 * @static
                 * @param {system.client.proto.IResLoginRewardConfig} message ResLoginRewardConfig message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResLoginRewardConfig.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    if (message.signdays != null && message.hasOwnProperty("signdays"))
                        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.signdays);
                    if (message.istodaysign != null && message.hasOwnProperty("istodaysign"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.istodaysign);
                    if (message.config != null && message.hasOwnProperty("config"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.config);
                    return writer;
                };

                /**
                 * Encodes the specified ResLoginRewardConfig message, length delimited. Does not implicitly {@link system.client.proto.ResLoginRewardConfig.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof system.client.proto.ResLoginRewardConfig
                 * @static
                 * @param {system.client.proto.IResLoginRewardConfig} message ResLoginRewardConfig message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResLoginRewardConfig.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResLoginRewardConfig message from the specified reader or buffer.
                 * @function decode
                 * @memberof system.client.proto.ResLoginRewardConfig
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {system.client.proto.ResLoginRewardConfig} ResLoginRewardConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResLoginRewardConfig.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.system.client.proto.ResLoginRewardConfig();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.status = reader.sint32();
                            break;
                        case 2:
                            message.signdays = reader.sint32();
                            break;
                        case 3:
                            message.istodaysign = reader.bool();
                            break;
                        case 4:
                            message.config = reader.string();
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
                 * Decodes a ResLoginRewardConfig message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof system.client.proto.ResLoginRewardConfig
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {system.client.proto.ResLoginRewardConfig} ResLoginRewardConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResLoginRewardConfig.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResLoginRewardConfig message.
                 * @function verify
                 * @memberof system.client.proto.ResLoginRewardConfig
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResLoginRewardConfig.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                    if (message.signdays != null && message.hasOwnProperty("signdays"))
                        if (!$util.isInteger(message.signdays))
                            return "signdays: integer expected";
                    if (message.istodaysign != null && message.hasOwnProperty("istodaysign"))
                        if (typeof message.istodaysign !== "boolean")
                            return "istodaysign: boolean expected";
                    if (message.config != null && message.hasOwnProperty("config"))
                        if (!$util.isString(message.config))
                            return "config: string expected";
                    return null;
                };

                /**
                 * Creates a ResLoginRewardConfig message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof system.client.proto.ResLoginRewardConfig
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {system.client.proto.ResLoginRewardConfig} ResLoginRewardConfig
                 */
                ResLoginRewardConfig.fromObject = function fromObject(object) {
                    if (object instanceof $root.system.client.proto.ResLoginRewardConfig)
                        return object;
                    var message = new $root.system.client.proto.ResLoginRewardConfig();
                    if (object.status != null)
                        message.status = object.status | 0;
                    if (object.signdays != null)
                        message.signdays = object.signdays | 0;
                    if (object.istodaysign != null)
                        message.istodaysign = Boolean(object.istodaysign);
                    if (object.config != null)
                        message.config = String(object.config);
                    return message;
                };

                /**
                 * Creates a plain object from a ResLoginRewardConfig message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof system.client.proto.ResLoginRewardConfig
                 * @static
                 * @param {system.client.proto.ResLoginRewardConfig} message ResLoginRewardConfig
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResLoginRewardConfig.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.status = 0;
                        object.signdays = 0;
                        object.istodaysign = false;
                        object.config = "";
                    }
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = message.status;
                    if (message.signdays != null && message.hasOwnProperty("signdays"))
                        object.signdays = message.signdays;
                    if (message.istodaysign != null && message.hasOwnProperty("istodaysign"))
                        object.istodaysign = message.istodaysign;
                    if (message.config != null && message.hasOwnProperty("config"))
                        object.config = message.config;
                    return object;
                };

                /**
                 * Converts this ResLoginRewardConfig to JSON.
                 * @function toJSON
                 * @memberof system.client.proto.ResLoginRewardConfig
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResLoginRewardConfig.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ResLoginRewardConfig;
            })();

            proto.ReqLoginRewardSign = (function() {

                /**
                 * Properties of a ReqLoginRewardSign.
                 * @memberof system.client.proto
                 * @interface IReqLoginRewardSign
                 * @property {number} signofday ReqLoginRewardSign signofday
                 */

                /**
                 * Constructs a new ReqLoginRewardSign.
                 * @memberof system.client.proto
                 * @classdesc Represents a ReqLoginRewardSign.
                 * @implements IReqLoginRewardSign
                 * @constructor
                 * @param {system.client.proto.IReqLoginRewardSign=} [properties] Properties to set
                 */
                function ReqLoginRewardSign(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReqLoginRewardSign signofday.
                 * @member {number} signofday
                 * @memberof system.client.proto.ReqLoginRewardSign
                 * @instance
                 */
                ReqLoginRewardSign.prototype.signofday = 0;

                /**
                 * Creates a new ReqLoginRewardSign instance using the specified properties.
                 * @function create
                 * @memberof system.client.proto.ReqLoginRewardSign
                 * @static
                 * @param {system.client.proto.IReqLoginRewardSign=} [properties] Properties to set
                 * @returns {system.client.proto.ReqLoginRewardSign} ReqLoginRewardSign instance
                 */
                ReqLoginRewardSign.create = function create(properties) {
                    return new ReqLoginRewardSign(properties);
                };

                /**
                 * Encodes the specified ReqLoginRewardSign message. Does not implicitly {@link system.client.proto.ReqLoginRewardSign.verify|verify} messages.
                 * @function encode
                 * @memberof system.client.proto.ReqLoginRewardSign
                 * @static
                 * @param {system.client.proto.IReqLoginRewardSign} message ReqLoginRewardSign message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqLoginRewardSign.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.signofday);
                    return writer;
                };

                /**
                 * Encodes the specified ReqLoginRewardSign message, length delimited. Does not implicitly {@link system.client.proto.ReqLoginRewardSign.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof system.client.proto.ReqLoginRewardSign
                 * @static
                 * @param {system.client.proto.IReqLoginRewardSign} message ReqLoginRewardSign message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqLoginRewardSign.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqLoginRewardSign message from the specified reader or buffer.
                 * @function decode
                 * @memberof system.client.proto.ReqLoginRewardSign
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {system.client.proto.ReqLoginRewardSign} ReqLoginRewardSign
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqLoginRewardSign.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.system.client.proto.ReqLoginRewardSign();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.signofday = reader.sint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("signofday"))
                        throw $util.ProtocolError("missing required 'signofday'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a ReqLoginRewardSign message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof system.client.proto.ReqLoginRewardSign
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {system.client.proto.ReqLoginRewardSign} ReqLoginRewardSign
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqLoginRewardSign.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqLoginRewardSign message.
                 * @function verify
                 * @memberof system.client.proto.ReqLoginRewardSign
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqLoginRewardSign.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.signofday))
                        return "signofday: integer expected";
                    return null;
                };

                /**
                 * Creates a ReqLoginRewardSign message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof system.client.proto.ReqLoginRewardSign
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {system.client.proto.ReqLoginRewardSign} ReqLoginRewardSign
                 */
                ReqLoginRewardSign.fromObject = function fromObject(object) {
                    if (object instanceof $root.system.client.proto.ReqLoginRewardSign)
                        return object;
                    var message = new $root.system.client.proto.ReqLoginRewardSign();
                    if (object.signofday != null)
                        message.signofday = object.signofday | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ReqLoginRewardSign message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof system.client.proto.ReqLoginRewardSign
                 * @static
                 * @param {system.client.proto.ReqLoginRewardSign} message ReqLoginRewardSign
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqLoginRewardSign.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.signofday = 0;
                    if (message.signofday != null && message.hasOwnProperty("signofday"))
                        object.signofday = message.signofday;
                    return object;
                };

                /**
                 * Converts this ReqLoginRewardSign to JSON.
                 * @function toJSON
                 * @memberof system.client.proto.ReqLoginRewardSign
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqLoginRewardSign.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqLoginRewardSign;
            })();

            proto.ResLoginRewardSign = (function() {

                /**
                 * Properties of a ResLoginRewardSign.
                 * @memberof system.client.proto
                 * @interface IResLoginRewardSign
                 * @property {number} status ResLoginRewardSign status
                 * @property {string|null} [rewardconfig] ResLoginRewardSign rewardconfig
                 */

                /**
                 * Constructs a new ResLoginRewardSign.
                 * @memberof system.client.proto
                 * @classdesc Represents a ResLoginRewardSign.
                 * @implements IResLoginRewardSign
                 * @constructor
                 * @param {system.client.proto.IResLoginRewardSign=} [properties] Properties to set
                 */
                function ResLoginRewardSign(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResLoginRewardSign status.
                 * @member {number} status
                 * @memberof system.client.proto.ResLoginRewardSign
                 * @instance
                 */
                ResLoginRewardSign.prototype.status = 0;

                /**
                 * ResLoginRewardSign rewardconfig.
                 * @member {string} rewardconfig
                 * @memberof system.client.proto.ResLoginRewardSign
                 * @instance
                 */
                ResLoginRewardSign.prototype.rewardconfig = "";

                /**
                 * Creates a new ResLoginRewardSign instance using the specified properties.
                 * @function create
                 * @memberof system.client.proto.ResLoginRewardSign
                 * @static
                 * @param {system.client.proto.IResLoginRewardSign=} [properties] Properties to set
                 * @returns {system.client.proto.ResLoginRewardSign} ResLoginRewardSign instance
                 */
                ResLoginRewardSign.create = function create(properties) {
                    return new ResLoginRewardSign(properties);
                };

                /**
                 * Encodes the specified ResLoginRewardSign message. Does not implicitly {@link system.client.proto.ResLoginRewardSign.verify|verify} messages.
                 * @function encode
                 * @memberof system.client.proto.ResLoginRewardSign
                 * @static
                 * @param {system.client.proto.IResLoginRewardSign} message ResLoginRewardSign message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResLoginRewardSign.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    if (message.rewardconfig != null && message.hasOwnProperty("rewardconfig"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.rewardconfig);
                    return writer;
                };

                /**
                 * Encodes the specified ResLoginRewardSign message, length delimited. Does not implicitly {@link system.client.proto.ResLoginRewardSign.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof system.client.proto.ResLoginRewardSign
                 * @static
                 * @param {system.client.proto.IResLoginRewardSign} message ResLoginRewardSign message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResLoginRewardSign.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResLoginRewardSign message from the specified reader or buffer.
                 * @function decode
                 * @memberof system.client.proto.ResLoginRewardSign
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {system.client.proto.ResLoginRewardSign} ResLoginRewardSign
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResLoginRewardSign.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.system.client.proto.ResLoginRewardSign();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.status = reader.sint32();
                            break;
                        case 2:
                            message.rewardconfig = reader.string();
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
                 * Decodes a ResLoginRewardSign message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof system.client.proto.ResLoginRewardSign
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {system.client.proto.ResLoginRewardSign} ResLoginRewardSign
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResLoginRewardSign.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResLoginRewardSign message.
                 * @function verify
                 * @memberof system.client.proto.ResLoginRewardSign
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResLoginRewardSign.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                    if (message.rewardconfig != null && message.hasOwnProperty("rewardconfig"))
                        if (!$util.isString(message.rewardconfig))
                            return "rewardconfig: string expected";
                    return null;
                };

                /**
                 * Creates a ResLoginRewardSign message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof system.client.proto.ResLoginRewardSign
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {system.client.proto.ResLoginRewardSign} ResLoginRewardSign
                 */
                ResLoginRewardSign.fromObject = function fromObject(object) {
                    if (object instanceof $root.system.client.proto.ResLoginRewardSign)
                        return object;
                    var message = new $root.system.client.proto.ResLoginRewardSign();
                    if (object.status != null)
                        message.status = object.status | 0;
                    if (object.rewardconfig != null)
                        message.rewardconfig = String(object.rewardconfig);
                    return message;
                };

                /**
                 * Creates a plain object from a ResLoginRewardSign message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof system.client.proto.ResLoginRewardSign
                 * @static
                 * @param {system.client.proto.ResLoginRewardSign} message ResLoginRewardSign
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResLoginRewardSign.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.status = 0;
                        object.rewardconfig = "";
                    }
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = message.status;
                    if (message.rewardconfig != null && message.hasOwnProperty("rewardconfig"))
                        object.rewardconfig = message.rewardconfig;
                    return object;
                };

                /**
                 * Converts this ResLoginRewardSign to JSON.
                 * @function toJSON
                 * @memberof system.client.proto.ResLoginRewardSign
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResLoginRewardSign.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ResLoginRewardSign;
            })();

            proto.ReqUserShare = (function() {

                /**
                 * Properties of a ReqUserShare.
                 * @memberof system.client.proto
                 * @interface IReqUserShare
                 */

                /**
                 * Constructs a new ReqUserShare.
                 * @memberof system.client.proto
                 * @classdesc Represents a ReqUserShare.
                 * @implements IReqUserShare
                 * @constructor
                 * @param {system.client.proto.IReqUserShare=} [properties] Properties to set
                 */
                function ReqUserShare(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new ReqUserShare instance using the specified properties.
                 * @function create
                 * @memberof system.client.proto.ReqUserShare
                 * @static
                 * @param {system.client.proto.IReqUserShare=} [properties] Properties to set
                 * @returns {system.client.proto.ReqUserShare} ReqUserShare instance
                 */
                ReqUserShare.create = function create(properties) {
                    return new ReqUserShare(properties);
                };

                /**
                 * Encodes the specified ReqUserShare message. Does not implicitly {@link system.client.proto.ReqUserShare.verify|verify} messages.
                 * @function encode
                 * @memberof system.client.proto.ReqUserShare
                 * @static
                 * @param {system.client.proto.IReqUserShare} message ReqUserShare message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqUserShare.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified ReqUserShare message, length delimited. Does not implicitly {@link system.client.proto.ReqUserShare.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof system.client.proto.ReqUserShare
                 * @static
                 * @param {system.client.proto.IReqUserShare} message ReqUserShare message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqUserShare.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqUserShare message from the specified reader or buffer.
                 * @function decode
                 * @memberof system.client.proto.ReqUserShare
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {system.client.proto.ReqUserShare} ReqUserShare
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqUserShare.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.system.client.proto.ReqUserShare();
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
                 * Decodes a ReqUserShare message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof system.client.proto.ReqUserShare
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {system.client.proto.ReqUserShare} ReqUserShare
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqUserShare.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqUserShare message.
                 * @function verify
                 * @memberof system.client.proto.ReqUserShare
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqUserShare.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a ReqUserShare message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof system.client.proto.ReqUserShare
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {system.client.proto.ReqUserShare} ReqUserShare
                 */
                ReqUserShare.fromObject = function fromObject(object) {
                    if (object instanceof $root.system.client.proto.ReqUserShare)
                        return object;
                    return new $root.system.client.proto.ReqUserShare();
                };

                /**
                 * Creates a plain object from a ReqUserShare message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof system.client.proto.ReqUserShare
                 * @static
                 * @param {system.client.proto.ReqUserShare} message ReqUserShare
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqUserShare.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this ReqUserShare to JSON.
                 * @function toJSON
                 * @memberof system.client.proto.ReqUserShare
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqUserShare.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqUserShare;
            })();

            proto.ResUserShare = (function() {

                /**
                 * Properties of a ResUserShare.
                 * @memberof system.client.proto
                 * @interface IResUserShare
                 * @property {number} status ResUserShare status
                 */

                /**
                 * Constructs a new ResUserShare.
                 * @memberof system.client.proto
                 * @classdesc Represents a ResUserShare.
                 * @implements IResUserShare
                 * @constructor
                 * @param {system.client.proto.IResUserShare=} [properties] Properties to set
                 */
                function ResUserShare(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResUserShare status.
                 * @member {number} status
                 * @memberof system.client.proto.ResUserShare
                 * @instance
                 */
                ResUserShare.prototype.status = 0;

                /**
                 * Creates a new ResUserShare instance using the specified properties.
                 * @function create
                 * @memberof system.client.proto.ResUserShare
                 * @static
                 * @param {system.client.proto.IResUserShare=} [properties] Properties to set
                 * @returns {system.client.proto.ResUserShare} ResUserShare instance
                 */
                ResUserShare.create = function create(properties) {
                    return new ResUserShare(properties);
                };

                /**
                 * Encodes the specified ResUserShare message. Does not implicitly {@link system.client.proto.ResUserShare.verify|verify} messages.
                 * @function encode
                 * @memberof system.client.proto.ResUserShare
                 * @static
                 * @param {system.client.proto.IResUserShare} message ResUserShare message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResUserShare.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified ResUserShare message, length delimited. Does not implicitly {@link system.client.proto.ResUserShare.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof system.client.proto.ResUserShare
                 * @static
                 * @param {system.client.proto.IResUserShare} message ResUserShare message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResUserShare.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResUserShare message from the specified reader or buffer.
                 * @function decode
                 * @memberof system.client.proto.ResUserShare
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {system.client.proto.ResUserShare} ResUserShare
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResUserShare.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.system.client.proto.ResUserShare();
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
                 * Decodes a ResUserShare message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof system.client.proto.ResUserShare
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {system.client.proto.ResUserShare} ResUserShare
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResUserShare.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResUserShare message.
                 * @function verify
                 * @memberof system.client.proto.ResUserShare
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResUserShare.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                    return null;
                };

                /**
                 * Creates a ResUserShare message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof system.client.proto.ResUserShare
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {system.client.proto.ResUserShare} ResUserShare
                 */
                ResUserShare.fromObject = function fromObject(object) {
                    if (object instanceof $root.system.client.proto.ResUserShare)
                        return object;
                    var message = new $root.system.client.proto.ResUserShare();
                    if (object.status != null)
                        message.status = object.status | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ResUserShare message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof system.client.proto.ResUserShare
                 * @static
                 * @param {system.client.proto.ResUserShare} message ResUserShare
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResUserShare.toObject = function toObject(message, options) {
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
                 * Converts this ResUserShare to JSON.
                 * @function toJSON
                 * @memberof system.client.proto.ResUserShare
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResUserShare.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ResUserShare;
            })();

            proto.ReqUserAddChip = (function() {

                /**
                 * Properties of a ReqUserAddChip.
                 * @memberof system.client.proto
                 * @interface IReqUserAddChip
                 * @property {number} propid ReqUserAddChip propid
                 * @property {number} propcount ReqUserAddChip propcount
                 * @property {string|null} [config] ReqUserAddChip config
                 */

                /**
                 * Constructs a new ReqUserAddChip.
                 * @memberof system.client.proto
                 * @classdesc Represents a ReqUserAddChip.
                 * @implements IReqUserAddChip
                 * @constructor
                 * @param {system.client.proto.IReqUserAddChip=} [properties] Properties to set
                 */
                function ReqUserAddChip(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReqUserAddChip propid.
                 * @member {number} propid
                 * @memberof system.client.proto.ReqUserAddChip
                 * @instance
                 */
                ReqUserAddChip.prototype.propid = 0;

                /**
                 * ReqUserAddChip propcount.
                 * @member {number} propcount
                 * @memberof system.client.proto.ReqUserAddChip
                 * @instance
                 */
                ReqUserAddChip.prototype.propcount = 0;

                /**
                 * ReqUserAddChip config.
                 * @member {string} config
                 * @memberof system.client.proto.ReqUserAddChip
                 * @instance
                 */
                ReqUserAddChip.prototype.config = "";

                /**
                 * Creates a new ReqUserAddChip instance using the specified properties.
                 * @function create
                 * @memberof system.client.proto.ReqUserAddChip
                 * @static
                 * @param {system.client.proto.IReqUserAddChip=} [properties] Properties to set
                 * @returns {system.client.proto.ReqUserAddChip} ReqUserAddChip instance
                 */
                ReqUserAddChip.create = function create(properties) {
                    return new ReqUserAddChip(properties);
                };

                /**
                 * Encodes the specified ReqUserAddChip message. Does not implicitly {@link system.client.proto.ReqUserAddChip.verify|verify} messages.
                 * @function encode
                 * @memberof system.client.proto.ReqUserAddChip
                 * @static
                 * @param {system.client.proto.IReqUserAddChip} message ReqUserAddChip message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqUserAddChip.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.propid);
                    writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.propcount);
                    if (message.config != null && message.hasOwnProperty("config"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.config);
                    return writer;
                };

                /**
                 * Encodes the specified ReqUserAddChip message, length delimited. Does not implicitly {@link system.client.proto.ReqUserAddChip.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof system.client.proto.ReqUserAddChip
                 * @static
                 * @param {system.client.proto.IReqUserAddChip} message ReqUserAddChip message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqUserAddChip.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqUserAddChip message from the specified reader or buffer.
                 * @function decode
                 * @memberof system.client.proto.ReqUserAddChip
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {system.client.proto.ReqUserAddChip} ReqUserAddChip
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqUserAddChip.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.system.client.proto.ReqUserAddChip();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.propid = reader.sint32();
                            break;
                        case 2:
                            message.propcount = reader.sint32();
                            break;
                        case 3:
                            message.config = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("propid"))
                        throw $util.ProtocolError("missing required 'propid'", { instance: message });
                    if (!message.hasOwnProperty("propcount"))
                        throw $util.ProtocolError("missing required 'propcount'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a ReqUserAddChip message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof system.client.proto.ReqUserAddChip
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {system.client.proto.ReqUserAddChip} ReqUserAddChip
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqUserAddChip.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqUserAddChip message.
                 * @function verify
                 * @memberof system.client.proto.ReqUserAddChip
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqUserAddChip.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.propid))
                        return "propid: integer expected";
                    if (!$util.isInteger(message.propcount))
                        return "propcount: integer expected";
                    if (message.config != null && message.hasOwnProperty("config"))
                        if (!$util.isString(message.config))
                            return "config: string expected";
                    return null;
                };

                /**
                 * Creates a ReqUserAddChip message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof system.client.proto.ReqUserAddChip
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {system.client.proto.ReqUserAddChip} ReqUserAddChip
                 */
                ReqUserAddChip.fromObject = function fromObject(object) {
                    if (object instanceof $root.system.client.proto.ReqUserAddChip)
                        return object;
                    var message = new $root.system.client.proto.ReqUserAddChip();
                    if (object.propid != null)
                        message.propid = object.propid | 0;
                    if (object.propcount != null)
                        message.propcount = object.propcount | 0;
                    if (object.config != null)
                        message.config = String(object.config);
                    return message;
                };

                /**
                 * Creates a plain object from a ReqUserAddChip message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof system.client.proto.ReqUserAddChip
                 * @static
                 * @param {system.client.proto.ReqUserAddChip} message ReqUserAddChip
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqUserAddChip.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.propid = 0;
                        object.propcount = 0;
                        object.config = "";
                    }
                    if (message.propid != null && message.hasOwnProperty("propid"))
                        object.propid = message.propid;
                    if (message.propcount != null && message.hasOwnProperty("propcount"))
                        object.propcount = message.propcount;
                    if (message.config != null && message.hasOwnProperty("config"))
                        object.config = message.config;
                    return object;
                };

                /**
                 * Converts this ReqUserAddChip to JSON.
                 * @function toJSON
                 * @memberof system.client.proto.ReqUserAddChip
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqUserAddChip.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqUserAddChip;
            })();

            proto.ResUserAddChip = (function() {

                /**
                 * Properties of a ResUserAddChip.
                 * @memberof system.client.proto
                 * @interface IResUserAddChip
                 * @property {number} status ResUserAddChip status
                 * @property {number|null} [propid] ResUserAddChip propid
                 * @property {number|null} [propcount] ResUserAddChip propcount
                 * @property {string|null} [config] ResUserAddChip config
                 */

                /**
                 * Constructs a new ResUserAddChip.
                 * @memberof system.client.proto
                 * @classdesc Represents a ResUserAddChip.
                 * @implements IResUserAddChip
                 * @constructor
                 * @param {system.client.proto.IResUserAddChip=} [properties] Properties to set
                 */
                function ResUserAddChip(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResUserAddChip status.
                 * @member {number} status
                 * @memberof system.client.proto.ResUserAddChip
                 * @instance
                 */
                ResUserAddChip.prototype.status = 0;

                /**
                 * ResUserAddChip propid.
                 * @member {number} propid
                 * @memberof system.client.proto.ResUserAddChip
                 * @instance
                 */
                ResUserAddChip.prototype.propid = 0;

                /**
                 * ResUserAddChip propcount.
                 * @member {number} propcount
                 * @memberof system.client.proto.ResUserAddChip
                 * @instance
                 */
                ResUserAddChip.prototype.propcount = 0;

                /**
                 * ResUserAddChip config.
                 * @member {string} config
                 * @memberof system.client.proto.ResUserAddChip
                 * @instance
                 */
                ResUserAddChip.prototype.config = "";

                /**
                 * Creates a new ResUserAddChip instance using the specified properties.
                 * @function create
                 * @memberof system.client.proto.ResUserAddChip
                 * @static
                 * @param {system.client.proto.IResUserAddChip=} [properties] Properties to set
                 * @returns {system.client.proto.ResUserAddChip} ResUserAddChip instance
                 */
                ResUserAddChip.create = function create(properties) {
                    return new ResUserAddChip(properties);
                };

                /**
                 * Encodes the specified ResUserAddChip message. Does not implicitly {@link system.client.proto.ResUserAddChip.verify|verify} messages.
                 * @function encode
                 * @memberof system.client.proto.ResUserAddChip
                 * @static
                 * @param {system.client.proto.IResUserAddChip} message ResUserAddChip message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResUserAddChip.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    if (message.propid != null && message.hasOwnProperty("propid"))
                        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.propid);
                    if (message.propcount != null && message.hasOwnProperty("propcount"))
                        writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.propcount);
                    if (message.config != null && message.hasOwnProperty("config"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.config);
                    return writer;
                };

                /**
                 * Encodes the specified ResUserAddChip message, length delimited. Does not implicitly {@link system.client.proto.ResUserAddChip.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof system.client.proto.ResUserAddChip
                 * @static
                 * @param {system.client.proto.IResUserAddChip} message ResUserAddChip message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResUserAddChip.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResUserAddChip message from the specified reader or buffer.
                 * @function decode
                 * @memberof system.client.proto.ResUserAddChip
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {system.client.proto.ResUserAddChip} ResUserAddChip
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResUserAddChip.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.system.client.proto.ResUserAddChip();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.status = reader.sint32();
                            break;
                        case 2:
                            message.propid = reader.sint32();
                            break;
                        case 3:
                            message.propcount = reader.sint32();
                            break;
                        case 4:
                            message.config = reader.string();
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
                 * Decodes a ResUserAddChip message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof system.client.proto.ResUserAddChip
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {system.client.proto.ResUserAddChip} ResUserAddChip
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResUserAddChip.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResUserAddChip message.
                 * @function verify
                 * @memberof system.client.proto.ResUserAddChip
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResUserAddChip.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                    if (message.propid != null && message.hasOwnProperty("propid"))
                        if (!$util.isInteger(message.propid))
                            return "propid: integer expected";
                    if (message.propcount != null && message.hasOwnProperty("propcount"))
                        if (!$util.isInteger(message.propcount))
                            return "propcount: integer expected";
                    if (message.config != null && message.hasOwnProperty("config"))
                        if (!$util.isString(message.config))
                            return "config: string expected";
                    return null;
                };

                /**
                 * Creates a ResUserAddChip message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof system.client.proto.ResUserAddChip
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {system.client.proto.ResUserAddChip} ResUserAddChip
                 */
                ResUserAddChip.fromObject = function fromObject(object) {
                    if (object instanceof $root.system.client.proto.ResUserAddChip)
                        return object;
                    var message = new $root.system.client.proto.ResUserAddChip();
                    if (object.status != null)
                        message.status = object.status | 0;
                    if (object.propid != null)
                        message.propid = object.propid | 0;
                    if (object.propcount != null)
                        message.propcount = object.propcount | 0;
                    if (object.config != null)
                        message.config = String(object.config);
                    return message;
                };

                /**
                 * Creates a plain object from a ResUserAddChip message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof system.client.proto.ResUserAddChip
                 * @static
                 * @param {system.client.proto.ResUserAddChip} message ResUserAddChip
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResUserAddChip.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.status = 0;
                        object.propid = 0;
                        object.propcount = 0;
                        object.config = "";
                    }
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = message.status;
                    if (message.propid != null && message.hasOwnProperty("propid"))
                        object.propid = message.propid;
                    if (message.propcount != null && message.hasOwnProperty("propcount"))
                        object.propcount = message.propcount;
                    if (message.config != null && message.hasOwnProperty("config"))
                        object.config = message.config;
                    return object;
                };

                /**
                 * Converts this ResUserAddChip to JSON.
                 * @function toJSON
                 * @memberof system.client.proto.ResUserAddChip
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResUserAddChip.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ResUserAddChip;
            })();

            return proto;
        })();

        return client;
    })();

    return system;
})();

module.exports = $root;
