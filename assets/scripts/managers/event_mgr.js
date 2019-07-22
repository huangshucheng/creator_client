var event_mgr = {
    // 名字: [订阅1, 订阅2, .. {caller, func}]
    events_map: {

    },

    init() {

    },

    // func(event_name, udata)
    add_event_listenner(event_name, caller, func) {
        if (!this.events_map[event_name]) {
            this.events_map[event_name] = [];
        }

        var event_queue = this.events_map[event_name];
        event_queue.push({
            caller: caller,
            func: func
        });
    },

    remove_event_listenner(event_name, caller, func) {
        if (!this.events_map[event_name]) {
            return;
        }

        var event_queue = this.events_map[event_name];
        for(var i = 0; i < event_queue.length; i ++) {
            var obj = event_queue[i];
            if (obj.caller == caller && obj.func == func) {
                event_queue.splice(i, 1);
                break;
            }
        }

        if (event_queue.length <= 0) {
            this.events_map[event_name] = null;
        }
    },

    dispatch_event(event_name, udata) {
        if (!this.events_map[event_name]) {
            return;
        }

        var event_queue = this.events_map[event_name];
        for(var i = 0; i < event_queue.length; i ++) {
            var obj = event_queue[i];
            obj.func.call(obj.caller, event_name, udata);
        }
    },
};

module.exports = event_mgr;
