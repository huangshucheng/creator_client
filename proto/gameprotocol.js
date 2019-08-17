/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * Stype enum.
 * @exports Stype
 * @enum {string}
 * @property {number} InvalidStype=0 InvalidStype value
 * @property {number} Auth=1 Auth value
 * @property {number} System=2 System value
 * @property {number} Logic=3 Logic value
 */
$root.Stype = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "InvalidStype"] = 0;
    values[valuesById[1] = "Auth"] = 1;
    values[valuesById[2] = "System"] = 2;
    values[valuesById[3] = "Logic"] = 3;
    return values;
})();

/**
 * Cmd enum.
 * @exports Cmd
 * @enum {string}
 * @property {number} INVALIDCMD=0 INVALIDCMD value
 * @property {number} eGuestLoginReq=1 eGuestLoginReq value
 * @property {number} eGuestLoginRes=2 eGuestLoginRes value
 * @property {number} eRelogin=3 eRelogin value
 * @property {number} eUserLostConn=4 eUserLostConn value
 * @property {number} eEditProfileReq=5 eEditProfileReq value
 * @property {number} eEditProfileRes=6 eEditProfileRes value
 * @property {number} eAccountUpgradeReq=7 eAccountUpgradeReq value
 * @property {number} eAccountUpgradeRes=8 eAccountUpgradeRes value
 * @property {number} eUnameLoginReq=9 eUnameLoginReq value
 * @property {number} eUnameLoginRes=10 eUnameLoginRes value
 * @property {number} eLoginOutReq=11 eLoginOutReq value
 * @property {number} eLoginOutRes=12 eLoginOutRes value
 * @property {number} eUserRegistReq=13 eUserRegistReq value
 * @property {number} eUserRegistRes=14 eUserRegistRes value
 * @property {number} eGetUgameInfoReq=15 eGetUgameInfoReq value
 * @property {number} eGetUgameInfoRes=16 eGetUgameInfoRes value
 * @property {number} eRecvLoginBonuesReq=17 eRecvLoginBonuesReq value
 * @property {number} eRecvLoginBonuesRes=18 eRecvLoginBonuesRes value
 * @property {number} eGetWorldRankUchipReq=19 eGetWorldRankUchipReq value
 * @property {number} eGetWorldRankUchipRes=20 eGetWorldRankUchipRes value
 * @property {number} eGetSysMsgReq=21 eGetSysMsgReq value
 * @property {number} eGetSysMsgRes=22 eGetSysMsgRes value
 * @property {number} eLoginLogicReq=23 eLoginLogicReq value
 * @property {number} eLoginLogicRes=24 eLoginLogicRes value
 * @property {number} eEnterZoneReq=25 eEnterZoneReq value
 * @property {number} eEnterZoneRes=26 eEnterZoneRes value
 * @property {number} eEnterMatch=27 eEnterMatch value
 * @property {number} eUserArrived=28 eUserArrived value
 * @property {number} eExitMatchReq=29 eExitMatchReq value
 * @property {number} eExitMatchRes=30 eExitMatchRes value
 * @property {number} eUserExitMatch=31 eUserExitMatch value
 * @property {number} eCreateRoomReq=32 eCreateRoomReq value
 * @property {number} eCreateRoomRes=33 eCreateRoomRes value
 * @property {number} eJoinRoomReq=34 eJoinRoomReq value
 * @property {number} eJoinRoomRes=35 eJoinRoomRes value
 * @property {number} eExitRoomReq=36 eExitRoomReq value
 * @property {number} eExitRoomRes=37 eExitRoomRes value
 * @property {number} eDessolveReq=38 eDessolveReq value
 * @property {number} eDessolveRes=39 eDessolveRes value
 * @property {number} eGetCreateStatusReq=40 eGetCreateStatusReq value
 * @property {number} eGetCreateStatusRes=41 eGetCreateStatusRes value
 * @property {number} eBackRoomReq=42 eBackRoomReq value
 * @property {number} eBackRoomRes=43 eBackRoomRes value
 * @property {number} eUserOffLine=44 eUserOffLine value
 * @property {number} eHeartBeatReq=45 eHeartBeatReq value
 * @property {number} eHeartBeatRes=46 eHeartBeatRes value
 * @property {number} eUserReconnectedReq=47 eUserReconnectedReq value
 * @property {number} eUserReconnectedRes=48 eUserReconnectedRes value
 * @property {number} eUserReadyReq=49 eUserReadyReq value
 * @property {number} eUserReadyRes=50 eUserReadyRes value
 * @property {number} eGameStart=51 eGameStart value
 * @property {number} eUdpTest=52 eUdpTest value
 * @property {number} eLogicFrame=53 eLogicFrame value
 * @property {number} eNextFrameOpts=54 eNextFrameOpts value
 * @property {number} eCheckLinkGameReq=55 eCheckLinkGameReq value
 * @property {number} eCheckLinkGameRes=56 eCheckLinkGameRes value
 * @property {number} eRoomInfoRes=57 eRoomInfoRes value
 * @property {number} eRoomIdRes=58 eRoomIdRes value
 * @property {number} ePlayCountRes=59 ePlayCountRes value
 * @property {number} eUserArrivedInfos=60 eUserArrivedInfos value
 * @property {number} eUserState=61 eUserState value
 * @property {number} eAllUserState=62 eAllUserState value
 * @property {number} eGameResult=63 eGameResult value
 * @property {number} eGameTotalResult=64 eGameTotalResult value
 * @property {number} eClickTouZiNumReq=65 eClickTouZiNumReq value
 * @property {number} eTouZiNumRes=66 eTouZiNumRes value
 * @property {number} eClickTouZiBombRes=67 eClickTouZiBombRes value
 * @property {number} eUserGameInfo=68 eUserGameInfo value
 */
$root.Cmd = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "INVALIDCMD"] = 0;
    values[valuesById[1] = "eGuestLoginReq"] = 1;
    values[valuesById[2] = "eGuestLoginRes"] = 2;
    values[valuesById[3] = "eRelogin"] = 3;
    values[valuesById[4] = "eUserLostConn"] = 4;
    values[valuesById[5] = "eEditProfileReq"] = 5;
    values[valuesById[6] = "eEditProfileRes"] = 6;
    values[valuesById[7] = "eAccountUpgradeReq"] = 7;
    values[valuesById[8] = "eAccountUpgradeRes"] = 8;
    values[valuesById[9] = "eUnameLoginReq"] = 9;
    values[valuesById[10] = "eUnameLoginRes"] = 10;
    values[valuesById[11] = "eLoginOutReq"] = 11;
    values[valuesById[12] = "eLoginOutRes"] = 12;
    values[valuesById[13] = "eUserRegistReq"] = 13;
    values[valuesById[14] = "eUserRegistRes"] = 14;
    values[valuesById[15] = "eGetUgameInfoReq"] = 15;
    values[valuesById[16] = "eGetUgameInfoRes"] = 16;
    values[valuesById[17] = "eRecvLoginBonuesReq"] = 17;
    values[valuesById[18] = "eRecvLoginBonuesRes"] = 18;
    values[valuesById[19] = "eGetWorldRankUchipReq"] = 19;
    values[valuesById[20] = "eGetWorldRankUchipRes"] = 20;
    values[valuesById[21] = "eGetSysMsgReq"] = 21;
    values[valuesById[22] = "eGetSysMsgRes"] = 22;
    values[valuesById[23] = "eLoginLogicReq"] = 23;
    values[valuesById[24] = "eLoginLogicRes"] = 24;
    values[valuesById[25] = "eEnterZoneReq"] = 25;
    values[valuesById[26] = "eEnterZoneRes"] = 26;
    values[valuesById[27] = "eEnterMatch"] = 27;
    values[valuesById[28] = "eUserArrived"] = 28;
    values[valuesById[29] = "eExitMatchReq"] = 29;
    values[valuesById[30] = "eExitMatchRes"] = 30;
    values[valuesById[31] = "eUserExitMatch"] = 31;
    values[valuesById[32] = "eCreateRoomReq"] = 32;
    values[valuesById[33] = "eCreateRoomRes"] = 33;
    values[valuesById[34] = "eJoinRoomReq"] = 34;
    values[valuesById[35] = "eJoinRoomRes"] = 35;
    values[valuesById[36] = "eExitRoomReq"] = 36;
    values[valuesById[37] = "eExitRoomRes"] = 37;
    values[valuesById[38] = "eDessolveReq"] = 38;
    values[valuesById[39] = "eDessolveRes"] = 39;
    values[valuesById[40] = "eGetCreateStatusReq"] = 40;
    values[valuesById[41] = "eGetCreateStatusRes"] = 41;
    values[valuesById[42] = "eBackRoomReq"] = 42;
    values[valuesById[43] = "eBackRoomRes"] = 43;
    values[valuesById[44] = "eUserOffLine"] = 44;
    values[valuesById[45] = "eHeartBeatReq"] = 45;
    values[valuesById[46] = "eHeartBeatRes"] = 46;
    values[valuesById[47] = "eUserReconnectedReq"] = 47;
    values[valuesById[48] = "eUserReconnectedRes"] = 48;
    values[valuesById[49] = "eUserReadyReq"] = 49;
    values[valuesById[50] = "eUserReadyRes"] = 50;
    values[valuesById[51] = "eGameStart"] = 51;
    values[valuesById[52] = "eUdpTest"] = 52;
    values[valuesById[53] = "eLogicFrame"] = 53;
    values[valuesById[54] = "eNextFrameOpts"] = 54;
    values[valuesById[55] = "eCheckLinkGameReq"] = 55;
    values[valuesById[56] = "eCheckLinkGameRes"] = 56;
    values[valuesById[57] = "eRoomInfoRes"] = 57;
    values[valuesById[58] = "eRoomIdRes"] = 58;
    values[valuesById[59] = "ePlayCountRes"] = 59;
    values[valuesById[60] = "eUserArrivedInfos"] = 60;
    values[valuesById[61] = "eUserState"] = 61;
    values[valuesById[62] = "eAllUserState"] = 62;
    values[valuesById[63] = "eGameResult"] = 63;
    values[valuesById[64] = "eGameTotalResult"] = 64;
    values[valuesById[65] = "eClickTouZiNumReq"] = 65;
    values[valuesById[66] = "eTouZiNumRes"] = 66;
    values[valuesById[67] = "eClickTouZiBombRes"] = 67;
    values[valuesById[68] = "eUserGameInfo"] = 68;
    return values;
})();

$root.GuestLoginReq = (function() {

    /**
     * Properties of a GuestLoginReq.
     * @exports IGuestLoginReq
     * @interface IGuestLoginReq
     * @property {string} guestkey GuestLoginReq guestkey
     */

    /**
     * Constructs a new GuestLoginReq.
     * @exports GuestLoginReq
     * @classdesc Represents a GuestLoginReq.
     * @implements IGuestLoginReq
     * @constructor
     * @param {IGuestLoginReq=} [properties] Properties to set
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
     * @memberof GuestLoginReq
     * @instance
     */
    GuestLoginReq.prototype.guestkey = "";

    /**
     * Creates a new GuestLoginReq instance using the specified properties.
     * @function create
     * @memberof GuestLoginReq
     * @static
     * @param {IGuestLoginReq=} [properties] Properties to set
     * @returns {GuestLoginReq} GuestLoginReq instance
     */
    GuestLoginReq.create = function create(properties) {
        return new GuestLoginReq(properties);
    };

    /**
     * Encodes the specified GuestLoginReq message. Does not implicitly {@link GuestLoginReq.verify|verify} messages.
     * @function encode
     * @memberof GuestLoginReq
     * @static
     * @param {IGuestLoginReq} message GuestLoginReq message or plain object to encode
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
     * Encodes the specified GuestLoginReq message, length delimited. Does not implicitly {@link GuestLoginReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GuestLoginReq
     * @static
     * @param {IGuestLoginReq} message GuestLoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuestLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GuestLoginReq message from the specified reader or buffer.
     * @function decode
     * @memberof GuestLoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GuestLoginReq} GuestLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuestLoginReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GuestLoginReq();
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
     * @memberof GuestLoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GuestLoginReq} GuestLoginReq
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
     * @memberof GuestLoginReq
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
     * @memberof GuestLoginReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GuestLoginReq} GuestLoginReq
     */
    GuestLoginReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GuestLoginReq)
            return object;
        var message = new $root.GuestLoginReq();
        if (object.guestkey != null)
            message.guestkey = String(object.guestkey);
        return message;
    };

    /**
     * Creates a plain object from a GuestLoginReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GuestLoginReq
     * @static
     * @param {GuestLoginReq} message GuestLoginReq
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
     * @memberof GuestLoginReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GuestLoginReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GuestLoginReq;
})();

$root.UnameLoginReq = (function() {

    /**
     * Properties of an UnameLoginReq.
     * @exports IUnameLoginReq
     * @interface IUnameLoginReq
     * @property {string} uname UnameLoginReq uname
     * @property {string} upwd UnameLoginReq upwd
     */

    /**
     * Constructs a new UnameLoginReq.
     * @exports UnameLoginReq
     * @classdesc Represents an UnameLoginReq.
     * @implements IUnameLoginReq
     * @constructor
     * @param {IUnameLoginReq=} [properties] Properties to set
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
     * @memberof UnameLoginReq
     * @instance
     */
    UnameLoginReq.prototype.uname = "";

    /**
     * UnameLoginReq upwd.
     * @member {string} upwd
     * @memberof UnameLoginReq
     * @instance
     */
    UnameLoginReq.prototype.upwd = "";

    /**
     * Creates a new UnameLoginReq instance using the specified properties.
     * @function create
     * @memberof UnameLoginReq
     * @static
     * @param {IUnameLoginReq=} [properties] Properties to set
     * @returns {UnameLoginReq} UnameLoginReq instance
     */
    UnameLoginReq.create = function create(properties) {
        return new UnameLoginReq(properties);
    };

    /**
     * Encodes the specified UnameLoginReq message. Does not implicitly {@link UnameLoginReq.verify|verify} messages.
     * @function encode
     * @memberof UnameLoginReq
     * @static
     * @param {IUnameLoginReq} message UnameLoginReq message or plain object to encode
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
     * Encodes the specified UnameLoginReq message, length delimited. Does not implicitly {@link UnameLoginReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UnameLoginReq
     * @static
     * @param {IUnameLoginReq} message UnameLoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UnameLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UnameLoginReq message from the specified reader or buffer.
     * @function decode
     * @memberof UnameLoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UnameLoginReq} UnameLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UnameLoginReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UnameLoginReq();
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
     * @memberof UnameLoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UnameLoginReq} UnameLoginReq
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
     * @memberof UnameLoginReq
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
     * @memberof UnameLoginReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UnameLoginReq} UnameLoginReq
     */
    UnameLoginReq.fromObject = function fromObject(object) {
        if (object instanceof $root.UnameLoginReq)
            return object;
        var message = new $root.UnameLoginReq();
        if (object.uname != null)
            message.uname = String(object.uname);
        if (object.upwd != null)
            message.upwd = String(object.upwd);
        return message;
    };

    /**
     * Creates a plain object from an UnameLoginReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UnameLoginReq
     * @static
     * @param {UnameLoginReq} message UnameLoginReq
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
     * @memberof UnameLoginReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UnameLoginReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UnameLoginReq;
})();

$root.UserCenterInfo = (function() {

    /**
     * Properties of a UserCenterInfo.
     * @exports IUserCenterInfo
     * @interface IUserCenterInfo
     * @property {string} unick UserCenterInfo unick
     * @property {number} uface UserCenterInfo uface
     * @property {number} usex UserCenterInfo usex
     * @property {number} uvip UserCenterInfo uvip
     * @property {number} uid UserCenterInfo uid
     * @property {string|null} [brandid] UserCenterInfo brandid
     * @property {string|null} [numberid] UserCenterInfo numberid
     * @property {string|null} [areaid] UserCenterInfo areaid
     */

    /**
     * Constructs a new UserCenterInfo.
     * @exports UserCenterInfo
     * @classdesc Represents a UserCenterInfo.
     * @implements IUserCenterInfo
     * @constructor
     * @param {IUserCenterInfo=} [properties] Properties to set
     */
    function UserCenterInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserCenterInfo unick.
     * @member {string} unick
     * @memberof UserCenterInfo
     * @instance
     */
    UserCenterInfo.prototype.unick = "";

    /**
     * UserCenterInfo uface.
     * @member {number} uface
     * @memberof UserCenterInfo
     * @instance
     */
    UserCenterInfo.prototype.uface = 0;

    /**
     * UserCenterInfo usex.
     * @member {number} usex
     * @memberof UserCenterInfo
     * @instance
     */
    UserCenterInfo.prototype.usex = 0;

    /**
     * UserCenterInfo uvip.
     * @member {number} uvip
     * @memberof UserCenterInfo
     * @instance
     */
    UserCenterInfo.prototype.uvip = 0;

    /**
     * UserCenterInfo uid.
     * @member {number} uid
     * @memberof UserCenterInfo
     * @instance
     */
    UserCenterInfo.prototype.uid = 0;

    /**
     * UserCenterInfo brandid.
     * @member {string} brandid
     * @memberof UserCenterInfo
     * @instance
     */
    UserCenterInfo.prototype.brandid = "";

    /**
     * UserCenterInfo numberid.
     * @member {string} numberid
     * @memberof UserCenterInfo
     * @instance
     */
    UserCenterInfo.prototype.numberid = "";

    /**
     * UserCenterInfo areaid.
     * @member {string} areaid
     * @memberof UserCenterInfo
     * @instance
     */
    UserCenterInfo.prototype.areaid = "";

    /**
     * Creates a new UserCenterInfo instance using the specified properties.
     * @function create
     * @memberof UserCenterInfo
     * @static
     * @param {IUserCenterInfo=} [properties] Properties to set
     * @returns {UserCenterInfo} UserCenterInfo instance
     */
    UserCenterInfo.create = function create(properties) {
        return new UserCenterInfo(properties);
    };

    /**
     * Encodes the specified UserCenterInfo message. Does not implicitly {@link UserCenterInfo.verify|verify} messages.
     * @function encode
     * @memberof UserCenterInfo
     * @static
     * @param {IUserCenterInfo} message UserCenterInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserCenterInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.unick);
        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.uface);
        writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.usex);
        writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.uvip);
        writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.uid);
        if (message.brandid != null && message.hasOwnProperty("brandid"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.brandid);
        if (message.numberid != null && message.hasOwnProperty("numberid"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.numberid);
        if (message.areaid != null && message.hasOwnProperty("areaid"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.areaid);
        return writer;
    };

    /**
     * Encodes the specified UserCenterInfo message, length delimited. Does not implicitly {@link UserCenterInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserCenterInfo
     * @static
     * @param {IUserCenterInfo} message UserCenterInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserCenterInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserCenterInfo message from the specified reader or buffer.
     * @function decode
     * @memberof UserCenterInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserCenterInfo} UserCenterInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserCenterInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserCenterInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.unick = reader.string();
                break;
            case 2:
                message.uface = reader.sint32();
                break;
            case 3:
                message.usex = reader.sint32();
                break;
            case 4:
                message.uvip = reader.sint32();
                break;
            case 5:
                message.uid = reader.sint32();
                break;
            case 6:
                message.brandid = reader.string();
                break;
            case 7:
                message.numberid = reader.string();
                break;
            case 8:
                message.areaid = reader.string();
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
        if (!message.hasOwnProperty("uvip"))
            throw $util.ProtocolError("missing required 'uvip'", { instance: message });
        if (!message.hasOwnProperty("uid"))
            throw $util.ProtocolError("missing required 'uid'", { instance: message });
        return message;
    };

    /**
     * Decodes a UserCenterInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserCenterInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserCenterInfo} UserCenterInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserCenterInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserCenterInfo message.
     * @function verify
     * @memberof UserCenterInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserCenterInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.unick))
            return "unick: string expected";
        if (!$util.isInteger(message.uface))
            return "uface: integer expected";
        if (!$util.isInteger(message.usex))
            return "usex: integer expected";
        if (!$util.isInteger(message.uvip))
            return "uvip: integer expected";
        if (!$util.isInteger(message.uid))
            return "uid: integer expected";
        if (message.brandid != null && message.hasOwnProperty("brandid"))
            if (!$util.isString(message.brandid))
                return "brandid: string expected";
        if (message.numberid != null && message.hasOwnProperty("numberid"))
            if (!$util.isString(message.numberid))
                return "numberid: string expected";
        if (message.areaid != null && message.hasOwnProperty("areaid"))
            if (!$util.isString(message.areaid))
                return "areaid: string expected";
        return null;
    };

    /**
     * Creates a UserCenterInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserCenterInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserCenterInfo} UserCenterInfo
     */
    UserCenterInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.UserCenterInfo)
            return object;
        var message = new $root.UserCenterInfo();
        if (object.unick != null)
            message.unick = String(object.unick);
        if (object.uface != null)
            message.uface = object.uface | 0;
        if (object.usex != null)
            message.usex = object.usex | 0;
        if (object.uvip != null)
            message.uvip = object.uvip | 0;
        if (object.uid != null)
            message.uid = object.uid | 0;
        if (object.brandid != null)
            message.brandid = String(object.brandid);
        if (object.numberid != null)
            message.numberid = String(object.numberid);
        if (object.areaid != null)
            message.areaid = String(object.areaid);
        return message;
    };

    /**
     * Creates a plain object from a UserCenterInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserCenterInfo
     * @static
     * @param {UserCenterInfo} message UserCenterInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserCenterInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.unick = "";
            object.uface = 0;
            object.usex = 0;
            object.uvip = 0;
            object.uid = 0;
            object.brandid = "";
            object.numberid = "";
            object.areaid = "";
        }
        if (message.unick != null && message.hasOwnProperty("unick"))
            object.unick = message.unick;
        if (message.uface != null && message.hasOwnProperty("uface"))
            object.uface = message.uface;
        if (message.usex != null && message.hasOwnProperty("usex"))
            object.usex = message.usex;
        if (message.uvip != null && message.hasOwnProperty("uvip"))
            object.uvip = message.uvip;
        if (message.uid != null && message.hasOwnProperty("uid"))
            object.uid = message.uid;
        if (message.brandid != null && message.hasOwnProperty("brandid"))
            object.brandid = message.brandid;
        if (message.numberid != null && message.hasOwnProperty("numberid"))
            object.numberid = message.numberid;
        if (message.areaid != null && message.hasOwnProperty("areaid"))
            object.areaid = message.areaid;
        return object;
    };

    /**
     * Converts this UserCenterInfo to JSON.
     * @function toJSON
     * @memberof UserCenterInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserCenterInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserCenterInfo;
})();

$root.GuestLoginRes = (function() {

    /**
     * Properties of a GuestLoginRes.
     * @exports IGuestLoginRes
     * @interface IGuestLoginRes
     * @property {number} status GuestLoginRes status
     * @property {IUserCenterInfo|null} [uinfo] GuestLoginRes uinfo
     */

    /**
     * Constructs a new GuestLoginRes.
     * @exports GuestLoginRes
     * @classdesc Represents a GuestLoginRes.
     * @implements IGuestLoginRes
     * @constructor
     * @param {IGuestLoginRes=} [properties] Properties to set
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
     * @memberof GuestLoginRes
     * @instance
     */
    GuestLoginRes.prototype.status = 0;

    /**
     * GuestLoginRes uinfo.
     * @member {IUserCenterInfo|null|undefined} uinfo
     * @memberof GuestLoginRes
     * @instance
     */
    GuestLoginRes.prototype.uinfo = null;

    /**
     * Creates a new GuestLoginRes instance using the specified properties.
     * @function create
     * @memberof GuestLoginRes
     * @static
     * @param {IGuestLoginRes=} [properties] Properties to set
     * @returns {GuestLoginRes} GuestLoginRes instance
     */
    GuestLoginRes.create = function create(properties) {
        return new GuestLoginRes(properties);
    };

    /**
     * Encodes the specified GuestLoginRes message. Does not implicitly {@link GuestLoginRes.verify|verify} messages.
     * @function encode
     * @memberof GuestLoginRes
     * @static
     * @param {IGuestLoginRes} message GuestLoginRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuestLoginRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        if (message.uinfo != null && message.hasOwnProperty("uinfo"))
            $root.UserCenterInfo.encode(message.uinfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GuestLoginRes message, length delimited. Does not implicitly {@link GuestLoginRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GuestLoginRes
     * @static
     * @param {IGuestLoginRes} message GuestLoginRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuestLoginRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GuestLoginRes message from the specified reader or buffer.
     * @function decode
     * @memberof GuestLoginRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GuestLoginRes} GuestLoginRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuestLoginRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GuestLoginRes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.status = reader.sint32();
                break;
            case 2:
                message.uinfo = $root.UserCenterInfo.decode(reader, reader.uint32());
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
     * @memberof GuestLoginRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GuestLoginRes} GuestLoginRes
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
     * @memberof GuestLoginRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GuestLoginRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.status))
            return "status: integer expected";
        if (message.uinfo != null && message.hasOwnProperty("uinfo")) {
            var error = $root.UserCenterInfo.verify(message.uinfo);
            if (error)
                return "uinfo." + error;
        }
        return null;
    };

    /**
     * Creates a GuestLoginRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GuestLoginRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GuestLoginRes} GuestLoginRes
     */
    GuestLoginRes.fromObject = function fromObject(object) {
        if (object instanceof $root.GuestLoginRes)
            return object;
        var message = new $root.GuestLoginRes();
        if (object.status != null)
            message.status = object.status | 0;
        if (object.uinfo != null) {
            if (typeof object.uinfo !== "object")
                throw TypeError(".GuestLoginRes.uinfo: object expected");
            message.uinfo = $root.UserCenterInfo.fromObject(object.uinfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a GuestLoginRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GuestLoginRes
     * @static
     * @param {GuestLoginRes} message GuestLoginRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GuestLoginRes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.status = 0;
            object.uinfo = null;
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.uinfo != null && message.hasOwnProperty("uinfo"))
            object.uinfo = $root.UserCenterInfo.toObject(message.uinfo, options);
        return object;
    };

    /**
     * Converts this GuestLoginRes to JSON.
     * @function toJSON
     * @memberof GuestLoginRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GuestLoginRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GuestLoginRes;
})();

$root.Relogin = (function() {

    /**
     * Properties of a Relogin.
     * @exports IRelogin
     * @interface IRelogin
     */

    /**
     * Constructs a new Relogin.
     * @exports Relogin
     * @classdesc Represents a Relogin.
     * @implements IRelogin
     * @constructor
     * @param {IRelogin=} [properties] Properties to set
     */
    function Relogin(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Relogin instance using the specified properties.
     * @function create
     * @memberof Relogin
     * @static
     * @param {IRelogin=} [properties] Properties to set
     * @returns {Relogin} Relogin instance
     */
    Relogin.create = function create(properties) {
        return new Relogin(properties);
    };

    /**
     * Encodes the specified Relogin message. Does not implicitly {@link Relogin.verify|verify} messages.
     * @function encode
     * @memberof Relogin
     * @static
     * @param {IRelogin} message Relogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Relogin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Relogin message, length delimited. Does not implicitly {@link Relogin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Relogin
     * @static
     * @param {IRelogin} message Relogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Relogin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Relogin message from the specified reader or buffer.
     * @function decode
     * @memberof Relogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Relogin} Relogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Relogin.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Relogin();
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
     * Decodes a Relogin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Relogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Relogin} Relogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Relogin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Relogin message.
     * @function verify
     * @memberof Relogin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Relogin.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Relogin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Relogin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Relogin} Relogin
     */
    Relogin.fromObject = function fromObject(object) {
        if (object instanceof $root.Relogin)
            return object;
        return new $root.Relogin();
    };

    /**
     * Creates a plain object from a Relogin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Relogin
     * @static
     * @param {Relogin} message Relogin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Relogin.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Relogin to JSON.
     * @function toJSON
     * @memberof Relogin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Relogin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Relogin;
})();

$root.UserLostConn = (function() {

    /**
     * Properties of a UserLostConn.
     * @exports IUserLostConn
     * @interface IUserLostConn
     */

    /**
     * Constructs a new UserLostConn.
     * @exports UserLostConn
     * @classdesc Represents a UserLostConn.
     * @implements IUserLostConn
     * @constructor
     * @param {IUserLostConn=} [properties] Properties to set
     */
    function UserLostConn(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new UserLostConn instance using the specified properties.
     * @function create
     * @memberof UserLostConn
     * @static
     * @param {IUserLostConn=} [properties] Properties to set
     * @returns {UserLostConn} UserLostConn instance
     */
    UserLostConn.create = function create(properties) {
        return new UserLostConn(properties);
    };

    /**
     * Encodes the specified UserLostConn message. Does not implicitly {@link UserLostConn.verify|verify} messages.
     * @function encode
     * @memberof UserLostConn
     * @static
     * @param {IUserLostConn} message UserLostConn message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserLostConn.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified UserLostConn message, length delimited. Does not implicitly {@link UserLostConn.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserLostConn
     * @static
     * @param {IUserLostConn} message UserLostConn message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserLostConn.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserLostConn message from the specified reader or buffer.
     * @function decode
     * @memberof UserLostConn
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserLostConn} UserLostConn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserLostConn.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserLostConn();
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
     * Decodes a UserLostConn message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserLostConn
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserLostConn} UserLostConn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserLostConn.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserLostConn message.
     * @function verify
     * @memberof UserLostConn
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserLostConn.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a UserLostConn message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserLostConn
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserLostConn} UserLostConn
     */
    UserLostConn.fromObject = function fromObject(object) {
        if (object instanceof $root.UserLostConn)
            return object;
        return new $root.UserLostConn();
    };

    /**
     * Creates a plain object from a UserLostConn message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserLostConn
     * @static
     * @param {UserLostConn} message UserLostConn
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserLostConn.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this UserLostConn to JSON.
     * @function toJSON
     * @memberof UserLostConn
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserLostConn.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserLostConn;
})();

$root.UnameLoginRes = (function() {

    /**
     * Properties of an UnameLoginRes.
     * @exports IUnameLoginRes
     * @interface IUnameLoginRes
     * @property {number} status UnameLoginRes status
     * @property {IUserCenterInfo|null} [uinfo] UnameLoginRes uinfo
     */

    /**
     * Constructs a new UnameLoginRes.
     * @exports UnameLoginRes
     * @classdesc Represents an UnameLoginRes.
     * @implements IUnameLoginRes
     * @constructor
     * @param {IUnameLoginRes=} [properties] Properties to set
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
     * @memberof UnameLoginRes
     * @instance
     */
    UnameLoginRes.prototype.status = 0;

    /**
     * UnameLoginRes uinfo.
     * @member {IUserCenterInfo|null|undefined} uinfo
     * @memberof UnameLoginRes
     * @instance
     */
    UnameLoginRes.prototype.uinfo = null;

    /**
     * Creates a new UnameLoginRes instance using the specified properties.
     * @function create
     * @memberof UnameLoginRes
     * @static
     * @param {IUnameLoginRes=} [properties] Properties to set
     * @returns {UnameLoginRes} UnameLoginRes instance
     */
    UnameLoginRes.create = function create(properties) {
        return new UnameLoginRes(properties);
    };

    /**
     * Encodes the specified UnameLoginRes message. Does not implicitly {@link UnameLoginRes.verify|verify} messages.
     * @function encode
     * @memberof UnameLoginRes
     * @static
     * @param {IUnameLoginRes} message UnameLoginRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UnameLoginRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        if (message.uinfo != null && message.hasOwnProperty("uinfo"))
            $root.UserCenterInfo.encode(message.uinfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified UnameLoginRes message, length delimited. Does not implicitly {@link UnameLoginRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UnameLoginRes
     * @static
     * @param {IUnameLoginRes} message UnameLoginRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UnameLoginRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UnameLoginRes message from the specified reader or buffer.
     * @function decode
     * @memberof UnameLoginRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UnameLoginRes} UnameLoginRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UnameLoginRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UnameLoginRes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.status = reader.sint32();
                break;
            case 2:
                message.uinfo = $root.UserCenterInfo.decode(reader, reader.uint32());
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
     * Decodes an UnameLoginRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UnameLoginRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UnameLoginRes} UnameLoginRes
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
     * @memberof UnameLoginRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UnameLoginRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.status))
            return "status: integer expected";
        if (message.uinfo != null && message.hasOwnProperty("uinfo")) {
            var error = $root.UserCenterInfo.verify(message.uinfo);
            if (error)
                return "uinfo." + error;
        }
        return null;
    };

    /**
     * Creates an UnameLoginRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UnameLoginRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UnameLoginRes} UnameLoginRes
     */
    UnameLoginRes.fromObject = function fromObject(object) {
        if (object instanceof $root.UnameLoginRes)
            return object;
        var message = new $root.UnameLoginRes();
        if (object.status != null)
            message.status = object.status | 0;
        if (object.uinfo != null) {
            if (typeof object.uinfo !== "object")
                throw TypeError(".UnameLoginRes.uinfo: object expected");
            message.uinfo = $root.UserCenterInfo.fromObject(object.uinfo);
        }
        return message;
    };

    /**
     * Creates a plain object from an UnameLoginRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UnameLoginRes
     * @static
     * @param {UnameLoginRes} message UnameLoginRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UnameLoginRes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.status = 0;
            object.uinfo = null;
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.uinfo != null && message.hasOwnProperty("uinfo"))
            object.uinfo = $root.UserCenterInfo.toObject(message.uinfo, options);
        return object;
    };

    /**
     * Converts this UnameLoginRes to JSON.
     * @function toJSON
     * @memberof UnameLoginRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UnameLoginRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UnameLoginRes;
})();

$root.EditProfileReq = (function() {

    /**
     * Properties of an EditProfileReq.
     * @exports IEditProfileReq
     * @interface IEditProfileReq
     * @property {string} unick EditProfileReq unick
     * @property {number} uface EditProfileReq uface
     * @property {number} usex EditProfileReq usex
     */

    /**
     * Constructs a new EditProfileReq.
     * @exports EditProfileReq
     * @classdesc Represents an EditProfileReq.
     * @implements IEditProfileReq
     * @constructor
     * @param {IEditProfileReq=} [properties] Properties to set
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
     * @memberof EditProfileReq
     * @instance
     */
    EditProfileReq.prototype.unick = "";

    /**
     * EditProfileReq uface.
     * @member {number} uface
     * @memberof EditProfileReq
     * @instance
     */
    EditProfileReq.prototype.uface = 0;

    /**
     * EditProfileReq usex.
     * @member {number} usex
     * @memberof EditProfileReq
     * @instance
     */
    EditProfileReq.prototype.usex = 0;

    /**
     * Creates a new EditProfileReq instance using the specified properties.
     * @function create
     * @memberof EditProfileReq
     * @static
     * @param {IEditProfileReq=} [properties] Properties to set
     * @returns {EditProfileReq} EditProfileReq instance
     */
    EditProfileReq.create = function create(properties) {
        return new EditProfileReq(properties);
    };

    /**
     * Encodes the specified EditProfileReq message. Does not implicitly {@link EditProfileReq.verify|verify} messages.
     * @function encode
     * @memberof EditProfileReq
     * @static
     * @param {IEditProfileReq} message EditProfileReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EditProfileReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.unick);
        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.uface);
        writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.usex);
        return writer;
    };

    /**
     * Encodes the specified EditProfileReq message, length delimited. Does not implicitly {@link EditProfileReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EditProfileReq
     * @static
     * @param {IEditProfileReq} message EditProfileReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EditProfileReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EditProfileReq message from the specified reader or buffer.
     * @function decode
     * @memberof EditProfileReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EditProfileReq} EditProfileReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EditProfileReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EditProfileReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.unick = reader.string();
                break;
            case 2:
                message.uface = reader.sint32();
                break;
            case 3:
                message.usex = reader.sint32();
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
     * @memberof EditProfileReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EditProfileReq} EditProfileReq
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
     * @memberof EditProfileReq
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
     * @memberof EditProfileReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EditProfileReq} EditProfileReq
     */
    EditProfileReq.fromObject = function fromObject(object) {
        if (object instanceof $root.EditProfileReq)
            return object;
        var message = new $root.EditProfileReq();
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
     * @memberof EditProfileReq
     * @static
     * @param {EditProfileReq} message EditProfileReq
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
     * @memberof EditProfileReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EditProfileReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EditProfileReq;
})();

$root.EditProfileRes = (function() {

    /**
     * Properties of an EditProfileRes.
     * @exports IEditProfileRes
     * @interface IEditProfileRes
     * @property {number} status EditProfileRes status
     */

    /**
     * Constructs a new EditProfileRes.
     * @exports EditProfileRes
     * @classdesc Represents an EditProfileRes.
     * @implements IEditProfileRes
     * @constructor
     * @param {IEditProfileRes=} [properties] Properties to set
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
     * @memberof EditProfileRes
     * @instance
     */
    EditProfileRes.prototype.status = 0;

    /**
     * Creates a new EditProfileRes instance using the specified properties.
     * @function create
     * @memberof EditProfileRes
     * @static
     * @param {IEditProfileRes=} [properties] Properties to set
     * @returns {EditProfileRes} EditProfileRes instance
     */
    EditProfileRes.create = function create(properties) {
        return new EditProfileRes(properties);
    };

    /**
     * Encodes the specified EditProfileRes message. Does not implicitly {@link EditProfileRes.verify|verify} messages.
     * @function encode
     * @memberof EditProfileRes
     * @static
     * @param {IEditProfileRes} message EditProfileRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EditProfileRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified EditProfileRes message, length delimited. Does not implicitly {@link EditProfileRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EditProfileRes
     * @static
     * @param {IEditProfileRes} message EditProfileRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EditProfileRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EditProfileRes message from the specified reader or buffer.
     * @function decode
     * @memberof EditProfileRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EditProfileRes} EditProfileRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EditProfileRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EditProfileRes();
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
     * Decodes an EditProfileRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EditProfileRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EditProfileRes} EditProfileRes
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
     * @memberof EditProfileRes
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
     * @memberof EditProfileRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EditProfileRes} EditProfileRes
     */
    EditProfileRes.fromObject = function fromObject(object) {
        if (object instanceof $root.EditProfileRes)
            return object;
        var message = new $root.EditProfileRes();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from an EditProfileRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EditProfileRes
     * @static
     * @param {EditProfileRes} message EditProfileRes
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
     * @memberof EditProfileRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EditProfileRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EditProfileRes;
})();

$root.AccountUpgradeReq = (function() {

    /**
     * Properties of an AccountUpgradeReq.
     * @exports IAccountUpgradeReq
     * @interface IAccountUpgradeReq
     * @property {string} uname AccountUpgradeReq uname
     * @property {string} upwdMd5 AccountUpgradeReq upwdMd5
     */

    /**
     * Constructs a new AccountUpgradeReq.
     * @exports AccountUpgradeReq
     * @classdesc Represents an AccountUpgradeReq.
     * @implements IAccountUpgradeReq
     * @constructor
     * @param {IAccountUpgradeReq=} [properties] Properties to set
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
     * @memberof AccountUpgradeReq
     * @instance
     */
    AccountUpgradeReq.prototype.uname = "";

    /**
     * AccountUpgradeReq upwdMd5.
     * @member {string} upwdMd5
     * @memberof AccountUpgradeReq
     * @instance
     */
    AccountUpgradeReq.prototype.upwdMd5 = "";

    /**
     * Creates a new AccountUpgradeReq instance using the specified properties.
     * @function create
     * @memberof AccountUpgradeReq
     * @static
     * @param {IAccountUpgradeReq=} [properties] Properties to set
     * @returns {AccountUpgradeReq} AccountUpgradeReq instance
     */
    AccountUpgradeReq.create = function create(properties) {
        return new AccountUpgradeReq(properties);
    };

    /**
     * Encodes the specified AccountUpgradeReq message. Does not implicitly {@link AccountUpgradeReq.verify|verify} messages.
     * @function encode
     * @memberof AccountUpgradeReq
     * @static
     * @param {IAccountUpgradeReq} message AccountUpgradeReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountUpgradeReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.uname);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.upwdMd5);
        return writer;
    };

    /**
     * Encodes the specified AccountUpgradeReq message, length delimited. Does not implicitly {@link AccountUpgradeReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AccountUpgradeReq
     * @static
     * @param {IAccountUpgradeReq} message AccountUpgradeReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountUpgradeReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AccountUpgradeReq message from the specified reader or buffer.
     * @function decode
     * @memberof AccountUpgradeReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AccountUpgradeReq} AccountUpgradeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AccountUpgradeReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AccountUpgradeReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uname = reader.string();
                break;
            case 2:
                message.upwdMd5 = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("uname"))
            throw $util.ProtocolError("missing required 'uname'", { instance: message });
        if (!message.hasOwnProperty("upwdMd5"))
            throw $util.ProtocolError("missing required 'upwdMd5'", { instance: message });
        return message;
    };

    /**
     * Decodes an AccountUpgradeReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AccountUpgradeReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AccountUpgradeReq} AccountUpgradeReq
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
     * @memberof AccountUpgradeReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AccountUpgradeReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.uname))
            return "uname: string expected";
        if (!$util.isString(message.upwdMd5))
            return "upwdMd5: string expected";
        return null;
    };

    /**
     * Creates an AccountUpgradeReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AccountUpgradeReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AccountUpgradeReq} AccountUpgradeReq
     */
    AccountUpgradeReq.fromObject = function fromObject(object) {
        if (object instanceof $root.AccountUpgradeReq)
            return object;
        var message = new $root.AccountUpgradeReq();
        if (object.uname != null)
            message.uname = String(object.uname);
        if (object.upwdMd5 != null)
            message.upwdMd5 = String(object.upwdMd5);
        return message;
    };

    /**
     * Creates a plain object from an AccountUpgradeReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AccountUpgradeReq
     * @static
     * @param {AccountUpgradeReq} message AccountUpgradeReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AccountUpgradeReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.uname = "";
            object.upwdMd5 = "";
        }
        if (message.uname != null && message.hasOwnProperty("uname"))
            object.uname = message.uname;
        if (message.upwdMd5 != null && message.hasOwnProperty("upwdMd5"))
            object.upwdMd5 = message.upwdMd5;
        return object;
    };

    /**
     * Converts this AccountUpgradeReq to JSON.
     * @function toJSON
     * @memberof AccountUpgradeReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AccountUpgradeReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AccountUpgradeReq;
})();

$root.AccountUpgradeRes = (function() {

    /**
     * Properties of an AccountUpgradeRes.
     * @exports IAccountUpgradeRes
     * @interface IAccountUpgradeRes
     * @property {number} status AccountUpgradeRes status
     */

    /**
     * Constructs a new AccountUpgradeRes.
     * @exports AccountUpgradeRes
     * @classdesc Represents an AccountUpgradeRes.
     * @implements IAccountUpgradeRes
     * @constructor
     * @param {IAccountUpgradeRes=} [properties] Properties to set
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
     * @memberof AccountUpgradeRes
     * @instance
     */
    AccountUpgradeRes.prototype.status = 0;

    /**
     * Creates a new AccountUpgradeRes instance using the specified properties.
     * @function create
     * @memberof AccountUpgradeRes
     * @static
     * @param {IAccountUpgradeRes=} [properties] Properties to set
     * @returns {AccountUpgradeRes} AccountUpgradeRes instance
     */
    AccountUpgradeRes.create = function create(properties) {
        return new AccountUpgradeRes(properties);
    };

    /**
     * Encodes the specified AccountUpgradeRes message. Does not implicitly {@link AccountUpgradeRes.verify|verify} messages.
     * @function encode
     * @memberof AccountUpgradeRes
     * @static
     * @param {IAccountUpgradeRes} message AccountUpgradeRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountUpgradeRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified AccountUpgradeRes message, length delimited. Does not implicitly {@link AccountUpgradeRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AccountUpgradeRes
     * @static
     * @param {IAccountUpgradeRes} message AccountUpgradeRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountUpgradeRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AccountUpgradeRes message from the specified reader or buffer.
     * @function decode
     * @memberof AccountUpgradeRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AccountUpgradeRes} AccountUpgradeRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AccountUpgradeRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AccountUpgradeRes();
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
     * Decodes an AccountUpgradeRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AccountUpgradeRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AccountUpgradeRes} AccountUpgradeRes
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
     * @memberof AccountUpgradeRes
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
     * @memberof AccountUpgradeRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AccountUpgradeRes} AccountUpgradeRes
     */
    AccountUpgradeRes.fromObject = function fromObject(object) {
        if (object instanceof $root.AccountUpgradeRes)
            return object;
        var message = new $root.AccountUpgradeRes();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from an AccountUpgradeRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AccountUpgradeRes
     * @static
     * @param {AccountUpgradeRes} message AccountUpgradeRes
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
     * @memberof AccountUpgradeRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AccountUpgradeRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AccountUpgradeRes;
})();

$root.LoginOutReq = (function() {

    /**
     * Properties of a LoginOutReq.
     * @exports ILoginOutReq
     * @interface ILoginOutReq
     */

    /**
     * Constructs a new LoginOutReq.
     * @exports LoginOutReq
     * @classdesc Represents a LoginOutReq.
     * @implements ILoginOutReq
     * @constructor
     * @param {ILoginOutReq=} [properties] Properties to set
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
     * @memberof LoginOutReq
     * @static
     * @param {ILoginOutReq=} [properties] Properties to set
     * @returns {LoginOutReq} LoginOutReq instance
     */
    LoginOutReq.create = function create(properties) {
        return new LoginOutReq(properties);
    };

    /**
     * Encodes the specified LoginOutReq message. Does not implicitly {@link LoginOutReq.verify|verify} messages.
     * @function encode
     * @memberof LoginOutReq
     * @static
     * @param {ILoginOutReq} message LoginOutReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginOutReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified LoginOutReq message, length delimited. Does not implicitly {@link LoginOutReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginOutReq
     * @static
     * @param {ILoginOutReq} message LoginOutReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginOutReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginOutReq message from the specified reader or buffer.
     * @function decode
     * @memberof LoginOutReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginOutReq} LoginOutReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginOutReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginOutReq();
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
     * @memberof LoginOutReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginOutReq} LoginOutReq
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
     * @memberof LoginOutReq
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
     * @memberof LoginOutReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginOutReq} LoginOutReq
     */
    LoginOutReq.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginOutReq)
            return object;
        return new $root.LoginOutReq();
    };

    /**
     * Creates a plain object from a LoginOutReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginOutReq
     * @static
     * @param {LoginOutReq} message LoginOutReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginOutReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this LoginOutReq to JSON.
     * @function toJSON
     * @memberof LoginOutReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginOutReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginOutReq;
})();

$root.LoginOutRes = (function() {

    /**
     * Properties of a LoginOutRes.
     * @exports ILoginOutRes
     * @interface ILoginOutRes
     * @property {number} status LoginOutRes status
     */

    /**
     * Constructs a new LoginOutRes.
     * @exports LoginOutRes
     * @classdesc Represents a LoginOutRes.
     * @implements ILoginOutRes
     * @constructor
     * @param {ILoginOutRes=} [properties] Properties to set
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
     * @memberof LoginOutRes
     * @instance
     */
    LoginOutRes.prototype.status = 0;

    /**
     * Creates a new LoginOutRes instance using the specified properties.
     * @function create
     * @memberof LoginOutRes
     * @static
     * @param {ILoginOutRes=} [properties] Properties to set
     * @returns {LoginOutRes} LoginOutRes instance
     */
    LoginOutRes.create = function create(properties) {
        return new LoginOutRes(properties);
    };

    /**
     * Encodes the specified LoginOutRes message. Does not implicitly {@link LoginOutRes.verify|verify} messages.
     * @function encode
     * @memberof LoginOutRes
     * @static
     * @param {ILoginOutRes} message LoginOutRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginOutRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified LoginOutRes message, length delimited. Does not implicitly {@link LoginOutRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginOutRes
     * @static
     * @param {ILoginOutRes} message LoginOutRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginOutRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginOutRes message from the specified reader or buffer.
     * @function decode
     * @memberof LoginOutRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginOutRes} LoginOutRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginOutRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginOutRes();
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
     * Decodes a LoginOutRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoginOutRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginOutRes} LoginOutRes
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
     * @memberof LoginOutRes
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
     * @memberof LoginOutRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginOutRes} LoginOutRes
     */
    LoginOutRes.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginOutRes)
            return object;
        var message = new $root.LoginOutRes();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a LoginOutRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginOutRes
     * @static
     * @param {LoginOutRes} message LoginOutRes
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
     * @memberof LoginOutRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginOutRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginOutRes;
})();

$root.UserGameInfo = (function() {

    /**
     * Properties of a UserGameInfo.
     * @exports IUserGameInfo
     * @interface IUserGameInfo
     * @property {number} uchip UserGameInfo uchip
     * @property {number} uexp UserGameInfo uexp
     * @property {number} uvip UserGameInfo uvip
     * @property {number} uchip2 UserGameInfo uchip2
     * @property {number} uchip3 UserGameInfo uchip3
     * @property {number} udata1 UserGameInfo udata1
     * @property {number} udata2 UserGameInfo udata2
     * @property {number} udata3 UserGameInfo udata3
     */

    /**
     * Constructs a new UserGameInfo.
     * @exports UserGameInfo
     * @classdesc Represents a UserGameInfo.
     * @implements IUserGameInfo
     * @constructor
     * @param {IUserGameInfo=} [properties] Properties to set
     */
    function UserGameInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserGameInfo uchip.
     * @member {number} uchip
     * @memberof UserGameInfo
     * @instance
     */
    UserGameInfo.prototype.uchip = 0;

    /**
     * UserGameInfo uexp.
     * @member {number} uexp
     * @memberof UserGameInfo
     * @instance
     */
    UserGameInfo.prototype.uexp = 0;

    /**
     * UserGameInfo uvip.
     * @member {number} uvip
     * @memberof UserGameInfo
     * @instance
     */
    UserGameInfo.prototype.uvip = 0;

    /**
     * UserGameInfo uchip2.
     * @member {number} uchip2
     * @memberof UserGameInfo
     * @instance
     */
    UserGameInfo.prototype.uchip2 = 0;

    /**
     * UserGameInfo uchip3.
     * @member {number} uchip3
     * @memberof UserGameInfo
     * @instance
     */
    UserGameInfo.prototype.uchip3 = 0;

    /**
     * UserGameInfo udata1.
     * @member {number} udata1
     * @memberof UserGameInfo
     * @instance
     */
    UserGameInfo.prototype.udata1 = 0;

    /**
     * UserGameInfo udata2.
     * @member {number} udata2
     * @memberof UserGameInfo
     * @instance
     */
    UserGameInfo.prototype.udata2 = 0;

    /**
     * UserGameInfo udata3.
     * @member {number} udata3
     * @memberof UserGameInfo
     * @instance
     */
    UserGameInfo.prototype.udata3 = 0;

    /**
     * Creates a new UserGameInfo instance using the specified properties.
     * @function create
     * @memberof UserGameInfo
     * @static
     * @param {IUserGameInfo=} [properties] Properties to set
     * @returns {UserGameInfo} UserGameInfo instance
     */
    UserGameInfo.create = function create(properties) {
        return new UserGameInfo(properties);
    };

    /**
     * Encodes the specified UserGameInfo message. Does not implicitly {@link UserGameInfo.verify|verify} messages.
     * @function encode
     * @memberof UserGameInfo
     * @static
     * @param {IUserGameInfo} message UserGameInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserGameInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.uchip);
        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.uexp);
        writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.uvip);
        writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.uchip2);
        writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.uchip3);
        writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.udata1);
        writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.udata2);
        writer.uint32(/* id 8, wireType 0 =*/64).sint32(message.udata3);
        return writer;
    };

    /**
     * Encodes the specified UserGameInfo message, length delimited. Does not implicitly {@link UserGameInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserGameInfo
     * @static
     * @param {IUserGameInfo} message UserGameInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserGameInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserGameInfo message from the specified reader or buffer.
     * @function decode
     * @memberof UserGameInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserGameInfo} UserGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserGameInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserGameInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uchip = reader.sint32();
                break;
            case 2:
                message.uexp = reader.sint32();
                break;
            case 3:
                message.uvip = reader.sint32();
                break;
            case 4:
                message.uchip2 = reader.sint32();
                break;
            case 5:
                message.uchip3 = reader.sint32();
                break;
            case 6:
                message.udata1 = reader.sint32();
                break;
            case 7:
                message.udata2 = reader.sint32();
                break;
            case 8:
                message.udata3 = reader.sint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("uchip"))
            throw $util.ProtocolError("missing required 'uchip'", { instance: message });
        if (!message.hasOwnProperty("uexp"))
            throw $util.ProtocolError("missing required 'uexp'", { instance: message });
        if (!message.hasOwnProperty("uvip"))
            throw $util.ProtocolError("missing required 'uvip'", { instance: message });
        if (!message.hasOwnProperty("uchip2"))
            throw $util.ProtocolError("missing required 'uchip2'", { instance: message });
        if (!message.hasOwnProperty("uchip3"))
            throw $util.ProtocolError("missing required 'uchip3'", { instance: message });
        if (!message.hasOwnProperty("udata1"))
            throw $util.ProtocolError("missing required 'udata1'", { instance: message });
        if (!message.hasOwnProperty("udata2"))
            throw $util.ProtocolError("missing required 'udata2'", { instance: message });
        if (!message.hasOwnProperty("udata3"))
            throw $util.ProtocolError("missing required 'udata3'", { instance: message });
        return message;
    };

    /**
     * Decodes a UserGameInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserGameInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserGameInfo} UserGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserGameInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserGameInfo message.
     * @function verify
     * @memberof UserGameInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserGameInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.uchip))
            return "uchip: integer expected";
        if (!$util.isInteger(message.uexp))
            return "uexp: integer expected";
        if (!$util.isInteger(message.uvip))
            return "uvip: integer expected";
        if (!$util.isInteger(message.uchip2))
            return "uchip2: integer expected";
        if (!$util.isInteger(message.uchip3))
            return "uchip3: integer expected";
        if (!$util.isInteger(message.udata1))
            return "udata1: integer expected";
        if (!$util.isInteger(message.udata2))
            return "udata2: integer expected";
        if (!$util.isInteger(message.udata3))
            return "udata3: integer expected";
        return null;
    };

    /**
     * Creates a UserGameInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserGameInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserGameInfo} UserGameInfo
     */
    UserGameInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.UserGameInfo)
            return object;
        var message = new $root.UserGameInfo();
        if (object.uchip != null)
            message.uchip = object.uchip | 0;
        if (object.uexp != null)
            message.uexp = object.uexp | 0;
        if (object.uvip != null)
            message.uvip = object.uvip | 0;
        if (object.uchip2 != null)
            message.uchip2 = object.uchip2 | 0;
        if (object.uchip3 != null)
            message.uchip3 = object.uchip3 | 0;
        if (object.udata1 != null)
            message.udata1 = object.udata1 | 0;
        if (object.udata2 != null)
            message.udata2 = object.udata2 | 0;
        if (object.udata3 != null)
            message.udata3 = object.udata3 | 0;
        return message;
    };

    /**
     * Creates a plain object from a UserGameInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserGameInfo
     * @static
     * @param {UserGameInfo} message UserGameInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserGameInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.uchip = 0;
            object.uexp = 0;
            object.uvip = 0;
            object.uchip2 = 0;
            object.uchip3 = 0;
            object.udata1 = 0;
            object.udata2 = 0;
            object.udata3 = 0;
        }
        if (message.uchip != null && message.hasOwnProperty("uchip"))
            object.uchip = message.uchip;
        if (message.uexp != null && message.hasOwnProperty("uexp"))
            object.uexp = message.uexp;
        if (message.uvip != null && message.hasOwnProperty("uvip"))
            object.uvip = message.uvip;
        if (message.uchip2 != null && message.hasOwnProperty("uchip2"))
            object.uchip2 = message.uchip2;
        if (message.uchip3 != null && message.hasOwnProperty("uchip3"))
            object.uchip3 = message.uchip3;
        if (message.udata1 != null && message.hasOwnProperty("udata1"))
            object.udata1 = message.udata1;
        if (message.udata2 != null && message.hasOwnProperty("udata2"))
            object.udata2 = message.udata2;
        if (message.udata3 != null && message.hasOwnProperty("udata3"))
            object.udata3 = message.udata3;
        return object;
    };

    /**
     * Converts this UserGameInfo to JSON.
     * @function toJSON
     * @memberof UserGameInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserGameInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserGameInfo;
})();

$root.GetUgameInfoReq = (function() {

    /**
     * Properties of a GetUgameInfoReq.
     * @exports IGetUgameInfoReq
     * @interface IGetUgameInfoReq
     */

    /**
     * Constructs a new GetUgameInfoReq.
     * @exports GetUgameInfoReq
     * @classdesc Represents a GetUgameInfoReq.
     * @implements IGetUgameInfoReq
     * @constructor
     * @param {IGetUgameInfoReq=} [properties] Properties to set
     */
    function GetUgameInfoReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new GetUgameInfoReq instance using the specified properties.
     * @function create
     * @memberof GetUgameInfoReq
     * @static
     * @param {IGetUgameInfoReq=} [properties] Properties to set
     * @returns {GetUgameInfoReq} GetUgameInfoReq instance
     */
    GetUgameInfoReq.create = function create(properties) {
        return new GetUgameInfoReq(properties);
    };

    /**
     * Encodes the specified GetUgameInfoReq message. Does not implicitly {@link GetUgameInfoReq.verify|verify} messages.
     * @function encode
     * @memberof GetUgameInfoReq
     * @static
     * @param {IGetUgameInfoReq} message GetUgameInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetUgameInfoReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified GetUgameInfoReq message, length delimited. Does not implicitly {@link GetUgameInfoReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetUgameInfoReq
     * @static
     * @param {IGetUgameInfoReq} message GetUgameInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetUgameInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetUgameInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetUgameInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetUgameInfoReq} GetUgameInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetUgameInfoReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetUgameInfoReq();
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
     * Decodes a GetUgameInfoReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetUgameInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetUgameInfoReq} GetUgameInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetUgameInfoReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetUgameInfoReq message.
     * @function verify
     * @memberof GetUgameInfoReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetUgameInfoReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a GetUgameInfoReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetUgameInfoReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetUgameInfoReq} GetUgameInfoReq
     */
    GetUgameInfoReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetUgameInfoReq)
            return object;
        return new $root.GetUgameInfoReq();
    };

    /**
     * Creates a plain object from a GetUgameInfoReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetUgameInfoReq
     * @static
     * @param {GetUgameInfoReq} message GetUgameInfoReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetUgameInfoReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this GetUgameInfoReq to JSON.
     * @function toJSON
     * @memberof GetUgameInfoReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetUgameInfoReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetUgameInfoReq;
})();

$root.GetUgameInfoRes = (function() {

    /**
     * Properties of a GetUgameInfoRes.
     * @exports IGetUgameInfoRes
     * @interface IGetUgameInfoRes
     * @property {number} status GetUgameInfoRes status
     * @property {IUserGameInfo|null} [uinfo] GetUgameInfoRes uinfo
     */

    /**
     * Constructs a new GetUgameInfoRes.
     * @exports GetUgameInfoRes
     * @classdesc Represents a GetUgameInfoRes.
     * @implements IGetUgameInfoRes
     * @constructor
     * @param {IGetUgameInfoRes=} [properties] Properties to set
     */
    function GetUgameInfoRes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetUgameInfoRes status.
     * @member {number} status
     * @memberof GetUgameInfoRes
     * @instance
     */
    GetUgameInfoRes.prototype.status = 0;

    /**
     * GetUgameInfoRes uinfo.
     * @member {IUserGameInfo|null|undefined} uinfo
     * @memberof GetUgameInfoRes
     * @instance
     */
    GetUgameInfoRes.prototype.uinfo = null;

    /**
     * Creates a new GetUgameInfoRes instance using the specified properties.
     * @function create
     * @memberof GetUgameInfoRes
     * @static
     * @param {IGetUgameInfoRes=} [properties] Properties to set
     * @returns {GetUgameInfoRes} GetUgameInfoRes instance
     */
    GetUgameInfoRes.create = function create(properties) {
        return new GetUgameInfoRes(properties);
    };

    /**
     * Encodes the specified GetUgameInfoRes message. Does not implicitly {@link GetUgameInfoRes.verify|verify} messages.
     * @function encode
     * @memberof GetUgameInfoRes
     * @static
     * @param {IGetUgameInfoRes} message GetUgameInfoRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetUgameInfoRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        if (message.uinfo != null && message.hasOwnProperty("uinfo"))
            $root.UserGameInfo.encode(message.uinfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetUgameInfoRes message, length delimited. Does not implicitly {@link GetUgameInfoRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetUgameInfoRes
     * @static
     * @param {IGetUgameInfoRes} message GetUgameInfoRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetUgameInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetUgameInfoRes message from the specified reader or buffer.
     * @function decode
     * @memberof GetUgameInfoRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetUgameInfoRes} GetUgameInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetUgameInfoRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetUgameInfoRes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.status = reader.sint32();
                break;
            case 2:
                message.uinfo = $root.UserGameInfo.decode(reader, reader.uint32());
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
     * Decodes a GetUgameInfoRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetUgameInfoRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetUgameInfoRes} GetUgameInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetUgameInfoRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetUgameInfoRes message.
     * @function verify
     * @memberof GetUgameInfoRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetUgameInfoRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.status))
            return "status: integer expected";
        if (message.uinfo != null && message.hasOwnProperty("uinfo")) {
            var error = $root.UserGameInfo.verify(message.uinfo);
            if (error)
                return "uinfo." + error;
        }
        return null;
    };

    /**
     * Creates a GetUgameInfoRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetUgameInfoRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetUgameInfoRes} GetUgameInfoRes
     */
    GetUgameInfoRes.fromObject = function fromObject(object) {
        if (object instanceof $root.GetUgameInfoRes)
            return object;
        var message = new $root.GetUgameInfoRes();
        if (object.status != null)
            message.status = object.status | 0;
        if (object.uinfo != null) {
            if (typeof object.uinfo !== "object")
                throw TypeError(".GetUgameInfoRes.uinfo: object expected");
            message.uinfo = $root.UserGameInfo.fromObject(object.uinfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a GetUgameInfoRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetUgameInfoRes
     * @static
     * @param {GetUgameInfoRes} message GetUgameInfoRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetUgameInfoRes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.status = 0;
            object.uinfo = null;
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.uinfo != null && message.hasOwnProperty("uinfo"))
            object.uinfo = $root.UserGameInfo.toObject(message.uinfo, options);
        return object;
    };

    /**
     * Converts this GetUgameInfoRes to JSON.
     * @function toJSON
     * @memberof GetUgameInfoRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetUgameInfoRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetUgameInfoRes;
})();

$root.RecvLoginBonuesReq = (function() {

    /**
     * Properties of a RecvLoginBonuesReq.
     * @exports IRecvLoginBonuesReq
     * @interface IRecvLoginBonuesReq
     */

    /**
     * Constructs a new RecvLoginBonuesReq.
     * @exports RecvLoginBonuesReq
     * @classdesc Represents a RecvLoginBonuesReq.
     * @implements IRecvLoginBonuesReq
     * @constructor
     * @param {IRecvLoginBonuesReq=} [properties] Properties to set
     */
    function RecvLoginBonuesReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new RecvLoginBonuesReq instance using the specified properties.
     * @function create
     * @memberof RecvLoginBonuesReq
     * @static
     * @param {IRecvLoginBonuesReq=} [properties] Properties to set
     * @returns {RecvLoginBonuesReq} RecvLoginBonuesReq instance
     */
    RecvLoginBonuesReq.create = function create(properties) {
        return new RecvLoginBonuesReq(properties);
    };

    /**
     * Encodes the specified RecvLoginBonuesReq message. Does not implicitly {@link RecvLoginBonuesReq.verify|verify} messages.
     * @function encode
     * @memberof RecvLoginBonuesReq
     * @static
     * @param {IRecvLoginBonuesReq} message RecvLoginBonuesReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RecvLoginBonuesReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified RecvLoginBonuesReq message, length delimited. Does not implicitly {@link RecvLoginBonuesReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RecvLoginBonuesReq
     * @static
     * @param {IRecvLoginBonuesReq} message RecvLoginBonuesReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RecvLoginBonuesReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RecvLoginBonuesReq message from the specified reader or buffer.
     * @function decode
     * @memberof RecvLoginBonuesReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RecvLoginBonuesReq} RecvLoginBonuesReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RecvLoginBonuesReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RecvLoginBonuesReq();
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
     * Decodes a RecvLoginBonuesReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RecvLoginBonuesReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RecvLoginBonuesReq} RecvLoginBonuesReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RecvLoginBonuesReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RecvLoginBonuesReq message.
     * @function verify
     * @memberof RecvLoginBonuesReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RecvLoginBonuesReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a RecvLoginBonuesReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RecvLoginBonuesReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RecvLoginBonuesReq} RecvLoginBonuesReq
     */
    RecvLoginBonuesReq.fromObject = function fromObject(object) {
        if (object instanceof $root.RecvLoginBonuesReq)
            return object;
        return new $root.RecvLoginBonuesReq();
    };

    /**
     * Creates a plain object from a RecvLoginBonuesReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RecvLoginBonuesReq
     * @static
     * @param {RecvLoginBonuesReq} message RecvLoginBonuesReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RecvLoginBonuesReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this RecvLoginBonuesReq to JSON.
     * @function toJSON
     * @memberof RecvLoginBonuesReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RecvLoginBonuesReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RecvLoginBonuesReq;
})();

$root.RecvLoginBonuesRes = (function() {

    /**
     * Properties of a RecvLoginBonuesRes.
     * @exports IRecvLoginBonuesRes
     * @interface IRecvLoginBonuesRes
     * @property {number} status RecvLoginBonuesRes status
     */

    /**
     * Constructs a new RecvLoginBonuesRes.
     * @exports RecvLoginBonuesRes
     * @classdesc Represents a RecvLoginBonuesRes.
     * @implements IRecvLoginBonuesRes
     * @constructor
     * @param {IRecvLoginBonuesRes=} [properties] Properties to set
     */
    function RecvLoginBonuesRes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RecvLoginBonuesRes status.
     * @member {number} status
     * @memberof RecvLoginBonuesRes
     * @instance
     */
    RecvLoginBonuesRes.prototype.status = 0;

    /**
     * Creates a new RecvLoginBonuesRes instance using the specified properties.
     * @function create
     * @memberof RecvLoginBonuesRes
     * @static
     * @param {IRecvLoginBonuesRes=} [properties] Properties to set
     * @returns {RecvLoginBonuesRes} RecvLoginBonuesRes instance
     */
    RecvLoginBonuesRes.create = function create(properties) {
        return new RecvLoginBonuesRes(properties);
    };

    /**
     * Encodes the specified RecvLoginBonuesRes message. Does not implicitly {@link RecvLoginBonuesRes.verify|verify} messages.
     * @function encode
     * @memberof RecvLoginBonuesRes
     * @static
     * @param {IRecvLoginBonuesRes} message RecvLoginBonuesRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RecvLoginBonuesRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified RecvLoginBonuesRes message, length delimited. Does not implicitly {@link RecvLoginBonuesRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RecvLoginBonuesRes
     * @static
     * @param {IRecvLoginBonuesRes} message RecvLoginBonuesRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RecvLoginBonuesRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RecvLoginBonuesRes message from the specified reader or buffer.
     * @function decode
     * @memberof RecvLoginBonuesRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RecvLoginBonuesRes} RecvLoginBonuesRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RecvLoginBonuesRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RecvLoginBonuesRes();
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
     * Decodes a RecvLoginBonuesRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RecvLoginBonuesRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RecvLoginBonuesRes} RecvLoginBonuesRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RecvLoginBonuesRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RecvLoginBonuesRes message.
     * @function verify
     * @memberof RecvLoginBonuesRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RecvLoginBonuesRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.status))
            return "status: integer expected";
        return null;
    };

    /**
     * Creates a RecvLoginBonuesRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RecvLoginBonuesRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RecvLoginBonuesRes} RecvLoginBonuesRes
     */
    RecvLoginBonuesRes.fromObject = function fromObject(object) {
        if (object instanceof $root.RecvLoginBonuesRes)
            return object;
        var message = new $root.RecvLoginBonuesRes();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a RecvLoginBonuesRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RecvLoginBonuesRes
     * @static
     * @param {RecvLoginBonuesRes} message RecvLoginBonuesRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RecvLoginBonuesRes.toObject = function toObject(message, options) {
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
     * Converts this RecvLoginBonuesRes to JSON.
     * @function toJSON
     * @memberof RecvLoginBonuesRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RecvLoginBonuesRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RecvLoginBonuesRes;
})();

$root.WorldChipRankInfo = (function() {

    /**
     * Properties of a WorldChipRankInfo.
     * @exports IWorldChipRankInfo
     * @interface IWorldChipRankInfo
     * @property {string} unick WorldChipRankInfo unick
     * @property {number} uface WorldChipRankInfo uface
     * @property {number} usex WorldChipRankInfo usex
     * @property {number} uvip WorldChipRankInfo uvip
     * @property {number} uchip WorldChipRankInfo uchip
     */

    /**
     * Constructs a new WorldChipRankInfo.
     * @exports WorldChipRankInfo
     * @classdesc Represents a WorldChipRankInfo.
     * @implements IWorldChipRankInfo
     * @constructor
     * @param {IWorldChipRankInfo=} [properties] Properties to set
     */
    function WorldChipRankInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WorldChipRankInfo unick.
     * @member {string} unick
     * @memberof WorldChipRankInfo
     * @instance
     */
    WorldChipRankInfo.prototype.unick = "";

    /**
     * WorldChipRankInfo uface.
     * @member {number} uface
     * @memberof WorldChipRankInfo
     * @instance
     */
    WorldChipRankInfo.prototype.uface = 0;

    /**
     * WorldChipRankInfo usex.
     * @member {number} usex
     * @memberof WorldChipRankInfo
     * @instance
     */
    WorldChipRankInfo.prototype.usex = 0;

    /**
     * WorldChipRankInfo uvip.
     * @member {number} uvip
     * @memberof WorldChipRankInfo
     * @instance
     */
    WorldChipRankInfo.prototype.uvip = 0;

    /**
     * WorldChipRankInfo uchip.
     * @member {number} uchip
     * @memberof WorldChipRankInfo
     * @instance
     */
    WorldChipRankInfo.prototype.uchip = 0;

    /**
     * Creates a new WorldChipRankInfo instance using the specified properties.
     * @function create
     * @memberof WorldChipRankInfo
     * @static
     * @param {IWorldChipRankInfo=} [properties] Properties to set
     * @returns {WorldChipRankInfo} WorldChipRankInfo instance
     */
    WorldChipRankInfo.create = function create(properties) {
        return new WorldChipRankInfo(properties);
    };

    /**
     * Encodes the specified WorldChipRankInfo message. Does not implicitly {@link WorldChipRankInfo.verify|verify} messages.
     * @function encode
     * @memberof WorldChipRankInfo
     * @static
     * @param {IWorldChipRankInfo} message WorldChipRankInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WorldChipRankInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.unick);
        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.uface);
        writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.usex);
        writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.uvip);
        writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.uchip);
        return writer;
    };

    /**
     * Encodes the specified WorldChipRankInfo message, length delimited. Does not implicitly {@link WorldChipRankInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WorldChipRankInfo
     * @static
     * @param {IWorldChipRankInfo} message WorldChipRankInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WorldChipRankInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WorldChipRankInfo message from the specified reader or buffer.
     * @function decode
     * @memberof WorldChipRankInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WorldChipRankInfo} WorldChipRankInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WorldChipRankInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WorldChipRankInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.unick = reader.string();
                break;
            case 2:
                message.uface = reader.sint32();
                break;
            case 3:
                message.usex = reader.sint32();
                break;
            case 4:
                message.uvip = reader.sint32();
                break;
            case 5:
                message.uchip = reader.sint32();
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
        if (!message.hasOwnProperty("uvip"))
            throw $util.ProtocolError("missing required 'uvip'", { instance: message });
        if (!message.hasOwnProperty("uchip"))
            throw $util.ProtocolError("missing required 'uchip'", { instance: message });
        return message;
    };

    /**
     * Decodes a WorldChipRankInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WorldChipRankInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WorldChipRankInfo} WorldChipRankInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WorldChipRankInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WorldChipRankInfo message.
     * @function verify
     * @memberof WorldChipRankInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WorldChipRankInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.unick))
            return "unick: string expected";
        if (!$util.isInteger(message.uface))
            return "uface: integer expected";
        if (!$util.isInteger(message.usex))
            return "usex: integer expected";
        if (!$util.isInteger(message.uvip))
            return "uvip: integer expected";
        if (!$util.isInteger(message.uchip))
            return "uchip: integer expected";
        return null;
    };

    /**
     * Creates a WorldChipRankInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WorldChipRankInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WorldChipRankInfo} WorldChipRankInfo
     */
    WorldChipRankInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.WorldChipRankInfo)
            return object;
        var message = new $root.WorldChipRankInfo();
        if (object.unick != null)
            message.unick = String(object.unick);
        if (object.uface != null)
            message.uface = object.uface | 0;
        if (object.usex != null)
            message.usex = object.usex | 0;
        if (object.uvip != null)
            message.uvip = object.uvip | 0;
        if (object.uchip != null)
            message.uchip = object.uchip | 0;
        return message;
    };

    /**
     * Creates a plain object from a WorldChipRankInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WorldChipRankInfo
     * @static
     * @param {WorldChipRankInfo} message WorldChipRankInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WorldChipRankInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.unick = "";
            object.uface = 0;
            object.usex = 0;
            object.uvip = 0;
            object.uchip = 0;
        }
        if (message.unick != null && message.hasOwnProperty("unick"))
            object.unick = message.unick;
        if (message.uface != null && message.hasOwnProperty("uface"))
            object.uface = message.uface;
        if (message.usex != null && message.hasOwnProperty("usex"))
            object.usex = message.usex;
        if (message.uvip != null && message.hasOwnProperty("uvip"))
            object.uvip = message.uvip;
        if (message.uchip != null && message.hasOwnProperty("uchip"))
            object.uchip = message.uchip;
        return object;
    };

    /**
     * Converts this WorldChipRankInfo to JSON.
     * @function toJSON
     * @memberof WorldChipRankInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WorldChipRankInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WorldChipRankInfo;
})();

$root.GetWorldRankUchipReq = (function() {

    /**
     * Properties of a GetWorldRankUchipReq.
     * @exports IGetWorldRankUchipReq
     * @interface IGetWorldRankUchipReq
     */

    /**
     * Constructs a new GetWorldRankUchipReq.
     * @exports GetWorldRankUchipReq
     * @classdesc Represents a GetWorldRankUchipReq.
     * @implements IGetWorldRankUchipReq
     * @constructor
     * @param {IGetWorldRankUchipReq=} [properties] Properties to set
     */
    function GetWorldRankUchipReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new GetWorldRankUchipReq instance using the specified properties.
     * @function create
     * @memberof GetWorldRankUchipReq
     * @static
     * @param {IGetWorldRankUchipReq=} [properties] Properties to set
     * @returns {GetWorldRankUchipReq} GetWorldRankUchipReq instance
     */
    GetWorldRankUchipReq.create = function create(properties) {
        return new GetWorldRankUchipReq(properties);
    };

    /**
     * Encodes the specified GetWorldRankUchipReq message. Does not implicitly {@link GetWorldRankUchipReq.verify|verify} messages.
     * @function encode
     * @memberof GetWorldRankUchipReq
     * @static
     * @param {IGetWorldRankUchipReq} message GetWorldRankUchipReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetWorldRankUchipReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified GetWorldRankUchipReq message, length delimited. Does not implicitly {@link GetWorldRankUchipReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetWorldRankUchipReq
     * @static
     * @param {IGetWorldRankUchipReq} message GetWorldRankUchipReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetWorldRankUchipReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetWorldRankUchipReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetWorldRankUchipReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetWorldRankUchipReq} GetWorldRankUchipReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetWorldRankUchipReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetWorldRankUchipReq();
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
     * Decodes a GetWorldRankUchipReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetWorldRankUchipReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetWorldRankUchipReq} GetWorldRankUchipReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetWorldRankUchipReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetWorldRankUchipReq message.
     * @function verify
     * @memberof GetWorldRankUchipReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetWorldRankUchipReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a GetWorldRankUchipReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetWorldRankUchipReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetWorldRankUchipReq} GetWorldRankUchipReq
     */
    GetWorldRankUchipReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetWorldRankUchipReq)
            return object;
        return new $root.GetWorldRankUchipReq();
    };

    /**
     * Creates a plain object from a GetWorldRankUchipReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetWorldRankUchipReq
     * @static
     * @param {GetWorldRankUchipReq} message GetWorldRankUchipReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetWorldRankUchipReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this GetWorldRankUchipReq to JSON.
     * @function toJSON
     * @memberof GetWorldRankUchipReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetWorldRankUchipReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetWorldRankUchipReq;
})();

$root.GetWorldRankUchipRes = (function() {

    /**
     * Properties of a GetWorldRankUchipRes.
     * @exports IGetWorldRankUchipRes
     * @interface IGetWorldRankUchipRes
     * @property {number} status GetWorldRankUchipRes status
     * @property {Array.<IWorldChipRankInfo>|null} [rankinfo] GetWorldRankUchipRes rankinfo
     */

    /**
     * Constructs a new GetWorldRankUchipRes.
     * @exports GetWorldRankUchipRes
     * @classdesc Represents a GetWorldRankUchipRes.
     * @implements IGetWorldRankUchipRes
     * @constructor
     * @param {IGetWorldRankUchipRes=} [properties] Properties to set
     */
    function GetWorldRankUchipRes(properties) {
        this.rankinfo = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetWorldRankUchipRes status.
     * @member {number} status
     * @memberof GetWorldRankUchipRes
     * @instance
     */
    GetWorldRankUchipRes.prototype.status = 0;

    /**
     * GetWorldRankUchipRes rankinfo.
     * @member {Array.<IWorldChipRankInfo>} rankinfo
     * @memberof GetWorldRankUchipRes
     * @instance
     */
    GetWorldRankUchipRes.prototype.rankinfo = $util.emptyArray;

    /**
     * Creates a new GetWorldRankUchipRes instance using the specified properties.
     * @function create
     * @memberof GetWorldRankUchipRes
     * @static
     * @param {IGetWorldRankUchipRes=} [properties] Properties to set
     * @returns {GetWorldRankUchipRes} GetWorldRankUchipRes instance
     */
    GetWorldRankUchipRes.create = function create(properties) {
        return new GetWorldRankUchipRes(properties);
    };

    /**
     * Encodes the specified GetWorldRankUchipRes message. Does not implicitly {@link GetWorldRankUchipRes.verify|verify} messages.
     * @function encode
     * @memberof GetWorldRankUchipRes
     * @static
     * @param {IGetWorldRankUchipRes} message GetWorldRankUchipRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetWorldRankUchipRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        if (message.rankinfo != null && message.rankinfo.length)
            for (var i = 0; i < message.rankinfo.length; ++i)
                $root.WorldChipRankInfo.encode(message.rankinfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetWorldRankUchipRes message, length delimited. Does not implicitly {@link GetWorldRankUchipRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetWorldRankUchipRes
     * @static
     * @param {IGetWorldRankUchipRes} message GetWorldRankUchipRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetWorldRankUchipRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetWorldRankUchipRes message from the specified reader or buffer.
     * @function decode
     * @memberof GetWorldRankUchipRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetWorldRankUchipRes} GetWorldRankUchipRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetWorldRankUchipRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetWorldRankUchipRes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.status = reader.sint32();
                break;
            case 2:
                if (!(message.rankinfo && message.rankinfo.length))
                    message.rankinfo = [];
                message.rankinfo.push($root.WorldChipRankInfo.decode(reader, reader.uint32()));
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
     * Decodes a GetWorldRankUchipRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetWorldRankUchipRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetWorldRankUchipRes} GetWorldRankUchipRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetWorldRankUchipRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetWorldRankUchipRes message.
     * @function verify
     * @memberof GetWorldRankUchipRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetWorldRankUchipRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.status))
            return "status: integer expected";
        if (message.rankinfo != null && message.hasOwnProperty("rankinfo")) {
            if (!Array.isArray(message.rankinfo))
                return "rankinfo: array expected";
            for (var i = 0; i < message.rankinfo.length; ++i) {
                var error = $root.WorldChipRankInfo.verify(message.rankinfo[i]);
                if (error)
                    return "rankinfo." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GetWorldRankUchipRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetWorldRankUchipRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetWorldRankUchipRes} GetWorldRankUchipRes
     */
    GetWorldRankUchipRes.fromObject = function fromObject(object) {
        if (object instanceof $root.GetWorldRankUchipRes)
            return object;
        var message = new $root.GetWorldRankUchipRes();
        if (object.status != null)
            message.status = object.status | 0;
        if (object.rankinfo) {
            if (!Array.isArray(object.rankinfo))
                throw TypeError(".GetWorldRankUchipRes.rankinfo: array expected");
            message.rankinfo = [];
            for (var i = 0; i < object.rankinfo.length; ++i) {
                if (typeof object.rankinfo[i] !== "object")
                    throw TypeError(".GetWorldRankUchipRes.rankinfo: object expected");
                message.rankinfo[i] = $root.WorldChipRankInfo.fromObject(object.rankinfo[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GetWorldRankUchipRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetWorldRankUchipRes
     * @static
     * @param {GetWorldRankUchipRes} message GetWorldRankUchipRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetWorldRankUchipRes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.rankinfo = [];
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.rankinfo && message.rankinfo.length) {
            object.rankinfo = [];
            for (var j = 0; j < message.rankinfo.length; ++j)
                object.rankinfo[j] = $root.WorldChipRankInfo.toObject(message.rankinfo[j], options);
        }
        return object;
    };

    /**
     * Converts this GetWorldRankUchipRes to JSON.
     * @function toJSON
     * @memberof GetWorldRankUchipRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetWorldRankUchipRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetWorldRankUchipRes;
})();

$root.GetSysMsgReq = (function() {

    /**
     * Properties of a GetSysMsgReq.
     * @exports IGetSysMsgReq
     * @interface IGetSysMsgReq
     * @property {number} versionnum GetSysMsgReq versionnum
     */

    /**
     * Constructs a new GetSysMsgReq.
     * @exports GetSysMsgReq
     * @classdesc Represents a GetSysMsgReq.
     * @implements IGetSysMsgReq
     * @constructor
     * @param {IGetSysMsgReq=} [properties] Properties to set
     */
    function GetSysMsgReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetSysMsgReq versionnum.
     * @member {number} versionnum
     * @memberof GetSysMsgReq
     * @instance
     */
    GetSysMsgReq.prototype.versionnum = 0;

    /**
     * Creates a new GetSysMsgReq instance using the specified properties.
     * @function create
     * @memberof GetSysMsgReq
     * @static
     * @param {IGetSysMsgReq=} [properties] Properties to set
     * @returns {GetSysMsgReq} GetSysMsgReq instance
     */
    GetSysMsgReq.create = function create(properties) {
        return new GetSysMsgReq(properties);
    };

    /**
     * Encodes the specified GetSysMsgReq message. Does not implicitly {@link GetSysMsgReq.verify|verify} messages.
     * @function encode
     * @memberof GetSysMsgReq
     * @static
     * @param {IGetSysMsgReq} message GetSysMsgReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetSysMsgReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.versionnum);
        return writer;
    };

    /**
     * Encodes the specified GetSysMsgReq message, length delimited. Does not implicitly {@link GetSysMsgReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetSysMsgReq
     * @static
     * @param {IGetSysMsgReq} message GetSysMsgReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetSysMsgReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetSysMsgReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetSysMsgReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetSysMsgReq} GetSysMsgReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetSysMsgReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetSysMsgReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.versionnum = reader.sint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("versionnum"))
            throw $util.ProtocolError("missing required 'versionnum'", { instance: message });
        return message;
    };

    /**
     * Decodes a GetSysMsgReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetSysMsgReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetSysMsgReq} GetSysMsgReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetSysMsgReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetSysMsgReq message.
     * @function verify
     * @memberof GetSysMsgReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetSysMsgReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.versionnum))
            return "versionnum: integer expected";
        return null;
    };

    /**
     * Creates a GetSysMsgReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetSysMsgReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetSysMsgReq} GetSysMsgReq
     */
    GetSysMsgReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetSysMsgReq)
            return object;
        var message = new $root.GetSysMsgReq();
        if (object.versionnum != null)
            message.versionnum = object.versionnum | 0;
        return message;
    };

    /**
     * Creates a plain object from a GetSysMsgReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetSysMsgReq
     * @static
     * @param {GetSysMsgReq} message GetSysMsgReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetSysMsgReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.versionnum = 0;
        if (message.versionnum != null && message.hasOwnProperty("versionnum"))
            object.versionnum = message.versionnum;
        return object;
    };

    /**
     * Converts this GetSysMsgReq to JSON.
     * @function toJSON
     * @memberof GetSysMsgReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetSysMsgReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetSysMsgReq;
})();

$root.GetSysMsgRes = (function() {

    /**
     * Properties of a GetSysMsgRes.
     * @exports IGetSysMsgRes
     * @interface IGetSysMsgRes
     * @property {number} status GetSysMsgRes status
     * @property {number} versionnum GetSysMsgRes versionnum
     * @property {Array.<string>|null} [systemmsgs] GetSysMsgRes systemmsgs
     */

    /**
     * Constructs a new GetSysMsgRes.
     * @exports GetSysMsgRes
     * @classdesc Represents a GetSysMsgRes.
     * @implements IGetSysMsgRes
     * @constructor
     * @param {IGetSysMsgRes=} [properties] Properties to set
     */
    function GetSysMsgRes(properties) {
        this.systemmsgs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetSysMsgRes status.
     * @member {number} status
     * @memberof GetSysMsgRes
     * @instance
     */
    GetSysMsgRes.prototype.status = 0;

    /**
     * GetSysMsgRes versionnum.
     * @member {number} versionnum
     * @memberof GetSysMsgRes
     * @instance
     */
    GetSysMsgRes.prototype.versionnum = 0;

    /**
     * GetSysMsgRes systemmsgs.
     * @member {Array.<string>} systemmsgs
     * @memberof GetSysMsgRes
     * @instance
     */
    GetSysMsgRes.prototype.systemmsgs = $util.emptyArray;

    /**
     * Creates a new GetSysMsgRes instance using the specified properties.
     * @function create
     * @memberof GetSysMsgRes
     * @static
     * @param {IGetSysMsgRes=} [properties] Properties to set
     * @returns {GetSysMsgRes} GetSysMsgRes instance
     */
    GetSysMsgRes.create = function create(properties) {
        return new GetSysMsgRes(properties);
    };

    /**
     * Encodes the specified GetSysMsgRes message. Does not implicitly {@link GetSysMsgRes.verify|verify} messages.
     * @function encode
     * @memberof GetSysMsgRes
     * @static
     * @param {IGetSysMsgRes} message GetSysMsgRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetSysMsgRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.versionnum);
        if (message.systemmsgs != null && message.systemmsgs.length)
            for (var i = 0; i < message.systemmsgs.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.systemmsgs[i]);
        return writer;
    };

    /**
     * Encodes the specified GetSysMsgRes message, length delimited. Does not implicitly {@link GetSysMsgRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetSysMsgRes
     * @static
     * @param {IGetSysMsgRes} message GetSysMsgRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetSysMsgRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetSysMsgRes message from the specified reader or buffer.
     * @function decode
     * @memberof GetSysMsgRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetSysMsgRes} GetSysMsgRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetSysMsgRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetSysMsgRes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.status = reader.sint32();
                break;
            case 2:
                message.versionnum = reader.sint32();
                break;
            case 3:
                if (!(message.systemmsgs && message.systemmsgs.length))
                    message.systemmsgs = [];
                message.systemmsgs.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: message });
        if (!message.hasOwnProperty("versionnum"))
            throw $util.ProtocolError("missing required 'versionnum'", { instance: message });
        return message;
    };

    /**
     * Decodes a GetSysMsgRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetSysMsgRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetSysMsgRes} GetSysMsgRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetSysMsgRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetSysMsgRes message.
     * @function verify
     * @memberof GetSysMsgRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetSysMsgRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.status))
            return "status: integer expected";
        if (!$util.isInteger(message.versionnum))
            return "versionnum: integer expected";
        if (message.systemmsgs != null && message.hasOwnProperty("systemmsgs")) {
            if (!Array.isArray(message.systemmsgs))
                return "systemmsgs: array expected";
            for (var i = 0; i < message.systemmsgs.length; ++i)
                if (!$util.isString(message.systemmsgs[i]))
                    return "systemmsgs: string[] expected";
        }
        return null;
    };

    /**
     * Creates a GetSysMsgRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetSysMsgRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetSysMsgRes} GetSysMsgRes
     */
    GetSysMsgRes.fromObject = function fromObject(object) {
        if (object instanceof $root.GetSysMsgRes)
            return object;
        var message = new $root.GetSysMsgRes();
        if (object.status != null)
            message.status = object.status | 0;
        if (object.versionnum != null)
            message.versionnum = object.versionnum | 0;
        if (object.systemmsgs) {
            if (!Array.isArray(object.systemmsgs))
                throw TypeError(".GetSysMsgRes.systemmsgs: array expected");
            message.systemmsgs = [];
            for (var i = 0; i < object.systemmsgs.length; ++i)
                message.systemmsgs[i] = String(object.systemmsgs[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a GetSysMsgRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetSysMsgRes
     * @static
     * @param {GetSysMsgRes} message GetSysMsgRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetSysMsgRes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.systemmsgs = [];
        if (options.defaults) {
            object.status = 0;
            object.versionnum = 0;
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.versionnum != null && message.hasOwnProperty("versionnum"))
            object.versionnum = message.versionnum;
        if (message.systemmsgs && message.systemmsgs.length) {
            object.systemmsgs = [];
            for (var j = 0; j < message.systemmsgs.length; ++j)
                object.systemmsgs[j] = message.systemmsgs[j];
        }
        return object;
    };

    /**
     * Converts this GetSysMsgRes to JSON.
     * @function toJSON
     * @memberof GetSysMsgRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetSysMsgRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetSysMsgRes;
})();

$root.LoginLogicRes = (function() {

    /**
     * Properties of a LoginLogicRes.
     * @exports ILoginLogicRes
     * @interface ILoginLogicRes
     * @property {number} status LoginLogicRes status
     */

    /**
     * Constructs a new LoginLogicRes.
     * @exports LoginLogicRes
     * @classdesc Represents a LoginLogicRes.
     * @implements ILoginLogicRes
     * @constructor
     * @param {ILoginLogicRes=} [properties] Properties to set
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
     * @memberof LoginLogicRes
     * @instance
     */
    LoginLogicRes.prototype.status = 0;

    /**
     * Creates a new LoginLogicRes instance using the specified properties.
     * @function create
     * @memberof LoginLogicRes
     * @static
     * @param {ILoginLogicRes=} [properties] Properties to set
     * @returns {LoginLogicRes} LoginLogicRes instance
     */
    LoginLogicRes.create = function create(properties) {
        return new LoginLogicRes(properties);
    };

    /**
     * Encodes the specified LoginLogicRes message. Does not implicitly {@link LoginLogicRes.verify|verify} messages.
     * @function encode
     * @memberof LoginLogicRes
     * @static
     * @param {ILoginLogicRes} message LoginLogicRes message or plain object to encode
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
     * Encodes the specified LoginLogicRes message, length delimited. Does not implicitly {@link LoginLogicRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginLogicRes
     * @static
     * @param {ILoginLogicRes} message LoginLogicRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginLogicRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginLogicRes message from the specified reader or buffer.
     * @function decode
     * @memberof LoginLogicRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginLogicRes} LoginLogicRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginLogicRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginLogicRes();
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
     * @memberof LoginLogicRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginLogicRes} LoginLogicRes
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
     * @memberof LoginLogicRes
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
     * @memberof LoginLogicRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginLogicRes} LoginLogicRes
     */
    LoginLogicRes.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginLogicRes)
            return object;
        var message = new $root.LoginLogicRes();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a LoginLogicRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginLogicRes
     * @static
     * @param {LoginLogicRes} message LoginLogicRes
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
     * @memberof LoginLogicRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginLogicRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginLogicRes;
})();

$root.EnterZoneReq = (function() {

    /**
     * Properties of an EnterZoneReq.
     * @exports IEnterZoneReq
     * @interface IEnterZoneReq
     * @property {number} zid EnterZoneReq zid
     */

    /**
     * Constructs a new EnterZoneReq.
     * @exports EnterZoneReq
     * @classdesc Represents an EnterZoneReq.
     * @implements IEnterZoneReq
     * @constructor
     * @param {IEnterZoneReq=} [properties] Properties to set
     */
    function EnterZoneReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EnterZoneReq zid.
     * @member {number} zid
     * @memberof EnterZoneReq
     * @instance
     */
    EnterZoneReq.prototype.zid = 0;

    /**
     * Creates a new EnterZoneReq instance using the specified properties.
     * @function create
     * @memberof EnterZoneReq
     * @static
     * @param {IEnterZoneReq=} [properties] Properties to set
     * @returns {EnterZoneReq} EnterZoneReq instance
     */
    EnterZoneReq.create = function create(properties) {
        return new EnterZoneReq(properties);
    };

    /**
     * Encodes the specified EnterZoneReq message. Does not implicitly {@link EnterZoneReq.verify|verify} messages.
     * @function encode
     * @memberof EnterZoneReq
     * @static
     * @param {IEnterZoneReq} message EnterZoneReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterZoneReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.zid);
        return writer;
    };

    /**
     * Encodes the specified EnterZoneReq message, length delimited. Does not implicitly {@link EnterZoneReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EnterZoneReq
     * @static
     * @param {IEnterZoneReq} message EnterZoneReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterZoneReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EnterZoneReq message from the specified reader or buffer.
     * @function decode
     * @memberof EnterZoneReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EnterZoneReq} EnterZoneReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterZoneReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnterZoneReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.zid = reader.sint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("zid"))
            throw $util.ProtocolError("missing required 'zid'", { instance: message });
        return message;
    };

    /**
     * Decodes an EnterZoneReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EnterZoneReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EnterZoneReq} EnterZoneReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterZoneReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EnterZoneReq message.
     * @function verify
     * @memberof EnterZoneReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EnterZoneReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.zid))
            return "zid: integer expected";
        return null;
    };

    /**
     * Creates an EnterZoneReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EnterZoneReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EnterZoneReq} EnterZoneReq
     */
    EnterZoneReq.fromObject = function fromObject(object) {
        if (object instanceof $root.EnterZoneReq)
            return object;
        var message = new $root.EnterZoneReq();
        if (object.zid != null)
            message.zid = object.zid | 0;
        return message;
    };

    /**
     * Creates a plain object from an EnterZoneReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EnterZoneReq
     * @static
     * @param {EnterZoneReq} message EnterZoneReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EnterZoneReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.zid = 0;
        if (message.zid != null && message.hasOwnProperty("zid"))
            object.zid = message.zid;
        return object;
    };

    /**
     * Converts this EnterZoneReq to JSON.
     * @function toJSON
     * @memberof EnterZoneReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EnterZoneReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EnterZoneReq;
})();

$root.EnterZoneRes = (function() {

    /**
     * Properties of an EnterZoneRes.
     * @exports IEnterZoneRes
     * @interface IEnterZoneRes
     * @property {number} status EnterZoneRes status
     */

    /**
     * Constructs a new EnterZoneRes.
     * @exports EnterZoneRes
     * @classdesc Represents an EnterZoneRes.
     * @implements IEnterZoneRes
     * @constructor
     * @param {IEnterZoneRes=} [properties] Properties to set
     */
    function EnterZoneRes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EnterZoneRes status.
     * @member {number} status
     * @memberof EnterZoneRes
     * @instance
     */
    EnterZoneRes.prototype.status = 0;

    /**
     * Creates a new EnterZoneRes instance using the specified properties.
     * @function create
     * @memberof EnterZoneRes
     * @static
     * @param {IEnterZoneRes=} [properties] Properties to set
     * @returns {EnterZoneRes} EnterZoneRes instance
     */
    EnterZoneRes.create = function create(properties) {
        return new EnterZoneRes(properties);
    };

    /**
     * Encodes the specified EnterZoneRes message. Does not implicitly {@link EnterZoneRes.verify|verify} messages.
     * @function encode
     * @memberof EnterZoneRes
     * @static
     * @param {IEnterZoneRes} message EnterZoneRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterZoneRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified EnterZoneRes message, length delimited. Does not implicitly {@link EnterZoneRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EnterZoneRes
     * @static
     * @param {IEnterZoneRes} message EnterZoneRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterZoneRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EnterZoneRes message from the specified reader or buffer.
     * @function decode
     * @memberof EnterZoneRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EnterZoneRes} EnterZoneRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterZoneRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnterZoneRes();
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
     * Decodes an EnterZoneRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EnterZoneRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EnterZoneRes} EnterZoneRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterZoneRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EnterZoneRes message.
     * @function verify
     * @memberof EnterZoneRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EnterZoneRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.status))
            return "status: integer expected";
        return null;
    };

    /**
     * Creates an EnterZoneRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EnterZoneRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EnterZoneRes} EnterZoneRes
     */
    EnterZoneRes.fromObject = function fromObject(object) {
        if (object instanceof $root.EnterZoneRes)
            return object;
        var message = new $root.EnterZoneRes();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from an EnterZoneRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EnterZoneRes
     * @static
     * @param {EnterZoneRes} message EnterZoneRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EnterZoneRes.toObject = function toObject(message, options) {
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
     * Converts this EnterZoneRes to JSON.
     * @function toJSON
     * @memberof EnterZoneRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EnterZoneRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EnterZoneRes;
})();

$root.EnterMatch = (function() {

    /**
     * Properties of an EnterMatch.
     * @exports IEnterMatch
     * @interface IEnterMatch
     * @property {number} zid EnterMatch zid
     * @property {number} matchid EnterMatch matchid
     * @property {number} seatid EnterMatch seatid
     * @property {number} side EnterMatch side
     */

    /**
     * Constructs a new EnterMatch.
     * @exports EnterMatch
     * @classdesc Represents an EnterMatch.
     * @implements IEnterMatch
     * @constructor
     * @param {IEnterMatch=} [properties] Properties to set
     */
    function EnterMatch(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EnterMatch zid.
     * @member {number} zid
     * @memberof EnterMatch
     * @instance
     */
    EnterMatch.prototype.zid = 0;

    /**
     * EnterMatch matchid.
     * @member {number} matchid
     * @memberof EnterMatch
     * @instance
     */
    EnterMatch.prototype.matchid = 0;

    /**
     * EnterMatch seatid.
     * @member {number} seatid
     * @memberof EnterMatch
     * @instance
     */
    EnterMatch.prototype.seatid = 0;

    /**
     * EnterMatch side.
     * @member {number} side
     * @memberof EnterMatch
     * @instance
     */
    EnterMatch.prototype.side = 0;

    /**
     * Creates a new EnterMatch instance using the specified properties.
     * @function create
     * @memberof EnterMatch
     * @static
     * @param {IEnterMatch=} [properties] Properties to set
     * @returns {EnterMatch} EnterMatch instance
     */
    EnterMatch.create = function create(properties) {
        return new EnterMatch(properties);
    };

    /**
     * Encodes the specified EnterMatch message. Does not implicitly {@link EnterMatch.verify|verify} messages.
     * @function encode
     * @memberof EnterMatch
     * @static
     * @param {IEnterMatch} message EnterMatch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterMatch.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.zid);
        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.matchid);
        writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.seatid);
        writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.side);
        return writer;
    };

    /**
     * Encodes the specified EnterMatch message, length delimited. Does not implicitly {@link EnterMatch.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EnterMatch
     * @static
     * @param {IEnterMatch} message EnterMatch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterMatch.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EnterMatch message from the specified reader or buffer.
     * @function decode
     * @memberof EnterMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EnterMatch} EnterMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterMatch.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnterMatch();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.zid = reader.sint32();
                break;
            case 2:
                message.matchid = reader.sint32();
                break;
            case 3:
                message.seatid = reader.sint32();
                break;
            case 4:
                message.side = reader.sint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("zid"))
            throw $util.ProtocolError("missing required 'zid'", { instance: message });
        if (!message.hasOwnProperty("matchid"))
            throw $util.ProtocolError("missing required 'matchid'", { instance: message });
        if (!message.hasOwnProperty("seatid"))
            throw $util.ProtocolError("missing required 'seatid'", { instance: message });
        if (!message.hasOwnProperty("side"))
            throw $util.ProtocolError("missing required 'side'", { instance: message });
        return message;
    };

    /**
     * Decodes an EnterMatch message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EnterMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EnterMatch} EnterMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterMatch.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EnterMatch message.
     * @function verify
     * @memberof EnterMatch
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EnterMatch.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.zid))
            return "zid: integer expected";
        if (!$util.isInteger(message.matchid))
            return "matchid: integer expected";
        if (!$util.isInteger(message.seatid))
            return "seatid: integer expected";
        if (!$util.isInteger(message.side))
            return "side: integer expected";
        return null;
    };

    /**
     * Creates an EnterMatch message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EnterMatch
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EnterMatch} EnterMatch
     */
    EnterMatch.fromObject = function fromObject(object) {
        if (object instanceof $root.EnterMatch)
            return object;
        var message = new $root.EnterMatch();
        if (object.zid != null)
            message.zid = object.zid | 0;
        if (object.matchid != null)
            message.matchid = object.matchid | 0;
        if (object.seatid != null)
            message.seatid = object.seatid | 0;
        if (object.side != null)
            message.side = object.side | 0;
        return message;
    };

    /**
     * Creates a plain object from an EnterMatch message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EnterMatch
     * @static
     * @param {EnterMatch} message EnterMatch
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EnterMatch.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.zid = 0;
            object.matchid = 0;
            object.seatid = 0;
            object.side = 0;
        }
        if (message.zid != null && message.hasOwnProperty("zid"))
            object.zid = message.zid;
        if (message.matchid != null && message.hasOwnProperty("matchid"))
            object.matchid = message.matchid;
        if (message.seatid != null && message.hasOwnProperty("seatid"))
            object.seatid = message.seatid;
        if (message.side != null && message.hasOwnProperty("side"))
            object.side = message.side;
        return object;
    };

    /**
     * Converts this EnterMatch to JSON.
     * @function toJSON
     * @memberof EnterMatch
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EnterMatch.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EnterMatch;
})();

$root.UserArrived = (function() {

    /**
     * Properties of a UserArrived.
     * @exports IUserArrived
     * @interface IUserArrived
     * @property {string} unick UserArrived unick
     * @property {number} uface UserArrived uface
     * @property {number} usex UserArrived usex
     * @property {number} seatid UserArrived seatid
     * @property {number} side UserArrived side
     * @property {string} roomid UserArrived roomid
     * @property {boolean} ishost UserArrived ishost
     * @property {boolean} isoffline UserArrived isoffline
     * @property {string|null} [brandid] UserArrived brandid
     * @property {string|null} [numberid] UserArrived numberid
     * @property {string|null} [areaid] UserArrived areaid
     * @property {number|null} [userstate] UserArrived userstate
     */

    /**
     * Constructs a new UserArrived.
     * @exports UserArrived
     * @classdesc Represents a UserArrived.
     * @implements IUserArrived
     * @constructor
     * @param {IUserArrived=} [properties] Properties to set
     */
    function UserArrived(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserArrived unick.
     * @member {string} unick
     * @memberof UserArrived
     * @instance
     */
    UserArrived.prototype.unick = "";

    /**
     * UserArrived uface.
     * @member {number} uface
     * @memberof UserArrived
     * @instance
     */
    UserArrived.prototype.uface = 0;

    /**
     * UserArrived usex.
     * @member {number} usex
     * @memberof UserArrived
     * @instance
     */
    UserArrived.prototype.usex = 0;

    /**
     * UserArrived seatid.
     * @member {number} seatid
     * @memberof UserArrived
     * @instance
     */
    UserArrived.prototype.seatid = 0;

    /**
     * UserArrived side.
     * @member {number} side
     * @memberof UserArrived
     * @instance
     */
    UserArrived.prototype.side = 0;

    /**
     * UserArrived roomid.
     * @member {string} roomid
     * @memberof UserArrived
     * @instance
     */
    UserArrived.prototype.roomid = "";

    /**
     * UserArrived ishost.
     * @member {boolean} ishost
     * @memberof UserArrived
     * @instance
     */
    UserArrived.prototype.ishost = false;

    /**
     * UserArrived isoffline.
     * @member {boolean} isoffline
     * @memberof UserArrived
     * @instance
     */
    UserArrived.prototype.isoffline = false;

    /**
     * UserArrived brandid.
     * @member {string} brandid
     * @memberof UserArrived
     * @instance
     */
    UserArrived.prototype.brandid = "";

    /**
     * UserArrived numberid.
     * @member {string} numberid
     * @memberof UserArrived
     * @instance
     */
    UserArrived.prototype.numberid = "";

    /**
     * UserArrived areaid.
     * @member {string} areaid
     * @memberof UserArrived
     * @instance
     */
    UserArrived.prototype.areaid = "";

    /**
     * UserArrived userstate.
     * @member {number} userstate
     * @memberof UserArrived
     * @instance
     */
    UserArrived.prototype.userstate = 0;

    /**
     * Creates a new UserArrived instance using the specified properties.
     * @function create
     * @memberof UserArrived
     * @static
     * @param {IUserArrived=} [properties] Properties to set
     * @returns {UserArrived} UserArrived instance
     */
    UserArrived.create = function create(properties) {
        return new UserArrived(properties);
    };

    /**
     * Encodes the specified UserArrived message. Does not implicitly {@link UserArrived.verify|verify} messages.
     * @function encode
     * @memberof UserArrived
     * @static
     * @param {IUserArrived} message UserArrived message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserArrived.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.unick);
        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.uface);
        writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.usex);
        writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.seatid);
        writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.side);
        writer.uint32(/* id 6, wireType 2 =*/50).string(message.roomid);
        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.ishost);
        writer.uint32(/* id 8, wireType 0 =*/64).bool(message.isoffline);
        if (message.brandid != null && message.hasOwnProperty("brandid"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.brandid);
        if (message.numberid != null && message.hasOwnProperty("numberid"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.numberid);
        if (message.areaid != null && message.hasOwnProperty("areaid"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.areaid);
        if (message.userstate != null && message.hasOwnProperty("userstate"))
            writer.uint32(/* id 12, wireType 0 =*/96).sint32(message.userstate);
        return writer;
    };

    /**
     * Encodes the specified UserArrived message, length delimited. Does not implicitly {@link UserArrived.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserArrived
     * @static
     * @param {IUserArrived} message UserArrived message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserArrived.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserArrived message from the specified reader or buffer.
     * @function decode
     * @memberof UserArrived
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserArrived} UserArrived
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserArrived.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserArrived();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.unick = reader.string();
                break;
            case 2:
                message.uface = reader.sint32();
                break;
            case 3:
                message.usex = reader.sint32();
                break;
            case 4:
                message.seatid = reader.sint32();
                break;
            case 5:
                message.side = reader.sint32();
                break;
            case 6:
                message.roomid = reader.string();
                break;
            case 7:
                message.ishost = reader.bool();
                break;
            case 8:
                message.isoffline = reader.bool();
                break;
            case 9:
                message.brandid = reader.string();
                break;
            case 10:
                message.numberid = reader.string();
                break;
            case 11:
                message.areaid = reader.string();
                break;
            case 12:
                message.userstate = reader.sint32();
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
        if (!message.hasOwnProperty("seatid"))
            throw $util.ProtocolError("missing required 'seatid'", { instance: message });
        if (!message.hasOwnProperty("side"))
            throw $util.ProtocolError("missing required 'side'", { instance: message });
        if (!message.hasOwnProperty("roomid"))
            throw $util.ProtocolError("missing required 'roomid'", { instance: message });
        if (!message.hasOwnProperty("ishost"))
            throw $util.ProtocolError("missing required 'ishost'", { instance: message });
        if (!message.hasOwnProperty("isoffline"))
            throw $util.ProtocolError("missing required 'isoffline'", { instance: message });
        return message;
    };

    /**
     * Decodes a UserArrived message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserArrived
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserArrived} UserArrived
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserArrived.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserArrived message.
     * @function verify
     * @memberof UserArrived
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserArrived.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.unick))
            return "unick: string expected";
        if (!$util.isInteger(message.uface))
            return "uface: integer expected";
        if (!$util.isInteger(message.usex))
            return "usex: integer expected";
        if (!$util.isInteger(message.seatid))
            return "seatid: integer expected";
        if (!$util.isInteger(message.side))
            return "side: integer expected";
        if (!$util.isString(message.roomid))
            return "roomid: string expected";
        if (typeof message.ishost !== "boolean")
            return "ishost: boolean expected";
        if (typeof message.isoffline !== "boolean")
            return "isoffline: boolean expected";
        if (message.brandid != null && message.hasOwnProperty("brandid"))
            if (!$util.isString(message.brandid))
                return "brandid: string expected";
        if (message.numberid != null && message.hasOwnProperty("numberid"))
            if (!$util.isString(message.numberid))
                return "numberid: string expected";
        if (message.areaid != null && message.hasOwnProperty("areaid"))
            if (!$util.isString(message.areaid))
                return "areaid: string expected";
        if (message.userstate != null && message.hasOwnProperty("userstate"))
            if (!$util.isInteger(message.userstate))
                return "userstate: integer expected";
        return null;
    };

    /**
     * Creates a UserArrived message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserArrived
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserArrived} UserArrived
     */
    UserArrived.fromObject = function fromObject(object) {
        if (object instanceof $root.UserArrived)
            return object;
        var message = new $root.UserArrived();
        if (object.unick != null)
            message.unick = String(object.unick);
        if (object.uface != null)
            message.uface = object.uface | 0;
        if (object.usex != null)
            message.usex = object.usex | 0;
        if (object.seatid != null)
            message.seatid = object.seatid | 0;
        if (object.side != null)
            message.side = object.side | 0;
        if (object.roomid != null)
            message.roomid = String(object.roomid);
        if (object.ishost != null)
            message.ishost = Boolean(object.ishost);
        if (object.isoffline != null)
            message.isoffline = Boolean(object.isoffline);
        if (object.brandid != null)
            message.brandid = String(object.brandid);
        if (object.numberid != null)
            message.numberid = String(object.numberid);
        if (object.areaid != null)
            message.areaid = String(object.areaid);
        if (object.userstate != null)
            message.userstate = object.userstate | 0;
        return message;
    };

    /**
     * Creates a plain object from a UserArrived message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserArrived
     * @static
     * @param {UserArrived} message UserArrived
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserArrived.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.unick = "";
            object.uface = 0;
            object.usex = 0;
            object.seatid = 0;
            object.side = 0;
            object.roomid = "";
            object.ishost = false;
            object.isoffline = false;
            object.brandid = "";
            object.numberid = "";
            object.areaid = "";
            object.userstate = 0;
        }
        if (message.unick != null && message.hasOwnProperty("unick"))
            object.unick = message.unick;
        if (message.uface != null && message.hasOwnProperty("uface"))
            object.uface = message.uface;
        if (message.usex != null && message.hasOwnProperty("usex"))
            object.usex = message.usex;
        if (message.seatid != null && message.hasOwnProperty("seatid"))
            object.seatid = message.seatid;
        if (message.side != null && message.hasOwnProperty("side"))
            object.side = message.side;
        if (message.roomid != null && message.hasOwnProperty("roomid"))
            object.roomid = message.roomid;
        if (message.ishost != null && message.hasOwnProperty("ishost"))
            object.ishost = message.ishost;
        if (message.isoffline != null && message.hasOwnProperty("isoffline"))
            object.isoffline = message.isoffline;
        if (message.brandid != null && message.hasOwnProperty("brandid"))
            object.brandid = message.brandid;
        if (message.numberid != null && message.hasOwnProperty("numberid"))
            object.numberid = message.numberid;
        if (message.areaid != null && message.hasOwnProperty("areaid"))
            object.areaid = message.areaid;
        if (message.userstate != null && message.hasOwnProperty("userstate"))
            object.userstate = message.userstate;
        return object;
    };

    /**
     * Converts this UserArrived to JSON.
     * @function toJSON
     * @memberof UserArrived
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserArrived.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserArrived;
})();

$root.ExitMatchReq = (function() {

    /**
     * Properties of an ExitMatchReq.
     * @exports IExitMatchReq
     * @interface IExitMatchReq
     */

    /**
     * Constructs a new ExitMatchReq.
     * @exports ExitMatchReq
     * @classdesc Represents an ExitMatchReq.
     * @implements IExitMatchReq
     * @constructor
     * @param {IExitMatchReq=} [properties] Properties to set
     */
    function ExitMatchReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ExitMatchReq instance using the specified properties.
     * @function create
     * @memberof ExitMatchReq
     * @static
     * @param {IExitMatchReq=} [properties] Properties to set
     * @returns {ExitMatchReq} ExitMatchReq instance
     */
    ExitMatchReq.create = function create(properties) {
        return new ExitMatchReq(properties);
    };

    /**
     * Encodes the specified ExitMatchReq message. Does not implicitly {@link ExitMatchReq.verify|verify} messages.
     * @function encode
     * @memberof ExitMatchReq
     * @static
     * @param {IExitMatchReq} message ExitMatchReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExitMatchReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ExitMatchReq message, length delimited. Does not implicitly {@link ExitMatchReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ExitMatchReq
     * @static
     * @param {IExitMatchReq} message ExitMatchReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExitMatchReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ExitMatchReq message from the specified reader or buffer.
     * @function decode
     * @memberof ExitMatchReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ExitMatchReq} ExitMatchReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExitMatchReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ExitMatchReq();
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
     * Decodes an ExitMatchReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ExitMatchReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ExitMatchReq} ExitMatchReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExitMatchReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ExitMatchReq message.
     * @function verify
     * @memberof ExitMatchReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ExitMatchReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an ExitMatchReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ExitMatchReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ExitMatchReq} ExitMatchReq
     */
    ExitMatchReq.fromObject = function fromObject(object) {
        if (object instanceof $root.ExitMatchReq)
            return object;
        return new $root.ExitMatchReq();
    };

    /**
     * Creates a plain object from an ExitMatchReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ExitMatchReq
     * @static
     * @param {ExitMatchReq} message ExitMatchReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ExitMatchReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ExitMatchReq to JSON.
     * @function toJSON
     * @memberof ExitMatchReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ExitMatchReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ExitMatchReq;
})();

$root.ExitMatchRes = (function() {

    /**
     * Properties of an ExitMatchRes.
     * @exports IExitMatchRes
     * @interface IExitMatchRes
     * @property {number} status ExitMatchRes status
     */

    /**
     * Constructs a new ExitMatchRes.
     * @exports ExitMatchRes
     * @classdesc Represents an ExitMatchRes.
     * @implements IExitMatchRes
     * @constructor
     * @param {IExitMatchRes=} [properties] Properties to set
     */
    function ExitMatchRes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ExitMatchRes status.
     * @member {number} status
     * @memberof ExitMatchRes
     * @instance
     */
    ExitMatchRes.prototype.status = 0;

    /**
     * Creates a new ExitMatchRes instance using the specified properties.
     * @function create
     * @memberof ExitMatchRes
     * @static
     * @param {IExitMatchRes=} [properties] Properties to set
     * @returns {ExitMatchRes} ExitMatchRes instance
     */
    ExitMatchRes.create = function create(properties) {
        return new ExitMatchRes(properties);
    };

    /**
     * Encodes the specified ExitMatchRes message. Does not implicitly {@link ExitMatchRes.verify|verify} messages.
     * @function encode
     * @memberof ExitMatchRes
     * @static
     * @param {IExitMatchRes} message ExitMatchRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExitMatchRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified ExitMatchRes message, length delimited. Does not implicitly {@link ExitMatchRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ExitMatchRes
     * @static
     * @param {IExitMatchRes} message ExitMatchRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExitMatchRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ExitMatchRes message from the specified reader or buffer.
     * @function decode
     * @memberof ExitMatchRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ExitMatchRes} ExitMatchRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExitMatchRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ExitMatchRes();
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
     * Decodes an ExitMatchRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ExitMatchRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ExitMatchRes} ExitMatchRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExitMatchRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ExitMatchRes message.
     * @function verify
     * @memberof ExitMatchRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ExitMatchRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.status))
            return "status: integer expected";
        return null;
    };

    /**
     * Creates an ExitMatchRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ExitMatchRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ExitMatchRes} ExitMatchRes
     */
    ExitMatchRes.fromObject = function fromObject(object) {
        if (object instanceof $root.ExitMatchRes)
            return object;
        var message = new $root.ExitMatchRes();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from an ExitMatchRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ExitMatchRes
     * @static
     * @param {ExitMatchRes} message ExitMatchRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ExitMatchRes.toObject = function toObject(message, options) {
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
     * Converts this ExitMatchRes to JSON.
     * @function toJSON
     * @memberof ExitMatchRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ExitMatchRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ExitMatchRes;
})();

$root.UserExitMatch = (function() {

    /**
     * Properties of a UserExitMatch.
     * @exports IUserExitMatch
     * @interface IUserExitMatch
     * @property {number} seatid UserExitMatch seatid
     */

    /**
     * Constructs a new UserExitMatch.
     * @exports UserExitMatch
     * @classdesc Represents a UserExitMatch.
     * @implements IUserExitMatch
     * @constructor
     * @param {IUserExitMatch=} [properties] Properties to set
     */
    function UserExitMatch(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserExitMatch seatid.
     * @member {number} seatid
     * @memberof UserExitMatch
     * @instance
     */
    UserExitMatch.prototype.seatid = 0;

    /**
     * Creates a new UserExitMatch instance using the specified properties.
     * @function create
     * @memberof UserExitMatch
     * @static
     * @param {IUserExitMatch=} [properties] Properties to set
     * @returns {UserExitMatch} UserExitMatch instance
     */
    UserExitMatch.create = function create(properties) {
        return new UserExitMatch(properties);
    };

    /**
     * Encodes the specified UserExitMatch message. Does not implicitly {@link UserExitMatch.verify|verify} messages.
     * @function encode
     * @memberof UserExitMatch
     * @static
     * @param {IUserExitMatch} message UserExitMatch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserExitMatch.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.seatid);
        return writer;
    };

    /**
     * Encodes the specified UserExitMatch message, length delimited. Does not implicitly {@link UserExitMatch.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserExitMatch
     * @static
     * @param {IUserExitMatch} message UserExitMatch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserExitMatch.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserExitMatch message from the specified reader or buffer.
     * @function decode
     * @memberof UserExitMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserExitMatch} UserExitMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserExitMatch.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserExitMatch();
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
     * Decodes a UserExitMatch message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserExitMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserExitMatch} UserExitMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserExitMatch.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserExitMatch message.
     * @function verify
     * @memberof UserExitMatch
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserExitMatch.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.seatid))
            return "seatid: integer expected";
        return null;
    };

    /**
     * Creates a UserExitMatch message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserExitMatch
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserExitMatch} UserExitMatch
     */
    UserExitMatch.fromObject = function fromObject(object) {
        if (object instanceof $root.UserExitMatch)
            return object;
        var message = new $root.UserExitMatch();
        if (object.seatid != null)
            message.seatid = object.seatid | 0;
        return message;
    };

    /**
     * Creates a plain object from a UserExitMatch message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserExitMatch
     * @static
     * @param {UserExitMatch} message UserExitMatch
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserExitMatch.toObject = function toObject(message, options) {
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
     * Converts this UserExitMatch to JSON.
     * @function toJSON
     * @memberof UserExitMatch
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserExitMatch.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserExitMatch;
})();

$root.UserRegistReq = (function() {

    /**
     * Properties of a UserRegistReq.
     * @exports IUserRegistReq
     * @interface IUserRegistReq
     * @property {string} uname UserRegistReq uname
     * @property {string} upwdmd5 UserRegistReq upwdmd5
     */

    /**
     * Constructs a new UserRegistReq.
     * @exports UserRegistReq
     * @classdesc Represents a UserRegistReq.
     * @implements IUserRegistReq
     * @constructor
     * @param {IUserRegistReq=} [properties] Properties to set
     */
    function UserRegistReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserRegistReq uname.
     * @member {string} uname
     * @memberof UserRegistReq
     * @instance
     */
    UserRegistReq.prototype.uname = "";

    /**
     * UserRegistReq upwdmd5.
     * @member {string} upwdmd5
     * @memberof UserRegistReq
     * @instance
     */
    UserRegistReq.prototype.upwdmd5 = "";

    /**
     * Creates a new UserRegistReq instance using the specified properties.
     * @function create
     * @memberof UserRegistReq
     * @static
     * @param {IUserRegistReq=} [properties] Properties to set
     * @returns {UserRegistReq} UserRegistReq instance
     */
    UserRegistReq.create = function create(properties) {
        return new UserRegistReq(properties);
    };

    /**
     * Encodes the specified UserRegistReq message. Does not implicitly {@link UserRegistReq.verify|verify} messages.
     * @function encode
     * @memberof UserRegistReq
     * @static
     * @param {IUserRegistReq} message UserRegistReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserRegistReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.uname);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.upwdmd5);
        return writer;
    };

    /**
     * Encodes the specified UserRegistReq message, length delimited. Does not implicitly {@link UserRegistReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserRegistReq
     * @static
     * @param {IUserRegistReq} message UserRegistReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserRegistReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserRegistReq message from the specified reader or buffer.
     * @function decode
     * @memberof UserRegistReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserRegistReq} UserRegistReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserRegistReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserRegistReq();
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
     * Decodes a UserRegistReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserRegistReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserRegistReq} UserRegistReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserRegistReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserRegistReq message.
     * @function verify
     * @memberof UserRegistReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserRegistReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.uname))
            return "uname: string expected";
        if (!$util.isString(message.upwdmd5))
            return "upwdmd5: string expected";
        return null;
    };

    /**
     * Creates a UserRegistReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserRegistReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserRegistReq} UserRegistReq
     */
    UserRegistReq.fromObject = function fromObject(object) {
        if (object instanceof $root.UserRegistReq)
            return object;
        var message = new $root.UserRegistReq();
        if (object.uname != null)
            message.uname = String(object.uname);
        if (object.upwdmd5 != null)
            message.upwdmd5 = String(object.upwdmd5);
        return message;
    };

    /**
     * Creates a plain object from a UserRegistReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserRegistReq
     * @static
     * @param {UserRegistReq} message UserRegistReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserRegistReq.toObject = function toObject(message, options) {
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
     * Converts this UserRegistReq to JSON.
     * @function toJSON
     * @memberof UserRegistReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserRegistReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserRegistReq;
})();

$root.UserRegistRes = (function() {

    /**
     * Properties of a UserRegistRes.
     * @exports IUserRegistRes
     * @interface IUserRegistRes
     * @property {number} status UserRegistRes status
     */

    /**
     * Constructs a new UserRegistRes.
     * @exports UserRegistRes
     * @classdesc Represents a UserRegistRes.
     * @implements IUserRegistRes
     * @constructor
     * @param {IUserRegistRes=} [properties] Properties to set
     */
    function UserRegistRes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserRegistRes status.
     * @member {number} status
     * @memberof UserRegistRes
     * @instance
     */
    UserRegistRes.prototype.status = 0;

    /**
     * Creates a new UserRegistRes instance using the specified properties.
     * @function create
     * @memberof UserRegistRes
     * @static
     * @param {IUserRegistRes=} [properties] Properties to set
     * @returns {UserRegistRes} UserRegistRes instance
     */
    UserRegistRes.create = function create(properties) {
        return new UserRegistRes(properties);
    };

    /**
     * Encodes the specified UserRegistRes message. Does not implicitly {@link UserRegistRes.verify|verify} messages.
     * @function encode
     * @memberof UserRegistRes
     * @static
     * @param {IUserRegistRes} message UserRegistRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserRegistRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified UserRegistRes message, length delimited. Does not implicitly {@link UserRegistRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserRegistRes
     * @static
     * @param {IUserRegistRes} message UserRegistRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserRegistRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserRegistRes message from the specified reader or buffer.
     * @function decode
     * @memberof UserRegistRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserRegistRes} UserRegistRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserRegistRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserRegistRes();
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
     * Decodes a UserRegistRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserRegistRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserRegistRes} UserRegistRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserRegistRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserRegistRes message.
     * @function verify
     * @memberof UserRegistRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserRegistRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.status))
            return "status: integer expected";
        return null;
    };

    /**
     * Creates a UserRegistRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserRegistRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserRegistRes} UserRegistRes
     */
    UserRegistRes.fromObject = function fromObject(object) {
        if (object instanceof $root.UserRegistRes)
            return object;
        var message = new $root.UserRegistRes();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a UserRegistRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserRegistRes
     * @static
     * @param {UserRegistRes} message UserRegistRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserRegistRes.toObject = function toObject(message, options) {
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
     * Converts this UserRegistRes to JSON.
     * @function toJSON
     * @memberof UserRegistRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserRegistRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserRegistRes;
})();

$root.CreateRoomReq = (function() {

    /**
     * Properties of a CreateRoomReq.
     * @exports ICreateRoomReq
     * @interface ICreateRoomReq
     * @property {string} roominfo CreateRoomReq roominfo
     */

    /**
     * Constructs a new CreateRoomReq.
     * @exports CreateRoomReq
     * @classdesc Represents a CreateRoomReq.
     * @implements ICreateRoomReq
     * @constructor
     * @param {ICreateRoomReq=} [properties] Properties to set
     */
    function CreateRoomReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateRoomReq roominfo.
     * @member {string} roominfo
     * @memberof CreateRoomReq
     * @instance
     */
    CreateRoomReq.prototype.roominfo = "";

    /**
     * Creates a new CreateRoomReq instance using the specified properties.
     * @function create
     * @memberof CreateRoomReq
     * @static
     * @param {ICreateRoomReq=} [properties] Properties to set
     * @returns {CreateRoomReq} CreateRoomReq instance
     */
    CreateRoomReq.create = function create(properties) {
        return new CreateRoomReq(properties);
    };

    /**
     * Encodes the specified CreateRoomReq message. Does not implicitly {@link CreateRoomReq.verify|verify} messages.
     * @function encode
     * @memberof CreateRoomReq
     * @static
     * @param {ICreateRoomReq} message CreateRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateRoomReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.roominfo);
        return writer;
    };

    /**
     * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link CreateRoomReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateRoomReq
     * @static
     * @param {ICreateRoomReq} message CreateRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof CreateRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateRoomReq} CreateRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateRoomReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateRoomReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.roominfo = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("roominfo"))
            throw $util.ProtocolError("missing required 'roominfo'", { instance: message });
        return message;
    };

    /**
     * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateRoomReq} CreateRoomReq
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
     * @memberof CreateRoomReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateRoomReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.roominfo))
            return "roominfo: string expected";
        return null;
    };

    /**
     * Creates a CreateRoomReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateRoomReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateRoomReq} CreateRoomReq
     */
    CreateRoomReq.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateRoomReq)
            return object;
        var message = new $root.CreateRoomReq();
        if (object.roominfo != null)
            message.roominfo = String(object.roominfo);
        return message;
    };

    /**
     * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateRoomReq
     * @static
     * @param {CreateRoomReq} message CreateRoomReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateRoomReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.roominfo = "";
        if (message.roominfo != null && message.hasOwnProperty("roominfo"))
            object.roominfo = message.roominfo;
        return object;
    };

    /**
     * Converts this CreateRoomReq to JSON.
     * @function toJSON
     * @memberof CreateRoomReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateRoomReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateRoomReq;
})();

$root.CreateRoomRes = (function() {

    /**
     * Properties of a CreateRoomRes.
     * @exports ICreateRoomRes
     * @interface ICreateRoomRes
     * @property {number} status CreateRoomRes status
     */

    /**
     * Constructs a new CreateRoomRes.
     * @exports CreateRoomRes
     * @classdesc Represents a CreateRoomRes.
     * @implements ICreateRoomRes
     * @constructor
     * @param {ICreateRoomRes=} [properties] Properties to set
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
     * @memberof CreateRoomRes
     * @instance
     */
    CreateRoomRes.prototype.status = 0;

    /**
     * Creates a new CreateRoomRes instance using the specified properties.
     * @function create
     * @memberof CreateRoomRes
     * @static
     * @param {ICreateRoomRes=} [properties] Properties to set
     * @returns {CreateRoomRes} CreateRoomRes instance
     */
    CreateRoomRes.create = function create(properties) {
        return new CreateRoomRes(properties);
    };

    /**
     * Encodes the specified CreateRoomRes message. Does not implicitly {@link CreateRoomRes.verify|verify} messages.
     * @function encode
     * @memberof CreateRoomRes
     * @static
     * @param {ICreateRoomRes} message CreateRoomRes message or plain object to encode
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
     * Encodes the specified CreateRoomRes message, length delimited. Does not implicitly {@link CreateRoomRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateRoomRes
     * @static
     * @param {ICreateRoomRes} message CreateRoomRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateRoomRes message from the specified reader or buffer.
     * @function decode
     * @memberof CreateRoomRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateRoomRes} CreateRoomRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateRoomRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateRoomRes();
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
     * @memberof CreateRoomRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateRoomRes} CreateRoomRes
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
     * @memberof CreateRoomRes
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
     * @memberof CreateRoomRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateRoomRes} CreateRoomRes
     */
    CreateRoomRes.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateRoomRes)
            return object;
        var message = new $root.CreateRoomRes();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a CreateRoomRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateRoomRes
     * @static
     * @param {CreateRoomRes} message CreateRoomRes
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
     * @memberof CreateRoomRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateRoomRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateRoomRes;
})();

$root.JoinRoomReq = (function() {

    /**
     * Properties of a JoinRoomReq.
     * @exports IJoinRoomReq
     * @interface IJoinRoomReq
     * @property {string} roomid JoinRoomReq roomid
     */

    /**
     * Constructs a new JoinRoomReq.
     * @exports JoinRoomReq
     * @classdesc Represents a JoinRoomReq.
     * @implements IJoinRoomReq
     * @constructor
     * @param {IJoinRoomReq=} [properties] Properties to set
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
     * @memberof JoinRoomReq
     * @instance
     */
    JoinRoomReq.prototype.roomid = "";

    /**
     * Creates a new JoinRoomReq instance using the specified properties.
     * @function create
     * @memberof JoinRoomReq
     * @static
     * @param {IJoinRoomReq=} [properties] Properties to set
     * @returns {JoinRoomReq} JoinRoomReq instance
     */
    JoinRoomReq.create = function create(properties) {
        return new JoinRoomReq(properties);
    };

    /**
     * Encodes the specified JoinRoomReq message. Does not implicitly {@link JoinRoomReq.verify|verify} messages.
     * @function encode
     * @memberof JoinRoomReq
     * @static
     * @param {IJoinRoomReq} message JoinRoomReq message or plain object to encode
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
     * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link JoinRoomReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JoinRoomReq
     * @static
     * @param {IJoinRoomReq} message JoinRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JoinRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof JoinRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JoinRoomReq} JoinRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JoinRoomReq();
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
     * @memberof JoinRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JoinRoomReq} JoinRoomReq
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
     * @memberof JoinRoomReq
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
     * @memberof JoinRoomReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {JoinRoomReq} JoinRoomReq
     */
    JoinRoomReq.fromObject = function fromObject(object) {
        if (object instanceof $root.JoinRoomReq)
            return object;
        var message = new $root.JoinRoomReq();
        if (object.roomid != null)
            message.roomid = String(object.roomid);
        return message;
    };

    /**
     * Creates a plain object from a JoinRoomReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof JoinRoomReq
     * @static
     * @param {JoinRoomReq} message JoinRoomReq
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
     * @memberof JoinRoomReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    JoinRoomReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return JoinRoomReq;
})();

$root.JoinRoomRes = (function() {

    /**
     * Properties of a JoinRoomRes.
     * @exports IJoinRoomRes
     * @interface IJoinRoomRes
     * @property {number} status JoinRoomRes status
     */

    /**
     * Constructs a new JoinRoomRes.
     * @exports JoinRoomRes
     * @classdesc Represents a JoinRoomRes.
     * @implements IJoinRoomRes
     * @constructor
     * @param {IJoinRoomRes=} [properties] Properties to set
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
     * @memberof JoinRoomRes
     * @instance
     */
    JoinRoomRes.prototype.status = 0;

    /**
     * Creates a new JoinRoomRes instance using the specified properties.
     * @function create
     * @memberof JoinRoomRes
     * @static
     * @param {IJoinRoomRes=} [properties] Properties to set
     * @returns {JoinRoomRes} JoinRoomRes instance
     */
    JoinRoomRes.create = function create(properties) {
        return new JoinRoomRes(properties);
    };

    /**
     * Encodes the specified JoinRoomRes message. Does not implicitly {@link JoinRoomRes.verify|verify} messages.
     * @function encode
     * @memberof JoinRoomRes
     * @static
     * @param {IJoinRoomRes} message JoinRoomRes message or plain object to encode
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
     * Encodes the specified JoinRoomRes message, length delimited. Does not implicitly {@link JoinRoomRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JoinRoomRes
     * @static
     * @param {IJoinRoomRes} message JoinRoomRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JoinRoomRes message from the specified reader or buffer.
     * @function decode
     * @memberof JoinRoomRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JoinRoomRes} JoinRoomRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JoinRoomRes();
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
     * @memberof JoinRoomRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JoinRoomRes} JoinRoomRes
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
     * @memberof JoinRoomRes
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
     * @memberof JoinRoomRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {JoinRoomRes} JoinRoomRes
     */
    JoinRoomRes.fromObject = function fromObject(object) {
        if (object instanceof $root.JoinRoomRes)
            return object;
        var message = new $root.JoinRoomRes();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a JoinRoomRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof JoinRoomRes
     * @static
     * @param {JoinRoomRes} message JoinRoomRes
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
     * @memberof JoinRoomRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    JoinRoomRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return JoinRoomRes;
})();

$root.ExitRoomReq = (function() {

    /**
     * Properties of an ExitRoomReq.
     * @exports IExitRoomReq
     * @interface IExitRoomReq
     */

    /**
     * Constructs a new ExitRoomReq.
     * @exports ExitRoomReq
     * @classdesc Represents an ExitRoomReq.
     * @implements IExitRoomReq
     * @constructor
     * @param {IExitRoomReq=} [properties] Properties to set
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
     * @memberof ExitRoomReq
     * @static
     * @param {IExitRoomReq=} [properties] Properties to set
     * @returns {ExitRoomReq} ExitRoomReq instance
     */
    ExitRoomReq.create = function create(properties) {
        return new ExitRoomReq(properties);
    };

    /**
     * Encodes the specified ExitRoomReq message. Does not implicitly {@link ExitRoomReq.verify|verify} messages.
     * @function encode
     * @memberof ExitRoomReq
     * @static
     * @param {IExitRoomReq} message ExitRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExitRoomReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ExitRoomReq message, length delimited. Does not implicitly {@link ExitRoomReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ExitRoomReq
     * @static
     * @param {IExitRoomReq} message ExitRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExitRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ExitRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof ExitRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ExitRoomReq} ExitRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExitRoomReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ExitRoomReq();
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
     * @memberof ExitRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ExitRoomReq} ExitRoomReq
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
     * @memberof ExitRoomReq
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
     * @memberof ExitRoomReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ExitRoomReq} ExitRoomReq
     */
    ExitRoomReq.fromObject = function fromObject(object) {
        if (object instanceof $root.ExitRoomReq)
            return object;
        return new $root.ExitRoomReq();
    };

    /**
     * Creates a plain object from an ExitRoomReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ExitRoomReq
     * @static
     * @param {ExitRoomReq} message ExitRoomReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ExitRoomReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ExitRoomReq to JSON.
     * @function toJSON
     * @memberof ExitRoomReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ExitRoomReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ExitRoomReq;
})();

$root.ExitRoomRes = (function() {

    /**
     * Properties of an ExitRoomRes.
     * @exports IExitRoomRes
     * @interface IExitRoomRes
     * @property {number} status ExitRoomRes status
     * @property {IUserArrived|null} [userinfo] ExitRoomRes userinfo
     */

    /**
     * Constructs a new ExitRoomRes.
     * @exports ExitRoomRes
     * @classdesc Represents an ExitRoomRes.
     * @implements IExitRoomRes
     * @constructor
     * @param {IExitRoomRes=} [properties] Properties to set
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
     * @memberof ExitRoomRes
     * @instance
     */
    ExitRoomRes.prototype.status = 0;

    /**
     * ExitRoomRes userinfo.
     * @member {IUserArrived|null|undefined} userinfo
     * @memberof ExitRoomRes
     * @instance
     */
    ExitRoomRes.prototype.userinfo = null;

    /**
     * Creates a new ExitRoomRes instance using the specified properties.
     * @function create
     * @memberof ExitRoomRes
     * @static
     * @param {IExitRoomRes=} [properties] Properties to set
     * @returns {ExitRoomRes} ExitRoomRes instance
     */
    ExitRoomRes.create = function create(properties) {
        return new ExitRoomRes(properties);
    };

    /**
     * Encodes the specified ExitRoomRes message. Does not implicitly {@link ExitRoomRes.verify|verify} messages.
     * @function encode
     * @memberof ExitRoomRes
     * @static
     * @param {IExitRoomRes} message ExitRoomRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExitRoomRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        if (message.userinfo != null && message.hasOwnProperty("userinfo"))
            $root.UserArrived.encode(message.userinfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ExitRoomRes message, length delimited. Does not implicitly {@link ExitRoomRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ExitRoomRes
     * @static
     * @param {IExitRoomRes} message ExitRoomRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExitRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ExitRoomRes message from the specified reader or buffer.
     * @function decode
     * @memberof ExitRoomRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ExitRoomRes} ExitRoomRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExitRoomRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ExitRoomRes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.status = reader.sint32();
                break;
            case 2:
                message.userinfo = $root.UserArrived.decode(reader, reader.uint32());
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
     * @memberof ExitRoomRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ExitRoomRes} ExitRoomRes
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
     * @memberof ExitRoomRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ExitRoomRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.status))
            return "status: integer expected";
        if (message.userinfo != null && message.hasOwnProperty("userinfo")) {
            var error = $root.UserArrived.verify(message.userinfo);
            if (error)
                return "userinfo." + error;
        }
        return null;
    };

    /**
     * Creates an ExitRoomRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ExitRoomRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ExitRoomRes} ExitRoomRes
     */
    ExitRoomRes.fromObject = function fromObject(object) {
        if (object instanceof $root.ExitRoomRes)
            return object;
        var message = new $root.ExitRoomRes();
        if (object.status != null)
            message.status = object.status | 0;
        if (object.userinfo != null) {
            if (typeof object.userinfo !== "object")
                throw TypeError(".ExitRoomRes.userinfo: object expected");
            message.userinfo = $root.UserArrived.fromObject(object.userinfo);
        }
        return message;
    };

    /**
     * Creates a plain object from an ExitRoomRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ExitRoomRes
     * @static
     * @param {ExitRoomRes} message ExitRoomRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ExitRoomRes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.status = 0;
            object.userinfo = null;
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.userinfo != null && message.hasOwnProperty("userinfo"))
            object.userinfo = $root.UserArrived.toObject(message.userinfo, options);
        return object;
    };

    /**
     * Converts this ExitRoomRes to JSON.
     * @function toJSON
     * @memberof ExitRoomRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ExitRoomRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ExitRoomRes;
})();

$root.DessolveReq = (function() {

    /**
     * Properties of a DessolveReq.
     * @exports IDessolveReq
     * @interface IDessolveReq
     */

    /**
     * Constructs a new DessolveReq.
     * @exports DessolveReq
     * @classdesc Represents a DessolveReq.
     * @implements IDessolveReq
     * @constructor
     * @param {IDessolveReq=} [properties] Properties to set
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
     * @memberof DessolveReq
     * @static
     * @param {IDessolveReq=} [properties] Properties to set
     * @returns {DessolveReq} DessolveReq instance
     */
    DessolveReq.create = function create(properties) {
        return new DessolveReq(properties);
    };

    /**
     * Encodes the specified DessolveReq message. Does not implicitly {@link DessolveReq.verify|verify} messages.
     * @function encode
     * @memberof DessolveReq
     * @static
     * @param {IDessolveReq} message DessolveReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DessolveReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified DessolveReq message, length delimited. Does not implicitly {@link DessolveReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DessolveReq
     * @static
     * @param {IDessolveReq} message DessolveReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DessolveReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DessolveReq message from the specified reader or buffer.
     * @function decode
     * @memberof DessolveReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DessolveReq} DessolveReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DessolveReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DessolveReq();
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
     * @memberof DessolveReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DessolveReq} DessolveReq
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
     * @memberof DessolveReq
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
     * @memberof DessolveReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DessolveReq} DessolveReq
     */
    DessolveReq.fromObject = function fromObject(object) {
        if (object instanceof $root.DessolveReq)
            return object;
        return new $root.DessolveReq();
    };

    /**
     * Creates a plain object from a DessolveReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DessolveReq
     * @static
     * @param {DessolveReq} message DessolveReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DessolveReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this DessolveReq to JSON.
     * @function toJSON
     * @memberof DessolveReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DessolveReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DessolveReq;
})();

$root.DessolveRes = (function() {

    /**
     * Properties of a DessolveRes.
     * @exports IDessolveRes
     * @interface IDessolveRes
     * @property {number} status DessolveRes status
     */

    /**
     * Constructs a new DessolveRes.
     * @exports DessolveRes
     * @classdesc Represents a DessolveRes.
     * @implements IDessolveRes
     * @constructor
     * @param {IDessolveRes=} [properties] Properties to set
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
     * @memberof DessolveRes
     * @instance
     */
    DessolveRes.prototype.status = 0;

    /**
     * Creates a new DessolveRes instance using the specified properties.
     * @function create
     * @memberof DessolveRes
     * @static
     * @param {IDessolveRes=} [properties] Properties to set
     * @returns {DessolveRes} DessolveRes instance
     */
    DessolveRes.create = function create(properties) {
        return new DessolveRes(properties);
    };

    /**
     * Encodes the specified DessolveRes message. Does not implicitly {@link DessolveRes.verify|verify} messages.
     * @function encode
     * @memberof DessolveRes
     * @static
     * @param {IDessolveRes} message DessolveRes message or plain object to encode
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
     * Encodes the specified DessolveRes message, length delimited. Does not implicitly {@link DessolveRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DessolveRes
     * @static
     * @param {IDessolveRes} message DessolveRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DessolveRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DessolveRes message from the specified reader or buffer.
     * @function decode
     * @memberof DessolveRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DessolveRes} DessolveRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DessolveRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DessolveRes();
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
     * @memberof DessolveRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DessolveRes} DessolveRes
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
     * @memberof DessolveRes
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
     * @memberof DessolveRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DessolveRes} DessolveRes
     */
    DessolveRes.fromObject = function fromObject(object) {
        if (object instanceof $root.DessolveRes)
            return object;
        var message = new $root.DessolveRes();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a DessolveRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DessolveRes
     * @static
     * @param {DessolveRes} message DessolveRes
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
     * @memberof DessolveRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DessolveRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DessolveRes;
})();

$root.GetCreateStatusReq = (function() {

    /**
     * Properties of a GetCreateStatusReq.
     * @exports IGetCreateStatusReq
     * @interface IGetCreateStatusReq
     */

    /**
     * Constructs a new GetCreateStatusReq.
     * @exports GetCreateStatusReq
     * @classdesc Represents a GetCreateStatusReq.
     * @implements IGetCreateStatusReq
     * @constructor
     * @param {IGetCreateStatusReq=} [properties] Properties to set
     */
    function GetCreateStatusReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new GetCreateStatusReq instance using the specified properties.
     * @function create
     * @memberof GetCreateStatusReq
     * @static
     * @param {IGetCreateStatusReq=} [properties] Properties to set
     * @returns {GetCreateStatusReq} GetCreateStatusReq instance
     */
    GetCreateStatusReq.create = function create(properties) {
        return new GetCreateStatusReq(properties);
    };

    /**
     * Encodes the specified GetCreateStatusReq message. Does not implicitly {@link GetCreateStatusReq.verify|verify} messages.
     * @function encode
     * @memberof GetCreateStatusReq
     * @static
     * @param {IGetCreateStatusReq} message GetCreateStatusReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCreateStatusReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified GetCreateStatusReq message, length delimited. Does not implicitly {@link GetCreateStatusReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetCreateStatusReq
     * @static
     * @param {IGetCreateStatusReq} message GetCreateStatusReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCreateStatusReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetCreateStatusReq message from the specified reader or buffer.
     * @function decode
     * @memberof GetCreateStatusReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetCreateStatusReq} GetCreateStatusReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCreateStatusReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetCreateStatusReq();
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
     * Decodes a GetCreateStatusReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetCreateStatusReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetCreateStatusReq} GetCreateStatusReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCreateStatusReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetCreateStatusReq message.
     * @function verify
     * @memberof GetCreateStatusReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetCreateStatusReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a GetCreateStatusReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetCreateStatusReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetCreateStatusReq} GetCreateStatusReq
     */
    GetCreateStatusReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GetCreateStatusReq)
            return object;
        return new $root.GetCreateStatusReq();
    };

    /**
     * Creates a plain object from a GetCreateStatusReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetCreateStatusReq
     * @static
     * @param {GetCreateStatusReq} message GetCreateStatusReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetCreateStatusReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this GetCreateStatusReq to JSON.
     * @function toJSON
     * @memberof GetCreateStatusReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetCreateStatusReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetCreateStatusReq;
})();

$root.GetCreateStatusRes = (function() {

    /**
     * Properties of a GetCreateStatusRes.
     * @exports IGetCreateStatusRes
     * @interface IGetCreateStatusRes
     * @property {number} status GetCreateStatusRes status
     */

    /**
     * Constructs a new GetCreateStatusRes.
     * @exports GetCreateStatusRes
     * @classdesc Represents a GetCreateStatusRes.
     * @implements IGetCreateStatusRes
     * @constructor
     * @param {IGetCreateStatusRes=} [properties] Properties to set
     */
    function GetCreateStatusRes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetCreateStatusRes status.
     * @member {number} status
     * @memberof GetCreateStatusRes
     * @instance
     */
    GetCreateStatusRes.prototype.status = 0;

    /**
     * Creates a new GetCreateStatusRes instance using the specified properties.
     * @function create
     * @memberof GetCreateStatusRes
     * @static
     * @param {IGetCreateStatusRes=} [properties] Properties to set
     * @returns {GetCreateStatusRes} GetCreateStatusRes instance
     */
    GetCreateStatusRes.create = function create(properties) {
        return new GetCreateStatusRes(properties);
    };

    /**
     * Encodes the specified GetCreateStatusRes message. Does not implicitly {@link GetCreateStatusRes.verify|verify} messages.
     * @function encode
     * @memberof GetCreateStatusRes
     * @static
     * @param {IGetCreateStatusRes} message GetCreateStatusRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCreateStatusRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified GetCreateStatusRes message, length delimited. Does not implicitly {@link GetCreateStatusRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetCreateStatusRes
     * @static
     * @param {IGetCreateStatusRes} message GetCreateStatusRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCreateStatusRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetCreateStatusRes message from the specified reader or buffer.
     * @function decode
     * @memberof GetCreateStatusRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetCreateStatusRes} GetCreateStatusRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCreateStatusRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetCreateStatusRes();
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
     * Decodes a GetCreateStatusRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetCreateStatusRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetCreateStatusRes} GetCreateStatusRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCreateStatusRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetCreateStatusRes message.
     * @function verify
     * @memberof GetCreateStatusRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetCreateStatusRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.status))
            return "status: integer expected";
        return null;
    };

    /**
     * Creates a GetCreateStatusRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetCreateStatusRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetCreateStatusRes} GetCreateStatusRes
     */
    GetCreateStatusRes.fromObject = function fromObject(object) {
        if (object instanceof $root.GetCreateStatusRes)
            return object;
        var message = new $root.GetCreateStatusRes();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a GetCreateStatusRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetCreateStatusRes
     * @static
     * @param {GetCreateStatusRes} message GetCreateStatusRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetCreateStatusRes.toObject = function toObject(message, options) {
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
     * Converts this GetCreateStatusRes to JSON.
     * @function toJSON
     * @memberof GetCreateStatusRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetCreateStatusRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetCreateStatusRes;
})();

$root.BackRoomReq = (function() {

    /**
     * Properties of a BackRoomReq.
     * @exports IBackRoomReq
     * @interface IBackRoomReq
     */

    /**
     * Constructs a new BackRoomReq.
     * @exports BackRoomReq
     * @classdesc Represents a BackRoomReq.
     * @implements IBackRoomReq
     * @constructor
     * @param {IBackRoomReq=} [properties] Properties to set
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
     * @memberof BackRoomReq
     * @static
     * @param {IBackRoomReq=} [properties] Properties to set
     * @returns {BackRoomReq} BackRoomReq instance
     */
    BackRoomReq.create = function create(properties) {
        return new BackRoomReq(properties);
    };

    /**
     * Encodes the specified BackRoomReq message. Does not implicitly {@link BackRoomReq.verify|verify} messages.
     * @function encode
     * @memberof BackRoomReq
     * @static
     * @param {IBackRoomReq} message BackRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BackRoomReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified BackRoomReq message, length delimited. Does not implicitly {@link BackRoomReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BackRoomReq
     * @static
     * @param {IBackRoomReq} message BackRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BackRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BackRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof BackRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BackRoomReq} BackRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BackRoomReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BackRoomReq();
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
     * @memberof BackRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BackRoomReq} BackRoomReq
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
     * @memberof BackRoomReq
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
     * @memberof BackRoomReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BackRoomReq} BackRoomReq
     */
    BackRoomReq.fromObject = function fromObject(object) {
        if (object instanceof $root.BackRoomReq)
            return object;
        return new $root.BackRoomReq();
    };

    /**
     * Creates a plain object from a BackRoomReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BackRoomReq
     * @static
     * @param {BackRoomReq} message BackRoomReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BackRoomReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this BackRoomReq to JSON.
     * @function toJSON
     * @memberof BackRoomReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BackRoomReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BackRoomReq;
})();

$root.BackRoomRes = (function() {

    /**
     * Properties of a BackRoomRes.
     * @exports IBackRoomRes
     * @interface IBackRoomRes
     * @property {number} status BackRoomRes status
     */

    /**
     * Constructs a new BackRoomRes.
     * @exports BackRoomRes
     * @classdesc Represents a BackRoomRes.
     * @implements IBackRoomRes
     * @constructor
     * @param {IBackRoomRes=} [properties] Properties to set
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
     * @memberof BackRoomRes
     * @instance
     */
    BackRoomRes.prototype.status = 0;

    /**
     * Creates a new BackRoomRes instance using the specified properties.
     * @function create
     * @memberof BackRoomRes
     * @static
     * @param {IBackRoomRes=} [properties] Properties to set
     * @returns {BackRoomRes} BackRoomRes instance
     */
    BackRoomRes.create = function create(properties) {
        return new BackRoomRes(properties);
    };

    /**
     * Encodes the specified BackRoomRes message. Does not implicitly {@link BackRoomRes.verify|verify} messages.
     * @function encode
     * @memberof BackRoomRes
     * @static
     * @param {IBackRoomRes} message BackRoomRes message or plain object to encode
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
     * Encodes the specified BackRoomRes message, length delimited. Does not implicitly {@link BackRoomRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BackRoomRes
     * @static
     * @param {IBackRoomRes} message BackRoomRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BackRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BackRoomRes message from the specified reader or buffer.
     * @function decode
     * @memberof BackRoomRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BackRoomRes} BackRoomRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BackRoomRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BackRoomRes();
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
     * @memberof BackRoomRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BackRoomRes} BackRoomRes
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
     * @memberof BackRoomRes
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
     * @memberof BackRoomRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BackRoomRes} BackRoomRes
     */
    BackRoomRes.fromObject = function fromObject(object) {
        if (object instanceof $root.BackRoomRes)
            return object;
        var message = new $root.BackRoomRes();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a BackRoomRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BackRoomRes
     * @static
     * @param {BackRoomRes} message BackRoomRes
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
     * @memberof BackRoomRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BackRoomRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BackRoomRes;
})();

$root.UserOffLine = (function() {

    /**
     * Properties of a UserOffLine.
     * @exports IUserOffLine
     * @interface IUserOffLine
     * @property {IUserArrived} userinfo UserOffLine userinfo
     */

    /**
     * Constructs a new UserOffLine.
     * @exports UserOffLine
     * @classdesc Represents a UserOffLine.
     * @implements IUserOffLine
     * @constructor
     * @param {IUserOffLine=} [properties] Properties to set
     */
    function UserOffLine(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserOffLine userinfo.
     * @member {IUserArrived} userinfo
     * @memberof UserOffLine
     * @instance
     */
    UserOffLine.prototype.userinfo = null;

    /**
     * Creates a new UserOffLine instance using the specified properties.
     * @function create
     * @memberof UserOffLine
     * @static
     * @param {IUserOffLine=} [properties] Properties to set
     * @returns {UserOffLine} UserOffLine instance
     */
    UserOffLine.create = function create(properties) {
        return new UserOffLine(properties);
    };

    /**
     * Encodes the specified UserOffLine message. Does not implicitly {@link UserOffLine.verify|verify} messages.
     * @function encode
     * @memberof UserOffLine
     * @static
     * @param {IUserOffLine} message UserOffLine message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserOffLine.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        $root.UserArrived.encode(message.userinfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified UserOffLine message, length delimited. Does not implicitly {@link UserOffLine.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserOffLine
     * @static
     * @param {IUserOffLine} message UserOffLine message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserOffLine.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserOffLine message from the specified reader or buffer.
     * @function decode
     * @memberof UserOffLine
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserOffLine} UserOffLine
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserOffLine.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserOffLine();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userinfo = $root.UserArrived.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("userinfo"))
            throw $util.ProtocolError("missing required 'userinfo'", { instance: message });
        return message;
    };

    /**
     * Decodes a UserOffLine message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserOffLine
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserOffLine} UserOffLine
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserOffLine.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserOffLine message.
     * @function verify
     * @memberof UserOffLine
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserOffLine.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        {
            var error = $root.UserArrived.verify(message.userinfo);
            if (error)
                return "userinfo." + error;
        }
        return null;
    };

    /**
     * Creates a UserOffLine message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserOffLine
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserOffLine} UserOffLine
     */
    UserOffLine.fromObject = function fromObject(object) {
        if (object instanceof $root.UserOffLine)
            return object;
        var message = new $root.UserOffLine();
        if (object.userinfo != null) {
            if (typeof object.userinfo !== "object")
                throw TypeError(".UserOffLine.userinfo: object expected");
            message.userinfo = $root.UserArrived.fromObject(object.userinfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a UserOffLine message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserOffLine
     * @static
     * @param {UserOffLine} message UserOffLine
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserOffLine.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.userinfo = null;
        if (message.userinfo != null && message.hasOwnProperty("userinfo"))
            object.userinfo = $root.UserArrived.toObject(message.userinfo, options);
        return object;
    };

    /**
     * Converts this UserOffLine to JSON.
     * @function toJSON
     * @memberof UserOffLine
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserOffLine.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserOffLine;
})();

$root.UserReconnectedReq = (function() {

    /**
     * Properties of a UserReconnectedReq.
     * @exports IUserReconnectedReq
     * @interface IUserReconnectedReq
     */

    /**
     * Constructs a new UserReconnectedReq.
     * @exports UserReconnectedReq
     * @classdesc Represents a UserReconnectedReq.
     * @implements IUserReconnectedReq
     * @constructor
     * @param {IUserReconnectedReq=} [properties] Properties to set
     */
    function UserReconnectedReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new UserReconnectedReq instance using the specified properties.
     * @function create
     * @memberof UserReconnectedReq
     * @static
     * @param {IUserReconnectedReq=} [properties] Properties to set
     * @returns {UserReconnectedReq} UserReconnectedReq instance
     */
    UserReconnectedReq.create = function create(properties) {
        return new UserReconnectedReq(properties);
    };

    /**
     * Encodes the specified UserReconnectedReq message. Does not implicitly {@link UserReconnectedReq.verify|verify} messages.
     * @function encode
     * @memberof UserReconnectedReq
     * @static
     * @param {IUserReconnectedReq} message UserReconnectedReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserReconnectedReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified UserReconnectedReq message, length delimited. Does not implicitly {@link UserReconnectedReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserReconnectedReq
     * @static
     * @param {IUserReconnectedReq} message UserReconnectedReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserReconnectedReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserReconnectedReq message from the specified reader or buffer.
     * @function decode
     * @memberof UserReconnectedReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserReconnectedReq} UserReconnectedReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserReconnectedReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserReconnectedReq();
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
     * Decodes a UserReconnectedReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserReconnectedReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserReconnectedReq} UserReconnectedReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserReconnectedReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserReconnectedReq message.
     * @function verify
     * @memberof UserReconnectedReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserReconnectedReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a UserReconnectedReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserReconnectedReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserReconnectedReq} UserReconnectedReq
     */
    UserReconnectedReq.fromObject = function fromObject(object) {
        if (object instanceof $root.UserReconnectedReq)
            return object;
        return new $root.UserReconnectedReq();
    };

    /**
     * Creates a plain object from a UserReconnectedReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserReconnectedReq
     * @static
     * @param {UserReconnectedReq} message UserReconnectedReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserReconnectedReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this UserReconnectedReq to JSON.
     * @function toJSON
     * @memberof UserReconnectedReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserReconnectedReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserReconnectedReq;
})();

$root.UserReconnectedRes = (function() {

    /**
     * Properties of a UserReconnectedRes.
     * @exports IUserReconnectedRes
     * @interface IUserReconnectedRes
     * @property {number} status UserReconnectedRes status
     */

    /**
     * Constructs a new UserReconnectedRes.
     * @exports UserReconnectedRes
     * @classdesc Represents a UserReconnectedRes.
     * @implements IUserReconnectedRes
     * @constructor
     * @param {IUserReconnectedRes=} [properties] Properties to set
     */
    function UserReconnectedRes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserReconnectedRes status.
     * @member {number} status
     * @memberof UserReconnectedRes
     * @instance
     */
    UserReconnectedRes.prototype.status = 0;

    /**
     * Creates a new UserReconnectedRes instance using the specified properties.
     * @function create
     * @memberof UserReconnectedRes
     * @static
     * @param {IUserReconnectedRes=} [properties] Properties to set
     * @returns {UserReconnectedRes} UserReconnectedRes instance
     */
    UserReconnectedRes.create = function create(properties) {
        return new UserReconnectedRes(properties);
    };

    /**
     * Encodes the specified UserReconnectedRes message. Does not implicitly {@link UserReconnectedRes.verify|verify} messages.
     * @function encode
     * @memberof UserReconnectedRes
     * @static
     * @param {IUserReconnectedRes} message UserReconnectedRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserReconnectedRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified UserReconnectedRes message, length delimited. Does not implicitly {@link UserReconnectedRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserReconnectedRes
     * @static
     * @param {IUserReconnectedRes} message UserReconnectedRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserReconnectedRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserReconnectedRes message from the specified reader or buffer.
     * @function decode
     * @memberof UserReconnectedRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserReconnectedRes} UserReconnectedRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserReconnectedRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserReconnectedRes();
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
     * Decodes a UserReconnectedRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserReconnectedRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserReconnectedRes} UserReconnectedRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserReconnectedRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserReconnectedRes message.
     * @function verify
     * @memberof UserReconnectedRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserReconnectedRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.status))
            return "status: integer expected";
        return null;
    };

    /**
     * Creates a UserReconnectedRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserReconnectedRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserReconnectedRes} UserReconnectedRes
     */
    UserReconnectedRes.fromObject = function fromObject(object) {
        if (object instanceof $root.UserReconnectedRes)
            return object;
        var message = new $root.UserReconnectedRes();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a UserReconnectedRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserReconnectedRes
     * @static
     * @param {UserReconnectedRes} message UserReconnectedRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserReconnectedRes.toObject = function toObject(message, options) {
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
     * Converts this UserReconnectedRes to JSON.
     * @function toJSON
     * @memberof UserReconnectedRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserReconnectedRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserReconnectedRes;
})();

$root.HeartBeatReq = (function() {

    /**
     * Properties of a HeartBeatReq.
     * @exports IHeartBeatReq
     * @interface IHeartBeatReq
     */

    /**
     * Constructs a new HeartBeatReq.
     * @exports HeartBeatReq
     * @classdesc Represents a HeartBeatReq.
     * @implements IHeartBeatReq
     * @constructor
     * @param {IHeartBeatReq=} [properties] Properties to set
     */
    function HeartBeatReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new HeartBeatReq instance using the specified properties.
     * @function create
     * @memberof HeartBeatReq
     * @static
     * @param {IHeartBeatReq=} [properties] Properties to set
     * @returns {HeartBeatReq} HeartBeatReq instance
     */
    HeartBeatReq.create = function create(properties) {
        return new HeartBeatReq(properties);
    };

    /**
     * Encodes the specified HeartBeatReq message. Does not implicitly {@link HeartBeatReq.verify|verify} messages.
     * @function encode
     * @memberof HeartBeatReq
     * @static
     * @param {IHeartBeatReq} message HeartBeatReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartBeatReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified HeartBeatReq message, length delimited. Does not implicitly {@link HeartBeatReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HeartBeatReq
     * @static
     * @param {IHeartBeatReq} message HeartBeatReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartBeatReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HeartBeatReq message from the specified reader or buffer.
     * @function decode
     * @memberof HeartBeatReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HeartBeatReq} HeartBeatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartBeatReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HeartBeatReq();
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
     * Decodes a HeartBeatReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HeartBeatReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HeartBeatReq} HeartBeatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartBeatReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HeartBeatReq message.
     * @function verify
     * @memberof HeartBeatReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HeartBeatReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a HeartBeatReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HeartBeatReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HeartBeatReq} HeartBeatReq
     */
    HeartBeatReq.fromObject = function fromObject(object) {
        if (object instanceof $root.HeartBeatReq)
            return object;
        return new $root.HeartBeatReq();
    };

    /**
     * Creates a plain object from a HeartBeatReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HeartBeatReq
     * @static
     * @param {HeartBeatReq} message HeartBeatReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HeartBeatReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this HeartBeatReq to JSON.
     * @function toJSON
     * @memberof HeartBeatReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HeartBeatReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return HeartBeatReq;
})();

$root.HeartBeatRes = (function() {

    /**
     * Properties of a HeartBeatRes.
     * @exports IHeartBeatRes
     * @interface IHeartBeatRes
     * @property {number|null} [status] HeartBeatRes status
     */

    /**
     * Constructs a new HeartBeatRes.
     * @exports HeartBeatRes
     * @classdesc Represents a HeartBeatRes.
     * @implements IHeartBeatRes
     * @constructor
     * @param {IHeartBeatRes=} [properties] Properties to set
     */
    function HeartBeatRes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HeartBeatRes status.
     * @member {number} status
     * @memberof HeartBeatRes
     * @instance
     */
    HeartBeatRes.prototype.status = 0;

    /**
     * Creates a new HeartBeatRes instance using the specified properties.
     * @function create
     * @memberof HeartBeatRes
     * @static
     * @param {IHeartBeatRes=} [properties] Properties to set
     * @returns {HeartBeatRes} HeartBeatRes instance
     */
    HeartBeatRes.create = function create(properties) {
        return new HeartBeatRes(properties);
    };

    /**
     * Encodes the specified HeartBeatRes message. Does not implicitly {@link HeartBeatRes.verify|verify} messages.
     * @function encode
     * @memberof HeartBeatRes
     * @static
     * @param {IHeartBeatRes} message HeartBeatRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartBeatRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && message.hasOwnProperty("status"))
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified HeartBeatRes message, length delimited. Does not implicitly {@link HeartBeatRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HeartBeatRes
     * @static
     * @param {IHeartBeatRes} message HeartBeatRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartBeatRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HeartBeatRes message from the specified reader or buffer.
     * @function decode
     * @memberof HeartBeatRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HeartBeatRes} HeartBeatRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartBeatRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HeartBeatRes();
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
        return message;
    };

    /**
     * Decodes a HeartBeatRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HeartBeatRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HeartBeatRes} HeartBeatRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartBeatRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HeartBeatRes message.
     * @function verify
     * @memberof HeartBeatRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HeartBeatRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a HeartBeatRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HeartBeatRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HeartBeatRes} HeartBeatRes
     */
    HeartBeatRes.fromObject = function fromObject(object) {
        if (object instanceof $root.HeartBeatRes)
            return object;
        var message = new $root.HeartBeatRes();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a HeartBeatRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HeartBeatRes
     * @static
     * @param {HeartBeatRes} message HeartBeatRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HeartBeatRes.toObject = function toObject(message, options) {
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
     * Converts this HeartBeatRes to JSON.
     * @function toJSON
     * @memberof HeartBeatRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HeartBeatRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return HeartBeatRes;
})();

$root.UserReadyReq = (function() {

    /**
     * Properties of a UserReadyReq.
     * @exports IUserReadyReq
     * @interface IUserReadyReq
     * @property {number} readystate UserReadyReq readystate
     */

    /**
     * Constructs a new UserReadyReq.
     * @exports UserReadyReq
     * @classdesc Represents a UserReadyReq.
     * @implements IUserReadyReq
     * @constructor
     * @param {IUserReadyReq=} [properties] Properties to set
     */
    function UserReadyReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserReadyReq readystate.
     * @member {number} readystate
     * @memberof UserReadyReq
     * @instance
     */
    UserReadyReq.prototype.readystate = 0;

    /**
     * Creates a new UserReadyReq instance using the specified properties.
     * @function create
     * @memberof UserReadyReq
     * @static
     * @param {IUserReadyReq=} [properties] Properties to set
     * @returns {UserReadyReq} UserReadyReq instance
     */
    UserReadyReq.create = function create(properties) {
        return new UserReadyReq(properties);
    };

    /**
     * Encodes the specified UserReadyReq message. Does not implicitly {@link UserReadyReq.verify|verify} messages.
     * @function encode
     * @memberof UserReadyReq
     * @static
     * @param {IUserReadyReq} message UserReadyReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserReadyReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.readystate);
        return writer;
    };

    /**
     * Encodes the specified UserReadyReq message, length delimited. Does not implicitly {@link UserReadyReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserReadyReq
     * @static
     * @param {IUserReadyReq} message UserReadyReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserReadyReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserReadyReq message from the specified reader or buffer.
     * @function decode
     * @memberof UserReadyReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserReadyReq} UserReadyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserReadyReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserReadyReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.readystate = reader.sint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("readystate"))
            throw $util.ProtocolError("missing required 'readystate'", { instance: message });
        return message;
    };

    /**
     * Decodes a UserReadyReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserReadyReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserReadyReq} UserReadyReq
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
     * @memberof UserReadyReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserReadyReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.readystate))
            return "readystate: integer expected";
        return null;
    };

    /**
     * Creates a UserReadyReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserReadyReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserReadyReq} UserReadyReq
     */
    UserReadyReq.fromObject = function fromObject(object) {
        if (object instanceof $root.UserReadyReq)
            return object;
        var message = new $root.UserReadyReq();
        if (object.readystate != null)
            message.readystate = object.readystate | 0;
        return message;
    };

    /**
     * Creates a plain object from a UserReadyReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserReadyReq
     * @static
     * @param {UserReadyReq} message UserReadyReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserReadyReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.readystate = 0;
        if (message.readystate != null && message.hasOwnProperty("readystate"))
            object.readystate = message.readystate;
        return object;
    };

    /**
     * Converts this UserReadyReq to JSON.
     * @function toJSON
     * @memberof UserReadyReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserReadyReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserReadyReq;
})();

$root.UserReadyRes = (function() {

    /**
     * Properties of a UserReadyRes.
     * @exports IUserReadyRes
     * @interface IUserReadyRes
     * @property {number} status UserReadyRes status
     * @property {number|null} [seatid] UserReadyRes seatid
     * @property {string|null} [brandid] UserReadyRes brandid
     * @property {string|null} [numberid] UserReadyRes numberid
     * @property {number|null} [userstate] UserReadyRes userstate
     */

    /**
     * Constructs a new UserReadyRes.
     * @exports UserReadyRes
     * @classdesc Represents a UserReadyRes.
     * @implements IUserReadyRes
     * @constructor
     * @param {IUserReadyRes=} [properties] Properties to set
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
     * @memberof UserReadyRes
     * @instance
     */
    UserReadyRes.prototype.status = 0;

    /**
     * UserReadyRes seatid.
     * @member {number} seatid
     * @memberof UserReadyRes
     * @instance
     */
    UserReadyRes.prototype.seatid = 0;

    /**
     * UserReadyRes brandid.
     * @member {string} brandid
     * @memberof UserReadyRes
     * @instance
     */
    UserReadyRes.prototype.brandid = "";

    /**
     * UserReadyRes numberid.
     * @member {string} numberid
     * @memberof UserReadyRes
     * @instance
     */
    UserReadyRes.prototype.numberid = "";

    /**
     * UserReadyRes userstate.
     * @member {number} userstate
     * @memberof UserReadyRes
     * @instance
     */
    UserReadyRes.prototype.userstate = 0;

    /**
     * Creates a new UserReadyRes instance using the specified properties.
     * @function create
     * @memberof UserReadyRes
     * @static
     * @param {IUserReadyRes=} [properties] Properties to set
     * @returns {UserReadyRes} UserReadyRes instance
     */
    UserReadyRes.create = function create(properties) {
        return new UserReadyRes(properties);
    };

    /**
     * Encodes the specified UserReadyRes message. Does not implicitly {@link UserReadyRes.verify|verify} messages.
     * @function encode
     * @memberof UserReadyRes
     * @static
     * @param {IUserReadyRes} message UserReadyRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserReadyRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        if (message.seatid != null && message.hasOwnProperty("seatid"))
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.seatid);
        if (message.brandid != null && message.hasOwnProperty("brandid"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.brandid);
        if (message.numberid != null && message.hasOwnProperty("numberid"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.numberid);
        if (message.userstate != null && message.hasOwnProperty("userstate"))
            writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.userstate);
        return writer;
    };

    /**
     * Encodes the specified UserReadyRes message, length delimited. Does not implicitly {@link UserReadyRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserReadyRes
     * @static
     * @param {IUserReadyRes} message UserReadyRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserReadyRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserReadyRes message from the specified reader or buffer.
     * @function decode
     * @memberof UserReadyRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserReadyRes} UserReadyRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserReadyRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserReadyRes();
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
                message.brandid = reader.string();
                break;
            case 4:
                message.numberid = reader.string();
                break;
            case 5:
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
     * @memberof UserReadyRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserReadyRes} UserReadyRes
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
     * @memberof UserReadyRes
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
        if (message.brandid != null && message.hasOwnProperty("brandid"))
            if (!$util.isString(message.brandid))
                return "brandid: string expected";
        if (message.numberid != null && message.hasOwnProperty("numberid"))
            if (!$util.isString(message.numberid))
                return "numberid: string expected";
        if (message.userstate != null && message.hasOwnProperty("userstate"))
            if (!$util.isInteger(message.userstate))
                return "userstate: integer expected";
        return null;
    };

    /**
     * Creates a UserReadyRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserReadyRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserReadyRes} UserReadyRes
     */
    UserReadyRes.fromObject = function fromObject(object) {
        if (object instanceof $root.UserReadyRes)
            return object;
        var message = new $root.UserReadyRes();
        if (object.status != null)
            message.status = object.status | 0;
        if (object.seatid != null)
            message.seatid = object.seatid | 0;
        if (object.brandid != null)
            message.brandid = String(object.brandid);
        if (object.numberid != null)
            message.numberid = String(object.numberid);
        if (object.userstate != null)
            message.userstate = object.userstate | 0;
        return message;
    };

    /**
     * Creates a plain object from a UserReadyRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserReadyRes
     * @static
     * @param {UserReadyRes} message UserReadyRes
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
            object.brandid = "";
            object.numberid = "";
            object.userstate = 0;
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.seatid != null && message.hasOwnProperty("seatid"))
            object.seatid = message.seatid;
        if (message.brandid != null && message.hasOwnProperty("brandid"))
            object.brandid = message.brandid;
        if (message.numberid != null && message.hasOwnProperty("numberid"))
            object.numberid = message.numberid;
        if (message.userstate != null && message.hasOwnProperty("userstate"))
            object.userstate = message.userstate;
        return object;
    };

    /**
     * Converts this UserReadyRes to JSON.
     * @function toJSON
     * @memberof UserReadyRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserReadyRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserReadyRes;
})();

$root.GameStart = (function() {

    /**
     * Properties of a GameStart.
     * @exports IGameStart
     * @interface IGameStart
     * @property {number} status GameStart status
     */

    /**
     * Constructs a new GameStart.
     * @exports GameStart
     * @classdesc Represents a GameStart.
     * @implements IGameStart
     * @constructor
     * @param {IGameStart=} [properties] Properties to set
     */
    function GameStart(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameStart status.
     * @member {number} status
     * @memberof GameStart
     * @instance
     */
    GameStart.prototype.status = 0;

    /**
     * Creates a new GameStart instance using the specified properties.
     * @function create
     * @memberof GameStart
     * @static
     * @param {IGameStart=} [properties] Properties to set
     * @returns {GameStart} GameStart instance
     */
    GameStart.create = function create(properties) {
        return new GameStart(properties);
    };

    /**
     * Encodes the specified GameStart message. Does not implicitly {@link GameStart.verify|verify} messages.
     * @function encode
     * @memberof GameStart
     * @static
     * @param {IGameStart} message GameStart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameStart.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified GameStart message, length delimited. Does not implicitly {@link GameStart.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameStart
     * @static
     * @param {IGameStart} message GameStart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameStart.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameStart message from the specified reader or buffer.
     * @function decode
     * @memberof GameStart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameStart} GameStart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameStart.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameStart();
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
     * Decodes a GameStart message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameStart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameStart} GameStart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameStart.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GameStart message.
     * @function verify
     * @memberof GameStart
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GameStart.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.status))
            return "status: integer expected";
        return null;
    };

    /**
     * Creates a GameStart message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameStart
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameStart} GameStart
     */
    GameStart.fromObject = function fromObject(object) {
        if (object instanceof $root.GameStart)
            return object;
        var message = new $root.GameStart();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a GameStart message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameStart
     * @static
     * @param {GameStart} message GameStart
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameStart.toObject = function toObject(message, options) {
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
     * Converts this GameStart to JSON.
     * @function toJSON
     * @memberof GameStart
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameStart.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GameStart;
})();

$root.UdpTest = (function() {

    /**
     * Properties of an UdpTest.
     * @exports IUdpTest
     * @interface IUdpTest
     * @property {string} content UdpTest content
     */

    /**
     * Constructs a new UdpTest.
     * @exports UdpTest
     * @classdesc Represents an UdpTest.
     * @implements IUdpTest
     * @constructor
     * @param {IUdpTest=} [properties] Properties to set
     */
    function UdpTest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UdpTest content.
     * @member {string} content
     * @memberof UdpTest
     * @instance
     */
    UdpTest.prototype.content = "";

    /**
     * Creates a new UdpTest instance using the specified properties.
     * @function create
     * @memberof UdpTest
     * @static
     * @param {IUdpTest=} [properties] Properties to set
     * @returns {UdpTest} UdpTest instance
     */
    UdpTest.create = function create(properties) {
        return new UdpTest(properties);
    };

    /**
     * Encodes the specified UdpTest message. Does not implicitly {@link UdpTest.verify|verify} messages.
     * @function encode
     * @memberof UdpTest
     * @static
     * @param {IUdpTest} message UdpTest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UdpTest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
        return writer;
    };

    /**
     * Encodes the specified UdpTest message, length delimited. Does not implicitly {@link UdpTest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UdpTest
     * @static
     * @param {IUdpTest} message UdpTest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UdpTest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UdpTest message from the specified reader or buffer.
     * @function decode
     * @memberof UdpTest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UdpTest} UdpTest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UdpTest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UdpTest();
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
     * Decodes an UdpTest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UdpTest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UdpTest} UdpTest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UdpTest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UdpTest message.
     * @function verify
     * @memberof UdpTest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UdpTest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.content))
            return "content: string expected";
        return null;
    };

    /**
     * Creates an UdpTest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UdpTest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UdpTest} UdpTest
     */
    UdpTest.fromObject = function fromObject(object) {
        if (object instanceof $root.UdpTest)
            return object;
        var message = new $root.UdpTest();
        if (object.content != null)
            message.content = String(object.content);
        return message;
    };

    /**
     * Creates a plain object from an UdpTest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UdpTest
     * @static
     * @param {UdpTest} message UdpTest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UdpTest.toObject = function toObject(message, options) {
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
     * Converts this UdpTest to JSON.
     * @function toJSON
     * @memberof UdpTest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UdpTest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UdpTest;
})();

$root.LoginLogicReq = (function() {

    /**
     * Properties of a LoginLogicReq.
     * @exports ILoginLogicReq
     * @interface ILoginLogicReq
     */

    /**
     * Constructs a new LoginLogicReq.
     * @exports LoginLogicReq
     * @classdesc Represents a LoginLogicReq.
     * @implements ILoginLogicReq
     * @constructor
     * @param {ILoginLogicReq=} [properties] Properties to set
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
     * @memberof LoginLogicReq
     * @static
     * @param {ILoginLogicReq=} [properties] Properties to set
     * @returns {LoginLogicReq} LoginLogicReq instance
     */
    LoginLogicReq.create = function create(properties) {
        return new LoginLogicReq(properties);
    };

    /**
     * Encodes the specified LoginLogicReq message. Does not implicitly {@link LoginLogicReq.verify|verify} messages.
     * @function encode
     * @memberof LoginLogicReq
     * @static
     * @param {ILoginLogicReq} message LoginLogicReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginLogicReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified LoginLogicReq message, length delimited. Does not implicitly {@link LoginLogicReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginLogicReq
     * @static
     * @param {ILoginLogicReq} message LoginLogicReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginLogicReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginLogicReq message from the specified reader or buffer.
     * @function decode
     * @memberof LoginLogicReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginLogicReq} LoginLogicReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginLogicReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginLogicReq();
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
     * @memberof LoginLogicReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginLogicReq} LoginLogicReq
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
     * @memberof LoginLogicReq
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
     * @memberof LoginLogicReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginLogicReq} LoginLogicReq
     */
    LoginLogicReq.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginLogicReq)
            return object;
        return new $root.LoginLogicReq();
    };

    /**
     * Creates a plain object from a LoginLogicReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginLogicReq
     * @static
     * @param {LoginLogicReq} message LoginLogicReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginLogicReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this LoginLogicReq to JSON.
     * @function toJSON
     * @memberof LoginLogicReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginLogicReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginLogicReq;
})();

$root.OptionEvent = (function() {

    /**
     * Properties of an OptionEvent.
     * @exports IOptionEvent
     * @interface IOptionEvent
     * @property {number} seatid OptionEvent seatid
     * @property {number} opttype OptionEvent opttype
     * @property {number|null} [x] OptionEvent x
     * @property {number|null} [y] OptionEvent y
     */

    /**
     * Constructs a new OptionEvent.
     * @exports OptionEvent
     * @classdesc Represents an OptionEvent.
     * @implements IOptionEvent
     * @constructor
     * @param {IOptionEvent=} [properties] Properties to set
     */
    function OptionEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OptionEvent seatid.
     * @member {number} seatid
     * @memberof OptionEvent
     * @instance
     */
    OptionEvent.prototype.seatid = 0;

    /**
     * OptionEvent opttype.
     * @member {number} opttype
     * @memberof OptionEvent
     * @instance
     */
    OptionEvent.prototype.opttype = 0;

    /**
     * OptionEvent x.
     * @member {number} x
     * @memberof OptionEvent
     * @instance
     */
    OptionEvent.prototype.x = 0;

    /**
     * OptionEvent y.
     * @member {number} y
     * @memberof OptionEvent
     * @instance
     */
    OptionEvent.prototype.y = 0;

    /**
     * Creates a new OptionEvent instance using the specified properties.
     * @function create
     * @memberof OptionEvent
     * @static
     * @param {IOptionEvent=} [properties] Properties to set
     * @returns {OptionEvent} OptionEvent instance
     */
    OptionEvent.create = function create(properties) {
        return new OptionEvent(properties);
    };

    /**
     * Encodes the specified OptionEvent message. Does not implicitly {@link OptionEvent.verify|verify} messages.
     * @function encode
     * @memberof OptionEvent
     * @static
     * @param {IOptionEvent} message OptionEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OptionEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.seatid);
        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.opttype);
        if (message.x != null && message.hasOwnProperty("x"))
            writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.x);
        if (message.y != null && message.hasOwnProperty("y"))
            writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.y);
        return writer;
    };

    /**
     * Encodes the specified OptionEvent message, length delimited. Does not implicitly {@link OptionEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OptionEvent
     * @static
     * @param {IOptionEvent} message OptionEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OptionEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OptionEvent message from the specified reader or buffer.
     * @function decode
     * @memberof OptionEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OptionEvent} OptionEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OptionEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OptionEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.seatid = reader.sint32();
                break;
            case 2:
                message.opttype = reader.sint32();
                break;
            case 3:
                message.x = reader.sint32();
                break;
            case 4:
                message.y = reader.sint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("seatid"))
            throw $util.ProtocolError("missing required 'seatid'", { instance: message });
        if (!message.hasOwnProperty("opttype"))
            throw $util.ProtocolError("missing required 'opttype'", { instance: message });
        return message;
    };

    /**
     * Decodes an OptionEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OptionEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OptionEvent} OptionEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OptionEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OptionEvent message.
     * @function verify
     * @memberof OptionEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OptionEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.seatid))
            return "seatid: integer expected";
        if (!$util.isInteger(message.opttype))
            return "opttype: integer expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (!$util.isInteger(message.x))
                return "x: integer expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (!$util.isInteger(message.y))
                return "y: integer expected";
        return null;
    };

    /**
     * Creates an OptionEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OptionEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OptionEvent} OptionEvent
     */
    OptionEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.OptionEvent)
            return object;
        var message = new $root.OptionEvent();
        if (object.seatid != null)
            message.seatid = object.seatid | 0;
        if (object.opttype != null)
            message.opttype = object.opttype | 0;
        if (object.x != null)
            message.x = object.x | 0;
        if (object.y != null)
            message.y = object.y | 0;
        return message;
    };

    /**
     * Creates a plain object from an OptionEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OptionEvent
     * @static
     * @param {OptionEvent} message OptionEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OptionEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.seatid = 0;
            object.opttype = 0;
            object.x = 0;
            object.y = 0;
        }
        if (message.seatid != null && message.hasOwnProperty("seatid"))
            object.seatid = message.seatid;
        if (message.opttype != null && message.hasOwnProperty("opttype"))
            object.opttype = message.opttype;
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = message.y;
        return object;
    };

    /**
     * Converts this OptionEvent to JSON.
     * @function toJSON
     * @memberof OptionEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OptionEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OptionEvent;
})();

$root.FrameOpts = (function() {

    /**
     * Properties of a FrameOpts.
     * @exports IFrameOpts
     * @interface IFrameOpts
     * @property {number} frameid FrameOpts frameid
     * @property {Array.<IOptionEvent>|null} [opts] FrameOpts opts
     */

    /**
     * Constructs a new FrameOpts.
     * @exports FrameOpts
     * @classdesc Represents a FrameOpts.
     * @implements IFrameOpts
     * @constructor
     * @param {IFrameOpts=} [properties] Properties to set
     */
    function FrameOpts(properties) {
        this.opts = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FrameOpts frameid.
     * @member {number} frameid
     * @memberof FrameOpts
     * @instance
     */
    FrameOpts.prototype.frameid = 0;

    /**
     * FrameOpts opts.
     * @member {Array.<IOptionEvent>} opts
     * @memberof FrameOpts
     * @instance
     */
    FrameOpts.prototype.opts = $util.emptyArray;

    /**
     * Creates a new FrameOpts instance using the specified properties.
     * @function create
     * @memberof FrameOpts
     * @static
     * @param {IFrameOpts=} [properties] Properties to set
     * @returns {FrameOpts} FrameOpts instance
     */
    FrameOpts.create = function create(properties) {
        return new FrameOpts(properties);
    };

    /**
     * Encodes the specified FrameOpts message. Does not implicitly {@link FrameOpts.verify|verify} messages.
     * @function encode
     * @memberof FrameOpts
     * @static
     * @param {IFrameOpts} message FrameOpts message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameOpts.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.frameid);
        if (message.opts != null && message.opts.length)
            for (var i = 0; i < message.opts.length; ++i)
                $root.OptionEvent.encode(message.opts[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified FrameOpts message, length delimited. Does not implicitly {@link FrameOpts.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FrameOpts
     * @static
     * @param {IFrameOpts} message FrameOpts message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameOpts.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FrameOpts message from the specified reader or buffer.
     * @function decode
     * @memberof FrameOpts
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FrameOpts} FrameOpts
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameOpts.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FrameOpts();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.frameid = reader.sint32();
                break;
            case 2:
                if (!(message.opts && message.opts.length))
                    message.opts = [];
                message.opts.push($root.OptionEvent.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("frameid"))
            throw $util.ProtocolError("missing required 'frameid'", { instance: message });
        return message;
    };

    /**
     * Decodes a FrameOpts message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FrameOpts
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FrameOpts} FrameOpts
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameOpts.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FrameOpts message.
     * @function verify
     * @memberof FrameOpts
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FrameOpts.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.frameid))
            return "frameid: integer expected";
        if (message.opts != null && message.hasOwnProperty("opts")) {
            if (!Array.isArray(message.opts))
                return "opts: array expected";
            for (var i = 0; i < message.opts.length; ++i) {
                var error = $root.OptionEvent.verify(message.opts[i]);
                if (error)
                    return "opts." + error;
            }
        }
        return null;
    };

    /**
     * Creates a FrameOpts message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FrameOpts
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FrameOpts} FrameOpts
     */
    FrameOpts.fromObject = function fromObject(object) {
        if (object instanceof $root.FrameOpts)
            return object;
        var message = new $root.FrameOpts();
        if (object.frameid != null)
            message.frameid = object.frameid | 0;
        if (object.opts) {
            if (!Array.isArray(object.opts))
                throw TypeError(".FrameOpts.opts: array expected");
            message.opts = [];
            for (var i = 0; i < object.opts.length; ++i) {
                if (typeof object.opts[i] !== "object")
                    throw TypeError(".FrameOpts.opts: object expected");
                message.opts[i] = $root.OptionEvent.fromObject(object.opts[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a FrameOpts message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FrameOpts
     * @static
     * @param {FrameOpts} message FrameOpts
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FrameOpts.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.opts = [];
        if (options.defaults)
            object.frameid = 0;
        if (message.frameid != null && message.hasOwnProperty("frameid"))
            object.frameid = message.frameid;
        if (message.opts && message.opts.length) {
            object.opts = [];
            for (var j = 0; j < message.opts.length; ++j)
                object.opts[j] = $root.OptionEvent.toObject(message.opts[j], options);
        }
        return object;
    };

    /**
     * Converts this FrameOpts to JSON.
     * @function toJSON
     * @memberof FrameOpts
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FrameOpts.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FrameOpts;
})();

$root.LogicFrame = (function() {

    /**
     * Properties of a LogicFrame.
     * @exports ILogicFrame
     * @interface ILogicFrame
     * @property {number} frameid LogicFrame frameid
     * @property {Array.<IFrameOpts>|null} [unsyncframes] LogicFrame unsyncframes
     */

    /**
     * Constructs a new LogicFrame.
     * @exports LogicFrame
     * @classdesc Represents a LogicFrame.
     * @implements ILogicFrame
     * @constructor
     * @param {ILogicFrame=} [properties] Properties to set
     */
    function LogicFrame(properties) {
        this.unsyncframes = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LogicFrame frameid.
     * @member {number} frameid
     * @memberof LogicFrame
     * @instance
     */
    LogicFrame.prototype.frameid = 0;

    /**
     * LogicFrame unsyncframes.
     * @member {Array.<IFrameOpts>} unsyncframes
     * @memberof LogicFrame
     * @instance
     */
    LogicFrame.prototype.unsyncframes = $util.emptyArray;

    /**
     * Creates a new LogicFrame instance using the specified properties.
     * @function create
     * @memberof LogicFrame
     * @static
     * @param {ILogicFrame=} [properties] Properties to set
     * @returns {LogicFrame} LogicFrame instance
     */
    LogicFrame.create = function create(properties) {
        return new LogicFrame(properties);
    };

    /**
     * Encodes the specified LogicFrame message. Does not implicitly {@link LogicFrame.verify|verify} messages.
     * @function encode
     * @memberof LogicFrame
     * @static
     * @param {ILogicFrame} message LogicFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LogicFrame.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.frameid);
        if (message.unsyncframes != null && message.unsyncframes.length)
            for (var i = 0; i < message.unsyncframes.length; ++i)
                $root.FrameOpts.encode(message.unsyncframes[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified LogicFrame message, length delimited. Does not implicitly {@link LogicFrame.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LogicFrame
     * @static
     * @param {ILogicFrame} message LogicFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LogicFrame.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LogicFrame message from the specified reader or buffer.
     * @function decode
     * @memberof LogicFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LogicFrame} LogicFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LogicFrame.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LogicFrame();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.frameid = reader.sint32();
                break;
            case 2:
                if (!(message.unsyncframes && message.unsyncframes.length))
                    message.unsyncframes = [];
                message.unsyncframes.push($root.FrameOpts.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("frameid"))
            throw $util.ProtocolError("missing required 'frameid'", { instance: message });
        return message;
    };

    /**
     * Decodes a LogicFrame message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LogicFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LogicFrame} LogicFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LogicFrame.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LogicFrame message.
     * @function verify
     * @memberof LogicFrame
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LogicFrame.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.frameid))
            return "frameid: integer expected";
        if (message.unsyncframes != null && message.hasOwnProperty("unsyncframes")) {
            if (!Array.isArray(message.unsyncframes))
                return "unsyncframes: array expected";
            for (var i = 0; i < message.unsyncframes.length; ++i) {
                var error = $root.FrameOpts.verify(message.unsyncframes[i]);
                if (error)
                    return "unsyncframes." + error;
            }
        }
        return null;
    };

    /**
     * Creates a LogicFrame message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LogicFrame
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LogicFrame} LogicFrame
     */
    LogicFrame.fromObject = function fromObject(object) {
        if (object instanceof $root.LogicFrame)
            return object;
        var message = new $root.LogicFrame();
        if (object.frameid != null)
            message.frameid = object.frameid | 0;
        if (object.unsyncframes) {
            if (!Array.isArray(object.unsyncframes))
                throw TypeError(".LogicFrame.unsyncframes: array expected");
            message.unsyncframes = [];
            for (var i = 0; i < object.unsyncframes.length; ++i) {
                if (typeof object.unsyncframes[i] !== "object")
                    throw TypeError(".LogicFrame.unsyncframes: object expected");
                message.unsyncframes[i] = $root.FrameOpts.fromObject(object.unsyncframes[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a LogicFrame message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LogicFrame
     * @static
     * @param {LogicFrame} message LogicFrame
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LogicFrame.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.unsyncframes = [];
        if (options.defaults)
            object.frameid = 0;
        if (message.frameid != null && message.hasOwnProperty("frameid"))
            object.frameid = message.frameid;
        if (message.unsyncframes && message.unsyncframes.length) {
            object.unsyncframes = [];
            for (var j = 0; j < message.unsyncframes.length; ++j)
                object.unsyncframes[j] = $root.FrameOpts.toObject(message.unsyncframes[j], options);
        }
        return object;
    };

    /**
     * Converts this LogicFrame to JSON.
     * @function toJSON
     * @memberof LogicFrame
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LogicFrame.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LogicFrame;
})();

$root.NextFrameOpts = (function() {

    /**
     * Properties of a NextFrameOpts.
     * @exports INextFrameOpts
     * @interface INextFrameOpts
     * @property {number} frameid NextFrameOpts frameid
     * @property {string} roomid NextFrameOpts roomid
     * @property {number} seatid NextFrameOpts seatid
     * @property {Array.<IOptionEvent>|null} [opts] NextFrameOpts opts
     */

    /**
     * Constructs a new NextFrameOpts.
     * @exports NextFrameOpts
     * @classdesc Represents a NextFrameOpts.
     * @implements INextFrameOpts
     * @constructor
     * @param {INextFrameOpts=} [properties] Properties to set
     */
    function NextFrameOpts(properties) {
        this.opts = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NextFrameOpts frameid.
     * @member {number} frameid
     * @memberof NextFrameOpts
     * @instance
     */
    NextFrameOpts.prototype.frameid = 0;

    /**
     * NextFrameOpts roomid.
     * @member {string} roomid
     * @memberof NextFrameOpts
     * @instance
     */
    NextFrameOpts.prototype.roomid = "";

    /**
     * NextFrameOpts seatid.
     * @member {number} seatid
     * @memberof NextFrameOpts
     * @instance
     */
    NextFrameOpts.prototype.seatid = 0;

    /**
     * NextFrameOpts opts.
     * @member {Array.<IOptionEvent>} opts
     * @memberof NextFrameOpts
     * @instance
     */
    NextFrameOpts.prototype.opts = $util.emptyArray;

    /**
     * Creates a new NextFrameOpts instance using the specified properties.
     * @function create
     * @memberof NextFrameOpts
     * @static
     * @param {INextFrameOpts=} [properties] Properties to set
     * @returns {NextFrameOpts} NextFrameOpts instance
     */
    NextFrameOpts.create = function create(properties) {
        return new NextFrameOpts(properties);
    };

    /**
     * Encodes the specified NextFrameOpts message. Does not implicitly {@link NextFrameOpts.verify|verify} messages.
     * @function encode
     * @memberof NextFrameOpts
     * @static
     * @param {INextFrameOpts} message NextFrameOpts message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NextFrameOpts.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.frameid);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomid);
        writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.seatid);
        if (message.opts != null && message.opts.length)
            for (var i = 0; i < message.opts.length; ++i)
                $root.OptionEvent.encode(message.opts[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified NextFrameOpts message, length delimited. Does not implicitly {@link NextFrameOpts.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NextFrameOpts
     * @static
     * @param {INextFrameOpts} message NextFrameOpts message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NextFrameOpts.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NextFrameOpts message from the specified reader or buffer.
     * @function decode
     * @memberof NextFrameOpts
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NextFrameOpts} NextFrameOpts
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NextFrameOpts.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NextFrameOpts();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.frameid = reader.sint32();
                break;
            case 2:
                message.roomid = reader.string();
                break;
            case 3:
                message.seatid = reader.sint32();
                break;
            case 4:
                if (!(message.opts && message.opts.length))
                    message.opts = [];
                message.opts.push($root.OptionEvent.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("frameid"))
            throw $util.ProtocolError("missing required 'frameid'", { instance: message });
        if (!message.hasOwnProperty("roomid"))
            throw $util.ProtocolError("missing required 'roomid'", { instance: message });
        if (!message.hasOwnProperty("seatid"))
            throw $util.ProtocolError("missing required 'seatid'", { instance: message });
        return message;
    };

    /**
     * Decodes a NextFrameOpts message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NextFrameOpts
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NextFrameOpts} NextFrameOpts
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NextFrameOpts.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NextFrameOpts message.
     * @function verify
     * @memberof NextFrameOpts
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NextFrameOpts.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.frameid))
            return "frameid: integer expected";
        if (!$util.isString(message.roomid))
            return "roomid: string expected";
        if (!$util.isInteger(message.seatid))
            return "seatid: integer expected";
        if (message.opts != null && message.hasOwnProperty("opts")) {
            if (!Array.isArray(message.opts))
                return "opts: array expected";
            for (var i = 0; i < message.opts.length; ++i) {
                var error = $root.OptionEvent.verify(message.opts[i]);
                if (error)
                    return "opts." + error;
            }
        }
        return null;
    };

    /**
     * Creates a NextFrameOpts message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NextFrameOpts
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NextFrameOpts} NextFrameOpts
     */
    NextFrameOpts.fromObject = function fromObject(object) {
        if (object instanceof $root.NextFrameOpts)
            return object;
        var message = new $root.NextFrameOpts();
        if (object.frameid != null)
            message.frameid = object.frameid | 0;
        if (object.roomid != null)
            message.roomid = String(object.roomid);
        if (object.seatid != null)
            message.seatid = object.seatid | 0;
        if (object.opts) {
            if (!Array.isArray(object.opts))
                throw TypeError(".NextFrameOpts.opts: array expected");
            message.opts = [];
            for (var i = 0; i < object.opts.length; ++i) {
                if (typeof object.opts[i] !== "object")
                    throw TypeError(".NextFrameOpts.opts: object expected");
                message.opts[i] = $root.OptionEvent.fromObject(object.opts[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a NextFrameOpts message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NextFrameOpts
     * @static
     * @param {NextFrameOpts} message NextFrameOpts
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NextFrameOpts.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.opts = [];
        if (options.defaults) {
            object.frameid = 0;
            object.roomid = "";
            object.seatid = 0;
        }
        if (message.frameid != null && message.hasOwnProperty("frameid"))
            object.frameid = message.frameid;
        if (message.roomid != null && message.hasOwnProperty("roomid"))
            object.roomid = message.roomid;
        if (message.seatid != null && message.hasOwnProperty("seatid"))
            object.seatid = message.seatid;
        if (message.opts && message.opts.length) {
            object.opts = [];
            for (var j = 0; j < message.opts.length; ++j)
                object.opts[j] = $root.OptionEvent.toObject(message.opts[j], options);
        }
        return object;
    };

    /**
     * Converts this NextFrameOpts to JSON.
     * @function toJSON
     * @memberof NextFrameOpts
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NextFrameOpts.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NextFrameOpts;
})();

$root.CheckLinkGameReq = (function() {

    /**
     * Properties of a CheckLinkGameReq.
     * @exports ICheckLinkGameReq
     * @interface ICheckLinkGameReq
     */

    /**
     * Constructs a new CheckLinkGameReq.
     * @exports CheckLinkGameReq
     * @classdesc Represents a CheckLinkGameReq.
     * @implements ICheckLinkGameReq
     * @constructor
     * @param {ICheckLinkGameReq=} [properties] Properties to set
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
     * @memberof CheckLinkGameReq
     * @static
     * @param {ICheckLinkGameReq=} [properties] Properties to set
     * @returns {CheckLinkGameReq} CheckLinkGameReq instance
     */
    CheckLinkGameReq.create = function create(properties) {
        return new CheckLinkGameReq(properties);
    };

    /**
     * Encodes the specified CheckLinkGameReq message. Does not implicitly {@link CheckLinkGameReq.verify|verify} messages.
     * @function encode
     * @memberof CheckLinkGameReq
     * @static
     * @param {ICheckLinkGameReq} message CheckLinkGameReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CheckLinkGameReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified CheckLinkGameReq message, length delimited. Does not implicitly {@link CheckLinkGameReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CheckLinkGameReq
     * @static
     * @param {ICheckLinkGameReq} message CheckLinkGameReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CheckLinkGameReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CheckLinkGameReq message from the specified reader or buffer.
     * @function decode
     * @memberof CheckLinkGameReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CheckLinkGameReq} CheckLinkGameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CheckLinkGameReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CheckLinkGameReq();
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
     * @memberof CheckLinkGameReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CheckLinkGameReq} CheckLinkGameReq
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
     * @memberof CheckLinkGameReq
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
     * @memberof CheckLinkGameReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CheckLinkGameReq} CheckLinkGameReq
     */
    CheckLinkGameReq.fromObject = function fromObject(object) {
        if (object instanceof $root.CheckLinkGameReq)
            return object;
        return new $root.CheckLinkGameReq();
    };

    /**
     * Creates a plain object from a CheckLinkGameReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CheckLinkGameReq
     * @static
     * @param {CheckLinkGameReq} message CheckLinkGameReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CheckLinkGameReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this CheckLinkGameReq to JSON.
     * @function toJSON
     * @memberof CheckLinkGameReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CheckLinkGameReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CheckLinkGameReq;
})();

$root.CheckLinkGameRes = (function() {

    /**
     * Properties of a CheckLinkGameRes.
     * @exports ICheckLinkGameRes
     * @interface ICheckLinkGameRes
     * @property {number} status CheckLinkGameRes status
     */

    /**
     * Constructs a new CheckLinkGameRes.
     * @exports CheckLinkGameRes
     * @classdesc Represents a CheckLinkGameRes.
     * @implements ICheckLinkGameRes
     * @constructor
     * @param {ICheckLinkGameRes=} [properties] Properties to set
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
     * @memberof CheckLinkGameRes
     * @instance
     */
    CheckLinkGameRes.prototype.status = 0;

    /**
     * Creates a new CheckLinkGameRes instance using the specified properties.
     * @function create
     * @memberof CheckLinkGameRes
     * @static
     * @param {ICheckLinkGameRes=} [properties] Properties to set
     * @returns {CheckLinkGameRes} CheckLinkGameRes instance
     */
    CheckLinkGameRes.create = function create(properties) {
        return new CheckLinkGameRes(properties);
    };

    /**
     * Encodes the specified CheckLinkGameRes message. Does not implicitly {@link CheckLinkGameRes.verify|verify} messages.
     * @function encode
     * @memberof CheckLinkGameRes
     * @static
     * @param {ICheckLinkGameRes} message CheckLinkGameRes message or plain object to encode
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
     * Encodes the specified CheckLinkGameRes message, length delimited. Does not implicitly {@link CheckLinkGameRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CheckLinkGameRes
     * @static
     * @param {ICheckLinkGameRes} message CheckLinkGameRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CheckLinkGameRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CheckLinkGameRes message from the specified reader or buffer.
     * @function decode
     * @memberof CheckLinkGameRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CheckLinkGameRes} CheckLinkGameRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CheckLinkGameRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CheckLinkGameRes();
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
     * @memberof CheckLinkGameRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CheckLinkGameRes} CheckLinkGameRes
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
     * @memberof CheckLinkGameRes
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
     * @memberof CheckLinkGameRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CheckLinkGameRes} CheckLinkGameRes
     */
    CheckLinkGameRes.fromObject = function fromObject(object) {
        if (object instanceof $root.CheckLinkGameRes)
            return object;
        var message = new $root.CheckLinkGameRes();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a CheckLinkGameRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CheckLinkGameRes
     * @static
     * @param {CheckLinkGameRes} message CheckLinkGameRes
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
     * @memberof CheckLinkGameRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CheckLinkGameRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CheckLinkGameRes;
})();

$root.RoomInfoRes = (function() {

    /**
     * Properties of a RoomInfoRes.
     * @exports IRoomInfoRes
     * @interface IRoomInfoRes
     * @property {string} roominfo RoomInfoRes roominfo
     */

    /**
     * Constructs a new RoomInfoRes.
     * @exports RoomInfoRes
     * @classdesc Represents a RoomInfoRes.
     * @implements IRoomInfoRes
     * @constructor
     * @param {IRoomInfoRes=} [properties] Properties to set
     */
    function RoomInfoRes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoomInfoRes roominfo.
     * @member {string} roominfo
     * @memberof RoomInfoRes
     * @instance
     */
    RoomInfoRes.prototype.roominfo = "";

    /**
     * Creates a new RoomInfoRes instance using the specified properties.
     * @function create
     * @memberof RoomInfoRes
     * @static
     * @param {IRoomInfoRes=} [properties] Properties to set
     * @returns {RoomInfoRes} RoomInfoRes instance
     */
    RoomInfoRes.create = function create(properties) {
        return new RoomInfoRes(properties);
    };

    /**
     * Encodes the specified RoomInfoRes message. Does not implicitly {@link RoomInfoRes.verify|verify} messages.
     * @function encode
     * @memberof RoomInfoRes
     * @static
     * @param {IRoomInfoRes} message RoomInfoRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomInfoRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.roominfo);
        return writer;
    };

    /**
     * Encodes the specified RoomInfoRes message, length delimited. Does not implicitly {@link RoomInfoRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomInfoRes
     * @static
     * @param {IRoomInfoRes} message RoomInfoRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomInfoRes message from the specified reader or buffer.
     * @function decode
     * @memberof RoomInfoRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomInfoRes} RoomInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomInfoRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomInfoRes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.roominfo = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("roominfo"))
            throw $util.ProtocolError("missing required 'roominfo'", { instance: message });
        return message;
    };

    /**
     * Decodes a RoomInfoRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomInfoRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomInfoRes} RoomInfoRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomInfoRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoomInfoRes message.
     * @function verify
     * @memberof RoomInfoRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoomInfoRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.roominfo))
            return "roominfo: string expected";
        return null;
    };

    /**
     * Creates a RoomInfoRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomInfoRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomInfoRes} RoomInfoRes
     */
    RoomInfoRes.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomInfoRes)
            return object;
        var message = new $root.RoomInfoRes();
        if (object.roominfo != null)
            message.roominfo = String(object.roominfo);
        return message;
    };

    /**
     * Creates a plain object from a RoomInfoRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomInfoRes
     * @static
     * @param {RoomInfoRes} message RoomInfoRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoomInfoRes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.roominfo = "";
        if (message.roominfo != null && message.hasOwnProperty("roominfo"))
            object.roominfo = message.roominfo;
        return object;
    };

    /**
     * Converts this RoomInfoRes to JSON.
     * @function toJSON
     * @memberof RoomInfoRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomInfoRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoomInfoRes;
})();

$root.RoomIdRes = (function() {

    /**
     * Properties of a RoomIdRes.
     * @exports IRoomIdRes
     * @interface IRoomIdRes
     * @property {string} roomid RoomIdRes roomid
     */

    /**
     * Constructs a new RoomIdRes.
     * @exports RoomIdRes
     * @classdesc Represents a RoomIdRes.
     * @implements IRoomIdRes
     * @constructor
     * @param {IRoomIdRes=} [properties] Properties to set
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
     * @memberof RoomIdRes
     * @instance
     */
    RoomIdRes.prototype.roomid = "";

    /**
     * Creates a new RoomIdRes instance using the specified properties.
     * @function create
     * @memberof RoomIdRes
     * @static
     * @param {IRoomIdRes=} [properties] Properties to set
     * @returns {RoomIdRes} RoomIdRes instance
     */
    RoomIdRes.create = function create(properties) {
        return new RoomIdRes(properties);
    };

    /**
     * Encodes the specified RoomIdRes message. Does not implicitly {@link RoomIdRes.verify|verify} messages.
     * @function encode
     * @memberof RoomIdRes
     * @static
     * @param {IRoomIdRes} message RoomIdRes message or plain object to encode
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
     * Encodes the specified RoomIdRes message, length delimited. Does not implicitly {@link RoomIdRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomIdRes
     * @static
     * @param {IRoomIdRes} message RoomIdRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomIdRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomIdRes message from the specified reader or buffer.
     * @function decode
     * @memberof RoomIdRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomIdRes} RoomIdRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomIdRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomIdRes();
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
     * @memberof RoomIdRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomIdRes} RoomIdRes
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
     * @memberof RoomIdRes
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
     * @memberof RoomIdRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomIdRes} RoomIdRes
     */
    RoomIdRes.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomIdRes)
            return object;
        var message = new $root.RoomIdRes();
        if (object.roomid != null)
            message.roomid = String(object.roomid);
        return message;
    };

    /**
     * Creates a plain object from a RoomIdRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomIdRes
     * @static
     * @param {RoomIdRes} message RoomIdRes
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
     * @memberof RoomIdRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomIdRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoomIdRes;
})();

$root.PlayCountRes = (function() {

    /**
     * Properties of a PlayCountRes.
     * @exports IPlayCountRes
     * @interface IPlayCountRes
     * @property {string} playcount PlayCountRes playcount
     * @property {string} totalplaycount PlayCountRes totalplaycount
     */

    /**
     * Constructs a new PlayCountRes.
     * @exports PlayCountRes
     * @classdesc Represents a PlayCountRes.
     * @implements IPlayCountRes
     * @constructor
     * @param {IPlayCountRes=} [properties] Properties to set
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
     * @memberof PlayCountRes
     * @instance
     */
    PlayCountRes.prototype.playcount = "";

    /**
     * PlayCountRes totalplaycount.
     * @member {string} totalplaycount
     * @memberof PlayCountRes
     * @instance
     */
    PlayCountRes.prototype.totalplaycount = "";

    /**
     * Creates a new PlayCountRes instance using the specified properties.
     * @function create
     * @memberof PlayCountRes
     * @static
     * @param {IPlayCountRes=} [properties] Properties to set
     * @returns {PlayCountRes} PlayCountRes instance
     */
    PlayCountRes.create = function create(properties) {
        return new PlayCountRes(properties);
    };

    /**
     * Encodes the specified PlayCountRes message. Does not implicitly {@link PlayCountRes.verify|verify} messages.
     * @function encode
     * @memberof PlayCountRes
     * @static
     * @param {IPlayCountRes} message PlayCountRes message or plain object to encode
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
     * Encodes the specified PlayCountRes message, length delimited. Does not implicitly {@link PlayCountRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlayCountRes
     * @static
     * @param {IPlayCountRes} message PlayCountRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayCountRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlayCountRes message from the specified reader or buffer.
     * @function decode
     * @memberof PlayCountRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayCountRes} PlayCountRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayCountRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayCountRes();
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
     * @memberof PlayCountRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlayCountRes} PlayCountRes
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
     * @memberof PlayCountRes
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
     * @memberof PlayCountRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlayCountRes} PlayCountRes
     */
    PlayCountRes.fromObject = function fromObject(object) {
        if (object instanceof $root.PlayCountRes)
            return object;
        var message = new $root.PlayCountRes();
        if (object.playcount != null)
            message.playcount = String(object.playcount);
        if (object.totalplaycount != null)
            message.totalplaycount = String(object.totalplaycount);
        return message;
    };

    /**
     * Creates a plain object from a PlayCountRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlayCountRes
     * @static
     * @param {PlayCountRes} message PlayCountRes
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
     * @memberof PlayCountRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlayCountRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlayCountRes;
})();

$root.UserArrivedInfos = (function() {

    /**
     * Properties of a UserArrivedInfos.
     * @exports IUserArrivedInfos
     * @interface IUserArrivedInfos
     * @property {Array.<IUserArrived>|null} [userinfo] UserArrivedInfos userinfo
     */

    /**
     * Constructs a new UserArrivedInfos.
     * @exports UserArrivedInfos
     * @classdesc Represents a UserArrivedInfos.
     * @implements IUserArrivedInfos
     * @constructor
     * @param {IUserArrivedInfos=} [properties] Properties to set
     */
    function UserArrivedInfos(properties) {
        this.userinfo = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserArrivedInfos userinfo.
     * @member {Array.<IUserArrived>} userinfo
     * @memberof UserArrivedInfos
     * @instance
     */
    UserArrivedInfos.prototype.userinfo = $util.emptyArray;

    /**
     * Creates a new UserArrivedInfos instance using the specified properties.
     * @function create
     * @memberof UserArrivedInfos
     * @static
     * @param {IUserArrivedInfos=} [properties] Properties to set
     * @returns {UserArrivedInfos} UserArrivedInfos instance
     */
    UserArrivedInfos.create = function create(properties) {
        return new UserArrivedInfos(properties);
    };

    /**
     * Encodes the specified UserArrivedInfos message. Does not implicitly {@link UserArrivedInfos.verify|verify} messages.
     * @function encode
     * @memberof UserArrivedInfos
     * @static
     * @param {IUserArrivedInfos} message UserArrivedInfos message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserArrivedInfos.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userinfo != null && message.userinfo.length)
            for (var i = 0; i < message.userinfo.length; ++i)
                $root.UserArrived.encode(message.userinfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified UserArrivedInfos message, length delimited. Does not implicitly {@link UserArrivedInfos.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserArrivedInfos
     * @static
     * @param {IUserArrivedInfos} message UserArrivedInfos message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserArrivedInfos.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserArrivedInfos message from the specified reader or buffer.
     * @function decode
     * @memberof UserArrivedInfos
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserArrivedInfos} UserArrivedInfos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserArrivedInfos.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserArrivedInfos();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.userinfo && message.userinfo.length))
                    message.userinfo = [];
                message.userinfo.push($root.UserArrived.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserArrivedInfos message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserArrivedInfos
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserArrivedInfos} UserArrivedInfos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserArrivedInfos.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserArrivedInfos message.
     * @function verify
     * @memberof UserArrivedInfos
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserArrivedInfos.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userinfo != null && message.hasOwnProperty("userinfo")) {
            if (!Array.isArray(message.userinfo))
                return "userinfo: array expected";
            for (var i = 0; i < message.userinfo.length; ++i) {
                var error = $root.UserArrived.verify(message.userinfo[i]);
                if (error)
                    return "userinfo." + error;
            }
        }
        return null;
    };

    /**
     * Creates a UserArrivedInfos message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserArrivedInfos
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserArrivedInfos} UserArrivedInfos
     */
    UserArrivedInfos.fromObject = function fromObject(object) {
        if (object instanceof $root.UserArrivedInfos)
            return object;
        var message = new $root.UserArrivedInfos();
        if (object.userinfo) {
            if (!Array.isArray(object.userinfo))
                throw TypeError(".UserArrivedInfos.userinfo: array expected");
            message.userinfo = [];
            for (var i = 0; i < object.userinfo.length; ++i) {
                if (typeof object.userinfo[i] !== "object")
                    throw TypeError(".UserArrivedInfos.userinfo: object expected");
                message.userinfo[i] = $root.UserArrived.fromObject(object.userinfo[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a UserArrivedInfos message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserArrivedInfos
     * @static
     * @param {UserArrivedInfos} message UserArrivedInfos
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserArrivedInfos.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.userinfo = [];
        if (message.userinfo && message.userinfo.length) {
            object.userinfo = [];
            for (var j = 0; j < message.userinfo.length; ++j)
                object.userinfo[j] = $root.UserArrived.toObject(message.userinfo[j], options);
        }
        return object;
    };

    /**
     * Converts this UserArrivedInfos to JSON.
     * @function toJSON
     * @memberof UserArrivedInfos
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserArrivedInfos.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserArrivedInfos;
})();

$root.UserState = (function() {

    /**
     * Properties of a UserState.
     * @exports IUserState
     * @interface IUserState
     * @property {number} seatid UserState seatid
     * @property {string} userstate UserState userstate
     */

    /**
     * Constructs a new UserState.
     * @exports UserState
     * @classdesc Represents a UserState.
     * @implements IUserState
     * @constructor
     * @param {IUserState=} [properties] Properties to set
     */
    function UserState(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserState seatid.
     * @member {number} seatid
     * @memberof UserState
     * @instance
     */
    UserState.prototype.seatid = 0;

    /**
     * UserState userstate.
     * @member {string} userstate
     * @memberof UserState
     * @instance
     */
    UserState.prototype.userstate = "";

    /**
     * Creates a new UserState instance using the specified properties.
     * @function create
     * @memberof UserState
     * @static
     * @param {IUserState=} [properties] Properties to set
     * @returns {UserState} UserState instance
     */
    UserState.create = function create(properties) {
        return new UserState(properties);
    };

    /**
     * Encodes the specified UserState message. Does not implicitly {@link UserState.verify|verify} messages.
     * @function encode
     * @memberof UserState
     * @static
     * @param {IUserState} message UserState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.seatid);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.userstate);
        return writer;
    };

    /**
     * Encodes the specified UserState message, length delimited. Does not implicitly {@link UserState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserState
     * @static
     * @param {IUserState} message UserState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserState message from the specified reader or buffer.
     * @function decode
     * @memberof UserState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserState} UserState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.seatid = reader.sint32();
                break;
            case 2:
                message.userstate = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("seatid"))
            throw $util.ProtocolError("missing required 'seatid'", { instance: message });
        if (!message.hasOwnProperty("userstate"))
            throw $util.ProtocolError("missing required 'userstate'", { instance: message });
        return message;
    };

    /**
     * Decodes a UserState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserState} UserState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserState message.
     * @function verify
     * @memberof UserState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.seatid))
            return "seatid: integer expected";
        if (!$util.isString(message.userstate))
            return "userstate: string expected";
        return null;
    };

    /**
     * Creates a UserState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserState} UserState
     */
    UserState.fromObject = function fromObject(object) {
        if (object instanceof $root.UserState)
            return object;
        var message = new $root.UserState();
        if (object.seatid != null)
            message.seatid = object.seatid | 0;
        if (object.userstate != null)
            message.userstate = String(object.userstate);
        return message;
    };

    /**
     * Creates a plain object from a UserState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserState
     * @static
     * @param {UserState} message UserState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.seatid = 0;
            object.userstate = "";
        }
        if (message.seatid != null && message.hasOwnProperty("seatid"))
            object.seatid = message.seatid;
        if (message.userstate != null && message.hasOwnProperty("userstate"))
            object.userstate = message.userstate;
        return object;
    };

    /**
     * Converts this UserState to JSON.
     * @function toJSON
     * @memberof UserState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserState;
})();

$root.AllUserState = (function() {

    /**
     * Properties of an AllUserState.
     * @exports IAllUserState
     * @interface IAllUserState
     * @property {Array.<IUserState>|null} [userstate] AllUserState userstate
     */

    /**
     * Constructs a new AllUserState.
     * @exports AllUserState
     * @classdesc Represents an AllUserState.
     * @implements IAllUserState
     * @constructor
     * @param {IAllUserState=} [properties] Properties to set
     */
    function AllUserState(properties) {
        this.userstate = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AllUserState userstate.
     * @member {Array.<IUserState>} userstate
     * @memberof AllUserState
     * @instance
     */
    AllUserState.prototype.userstate = $util.emptyArray;

    /**
     * Creates a new AllUserState instance using the specified properties.
     * @function create
     * @memberof AllUserState
     * @static
     * @param {IAllUserState=} [properties] Properties to set
     * @returns {AllUserState} AllUserState instance
     */
    AllUserState.create = function create(properties) {
        return new AllUserState(properties);
    };

    /**
     * Encodes the specified AllUserState message. Does not implicitly {@link AllUserState.verify|verify} messages.
     * @function encode
     * @memberof AllUserState
     * @static
     * @param {IAllUserState} message AllUserState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AllUserState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userstate != null && message.userstate.length)
            for (var i = 0; i < message.userstate.length; ++i)
                $root.UserState.encode(message.userstate[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified AllUserState message, length delimited. Does not implicitly {@link AllUserState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AllUserState
     * @static
     * @param {IAllUserState} message AllUserState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AllUserState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AllUserState message from the specified reader or buffer.
     * @function decode
     * @memberof AllUserState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AllUserState} AllUserState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AllUserState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AllUserState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.userstate && message.userstate.length))
                    message.userstate = [];
                message.userstate.push($root.UserState.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AllUserState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AllUserState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AllUserState} AllUserState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AllUserState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AllUserState message.
     * @function verify
     * @memberof AllUserState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AllUserState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userstate != null && message.hasOwnProperty("userstate")) {
            if (!Array.isArray(message.userstate))
                return "userstate: array expected";
            for (var i = 0; i < message.userstate.length; ++i) {
                var error = $root.UserState.verify(message.userstate[i]);
                if (error)
                    return "userstate." + error;
            }
        }
        return null;
    };

    /**
     * Creates an AllUserState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AllUserState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AllUserState} AllUserState
     */
    AllUserState.fromObject = function fromObject(object) {
        if (object instanceof $root.AllUserState)
            return object;
        var message = new $root.AllUserState();
        if (object.userstate) {
            if (!Array.isArray(object.userstate))
                throw TypeError(".AllUserState.userstate: array expected");
            message.userstate = [];
            for (var i = 0; i < object.userstate.length; ++i) {
                if (typeof object.userstate[i] !== "object")
                    throw TypeError(".AllUserState.userstate: object expected");
                message.userstate[i] = $root.UserState.fromObject(object.userstate[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an AllUserState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AllUserState
     * @static
     * @param {AllUserState} message AllUserState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AllUserState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.userstate = [];
        if (message.userstate && message.userstate.length) {
            object.userstate = [];
            for (var j = 0; j < message.userstate.length; ++j)
                object.userstate[j] = $root.UserState.toObject(message.userstate[j], options);
        }
        return object;
    };

    /**
     * Converts this AllUserState to JSON.
     * @function toJSON
     * @memberof AllUserState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AllUserState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AllUserState;
})();

$root.GameResult = (function() {

    /**
     * Properties of a GameResult.
     * @exports IGameResult
     * @interface IGameResult
     * @property {Array.<string>|null} [score] GameResult score
     */

    /**
     * Constructs a new GameResult.
     * @exports GameResult
     * @classdesc Represents a GameResult.
     * @implements IGameResult
     * @constructor
     * @param {IGameResult=} [properties] Properties to set
     */
    function GameResult(properties) {
        this.score = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameResult score.
     * @member {Array.<string>} score
     * @memberof GameResult
     * @instance
     */
    GameResult.prototype.score = $util.emptyArray;

    /**
     * Creates a new GameResult instance using the specified properties.
     * @function create
     * @memberof GameResult
     * @static
     * @param {IGameResult=} [properties] Properties to set
     * @returns {GameResult} GameResult instance
     */
    GameResult.create = function create(properties) {
        return new GameResult(properties);
    };

    /**
     * Encodes the specified GameResult message. Does not implicitly {@link GameResult.verify|verify} messages.
     * @function encode
     * @memberof GameResult
     * @static
     * @param {IGameResult} message GameResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.score != null && message.score.length)
            for (var i = 0; i < message.score.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.score[i]);
        return writer;
    };

    /**
     * Encodes the specified GameResult message, length delimited. Does not implicitly {@link GameResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameResult
     * @static
     * @param {IGameResult} message GameResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameResult message from the specified reader or buffer.
     * @function decode
     * @memberof GameResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameResult} GameResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.score && message.score.length))
                    message.score = [];
                message.score.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GameResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameResult} GameResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GameResult message.
     * @function verify
     * @memberof GameResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GameResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.score != null && message.hasOwnProperty("score")) {
            if (!Array.isArray(message.score))
                return "score: array expected";
            for (var i = 0; i < message.score.length; ++i)
                if (!$util.isString(message.score[i]))
                    return "score: string[] expected";
        }
        return null;
    };

    /**
     * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameResult} GameResult
     */
    GameResult.fromObject = function fromObject(object) {
        if (object instanceof $root.GameResult)
            return object;
        var message = new $root.GameResult();
        if (object.score) {
            if (!Array.isArray(object.score))
                throw TypeError(".GameResult.score: array expected");
            message.score = [];
            for (var i = 0; i < object.score.length; ++i)
                message.score[i] = String(object.score[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a GameResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameResult
     * @static
     * @param {GameResult} message GameResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.score = [];
        if (message.score && message.score.length) {
            object.score = [];
            for (var j = 0; j < message.score.length; ++j)
                object.score[j] = message.score[j];
        }
        return object;
    };

    /**
     * Converts this GameResult to JSON.
     * @function toJSON
     * @memberof GameResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GameResult;
})();

$root.GameTotalResult = (function() {

    /**
     * Properties of a GameTotalResult.
     * @exports IGameTotalResult
     * @interface IGameTotalResult
     * @property {Array.<string>|null} [score] GameTotalResult score
     */

    /**
     * Constructs a new GameTotalResult.
     * @exports GameTotalResult
     * @classdesc Represents a GameTotalResult.
     * @implements IGameTotalResult
     * @constructor
     * @param {IGameTotalResult=} [properties] Properties to set
     */
    function GameTotalResult(properties) {
        this.score = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameTotalResult score.
     * @member {Array.<string>} score
     * @memberof GameTotalResult
     * @instance
     */
    GameTotalResult.prototype.score = $util.emptyArray;

    /**
     * Creates a new GameTotalResult instance using the specified properties.
     * @function create
     * @memberof GameTotalResult
     * @static
     * @param {IGameTotalResult=} [properties] Properties to set
     * @returns {GameTotalResult} GameTotalResult instance
     */
    GameTotalResult.create = function create(properties) {
        return new GameTotalResult(properties);
    };

    /**
     * Encodes the specified GameTotalResult message. Does not implicitly {@link GameTotalResult.verify|verify} messages.
     * @function encode
     * @memberof GameTotalResult
     * @static
     * @param {IGameTotalResult} message GameTotalResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameTotalResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.score != null && message.score.length)
            for (var i = 0; i < message.score.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.score[i]);
        return writer;
    };

    /**
     * Encodes the specified GameTotalResult message, length delimited. Does not implicitly {@link GameTotalResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameTotalResult
     * @static
     * @param {IGameTotalResult} message GameTotalResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameTotalResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameTotalResult message from the specified reader or buffer.
     * @function decode
     * @memberof GameTotalResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameTotalResult} GameTotalResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameTotalResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameTotalResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.score && message.score.length))
                    message.score = [];
                message.score.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GameTotalResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameTotalResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameTotalResult} GameTotalResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameTotalResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GameTotalResult message.
     * @function verify
     * @memberof GameTotalResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GameTotalResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.score != null && message.hasOwnProperty("score")) {
            if (!Array.isArray(message.score))
                return "score: array expected";
            for (var i = 0; i < message.score.length; ++i)
                if (!$util.isString(message.score[i]))
                    return "score: string[] expected";
        }
        return null;
    };

    /**
     * Creates a GameTotalResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameTotalResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameTotalResult} GameTotalResult
     */
    GameTotalResult.fromObject = function fromObject(object) {
        if (object instanceof $root.GameTotalResult)
            return object;
        var message = new $root.GameTotalResult();
        if (object.score) {
            if (!Array.isArray(object.score))
                throw TypeError(".GameTotalResult.score: array expected");
            message.score = [];
            for (var i = 0; i < object.score.length; ++i)
                message.score[i] = String(object.score[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a GameTotalResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameTotalResult
     * @static
     * @param {GameTotalResult} message GameTotalResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameTotalResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.score = [];
        if (message.score && message.score.length) {
            object.score = [];
            for (var j = 0; j < message.score.length; ++j)
                object.score[j] = message.score[j];
        }
        return object;
    };

    /**
     * Converts this GameTotalResult to JSON.
     * @function toJSON
     * @memberof GameTotalResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameTotalResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GameTotalResult;
})();

$root.ClickTouZiNumReq = (function() {

    /**
     * Properties of a ClickTouZiNumReq.
     * @exports IClickTouZiNumReq
     * @interface IClickTouZiNumReq
     * @property {number} seatid ClickTouZiNumReq seatid
     * @property {number} touzinum ClickTouZiNumReq touzinum
     */

    /**
     * Constructs a new ClickTouZiNumReq.
     * @exports ClickTouZiNumReq
     * @classdesc Represents a ClickTouZiNumReq.
     * @implements IClickTouZiNumReq
     * @constructor
     * @param {IClickTouZiNumReq=} [properties] Properties to set
     */
    function ClickTouZiNumReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClickTouZiNumReq seatid.
     * @member {number} seatid
     * @memberof ClickTouZiNumReq
     * @instance
     */
    ClickTouZiNumReq.prototype.seatid = 0;

    /**
     * ClickTouZiNumReq touzinum.
     * @member {number} touzinum
     * @memberof ClickTouZiNumReq
     * @instance
     */
    ClickTouZiNumReq.prototype.touzinum = 0;

    /**
     * Creates a new ClickTouZiNumReq instance using the specified properties.
     * @function create
     * @memberof ClickTouZiNumReq
     * @static
     * @param {IClickTouZiNumReq=} [properties] Properties to set
     * @returns {ClickTouZiNumReq} ClickTouZiNumReq instance
     */
    ClickTouZiNumReq.create = function create(properties) {
        return new ClickTouZiNumReq(properties);
    };

    /**
     * Encodes the specified ClickTouZiNumReq message. Does not implicitly {@link ClickTouZiNumReq.verify|verify} messages.
     * @function encode
     * @memberof ClickTouZiNumReq
     * @static
     * @param {IClickTouZiNumReq} message ClickTouZiNumReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClickTouZiNumReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.seatid);
        writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.touzinum);
        return writer;
    };

    /**
     * Encodes the specified ClickTouZiNumReq message, length delimited. Does not implicitly {@link ClickTouZiNumReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClickTouZiNumReq
     * @static
     * @param {IClickTouZiNumReq} message ClickTouZiNumReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClickTouZiNumReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClickTouZiNumReq message from the specified reader or buffer.
     * @function decode
     * @memberof ClickTouZiNumReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClickTouZiNumReq} ClickTouZiNumReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClickTouZiNumReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClickTouZiNumReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.seatid = reader.sint32();
                break;
            case 2:
                message.touzinum = reader.sint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("seatid"))
            throw $util.ProtocolError("missing required 'seatid'", { instance: message });
        if (!message.hasOwnProperty("touzinum"))
            throw $util.ProtocolError("missing required 'touzinum'", { instance: message });
        return message;
    };

    /**
     * Decodes a ClickTouZiNumReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClickTouZiNumReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClickTouZiNumReq} ClickTouZiNumReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClickTouZiNumReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClickTouZiNumReq message.
     * @function verify
     * @memberof ClickTouZiNumReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClickTouZiNumReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.seatid))
            return "seatid: integer expected";
        if (!$util.isInteger(message.touzinum))
            return "touzinum: integer expected";
        return null;
    };

    /**
     * Creates a ClickTouZiNumReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClickTouZiNumReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClickTouZiNumReq} ClickTouZiNumReq
     */
    ClickTouZiNumReq.fromObject = function fromObject(object) {
        if (object instanceof $root.ClickTouZiNumReq)
            return object;
        var message = new $root.ClickTouZiNumReq();
        if (object.seatid != null)
            message.seatid = object.seatid | 0;
        if (object.touzinum != null)
            message.touzinum = object.touzinum | 0;
        return message;
    };

    /**
     * Creates a plain object from a ClickTouZiNumReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClickTouZiNumReq
     * @static
     * @param {ClickTouZiNumReq} message ClickTouZiNumReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClickTouZiNumReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.seatid = 0;
            object.touzinum = 0;
        }
        if (message.seatid != null && message.hasOwnProperty("seatid"))
            object.seatid = message.seatid;
        if (message.touzinum != null && message.hasOwnProperty("touzinum"))
            object.touzinum = message.touzinum;
        return object;
    };

    /**
     * Converts this ClickTouZiNumReq to JSON.
     * @function toJSON
     * @memberof ClickTouZiNumReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClickTouZiNumReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClickTouZiNumReq;
})();

$root.TouZiNumRes = (function() {

    /**
     * Properties of a TouZiNumRes.
     * @exports ITouZiNumRes
     * @interface ITouZiNumRes
     * @property {Array.<number>|null} [touzinums] TouZiNumRes touzinums
     * @property {Array.<number>|null} [bombnums] TouZiNumRes bombnums
     */

    /**
     * Constructs a new TouZiNumRes.
     * @exports TouZiNumRes
     * @classdesc Represents a TouZiNumRes.
     * @implements ITouZiNumRes
     * @constructor
     * @param {ITouZiNumRes=} [properties] Properties to set
     */
    function TouZiNumRes(properties) {
        this.touzinums = [];
        this.bombnums = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TouZiNumRes touzinums.
     * @member {Array.<number>} touzinums
     * @memberof TouZiNumRes
     * @instance
     */
    TouZiNumRes.prototype.touzinums = $util.emptyArray;

    /**
     * TouZiNumRes bombnums.
     * @member {Array.<number>} bombnums
     * @memberof TouZiNumRes
     * @instance
     */
    TouZiNumRes.prototype.bombnums = $util.emptyArray;

    /**
     * Creates a new TouZiNumRes instance using the specified properties.
     * @function create
     * @memberof TouZiNumRes
     * @static
     * @param {ITouZiNumRes=} [properties] Properties to set
     * @returns {TouZiNumRes} TouZiNumRes instance
     */
    TouZiNumRes.create = function create(properties) {
        return new TouZiNumRes(properties);
    };

    /**
     * Encodes the specified TouZiNumRes message. Does not implicitly {@link TouZiNumRes.verify|verify} messages.
     * @function encode
     * @memberof TouZiNumRes
     * @static
     * @param {ITouZiNumRes} message TouZiNumRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TouZiNumRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.touzinums != null && message.touzinums.length)
            for (var i = 0; i < message.touzinums.length; ++i)
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.touzinums[i]);
        if (message.bombnums != null && message.bombnums.length)
            for (var i = 0; i < message.bombnums.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.bombnums[i]);
        return writer;
    };

    /**
     * Encodes the specified TouZiNumRes message, length delimited. Does not implicitly {@link TouZiNumRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TouZiNumRes
     * @static
     * @param {ITouZiNumRes} message TouZiNumRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TouZiNumRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TouZiNumRes message from the specified reader or buffer.
     * @function decode
     * @memberof TouZiNumRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TouZiNumRes} TouZiNumRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TouZiNumRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TouZiNumRes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.touzinums && message.touzinums.length))
                    message.touzinums = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.touzinums.push(reader.sint32());
                } else
                    message.touzinums.push(reader.sint32());
                break;
            case 2:
                if (!(message.bombnums && message.bombnums.length))
                    message.bombnums = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.bombnums.push(reader.sint32());
                } else
                    message.bombnums.push(reader.sint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TouZiNumRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TouZiNumRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TouZiNumRes} TouZiNumRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TouZiNumRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TouZiNumRes message.
     * @function verify
     * @memberof TouZiNumRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TouZiNumRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.touzinums != null && message.hasOwnProperty("touzinums")) {
            if (!Array.isArray(message.touzinums))
                return "touzinums: array expected";
            for (var i = 0; i < message.touzinums.length; ++i)
                if (!$util.isInteger(message.touzinums[i]))
                    return "touzinums: integer[] expected";
        }
        if (message.bombnums != null && message.hasOwnProperty("bombnums")) {
            if (!Array.isArray(message.bombnums))
                return "bombnums: array expected";
            for (var i = 0; i < message.bombnums.length; ++i)
                if (!$util.isInteger(message.bombnums[i]))
                    return "bombnums: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a TouZiNumRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TouZiNumRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TouZiNumRes} TouZiNumRes
     */
    TouZiNumRes.fromObject = function fromObject(object) {
        if (object instanceof $root.TouZiNumRes)
            return object;
        var message = new $root.TouZiNumRes();
        if (object.touzinums) {
            if (!Array.isArray(object.touzinums))
                throw TypeError(".TouZiNumRes.touzinums: array expected");
            message.touzinums = [];
            for (var i = 0; i < object.touzinums.length; ++i)
                message.touzinums[i] = object.touzinums[i] | 0;
        }
        if (object.bombnums) {
            if (!Array.isArray(object.bombnums))
                throw TypeError(".TouZiNumRes.bombnums: array expected");
            message.bombnums = [];
            for (var i = 0; i < object.bombnums.length; ++i)
                message.bombnums[i] = object.bombnums[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a TouZiNumRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TouZiNumRes
     * @static
     * @param {TouZiNumRes} message TouZiNumRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TouZiNumRes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.touzinums = [];
            object.bombnums = [];
        }
        if (message.touzinums && message.touzinums.length) {
            object.touzinums = [];
            for (var j = 0; j < message.touzinums.length; ++j)
                object.touzinums[j] = message.touzinums[j];
        }
        if (message.bombnums && message.bombnums.length) {
            object.bombnums = [];
            for (var j = 0; j < message.bombnums.length; ++j)
                object.bombnums[j] = message.bombnums[j];
        }
        return object;
    };

    /**
     * Converts this TouZiNumRes to JSON.
     * @function toJSON
     * @memberof TouZiNumRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TouZiNumRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TouZiNumRes;
})();

$root.ClickTouZiBombRes = (function() {

    /**
     * Properties of a ClickTouZiBombRes.
     * @exports IClickTouZiBombRes
     * @interface IClickTouZiBombRes
     * @property {number} seatid ClickTouZiBombRes seatid
     */

    /**
     * Constructs a new ClickTouZiBombRes.
     * @exports ClickTouZiBombRes
     * @classdesc Represents a ClickTouZiBombRes.
     * @implements IClickTouZiBombRes
     * @constructor
     * @param {IClickTouZiBombRes=} [properties] Properties to set
     */
    function ClickTouZiBombRes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClickTouZiBombRes seatid.
     * @member {number} seatid
     * @memberof ClickTouZiBombRes
     * @instance
     */
    ClickTouZiBombRes.prototype.seatid = 0;

    /**
     * Creates a new ClickTouZiBombRes instance using the specified properties.
     * @function create
     * @memberof ClickTouZiBombRes
     * @static
     * @param {IClickTouZiBombRes=} [properties] Properties to set
     * @returns {ClickTouZiBombRes} ClickTouZiBombRes instance
     */
    ClickTouZiBombRes.create = function create(properties) {
        return new ClickTouZiBombRes(properties);
    };

    /**
     * Encodes the specified ClickTouZiBombRes message. Does not implicitly {@link ClickTouZiBombRes.verify|verify} messages.
     * @function encode
     * @memberof ClickTouZiBombRes
     * @static
     * @param {IClickTouZiBombRes} message ClickTouZiBombRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClickTouZiBombRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.seatid);
        return writer;
    };

    /**
     * Encodes the specified ClickTouZiBombRes message, length delimited. Does not implicitly {@link ClickTouZiBombRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClickTouZiBombRes
     * @static
     * @param {IClickTouZiBombRes} message ClickTouZiBombRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClickTouZiBombRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClickTouZiBombRes message from the specified reader or buffer.
     * @function decode
     * @memberof ClickTouZiBombRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClickTouZiBombRes} ClickTouZiBombRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClickTouZiBombRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClickTouZiBombRes();
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
     * Decodes a ClickTouZiBombRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClickTouZiBombRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClickTouZiBombRes} ClickTouZiBombRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClickTouZiBombRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClickTouZiBombRes message.
     * @function verify
     * @memberof ClickTouZiBombRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClickTouZiBombRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.seatid))
            return "seatid: integer expected";
        return null;
    };

    /**
     * Creates a ClickTouZiBombRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClickTouZiBombRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClickTouZiBombRes} ClickTouZiBombRes
     */
    ClickTouZiBombRes.fromObject = function fromObject(object) {
        if (object instanceof $root.ClickTouZiBombRes)
            return object;
        var message = new $root.ClickTouZiBombRes();
        if (object.seatid != null)
            message.seatid = object.seatid | 0;
        return message;
    };

    /**
     * Creates a plain object from a ClickTouZiBombRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClickTouZiBombRes
     * @static
     * @param {ClickTouZiBombRes} message ClickTouZiBombRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClickTouZiBombRes.toObject = function toObject(message, options) {
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
     * Converts this ClickTouZiBombRes to JSON.
     * @function toJSON
     * @memberof ClickTouZiBombRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClickTouZiBombRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClickTouZiBombRes;
})();

module.exports = $root;
