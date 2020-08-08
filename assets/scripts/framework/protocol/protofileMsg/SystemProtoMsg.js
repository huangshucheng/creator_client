/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.SystemProto = (function() {

    /**
     * Namespace SystemProto.
     * @exports SystemProto
     * @namespace
     */
    var SystemProto = {};

    /**
     * Cmd enum.
     * @name SystemProto.Cmd
     * @enum {string}
     * @property {number} INVALED=0 INVALED value
     * @property {number} eLoginRewardConfigReq=1 eLoginRewardConfigReq value
     * @property {number} eLoginRewardConfigRes=2 eLoginRewardConfigRes value
     * @property {number} eLoginRewardSignReq=3 eLoginRewardSignReq value
     * @property {number} eLoginRewardSignRes=4 eLoginRewardSignRes value
     * @property {number} eUserShareReq=5 eUserShareReq value
     * @property {number} eUserShareRes=6 eUserShareRes value
     * @property {number} eUserAddChipReq=7 eUserAddChipReq value
     * @property {number} eUserAddChipRes=8 eUserAddChipRes value
     */
    SystemProto.Cmd = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INVALED"] = 0;
        values[valuesById[1] = "eLoginRewardConfigReq"] = 1;
        values[valuesById[2] = "eLoginRewardConfigRes"] = 2;
        values[valuesById[3] = "eLoginRewardSignReq"] = 3;
        values[valuesById[4] = "eLoginRewardSignRes"] = 4;
        values[valuesById[5] = "eUserShareReq"] = 5;
        values[valuesById[6] = "eUserShareRes"] = 6;
        values[valuesById[7] = "eUserAddChipReq"] = 7;
        values[valuesById[8] = "eUserAddChipRes"] = 8;
        return values;
    })();

    SystemProto.LoginRewardConfigReq = (function() {

        /**
         * Properties of a LoginRewardConfigReq.
         * @memberof SystemProto
         * @interface ILoginRewardConfigReq
         */

        /**
         * Constructs a new LoginRewardConfigReq.
         * @memberof SystemProto
         * @classdesc Represents a LoginRewardConfigReq.
         * @implements ILoginRewardConfigReq
         * @constructor
         * @param {SystemProto.ILoginRewardConfigReq=} [properties] Properties to set
         */
        function LoginRewardConfigReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LoginRewardConfigReq instance using the specified properties.
         * @function create
         * @memberof SystemProto.LoginRewardConfigReq
         * @static
         * @param {SystemProto.ILoginRewardConfigReq=} [properties] Properties to set
         * @returns {SystemProto.LoginRewardConfigReq} LoginRewardConfigReq instance
         */
        LoginRewardConfigReq.create = function create(properties) {
            return new LoginRewardConfigReq(properties);
        };

        /**
         * Encodes the specified LoginRewardConfigReq message. Does not implicitly {@link SystemProto.LoginRewardConfigReq.verify|verify} messages.
         * @function encode
         * @memberof SystemProto.LoginRewardConfigReq
         * @static
         * @param {SystemProto.ILoginRewardConfigReq} message LoginRewardConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRewardConfigReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LoginRewardConfigReq message, length delimited. Does not implicitly {@link SystemProto.LoginRewardConfigReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SystemProto.LoginRewardConfigReq
         * @static
         * @param {SystemProto.ILoginRewardConfigReq} message LoginRewardConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRewardConfigReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRewardConfigReq message from the specified reader or buffer.
         * @function decode
         * @memberof SystemProto.LoginRewardConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SystemProto.LoginRewardConfigReq} LoginRewardConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRewardConfigReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SystemProto.LoginRewardConfigReq();
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
         * Decodes a LoginRewardConfigReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SystemProto.LoginRewardConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SystemProto.LoginRewardConfigReq} LoginRewardConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRewardConfigReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRewardConfigReq message.
         * @function verify
         * @memberof SystemProto.LoginRewardConfigReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRewardConfigReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a LoginRewardConfigReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SystemProto.LoginRewardConfigReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SystemProto.LoginRewardConfigReq} LoginRewardConfigReq
         */
        LoginRewardConfigReq.fromObject = function fromObject(object) {
            if (object instanceof $root.SystemProto.LoginRewardConfigReq)
                return object;
            return new $root.SystemProto.LoginRewardConfigReq();
        };

        /**
         * Creates a plain object from a LoginRewardConfigReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SystemProto.LoginRewardConfigReq
         * @static
         * @param {SystemProto.LoginRewardConfigReq} message LoginRewardConfigReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRewardConfigReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this LoginRewardConfigReq to JSON.
         * @function toJSON
         * @memberof SystemProto.LoginRewardConfigReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRewardConfigReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRewardConfigReq;
    })();

    SystemProto.LoginRewardConfigRes = (function() {

        /**
         * Properties of a LoginRewardConfigRes.
         * @memberof SystemProto
         * @interface ILoginRewardConfigRes
         * @property {number} status LoginRewardConfigRes status
         * @property {number|null} [signdays] LoginRewardConfigRes signdays
         * @property {boolean|null} [istodaysign] LoginRewardConfigRes istodaysign
         * @property {string|null} [config] LoginRewardConfigRes config
         */

        /**
         * Constructs a new LoginRewardConfigRes.
         * @memberof SystemProto
         * @classdesc Represents a LoginRewardConfigRes.
         * @implements ILoginRewardConfigRes
         * @constructor
         * @param {SystemProto.ILoginRewardConfigRes=} [properties] Properties to set
         */
        function LoginRewardConfigRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRewardConfigRes status.
         * @member {number} status
         * @memberof SystemProto.LoginRewardConfigRes
         * @instance
         */
        LoginRewardConfigRes.prototype.status = 0;

        /**
         * LoginRewardConfigRes signdays.
         * @member {number} signdays
         * @memberof SystemProto.LoginRewardConfigRes
         * @instance
         */
        LoginRewardConfigRes.prototype.signdays = 0;

        /**
         * LoginRewardConfigRes istodaysign.
         * @member {boolean} istodaysign
         * @memberof SystemProto.LoginRewardConfigRes
         * @instance
         */
        LoginRewardConfigRes.prototype.istodaysign = false;

        /**
         * LoginRewardConfigRes config.
         * @member {string} config
         * @memberof SystemProto.LoginRewardConfigRes
         * @instance
         */
        LoginRewardConfigRes.prototype.config = "";

        /**
         * Creates a new LoginRewardConfigRes instance using the specified properties.
         * @function create
         * @memberof SystemProto.LoginRewardConfigRes
         * @static
         * @param {SystemProto.ILoginRewardConfigRes=} [properties] Properties to set
         * @returns {SystemProto.LoginRewardConfigRes} LoginRewardConfigRes instance
         */
        LoginRewardConfigRes.create = function create(properties) {
            return new LoginRewardConfigRes(properties);
        };

        /**
         * Encodes the specified LoginRewardConfigRes message. Does not implicitly {@link SystemProto.LoginRewardConfigRes.verify|verify} messages.
         * @function encode
         * @memberof SystemProto.LoginRewardConfigRes
         * @static
         * @param {SystemProto.ILoginRewardConfigRes} message LoginRewardConfigRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRewardConfigRes.encode = function encode(message, writer) {
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
         * Encodes the specified LoginRewardConfigRes message, length delimited. Does not implicitly {@link SystemProto.LoginRewardConfigRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SystemProto.LoginRewardConfigRes
         * @static
         * @param {SystemProto.ILoginRewardConfigRes} message LoginRewardConfigRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRewardConfigRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRewardConfigRes message from the specified reader or buffer.
         * @function decode
         * @memberof SystemProto.LoginRewardConfigRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SystemProto.LoginRewardConfigRes} LoginRewardConfigRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRewardConfigRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SystemProto.LoginRewardConfigRes();
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
         * Decodes a LoginRewardConfigRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SystemProto.LoginRewardConfigRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SystemProto.LoginRewardConfigRes} LoginRewardConfigRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRewardConfigRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRewardConfigRes message.
         * @function verify
         * @memberof SystemProto.LoginRewardConfigRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRewardConfigRes.verify = function verify(message) {
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
         * Creates a LoginRewardConfigRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SystemProto.LoginRewardConfigRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SystemProto.LoginRewardConfigRes} LoginRewardConfigRes
         */
        LoginRewardConfigRes.fromObject = function fromObject(object) {
            if (object instanceof $root.SystemProto.LoginRewardConfigRes)
                return object;
            var message = new $root.SystemProto.LoginRewardConfigRes();
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
         * Creates a plain object from a LoginRewardConfigRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SystemProto.LoginRewardConfigRes
         * @static
         * @param {SystemProto.LoginRewardConfigRes} message LoginRewardConfigRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRewardConfigRes.toObject = function toObject(message, options) {
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
         * Converts this LoginRewardConfigRes to JSON.
         * @function toJSON
         * @memberof SystemProto.LoginRewardConfigRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRewardConfigRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRewardConfigRes;
    })();

    SystemProto.LoginRewardSignReq = (function() {

        /**
         * Properties of a LoginRewardSignReq.
         * @memberof SystemProto
         * @interface ILoginRewardSignReq
         * @property {number} signofday LoginRewardSignReq signofday
         */

        /**
         * Constructs a new LoginRewardSignReq.
         * @memberof SystemProto
         * @classdesc Represents a LoginRewardSignReq.
         * @implements ILoginRewardSignReq
         * @constructor
         * @param {SystemProto.ILoginRewardSignReq=} [properties] Properties to set
         */
        function LoginRewardSignReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRewardSignReq signofday.
         * @member {number} signofday
         * @memberof SystemProto.LoginRewardSignReq
         * @instance
         */
        LoginRewardSignReq.prototype.signofday = 0;

        /**
         * Creates a new LoginRewardSignReq instance using the specified properties.
         * @function create
         * @memberof SystemProto.LoginRewardSignReq
         * @static
         * @param {SystemProto.ILoginRewardSignReq=} [properties] Properties to set
         * @returns {SystemProto.LoginRewardSignReq} LoginRewardSignReq instance
         */
        LoginRewardSignReq.create = function create(properties) {
            return new LoginRewardSignReq(properties);
        };

        /**
         * Encodes the specified LoginRewardSignReq message. Does not implicitly {@link SystemProto.LoginRewardSignReq.verify|verify} messages.
         * @function encode
         * @memberof SystemProto.LoginRewardSignReq
         * @static
         * @param {SystemProto.ILoginRewardSignReq} message LoginRewardSignReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRewardSignReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.signofday);
            return writer;
        };

        /**
         * Encodes the specified LoginRewardSignReq message, length delimited. Does not implicitly {@link SystemProto.LoginRewardSignReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SystemProto.LoginRewardSignReq
         * @static
         * @param {SystemProto.ILoginRewardSignReq} message LoginRewardSignReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRewardSignReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRewardSignReq message from the specified reader or buffer.
         * @function decode
         * @memberof SystemProto.LoginRewardSignReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SystemProto.LoginRewardSignReq} LoginRewardSignReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRewardSignReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SystemProto.LoginRewardSignReq();
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
         * Decodes a LoginRewardSignReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SystemProto.LoginRewardSignReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SystemProto.LoginRewardSignReq} LoginRewardSignReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRewardSignReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRewardSignReq message.
         * @function verify
         * @memberof SystemProto.LoginRewardSignReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRewardSignReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.signofday))
                return "signofday: integer expected";
            return null;
        };

        /**
         * Creates a LoginRewardSignReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SystemProto.LoginRewardSignReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SystemProto.LoginRewardSignReq} LoginRewardSignReq
         */
        LoginRewardSignReq.fromObject = function fromObject(object) {
            if (object instanceof $root.SystemProto.LoginRewardSignReq)
                return object;
            var message = new $root.SystemProto.LoginRewardSignReq();
            if (object.signofday != null)
                message.signofday = object.signofday | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginRewardSignReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SystemProto.LoginRewardSignReq
         * @static
         * @param {SystemProto.LoginRewardSignReq} message LoginRewardSignReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRewardSignReq.toObject = function toObject(message, options) {
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
         * Converts this LoginRewardSignReq to JSON.
         * @function toJSON
         * @memberof SystemProto.LoginRewardSignReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRewardSignReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRewardSignReq;
    })();

    SystemProto.LoginRewardSignRes = (function() {

        /**
         * Properties of a LoginRewardSignRes.
         * @memberof SystemProto
         * @interface ILoginRewardSignRes
         * @property {number} status LoginRewardSignRes status
         * @property {string|null} [rewardconfig] LoginRewardSignRes rewardconfig
         */

        /**
         * Constructs a new LoginRewardSignRes.
         * @memberof SystemProto
         * @classdesc Represents a LoginRewardSignRes.
         * @implements ILoginRewardSignRes
         * @constructor
         * @param {SystemProto.ILoginRewardSignRes=} [properties] Properties to set
         */
        function LoginRewardSignRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRewardSignRes status.
         * @member {number} status
         * @memberof SystemProto.LoginRewardSignRes
         * @instance
         */
        LoginRewardSignRes.prototype.status = 0;

        /**
         * LoginRewardSignRes rewardconfig.
         * @member {string} rewardconfig
         * @memberof SystemProto.LoginRewardSignRes
         * @instance
         */
        LoginRewardSignRes.prototype.rewardconfig = "";

        /**
         * Creates a new LoginRewardSignRes instance using the specified properties.
         * @function create
         * @memberof SystemProto.LoginRewardSignRes
         * @static
         * @param {SystemProto.ILoginRewardSignRes=} [properties] Properties to set
         * @returns {SystemProto.LoginRewardSignRes} LoginRewardSignRes instance
         */
        LoginRewardSignRes.create = function create(properties) {
            return new LoginRewardSignRes(properties);
        };

        /**
         * Encodes the specified LoginRewardSignRes message. Does not implicitly {@link SystemProto.LoginRewardSignRes.verify|verify} messages.
         * @function encode
         * @memberof SystemProto.LoginRewardSignRes
         * @static
         * @param {SystemProto.ILoginRewardSignRes} message LoginRewardSignRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRewardSignRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.rewardconfig != null && message.hasOwnProperty("rewardconfig"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.rewardconfig);
            return writer;
        };

        /**
         * Encodes the specified LoginRewardSignRes message, length delimited. Does not implicitly {@link SystemProto.LoginRewardSignRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SystemProto.LoginRewardSignRes
         * @static
         * @param {SystemProto.ILoginRewardSignRes} message LoginRewardSignRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRewardSignRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRewardSignRes message from the specified reader or buffer.
         * @function decode
         * @memberof SystemProto.LoginRewardSignRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SystemProto.LoginRewardSignRes} LoginRewardSignRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRewardSignRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SystemProto.LoginRewardSignRes();
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
         * Decodes a LoginRewardSignRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SystemProto.LoginRewardSignRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SystemProto.LoginRewardSignRes} LoginRewardSignRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRewardSignRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRewardSignRes message.
         * @function verify
         * @memberof SystemProto.LoginRewardSignRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRewardSignRes.verify = function verify(message) {
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
         * Creates a LoginRewardSignRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SystemProto.LoginRewardSignRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SystemProto.LoginRewardSignRes} LoginRewardSignRes
         */
        LoginRewardSignRes.fromObject = function fromObject(object) {
            if (object instanceof $root.SystemProto.LoginRewardSignRes)
                return object;
            var message = new $root.SystemProto.LoginRewardSignRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.rewardconfig != null)
                message.rewardconfig = String(object.rewardconfig);
            return message;
        };

        /**
         * Creates a plain object from a LoginRewardSignRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SystemProto.LoginRewardSignRes
         * @static
         * @param {SystemProto.LoginRewardSignRes} message LoginRewardSignRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRewardSignRes.toObject = function toObject(message, options) {
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
         * Converts this LoginRewardSignRes to JSON.
         * @function toJSON
         * @memberof SystemProto.LoginRewardSignRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRewardSignRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRewardSignRes;
    })();

    SystemProto.UserShareReq = (function() {

        /**
         * Properties of a UserShareReq.
         * @memberof SystemProto
         * @interface IUserShareReq
         */

        /**
         * Constructs a new UserShareReq.
         * @memberof SystemProto
         * @classdesc Represents a UserShareReq.
         * @implements IUserShareReq
         * @constructor
         * @param {SystemProto.IUserShareReq=} [properties] Properties to set
         */
        function UserShareReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UserShareReq instance using the specified properties.
         * @function create
         * @memberof SystemProto.UserShareReq
         * @static
         * @param {SystemProto.IUserShareReq=} [properties] Properties to set
         * @returns {SystemProto.UserShareReq} UserShareReq instance
         */
        UserShareReq.create = function create(properties) {
            return new UserShareReq(properties);
        };

        /**
         * Encodes the specified UserShareReq message. Does not implicitly {@link SystemProto.UserShareReq.verify|verify} messages.
         * @function encode
         * @memberof SystemProto.UserShareReq
         * @static
         * @param {SystemProto.IUserShareReq} message UserShareReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserShareReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserShareReq message, length delimited. Does not implicitly {@link SystemProto.UserShareReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SystemProto.UserShareReq
         * @static
         * @param {SystemProto.IUserShareReq} message UserShareReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserShareReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserShareReq message from the specified reader or buffer.
         * @function decode
         * @memberof SystemProto.UserShareReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SystemProto.UserShareReq} UserShareReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserShareReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SystemProto.UserShareReq();
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
         * Decodes a UserShareReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SystemProto.UserShareReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SystemProto.UserShareReq} UserShareReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserShareReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserShareReq message.
         * @function verify
         * @memberof SystemProto.UserShareReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserShareReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a UserShareReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SystemProto.UserShareReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SystemProto.UserShareReq} UserShareReq
         */
        UserShareReq.fromObject = function fromObject(object) {
            if (object instanceof $root.SystemProto.UserShareReq)
                return object;
            return new $root.SystemProto.UserShareReq();
        };

        /**
         * Creates a plain object from a UserShareReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SystemProto.UserShareReq
         * @static
         * @param {SystemProto.UserShareReq} message UserShareReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserShareReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserShareReq to JSON.
         * @function toJSON
         * @memberof SystemProto.UserShareReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserShareReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserShareReq;
    })();

    SystemProto.UserShareRes = (function() {

        /**
         * Properties of a UserShareRes.
         * @memberof SystemProto
         * @interface IUserShareRes
         * @property {number} status UserShareRes status
         */

        /**
         * Constructs a new UserShareRes.
         * @memberof SystemProto
         * @classdesc Represents a UserShareRes.
         * @implements IUserShareRes
         * @constructor
         * @param {SystemProto.IUserShareRes=} [properties] Properties to set
         */
        function UserShareRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserShareRes status.
         * @member {number} status
         * @memberof SystemProto.UserShareRes
         * @instance
         */
        UserShareRes.prototype.status = 0;

        /**
         * Creates a new UserShareRes instance using the specified properties.
         * @function create
         * @memberof SystemProto.UserShareRes
         * @static
         * @param {SystemProto.IUserShareRes=} [properties] Properties to set
         * @returns {SystemProto.UserShareRes} UserShareRes instance
         */
        UserShareRes.create = function create(properties) {
            return new UserShareRes(properties);
        };

        /**
         * Encodes the specified UserShareRes message. Does not implicitly {@link SystemProto.UserShareRes.verify|verify} messages.
         * @function encode
         * @memberof SystemProto.UserShareRes
         * @static
         * @param {SystemProto.IUserShareRes} message UserShareRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserShareRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            return writer;
        };

        /**
         * Encodes the specified UserShareRes message, length delimited. Does not implicitly {@link SystemProto.UserShareRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SystemProto.UserShareRes
         * @static
         * @param {SystemProto.IUserShareRes} message UserShareRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserShareRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserShareRes message from the specified reader or buffer.
         * @function decode
         * @memberof SystemProto.UserShareRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SystemProto.UserShareRes} UserShareRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserShareRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SystemProto.UserShareRes();
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
         * Decodes a UserShareRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SystemProto.UserShareRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SystemProto.UserShareRes} UserShareRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserShareRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserShareRes message.
         * @function verify
         * @memberof SystemProto.UserShareRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserShareRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates a UserShareRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SystemProto.UserShareRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SystemProto.UserShareRes} UserShareRes
         */
        UserShareRes.fromObject = function fromObject(object) {
            if (object instanceof $root.SystemProto.UserShareRes)
                return object;
            var message = new $root.SystemProto.UserShareRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserShareRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SystemProto.UserShareRes
         * @static
         * @param {SystemProto.UserShareRes} message UserShareRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserShareRes.toObject = function toObject(message, options) {
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
         * Converts this UserShareRes to JSON.
         * @function toJSON
         * @memberof SystemProto.UserShareRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserShareRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserShareRes;
    })();

    SystemProto.UserAddChipReq = (function() {

        /**
         * Properties of a UserAddChipReq.
         * @memberof SystemProto
         * @interface IUserAddChipReq
         * @property {number} propid UserAddChipReq propid
         * @property {number} propcount UserAddChipReq propcount
         * @property {string|null} [config] UserAddChipReq config
         */

        /**
         * Constructs a new UserAddChipReq.
         * @memberof SystemProto
         * @classdesc Represents a UserAddChipReq.
         * @implements IUserAddChipReq
         * @constructor
         * @param {SystemProto.IUserAddChipReq=} [properties] Properties to set
         */
        function UserAddChipReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserAddChipReq propid.
         * @member {number} propid
         * @memberof SystemProto.UserAddChipReq
         * @instance
         */
        UserAddChipReq.prototype.propid = 0;

        /**
         * UserAddChipReq propcount.
         * @member {number} propcount
         * @memberof SystemProto.UserAddChipReq
         * @instance
         */
        UserAddChipReq.prototype.propcount = 0;

        /**
         * UserAddChipReq config.
         * @member {string} config
         * @memberof SystemProto.UserAddChipReq
         * @instance
         */
        UserAddChipReq.prototype.config = "";

        /**
         * Creates a new UserAddChipReq instance using the specified properties.
         * @function create
         * @memberof SystemProto.UserAddChipReq
         * @static
         * @param {SystemProto.IUserAddChipReq=} [properties] Properties to set
         * @returns {SystemProto.UserAddChipReq} UserAddChipReq instance
         */
        UserAddChipReq.create = function create(properties) {
            return new UserAddChipReq(properties);
        };

        /**
         * Encodes the specified UserAddChipReq message. Does not implicitly {@link SystemProto.UserAddChipReq.verify|verify} messages.
         * @function encode
         * @memberof SystemProto.UserAddChipReq
         * @static
         * @param {SystemProto.IUserAddChipReq} message UserAddChipReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserAddChipReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.propid);
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.propcount);
            if (message.config != null && message.hasOwnProperty("config"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.config);
            return writer;
        };

        /**
         * Encodes the specified UserAddChipReq message, length delimited. Does not implicitly {@link SystemProto.UserAddChipReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SystemProto.UserAddChipReq
         * @static
         * @param {SystemProto.IUserAddChipReq} message UserAddChipReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserAddChipReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserAddChipReq message from the specified reader or buffer.
         * @function decode
         * @memberof SystemProto.UserAddChipReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SystemProto.UserAddChipReq} UserAddChipReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserAddChipReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SystemProto.UserAddChipReq();
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
         * Decodes a UserAddChipReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SystemProto.UserAddChipReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SystemProto.UserAddChipReq} UserAddChipReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserAddChipReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserAddChipReq message.
         * @function verify
         * @memberof SystemProto.UserAddChipReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserAddChipReq.verify = function verify(message) {
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
         * Creates a UserAddChipReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SystemProto.UserAddChipReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SystemProto.UserAddChipReq} UserAddChipReq
         */
        UserAddChipReq.fromObject = function fromObject(object) {
            if (object instanceof $root.SystemProto.UserAddChipReq)
                return object;
            var message = new $root.SystemProto.UserAddChipReq();
            if (object.propid != null)
                message.propid = object.propid | 0;
            if (object.propcount != null)
                message.propcount = object.propcount | 0;
            if (object.config != null)
                message.config = String(object.config);
            return message;
        };

        /**
         * Creates a plain object from a UserAddChipReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SystemProto.UserAddChipReq
         * @static
         * @param {SystemProto.UserAddChipReq} message UserAddChipReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserAddChipReq.toObject = function toObject(message, options) {
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
         * Converts this UserAddChipReq to JSON.
         * @function toJSON
         * @memberof SystemProto.UserAddChipReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserAddChipReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserAddChipReq;
    })();

    SystemProto.UserAddChipRes = (function() {

        /**
         * Properties of a UserAddChipRes.
         * @memberof SystemProto
         * @interface IUserAddChipRes
         * @property {number} status UserAddChipRes status
         * @property {number|null} [propid] UserAddChipRes propid
         * @property {number|null} [propcount] UserAddChipRes propcount
         * @property {string|null} [config] UserAddChipRes config
         */

        /**
         * Constructs a new UserAddChipRes.
         * @memberof SystemProto
         * @classdesc Represents a UserAddChipRes.
         * @implements IUserAddChipRes
         * @constructor
         * @param {SystemProto.IUserAddChipRes=} [properties] Properties to set
         */
        function UserAddChipRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserAddChipRes status.
         * @member {number} status
         * @memberof SystemProto.UserAddChipRes
         * @instance
         */
        UserAddChipRes.prototype.status = 0;

        /**
         * UserAddChipRes propid.
         * @member {number} propid
         * @memberof SystemProto.UserAddChipRes
         * @instance
         */
        UserAddChipRes.prototype.propid = 0;

        /**
         * UserAddChipRes propcount.
         * @member {number} propcount
         * @memberof SystemProto.UserAddChipRes
         * @instance
         */
        UserAddChipRes.prototype.propcount = 0;

        /**
         * UserAddChipRes config.
         * @member {string} config
         * @memberof SystemProto.UserAddChipRes
         * @instance
         */
        UserAddChipRes.prototype.config = "";

        /**
         * Creates a new UserAddChipRes instance using the specified properties.
         * @function create
         * @memberof SystemProto.UserAddChipRes
         * @static
         * @param {SystemProto.IUserAddChipRes=} [properties] Properties to set
         * @returns {SystemProto.UserAddChipRes} UserAddChipRes instance
         */
        UserAddChipRes.create = function create(properties) {
            return new UserAddChipRes(properties);
        };

        /**
         * Encodes the specified UserAddChipRes message. Does not implicitly {@link SystemProto.UserAddChipRes.verify|verify} messages.
         * @function encode
         * @memberof SystemProto.UserAddChipRes
         * @static
         * @param {SystemProto.IUserAddChipRes} message UserAddChipRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserAddChipRes.encode = function encode(message, writer) {
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
         * Encodes the specified UserAddChipRes message, length delimited. Does not implicitly {@link SystemProto.UserAddChipRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SystemProto.UserAddChipRes
         * @static
         * @param {SystemProto.IUserAddChipRes} message UserAddChipRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserAddChipRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserAddChipRes message from the specified reader or buffer.
         * @function decode
         * @memberof SystemProto.UserAddChipRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SystemProto.UserAddChipRes} UserAddChipRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserAddChipRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SystemProto.UserAddChipRes();
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
         * Decodes a UserAddChipRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SystemProto.UserAddChipRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SystemProto.UserAddChipRes} UserAddChipRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserAddChipRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserAddChipRes message.
         * @function verify
         * @memberof SystemProto.UserAddChipRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserAddChipRes.verify = function verify(message) {
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
         * Creates a UserAddChipRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SystemProto.UserAddChipRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SystemProto.UserAddChipRes} UserAddChipRes
         */
        UserAddChipRes.fromObject = function fromObject(object) {
            if (object instanceof $root.SystemProto.UserAddChipRes)
                return object;
            var message = new $root.SystemProto.UserAddChipRes();
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
         * Creates a plain object from a UserAddChipRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SystemProto.UserAddChipRes
         * @static
         * @param {SystemProto.UserAddChipRes} message UserAddChipRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserAddChipRes.toObject = function toObject(message, options) {
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
         * Converts this UserAddChipRes to JSON.
         * @function toJSON
         * @memberof SystemProto.UserAddChipRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserAddChipRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserAddChipRes;
    })();

    return SystemProto;
})();

module.exports = $root;
