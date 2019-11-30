
class EventManager extends cc.EventTarget {
    public static readonly instance: EventManager = new EventManager();

    private constructor() {
        super();
    }

    public static getInstance(){
        return EventManager.instance;
    }

    ////////////////////// public
    static emit(eventName: string, data?: any){
        EventManager.getInstance()._emit(eventName,data);
    }

    static on(type:string, target:any, callback:any, useCapture?:boolean){
        EventManager.getInstance()._on(type, callback, target, useCapture);
    }

    ////////////////////// private
    private _on(type:string, callback:any, target?:any, useCapture?:boolean){
        super.on(type, callback, target, useCapture);
    }

    private _emit(eventName: string, data?: any) {
        let e = new cc.Event.EventCustom(eventName, true)
        e.setUserData(data)
        super.dispatchEvent(e);
    };
}

export default EventManager