export class Ref {
    count: number = 1;
    path: string = null;
    type: any = null;
}

export class ResourceManager {
    public static readonly instance: ResourceManager = new ResourceManager();

    _resMap: Map<string, any> = new Map()
    _loadingMap: Map<string, Function[]> = new Map()

    _preloadResMap: Map<string, any[]> = new Map
    _dependResMap: Map<string, number> = new Map
 
    public static getInstance(){
        return ResourceManager.instance;
    }

    private constructor() {
        // setInterval(function(){
            // console.log("-----------------cc.loader._cache.length-------------------",    cc.loader.getResCount());
        // }, 2000)
    }
    //
    loadResDir(url: string, progressCallback?: (completedCount: number, totalCount: number, item: any) => void, completeCallback?: ((error: Error, resource: any[], urls: string[]) => void) | null): void {
        let self = this
        cc.loader.loadResDir(url, function (completedCount, totalCount, item) {
            if (progressCallback) {
                progressCallback(completedCount, totalCount, item);
            }
        }, function (error: Error, resource: any[], urls: string[]) {
            if (!error) {
                self._preloadResMap.set(url, resource)
                resource.forEach(res => {
                    let deps = cc.loader.getDependsRecursively(res);
                    deps.forEach(element => {
                        let refCount = self._dependResMap.get(element)
                        if (refCount) {
                            self._dependResMap.set(element, refCount + 1)
                        } else {
                            self._dependResMap.set(element, 1)
                        }
                    });
                })
            }
            if (completeCallback) {
                completeCallback(error, resource, urls)
            }
        })
    }
    //
    releaseResDir<T extends typeof cc.Asset>(url: string, type?: T) {
        let self = this
        let resources = this._preloadResMap.get(url)
        if (resources && resources.length > 0) {
            resources.forEach(res => {
                let deps = cc.loader.getDependsRecursively(res);
                deps.forEach(element => {
                    let refCount = self._dependResMap.get(element)
                    if (refCount) {
                        refCount--
                        if (refCount <= 0) {
                            self._dependResMap.delete(element)
                            cc.loader.release(element);
                        } else {
                            self._dependResMap.set(element, refCount)
                        }
                    } else {
                        cc.loader.release(element);
                    }
                });
            });
        }
    }

    getRes<T extends typeof cc.Asset>(url: string, type: T) {
        let res = cc.loader.getRes(url, type)
        if (!res) {
            console.warn(`preload res path: ${url} not exist`)
        }
        return res
    }
    //载入单个资源
    // loadRes<T extends typeof cc.Asset>(path: string, type: T) {
    //     let key = path + type.name
    //     if (this._resMap.has(key)) {
    //         return;
    //     }
    //     if (this._loadingMap.has(key)) {
    //          return;
    //     }

    //     this._loadingMap.set(key, [])

    //     cc.loader.loadRes(path, type, (error, resource) => {
    //         if (error) {
    //             cc.warn(`load res fail, path=${path}, err=${error}`)
    //             this._loadingMap.get(key).forEach(element => {
    //                 element(null)
    //             });
    //         } else {
    //             this._resMap.set(key, resource)
    //             this._loadingMap.get(key).forEach(element => {
    //                 element(resource)
    //             });
    //         }
    //         this._loadingMap.delete(key)
    //     })
    // }

    //载入单个资源
    //  TODO 小程序编译不通过
    loadRes<T extends typeof cc.Asset>(path: string, type: T): Promise<InstanceType<T>> {
        let key = path + type.name
        if (this._resMap.has(key)) {
            return new Promise(resolve => {
                resolve(this._resMap.get(key))
            })
        }
        if (this._loadingMap.has(key)) {
            return new Promise(resolve => {
                this._loadingMap.get(key).push(function (data) {
                    resolve(data)
                })
            })
        }
        this._loadingMap.set(key, [])
        return new Promise(resolve => {
            cc.loader.loadRes(path, type, (error, resource) => {
                if (error) {
                    cc.warn(`load res fail, path=${path}, err=${error}`)
                    resolve(null)
                    this._loadingMap.get(key).forEach(element => {
                        element(null)
                    });
                } else {
                    this._resMap.set(key, resource)
                    resolve(resource)
                    this._loadingMap.get(key).forEach(element => {
                        element(resource)
                    });
                }
                this._loadingMap.delete(key)
            })
        })
    }
    
    //卸载单个资源
    releaseRes(key: string) {
        cc.loader.releaseRes(key)
    }
}