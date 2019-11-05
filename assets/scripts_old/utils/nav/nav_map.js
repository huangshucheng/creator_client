var astar = require("astar");

cc.Class({
    extends: cc.Component,

    properties: {
        is_debug: true,

        is_revert: false,
    },

    
    onLoad: function () {
        this.graphics = this.node.addComponent(cc.Graphics);
        this.graphics.fillColor = cc.color(255, 0, 0, 255);
    },

    map_degbu_draw: function() {
        this.graphics.clear();
        var x_line = this.map.item_size * 0.5;
        var ypos = this.map.item_size * 0.5;

        for(var i = 0; i < this.map.height; i ++) {
            var xpos = x_line;
            for(var j = 0; j < this.map.width; j ++) {

                if (this.map.data[i * this.map.width + j] === 0) {
                    this.graphics.moveTo(xpos - 2, ypos + 2);
                    this.graphics.lineTo(xpos - 2, ypos - 2);
                    this.graphics.lineTo(xpos + 2, ypos - 2);
                    this.graphics.lineTo(xpos + 2, ypos + 2);
                    this.graphics.close(); // 组成一个封闭的路径
                    
                }
                
                xpos += this.map.item_size;
            }

            ypos += this.map.item_size;
        }
        this.graphics.fill();
    },

    map_degbu_draw_obs: function() {
        var x_line = this.map.item_size * 0.5;
        var ypos = this.map.item_size * 0.5;
        this.graphics.fillColor = cc.color(0, 0, 255, 255);
        for(var i = 0; i < this.map.height; i ++) {
            var xpos = x_line;
            for(var j = 0; j < this.map.width; j ++) {

                if (this.map.data[i * this.map.width + j] === 0) {
                }
                else {
                    this.graphics.moveTo(xpos - 2, ypos + 2);
                    this.graphics.lineTo(xpos - 2, ypos - 2);
                    this.graphics.lineTo(xpos + 2, ypos - 2);
                    this.graphics.lineTo(xpos + 2, ypos + 2);
                    this.graphics.close(); // 组成一个封闭的路径
                }
                
                xpos += this.map.item_size;
            }

            ypos += this.map.item_size;
        }
        this.graphics.fill();
    },

    start: function() {
        this.map = require("map_" + this.node.name);
        if (this.is_revert) {
            for(var i = 0; i < this.map.data.length; i ++) {
                this.map.data[i] = (this.map.data[i] === 1) ? 0 : 1;
            }
        }

        if(this.is_debug) {
            this.map_degbu_draw();
            this.map_degbu_draw_obs();
        }
    },

    astar_search: function(src, dst) {
        
        var src_mx = Math.floor((src.x) / this.map.item_size);
        var src_my = Math.floor((src.y) / this.map.item_size);

        var dst_mx = Math.floor((dst.x) / this.map.item_size);
        var dst_my = Math.floor((dst.y) / this.map.item_size);
        
        var path = astar.search(this.map, src_mx, src_my, dst_mx, dst_my);

        var world_offset = cc.v2(this.map.item_size * 0.5, this.map.item_size * 0.5);
        var path_pos = [];

        for(var i = 0; i < path.length; i ++) {
            var x = path[i].x * this.map.item_size;
            var y = path[i].y * this.map.item_size;

            var pos = cc.v2(world_offset.x + x, world_offset.y + y);
            path_pos.push(pos);
        }

        return path_pos;
    },
    
});
