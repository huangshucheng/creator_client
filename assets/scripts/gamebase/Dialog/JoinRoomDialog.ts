import UIDialog from '../../framework/uibase/UIDialog';
import DialogManager from '../../framework/manager/DialogManager';
import StringUtil from '../../framework/utils/StringUtil';

const { ccclass, property } = cc._decorator;

@ccclass
export default class JoinRoomDialog extends UIDialog {

    _text_index = 1;
    KW_TOTAL_ROOM_NUM_COUNT = 6;

    onLoad(){
        super.onLoad()
    }

    start () {
        this.initUI()
        this.add_button_event_listener()
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"],this.on_click_close.bind(this))
        this.add_click_event(this.view["KW_BTN_DELETE"],this.on_click_delete.bind(this))
        this.add_click_event(this.view["KW_BTN_CLEAR"],this.on_click_clear.bind(this))
        
        for(let index = 0; index <= 9; index++){
            let btnName = "KW_BTN_NUM_" + index
            this.add_click_event(this.view[btnName],this.on_click_number.bind(this));
        }

    }

    initUI(){
        for (var index = 1 ;index <= this.KW_TOTAL_ROOM_NUM_COUNT; index ++){
            var numName = 'KW_SHOW_NUM_' + index
            this.set_string(this.view[numName],"");
        } 
    }
    
    onDestroy(){

    }

    on_click_close(sender: cc.Component){
        this.close()
    }

    on_click_delete(sender: cc.Component){
        for (var index = this.KW_TOTAL_ROOM_NUM_COUNT ;index >=1 ; index --){
            var numName = 'KW_SHOW_NUM_' + index
            var str = this.get_string(this.view[numName])
            if (str != ""){
                this.set_string(this.view[numName],"")
                this._text_index = index;
                break;
            }
        }
    }

    on_click_clear(sender: cc.Component){
        for (var index = 1 ;index <= this.KW_TOTAL_ROOM_NUM_COUNT; index ++){
            var numName = 'KW_SHOW_NUM_' + index
            this.set_string(this.view[numName],"");
        }
        this._text_index = 1
    }

    on_click_number(sender: cc.Component){
        let btnName = sender.node.name
        let btnNumStr = StringUtil.getNumberSuffixByString(btnName);
        // cc.log(btnName , btnNumStr)
        let textName = 'KW_SHOW_NUM_' + this._text_index
        this.set_string(this.view[textName],String(btnNumStr))
        /*
        if(this._text_index == this.KW_TOTAL_ROOM_NUM_COUNT){
            var roomid = ""
            for (var index = 1 ;index <= this.KW_TOTAL_ROOM_NUM_COUNT; index ++){
                var numName = 'KW_SHOW_NUM_' + index
                var num = this.get_string(this.view[numName])
                roomid = roomid + num;
            }
            var msg = {
                roomid : roomid,
            }
            cc.log("roomid: " , roomid)
            //TODO send roomid to server
        }
        */
        this._text_index++;
    }
}