"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _a;
exports.__esModule = true;
var TalkRoom = __importStar(require("./TalkProto"));
var Auth = __importStar(require("./AuthProto"));
var GameSystem = __importStar(require("./SystemProto"));
var GameProto = __importStar(require("./GameProto"));
var Stype_1 = require("./Stype");
var ProtoCmd = /** @class */ (function () {
    function ProtoCmd() {
    }
    //命名空间
    ProtoCmd.getProtoName = function (stype) {
        if (ProtoCmd.StypeProtos[stype]) {
            return ProtoCmd.StypeProtos[stype].protoName;
        }
        return null;
    };
    //字段名称
    ProtoCmd.getCmdName = function (stype, ctype) {
        if (ProtoCmd.StypeProtos[stype]) {
            return ProtoCmd.StypeProtos[stype].CmdName[ctype];
        }
        return null;
    };
    //服务器下标->协议脚本
    ProtoCmd.StypeProtos = (_a = {},
        _a[Stype_1.Stype.Auth] = Auth,
        _a[Stype_1.Stype.GameSystem] = GameSystem,
        _a[Stype_1.Stype.Game] = GameProto,
        _a[Stype_1.Stype.TalkRoom] = TalkRoom,
        _a);
    return ProtoCmd;
}());
exports["default"] = ProtoCmd;
//# sourceMappingURL=ProtoCmd.js.map