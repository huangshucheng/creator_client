import ProtoManater from '../manager/ProtoManager';

export default class AppConfig {
    static IS_LOCAL_DEBUG   = true; //本地调试
    static LOCAL_IP         = "127.0.0.1";
    static REMOTE_IP        = "www.hccfun.com";
    static REMOTE_PORT      = "6081";
    static PROTO_TYPE       = ProtoManater.PROTO_BUF;
}