export default class Queue<T> {
    _dataStore: T[] = [];    //初始化为空

    //往后面加
    enqueue(element: T) {
        this._dataStore.push(element);
    }

    //删除第一个
    dequeue() {
        if (this.empty()) {
        } else {
            this._dataStore.shift();
        }
    }

    empty() {
        return this._dataStore.length === 0
    }

    front(): T {
        if (this.empty()) {
            return null;
        } else {
            return this._dataStore[0];
        }
    }

    back(): T {
        if (this.empty()) {
            return null;
        } else {
            return this._dataStore[this._dataStore.length - 1];
        }
    }

    toString() {
        return this._dataStore.join('\n');
    }

    clear() {
        delete this._dataStore;
        this._dataStore = [];
    }

    forEach(callbackfn: (key: number, value: T, ) => void, thisArg?: any): void {
        this._dataStore.forEach((value, key) => {
            callbackfn(key, value)
        });
    }
}