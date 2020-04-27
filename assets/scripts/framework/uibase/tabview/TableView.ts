 //只支持单行单列模式。
const { ccclass, property } = cc._decorator;
const ScrollModel = cc.Enum({ Horizontal: 0, Vertical: 1 });
const ScrollType = cc.Enum({ Single: 0, Multiple: 1 });

interface TableViewCell {
    getSize(index: number, data?: any): number;
}

interface tvCell extends cc.Node {
    // 当前实际的下标
    tvIndex: number;
    // 将要转变的下标(用于增删操作)
    _tvIndex: number;
}

@ccclass
export default class TableView extends cc.ScrollView {
    // 重写
    @property({ visible: false, override: true })
    horizontal = false;
    @property({ visible: false, override: true })
    vertical = true;
    @property({ type: cc.Component.EventHandler, visible: false, override: true })
    scrollEvents = [];

    // 新增
    @property(cc.Prefab)
    _cell: cc.Prefab = null;
    @property({ type: cc.Prefab, tooltip: '渲染节点' })
    get cell() { return this._cell; }
    set cell(value) {
        if (!CC_EDITOR) {
            this.clear();
            this.cellPool.clear();
        }
        this._cell = value;
    }

    @property({ type: ScrollModel, tooltip: '滑动方向' })
    get scrollModel() { return this.horizontal ? ScrollModel.Horizontal : ScrollModel.Vertical; }
    set scrollModel(value) {
        if (!CC_EDITOR) {
            console.error('[TableView] 不允许动态修改scrollModel');
            return;
        }
        if (value === ScrollModel.Horizontal) {
            this.horizontal = true;
            this.vertical = false;
        } else {
            this.horizontal = false;
            this.vertical = true;
        }
    }

    @property({
        tooltip: "item 间隔"
    })
    spacing: number = 0; // space between each item

    // @property({ type: ScrollType, tooltip: 'Single: 单行/单列\nMultiple: 多行/多列' })
    // scrollType: number = ScrollType.Single;

    // @property({ visible: function () { return this.scrollType == ScrollType.Multiple }, tooltip: 'Horizontal: 有几行\Vertical: 有几列' })
    // mulCount: number = 0;

    private cellPool: cc.NodePool = new cc.NodePool('TableViewCell');
    private cellData = null;
    private cellCount = 0;
    private childCount = 0;

    private startIndex = 0;
    private maxStartIndex = 0;
    private endIndex = 0;
    private lowestIndex = 0;

    private anchorCenterX = 0;
    private anchorCenterY = 0;
    private anchorLeftX = 0;
    private anchorTopY = 0;
    private cellAnchorX = 0;
    private cellAnchorY = 0;

    private customSize = false;
    private cellAccumSizes: number[] = [];
    private cellSizes: number[] = [];
    private cellSize: number = 0;

    private updateRefreshOnce = false;
    private updateRefreshForce = false;
    private updateCellsOn = false;
    private updateCellsOnce = false;

    _callback: Function = null;

    reset() {
        this.cellData = null;
        this.cellCount = 0;
        this.childCount = 0;
    
        this.startIndex = 0;
        this.maxStartIndex = 0;
        this.endIndex = 0;
        this.lowestIndex = 0;
    
        this.anchorCenterX = 0;
        this.anchorCenterY = 0;
        this.anchorLeftX = 0;
        this.anchorTopY = 0;
        this.cellAnchorX = 0;
        this.cellAnchorY = 0;
    
        this.cellAccumSizes = [];
        this.cellSizes = [];
        this.cellSize = 0;
    
        this.updateRefreshOnce = false;
        this.updateRefreshForce = false;
        this.updateCellsOn = false;
        this.updateCellsOnce = false;
    }

    onDestroy() {
        while (this.cellPool.size()) {
            this.cellPool.get().destroy();
        }
    }

    onEnable() {
        this.node.on('scroll-began', this.onScrollBegin, this);
        this.node.on('scroll-ended', this.onScrollEnd, this);

        if (super.onEnable) {
            super.onEnable();
        }
    }

    onDisable() {
        this.node.off('scroll-began', this.onScrollBegin, this);
        this.node.off('scroll-ended', this.onScrollEnd, this);

        if (super.onDisable) {
            super.onDisable();
        }
    }

    private onScrollBegin() {
        this.updateCellsOn = true;
    }

    private onScrollEnd() {
        this.updateCellsOn = false;
        this.updateCellsOnce = true;
    }

    getCellCount() {
        return this.cellCount;
    }

    setCellCount(num: number) {
        if (typeof num === 'number' && num >= 0) {
            this.cellCount = num;
        } else {
            console.error('[TableView] setCellCount 参数错误');
        }
    }

    getCellData() {
        return this.cellData;
    }

    setCellData(data: any) {
        if (typeof data !== 'undefined') {
            this.cellData = data;
        }
    }

    getCellRange() {
        const children: tvCell[] = <tvCell[]>this.content.children;
        if (children.length == 0) {
            return { min: -1, max: -1 };
        }
        return { min: children[0].tvIndex, max: children[children.length - 1].tvIndex };
    }

    /**
     * [实时操作] 如果动态修改scrollBar的大小了，则需要调用此方法更新
     */
    refreshScrollBar() {
        // @ts-ignore
        this._updateScrollBar(this._getHowMuchOutOfBoundary());
    }

    /**
     * [延时操作] 刷新
     * 1、cell大小改变需要刷新cell位置时调用
     * 2、content大小、锚点发生改变后，需要刷新cell位置时调用
     * 3、cellCount改变，需要刷新cell时调用
     * 
     * 调用refresh并不代表会执行cell的init或uninit方法
     * 只有当cell的index因插入、删除、滚屏、初始化等原因需要发生变化时，才会触发init或uninit方法
     */
    refresh(force = true) {
        this.updateRefreshOnce = true;
        if (force) {
            this.updateRefreshForce = true;
        }
    }

    /**
     * [实时操作] 刷新
     */
    refreshSync(force = true) {
        this.stopRefresh();
        this.initData();
        this.updateCells(force);
    }

    /**
     * 停止refresh
     */
    private stopRefresh() {
        this.updateRefreshOnce = false;
        this.updateRefreshForce = false;
    }

    /**
     * [实时操作] 初始化
     */
    init(num: number, data?: any) {
        if (CC_DEBUG) {
            if (!this.content) {
                return console.error('[TableView] 请指定content');
            }
            if (!this.cell) {
                return console.error('[TableView] 请指定cell');
            }
            if (!this.getViewCell()) {
                return console.error('[TableView] 请在cell中添加继承自<TableViewCell>的自定义组件');
            }
        }
        this.clear();

        this.setCellData(data || null);
        this.setCellCount(num);

        this.initData();

        this.stopAutoScroll();
        this.scrollToOrigin();

        this.updateCells(true);
    }

    /**
     * [实时操作] 清空
     */
    clear() {
        this.cellCount = 0;
        this.childCount = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        this.maxStartIndex = 0;
        this.lowestIndex = 0;
        this.content[this.horizontal ? 'width' : 'height'] = 0;

        this.stopRefresh();
        this.updateCellCount();
    }

    /**
     * [实时操作] 重载
     */
    reload(start = 0, num?: number) {
        if (typeof num === 'undefined') {
            this.content.children.forEach((cell: tvCell) => {
                if (cell.tvIndex >= start) {
                    this.reloadCell(cell);
                }
            })
        } else {
            if (num <= 0) return;

            if (start < 0) start = start + this.cellCount;

            if (start + num < 0) return;

            this.content.children.forEach((cell: tvCell) => {
                if (cell.tvIndex >= start && cell.tvIndex < start + num) {
                    this.reloadCell(cell);
                }
            })
        }
    }

    /**
     * [延时操作] 插入
     */
    insert(start = -1, num = 1, data?: any) {
        if (num <= 0) return;

        if (start < 0) start = start + this.cellCount + 1;
        if (start < 0) start = 0;

        this.setCellData(data);

        const children = this.content.children;
        for (let index = children.length - 1; index >= 0; index--) {
            const node: tvCell = <tvCell>children[index];
            if (node._tvIndex >= start) {
                node._tvIndex += num;
            }
        }

        this.setCellCount(this.cellCount + num);
        this.refresh();
    }

    /**
     * [延时操作] 删除
     */
    remove(start = -1, num = 1, data?: any) {
        if (num <= 0) return;

        if (start < 0) start = start + this.cellCount;
        let end = start + num;

        if (start < 0) {
            start = 0;
        }
        if (end > this.cellCount) {
            end = this.cellCount;
        }

        num = end - start;

        if (start >= this.cellCount || end <= 0 || num < 0 || start >= end) return;

        this.setCellData(data);

        const children = this.content.children;
        for (let index = children.length - 1; index >= 0; index--) {
            const node: tvCell = <tvCell>children[index];
            if (node._tvIndex >= start) {
                if (node._tvIndex < end) {
                    node._tvIndex = -1;
                } else {
                    node._tvIndex -= num;
                }
            }
        }

        this.setCellCount(this.cellCount - num);
        this.refresh();
    }

    private getCell(): tvCell {
        let node: tvCell = null;
        if (this.cellPool.size()) {
            node = <tvCell>this.cellPool.get();
        } else {
            node = <tvCell>cc.instantiate(this.cell);
        }
        node.tvIndex = -1;
        node._tvIndex = -1;
        return node;
    }

    private putCell(node: tvCell) {
        this.cellPool.put(node);
    }

    private initCell(cell: tvCell, index: number) {
        if (index >= 0) {
            if (cell.tvIndex != index || cell.tvIndex != cell._tvIndex) {
                const com = cell.getComponent('TableViewCell');
                if (cell.tvIndex >= 0) com.uninit();
                com.init(index, this.cellData, this);
            }
            cell.tvIndex = index;
            cell._tvIndex = index;
        }
    }

    private uninitCell(cell: tvCell) {
        if (cell.tvIndex >= 0) {
            cell.getComponent('TableViewCell').uninit();
            cell.tvIndex = -1;
            cell._tvIndex = -1;
        }
    }

    private reloadCell(cell: tvCell) {
        cell.getComponent('TableViewCell').reload(this.cellData);
    }

    private getViewCell(): TableViewCell {
        if (this.cell) {
            const com = this.cell.data.getComponent('TableViewCell');
            if (com) {
                // return <typeof TableViewCell>cc.js.getClassByName(cc.js.getClassName(com));
                return com.constructor || cc.js.getClassByName(cc.js.getClassName(com));
            }
        }
        return null;
    }

    /**
     * 获取默认cell大小
     */
    private getDefaultCellSize(): cc.Size {
        if (this.cell) {
            if (CC_DEBUG && this.cell.data.getComponent(cc.Widget)) {
                console.warn('[TableView] cell根节点中存在cc.Widget，可能无法正确获取Size');
            }
            return this.cell.data.getContentSize();
        }
        return cc.Size.ZERO;
    }

    /**
     * 获取默认cell锚点
     */
    private getDefaultCellAnchor() {
        if (this.cell) {
            return this.cell.data.getAnchorPoint();
        }
        return cc.Vec2.ZERO;
    }

    private getScrollLengh() {
        const offset = this.getScrollOffset();
        const scrollLen = this.horizontal ? -offset.x : offset.y;

        if (scrollLen < 0) {
            return 0;
        }

        // 有maxStartIndex作为限制，这里可以不做限制
        // const maxOffset = this.getMaxScrollOffset();
        // const maxScrollLen = this.horizontal ? -maxOffset.x : maxOffset.y;
        // if (scrollLen > maxScrollLen) {
        //     return maxScrollLen;
        // }
        return scrollLen;
    }

    /**
     * 初始化数值
     */
    private initData() {
        const view = this.getViewCell();
        const defaultCellSize = this.getDefaultCellSize();
        const prop = this.horizontal ? 'width' : 'height';
        const viewLen = this.content.parent[prop];

        // 初始默认数据
        this.cellSize = defaultCellSize[prop];
        this.cellAccumSizes.length = 0;
        this.cellSizes.length = 0;
        this.maxStartIndex = 0;
        this.startIndex = 0;
        this.endIndex = 0;

        // 计算childCount
        this.childCount = Math.min(Math.ceil(viewLen / (this.cellSize + this.spacing * (this.cellCount - 1) / this.cellCount)) + 1, this.cellCount);

        // 计算最大的开始下标
        if (this.cellCount > this.childCount) {
            this.maxStartIndex = this.cellCount - this.childCount;
        } else {
            this.maxStartIndex = 0;
        }

        // 计算content大小
        this.content[prop] = (this.cellSize) * this.cellCount + this.spacing * (this.cellCount - 1);

        // 计算基础定位数值
        const cellAnchor = this.getDefaultCellAnchor();
        this.anchorCenterX = (0.5 - this.content.anchorX) * this.content.width;
        this.anchorCenterY = (0.5 - this.content.anchorY) * this.content.height;
        this.anchorLeftX = (0 - this.content.anchorX) * this.content.width;
        this.anchorTopY = (1 - this.content.anchorY) * this.content.height;
        this.cellAnchorX = cellAnchor.x;
        this.cellAnchorY = 1 - cellAnchor.y;
    }

    /**
     * 更新cell的数量，不够添加，多了删除
     */
    private updateCellCount() {
        const children: tvCell[] = <tvCell[]>this.content.children;

        if (children.length == this.childCount) {
            return;
        } else if (children.length > this.childCount) {
            let cell: tvCell = null;

            // 优先删除即将要废弃的cell
            for (let index = children.length - 1; index >= this.childCount; index--) {
                cell = children[index];

                if (cell._tvIndex < this.startIndex || cell._tvIndex > this.endIndex) {
                    this.uninitCell(cell);
                    this.putCell(cell);
                }
            }

            // 从后往前删除
            for (let index = children.length - 1; index >= this.childCount; index--) {
                cell = children[index];

                this.uninitCell(cell);
                this.putCell(cell);
            }
        } else {
            for (let index = children.length; index < this.childCount; index++) {
                this.content.addChild(this.getCell())
            }
        }
    }

    /**
     * 根据滑动距离，获得startIndex
     */
    private getStartIndex(scrollLen: number) {
        const maxStartIndex = this.maxStartIndex;

        let startIndex = Math.floor(scrollLen / (this.cellSize + this.spacing * (this.cellCount - 1) / this.cellCount));
        if (startIndex < 0) { 
            startIndex = 0 
        } else if (startIndex > maxStartIndex) { 
            startIndex = maxStartIndex 
        }

        return startIndex;
    }

    /**
     * 更新开始下标、结束下标、childNum(只有自定义cell大小才会更新)
     */
    private updateCellRange() {
        // 滚动距离
        const scrollLen = this.getScrollLengh();

        // 当前滚动距离对应的起始cell下标
        this.startIndex = this.getStartIndex(scrollLen);

        // 当前滚动距离对应的终止cell下标
        this.endIndex = this.startIndex + this.childCount - 1;
    }

    /**
     * 更新cell状态
     */
    private updateCell(cell: tvCell, index?: number) {
        if (typeof index === 'number') {
            this.initCell(cell, index);
        } else {
            this.initCell(cell, cell._tvIndex);
            index = cell.tvIndex;
        }

        if (this.horizontal) {
            cell.x = this.anchorLeftX - this.cellSize * this.cellAnchorX + (this.cellSize) * (index + 1) + this.spacing * (index);
            cell.y = this.anchorCenterY;
        } else {
            cell.y = this.anchorTopY + this.cellSize * this.cellAnchorY - this.cellSize * (index + 1) - this.spacing * (index);
            cell.x = this.anchorCenterX;
        }
    }

    /**
     * 更新cells状态
     * 
     * 根据startIndex和endIndex，将content下的节点分成keepCells和changeCells
     * 1、统一更新keepCells和changeCells里cell的坐标
     * 2、changeCells里的cell会进行init
     */
    private updateCells(force = false) {
        this.updateCellsOnce = false;

        this.updateCellRange();
        this.updateCellCount();

        if(this.cellCount - 2 == this.endIndex && this.lowestIndex < this.endIndex ) {
            this.lowestIndex = this.endIndex
            if(this._callback) {
                this._callback()
            }
        }

        if (!this.childCount) {
            return;
        }

        const startIndex = this.startIndex;
        const endIndex = this.endIndex;

        const children: tvCell[] = <tvCell[]>this.content.children;

        // 正常滑动下，只要第一个cell的_tvIndex与startIndex相等最后一个cell的_tvIndex与endIndex相等, 就没必要进行下一步计算
        // 如果是其它情况一定要进行接下来的计算，可以通过force进行控制
        if (!force && children[0]._tvIndex == startIndex && children[children.length - 1]._tvIndex == endIndex) {
            return;
        }

        const keepCells: tvCell[] = [];
        const changeCells: tvCell[] = [];
        children.forEach((cell) => {
            if (cell._tvIndex < startIndex || cell._tvIndex > endIndex || cell._tvIndex != cell.tvIndex) {
                this.uninitCell(cell);
                changeCells.push(cell);
            } else {
                keepCells.push(cell);
            }
        });

        // 没有可刷新的
        if (changeCells.length == 0) {
            if (force) children.forEach((cell) => this.updateCell(cell));
        }
        // 全部cell都需要刷新
        else if (keepCells.length == 0) {
            children.forEach((cell, index) => this.updateCell(cell, startIndex + index));
        }
        // 只有部分cell需要刷新
        else {
            for (let index = startIndex, keepPoint = 0, changePoint = 0, i = 0; index <= endIndex; index++ , i++) {
                if (keepPoint < keepCells.length && index == keepCells[keepPoint]._tvIndex) {
                    this.updateCell(keepCells[keepPoint++]);
                } else {
                    this.updateCell(changeCells[changePoint++], index);
                }
            }
        }

        // 排序
        children.forEach(function (node) {
            node.zIndex = node.tvIndex - startIndex;
        })
        this.content.sortAllChildren();
    }

    scrollToIndex(index?: number, timeInSecond?: number, attenuated?: boolean) {
        // todo
        console.log('[TableView] scrollToIndex')
    }

    getPerScrollOffset() {
        if (this.horizontal) {
            return cc.v2(this.getScrollOffset().x / this.getMaxScrollOffset().x, 0);
        } else {
            return cc.v2(0, this.getScrollOffset().y / this.getMaxScrollOffset().y);
        }
    }

    scrollToPerOffset(offset: cc.Vec2, timeInSecond?: number, attenuated?: boolean) {
        if (this.horizontal) {
            offset.x *= this.getMaxScrollOffset().x;
        } else {
            offset.y *= this.getMaxScrollOffset().y;
        }
        this.scrollToOffset(offset, timeInSecond, attenuated);
    }

    scrollToOrigin(timeInSecond?: number, attenuated?: boolean) {
        if (this.horizontal) {
            this.scrollToLeft(timeInSecond, attenuated)
        } else {
            this.scrollToTop(timeInSecond, attenuated)
        }
    }

    stopAutoScroll() {
        if (!this.updateCellsOnce && this.updateCellsOn) {
            this.updateCellsOnce = true;
        }
        super.stopAutoScroll();
    }

    scrollToBottom(timeInSecond?: number, attenuated?: boolean) {
        if (timeInSecond) {
            this.updateCellsOn = true;
        } else {
            this.updateCellsOnce = true;
        }
        super.scrollToBottom(timeInSecond, attenuated);
    }

    scrollToTop(timeInSecond?: number, attenuated?: boolean) {
        if (timeInSecond) {
            this.updateCellsOn = true;
        } else {
            this.updateCellsOnce = true;
        }
        super.scrollToTop(timeInSecond, attenuated);
    }

    scrollToLeft(timeInSecond?: number, attenuated?: boolean) {
        if (timeInSecond) {
            this.updateCellsOn = true;
        } else {
            this.updateCellsOnce = true;
        }
        super.scrollToLeft(timeInSecond, attenuated);
    }

    scrollToRight(timeInSecond?: number, attenuated?: boolean) {
        if (timeInSecond) {
            this.updateCellsOn = true;
        } else {
            this.updateCellsOnce = true;
        }
        super.scrollToRight(timeInSecond, attenuated);
    }

    scrollToOffset(offset: cc.Vec2, timeInSecond?: number, attenuated?: boolean) {
        if (timeInSecond) {
            this.updateCellsOn = true;
        } else {
            this.updateCellsOnce = true;
        }
        super.scrollToOffset(offset, timeInSecond, attenuated);
    }

    update(dt) {
        super.update(dt);
        if (this.updateRefreshOnce) this.refreshSync(this.updateRefreshForce);
        if (this.updateCellsOn || this.updateCellsOnce) this.updateCells();
    }

    addEventListener(callback: Function = null) {
        this._callback = callback
    }
}