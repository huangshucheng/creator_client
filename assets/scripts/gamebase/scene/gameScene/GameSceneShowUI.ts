import UIController from '../../../framework/uibase/UIController';
import { UserState } from '../../common/State';
import RoomData from '../../common/RoomData';
import UIFunction from '../../../framework/common/UIFunciton';
import { ResourceManager } from '../../../framework/manager/ResourceManager';
import StringUtil from '../../../framework/utils/StringUtil';
import DialogManager from '../../../framework/manager/DialogManager';
import Player from '../../common/Player';

const {ccclass, property} = cc._decorator;

let MAX_PLAYER = 4;
let KW_PANEL_USER_INFO = "KW_PANEL_USER_INFO_"
let BALL_TEXTURE_KEY_STR = "games/balls/ball_level_%s.png"
let EMOJ_KEY_STR = "games/emoj/face_%d.png"

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
        this.set_string(info_node.getChildByName("KW_TEXT_NAME"),infoObj.unick)
        // this.set_string(info_node.getChildByName("KW_TEXT_NAME"),infoObj.uname) //TODO 暂时先显示玩家账号
        this.set_string(info_node.getChildByName("KW_TEXT_GOLD"),infoObj.uchip) //金币
        infoObj.userconfig = infoObj.userconfig ? infoObj.userconfig : {};
        let balllevel = infoObj.userconfig.user_ball_level 
        if(balllevel && balllevel != ""){
            let ufaceImg = StringUtil.format(BALL_TEXTURE_KEY_STR, balllevel);
            this.set_sprite_asyc(info_node.getChildByName("KW_IMG_HEAD"),ufaceImg) // 头像
        }
        console.log("hcc>>GameSceneShowUI>>show_one_user_info")
        this.set_visible(info_node.getChildByName("KW_IMG_OFFINLE"), infoObj.isoffline)
        this.set_visible(info_node.getChildByName("KW_IMG_MASTER"), infoObj.ishost == true) // 房主
        this.set_visible(info_node.getChildByName("KW_IMG_READY"), infoObj.userstate == UserState.Ready);
        this.set_visible(info_node.getChildByName("KW_TEXT_GOLD"), true);

        console.log("hcc>>gameSceneShowUI: url: ", infoObj.avatarurl)
        if (infoObj.avatarurl && !StringUtil.isEmptyString(infoObj.avatarurl)) {
            this.set_headimg_url(info_node.getChildByName("KW_IMG_HEAD"), infoObj.avatarurl,80);
        }
        
        if(Number(infoObj.seatid) == Number(RoomData.getInstance().get_self_seatid())){
            let userstate = Number(infoObj.userstate)
            if(userstate == UserState.Ready || userstate == UserState.Playing){
                this.set_visible(this.view["KW_BTN_READY"], false);
            }else{
                this.set_visible(this.view["KW_BTN_READY"], true);
            }
        }

        if(infoObj.userstate == UserState.Playing){
            this.set_visible(info_node, false);
            this.set_visible(this.view["KW_BTN_SHARE"], false);
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
        }
    }

    clear_table(){
        this.show_all_player_ready_visible(false);
        this.set_visible(this.view["KW_BTN_READY"], false);
        if(this.view["KW_LAYOUT_USER"]){
            this.view["KW_LAYOUT_USER"].removeAllChildren();
        }
    }

    show_emoj(seat:number,emojindex:number){
        let parentNode = this.view["KW_LAYOUT_USER"]
        if (parentNode) {
            let children = parentNode.children;
            for(let key in children){
                let child = children[key];
                if (child.name == KW_PANEL_USER_INFO + seat){
                    let emojNode = this.seek_child_by_name(child, "KW_IMG_EMOJ");
                    if (!cc.isValid(emojNode)){
                        return
                    }
                    this.set_visible(emojNode,true);
                    this.set_sprite_asyc(emojNode, StringUtil.format(EMOJ_KEY_STR, emojindex));
                    emojNode.stopAllActions();
                    emojNode.setScale(0);
                    emojNode.runAction(cc.scaleTo(0.2,1).easing(cc.easeBackInOut()));                   
                    emojNode.runAction(cc.sequence(cc.delayTime(1.5),cc.callFunc(function(){
                        this.set_visible(emojNode,false);
                    }.bind(this))))
                }
            }
        }
    }

    show_game_start_ani(){
        DialogManager.getInstance().show_dialog_async("ui_prefabs/dialog/DialogGameStart", "GameStartDialog");
    }

    show_game_rule(gamerule:string){
        this.set_string(this.view['KW_TEXT_RULE'],String(gamerule));
    }

    show_room_id(roomid:string){
        this.set_string(this.view['KW_TEXT_ROOM_NUM'], "对局号:" + roomid);
    }

    show_play_count(countstr:string){
        this.set_string(this.view['KW_TEXT_PLAY_COUNT'], countstr);
    }

    show_player_score(body:any){
        if(body){
            let scores = body.scores;
            let total_str = ""
            for(let key in scores){
                let score_info = scores[key];
                let score = score_info.score;
                let player:Player = RoomData.getInstance().get_player(score_info.seatid);
                if(player){
                    if(score_info.seatid == RoomData.getInstance().get_self_seatid()){
                        let score_str = "我方: " + score;
                        let flag = false;
                        if(total_str == ""){
                            flag = true;
                        }
                        if(flag){
                            total_str = total_str + score_str + "\n";
                        }else{
                            total_str = total_str + score_str;
                        }
                    }else{
                        let score_str = "对方: " + score;
                        let flag = false;
                        if(total_str == ""){
                            flag = true;
                        }
                        if (flag) {
                            total_str = total_str + score_str + "\n";
                        } else {
                            total_str = total_str + score_str;
                        }
                    }
                }
            }
            console.log("hcc>>score_str: " , total_str);
            this.set_string(this.view["KW_TEXT_PLAY_SCORE"],total_str);
        }
    }

}