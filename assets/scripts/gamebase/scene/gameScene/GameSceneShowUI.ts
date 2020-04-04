import UIController from '../../../framework/uibase/UIController';
import GameSendGameHoodleMsg from './sendMsg/GameSendGameHoodle';
import UserInfo from '../../../framework/common/UserInfo';
import { UserState } from '../../common/State';
import RoomData from '../../common/RoomData';
import UIFunction from '../../../framework/common/UIFunciton';
import { ResourceManager } from '../../../framework/manager/ResourceManager';

const {ccclass, property} = cc._decorator;

let HEAD_PATH = "lobby/rectheader/1";
let MAX_PLAYER = 4;
let KW_PANEL_USER_INFO = "KW_PANEL_USER_INFO_"

@ccclass
export default class GameSceneShowUI extends UIController {

    _gamehoodle = null;

    onLoad () {
        super.onLoad();
        this.initUI();
    }

    start () {
    }

    initUI(){
       this.show_all_player_ready_visible(false);
       this.show_gamehoodle(true);
    }

    show_user_info(udata:any){
        if(udata.userinfo){
            if(this.view["KW_LAYOUT_USER"]){
                this.view["KW_LAYOUT_USER"].removeAllChildren();
            }
            udata.userinfo.forEach(value => {
                let numberid = value.numberid;
                let infostr = value.userinfostring;
                let infoObj = JSON.parse(infostr);
                let seatid = infoObj.seatid;
                if(seatid){
                    let prefab = ResourceManager.getInstance().getRes("ui_prefabs/games/PrefabUserInfo", cc.Prefab)
                    if(prefab){
                        if(this.view["KW_LAYOUT_USER"]){
                            let infoNode:cc.Node = this.add_to_node(this.view["KW_LAYOUT_USER"],prefab)
                            if(infoNode){
                                infoNode.name = KW_PANEL_USER_INFO + seatid;
                                this.show_one_user_info(infoNode,infoObj)
                            }
                        }
                    }
                }
            });
        }
    }

    show_one_user_info(info_node:cc.Node,infoObj:any){
        if(!cc.isValid(info_node)){
            return;
        }
        this.set_visible(info_node, true);
//        this.set_string(info_node.getChildByName("KW_TEXT_NAME"),infoObj.unick)
        this.set_string(info_node.getChildByName("KW_TEXT_NAME"),infoObj.uname) //TODO 暂时先显示玩家账号
        this.set_string(info_node.getChildByName("KW_TEXT_GOLD"),infoObj.uchip) //金币
        let ufaceImg = HEAD_PATH + infoObj.uface;
        this.set_sprite_asyc(info_node.getChildByName("KW_IMG_HEAD"),ufaceImg) // 头像
        console.log("hcc>>GameSceneShowUI>>show_one_user_info")
        this.set_visible(info_node.getChildByName("KW_IMG_OFFINLE"), infoObj.isoffline)
        this.set_visible(info_node.getChildByName("KW_IMG_MASTER"), infoObj.ishost == true) // 房主
        this.set_visible(info_node.getChildByName("KW_IMG_READY"), infoObj.userstate == UserState.Ready);
        this.set_visible(info_node.getChildByName("KW_TEXT_GOLD"), true);
        
        if(Number(infoObj.seatid) == Number(RoomData.getInstance().get_self_seatid())){
            let userstate = Number(infoObj.userstate)
            if(userstate == UserState.Ready || userstate == UserState.Playing){
                this.set_visible(this.view["KW_BTN_READY"], false);
            }else{
                // let playcount = Number(RoomData.getInstance().get_play_count())
                // console.log("hcc>>playcount: " , playcount);
                // if( playcount < 1){
                    this.set_visible(this.view["KW_BTN_READY"], true);
                // }
            }
        }

        if(infoObj.userstate == UserState.Playing){
            this.set_visible(info_node, false);
        }
    }

    show_all_player_ready_visible(visible:boolean){
        let layout:cc.Node = this.view["KW_LAYOUT_USER"]
        if (layout){
            for(let seatid = 1; seatid <= MAX_PLAYER; seatid++){
                this.show_user_ready(seatid,false)
            }
        }
    }

    show_user_ready(seatid:number, isShow:boolean){
        let layout:cc.Node = this.view["KW_LAYOUT_USER"]
        if (layout){
            let headNodeStr = "KW_PANEL_USER_INFO_" + seatid;
            let headNode = layout.getChildByName(headNodeStr)
            if(headNode){
                this.set_visible(headNode.getChildByName("KW_IMG_READY"),isShow);
            }
        }

        if(seatid == RoomData.getInstance().get_self_seatid()){
            this.set_visible(this.view["KW_BTN_READY"], false);           
        }
    }

    show_gamehoodle(is_show:boolean){
       if(this._gamehoodle){
            this._gamehoodle.active = is_show;
       }else{
            this._gamehoodle = UIFunction.getInstance().add_prefab_to_node(this.view["KW_GAME_NODE"],"ui_prefabs/games/GameHoodle","GameHoodleCtrl");
            if(this._gamehoodle){
                this._gamehoodle.active = is_show;
            }
            /*
            let _this = this;
            UIFunction.getInstance().add_prefab_to_node_async(this.view["KW_GAME_NODE"],"ui_prefabs/games/GameHoodle","GameHoodleCtrl",function(resnode:cc.Node){
                if(resnode){
                    resnode.active = is_show;
                    _this._gamehoodle = resnode;
                    _this.scheduleOnce(function(){
                        GameSendGameHoodleMsg.send_check_link_game();
                    },0.1);
                }
            });
            */
        }
    }

    clear_table(){
        this.show_all_player_ready_visible(false);
        this.set_visible(this.view["KW_BTN_READY"], false);
        if(this.view["KW_LAYOUT_USER"]){
            this.view["KW_LAYOUT_USER"].removeAllChildren();
        }

    }

}