"use strict";
var _a;
exports.__esModule = true;
exports.protoName = "TalkProto";
var Cmd;
(function (Cmd) {
    Cmd[Cmd["INVALED"] = 0] = "INVALED";
    Cmd[Cmd["eLoginReq"] = 1] = "eLoginReq";
    Cmd[Cmd["eLoginRes"] = 2] = "eLoginRes";
    Cmd[Cmd["eExitReq"] = 3] = "eExitReq";
    Cmd[Cmd["eExitRes"] = 4] = "eExitRes";
    Cmd[Cmd["eSendMsgReq"] = 5] = "eSendMsgReq";
    Cmd[Cmd["eSendMsgRes"] = 6] = "eSendMsgRes";
    Cmd[Cmd["eOnUserLogin"] = 7] = "eOnUserLogin";
    Cmd[Cmd["eOnUserExit"] = 8] = "eOnUserExit";
    Cmd[Cmd["eOnSendMsg"] = 9] = "eOnSendMsg";
})(Cmd = exports.Cmd || (exports.Cmd = {}));
exports.CmdName = (_a = {},
    _a[0] = "INVALED",
    _a[1] = "LoginReq",
    _a[2] = "LoginRes",
    _a[3] = "ExitReq",
    _a[4] = "ExitRes",
    _a[5] = "SendMsgReq",
    _a[6] = "SendMsgRes",
    _a[7] = "OnUserLogin",
    _a[8] = "OnUserExit",
    _a[9] = "OnSendMsg",
    _a);
//# sourceMappingURL=TalkProto.js.map