import HttpUtil from '../utils/HttpUtil';
import GameAppConfig from '../config/GameAppConfig';

let manifest_filename = "manifest.json"

class HotUpdate {
    public static readonly instance: HotUpdate = new HotUpdate();

    _storagePath:string = null;
    _hotpath:string = null;
    _url: string = "http://" + GameAppConfig.LOCAL_HOST + GameAppConfig.REMORE_HTTP_PORT

    constructor(){
        // this._storagePath = jsb.fileUtils.getWritablePath();
        //test
        HttpUtil.get(this._url, "/hotupdate/" + manifest_filename ,null,function (err,data) {
            cc.log("hcc>>httpget", err,data)
        });
    }

    public static getInstance() {
        return HotUpdate.instance;
    }


    check_hotupdate_start(){
        // 设置一下搜索路径
        this.set_hotupdate_search_path();

        var now_list = this.local_hotupdate_download_list(this._hotpath);

        var server_list = null;
        // http_download("http://127.0.0.1:6080", "/hotupdate/hotupdate.json", null, function(err, data) {
        HttpUtil.get(this._url , "/hotupdate/" + manifest_filename, null, function (err, data) {
            if (err) {
                return;
            }
            server_list = JSON.parse(data);
            var i = 0;
            var download_array = [];
            for (var key in server_list) {
                if (now_list[key] && now_list[key].md5 === server_list[key].md5) { // 无需更新
                    continue;
                }
                download_array.push(server_list[key]);
            }

            if (download_array.length <= 0) {
                console.log("下载列表为空");
                return;
            }


            var i = 0;
            var callback = function () {
                i++;
                if (i >= download_array.length) {
                    jsb.fileUtils.writeStringToFile(data, this.hotpath + "/" + manifest_filename);
                    cc.audioEngine.stopAll();
                    // cc.game.restart();
                    return;
                }

                this.download_item(this._storagePath, download_array[i], callback);
            }.bind(this);

            this.download_item(this._storagePath, download_array[i], callback);

        }.bind(this));
    }

    set_hotupdate_search_path() {
        var path = jsb.fileUtils.getSearchPaths();
        var write_path = this._storagePath;
        var hotpath = write_path + "/hotupdate";
        if (!jsb.fileUtils.isDirectoryExist(hotpath)) {
            jsb.fileUtils.createDirectory(hotpath);
        }
        path.unshift(hotpath);
        // 把热更新的path放到最前面
        jsb.fileUtils.setSearchPaths(path);

        this._hotpath = hotpath;
    }
    
    local_hotupdate_download_list(hotpath:string) {
        var json = {};
        if (jsb.fileUtils.isFileExist(hotpath + "/" + manifest_filename)) {
            let str = jsb.fileUtils.getStringFromFile(hotpath + "/" + manifest_filename);
            json = JSON.parse(str);
        }
        else { // 每次打包这个把本的时候，你都要带上hotupdate.json, Android assets目录下
            let str = jsb.fileUtils.getStringFromFile(manifest_filename);
            json = JSON.parse(str);
        }
        return json;
    }

    download_item(write_path, server_item, end_func) {
        if (server_item.file.indexOf(".json") >= 0) {
            HttpUtil.get(this._url  , "/" + server_item.file, null, function (err, data) {
                if (err) {
                    if (end_func) {
                        end_func();
                    }
                    return;
                }

                {
                    var dir_array = new Array(); //定义一数组 
                    dir_array = server_item.dir.split("/");
                    var walk_dir = write_path;

                    for (var j = 0; j < dir_array.length; j++) {
                        walk_dir = walk_dir + "/" + dir_array[j];
                        if (!jsb.fileUtils.isDirectoryExist(walk_dir)) {
                            jsb.fileUtils.createDirectory(walk_dir);
                        }
                    }
                    jsb.fileUtils.writeStringToFile(data, write_path + "/" + server_item.file);
                }
                if (end_func) {
                    end_func();
                }
            });
        }
        else {
            HttpUtil.download(this._url,"/" + server_item.file, null ,function (err, data) {
                if (err) {
                    if (end_func) {
                        end_func();
                    }
                    return;
                }

                {
                    var dir_array = new Array(); //定义一数组 
                    dir_array = server_item.dir.split("/");
                    var walk_dir = write_path;

                    for (var j = 0; j < dir_array.length; j++) {
                        walk_dir = walk_dir + "/" + dir_array[j];
                        if (!jsb.fileUtils.isDirectoryExist(walk_dir)) {
                            jsb.fileUtils.createDirectory(walk_dir);
                        }
                    }
                    jsb.fileUtils.writeDataToFile(data, write_path + "/" + server_item.file);
                }

                if (end_func) {
                    end_func();
                }
            });
        }

    }


}

export default HotUpdate;