var nav_map = require("nav_map");

var State = {
    Idle: 0,
    Walk: 1,
};

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        speed: 100,

        game_map: {
            type: nav_map,
            default: null,
        }
    },

    // use this for initialization
    onLoad: function () {
        this.state = State.Idle;
        this.walk_total = 0.0;
        this.walk_time = 0;
    },

    nav_to_map: function(dst_wpos) {
        if(this.game_map === null) {
            return;
        }
        
        var src_wpos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        var src = this.game_map.node.convertToNodeSpaceAR(src_wpos);
        var dst = this.game_map.node.convertToNodeSpaceAR(dst_wpos);

        this.road_set = this.game_map.astar_search(src, dst);
        
        if(!this.road_set || this.road_set.length <= 1) {
            this.state = State.Idle;
            return;
        }

        this.walk_next = 1;
        this._walk_to_next();
    },

    stop_nav: function() {
        this.state = State.Idle;
    },

    _walk_to_next: function() {
        if(!this.road_set || this.walk_next >= this.road_set.length) {
            this.state = State.Idle;
            return;
        }
        var src = this.node.getPosition();
        var w_pos = this.game_map.node.convertToWorldSpaceAR(this.road_set[this.walk_next]);
        var dst = this.node.parent.convertToNodeSpaceAR(w_pos);

        var dir = dst.sub(src);
        var len = (dir.mag());

        this.vx = (dir.x / len) * this.speed;
        this.vy = (dir.y / len) * this.speed;

        this.walk_total = len / this.speed;
        this.walk_time = 0;
        this.state = State.Walk;
    }, 

    _walk_update: function(dt) {
        if(this.state != State.Walk) {
            return;
        }

        this.walk_time += dt;
        if (this.walk_time > this.walk_total) {
            dt -= (this.walk_time - this.walk_total);
        }

        var sx = this.vx * dt;
        var sy = this.vy * dt;
        
        this.node.x += sx;
        this.node.y += sy;

        if (this.walk_time > this.walk_total) {
            this.walk_next ++;
            this._walk_to_next();
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if(this.state == State.Walk) {
            this._walk_update(dt);
        }
    },
});
