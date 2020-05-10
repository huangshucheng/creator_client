import UIFunction from '../common/UIFunciton';

interface View {
    [propName: string]: cc.Node;
}

export default abstract class UIController extends cc.Component {
    view: View = {};
    _winSize:cc.Size = new cc.Size(1920,1080);
    //只保存一层UI名字，重复的会被覆盖，要查找相同名字的子节点，需要手动查找（getChildByName）
    private load_all_object(root: cc.Node, path: string) {
        for (let i = 0; i < root.childrenCount; i++) {
            this.view[root.children[i].name] = root.children[i];
            this.load_all_object(root.children[i], path + root.children[i].name + "/");
        }
    }
    //子类需要手动调用super.onLoad()
    onLoad() {
        UIFunction.getInstance().resize_screen()
        this.load_all_object(this.node, "");
        this.view[this.node.name] = this.node;
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

    add_to_node(parent: cc.Node, prefab: cc.Prefab, scriptName?: string){
        return UIFunction.getInstance().add_to_node(parent, prefab,scriptName)
    }

    set_string(target: cc.Node, str: string) {
        UIFunction.getInstance().set_string(target, str)
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

    set_sprite_asyc(target: cc.Node, str: string){
        let texturePath = "textures/" + str
        UIFunction.getInstance().set_sprite_async(target, texturePath);
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

}