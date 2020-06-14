import ProtoManater from '../manager/ProtoManager';

//IP 端口等服务配置
export default class GameAppConfig {
    static IS_LOCAL_DEBUG           = false;                         // 是否启用本地调试
    // static LOCAL_IP              = "127.0.0.1";
    static LOCAL_HOST               = "172.30.32.16";            // 本地电脑ip,暂时写死，主要为了游戏在web平台测试用
    static REMOTE_IP                = "www.hccfun.com";
    static REMOTE_WECHAT_PORT       = "6081";                       // 小程序wss端口，nginx配置6081,转发到6061
    static NATIVE_PLATFORM_PORT     = "6061";                       // 安卓IOS原生平台端口,直接连接到6081
    static PROTO_TYPE               = ProtoManater.PROTO_BUF;   
    static REMORE_HTTP_HOT_PORT     = "7000";                       // http 热更新端口
    static REMORE_HTTP_CONFIG_PORT  = "6070";                       // http 配置端口
    static LOCAL_MANIFEST_PATH      = "manifest/project";
    static IS_WECHAT_GAME_ONLINE    = false;                             //微信小游戏线上环境，需要隐藏账号登录注册入口，只能使用微信登录
}