"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, _dec, _class, ccclass, property, gamemgr;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "f4f11mp+ntIarYnDFPV/AVT", "game_mgr"); // begin game_mgr


      // 从引擎里面导入引擎的模块
      // 导入两个装饰器;
      // @开头; ccclass: 这是一个组件类, 被编辑器装载后，有ccclass来修饰的，表示是组件类; 
      // property: 修饰哪些数据成员要绑定到编辑上的;
      ccclass = _decorator.ccclass;
      property = _decorator.property; // Component 组件类的基类;
      // 组件类;
      // export / import 导入了;

      _export("gamemgr", gamemgr = (_dec = ccclass("gamemgr"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(gamemgr, _Component);

        function gamemgr() {
          babelHelpers.classCallCheck(this, gamemgr);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(gamemgr).apply(this, arguments));
        }

        babelHelpers.createClass(gamemgr, [{
          key: "test_func",
          // @property
          // private is_debug: boolean = false;
          // @property(Node)
          // private test_node: Node = null;
          // 权限 名字(参数名字：参数类型, ...): 返回值类型 {}
          // 如果没有返回值 ---> Any;
          value: function test_func(lhs) {} // 开始运行之前;

        }, {
          key: "start",
          value: function start() {} // this --->当前组件实例;
          // this.node ---> 当前组件实例所在节点;
          // 每次画面刷新的时候  组件实例.update;
          // |-------|-------| -------| ---deltaTime----|

        }, {
          key: "update",
          value: function update(deltaTime) {}
        }]);
        return gamemgr;
      }(Component)) || _class));

      cc._RF.pop(); // end game_mgr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvZ2FtZV9tZ3IudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsImdhbWVtZ3IiLCJsaHMiLCJkZWx0YVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7OzsrRUFFb0Q7OztBQUZ2QjtBQUVsRDtBQUNBO0FBQ0E7QUFFUUMsTUFBQUEsTyxHQUFzQkYsVSxDQUF0QkUsTztBQUFTQyxNQUFBQSxRLEdBQWFILFUsQ0FBYkcsUSxFQUVqQjtBQUNBO0FBQ0E7O3lCQUVhQyxPLFdBRFpGLE9BQU8sQ0FBQyxTQUFELEM7Ozs7Ozs7Ozs7OztBQUdKO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtvQ0FDaUJHLEcsRUFBbUIsQ0FFbkMsQyxDQUVEOzs7O2tDQUNlLENBR2QsQyxDQUZHO0FBQ0E7QUFHSjtBQUNBOzs7O2lDQUNRQyxTLEVBQXlCLENBRWhDOzs7UUF4QndCTCxTOztvQkFWWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gXCJjY1wiOyAvLyDku47lvJXmk47ph4zpnaLlr7zlhaXlvJXmk47nmoTmqKHlnZdcclxuXHJcbi8vIOWvvOWFpeS4pOS4quijhemlsOWZqDtcclxuLy8gQOW8gOWktDsgY2NjbGFzczog6L+Z5piv5LiA5Liq57uE5Lu257G7LCDooqvnvJbovpHlmajoo4Xovb3lkI7vvIzmnIljY2NsYXNz5p2l5L+u6aWw55qE77yM6KGo56S65piv57uE5Lu257G7OyBcclxuLy8gcHJvcGVydHk6IOS/rumlsOWTquS6m+aVsOaNruaIkOWRmOimgee7keWumuWIsOe8lui+keS4iueahDtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG4vLyBDb21wb25lbnQg57uE5Lu257G755qE5Z+657G7O1xyXG4vLyDnu4Tku7bnsbs7XHJcbi8vIGV4cG9ydCAvIGltcG9ydCDlr7zlhaXkuoY7XHJcbkBjY2NsYXNzKFwiZ2FtZW1nclwiKVxyXG5leHBvcnQgY2xhc3MgZ2FtZW1nciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gcHJpdmF0ZSBpc19kZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShOb2RlKVxyXG4gICAgLy8gcHJpdmF0ZSB0ZXN0X25vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIOadg+mZkCDlkI3lrZco5Y+C5pWw5ZCN5a2X77ya5Y+C5pWw57G75Z6LLCAuLi4pOiDov5Tlm57lgLznsbvlnosge31cclxuICAgIC8vIOWmguaenOayoeaciei/lOWbnuWAvCAtLS0+IEFueTtcclxuICAgIHB1YmxpYyB0ZXN0X2Z1bmMobGhzOiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOW8gOWni+i/kOihjOS5i+WJjTtcclxuICAgIHN0YXJ0ICgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzIC0tLT7lvZPliY3nu4Tku7blrp7kvos7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlIC0tLT4g5b2T5YmN57uE5Lu25a6e5L6L5omA5Zyo6IqC54K5O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOavj+asoeeUu+mdouWIt+aWsOeahOaXtuWAmSAg57uE5Lu25a6e5L6LLnVwZGF0ZTtcclxuICAgIC8vIHwtLS0tLS0tfC0tLS0tLS18IC0tLS0tLS18IC0tLWRlbHRhVGltZS0tLS18XHJcbiAgICB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19