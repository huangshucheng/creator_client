var nav_agent = require("nav_agent");

cc.Class({
    extends: cc.Component,

    properties: {
        player: {
            type: nav_agent,
            default: null,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            this.player.nav_to_map(e.getLocation());
        }, this);
    },

    // update (dt) {},
});
