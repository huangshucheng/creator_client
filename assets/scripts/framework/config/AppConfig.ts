import ProtoManater from '../manager/ProtoManager';

export default class AppConfig {
    static IS_LOCAL_DEBUG   = true;        //是否启用本地调试
    static LOCAL_IP         = "127.0.0.1";
    static REMOTE_IP        = "www.hccfun.com";
    static REMOTE_WECHAT_PORT   = "6081";   //小程序wss端口，nginx配置6081,转发到6061
    static NATIVE_PLATFORM_PORT = "6061";   //安卓IOS原生平台端口,直接连接到6081
    static PROTO_TYPE       = ProtoManater.PROTO_BUF;
    static IS_TEST_BALL     = false; //是否本地测试小球碰撞
    static DESIGN_SIZE      = {width:1080, height:1920};
}