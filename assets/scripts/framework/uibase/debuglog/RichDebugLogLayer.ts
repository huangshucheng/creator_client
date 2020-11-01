import UIFunction from '../../common/UIFunciton';
import UIDialog from "../UIDialog";
import RichDebug from './RichDebug';
import DialogManager from '../../manager/DialogManager';
import { SDKAdapter } from '../../utils/SDKAdapter';

const { ccclass, property } = cc._decorator;

@ccclass
class RichDebugLogLayer extends UIDialog {

    _min: number = 0;
    _max: number = 0;
    _perLoad: number = 50; //每次加载多少条进来，而不是一次全部加载
    _table_view: cc.ScrollView = null;
    _cellPool:cc.NodePool = null;

    static show_layer() {
        let layer = UIFunction.getInstance().add_prefab_to_scene("ui_prefabs/debug/RichDebugLogPanel", "RichDebugLogLayer");
        return layer;
    }

    onLoad(){
        super.onLoad();

        //创建对象池
        this._cellPool = new cc.NodePool();
        let initCount = 100;
        for (let i = 0; i < initCount; ++i) {
            let cellPrefab = this.get_res("ui_prefabs/debug/RichDebugLogItem", cc.Prefab)
            let cellNode = cc.instantiate(cellPrefab); // 创建节点
            this._cellPool.put(cellNode); // 通过 put 接口放入对象池
        }
    }

    onDestroy() {
        cc.game.off(RichDebug.UPDATE_DEBUG_INFO_KEY, this.update_debug_log_info.bind(this), this);
    }

    start () {
        super.start();
        this.initUI();
        cc.game.on(RichDebug.UPDATE_DEBUG_INFO_KEY, this.update_debug_log_info.bind(this), this);
        this.init_logs();
    }

    add_button_event_listener(){
        this.add_click_event(this.view["btn_close"], this.on_click_close.bind(this));
        this.add_click_event(this.view["btn_clear"], this.on_click_clear.bind(this));
        this.add_click_event(this.view["btn_copy"], this.on_click_copy.bind(this));
        this.add_check_click(this.view["toggle_frame"], this.on_toggle_click.bind(this));
    }

    initUI(){
        let scrollviewNode = this.view["scroll_log"]
        if (scrollviewNode){
            this._table_view = scrollviewNode.getComponent(cc.ScrollView);
            if (this._table_view) {
                this._table_view.inertia = true;
                // this._table_view.node.on('scroll-to-top', this.onScrollToTop.bind(this), this);
                this._table_view.node.on('scroll-to-bottom', this.onScrollToBottom.bind(this), this);
                this._table_view.scrollEvents.splice(0);

                let scrollViewEventHandler = new cc.Component.EventHandler();
                scrollViewEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
                scrollViewEventHandler.component = "RichDebugLogLayer";//这个是代码文件名
                scrollViewEventHandler.handler = "on_scrll_to_top";
                this._table_view.scrollEvents.push(scrollViewEventHandler);
            }
        }

        UIFunction.getInstance().set_checked(this.view["toggle_frame"], !cc.debug.isDisplayStats());
    }

    get_cell(){
        let cellNode = null;
        if (this._cellPool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
            cellNode = this._cellPool.get();
        } else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
            let cellPrefab = this.get_res("ui_prefabs/debug/RichDebugLogItem", cc.Prefab)
            cellNode = cc.instantiate(cellPrefab);
        }
        return cellNode;
    }

    on_scrll_to_top(scrollview:cc.ScrollView, eventType:cc.ScrollView.EventType, customEventData:any){
        if(eventType == cc.ScrollView.EventType.BOUNCE_TOP){
            if (this._min == 1) return;
            let logs = RichDebug.get_log_data();
            let max = this._min
            this._min = this._min - this._perLoad > 1 ? this._min - this._perLoad : 1;
            for (let idx = this._min; idx <= max; idx++) {
                let data = logs[idx - 1];
                this.add_log(data, idx);
            }
            if (this._table_view){
                this._table_view.scrollToTop();
            }
        }
    }

    onScrollToTop(scollview:any){
    //     if (this._min == 1) return;
    //     let logs = RichDebug.get_log_data();
    //     let max = this._min
    //     this._min = this._min - this._perLoad > 1 ? this._min - this._perLoad : 1;
    //     for (let idx = this._min; idx <= max; idx++) {
    //         let data = logs[idx - 1];
    //         this.add_log(data, idx);
    //     }
    }

    onScrollToBottom(){

    }

    on_click_close(sender: cc.Component){
        this.close();
    }

    on_toggle_click(toggle:any,type:any){
        if(UIFunction.getInstance().is_checked(toggle)){
            cc.debug.setDisplayStats(false);
        }else{
            cc.debug.setDisplayStats(true);
        }
    }

    on_click_clear(sender:cc.Component){
        RichDebug.clear_log_data();
    }

    on_click_copy(sender:cc.Component){
        let copy_str = "";
        let log_data = RichDebug.get_log_data();
        if (log_data.length > 0){
            log_data.forEach(v=> {
                copy_str = copy_str + (String(v.value) || "") + "\n";
            });
        }

        SDKAdapter.copyStringToClipboard(copy_str,function(success:boolean) {
            if(success){
                DialogManager.getInstance().show_weak_hint("复制成功!");
            }else{
                DialogManager.getInstance().show_weak_hint("复制失败!");
            }
        });
    }

    update_debug_log_info(data:any){
        if(data){
            this._max++;
            this.add_log(data, this._max);
        }else{
            let logs = RichDebug.get_log_data();
            let len = logs.length;
            if(len <= 0 ){
                this._max = 0;
                this._min = 0;
                if (this._table_view){
                    this._table_view.content.removeAllChildren();
                }
            }
        }
        this.delay_scroll_to_bottom();
    }

    delay_scroll_to_bottom(){
        if (this._table_view) {
            let delay = cc.delayTime(0.1);
            let callFunc = cc.callFunc(function () {
                this._table_view.scrollToBottom();
            }.bind(this));
            this._table_view.node.runAction(cc.sequence(delay, callFunc));
        }
        cc.log("hcccccc>>delay_scroll_to_bottom");
    }

    init_logs() {
        let logs = RichDebug.get_log_data();
        this._max = logs.length;
        this._min = logs.length - this._perLoad > 1 ? logs.length - this._perLoad : 1;
        for (let idx = this._min; idx <= this._max; idx++) {
            let data = logs[idx - 1];
            this.add_log(data, idx);
        }
        this.delay_scroll_to_bottom();
    }

    add_log(data:any, zIndex:number){
        if(!data){
            return;
        }
        let data_type = data.type;
        let data_value = data.value;
        if(data_type == undefined || data_value == undefined){
            return;
        }
        
        let color = null;
        switch (data_type) {
            case "log":
            case "debug":
                color = cc.color(255, 255, 255, 255);
                break;
            case "warn":
                color = cc.color(255, 255, 0, 255);
                break;
            case "error":
                color = cc.color(255, 0, 0, 255);
                break;
        }
        
        let cellNode:cc.Node = this.get_cell();
        if (this._table_view && cellNode){
            cellNode.zIndex = zIndex;
            let richText = cellNode.getComponent(cc.Label);
            if(richText){
                if(color) richText.node.color = color;
                richText.string = data_value;
                this._table_view.content.addChild(cellNode);
    
                if (zIndex < this._max) {
                    this._table_view.content.sortAllChildren();
                }
            }
        }
    }
}

export = RichDebugLogLayer;