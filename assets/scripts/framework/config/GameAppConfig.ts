import ProtoManater from '../manager/ProtoManager';

//IP 端口等服务配置
export default class GameAppConfig {
    static IS_LOCAL_DEBUG           = true;                         // 是否启用本地调试
    // static LOCAL_IP              = "127.0.0.1";
    static LOCAL_HOST               = "192.168.31.181";            // 本地电脑ip,暂时写死，主要为了游戏在web平台测试用
    static REMOTE_IP                = "www.hccfun.com";
    static REMOTE_WECHAT_PORT       = "6081";                       // 小程序wss端口，nginx配置6081,转发到6061
    static NATIVE_PLATFORM_PORT     = "6061";                       // 安卓IOS原生平台端口,直接连接到6081
    static PROTO_TYPE               = ProtoManater.PROTO_BUF;   
    static REMORE_HTTP_HOT_PORT     = "7000";                       // http 热更新端口
    static REMORE_HTTP_CONFIG_PORT  = "6070";                       // http 配置端口
    static LOCAL_MANIFEST_PATH      = "manifest/project";
    static IS_WECHAT_GAME_ONLINE    = true;                             //微信小游戏线上环境，需要隐藏账号登录注册入口，只能使用微信登录

    static TEST_ACCOUNT = {
        "test1111" : "111111",
        "test2222" : "111111",
        "test3333" : "111111",
        "test4444" : "111111",
        "test5555" : "111111",
        "test6666": "111111",
        "test7777": "111111",
        "test8888": "111111",
        "test9999": "111111",
        "test1131": "111111",
        "test1132": "111111",
        "test1133": "111111",
        "test1134": "111111",
        "test1135": "111111",
        "test1136": "111111",
        "test1137": "111111",
        "test1138": "111111",
        "test1139": "111111",
        "test1140": "111111",
        "test1141": "111111",
        "test1142": "111111",
        "test1143": "111111",
        "test1144": "111111",
        "test1145": "111111",
        "test1146": "111111",
        "test1147": "111111",
        "test1148": "111111",
        "test1149": "111111",
        "test1150": "111111",
        "test1151": "111111",
        "test1152": "111111",
        "test1153": "111111",
        "test1154": "111111",
        "test1155": "111111",
        "test1156": "111111",
        "test1157": "111111",
        "test1158": "111111",
        "test1159": "111111",
        "test1160": "111111",
        "test9998": "111111",
        "test8899": "123456",
        //////////////////////
    }
}