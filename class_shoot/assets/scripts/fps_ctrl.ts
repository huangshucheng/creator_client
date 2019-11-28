import { _decorator, Component, Node, systemEvent, Touch, Vec3, Vec2} from "cc";
const { ccclass, property } = _decorator;

@ccclass("fpsctrl")
export class fpsctrl extends Component {
    private center_pos: Vec2 = cc.v2(0, 0);
    private dir: Vec2 = cc.v2(0, 0); // 方向

    private move_speed: number = 20; //  视角移动的速度;
    private hor_degree: number = 0; // 水平视角移动的总和;
    private ver_degree: number = 0; // 垂直的视角;


    @property(Node)
    private eye: Node = null;

    @property(Node)
    private rhs: Node = null;

    start(): void {
        systemEvent.on(Node.EventType.TOUCH_START, this.on_touch_start, this);
        systemEvent.on(Node.EventType.TOUCH_END, this.on_touch_end, this);
        systemEvent.on(Node.EventType.TOUCH_MOVE, this.on_touch_moved, this);
        systemEvent.on(Node.EventType.TOUCH_CANCEL, this.on_touch_end, this);
    }

    on_touch_start(e: Touch): void {
        var screen_pos: Vec2 = e.getLocation();
        this.center_pos.x = screen_pos.x;
        this.center_pos.y = screen_pos.y;
        this.dir.x = 0; 
        this.dir.y = 0;
    }

    on_touch_end(e: Touch): void {
        this.dir.x = 0;
        this.dir.y = 0; 
    }

    on_touch_moved(e: Touch): void {
        var screen_pos: Vec2 = e.getLocation();
        var dir: Vec2 = cc.v2(0, 0);
        Vec2.subtract(dir, screen_pos, this.center_pos);

        var len = dir.length();
        if (len <= 0) {
            return;
        }

        this.dir.x = dir.x / len;  // cos
        this.dir.y = dir.y / len;  // sin
    }   

    private look_update(dt: number): void {
        var hor_speed: number = this.move_speed * this.dir.x; // speed * cos;
        var ver_speed: number = this.move_speed * this.dir.y; // speed * sin;

        this.hor_degree -= (hor_speed * dt); // [-360, 360]
        this.hor_degree = (this.hor_degree < -360) ? -360: this.hor_degree;
        this.hor_degree = (this.hor_degree > 360) ? 360: this.hor_degree;

        this.ver_degree += (ver_speed * dt); // 抬头 [45, -45]
        this.ver_degree = (this.ver_degree < -45) ? -45 : this.ver_degree;
        this.ver_degree = (this.ver_degree > 45) ? 45 : this.ver_degree;

        // 根据摇杆的x 控制 水平视角移动, 绕 y 轴旋转;
        var e_rot: Vec3 = this.node.eulerAngles;
        e_rot.y = this.hor_degree;
        this.node.eulerAngles = e_rot;
        // end 




        // 根据摇杆的y分量，来控制 垂直视角移动;
        e_rot = this.eye.eulerAngles;
        e_rot.x = this.ver_degree;
        this.eye.eulerAngles = e_rot;

        e_rot = this.rhs.eulerAngles;
        e_rot.x = this.ver_degree;
        this.rhs.eulerAngles = e_rot;
        // end 

    }

    update(deltaTime: number): void {
        if (this.dir.x === 0 && this.dir.y === 0) {
            return;
        }

        this.look_update(deltaTime);
    }
}
