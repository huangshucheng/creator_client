"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Node, systemEvent, Vec2, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, fpsctrl;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      systemEvent = _cc.systemEvent;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "42a6bD1Z3dJLIeDqs9ONMEe", "fps_ctrl"); // begin fps_ctrl


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("fpsctrl", fpsctrl = (_dec = ccclass("fpsctrl"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(fpsctrl, _Component);

        function fpsctrl() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, fpsctrl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(fpsctrl)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this.center_pos = cc.v2(0, 0);
          _this.dir = cc.v2(0, 0);
          _this.move_speed = 20;
          _this.hor_degree = 0;
          _this.ver_degree = 0;
          babelHelpers.initializerDefineProperty(_this, "eye", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "rhs", _descriptor2, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(fpsctrl, [{
          key: "start",
          value: function start() {
            systemEvent.on(Node.EventType.TOUCH_START, this.on_touch_start, this);
            systemEvent.on(Node.EventType.TOUCH_END, this.on_touch_end, this);
            systemEvent.on(Node.EventType.TOUCH_MOVE, this.on_touch_moved, this);
            systemEvent.on(Node.EventType.TOUCH_CANCEL, this.on_touch_end, this);
          }
        }, {
          key: "on_touch_start",
          value: function on_touch_start(e) {
            var screen_pos = e.getLocation();
            this.center_pos.x = screen_pos.x;
            this.center_pos.y = screen_pos.y;
            this.dir.x = 0;
            this.dir.y = 0;
          }
        }, {
          key: "on_touch_end",
          value: function on_touch_end(e) {
            this.dir.x = 0;
            this.dir.y = 0;
          }
        }, {
          key: "on_touch_moved",
          value: function on_touch_moved(e) {
            var screen_pos = e.getLocation();
            var dir = cc.v2(0, 0);
            Vec2.subtract(dir, screen_pos, this.center_pos);
            var len = dir.length();

            if (len <= 0) {
              return;
            }

            this.dir.x = dir.x / len; // cos

            this.dir.y = dir.y / len; // sin
          }
        }, {
          key: "look_update",
          value: function look_update(dt) {
            var hor_speed = this.move_speed * this.dir.x; // speed * cos;

            var ver_speed = this.move_speed * this.dir.y; // speed * sin;

            this.hor_degree -= hor_speed * dt; // [-360, 360]

            this.hor_degree = this.hor_degree < -360 ? -360 : this.hor_degree;
            this.hor_degree = this.hor_degree > 360 ? 360 : this.hor_degree;
            this.ver_degree += ver_speed * dt; // 抬头 [45, -45]

            this.ver_degree = this.ver_degree < -45 ? -45 : this.ver_degree;
            this.ver_degree = this.ver_degree > 45 ? 45 : this.ver_degree; // 根据摇杆的x 控制 水平视角移动, 绕 y 轴旋转;

            var e_rot = this.node.eulerAngles;
            e_rot.y = this.hor_degree;
            this.node.eulerAngles = e_rot; // end 
            // 根据摇杆的y分量，来控制 垂直视角移动;

            e_rot = this.eye.eulerAngles;
            e_rot.x = this.ver_degree;
            this.eye.eulerAngles = e_rot;
            e_rot = this.rhs.eulerAngles;
            e_rot.x = this.ver_degree;
            this.rhs.eulerAngles = e_rot; // end 
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this.dir.x === 0 && this.dir.y === 0) {
              return;
            }

            this.look_update(deltaTime);
          }
        }]);
        return fpsctrl;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "eye", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "rhs", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end fps_ctrl

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvZnBzX2N0cmwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJzeXN0ZW1FdmVudCIsIlZlYzIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJmcHNjdHJsIiwiY2VudGVyX3BvcyIsImNjIiwidjIiLCJkaXIiLCJtb3ZlX3NwZWVkIiwiaG9yX2RlZ3JlZSIsInZlcl9kZWdyZWUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwib25fdG91Y2hfc3RhcnQiLCJUT1VDSF9FTkQiLCJvbl90b3VjaF9lbmQiLCJUT1VDSF9NT1ZFIiwib25fdG91Y2hfbW92ZWQiLCJUT1VDSF9DQU5DRUwiLCJlIiwic2NyZWVuX3BvcyIsImdldExvY2F0aW9uIiwieCIsInkiLCJzdWJ0cmFjdCIsImxlbiIsImxlbmd0aCIsImR0IiwiaG9yX3NwZWVkIiwidmVyX3NwZWVkIiwiZV9yb3QiLCJub2RlIiwiZXVsZXJBbmdsZXMiLCJleWUiLCJyaHMiLCJkZWx0YVRpbWUiLCJsb29rX3VwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsVyxPQUFBQSxXO0FBQTBCQyxNQUFBQSxJLE9BQUFBLEk7OzsrRUFFUzs7O0FBRGpFQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROzt5QkFHSkMsTyxXQURaRixPQUFPLENBQUMsU0FBRCxDLFVBVUhDLFFBQVEsQ0FBQ0osSUFBRCxDLFVBR1JJLFFBQVEsQ0FBQ0osSUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFYRE0sVSxHQUFtQkMsRUFBRSxDQUFDQyxFQUFILENBQU0sQ0FBTixFQUFTLENBQVQsQztnQkFDbkJDLEcsR0FBWUYsRUFBRSxDQUFD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LEVBQTNCLEdBQWdDLEtBQUtBLFVBQXZEO0FBQ0EsaUJBQUtBLFVBQUwsR0FBbUIsS0FBS0EsVUFBTCxHQUFrQixFQUFuQixHQUF5QixFQUF6QixHQUE4QixLQUFLQSxVQUFyRCxDQVZrQyxDQVlsQzs7QUFDQSxnQkFBSXFCLEtBQVcsR0FBRyxLQUFLQyxJQUFMLENBQVVDLFdBQTVCO0FBQ0FGLFlBQUFBLEtBQUssQ0FBQ1AsQ0FBTixHQUFVLEtBQUtmLFVBQWY7QUFDQSxpQkFBS3VCLElBQUwsQ0FBVUMsV0FBVixHQUF3QkYsS0FBeEIsQ0Fma0MsQ0FnQmxDO0FBS0E7O0FBQ0FBLFlBQUFBLEtBQUssR0FBRyxLQUFLRyxHQUFMLENBQVNELFdBQWpCO0FBQ0FGLFlBQUFBLEtBQUssQ0FBQ1IsQ0FBTixHQUFVLEtBQUtiLFVBQWY7QUFDQSxpQkFBS3dCLEdBQUwsQ0FBU0QsV0FBVCxHQUF1QkYsS0FBdkI7QUFFQUEsWUFBQUEsS0FBSyxHQUFHLEtBQUtJLEdBQUwsQ0FBU0YsV0FBakI7QUFDQUYsWUFBQUEsS0FBSyxDQUFDUixDQUFOLEdBQVUsS0FBS2IsVUFBZjtBQUNBLGlCQUFLeUIsR0FBTCxDQUFTRixXQUFULEdBQXVCRixLQUF2QixDQTVCa0MsQ0E2QmxDO0FBRUg7OztpQ0FFTUssUyxFQUF5QjtBQUM1QixnQkFBSSxLQUFLN0IsR0FBTCxDQUFTZ0IsQ0FBVCxLQUFlLENBQWYsSUFBb0IsS0FBS2hCLEdBQUwsQ0FBU2lCLENBQVQsS0FBZSxDQUF2QyxFQUEwQztBQUN0QztBQUNIOztBQUVELGlCQUFLYSxXQUFMLENBQWlCRCxTQUFqQjtBQUNIOzs7UUF4RndCdkMsUzs7Ozs7aUJBVUwsSTs7Ozs7OztpQkFHQSxJOzs7O29CQWZOIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBzeXN0ZW1FdmVudCwgVG91Y2gsIFZlYzMsIFZlYzJ9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJmcHNjdHJsXCIpXHJcbmV4cG9ydCBjbGFzcyBmcHNjdHJsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgY2VudGVyX3BvczogVmVjMiA9IGNjLnYyKDAsIDApO1xyXG4gICAgcHJpdmF0ZSBkaXI6IFZlYzIgPSBjYy52MigwLCAwKTsgLy8g5pa55ZCRXHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlX3NwZWVkOiBudW1iZXIgPSAyMDsgLy8gIOinhuinkuenu+WKqOeahOmAn+W6pjtcclxuICAgIHByaXZhdGUgaG9yX2RlZ3JlZTogbnVtYmVyID0gMDsgLy8g5rC05bmz6KeG6KeS56e75Yqo55qE5oC75ZKMO1xyXG4gICAgcHJpdmF0ZSB2ZXJfZGVncmVlOiBudW1iZXIgPSAwOyAvLyDlnoLnm7TnmoTop4bop5I7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShOb2RlKVxyXG4gICAgcHJpdmF0ZSBleWU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShOb2RlKVxyXG4gICAgcHJpdmF0ZSByaHM6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uX3RvdWNoX3N0YXJ0LCB0aGlzKTtcclxuICAgICAgICBzeXN0ZW1FdmVudC5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25fdG91Y2hfZW5kLCB0aGlzKTtcclxuICAgICAgICBzeXN0ZW1FdmVudC5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uX3RvdWNoX21vdmVkLCB0aGlzKTtcclxuICAgICAgICBzeXN0ZW1FdmVudC5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25fdG91Y2hfZW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbl90b3VjaF9zdGFydChlOiBUb3VjaCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBzY3JlZW5fcG9zOiBWZWMyID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuY2VudGVyX3Bvcy54ID0gc2NyZWVuX3Bvcy54O1xyXG4gICAgICAgIHRoaXMuY2VudGVyX3Bvcy55ID0gc2NyZWVuX3Bvcy55O1xyXG4gICAgICAgIHRoaXMuZGlyLnggPSAwOyBcclxuICAgICAgICB0aGlzLmRpci55ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbl90b3VjaF9lbmQoZTogVG91Y2gpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpci54ID0gMDtcclxuICAgICAgICB0aGlzLmRpci55ID0gMDsgXHJcbiAgICB9XHJcblxyXG4gICAgb25fdG91Y2hfbW92ZWQoZTogVG91Y2gpOiB2b2lkIHtcclxuICAgICAgICB2YXIgc2NyZWVuX3BvczogVmVjMiA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB2YXIgZGlyOiBWZWMyID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgVmVjMi5zdWJ0cmFjdChkaXIsIHNjcmVlbl9wb3MsIHRoaXMuY2VudGVyX3Bvcyk7XHJcblxyXG4gICAgICAgIHZhciBsZW4gPSBkaXIubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbiA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlyLnggPSBkaXIueCAvIGxlbjsgIC8vIGNvc1xyXG4gICAgICAgIHRoaXMuZGlyLnkgPSBkaXIueSAvIGxlbjsgIC8vIHNpblxyXG4gICAgfSAgIFxyXG5cclxuICAgIHByaXZhdGUgbG9va191cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHZhciBob3Jfc3BlZWQ6IG51bWJlciA9IHRoaXMubW92ZV9zcGVlZCAqIHRoaXMuZGlyLng7IC8vIHNwZWVkICogY29zO1xyXG4gICAgICAgIHZhciB2ZXJfc3BlZWQ6IG51bWJlciA9IHRoaXMubW92ZV9zcGVlZCAqIHRoaXMuZGlyLnk7IC8vIHNwZWVkICogc2luO1xyXG5cclxuICAgICAgICB0aGlzLmhvcl9kZWdyZWUgLT0gKGhvcl9zcGVlZCAqIGR0KTsgLy8gWy0zNjAsIDM2MF1cclxuICAgICAgICB0aGlzLmhvcl9kZWdyZWUgPSAodGhpcy5ob3JfZGVncmVlIDwgLTM2MCkgPyAtMzYwOiB0aGlzLmhvcl9kZWdyZWU7XHJcbiAgICAgICAgdGhpcy5ob3JfZGVncmVlID0gKHRoaXMuaG9yX2RlZ3JlZSA+IDM2MCkgPyAzNjA6IHRoaXMuaG9yX2RlZ3JlZTtcclxuXHJcbiAgICAgICAgdGhpcy52ZXJfZGVncmVlICs9ICh2ZXJfc3BlZWQgKiBkdCk7IC8vIOaKrOWktCBbNDUsIC00NV1cclxuICAgICAgICB0aGlzLnZlcl9kZWdyZWUgPSAodGhpcy52ZXJfZGVncmVlIDwgLTQ1KSA/IC00NSA6IHRoaXMudmVyX2RlZ3JlZTtcclxuICAgICAgICB0aGlzLnZlcl9kZWdyZWUgPSAodGhpcy52ZXJfZGVncmVlID4gNDUpID8gNDUgOiB0aGlzLnZlcl9kZWdyZWU7XHJcblxyXG4gICAgICAgIC8vIOagueaNruaRh+adhueahHgg5o6n5Yi2IOawtOW5s+inhuinkuenu+WKqCwg57uVIHkg6L205peL6L2sO1xyXG4gICAgICAgIHZhciBlX3JvdDogVmVjMyA9IHRoaXMubm9kZS5ldWxlckFuZ2xlcztcclxuICAgICAgICBlX3JvdC55ID0gdGhpcy5ob3JfZGVncmVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IGVfcm90O1xyXG4gICAgICAgIC8vIGVuZCBcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8g5qC55o2u5pGH5p2G55qEeeWIhumHj++8jOadpeaOp+WItiDlnoLnm7Top4bop5Lnp7vliqg7XHJcbiAgICAgICAgZV9yb3QgPSB0aGlzLmV5ZS5ldWxlckFuZ2xlcztcclxuICAgICAgICBlX3JvdC54ID0gdGhpcy52ZXJfZGVncmVlO1xyXG4gICAgICAgIHRoaXMuZXllLmV1bGVyQW5nbGVzID0gZV9yb3Q7XHJcblxyXG4gICAgICAgIGVfcm90ID0gdGhpcy5yaHMuZXVsZXJBbmdsZXM7XHJcbiAgICAgICAgZV9yb3QueCA9IHRoaXMudmVyX2RlZ3JlZTtcclxuICAgICAgICB0aGlzLnJocy5ldWxlckFuZ2xlcyA9IGVfcm90O1xyXG4gICAgICAgIC8vIGVuZCBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyLnggPT09IDAgJiYgdGhpcy5kaXIueSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvb2tfdXBkYXRlKGRlbHRhVGltZSk7XHJcbiAgICB9XHJcbn1cclxuIl19