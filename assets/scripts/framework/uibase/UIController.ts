import UIFunction from '../common/UIFunciton';

interface View {
    [propName: string]: cc.Node;
}

export default abstract class UIController extends cc.Component {
    view: View = {};
    _winSize:cc.Size = new cc.Size(1920,1080);

    private load_all_object(root: cc.Node, path: string) {
        for (let i = 0; i < root.childrenCount; i++) {
            this.view[root.children[i].name] = root.children[i];
            this.load_all_object(root.children[i], path + root.children[i].name + "/");
        }
    }

    onLoad() {
        this.load_all_object(this.node, "");
        this.view[this.node.name] = this.node;
    }

    add_click_event(target: cc.Node, callback: Function) {
        UIFunction.getInstance().add_click_event(target, callback, this)
    }

    set_string(target: cc.Node, str: string) {
        UIFunction.getInstance().set_string(target, str)
    }

    get_string(target: cc.Node){
        return UIFunction.getInstance().get_string(target);
    }

    set_sprite(target: cc.Node, str: string) {
        let texturePath = "textures/" + str
        UIFunction.getInstance().set_sprite(target, texturePath);
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

}