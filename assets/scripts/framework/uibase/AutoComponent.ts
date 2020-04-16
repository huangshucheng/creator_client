//自动绑定UI节点工具
//节点名字需要和界面上的UI名字一样，支持绑定prefab

let { ccclass, property, executeInEditMode } = cc._decorator;
let DEBUG = false;
let assets = [];

if (DEBUG || CC_EDITOR) {
    if (CC_EDITOR) {
        Editor.assetdb.queryAssets('db://assets/**\/*', 'prefab', function (err, results) {
            assets = results;
        });
    }

    const _property = property;
    cc._decorator.property = function (ctorProtoOrOptions, propName, desc) {
        let func = _property(...arguments);
        return function (target, propertyKey, desc) {
            func(...arguments);
            if (target.constructor._members) {
                let type = ctorProtoOrOptions.type || ctorProtoOrOptions;
                if (cc.js.isChildClassOf(type, cc.Node) || cc.js.isChildClassOf(type, cc.Component)) {
                    target.constructor._members[propertyKey] = type;
                } else if (cc.js.isChildClassOf(type, cc.Prefab)) {
                    target.constructor._assets.push({name: propertyKey, type})
                }
                    
            }
        }
    }
}


@ccclass
@executeInEditMode
export default class AutoComponent extends cc.Component {
    static _members = {};
    static _assets = [];

    private bindProperty(node: cc.Node) {
        let type = AutoComponent._members[node.name];
        if (type && !this[node.name]) {
            //节点类型
            if (cc.js.isChildClassOf(type, cc.Node)) {
                this[node.name] = node;
            } else {
                //组件类型
                this[node.name] = node.getComponent(type);
            }
        }
        let children = node.children;
        children.forEach(childNode => this.bindProperty(childNode));
    }

    private bindAssets() {
        AutoComponent._assets.forEach((asset) => {
            let obj = assets.find((item) => {
                return item.url.endsWith(`${asset.name}.prefab`)
            });
            if (obj) {
                cc.loader.load({type: 'uuid', uuid: obj.uuid}, (err, prefab) => {
                    this[asset.name] = prefab;
                });
            }
        });
    }

    resetInEditor() {
        this.bindProperty(this.node);
        this.bindAssets();
    }
}

if (DEBUG || CC_EDITOR) {
    AutoComponent.prototype.__preload = function () {
        this.bindProperty(this.node);
        this.bindAssets();
    }
}