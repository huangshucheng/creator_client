import UIController from '../../../framework/uibase/UIController';
import EventManager from '../../../framework/manager/EventManager';
import { Cmd, CmdName } from "../../../framework/protocol/GameHoodleProto";
import Response from '../../../framework/config/Response';
import SceneManager from '../../../framework/manager/SceneManager';
import UserInfo from '../../../framework/common/UserInfo';
import GameScene from '../gameScene/GameScene';
import DialogManager from '../../../framework/manager/DialogManager';
import LobbyScene from './LobbyScene';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbySceneRecvGameHoodleMsg extends UIController {

    onLoad () {
        super.onLoad()
    }

    start () {
        this.add_event_dispatcher()
    }

    add_event_dispatcher(){
        EventManager.on(CmdName[Cmd.eCreateRoomRes], this, this.on_event_create_room)
        EventManager.on(CmdName[Cmd.eJoinRoomRes], this, this.on_event_join_room)
        EventManager.on(CmdName[Cmd.eExitRoomRes], this, this.on_event_exit_room)
        EventManager.on(CmdName[Cmd.eDessolveRes], this, this.on_event_dessolve_room)
        EventManager.on(CmdName[Cmd.eGetRoomStatusReq], this, this.on_event_get_room_status)
        EventManager.on(CmdName[Cmd.eBackRoomRes], this, this.on_event_back_room)
    }

    on_event_create_room(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        cc.log("on_event_create_room",udata)
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                SceneManager.getInstance().enter_scene_asyc(new GameScene())
                DialogManager.getInstance().show_weak_hint("房间创建成功!")
            }else{
                DialogManager.getInstance().show_weak_hint("房间创建失败!")
            }
        }
    }

    on_event_join_room(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        cc.log("on_event_join_room",udata)
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                SceneManager.getInstance().enter_scene_asyc(new GameScene())
                DialogManager.getInstance().show_weak_hint("加入房间成功!")
            }else{
                DialogManager.getInstance().show_weak_hint("加入房间失败!")
            }
        }
    }

    on_event_exit_room(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        cc.log("on_event_exit_room",udata)
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                SceneManager.getInstance().enter_scene_asyc(new LobbyScene())
                DialogManager.getInstance().show_weak_hint("退出房间成功!")
            }else{
                DialogManager.getInstance().show_weak_hint("退出房间失败!")
            }
        }
    }

    on_event_dessolve_room(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        cc.log("on_event_dessolve_room",udata)
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                SceneManager.getInstance().enter_scene_asyc(new LobbyScene())
                DialogManager.getInstance().show_weak_hint("解散房间成功!")
            }else{
                DialogManager.getInstance().show_weak_hint("解散房间失败!")
            }
        }
    }

    on_event_get_room_status(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        cc.log("on_event_get_room_status",udata)
        if(udata){
            let status = udata.status
            if(status == Response.OK){

            }else{

            }
        }
    }

    on_event_back_room(event:cc.Event.EventCustom){
        let udata =  event.getUserData()
        cc.log("on_event_back_room",udata)
        if(udata){
            let status = udata.status
            if(status == Response.OK){
                SceneManager.getInstance().enter_scene_asyc(new GameScene())
                DialogManager.getInstance().show_weak_hint("返回房间成功!")
            }else{
                DialogManager.getInstance().show_weak_hint("返回解散房间失败!")
            }
        }
    }

}
