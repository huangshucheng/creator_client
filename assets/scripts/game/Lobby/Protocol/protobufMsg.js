/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

// var $protobuf = require("protobufjs/minimal");
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
     * @property {number} eLoginReq=1 eLoginReq value
     * @property {number} eLoginRes=2 eLoginRes value
     * @property {number} eEmptyReq=3 eEmptyReq value
     * @property {number} eEmptyRes=4 eEmptyRes value
     */
    AuthProto.Cmd = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INVALED"] = 0;
        values[valuesById[1] = "eLoginReq"] = 1;
        values[valuesById[2] = "eLoginRes"] = 2;
        values[valuesById[3] = "eEmptyReq"] = 3;
        values[valuesById[4] = "eEmptyRes"] = 4;
        return values;
    })();

    AuthProto.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof AuthProto
         * @interface ILoginReq
         * @property {string|null} [name] LoginReq name
         * @property {number|null} [age] LoginReq age
         * @property {string|null} [email] LoginReq email
         */

        /**
         * Constructs a new LoginReq.
         * @memberof AuthProto
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {AuthProto.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq name.
         * @member {string} name
         * @memberof AuthProto.LoginReq
         * @instance
         */
        LoginReq.prototype.name = "";

        /**
         * LoginReq age.
         * @member {number} age
         * @memberof AuthProto.LoginReq
         * @instance
         */
        LoginReq.prototype.age = 0;

        /**
         * LoginReq email.
         * @member {string} email
         * @memberof AuthProto.LoginReq
         * @instance
         */
        LoginReq.prototype.email = "";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof AuthProto.LoginReq
         * @static
         * @param {AuthProto.ILoginReq=} [properties] Properties to set
         * @returns {AuthProto.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link AuthProto.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.LoginReq
         * @static
         * @param {AuthProto.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.age != null && message.hasOwnProperty("age"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.age);
            if (message.email != null && message.hasOwnProperty("email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link AuthProto.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.LoginReq
         * @static
         * @param {AuthProto.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.age = reader.int32();
                    break;
                case 3:
                    message.email = reader.string();
                    break;
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
         * @memberof AuthProto.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.LoginReq} LoginReq
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
         * @memberof AuthProto.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.age != null && message.hasOwnProperty("age"))
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.LoginReq)
                return object;
            var message = new $root.AuthProto.LoginReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.age != null)
                message.age = object.age | 0;
            if (object.email != null)
                message.email = String(object.email);
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.LoginReq
         * @static
         * @param {AuthProto.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.age = 0;
                object.email = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof AuthProto.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginReq;
    })();

    AuthProto.LoginRes = (function() {

        /**
         * Properties of a LoginRes.
         * @memberof AuthProto
         * @interface ILoginRes
         * @property {number|null} [status] LoginRes status
         */

        /**
         * Constructs a new LoginRes.
         * @memberof AuthProto
         * @classdesc Represents a LoginRes.
         * @implements ILoginRes
         * @constructor
         * @param {AuthProto.ILoginRes=} [properties] Properties to set
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
         * @memberof AuthProto.LoginRes
         * @instance
         */
        LoginRes.prototype.status = 0;

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @function create
         * @memberof AuthProto.LoginRes
         * @static
         * @param {AuthProto.ILoginRes=} [properties] Properties to set
         * @returns {AuthProto.LoginRes} LoginRes instance
         */
        LoginRes.create = function create(properties) {
            return new LoginRes(properties);
        };

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link AuthProto.LoginRes.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.LoginRes
         * @static
         * @param {AuthProto.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link AuthProto.LoginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.LoginRes
         * @static
         * @param {AuthProto.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.LoginRes();
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
         * Decodes a LoginRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.LoginRes} LoginRes
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
         * @memberof AuthProto.LoginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.LoginRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.LoginRes} LoginRes
         */
        LoginRes.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.LoginRes)
                return object;
            var message = new $root.AuthProto.LoginRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.LoginRes
         * @static
         * @param {AuthProto.LoginRes} message LoginRes
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
         * @memberof AuthProto.LoginRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRes;
    })();

    AuthProto.EmptyReq = (function() {

        /**
         * Properties of an EmptyReq.
         * @memberof AuthProto
         * @interface IEmptyReq
         */

        /**
         * Constructs a new EmptyReq.
         * @memberof AuthProto
         * @classdesc Represents an EmptyReq.
         * @implements IEmptyReq
         * @constructor
         * @param {AuthProto.IEmptyReq=} [properties] Properties to set
         */
        function EmptyReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new EmptyReq instance using the specified properties.
         * @function create
         * @memberof AuthProto.EmptyReq
         * @static
         * @param {AuthProto.IEmptyReq=} [properties] Properties to set
         * @returns {AuthProto.EmptyReq} EmptyReq instance
         */
        EmptyReq.create = function create(properties) {
            return new EmptyReq(properties);
        };

        /**
         * Encodes the specified EmptyReq message. Does not implicitly {@link AuthProto.EmptyReq.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.EmptyReq
         * @static
         * @param {AuthProto.IEmptyReq} message EmptyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified EmptyReq message, length delimited. Does not implicitly {@link AuthProto.EmptyReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.EmptyReq
         * @static
         * @param {AuthProto.IEmptyReq} message EmptyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EmptyReq message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.EmptyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.EmptyReq} EmptyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.EmptyReq();
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
         * Decodes an EmptyReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.EmptyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.EmptyReq} EmptyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EmptyReq message.
         * @function verify
         * @memberof AuthProto.EmptyReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EmptyReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an EmptyReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.EmptyReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.EmptyReq} EmptyReq
         */
        EmptyReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.EmptyReq)
                return object;
            return new $root.AuthProto.EmptyReq();
        };

        /**
         * Creates a plain object from an EmptyReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.EmptyReq
         * @static
         * @param {AuthProto.EmptyReq} message EmptyReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmptyReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this EmptyReq to JSON.
         * @function toJSON
         * @memberof AuthProto.EmptyReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmptyReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EmptyReq;
    })();

    AuthProto.EmptyRes = (function() {

        /**
         * Properties of an EmptyRes.
         * @memberof AuthProto
         * @interface IEmptyRes
         */

        /**
         * Constructs a new EmptyRes.
         * @memberof AuthProto
         * @classdesc Represents an EmptyRes.
         * @implements IEmptyRes
         * @constructor
         * @param {AuthProto.IEmptyRes=} [properties] Properties to set
         */
        function EmptyRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new EmptyRes instance using the specified properties.
         * @function create
         * @memberof AuthProto.EmptyRes
         * @static
         * @param {AuthProto.IEmptyRes=} [properties] Properties to set
         * @returns {AuthProto.EmptyRes} EmptyRes instance
         */
        EmptyRes.create = function create(properties) {
            return new EmptyRes(properties);
        };

        /**
         * Encodes the specified EmptyRes message. Does not implicitly {@link AuthProto.EmptyRes.verify|verify} messages.
         * @function encode
         * @memberof AuthProto.EmptyRes
         * @static
         * @param {AuthProto.IEmptyRes} message EmptyRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified EmptyRes message, length delimited. Does not implicitly {@link AuthProto.EmptyRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthProto.EmptyRes
         * @static
         * @param {AuthProto.IEmptyRes} message EmptyRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EmptyRes message from the specified reader or buffer.
         * @function decode
         * @memberof AuthProto.EmptyRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthProto.EmptyRes} EmptyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthProto.EmptyRes();
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
         * Decodes an EmptyRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthProto.EmptyRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthProto.EmptyRes} EmptyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EmptyRes message.
         * @function verify
         * @memberof AuthProto.EmptyRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EmptyRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an EmptyRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthProto.EmptyRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthProto.EmptyRes} EmptyRes
         */
        EmptyRes.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthProto.EmptyRes)
                return object;
            return new $root.AuthProto.EmptyRes();
        };

        /**
         * Creates a plain object from an EmptyRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthProto.EmptyRes
         * @static
         * @param {AuthProto.EmptyRes} message EmptyRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmptyRes.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this EmptyRes to JSON.
         * @function toJSON
         * @memberof AuthProto.EmptyRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmptyRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EmptyRes;
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

module.exports = $root;
