/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.auth = (function() {

    /**
     * Namespace auth.
     * @exports auth
     * @namespace
     */
    var auth = {};

    auth.client = (function() {

        /**
         * Namespace client.
         * @memberof auth
         * @namespace
         */
        var client = {};

        client.proto = (function() {

            /**
             * Namespace proto.
             * @memberof auth.client
             * @namespace
             */
            var proto = {};

            /**
             * XY_ID enum.
             * @name auth.client.proto.XY_ID
             * @enum {string}
             * @property {number} INVALED=0 INVALED value
             * @property {number} REQ_UNAMEREGIST=10001 REQ_UNAMEREGIST value
             * @property {number} RES_UNAMEREGIST=10002 RES_UNAMEREGIST value
             * @property {number} REQ_UNAMELOGIN=10003 REQ_UNAMELOGIN value
             * @property {number} RES_UNAMELOGIN=10004 RES_UNAMELOGIN value
             * @property {number} REQ_GUESTLOGIN=10005 REQ_GUESTLOGIN value
             * @property {number} RES_GUESTLOGIN=10006 RES_GUESTLOGIN value
             * @property {number} REQ_WECHATLOGIN=10007 REQ_WECHATLOGIN value
             * @property {number} RES_WECHATLOGIN=10008 RES_WECHATLOGIN value
             * @property {number} REQ_WECHATSESSIONLOGIN=10009 REQ_WECHATSESSIONLOGIN value
             * @property {number} RES_WECHATSESSIONLOGIN=10010 RES_WECHATSESSIONLOGIN value
             * @property {number} REQ_LOGINOUT=10011 REQ_LOGINOUT value
             * @property {number} RES_LOGINOUT=10012 RES_LOGINOUT value
             * @property {number} PUSH_RELOGIN=10013 PUSH_RELOGIN value
             * @property {number} REQ_USERCENTERINFO=10014 REQ_USERCENTERINFO value
             * @property {number} RES_USERCENTERINFO=10015 RES_USERCENTERINFO value
             */
            proto.XY_ID = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "INVALED"] = 0;
                values[valuesById[10001] = "REQ_UNAMEREGIST"] = 10001;
                values[valuesById[10002] = "RES_UNAMEREGIST"] = 10002;
                values[valuesById[10003] = "REQ_UNAMELOGIN"] = 10003;
                values[valuesById[10004] = "RES_UNAMELOGIN"] = 10004;
                values[valuesById[10005] = "REQ_GUESTLOGIN"] = 10005;
                values[valuesById[10006] = "RES_GUESTLOGIN"] = 10006;
                values[valuesById[10007] = "REQ_WECHATLOGIN"] = 10007;
                values[valuesById[10008] = "RES_WECHATLOGIN"] = 10008;
                values[valuesById[10009] = "REQ_WECHATSESSIONLOGIN"] = 10009;
                values[valuesById[10010] = "RES_WECHATSESSIONLOGIN"] = 10010;
                values[valuesById[10011] = "REQ_LOGINOUT"] = 10011;
                values[valuesById[10012] = "RES_LOGINOUT"] = 10012;
                values[valuesById[10013] = "PUSH_RELOGIN"] = 10013;
                values[valuesById[10014] = "REQ_USERCENTERINFO"] = 10014;
                values[valuesById[10015] = "RES_USERCENTERINFO"] = 10015;
                return values;
            })();

            proto.ReqUnameRegist = (function() {

                /**
                 * Properties of a ReqUnameRegist.
                 * @memberof auth.client.proto
                 * @interface IReqUnameRegist
                 * @property {string} uname ReqUnameRegist uname
                 * @property {string} upwdmd5 ReqUnameRegist upwdmd5
                 */

                /**
                 * Constructs a new ReqUnameRegist.
                 * @memberof auth.client.proto
                 * @classdesc Represents a ReqUnameRegist.
                 * @implements IReqUnameRegist
                 * @constructor
                 * @param {auth.client.proto.IReqUnameRegist=} [properties] Properties to set
                 */
                function ReqUnameRegist(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReqUnameRegist uname.
                 * @member {string} uname
                 * @memberof auth.client.proto.ReqUnameRegist
                 * @instance
                 */
                ReqUnameRegist.prototype.uname = "";

                /**
                 * ReqUnameRegist upwdmd5.
                 * @member {string} upwdmd5
                 * @memberof auth.client.proto.ReqUnameRegist
                 * @instance
                 */
                ReqUnameRegist.prototype.upwdmd5 = "";

                /**
                 * Creates a new ReqUnameRegist instance using the specified properties.
                 * @function create
                 * @memberof auth.client.proto.ReqUnameRegist
                 * @static
                 * @param {auth.client.proto.IReqUnameRegist=} [properties] Properties to set
                 * @returns {auth.client.proto.ReqUnameRegist} ReqUnameRegist instance
                 */
                ReqUnameRegist.create = function create(properties) {
                    return new ReqUnameRegist(properties);
                };

                /**
                 * Encodes the specified ReqUnameRegist message. Does not implicitly {@link auth.client.proto.ReqUnameRegist.verify|verify} messages.
                 * @function encode
                 * @memberof auth.client.proto.ReqUnameRegist
                 * @static
                 * @param {auth.client.proto.IReqUnameRegist} message ReqUnameRegist message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqUnameRegist.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uname);
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.upwdmd5);
                    return writer;
                };

                /**
                 * Encodes the specified ReqUnameRegist message, length delimited. Does not implicitly {@link auth.client.proto.ReqUnameRegist.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof auth.client.proto.ReqUnameRegist
                 * @static
                 * @param {auth.client.proto.IReqUnameRegist} message ReqUnameRegist message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqUnameRegist.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqUnameRegist message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.client.proto.ReqUnameRegist
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {auth.client.proto.ReqUnameRegist} ReqUnameRegist
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqUnameRegist.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.client.proto.ReqUnameRegist();
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
                 * Decodes a ReqUnameRegist message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof auth.client.proto.ReqUnameRegist
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {auth.client.proto.ReqUnameRegist} ReqUnameRegist
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqUnameRegist.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqUnameRegist message.
                 * @function verify
                 * @memberof auth.client.proto.ReqUnameRegist
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqUnameRegist.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.uname))
                        return "uname: string expected";
                    if (!$util.isString(message.upwdmd5))
                        return "upwdmd5: string expected";
                    return null;
                };

                /**
                 * Creates a ReqUnameRegist message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.client.proto.ReqUnameRegist
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {auth.client.proto.ReqUnameRegist} ReqUnameRegist
                 */
                ReqUnameRegist.fromObject = function fromObject(object) {
                    if (object instanceof $root.auth.client.proto.ReqUnameRegist)
                        return object;
                    var message = new $root.auth.client.proto.ReqUnameRegist();
                    if (object.uname != null)
                        message.uname = String(object.uname);
                    if (object.upwdmd5 != null)
                        message.upwdmd5 = String(object.upwdmd5);
                    return message;
                };

                /**
                 * Creates a plain object from a ReqUnameRegist message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.client.proto.ReqUnameRegist
                 * @static
                 * @param {auth.client.proto.ReqUnameRegist} message ReqUnameRegist
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqUnameRegist.toObject = function toObject(message, options) {
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
                 * Converts this ReqUnameRegist to JSON.
                 * @function toJSON
                 * @memberof auth.client.proto.ReqUnameRegist
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqUnameRegist.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqUnameRegist;
            })();

            proto.ResUnameRegist = (function() {

                /**
                 * Properties of a ResUnameRegist.
                 * @memberof auth.client.proto
                 * @interface IResUnameRegist
                 * @property {number} status ResUnameRegist status
                 */

                /**
                 * Constructs a new ResUnameRegist.
                 * @memberof auth.client.proto
                 * @classdesc Represents a ResUnameRegist.
                 * @implements IResUnameRegist
                 * @constructor
                 * @param {auth.client.proto.IResUnameRegist=} [properties] Properties to set
                 */
                function ResUnameRegist(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResUnameRegist status.
                 * @member {number} status
                 * @memberof auth.client.proto.ResUnameRegist
                 * @instance
                 */
                ResUnameRegist.prototype.status = 0;

                /**
                 * Creates a new ResUnameRegist instance using the specified properties.
                 * @function create
                 * @memberof auth.client.proto.ResUnameRegist
                 * @static
                 * @param {auth.client.proto.IResUnameRegist=} [properties] Properties to set
                 * @returns {auth.client.proto.ResUnameRegist} ResUnameRegist instance
                 */
                ResUnameRegist.create = function create(properties) {
                    return new ResUnameRegist(properties);
                };

                /**
                 * Encodes the specified ResUnameRegist message. Does not implicitly {@link auth.client.proto.ResUnameRegist.verify|verify} messages.
                 * @function encode
                 * @memberof auth.client.proto.ResUnameRegist
                 * @static
                 * @param {auth.client.proto.IResUnameRegist} message ResUnameRegist message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResUnameRegist.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified ResUnameRegist message, length delimited. Does not implicitly {@link auth.client.proto.ResUnameRegist.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof auth.client.proto.ResUnameRegist
                 * @static
                 * @param {auth.client.proto.IResUnameRegist} message ResUnameRegist message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResUnameRegist.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResUnameRegist message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.client.proto.ResUnameRegist
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {auth.client.proto.ResUnameRegist} ResUnameRegist
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResUnameRegist.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.client.proto.ResUnameRegist();
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
                 * Decodes a ResUnameRegist message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof auth.client.proto.ResUnameRegist
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {auth.client.proto.ResUnameRegist} ResUnameRegist
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResUnameRegist.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResUnameRegist message.
                 * @function verify
                 * @memberof auth.client.proto.ResUnameRegist
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResUnameRegist.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                    return null;
                };

                /**
                 * Creates a ResUnameRegist message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.client.proto.ResUnameRegist
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {auth.client.proto.ResUnameRegist} ResUnameRegist
                 */
                ResUnameRegist.fromObject = function fromObject(object) {
                    if (object instanceof $root.auth.client.proto.ResUnameRegist)
                        return object;
                    var message = new $root.auth.client.proto.ResUnameRegist();
                    if (object.status != null)
                        message.status = object.status | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ResUnameRegist message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.client.proto.ResUnameRegist
                 * @static
                 * @param {auth.client.proto.ResUnameRegist} message ResUnameRegist
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResUnameRegist.toObject = function toObject(message, options) {
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
                 * Converts this ResUnameRegist to JSON.
                 * @function toJSON
                 * @memberof auth.client.proto.ResUnameRegist
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResUnameRegist.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ResUnameRegist;
            })();

            proto.ReqUnameLogin = (function() {

                /**
                 * Properties of a ReqUnameLogin.
                 * @memberof auth.client.proto
                 * @interface IReqUnameLogin
                 * @property {string} uname ReqUnameLogin uname
                 * @property {string} upwd ReqUnameLogin upwd
                 */

                /**
                 * Constructs a new ReqUnameLogin.
                 * @memberof auth.client.proto
                 * @classdesc Represents a ReqUnameLogin.
                 * @implements IReqUnameLogin
                 * @constructor
                 * @param {auth.client.proto.IReqUnameLogin=} [properties] Properties to set
                 */
                function ReqUnameLogin(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReqUnameLogin uname.
                 * @member {string} uname
                 * @memberof auth.client.proto.ReqUnameLogin
                 * @instance
                 */
                ReqUnameLogin.prototype.uname = "";

                /**
                 * ReqUnameLogin upwd.
                 * @member {string} upwd
                 * @memberof auth.client.proto.ReqUnameLogin
                 * @instance
                 */
                ReqUnameLogin.prototype.upwd = "";

                /**
                 * Creates a new ReqUnameLogin instance using the specified properties.
                 * @function create
                 * @memberof auth.client.proto.ReqUnameLogin
                 * @static
                 * @param {auth.client.proto.IReqUnameLogin=} [properties] Properties to set
                 * @returns {auth.client.proto.ReqUnameLogin} ReqUnameLogin instance
                 */
                ReqUnameLogin.create = function create(properties) {
                    return new ReqUnameLogin(properties);
                };

                /**
                 * Encodes the specified ReqUnameLogin message. Does not implicitly {@link auth.client.proto.ReqUnameLogin.verify|verify} messages.
                 * @function encode
                 * @memberof auth.client.proto.ReqUnameLogin
                 * @static
                 * @param {auth.client.proto.IReqUnameLogin} message ReqUnameLogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqUnameLogin.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uname);
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.upwd);
                    return writer;
                };

                /**
                 * Encodes the specified ReqUnameLogin message, length delimited. Does not implicitly {@link auth.client.proto.ReqUnameLogin.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof auth.client.proto.ReqUnameLogin
                 * @static
                 * @param {auth.client.proto.IReqUnameLogin} message ReqUnameLogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqUnameLogin.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqUnameLogin message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.client.proto.ReqUnameLogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {auth.client.proto.ReqUnameLogin} ReqUnameLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqUnameLogin.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.client.proto.ReqUnameLogin();
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
                 * Decodes a ReqUnameLogin message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof auth.client.proto.ReqUnameLogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {auth.client.proto.ReqUnameLogin} ReqUnameLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqUnameLogin.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqUnameLogin message.
                 * @function verify
                 * @memberof auth.client.proto.ReqUnameLogin
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqUnameLogin.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.uname))
                        return "uname: string expected";
                    if (!$util.isString(message.upwd))
                        return "upwd: string expected";
                    return null;
                };

                /**
                 * Creates a ReqUnameLogin message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.client.proto.ReqUnameLogin
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {auth.client.proto.ReqUnameLogin} ReqUnameLogin
                 */
                ReqUnameLogin.fromObject = function fromObject(object) {
                    if (object instanceof $root.auth.client.proto.ReqUnameLogin)
                        return object;
                    var message = new $root.auth.client.proto.ReqUnameLogin();
                    if (object.uname != null)
                        message.uname = String(object.uname);
                    if (object.upwd != null)
                        message.upwd = String(object.upwd);
                    return message;
                };

                /**
                 * Creates a plain object from a ReqUnameLogin message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.client.proto.ReqUnameLogin
                 * @static
                 * @param {auth.client.proto.ReqUnameLogin} message ReqUnameLogin
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqUnameLogin.toObject = function toObject(message, options) {
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
                 * Converts this ReqUnameLogin to JSON.
                 * @function toJSON
                 * @memberof auth.client.proto.ReqUnameLogin
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqUnameLogin.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqUnameLogin;
            })();

            proto.ResUnameLogin = (function() {

                /**
                 * Properties of a ResUnameLogin.
                 * @memberof auth.client.proto
                 * @interface IResUnameLogin
                 * @property {number} status ResUnameLogin status
                 * @property {number|null} [uid] ResUnameLogin uid
                 * @property {string|null} [logininfo] ResUnameLogin logininfo
                 */

                /**
                 * Constructs a new ResUnameLogin.
                 * @memberof auth.client.proto
                 * @classdesc Represents a ResUnameLogin.
                 * @implements IResUnameLogin
                 * @constructor
                 * @param {auth.client.proto.IResUnameLogin=} [properties] Properties to set
                 */
                function ResUnameLogin(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResUnameLogin status.
                 * @member {number} status
                 * @memberof auth.client.proto.ResUnameLogin
                 * @instance
                 */
                ResUnameLogin.prototype.status = 0;

                /**
                 * ResUnameLogin uid.
                 * @member {number} uid
                 * @memberof auth.client.proto.ResUnameLogin
                 * @instance
                 */
                ResUnameLogin.prototype.uid = 0;

                /**
                 * ResUnameLogin logininfo.
                 * @member {string} logininfo
                 * @memberof auth.client.proto.ResUnameLogin
                 * @instance
                 */
                ResUnameLogin.prototype.logininfo = "";

                /**
                 * Creates a new ResUnameLogin instance using the specified properties.
                 * @function create
                 * @memberof auth.client.proto.ResUnameLogin
                 * @static
                 * @param {auth.client.proto.IResUnameLogin=} [properties] Properties to set
                 * @returns {auth.client.proto.ResUnameLogin} ResUnameLogin instance
                 */
                ResUnameLogin.create = function create(properties) {
                    return new ResUnameLogin(properties);
                };

                /**
                 * Encodes the specified ResUnameLogin message. Does not implicitly {@link auth.client.proto.ResUnameLogin.verify|verify} messages.
                 * @function encode
                 * @memberof auth.client.proto.ResUnameLogin
                 * @static
                 * @param {auth.client.proto.IResUnameLogin} message ResUnameLogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResUnameLogin.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.uid);
                    if (message.logininfo != null && message.hasOwnProperty("logininfo"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.logininfo);
                    return writer;
                };

                /**
                 * Encodes the specified ResUnameLogin message, length delimited. Does not implicitly {@link auth.client.proto.ResUnameLogin.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof auth.client.proto.ResUnameLogin
                 * @static
                 * @param {auth.client.proto.IResUnameLogin} message ResUnameLogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResUnameLogin.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResUnameLogin message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.client.proto.ResUnameLogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {auth.client.proto.ResUnameLogin} ResUnameLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResUnameLogin.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.client.proto.ResUnameLogin();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.status = reader.sint32();
                            break;
                        case 2:
                            message.uid = reader.sint32();
                            break;
                        case 3:
                            message.logininfo = reader.string();
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
                 * Decodes a ResUnameLogin message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof auth.client.proto.ResUnameLogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {auth.client.proto.ResUnameLogin} ResUnameLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResUnameLogin.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResUnameLogin message.
                 * @function verify
                 * @memberof auth.client.proto.ResUnameLogin
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResUnameLogin.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        if (!$util.isInteger(message.uid))
                            return "uid: integer expected";
                    if (message.logininfo != null && message.hasOwnProperty("logininfo"))
                        if (!$util.isString(message.logininfo))
                            return "logininfo: string expected";
                    return null;
                };

                /**
                 * Creates a ResUnameLogin message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.client.proto.ResUnameLogin
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {auth.client.proto.ResUnameLogin} ResUnameLogin
                 */
                ResUnameLogin.fromObject = function fromObject(object) {
                    if (object instanceof $root.auth.client.proto.ResUnameLogin)
                        return object;
                    var message = new $root.auth.client.proto.ResUnameLogin();
                    if (object.status != null)
                        message.status = object.status | 0;
                    if (object.uid != null)
                        message.uid = object.uid | 0;
                    if (object.logininfo != null)
                        message.logininfo = String(object.logininfo);
                    return message;
                };

                /**
                 * Creates a plain object from a ResUnameLogin message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.client.proto.ResUnameLogin
                 * @static
                 * @param {auth.client.proto.ResUnameLogin} message ResUnameLogin
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResUnameLogin.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.status = 0;
                        object.uid = 0;
                        object.logininfo = "";
                    }
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = message.status;
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        object.uid = message.uid;
                    if (message.logininfo != null && message.hasOwnProperty("logininfo"))
                        object.logininfo = message.logininfo;
                    return object;
                };

                /**
                 * Converts this ResUnameLogin to JSON.
                 * @function toJSON
                 * @memberof auth.client.proto.ResUnameLogin
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResUnameLogin.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ResUnameLogin;
            })();

            proto.ReqGuestLogin = (function() {

                /**
                 * Properties of a ReqGuestLogin.
                 * @memberof auth.client.proto
                 * @interface IReqGuestLogin
                 * @property {string} guestkey ReqGuestLogin guestkey
                 */

                /**
                 * Constructs a new ReqGuestLogin.
                 * @memberof auth.client.proto
                 * @classdesc Represents a ReqGuestLogin.
                 * @implements IReqGuestLogin
                 * @constructor
                 * @param {auth.client.proto.IReqGuestLogin=} [properties] Properties to set
                 */
                function ReqGuestLogin(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReqGuestLogin guestkey.
                 * @member {string} guestkey
                 * @memberof auth.client.proto.ReqGuestLogin
                 * @instance
                 */
                ReqGuestLogin.prototype.guestkey = "";

                /**
                 * Creates a new ReqGuestLogin instance using the specified properties.
                 * @function create
                 * @memberof auth.client.proto.ReqGuestLogin
                 * @static
                 * @param {auth.client.proto.IReqGuestLogin=} [properties] Properties to set
                 * @returns {auth.client.proto.ReqGuestLogin} ReqGuestLogin instance
                 */
                ReqGuestLogin.create = function create(properties) {
                    return new ReqGuestLogin(properties);
                };

                /**
                 * Encodes the specified ReqGuestLogin message. Does not implicitly {@link auth.client.proto.ReqGuestLogin.verify|verify} messages.
                 * @function encode
                 * @memberof auth.client.proto.ReqGuestLogin
                 * @static
                 * @param {auth.client.proto.IReqGuestLogin} message ReqGuestLogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqGuestLogin.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.guestkey);
                    return writer;
                };

                /**
                 * Encodes the specified ReqGuestLogin message, length delimited. Does not implicitly {@link auth.client.proto.ReqGuestLogin.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof auth.client.proto.ReqGuestLogin
                 * @static
                 * @param {auth.client.proto.IReqGuestLogin} message ReqGuestLogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqGuestLogin.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqGuestLogin message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.client.proto.ReqGuestLogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {auth.client.proto.ReqGuestLogin} ReqGuestLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqGuestLogin.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.client.proto.ReqGuestLogin();
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
                 * Decodes a ReqGuestLogin message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof auth.client.proto.ReqGuestLogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {auth.client.proto.ReqGuestLogin} ReqGuestLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqGuestLogin.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqGuestLogin message.
                 * @function verify
                 * @memberof auth.client.proto.ReqGuestLogin
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqGuestLogin.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.guestkey))
                        return "guestkey: string expected";
                    return null;
                };

                /**
                 * Creates a ReqGuestLogin message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.client.proto.ReqGuestLogin
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {auth.client.proto.ReqGuestLogin} ReqGuestLogin
                 */
                ReqGuestLogin.fromObject = function fromObject(object) {
                    if (object instanceof $root.auth.client.proto.ReqGuestLogin)
                        return object;
                    var message = new $root.auth.client.proto.ReqGuestLogin();
                    if (object.guestkey != null)
                        message.guestkey = String(object.guestkey);
                    return message;
                };

                /**
                 * Creates a plain object from a ReqGuestLogin message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.client.proto.ReqGuestLogin
                 * @static
                 * @param {auth.client.proto.ReqGuestLogin} message ReqGuestLogin
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqGuestLogin.toObject = function toObject(message, options) {
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
                 * Converts this ReqGuestLogin to JSON.
                 * @function toJSON
                 * @memberof auth.client.proto.ReqGuestLogin
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqGuestLogin.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqGuestLogin;
            })();

            proto.ResGuestLogin = (function() {

                /**
                 * Properties of a ResGuestLogin.
                 * @memberof auth.client.proto
                 * @interface IResGuestLogin
                 * @property {number} status ResGuestLogin status
                 * @property {number|null} [uid] ResGuestLogin uid
                 * @property {string|null} [logininfo] ResGuestLogin logininfo
                 */

                /**
                 * Constructs a new ResGuestLogin.
                 * @memberof auth.client.proto
                 * @classdesc Represents a ResGuestLogin.
                 * @implements IResGuestLogin
                 * @constructor
                 * @param {auth.client.proto.IResGuestLogin=} [properties] Properties to set
                 */
                function ResGuestLogin(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResGuestLogin status.
                 * @member {number} status
                 * @memberof auth.client.proto.ResGuestLogin
                 * @instance
                 */
                ResGuestLogin.prototype.status = 0;

                /**
                 * ResGuestLogin uid.
                 * @member {number} uid
                 * @memberof auth.client.proto.ResGuestLogin
                 * @instance
                 */
                ResGuestLogin.prototype.uid = 0;

                /**
                 * ResGuestLogin logininfo.
                 * @member {string} logininfo
                 * @memberof auth.client.proto.ResGuestLogin
                 * @instance
                 */
                ResGuestLogin.prototype.logininfo = "";

                /**
                 * Creates a new ResGuestLogin instance using the specified properties.
                 * @function create
                 * @memberof auth.client.proto.ResGuestLogin
                 * @static
                 * @param {auth.client.proto.IResGuestLogin=} [properties] Properties to set
                 * @returns {auth.client.proto.ResGuestLogin} ResGuestLogin instance
                 */
                ResGuestLogin.create = function create(properties) {
                    return new ResGuestLogin(properties);
                };

                /**
                 * Encodes the specified ResGuestLogin message. Does not implicitly {@link auth.client.proto.ResGuestLogin.verify|verify} messages.
                 * @function encode
                 * @memberof auth.client.proto.ResGuestLogin
                 * @static
                 * @param {auth.client.proto.IResGuestLogin} message ResGuestLogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResGuestLogin.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.uid);
                    if (message.logininfo != null && message.hasOwnProperty("logininfo"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.logininfo);
                    return writer;
                };

                /**
                 * Encodes the specified ResGuestLogin message, length delimited. Does not implicitly {@link auth.client.proto.ResGuestLogin.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof auth.client.proto.ResGuestLogin
                 * @static
                 * @param {auth.client.proto.IResGuestLogin} message ResGuestLogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResGuestLogin.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResGuestLogin message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.client.proto.ResGuestLogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {auth.client.proto.ResGuestLogin} ResGuestLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResGuestLogin.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.client.proto.ResGuestLogin();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.status = reader.sint32();
                            break;
                        case 2:
                            message.uid = reader.sint32();
                            break;
                        case 3:
                            message.logininfo = reader.string();
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
                 * Decodes a ResGuestLogin message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof auth.client.proto.ResGuestLogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {auth.client.proto.ResGuestLogin} ResGuestLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResGuestLogin.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResGuestLogin message.
                 * @function verify
                 * @memberof auth.client.proto.ResGuestLogin
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResGuestLogin.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        if (!$util.isInteger(message.uid))
                            return "uid: integer expected";
                    if (message.logininfo != null && message.hasOwnProperty("logininfo"))
                        if (!$util.isString(message.logininfo))
                            return "logininfo: string expected";
                    return null;
                };

                /**
                 * Creates a ResGuestLogin message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.client.proto.ResGuestLogin
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {auth.client.proto.ResGuestLogin} ResGuestLogin
                 */
                ResGuestLogin.fromObject = function fromObject(object) {
                    if (object instanceof $root.auth.client.proto.ResGuestLogin)
                        return object;
                    var message = new $root.auth.client.proto.ResGuestLogin();
                    if (object.status != null)
                        message.status = object.status | 0;
                    if (object.uid != null)
                        message.uid = object.uid | 0;
                    if (object.logininfo != null)
                        message.logininfo = String(object.logininfo);
                    return message;
                };

                /**
                 * Creates a plain object from a ResGuestLogin message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.client.proto.ResGuestLogin
                 * @static
                 * @param {auth.client.proto.ResGuestLogin} message ResGuestLogin
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResGuestLogin.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.status = 0;
                        object.uid = 0;
                        object.logininfo = "";
                    }
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = message.status;
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        object.uid = message.uid;
                    if (message.logininfo != null && message.hasOwnProperty("logininfo"))
                        object.logininfo = message.logininfo;
                    return object;
                };

                /**
                 * Converts this ResGuestLogin to JSON.
                 * @function toJSON
                 * @memberof auth.client.proto.ResGuestLogin
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResGuestLogin.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ResGuestLogin;
            })();

            proto.ReqWeChatLogin = (function() {

                /**
                 * Properties of a ReqWeChatLogin.
                 * @memberof auth.client.proto
                 * @interface IReqWeChatLogin
                 * @property {string} logincode ReqWeChatLogin logincode
                 * @property {string} userlogininfo ReqWeChatLogin userlogininfo
                 */

                /**
                 * Constructs a new ReqWeChatLogin.
                 * @memberof auth.client.proto
                 * @classdesc Represents a ReqWeChatLogin.
                 * @implements IReqWeChatLogin
                 * @constructor
                 * @param {auth.client.proto.IReqWeChatLogin=} [properties] Properties to set
                 */
                function ReqWeChatLogin(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReqWeChatLogin logincode.
                 * @member {string} logincode
                 * @memberof auth.client.proto.ReqWeChatLogin
                 * @instance
                 */
                ReqWeChatLogin.prototype.logincode = "";

                /**
                 * ReqWeChatLogin userlogininfo.
                 * @member {string} userlogininfo
                 * @memberof auth.client.proto.ReqWeChatLogin
                 * @instance
                 */
                ReqWeChatLogin.prototype.userlogininfo = "";

                /**
                 * Creates a new ReqWeChatLogin instance using the specified properties.
                 * @function create
                 * @memberof auth.client.proto.ReqWeChatLogin
                 * @static
                 * @param {auth.client.proto.IReqWeChatLogin=} [properties] Properties to set
                 * @returns {auth.client.proto.ReqWeChatLogin} ReqWeChatLogin instance
                 */
                ReqWeChatLogin.create = function create(properties) {
                    return new ReqWeChatLogin(properties);
                };

                /**
                 * Encodes the specified ReqWeChatLogin message. Does not implicitly {@link auth.client.proto.ReqWeChatLogin.verify|verify} messages.
                 * @function encode
                 * @memberof auth.client.proto.ReqWeChatLogin
                 * @static
                 * @param {auth.client.proto.IReqWeChatLogin} message ReqWeChatLogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqWeChatLogin.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.logincode);
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.userlogininfo);
                    return writer;
                };

                /**
                 * Encodes the specified ReqWeChatLogin message, length delimited. Does not implicitly {@link auth.client.proto.ReqWeChatLogin.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof auth.client.proto.ReqWeChatLogin
                 * @static
                 * @param {auth.client.proto.IReqWeChatLogin} message ReqWeChatLogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqWeChatLogin.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqWeChatLogin message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.client.proto.ReqWeChatLogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {auth.client.proto.ReqWeChatLogin} ReqWeChatLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqWeChatLogin.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.client.proto.ReqWeChatLogin();
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
                 * Decodes a ReqWeChatLogin message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof auth.client.proto.ReqWeChatLogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {auth.client.proto.ReqWeChatLogin} ReqWeChatLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqWeChatLogin.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqWeChatLogin message.
                 * @function verify
                 * @memberof auth.client.proto.ReqWeChatLogin
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqWeChatLogin.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.logincode))
                        return "logincode: string expected";
                    if (!$util.isString(message.userlogininfo))
                        return "userlogininfo: string expected";
                    return null;
                };

                /**
                 * Creates a ReqWeChatLogin message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.client.proto.ReqWeChatLogin
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {auth.client.proto.ReqWeChatLogin} ReqWeChatLogin
                 */
                ReqWeChatLogin.fromObject = function fromObject(object) {
                    if (object instanceof $root.auth.client.proto.ReqWeChatLogin)
                        return object;
                    var message = new $root.auth.client.proto.ReqWeChatLogin();
                    if (object.logincode != null)
                        message.logincode = String(object.logincode);
                    if (object.userlogininfo != null)
                        message.userlogininfo = String(object.userlogininfo);
                    return message;
                };

                /**
                 * Creates a plain object from a ReqWeChatLogin message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.client.proto.ReqWeChatLogin
                 * @static
                 * @param {auth.client.proto.ReqWeChatLogin} message ReqWeChatLogin
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqWeChatLogin.toObject = function toObject(message, options) {
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
                 * Converts this ReqWeChatLogin to JSON.
                 * @function toJSON
                 * @memberof auth.client.proto.ReqWeChatLogin
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqWeChatLogin.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqWeChatLogin;
            })();

            proto.ResWeChatLogin = (function() {

                /**
                 * Properties of a ResWeChatLogin.
                 * @memberof auth.client.proto
                 * @interface IResWeChatLogin
                 * @property {number} status ResWeChatLogin status
                 * @property {number|null} [uid] ResWeChatLogin uid
                 * @property {string|null} [userlogininfo] ResWeChatLogin userlogininfo
                 */

                /**
                 * Constructs a new ResWeChatLogin.
                 * @memberof auth.client.proto
                 * @classdesc Represents a ResWeChatLogin.
                 * @implements IResWeChatLogin
                 * @constructor
                 * @param {auth.client.proto.IResWeChatLogin=} [properties] Properties to set
                 */
                function ResWeChatLogin(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResWeChatLogin status.
                 * @member {number} status
                 * @memberof auth.client.proto.ResWeChatLogin
                 * @instance
                 */
                ResWeChatLogin.prototype.status = 0;

                /**
                 * ResWeChatLogin uid.
                 * @member {number} uid
                 * @memberof auth.client.proto.ResWeChatLogin
                 * @instance
                 */
                ResWeChatLogin.prototype.uid = 0;

                /**
                 * ResWeChatLogin userlogininfo.
                 * @member {string} userlogininfo
                 * @memberof auth.client.proto.ResWeChatLogin
                 * @instance
                 */
                ResWeChatLogin.prototype.userlogininfo = "";

                /**
                 * Creates a new ResWeChatLogin instance using the specified properties.
                 * @function create
                 * @memberof auth.client.proto.ResWeChatLogin
                 * @static
                 * @param {auth.client.proto.IResWeChatLogin=} [properties] Properties to set
                 * @returns {auth.client.proto.ResWeChatLogin} ResWeChatLogin instance
                 */
                ResWeChatLogin.create = function create(properties) {
                    return new ResWeChatLogin(properties);
                };

                /**
                 * Encodes the specified ResWeChatLogin message. Does not implicitly {@link auth.client.proto.ResWeChatLogin.verify|verify} messages.
                 * @function encode
                 * @memberof auth.client.proto.ResWeChatLogin
                 * @static
                 * @param {auth.client.proto.IResWeChatLogin} message ResWeChatLogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResWeChatLogin.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.uid);
                    if (message.userlogininfo != null && message.hasOwnProperty("userlogininfo"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.userlogininfo);
                    return writer;
                };

                /**
                 * Encodes the specified ResWeChatLogin message, length delimited. Does not implicitly {@link auth.client.proto.ResWeChatLogin.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof auth.client.proto.ResWeChatLogin
                 * @static
                 * @param {auth.client.proto.IResWeChatLogin} message ResWeChatLogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResWeChatLogin.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResWeChatLogin message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.client.proto.ResWeChatLogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {auth.client.proto.ResWeChatLogin} ResWeChatLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResWeChatLogin.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.client.proto.ResWeChatLogin();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.status = reader.sint32();
                            break;
                        case 2:
                            message.uid = reader.sint32();
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
                 * Decodes a ResWeChatLogin message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof auth.client.proto.ResWeChatLogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {auth.client.proto.ResWeChatLogin} ResWeChatLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResWeChatLogin.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResWeChatLogin message.
                 * @function verify
                 * @memberof auth.client.proto.ResWeChatLogin
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResWeChatLogin.verify = function verify(message) {
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
                 * Creates a ResWeChatLogin message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.client.proto.ResWeChatLogin
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {auth.client.proto.ResWeChatLogin} ResWeChatLogin
                 */
                ResWeChatLogin.fromObject = function fromObject(object) {
                    if (object instanceof $root.auth.client.proto.ResWeChatLogin)
                        return object;
                    var message = new $root.auth.client.proto.ResWeChatLogin();
                    if (object.status != null)
                        message.status = object.status | 0;
                    if (object.uid != null)
                        message.uid = object.uid | 0;
                    if (object.userlogininfo != null)
                        message.userlogininfo = String(object.userlogininfo);
                    return message;
                };

                /**
                 * Creates a plain object from a ResWeChatLogin message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.client.proto.ResWeChatLogin
                 * @static
                 * @param {auth.client.proto.ResWeChatLogin} message ResWeChatLogin
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResWeChatLogin.toObject = function toObject(message, options) {
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
                 * Converts this ResWeChatLogin to JSON.
                 * @function toJSON
                 * @memberof auth.client.proto.ResWeChatLogin
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResWeChatLogin.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ResWeChatLogin;
            })();

            proto.ReqWeChatSessionLogin = (function() {

                /**
                 * Properties of a ReqWeChatSessionLogin.
                 * @memberof auth.client.proto
                 * @interface IReqWeChatSessionLogin
                 * @property {string} wechatsessionkey ReqWeChatSessionLogin wechatsessionkey
                 */

                /**
                 * Constructs a new ReqWeChatSessionLogin.
                 * @memberof auth.client.proto
                 * @classdesc Represents a ReqWeChatSessionLogin.
                 * @implements IReqWeChatSessionLogin
                 * @constructor
                 * @param {auth.client.proto.IReqWeChatSessionLogin=} [properties] Properties to set
                 */
                function ReqWeChatSessionLogin(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReqWeChatSessionLogin wechatsessionkey.
                 * @member {string} wechatsessionkey
                 * @memberof auth.client.proto.ReqWeChatSessionLogin
                 * @instance
                 */
                ReqWeChatSessionLogin.prototype.wechatsessionkey = "";

                /**
                 * Creates a new ReqWeChatSessionLogin instance using the specified properties.
                 * @function create
                 * @memberof auth.client.proto.ReqWeChatSessionLogin
                 * @static
                 * @param {auth.client.proto.IReqWeChatSessionLogin=} [properties] Properties to set
                 * @returns {auth.client.proto.ReqWeChatSessionLogin} ReqWeChatSessionLogin instance
                 */
                ReqWeChatSessionLogin.create = function create(properties) {
                    return new ReqWeChatSessionLogin(properties);
                };

                /**
                 * Encodes the specified ReqWeChatSessionLogin message. Does not implicitly {@link auth.client.proto.ReqWeChatSessionLogin.verify|verify} messages.
                 * @function encode
                 * @memberof auth.client.proto.ReqWeChatSessionLogin
                 * @static
                 * @param {auth.client.proto.IReqWeChatSessionLogin} message ReqWeChatSessionLogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqWeChatSessionLogin.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.wechatsessionkey);
                    return writer;
                };

                /**
                 * Encodes the specified ReqWeChatSessionLogin message, length delimited. Does not implicitly {@link auth.client.proto.ReqWeChatSessionLogin.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof auth.client.proto.ReqWeChatSessionLogin
                 * @static
                 * @param {auth.client.proto.IReqWeChatSessionLogin} message ReqWeChatSessionLogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqWeChatSessionLogin.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqWeChatSessionLogin message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.client.proto.ReqWeChatSessionLogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {auth.client.proto.ReqWeChatSessionLogin} ReqWeChatSessionLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqWeChatSessionLogin.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.client.proto.ReqWeChatSessionLogin();
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
                 * Decodes a ReqWeChatSessionLogin message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof auth.client.proto.ReqWeChatSessionLogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {auth.client.proto.ReqWeChatSessionLogin} ReqWeChatSessionLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqWeChatSessionLogin.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqWeChatSessionLogin message.
                 * @function verify
                 * @memberof auth.client.proto.ReqWeChatSessionLogin
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqWeChatSessionLogin.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.wechatsessionkey))
                        return "wechatsessionkey: string expected";
                    return null;
                };

                /**
                 * Creates a ReqWeChatSessionLogin message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.client.proto.ReqWeChatSessionLogin
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {auth.client.proto.ReqWeChatSessionLogin} ReqWeChatSessionLogin
                 */
                ReqWeChatSessionLogin.fromObject = function fromObject(object) {
                    if (object instanceof $root.auth.client.proto.ReqWeChatSessionLogin)
                        return object;
                    var message = new $root.auth.client.proto.ReqWeChatSessionLogin();
                    if (object.wechatsessionkey != null)
                        message.wechatsessionkey = String(object.wechatsessionkey);
                    return message;
                };

                /**
                 * Creates a plain object from a ReqWeChatSessionLogin message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.client.proto.ReqWeChatSessionLogin
                 * @static
                 * @param {auth.client.proto.ReqWeChatSessionLogin} message ReqWeChatSessionLogin
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqWeChatSessionLogin.toObject = function toObject(message, options) {
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
                 * Converts this ReqWeChatSessionLogin to JSON.
                 * @function toJSON
                 * @memberof auth.client.proto.ReqWeChatSessionLogin
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqWeChatSessionLogin.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqWeChatSessionLogin;
            })();

            proto.ResWeChatSessionLogin = (function() {

                /**
                 * Properties of a ResWeChatSessionLogin.
                 * @memberof auth.client.proto
                 * @interface IResWeChatSessionLogin
                 * @property {number} status ResWeChatSessionLogin status
                 * @property {number|null} [uid] ResWeChatSessionLogin uid
                 * @property {string|null} [userlogininfo] ResWeChatSessionLogin userlogininfo
                 */

                /**
                 * Constructs a new ResWeChatSessionLogin.
                 * @memberof auth.client.proto
                 * @classdesc Represents a ResWeChatSessionLogin.
                 * @implements IResWeChatSessionLogin
                 * @constructor
                 * @param {auth.client.proto.IResWeChatSessionLogin=} [properties] Properties to set
                 */
                function ResWeChatSessionLogin(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResWeChatSessionLogin status.
                 * @member {number} status
                 * @memberof auth.client.proto.ResWeChatSessionLogin
                 * @instance
                 */
                ResWeChatSessionLogin.prototype.status = 0;

                /**
                 * ResWeChatSessionLogin uid.
                 * @member {number} uid
                 * @memberof auth.client.proto.ResWeChatSessionLogin
                 * @instance
                 */
                ResWeChatSessionLogin.prototype.uid = 0;

                /**
                 * ResWeChatSessionLogin userlogininfo.
                 * @member {string} userlogininfo
                 * @memberof auth.client.proto.ResWeChatSessionLogin
                 * @instance
                 */
                ResWeChatSessionLogin.prototype.userlogininfo = "";

                /**
                 * Creates a new ResWeChatSessionLogin instance using the specified properties.
                 * @function create
                 * @memberof auth.client.proto.ResWeChatSessionLogin
                 * @static
                 * @param {auth.client.proto.IResWeChatSessionLogin=} [properties] Properties to set
                 * @returns {auth.client.proto.ResWeChatSessionLogin} ResWeChatSessionLogin instance
                 */
                ResWeChatSessionLogin.create = function create(properties) {
                    return new ResWeChatSessionLogin(properties);
                };

                /**
                 * Encodes the specified ResWeChatSessionLogin message. Does not implicitly {@link auth.client.proto.ResWeChatSessionLogin.verify|verify} messages.
                 * @function encode
                 * @memberof auth.client.proto.ResWeChatSessionLogin
                 * @static
                 * @param {auth.client.proto.IResWeChatSessionLogin} message ResWeChatSessionLogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResWeChatSessionLogin.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.uid);
                    if (message.userlogininfo != null && message.hasOwnProperty("userlogininfo"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.userlogininfo);
                    return writer;
                };

                /**
                 * Encodes the specified ResWeChatSessionLogin message, length delimited. Does not implicitly {@link auth.client.proto.ResWeChatSessionLogin.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof auth.client.proto.ResWeChatSessionLogin
                 * @static
                 * @param {auth.client.proto.IResWeChatSessionLogin} message ResWeChatSessionLogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResWeChatSessionLogin.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResWeChatSessionLogin message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.client.proto.ResWeChatSessionLogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {auth.client.proto.ResWeChatSessionLogin} ResWeChatSessionLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResWeChatSessionLogin.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.client.proto.ResWeChatSessionLogin();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.status = reader.sint32();
                            break;
                        case 2:
                            message.uid = reader.sint32();
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
                 * Decodes a ResWeChatSessionLogin message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof auth.client.proto.ResWeChatSessionLogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {auth.client.proto.ResWeChatSessionLogin} ResWeChatSessionLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResWeChatSessionLogin.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResWeChatSessionLogin message.
                 * @function verify
                 * @memberof auth.client.proto.ResWeChatSessionLogin
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResWeChatSessionLogin.verify = function verify(message) {
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
                 * Creates a ResWeChatSessionLogin message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.client.proto.ResWeChatSessionLogin
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {auth.client.proto.ResWeChatSessionLogin} ResWeChatSessionLogin
                 */
                ResWeChatSessionLogin.fromObject = function fromObject(object) {
                    if (object instanceof $root.auth.client.proto.ResWeChatSessionLogin)
                        return object;
                    var message = new $root.auth.client.proto.ResWeChatSessionLogin();
                    if (object.status != null)
                        message.status = object.status | 0;
                    if (object.uid != null)
                        message.uid = object.uid | 0;
                    if (object.userlogininfo != null)
                        message.userlogininfo = String(object.userlogininfo);
                    return message;
                };

                /**
                 * Creates a plain object from a ResWeChatSessionLogin message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.client.proto.ResWeChatSessionLogin
                 * @static
                 * @param {auth.client.proto.ResWeChatSessionLogin} message ResWeChatSessionLogin
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResWeChatSessionLogin.toObject = function toObject(message, options) {
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
                 * Converts this ResWeChatSessionLogin to JSON.
                 * @function toJSON
                 * @memberof auth.client.proto.ResWeChatSessionLogin
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResWeChatSessionLogin.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ResWeChatSessionLogin;
            })();

            proto.ReqLoginOut = (function() {

                /**
                 * Properties of a ReqLoginOut.
                 * @memberof auth.client.proto
                 * @interface IReqLoginOut
                 */

                /**
                 * Constructs a new ReqLoginOut.
                 * @memberof auth.client.proto
                 * @classdesc Represents a ReqLoginOut.
                 * @implements IReqLoginOut
                 * @constructor
                 * @param {auth.client.proto.IReqLoginOut=} [properties] Properties to set
                 */
                function ReqLoginOut(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new ReqLoginOut instance using the specified properties.
                 * @function create
                 * @memberof auth.client.proto.ReqLoginOut
                 * @static
                 * @param {auth.client.proto.IReqLoginOut=} [properties] Properties to set
                 * @returns {auth.client.proto.ReqLoginOut} ReqLoginOut instance
                 */
                ReqLoginOut.create = function create(properties) {
                    return new ReqLoginOut(properties);
                };

                /**
                 * Encodes the specified ReqLoginOut message. Does not implicitly {@link auth.client.proto.ReqLoginOut.verify|verify} messages.
                 * @function encode
                 * @memberof auth.client.proto.ReqLoginOut
                 * @static
                 * @param {auth.client.proto.IReqLoginOut} message ReqLoginOut message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqLoginOut.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified ReqLoginOut message, length delimited. Does not implicitly {@link auth.client.proto.ReqLoginOut.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof auth.client.proto.ReqLoginOut
                 * @static
                 * @param {auth.client.proto.IReqLoginOut} message ReqLoginOut message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqLoginOut.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqLoginOut message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.client.proto.ReqLoginOut
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {auth.client.proto.ReqLoginOut} ReqLoginOut
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqLoginOut.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.client.proto.ReqLoginOut();
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
                 * Decodes a ReqLoginOut message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof auth.client.proto.ReqLoginOut
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {auth.client.proto.ReqLoginOut} ReqLoginOut
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqLoginOut.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqLoginOut message.
                 * @function verify
                 * @memberof auth.client.proto.ReqLoginOut
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqLoginOut.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a ReqLoginOut message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.client.proto.ReqLoginOut
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {auth.client.proto.ReqLoginOut} ReqLoginOut
                 */
                ReqLoginOut.fromObject = function fromObject(object) {
                    if (object instanceof $root.auth.client.proto.ReqLoginOut)
                        return object;
                    return new $root.auth.client.proto.ReqLoginOut();
                };

                /**
                 * Creates a plain object from a ReqLoginOut message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.client.proto.ReqLoginOut
                 * @static
                 * @param {auth.client.proto.ReqLoginOut} message ReqLoginOut
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqLoginOut.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this ReqLoginOut to JSON.
                 * @function toJSON
                 * @memberof auth.client.proto.ReqLoginOut
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqLoginOut.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqLoginOut;
            })();

            proto.ResLoginOut = (function() {

                /**
                 * Properties of a ResLoginOut.
                 * @memberof auth.client.proto
                 * @interface IResLoginOut
                 * @property {number} status ResLoginOut status
                 */

                /**
                 * Constructs a new ResLoginOut.
                 * @memberof auth.client.proto
                 * @classdesc Represents a ResLoginOut.
                 * @implements IResLoginOut
                 * @constructor
                 * @param {auth.client.proto.IResLoginOut=} [properties] Properties to set
                 */
                function ResLoginOut(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResLoginOut status.
                 * @member {number} status
                 * @memberof auth.client.proto.ResLoginOut
                 * @instance
                 */
                ResLoginOut.prototype.status = 0;

                /**
                 * Creates a new ResLoginOut instance using the specified properties.
                 * @function create
                 * @memberof auth.client.proto.ResLoginOut
                 * @static
                 * @param {auth.client.proto.IResLoginOut=} [properties] Properties to set
                 * @returns {auth.client.proto.ResLoginOut} ResLoginOut instance
                 */
                ResLoginOut.create = function create(properties) {
                    return new ResLoginOut(properties);
                };

                /**
                 * Encodes the specified ResLoginOut message. Does not implicitly {@link auth.client.proto.ResLoginOut.verify|verify} messages.
                 * @function encode
                 * @memberof auth.client.proto.ResLoginOut
                 * @static
                 * @param {auth.client.proto.IResLoginOut} message ResLoginOut message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResLoginOut.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified ResLoginOut message, length delimited. Does not implicitly {@link auth.client.proto.ResLoginOut.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof auth.client.proto.ResLoginOut
                 * @static
                 * @param {auth.client.proto.IResLoginOut} message ResLoginOut message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResLoginOut.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResLoginOut message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.client.proto.ResLoginOut
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {auth.client.proto.ResLoginOut} ResLoginOut
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResLoginOut.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.client.proto.ResLoginOut();
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
                 * Decodes a ResLoginOut message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof auth.client.proto.ResLoginOut
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {auth.client.proto.ResLoginOut} ResLoginOut
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResLoginOut.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResLoginOut message.
                 * @function verify
                 * @memberof auth.client.proto.ResLoginOut
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResLoginOut.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                    return null;
                };

                /**
                 * Creates a ResLoginOut message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.client.proto.ResLoginOut
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {auth.client.proto.ResLoginOut} ResLoginOut
                 */
                ResLoginOut.fromObject = function fromObject(object) {
                    if (object instanceof $root.auth.client.proto.ResLoginOut)
                        return object;
                    var message = new $root.auth.client.proto.ResLoginOut();
                    if (object.status != null)
                        message.status = object.status | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ResLoginOut message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.client.proto.ResLoginOut
                 * @static
                 * @param {auth.client.proto.ResLoginOut} message ResLoginOut
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResLoginOut.toObject = function toObject(message, options) {
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
                 * Converts this ResLoginOut to JSON.
                 * @function toJSON
                 * @memberof auth.client.proto.ResLoginOut
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResLoginOut.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ResLoginOut;
            })();

            proto.PushRelogin = (function() {

                /**
                 * Properties of a PushRelogin.
                 * @memberof auth.client.proto
                 * @interface IPushRelogin
                 */

                /**
                 * Constructs a new PushRelogin.
                 * @memberof auth.client.proto
                 * @classdesc Represents a PushRelogin.
                 * @implements IPushRelogin
                 * @constructor
                 * @param {auth.client.proto.IPushRelogin=} [properties] Properties to set
                 */
                function PushRelogin(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new PushRelogin instance using the specified properties.
                 * @function create
                 * @memberof auth.client.proto.PushRelogin
                 * @static
                 * @param {auth.client.proto.IPushRelogin=} [properties] Properties to set
                 * @returns {auth.client.proto.PushRelogin} PushRelogin instance
                 */
                PushRelogin.create = function create(properties) {
                    return new PushRelogin(properties);
                };

                /**
                 * Encodes the specified PushRelogin message. Does not implicitly {@link auth.client.proto.PushRelogin.verify|verify} messages.
                 * @function encode
                 * @memberof auth.client.proto.PushRelogin
                 * @static
                 * @param {auth.client.proto.IPushRelogin} message PushRelogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PushRelogin.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified PushRelogin message, length delimited. Does not implicitly {@link auth.client.proto.PushRelogin.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof auth.client.proto.PushRelogin
                 * @static
                 * @param {auth.client.proto.IPushRelogin} message PushRelogin message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PushRelogin.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PushRelogin message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.client.proto.PushRelogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {auth.client.proto.PushRelogin} PushRelogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PushRelogin.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.client.proto.PushRelogin();
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
                 * Decodes a PushRelogin message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof auth.client.proto.PushRelogin
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {auth.client.proto.PushRelogin} PushRelogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PushRelogin.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PushRelogin message.
                 * @function verify
                 * @memberof auth.client.proto.PushRelogin
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PushRelogin.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a PushRelogin message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.client.proto.PushRelogin
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {auth.client.proto.PushRelogin} PushRelogin
                 */
                PushRelogin.fromObject = function fromObject(object) {
                    if (object instanceof $root.auth.client.proto.PushRelogin)
                        return object;
                    return new $root.auth.client.proto.PushRelogin();
                };

                /**
                 * Creates a plain object from a PushRelogin message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.client.proto.PushRelogin
                 * @static
                 * @param {auth.client.proto.PushRelogin} message PushRelogin
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PushRelogin.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this PushRelogin to JSON.
                 * @function toJSON
                 * @memberof auth.client.proto.PushRelogin
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PushRelogin.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PushRelogin;
            })();

            proto.ReqUserCenterInfo = (function() {

                /**
                 * Properties of a ReqUserCenterInfo.
                 * @memberof auth.client.proto
                 * @interface IReqUserCenterInfo
                 */

                /**
                 * Constructs a new ReqUserCenterInfo.
                 * @memberof auth.client.proto
                 * @classdesc Represents a ReqUserCenterInfo.
                 * @implements IReqUserCenterInfo
                 * @constructor
                 * @param {auth.client.proto.IReqUserCenterInfo=} [properties] Properties to set
                 */
                function ReqUserCenterInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new ReqUserCenterInfo instance using the specified properties.
                 * @function create
                 * @memberof auth.client.proto.ReqUserCenterInfo
                 * @static
                 * @param {auth.client.proto.IReqUserCenterInfo=} [properties] Properties to set
                 * @returns {auth.client.proto.ReqUserCenterInfo} ReqUserCenterInfo instance
                 */
                ReqUserCenterInfo.create = function create(properties) {
                    return new ReqUserCenterInfo(properties);
                };

                /**
                 * Encodes the specified ReqUserCenterInfo message. Does not implicitly {@link auth.client.proto.ReqUserCenterInfo.verify|verify} messages.
                 * @function encode
                 * @memberof auth.client.proto.ReqUserCenterInfo
                 * @static
                 * @param {auth.client.proto.IReqUserCenterInfo} message ReqUserCenterInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqUserCenterInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified ReqUserCenterInfo message, length delimited. Does not implicitly {@link auth.client.proto.ReqUserCenterInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof auth.client.proto.ReqUserCenterInfo
                 * @static
                 * @param {auth.client.proto.IReqUserCenterInfo} message ReqUserCenterInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReqUserCenterInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReqUserCenterInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.client.proto.ReqUserCenterInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {auth.client.proto.ReqUserCenterInfo} ReqUserCenterInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqUserCenterInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.client.proto.ReqUserCenterInfo();
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
                 * Decodes a ReqUserCenterInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof auth.client.proto.ReqUserCenterInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {auth.client.proto.ReqUserCenterInfo} ReqUserCenterInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReqUserCenterInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReqUserCenterInfo message.
                 * @function verify
                 * @memberof auth.client.proto.ReqUserCenterInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReqUserCenterInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a ReqUserCenterInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.client.proto.ReqUserCenterInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {auth.client.proto.ReqUserCenterInfo} ReqUserCenterInfo
                 */
                ReqUserCenterInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.auth.client.proto.ReqUserCenterInfo)
                        return object;
                    return new $root.auth.client.proto.ReqUserCenterInfo();
                };

                /**
                 * Creates a plain object from a ReqUserCenterInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.client.proto.ReqUserCenterInfo
                 * @static
                 * @param {auth.client.proto.ReqUserCenterInfo} message ReqUserCenterInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReqUserCenterInfo.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this ReqUserCenterInfo to JSON.
                 * @function toJSON
                 * @memberof auth.client.proto.ReqUserCenterInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReqUserCenterInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReqUserCenterInfo;
            })();

            proto.ResUserCenterInfo = (function() {

                /**
                 * Properties of a ResUserCenterInfo.
                 * @memberof auth.client.proto
                 * @interface IResUserCenterInfo
                 * @property {number} status ResUserCenterInfo status
                 * @property {string|null} [usercenterinfo] ResUserCenterInfo usercenterinfo
                 */

                /**
                 * Constructs a new ResUserCenterInfo.
                 * @memberof auth.client.proto
                 * @classdesc Represents a ResUserCenterInfo.
                 * @implements IResUserCenterInfo
                 * @constructor
                 * @param {auth.client.proto.IResUserCenterInfo=} [properties] Properties to set
                 */
                function ResUserCenterInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResUserCenterInfo status.
                 * @member {number} status
                 * @memberof auth.client.proto.ResUserCenterInfo
                 * @instance
                 */
                ResUserCenterInfo.prototype.status = 0;

                /**
                 * ResUserCenterInfo usercenterinfo.
                 * @member {string} usercenterinfo
                 * @memberof auth.client.proto.ResUserCenterInfo
                 * @instance
                 */
                ResUserCenterInfo.prototype.usercenterinfo = "";

                /**
                 * Creates a new ResUserCenterInfo instance using the specified properties.
                 * @function create
                 * @memberof auth.client.proto.ResUserCenterInfo
                 * @static
                 * @param {auth.client.proto.IResUserCenterInfo=} [properties] Properties to set
                 * @returns {auth.client.proto.ResUserCenterInfo} ResUserCenterInfo instance
                 */
                ResUserCenterInfo.create = function create(properties) {
                    return new ResUserCenterInfo(properties);
                };

                /**
                 * Encodes the specified ResUserCenterInfo message. Does not implicitly {@link auth.client.proto.ResUserCenterInfo.verify|verify} messages.
                 * @function encode
                 * @memberof auth.client.proto.ResUserCenterInfo
                 * @static
                 * @param {auth.client.proto.IResUserCenterInfo} message ResUserCenterInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResUserCenterInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
                    if (message.usercenterinfo != null && message.hasOwnProperty("usercenterinfo"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.usercenterinfo);
                    return writer;
                };

                /**
                 * Encodes the specified ResUserCenterInfo message, length delimited. Does not implicitly {@link auth.client.proto.ResUserCenterInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof auth.client.proto.ResUserCenterInfo
                 * @static
                 * @param {auth.client.proto.IResUserCenterInfo} message ResUserCenterInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResUserCenterInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResUserCenterInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.client.proto.ResUserCenterInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {auth.client.proto.ResUserCenterInfo} ResUserCenterInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResUserCenterInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.client.proto.ResUserCenterInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.status = reader.sint32();
                            break;
                        case 2:
                            message.usercenterinfo = reader.string();
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
                 * Decodes a ResUserCenterInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof auth.client.proto.ResUserCenterInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {auth.client.proto.ResUserCenterInfo} ResUserCenterInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResUserCenterInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResUserCenterInfo message.
                 * @function verify
                 * @memberof auth.client.proto.ResUserCenterInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResUserCenterInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                    if (message.usercenterinfo != null && message.hasOwnProperty("usercenterinfo"))
                        if (!$util.isString(message.usercenterinfo))
                            return "usercenterinfo: string expected";
                    return null;
                };

                /**
                 * Creates a ResUserCenterInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.client.proto.ResUserCenterInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {auth.client.proto.ResUserCenterInfo} ResUserCenterInfo
                 */
                ResUserCenterInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.auth.client.proto.ResUserCenterInfo)
                        return object;
                    var message = new $root.auth.client.proto.ResUserCenterInfo();
                    if (object.status != null)
                        message.status = object.status | 0;
                    if (object.usercenterinfo != null)
                        message.usercenterinfo = String(object.usercenterinfo);
                    return message;
                };

                /**
                 * Creates a plain object from a ResUserCenterInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.client.proto.ResUserCenterInfo
                 * @static
                 * @param {auth.client.proto.ResUserCenterInfo} message ResUserCenterInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResUserCenterInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.status = 0;
                        object.usercenterinfo = "";
                    }
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = message.status;
                    if (message.usercenterinfo != null && message.hasOwnProperty("usercenterinfo"))
                        object.usercenterinfo = message.usercenterinfo;
                    return object;
                };

                /**
                 * Converts this ResUserCenterInfo to JSON.
                 * @function toJSON
                 * @memberof auth.client.proto.ResUserCenterInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResUserCenterInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ResUserCenterInfo;
            })();

            return proto;
        })();

        return client;
    })();

    return auth;
})();

module.exports = $root;
