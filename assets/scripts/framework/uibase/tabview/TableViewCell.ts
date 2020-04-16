const { ccclass, property } = cc._decorator;

import TableView from './TableView'
import UIController from '../UIController';

@ccclass
export default class TableViewCell extends UIController {
    static getSize(index: number, data?: any): number {
        return 0;
    }

    init(index: number, data?: any, tv?: TableView) {
    }

    uninit() {
    }

    reload(data?: any) {
    }
}
