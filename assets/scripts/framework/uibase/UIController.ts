import UIFunction from '../common/UIFunciton';
import { ResourceManager } from '../manager/ResourceManager';
import NetWork from '../network/NetWork';

interface View {
    [propName: string]: cc.Node;
}

//协议id: 回调函数
interface CmdHandlerMap {
    [cmdtype: number]: Function;
}

export default abstract class UIController extends cc.Component {
    view: View = {};
    
    _cmd_handler_map: CmdHandlerMap = {};
    _winSize:cc.Size = new cc.Size(1920,1080);
    
    //只保存一层UI名字，重复的会被覆盖，要查找相同名字的子节点，需要手动查找（getChildByName）
    private load_all_object(root: cc.Node, path: string) {
        for (let i = 0; i < root.childrenCount; i++) {
            this.view[root.children[i].name] = root.children[i];
            this.load_all_object(root.children[i], path + root.children[i].name + "/");
        }
    }

    //执行script_name 的func_name方法
    do_on_view(script_name: string, func_name: string, ...optionalParams: any[]) {
        let script = this.get_script(script_name);
        if (script) {
            let func = script[func_name];
            if (func && typeof (func) === "function") {
                func.call(script, ...optionalParams);
            } else {
                console.warn("script:[", script_name, "] no function:", func_name);
            }
        }
    }

    //子类需要手动调用super.onLoad()
    onLoad() {
        UIFunction.getInstance().resize_screen()
        this.load_all_object(this.node, "");
        this.view[this.node.name] = this.node;
        // console.log("hcc>>onLoad>>" , this.node.name);
    }

    start(){
        this.add_cmd_handler_map();
        this.add_event_dispatcher();
        this.add_button_event_listener();
    }

    onDestroy(){
        //默认自动删除当前监听对象
        this.remove_protocol_delegate();
    }

    //客户端消息通知
    add_event_dispatcher(){
    }

    //添加协议和回调函数
    add_cmd_handler_map(){
    }

    //按钮点击事件
    add_button_event_listener(){
    }

    //监听网络消息
    add_protocol_delegate(){
        NetWork.getInstance().add_protocol_delegate(this, this.on_recv_server_message.bind(this));
    }

    //删除当前监听对象
    remove_protocol_delegate(){
        NetWork.getInstance().remove_protocol_delegate(this);
    }

    //网络协议消息接收,子类自己处理数据
    on_recv_server_message(stype:number, ctype:number, body:any){
        console.log("hcc>>on_recv_server_message: stype " , stype , " ,ctype:" , ctype , " ,body: " , body);
    }

    add_script(script:string){
        return this.node.addComponent(script);
    }

    get_script(script:string){
        return this.node.getComponent(script)
    }

    add_click_event(target: cc.Node, callback: Function) {
        UIFunction.getInstance().add_click_event(target, callback, this)
    }

    add_click_evenet_with_data(target: cc.Node, callbackName:string, customEventData?: any) {
        UIFunction.getInstance().add_click_evenet_with_data(target, callbackName, this, customEventData);
    }
    
    //复选框事件
    add_check_click(target:cc.Node, callback:Function){
        UIFunction.getInstance().add_check_click(target, callback, this);
    }

    add_slide_event(target: cc.Node, callback: Function) {
        UIFunction.getInstance().add_slide_event(target, callback, this)
    }

    is_checked(target:cc.Node){
        return UIFunction.getInstance().is_checked(target);
    }

    add_to_node(parent: cc.Node, prefab:any, scriptName?: string){
        return UIFunction.getInstance().add_to_node(parent, prefab,scriptName)
    }

    add_to_scene(prefab: cc.Prefab, scriptName: string = null): cc.Node {
        return UIFunction.getInstance().add_to_scene(prefab, scriptName)
    }

    add_prefab_to_scene(path:string, scriptName:string){
        return UIFunction.getInstance().add_prefab_to_scene(path, scriptName);
    }

    set_string(target: cc.Node, str: string) {
        UIFunction.getInstance().set_string(target, str)
    }

    set_rich_string(target:cc.Node, str:string){
        UIFunction.getInstance().set_rich_string(target, str)
    }

    get_string(target: cc.Node){
        return UIFunction.getInstance().get_string(target);
    }

    get_editbox_string(target: cc.Node){
        return UIFunction.getInstance().get_editbox_string(target)
    }

    set_editbox_string(target: cc.Node, str:string){
        UIFunction.getInstance().set_editbox_string(target,str);
    }

    set_sprite(target: cc.Node, str: string) {
        let texturePath = "textures/" + str
        UIFunction.getInstance().set_sprite(target, texturePath);
    }

    async set_sprite_asyc(target: cc.Node, str: string){
        let texturePath = "textures/" + str
        return await UIFunction.getInstance().set_sprite_async(target, texturePath);
    }

    set_sprite_from_atlas(target: cc.Node, strAtlas: string, str: string) {
        let texturePath = "textures/" + strAtlas
        UIFunction.getInstance().set_sprite_from_atlas(target, texturePath, str);
    }

    set_visible(target: cc.Node, visible:boolean){
        UIFunction.getInstance().set_visible(target,visible);
    }

    get_visible(target: cc.Node){
        return UIFunction.getInstance().get_visible(target);
    }

    seek_child_by_name(target:cc.Node, name:string){
        return UIFunction.getInstance().seek_widget_by_name(target,name)
    }

    set_headimg_url(target: cc.Node, url: string, fixWidth?:number){
        UIFunction.getInstance().set_headimg_url(target, url, fixWidth);
    }

    set_posX(target: cc.Node, posx:number){
        if(!target || !cc.isValid(target)){
            return;
        }
        target.x = posx;
    }

    set_posY(target: cc.Node, posy: number) {
        if (!target || !cc.isValid(target)) {
            return;
        }
        target.y = posy;
    }

    set_pos(target:cc.Node, posx:number, posy:number){
        if (!target || !cc.isValid(target)) {
            return;
        }
        target.x = posx;
        target.y = posy;
    }

    get_res(resPath:string, resType:any){
        return ResourceManager.getInstance().getRes(resPath, resType);
    }

}