import UIDialog from '../../framework/uibase/UIDialog';
import DialogManager from '../../framework/manager/DialogManager';

const { ccclass, property } = cc._decorator;

@ccclass
export default class CommonDialog extends UIDialog {
    
    _btnNum: number              = 1;
    _content: string            = "";
    _leftBtnText: string        = "取消";
    _rightBtnText: string       = "确定";
    _leftBtnCallback: Function  = null;
    _rightBtnCallback: Function = null;
    _closeFunc: Function        = null;

    onLoad(){
        super.onLoad()
    }

    start () {
        this.initUI();
        this.add_button_event_listener();

    }

    set_content_text(str: string) {
        this._content = str
    }

    set_btn_num(btnNum: number = 1) {
        this._btnNum = btnNum
    }

    set_btn_text(str1: string = null, str2: string = null) {
        this._leftBtnText = str1
        this._rightBtnText = str2
    }

    set_btn_callback(func1: Function = null, func2: Function = null, closeFunc: Function = null) {
        this._leftBtnCallback = func1
        this._rightBtnCallback = func2
        this._closeFunc = closeFunc;
    }

    initUI(){
        if (this._btnNum === 1) {
            let pos1 = this.view["KW_UI_BTN_LEFT"].getPosition()
            let pos2 = this.view["KW_UI_BTN_RIGHT"].getPosition()
            this.view["KW_UI_BTN_LEFT"].active = false
            this.view["KW_UI_BTN_RIGHT"].setPosition((pos1.x + pos2.x) / 2, pos1.y)
        }
                
        this.set_string(this.view["KW_UI_LABEL_CONTENT"], this._content)
        this.set_string(this.view["KW_UI_LABEL_LEFTBTN"], this._leftBtnText)
        this.set_string(this.view["KW_UI_LABEL_RIGHTBTN"], this._rightBtnText)
    }

    add_button_event_listener(){
        this.add_click_event(this.view["KW_BTN_CLOSE"],this.on_click_close.bind(this))
        this.add_click_event(this.view["KW_UI_BTN_LEFT"],this.on_click_left.bind(this))
        this.add_click_event(this.view["KW_UI_BTN_RIGHT"],this.on_click_right.bind(this))
        
    }

    onDestroy(){

    }

    on_click_close(sender: cc.Component){
        if (this._closeFunc) {
            this._closeFunc()
        }
        this.close()
    }

    on_click_left(sender: cc.Component){
        if (this._leftBtnCallback) {
            this._leftBtnCallback()
        }
        this.close()
    }

    on_click_right(sender: cc.Component){
        if (this._rightBtnCallback) {
            this._rightBtnCallback()
        }
        this.close()
    }

}