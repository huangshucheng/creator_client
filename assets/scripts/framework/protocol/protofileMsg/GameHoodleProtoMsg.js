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
     * @property {number} eUserEmojReq=55 eUserEmojReq value
     * @property {number} eUserEmojRes=56 eUserEmojRes value
     * @property {number} eUserPlayAgainReq=57 eUserPlayAgainReq value
     * @property {number} eUserPlayAgainRes=58 eUserPlayAgainRes value
     * @property {number} eUserPlayAgainAnswerReq=59 eUserPlayAgainAnswerReq value
     * @property {number} eUserPlayAgainAnswerRes=60 eUserPlayAgainAnswerRes value
     * @property {number} eUserPlayAgainStartRes=61 eUserPlayAgainStartRes value
     * @property {number} eRoomListConfigReq=62 eRoomListConfigReq value
     * @property {number} eRoomListConfigRes=63 eRoomListConfigRes value
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
        values[valuesById[55] = "eUserEmojReq"] = 55;
        values[valuesById[56] = "eUserEmojRes"] = 56;
        values[valuesById[57] = "eUserPlayAgainReq"] = 57;
        values[valuesById[58] = "eUserPlayAgainRes"] = 58;
        values[valuesById[59] = "eUserPlayAgainAnswerReq"] = 59;
        values[valuesById[60] = "eUserPlayAgainAnswerRes"] = 60;
        values[valuesById[61] = "eUserPlayAgainStartRes"] = 61;
        values[valuesById[62] = "eRoomListConfigReq"] = 62;
        values[valuesById[63] = "eRoomListConfigRes"] = 63;
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
         * @property {number} roomlevel UserMatchReq roomlevel
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
         * UserMatchReq roomlevel.
         * @member {number} roomlevel
         * @memberof GameHoodleProto.UserMatchReq
         * @instance
         */
        UserMatchReq.prototype.roomlevel = 0;

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
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.roomlevel);
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
                    message.roomlevel = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("roomlevel"))
                throw $util.ProtocolError("missing required 'roomlevel'", { instance: message });
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
            if (!$util.isInteger(message.roomlevel))
                return "roomlevel: integer expected";
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
            if (object.roomlevel != null)
                message.roomlevel = object.roomlevel | 0;
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
                object.roomlevel = 0;
            if (message.roomlevel != null && message.hasOwnProperty("roomlevel"))
                object.roomlevel = message.roomlevel;
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
         * @property {string|null} [resultinfo] UpdateUserBallRes resultinfo
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
         * UpdateUserBallRes resultinfo.
         * @member {string} resultinfo
         * @memberof GameHoodleProto.UpdateUserBallRes
         * @instance
         */
        UpdateUserBallRes.prototype.resultinfo = "";

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
            if (message.resultinfo != null && message.hasOwnProperty("resultinfo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.resultinfo);
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
                case 3:
                    message.resultinfo = reader.string();
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
            if (message.resultinfo != null && message.hasOwnProperty("resultinfo"))
                if (!$util.isString(message.resultinfo))
                    return "resultinfo: string expected";
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
            if (object.resultinfo != null)
                message.resultinfo = String(object.resultinfo);
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
                object.resultinfo = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.userballinfostring != null && message.hasOwnProperty("userballinfostring"))
                object.userballinfostring = message.userballinfostring;
            if (message.resultinfo != null && message.hasOwnProperty("resultinfo"))
                object.resultinfo = message.resultinfo;
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

    GameHoodleProto.UserPlayAgainReq = (function() {

        /**
         * Properties of a UserPlayAgainReq.
         * @memberof GameHoodleProto
         * @interface IUserPlayAgainReq
         * @property {Array.<number>|null} [otheruids] UserPlayAgainReq otheruids
         */

        /**
         * Constructs a new UserPlayAgainReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserPlayAgainReq.
         * @implements IUserPlayAgainReq
         * @constructor
         * @param {GameHoodleProto.IUserPlayAgainReq=} [properties] Properties to set
         */
        function UserPlayAgainReq(properties) {
            this.otheruids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserPlayAgainReq otheruids.
         * @member {Array.<number>} otheruids
         * @memberof GameHoodleProto.UserPlayAgainReq
         * @instance
         */
        UserPlayAgainReq.prototype.otheruids = $util.emptyArray;

        /**
         * Creates a new UserPlayAgainReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserPlayAgainReq
         * @static
         * @param {GameHoodleProto.IUserPlayAgainReq=} [properties] Properties to set
         * @returns {GameHoodleProto.UserPlayAgainReq} UserPlayAgainReq instance
         */
        UserPlayAgainReq.create = function create(properties) {
            return new UserPlayAgainReq(properties);
        };

        /**
         * Encodes the specified UserPlayAgainReq message. Does not implicitly {@link GameHoodleProto.UserPlayAgainReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserPlayAgainReq
         * @static
         * @param {GameHoodleProto.IUserPlayAgainReq} message UserPlayAgainReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPlayAgainReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.otheruids != null && message.otheruids.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.otheruids.length; ++i)
                    writer.sint32(message.otheruids[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified UserPlayAgainReq message, length delimited. Does not implicitly {@link GameHoodleProto.UserPlayAgainReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserPlayAgainReq
         * @static
         * @param {GameHoodleProto.IUserPlayAgainReq} message UserPlayAgainReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPlayAgainReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserPlayAgainReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserPlayAgainReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserPlayAgainReq} UserPlayAgainReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPlayAgainReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserPlayAgainReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.otheruids && message.otheruids.length))
                        message.otheruids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.otheruids.push(reader.sint32());
                    } else
                        message.otheruids.push(reader.sint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserPlayAgainReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserPlayAgainReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserPlayAgainReq} UserPlayAgainReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPlayAgainReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserPlayAgainReq message.
         * @function verify
         * @memberof GameHoodleProto.UserPlayAgainReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserPlayAgainReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.otheruids != null && message.hasOwnProperty("otheruids")) {
                if (!Array.isArray(message.otheruids))
                    return "otheruids: array expected";
                for (var i = 0; i < message.otheruids.length; ++i)
                    if (!$util.isInteger(message.otheruids[i]))
                        return "otheruids: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a UserPlayAgainReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserPlayAgainReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserPlayAgainReq} UserPlayAgainReq
         */
        UserPlayAgainReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserPlayAgainReq)
                return object;
            var message = new $root.GameHoodleProto.UserPlayAgainReq();
            if (object.otheruids) {
                if (!Array.isArray(object.otheruids))
                    throw TypeError(".GameHoodleProto.UserPlayAgainReq.otheruids: array expected");
                message.otheruids = [];
                for (var i = 0; i < object.otheruids.length; ++i)
                    message.otheruids[i] = object.otheruids[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a UserPlayAgainReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserPlayAgainReq
         * @static
         * @param {GameHoodleProto.UserPlayAgainReq} message UserPlayAgainReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserPlayAgainReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.otheruids = [];
            if (message.otheruids && message.otheruids.length) {
                object.otheruids = [];
                for (var j = 0; j < message.otheruids.length; ++j)
                    object.otheruids[j] = message.otheruids[j];
            }
            return object;
        };

        /**
         * Converts this UserPlayAgainReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserPlayAgainReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPlayAgainReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserPlayAgainReq;
    })();

    GameHoodleProto.UserPlayAgainRes = (function() {

        /**
         * Properties of a UserPlayAgainRes.
         * @memberof GameHoodleProto
         * @interface IUserPlayAgainRes
         * @property {number} status UserPlayAgainRes status
         * @property {number|null} [responsecode] UserPlayAgainRes responsecode
         */

        /**
         * Constructs a new UserPlayAgainRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserPlayAgainRes.
         * @implements IUserPlayAgainRes
         * @constructor
         * @param {GameHoodleProto.IUserPlayAgainRes=} [properties] Properties to set
         */
        function UserPlayAgainRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserPlayAgainRes status.
         * @member {number} status
         * @memberof GameHoodleProto.UserPlayAgainRes
         * @instance
         */
        UserPlayAgainRes.prototype.status = 0;

        /**
         * UserPlayAgainRes responsecode.
         * @member {number} responsecode
         * @memberof GameHoodleProto.UserPlayAgainRes
         * @instance
         */
        UserPlayAgainRes.prototype.responsecode = 0;

        /**
         * Creates a new UserPlayAgainRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserPlayAgainRes
         * @static
         * @param {GameHoodleProto.IUserPlayAgainRes=} [properties] Properties to set
         * @returns {GameHoodleProto.UserPlayAgainRes} UserPlayAgainRes instance
         */
        UserPlayAgainRes.create = function create(properties) {
            return new UserPlayAgainRes(properties);
        };

        /**
         * Encodes the specified UserPlayAgainRes message. Does not implicitly {@link GameHoodleProto.UserPlayAgainRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserPlayAgainRes
         * @static
         * @param {GameHoodleProto.IUserPlayAgainRes} message UserPlayAgainRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPlayAgainRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.responsecode != null && message.hasOwnProperty("responsecode"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.responsecode);
            return writer;
        };

        /**
         * Encodes the specified UserPlayAgainRes message, length delimited. Does not implicitly {@link GameHoodleProto.UserPlayAgainRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserPlayAgainRes
         * @static
         * @param {GameHoodleProto.IUserPlayAgainRes} message UserPlayAgainRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPlayAgainRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserPlayAgainRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserPlayAgainRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserPlayAgainRes} UserPlayAgainRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPlayAgainRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserPlayAgainRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    message.responsecode = reader.sint32();
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
         * Decodes a UserPlayAgainRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserPlayAgainRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserPlayAgainRes} UserPlayAgainRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPlayAgainRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserPlayAgainRes message.
         * @function verify
         * @memberof GameHoodleProto.UserPlayAgainRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserPlayAgainRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.responsecode != null && message.hasOwnProperty("responsecode"))
                if (!$util.isInteger(message.responsecode))
                    return "responsecode: integer expected";
            return null;
        };

        /**
         * Creates a UserPlayAgainRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserPlayAgainRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserPlayAgainRes} UserPlayAgainRes
         */
        UserPlayAgainRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserPlayAgainRes)
                return object;
            var message = new $root.GameHoodleProto.UserPlayAgainRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.responsecode != null)
                message.responsecode = object.responsecode | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserPlayAgainRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserPlayAgainRes
         * @static
         * @param {GameHoodleProto.UserPlayAgainRes} message UserPlayAgainRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserPlayAgainRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.responsecode = 0;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.responsecode != null && message.hasOwnProperty("responsecode"))
                object.responsecode = message.responsecode;
            return object;
        };

        /**
         * Converts this UserPlayAgainRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserPlayAgainRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPlayAgainRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserPlayAgainRes;
    })();

    GameHoodleProto.UserPlayAgainAnswerReq = (function() {

        /**
         * Properties of a UserPlayAgainAnswerReq.
         * @memberof GameHoodleProto
         * @interface IUserPlayAgainAnswerReq
         * @property {number} requseruid UserPlayAgainAnswerReq requseruid
         * @property {number} responsecode UserPlayAgainAnswerReq responsecode
         */

        /**
         * Constructs a new UserPlayAgainAnswerReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserPlayAgainAnswerReq.
         * @implements IUserPlayAgainAnswerReq
         * @constructor
         * @param {GameHoodleProto.IUserPlayAgainAnswerReq=} [properties] Properties to set
         */
        function UserPlayAgainAnswerReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserPlayAgainAnswerReq requseruid.
         * @member {number} requseruid
         * @memberof GameHoodleProto.UserPlayAgainAnswerReq
         * @instance
         */
        UserPlayAgainAnswerReq.prototype.requseruid = 0;

        /**
         * UserPlayAgainAnswerReq responsecode.
         * @member {number} responsecode
         * @memberof GameHoodleProto.UserPlayAgainAnswerReq
         * @instance
         */
        UserPlayAgainAnswerReq.prototype.responsecode = 0;

        /**
         * Creates a new UserPlayAgainAnswerReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserPlayAgainAnswerReq
         * @static
         * @param {GameHoodleProto.IUserPlayAgainAnswerReq=} [properties] Properties to set
         * @returns {GameHoodleProto.UserPlayAgainAnswerReq} UserPlayAgainAnswerReq instance
         */
        UserPlayAgainAnswerReq.create = function create(properties) {
            return new UserPlayAgainAnswerReq(properties);
        };

        /**
         * Encodes the specified UserPlayAgainAnswerReq message. Does not implicitly {@link GameHoodleProto.UserPlayAgainAnswerReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserPlayAgainAnswerReq
         * @static
         * @param {GameHoodleProto.IUserPlayAgainAnswerReq} message UserPlayAgainAnswerReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPlayAgainAnswerReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.requseruid);
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.responsecode);
            return writer;
        };

        /**
         * Encodes the specified UserPlayAgainAnswerReq message, length delimited. Does not implicitly {@link GameHoodleProto.UserPlayAgainAnswerReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserPlayAgainAnswerReq
         * @static
         * @param {GameHoodleProto.IUserPlayAgainAnswerReq} message UserPlayAgainAnswerReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPlayAgainAnswerReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserPlayAgainAnswerReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserPlayAgainAnswerReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserPlayAgainAnswerReq} UserPlayAgainAnswerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPlayAgainAnswerReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserPlayAgainAnswerReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requseruid = reader.sint32();
                    break;
                case 2:
                    message.responsecode = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("requseruid"))
                throw $util.ProtocolError("missing required 'requseruid'", { instance: message });
            if (!message.hasOwnProperty("responsecode"))
                throw $util.ProtocolError("missing required 'responsecode'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserPlayAgainAnswerReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserPlayAgainAnswerReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserPlayAgainAnswerReq} UserPlayAgainAnswerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPlayAgainAnswerReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserPlayAgainAnswerReq message.
         * @function verify
         * @memberof GameHoodleProto.UserPlayAgainAnswerReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserPlayAgainAnswerReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.requseruid))
                return "requseruid: integer expected";
            if (!$util.isInteger(message.responsecode))
                return "responsecode: integer expected";
            return null;
        };

        /**
         * Creates a UserPlayAgainAnswerReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserPlayAgainAnswerReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserPlayAgainAnswerReq} UserPlayAgainAnswerReq
         */
        UserPlayAgainAnswerReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserPlayAgainAnswerReq)
                return object;
            var message = new $root.GameHoodleProto.UserPlayAgainAnswerReq();
            if (object.requseruid != null)
                message.requseruid = object.requseruid | 0;
            if (object.responsecode != null)
                message.responsecode = object.responsecode | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserPlayAgainAnswerReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserPlayAgainAnswerReq
         * @static
         * @param {GameHoodleProto.UserPlayAgainAnswerReq} message UserPlayAgainAnswerReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserPlayAgainAnswerReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.requseruid = 0;
                object.responsecode = 0;
            }
            if (message.requseruid != null && message.hasOwnProperty("requseruid"))
                object.requseruid = message.requseruid;
            if (message.responsecode != null && message.hasOwnProperty("responsecode"))
                object.responsecode = message.responsecode;
            return object;
        };

        /**
         * Converts this UserPlayAgainAnswerReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserPlayAgainAnswerReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPlayAgainAnswerReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserPlayAgainAnswerReq;
    })();

    GameHoodleProto.UserPlayAgainAnswerRes = (function() {

        /**
         * Properties of a UserPlayAgainAnswerRes.
         * @memberof GameHoodleProto
         * @interface IUserPlayAgainAnswerRes
         * @property {number} status UserPlayAgainAnswerRes status
         * @property {string|null} [ansconfig] UserPlayAgainAnswerRes ansconfig
         */

        /**
         * Constructs a new UserPlayAgainAnswerRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserPlayAgainAnswerRes.
         * @implements IUserPlayAgainAnswerRes
         * @constructor
         * @param {GameHoodleProto.IUserPlayAgainAnswerRes=} [properties] Properties to set
         */
        function UserPlayAgainAnswerRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserPlayAgainAnswerRes status.
         * @member {number} status
         * @memberof GameHoodleProto.UserPlayAgainAnswerRes
         * @instance
         */
        UserPlayAgainAnswerRes.prototype.status = 0;

        /**
         * UserPlayAgainAnswerRes ansconfig.
         * @member {string} ansconfig
         * @memberof GameHoodleProto.UserPlayAgainAnswerRes
         * @instance
         */
        UserPlayAgainAnswerRes.prototype.ansconfig = "";

        /**
         * Creates a new UserPlayAgainAnswerRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserPlayAgainAnswerRes
         * @static
         * @param {GameHoodleProto.IUserPlayAgainAnswerRes=} [properties] Properties to set
         * @returns {GameHoodleProto.UserPlayAgainAnswerRes} UserPlayAgainAnswerRes instance
         */
        UserPlayAgainAnswerRes.create = function create(properties) {
            return new UserPlayAgainAnswerRes(properties);
        };

        /**
         * Encodes the specified UserPlayAgainAnswerRes message. Does not implicitly {@link GameHoodleProto.UserPlayAgainAnswerRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserPlayAgainAnswerRes
         * @static
         * @param {GameHoodleProto.IUserPlayAgainAnswerRes} message UserPlayAgainAnswerRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPlayAgainAnswerRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.ansconfig != null && message.hasOwnProperty("ansconfig"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ansconfig);
            return writer;
        };

        /**
         * Encodes the specified UserPlayAgainAnswerRes message, length delimited. Does not implicitly {@link GameHoodleProto.UserPlayAgainAnswerRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserPlayAgainAnswerRes
         * @static
         * @param {GameHoodleProto.IUserPlayAgainAnswerRes} message UserPlayAgainAnswerRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPlayAgainAnswerRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserPlayAgainAnswerRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserPlayAgainAnswerRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserPlayAgainAnswerRes} UserPlayAgainAnswerRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPlayAgainAnswerRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserPlayAgainAnswerRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
                    message.ansconfig = reader.string();
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
         * Decodes a UserPlayAgainAnswerRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserPlayAgainAnswerRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserPlayAgainAnswerRes} UserPlayAgainAnswerRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPlayAgainAnswerRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserPlayAgainAnswerRes message.
         * @function verify
         * @memberof GameHoodleProto.UserPlayAgainAnswerRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserPlayAgainAnswerRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.ansconfig != null && message.hasOwnProperty("ansconfig"))
                if (!$util.isString(message.ansconfig))
                    return "ansconfig: string expected";
            return null;
        };

        /**
         * Creates a UserPlayAgainAnswerRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserPlayAgainAnswerRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserPlayAgainAnswerRes} UserPlayAgainAnswerRes
         */
        UserPlayAgainAnswerRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserPlayAgainAnswerRes)
                return object;
            var message = new $root.GameHoodleProto.UserPlayAgainAnswerRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.ansconfig != null)
                message.ansconfig = String(object.ansconfig);
            return message;
        };

        /**
         * Creates a plain object from a UserPlayAgainAnswerRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserPlayAgainAnswerRes
         * @static
         * @param {GameHoodleProto.UserPlayAgainAnswerRes} message UserPlayAgainAnswerRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserPlayAgainAnswerRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.ansconfig = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.ansconfig != null && message.hasOwnProperty("ansconfig"))
                object.ansconfig = message.ansconfig;
            return object;
        };

        /**
         * Converts this UserPlayAgainAnswerRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserPlayAgainAnswerRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPlayAgainAnswerRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserPlayAgainAnswerRes;
    })();

    GameHoodleProto.UserPlayAgainStartRes = (function() {

        /**
         * Properties of a UserPlayAgainStartRes.
         * @memberof GameHoodleProto
         * @interface IUserPlayAgainStartRes
         * @property {number} status UserPlayAgainStartRes status
         */

        /**
         * Constructs a new UserPlayAgainStartRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a UserPlayAgainStartRes.
         * @implements IUserPlayAgainStartRes
         * @constructor
         * @param {GameHoodleProto.IUserPlayAgainStartRes=} [properties] Properties to set
         */
        function UserPlayAgainStartRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserPlayAgainStartRes status.
         * @member {number} status
         * @memberof GameHoodleProto.UserPlayAgainStartRes
         * @instance
         */
        UserPlayAgainStartRes.prototype.status = 0;

        /**
         * Creates a new UserPlayAgainStartRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.UserPlayAgainStartRes
         * @static
         * @param {GameHoodleProto.IUserPlayAgainStartRes=} [properties] Properties to set
         * @returns {GameHoodleProto.UserPlayAgainStartRes} UserPlayAgainStartRes instance
         */
        UserPlayAgainStartRes.create = function create(properties) {
            return new UserPlayAgainStartRes(properties);
        };

        /**
         * Encodes the specified UserPlayAgainStartRes message. Does not implicitly {@link GameHoodleProto.UserPlayAgainStartRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.UserPlayAgainStartRes
         * @static
         * @param {GameHoodleProto.IUserPlayAgainStartRes} message UserPlayAgainStartRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPlayAgainStartRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            return writer;
        };

        /**
         * Encodes the specified UserPlayAgainStartRes message, length delimited. Does not implicitly {@link GameHoodleProto.UserPlayAgainStartRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.UserPlayAgainStartRes
         * @static
         * @param {GameHoodleProto.IUserPlayAgainStartRes} message UserPlayAgainStartRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPlayAgainStartRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserPlayAgainStartRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.UserPlayAgainStartRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.UserPlayAgainStartRes} UserPlayAgainStartRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPlayAgainStartRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.UserPlayAgainStartRes();
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
         * Decodes a UserPlayAgainStartRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.UserPlayAgainStartRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.UserPlayAgainStartRes} UserPlayAgainStartRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPlayAgainStartRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserPlayAgainStartRes message.
         * @function verify
         * @memberof GameHoodleProto.UserPlayAgainStartRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserPlayAgainStartRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates a UserPlayAgainStartRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.UserPlayAgainStartRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.UserPlayAgainStartRes} UserPlayAgainStartRes
         */
        UserPlayAgainStartRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.UserPlayAgainStartRes)
                return object;
            var message = new $root.GameHoodleProto.UserPlayAgainStartRes();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserPlayAgainStartRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.UserPlayAgainStartRes
         * @static
         * @param {GameHoodleProto.UserPlayAgainStartRes} message UserPlayAgainStartRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserPlayAgainStartRes.toObject = function toObject(message, options) {
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
         * Converts this UserPlayAgainStartRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.UserPlayAgainStartRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPlayAgainStartRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserPlayAgainStartRes;
    })();

    GameHoodleProto.RoomListConfigReq = (function() {

        /**
         * Properties of a RoomListConfigReq.
         * @memberof GameHoodleProto
         * @interface IRoomListConfigReq
         */

        /**
         * Constructs a new RoomListConfigReq.
         * @memberof GameHoodleProto
         * @classdesc Represents a RoomListConfigReq.
         * @implements IRoomListConfigReq
         * @constructor
         * @param {GameHoodleProto.IRoomListConfigReq=} [properties] Properties to set
         */
        function RoomListConfigReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new RoomListConfigReq instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.RoomListConfigReq
         * @static
         * @param {GameHoodleProto.IRoomListConfigReq=} [properties] Properties to set
         * @returns {GameHoodleProto.RoomListConfigReq} RoomListConfigReq instance
         */
        RoomListConfigReq.create = function create(properties) {
            return new RoomListConfigReq(properties);
        };

        /**
         * Encodes the specified RoomListConfigReq message. Does not implicitly {@link GameHoodleProto.RoomListConfigReq.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.RoomListConfigReq
         * @static
         * @param {GameHoodleProto.IRoomListConfigReq} message RoomListConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListConfigReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified RoomListConfigReq message, length delimited. Does not implicitly {@link GameHoodleProto.RoomListConfigReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.RoomListConfigReq
         * @static
         * @param {GameHoodleProto.IRoomListConfigReq} message RoomListConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListConfigReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomListConfigReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.RoomListConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.RoomListConfigReq} RoomListConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListConfigReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.RoomListConfigReq();
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
         * Decodes a RoomListConfigReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.RoomListConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.RoomListConfigReq} RoomListConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListConfigReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomListConfigReq message.
         * @function verify
         * @memberof GameHoodleProto.RoomListConfigReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomListConfigReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a RoomListConfigReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.RoomListConfigReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.RoomListConfigReq} RoomListConfigReq
         */
        RoomListConfigReq.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.RoomListConfigReq)
                return object;
            return new $root.GameHoodleProto.RoomListConfigReq();
        };

        /**
         * Creates a plain object from a RoomListConfigReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.RoomListConfigReq
         * @static
         * @param {GameHoodleProto.RoomListConfigReq} message RoomListConfigReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomListConfigReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this RoomListConfigReq to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.RoomListConfigReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomListConfigReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomListConfigReq;
    })();

    GameHoodleProto.RoomListConfigRes = (function() {

        /**
         * Properties of a RoomListConfigRes.
         * @memberof GameHoodleProto
         * @interface IRoomListConfigRes
         * @property {number} status RoomListConfigRes status
         * @property {string|null} [config] RoomListConfigRes config
         */

        /**
         * Constructs a new RoomListConfigRes.
         * @memberof GameHoodleProto
         * @classdesc Represents a RoomListConfigRes.
         * @implements IRoomListConfigRes
         * @constructor
         * @param {GameHoodleProto.IRoomListConfigRes=} [properties] Properties to set
         */
        function RoomListConfigRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomListConfigRes status.
         * @member {number} status
         * @memberof GameHoodleProto.RoomListConfigRes
         * @instance
         */
        RoomListConfigRes.prototype.status = 0;

        /**
         * RoomListConfigRes config.
         * @member {string} config
         * @memberof GameHoodleProto.RoomListConfigRes
         * @instance
         */
        RoomListConfigRes.prototype.config = "";

        /**
         * Creates a new RoomListConfigRes instance using the specified properties.
         * @function create
         * @memberof GameHoodleProto.RoomListConfigRes
         * @static
         * @param {GameHoodleProto.IRoomListConfigRes=} [properties] Properties to set
         * @returns {GameHoodleProto.RoomListConfigRes} RoomListConfigRes instance
         */
        RoomListConfigRes.create = function create(properties) {
            return new RoomListConfigRes(properties);
        };

        /**
         * Encodes the specified RoomListConfigRes message. Does not implicitly {@link GameHoodleProto.RoomListConfigRes.verify|verify} messages.
         * @function encode
         * @memberof GameHoodleProto.RoomListConfigRes
         * @static
         * @param {GameHoodleProto.IRoomListConfigRes} message RoomListConfigRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListConfigRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
            if (message.config != null && message.hasOwnProperty("config"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.config);
            return writer;
        };

        /**
         * Encodes the specified RoomListConfigRes message, length delimited. Does not implicitly {@link GameHoodleProto.RoomListConfigRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameHoodleProto.RoomListConfigRes
         * @static
         * @param {GameHoodleProto.IRoomListConfigRes} message RoomListConfigRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListConfigRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomListConfigRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameHoodleProto.RoomListConfigRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameHoodleProto.RoomListConfigRes} RoomListConfigRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListConfigRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameHoodleProto.RoomListConfigRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.sint32();
                    break;
                case 2:
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
         * Decodes a RoomListConfigRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameHoodleProto.RoomListConfigRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameHoodleProto.RoomListConfigRes} RoomListConfigRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListConfigRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomListConfigRes message.
         * @function verify
         * @memberof GameHoodleProto.RoomListConfigRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomListConfigRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.config != null && message.hasOwnProperty("config"))
                if (!$util.isString(message.config))
                    return "config: string expected";
            return null;
        };

        /**
         * Creates a RoomListConfigRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameHoodleProto.RoomListConfigRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameHoodleProto.RoomListConfigRes} RoomListConfigRes
         */
        RoomListConfigRes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameHoodleProto.RoomListConfigRes)
                return object;
            var message = new $root.GameHoodleProto.RoomListConfigRes();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.config != null)
                message.config = String(object.config);
            return message;
        };

        /**
         * Creates a plain object from a RoomListConfigRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameHoodleProto.RoomListConfigRes
         * @static
         * @param {GameHoodleProto.RoomListConfigRes} message RoomListConfigRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomListConfigRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.config = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = message.config;
            return object;
        };

        /**
         * Converts this RoomListConfigRes to JSON.
         * @function toJSON
         * @memberof GameHoodleProto.RoomListConfigRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomListConfigRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomListConfigRes;
    })();

    return GameHoodleProto;
})();

module.exports = $root;
