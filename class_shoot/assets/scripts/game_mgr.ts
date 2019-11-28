import { _decorator, Component, Node } from "cc"; // 从引擎里面导入引擎的模块

// 导入两个装饰器;
// @开头; ccclass: 这是一个组件类, 被编辑器装载后，有ccclass来修饰的，表示是组件类; 
// property: 修饰哪些数据成员要绑定到编辑上的;

const { ccclass, property } = _decorator;

// Component 组件类的基类;
// 组件类;
// export / import 导入了;
@ccclass("gamemgr")
export class gamemgr extends Component {
    
    // @property
    // private is_debug: boolean = false;

    // @property(Node)
    // private test_node: Node = null;

    // 权限 名字(参数名字：参数类型, ...): 返回值类型 {}
    // 如果没有返回值 ---> Any;
    public test_func(lhs: number): void {

    }
    
    // 开始运行之前;
    start (): void {
        // this --->当前组件实例;
        // this.node ---> 当前组件实例所在节点;
    }

    // 每次画面刷新的时候  组件实例.update;
    // |-------|-------| -------| ---deltaTime----|
    update (deltaTime: number): void {
        
    }
}
