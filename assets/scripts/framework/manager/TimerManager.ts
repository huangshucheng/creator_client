export class TimerManager {

    private static _instance: TimerManager;
    
    private static __id: number = new Date().getTime();

   constructor() {
        this.init();
    }

    public static getInstance(): TimerManager {
        if (!TimerManager._instance) {
            TimerManager._instance = new TimerManager()
        }
        return this._instance;
    }

    private init() {
        // cc.director.getScheduler().enableForTarget(this);
        this["_id"] = `Scheduler${TimerManager.__id++}`;
    }

    public runTimer(handler: Function, interval: number, repeat: number, delay: number, pause: boolean) {
        return this.schedule(handler, interval, repeat, delay, pause);
    }

    public runDelayTimer(handler: (dt: number) => void, delayTime: number = 0.01) {
        return this.scheduleOnce(handler, delayTime);
    }

    public runLoopTimer(handler: (dt: number) => void, intervlTime: number = 0.02, delay?: number) {
        return this.schedule(handler, intervlTime ? intervlTime : 0.02, cc.macro.REPEAT_FOREVER, delay ? delay : 0, false);
    }

    public removeTimer(handler: Function) {
        this.unschedule(handler);
    }

    public removeAllTimers() {
        cc.director.getScheduler().unscheduleAllForTarget(this)
    }

    public pause() {
        cc.director.getScheduler().pauseTarget(this)
    }

    public resume() {
        cc.director.getScheduler().resumeTarget(this)
    }

    private scheduleOnce(handler, delay) {
        this.schedule(handler, 0, 0, delay, false);
        return handler;
    }

    private schedule(handler: Function, interval: number, repeat: number, delay: number, pause: boolean) {
        cc.director.getScheduler().schedule(handler, this, interval, repeat, delay, pause);
        return handler;
    }

    private unschedule(handler) {
        if (!handler) return;
        cc.director.getScheduler().unschedule(handler, this);
    }

}