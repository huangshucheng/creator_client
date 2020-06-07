//游戏配置
class GameHoodleConfig {
    
    static BOX_GAME_RULE            = { playerCount: 2, playCount: 3 }       //包厢规则:坐满人数，局数
    static IS_TEST_BALL             = false;                    //是否本地测试小球碰撞
    static BALL_COMPOSE_COUNT       = 2;                        //小球合成所需数量
    //小球转换类型
    static BALL_UPDATE_TYPE = {
        SELL_TYPE: 0,       //卖了
        COMPOSE_TYPE: 1,    //合成,三个一合成
        GIVE_TYPE: 2,       //赠送
    }
}

export default GameHoodleConfig;