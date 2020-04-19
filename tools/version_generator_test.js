//发布测试服务热更新文件

var fs = require('fs');
var path = require('path');
var crypto = require('crypto');
var public_util = require("./public_util")

/**
发更新时，不用更新main.js
打apk包时，main.js 加上:
(function () {
    if (typeof window.jsb === 'object') {
        var hotUpdateSearchPaths = localStorage.getItem('HotUpdateSearchPaths');
        if (hotUpdateSearchPaths) {
            console.log("hcc>>hotUpdateSearchPaths:" , hotUpdateSearchPaths)
            jsb.fileUtils.setSearchPaths(JSON.parse(hotUpdateSearchPaths));
        }
    }
})();
 */

/*
build param
> node version_generator.js -v 1.0.0.0 -u http://your-server-address/tutorial-hot-update/remote-assets/ -s native/package/ -d assets/
> node version_generator.js -v 1.0.0.0 -s build/jsb-link/ -d remote-assets/
> node version_generator.js -v 1.0.0.0
编译参数说明：
- `-v` 指定 Manifest 文件的主版本号。
- `-u` 指定服务器远程包的地址，这个地址需要和最初发布版本中 Manifest 文件的远程包地址一致，否则无法检测到更新。
- `-s` 本地原生打包版本的目录相对路径。
- `-d` 保存 Manifest 文件的地址
 */

var manifest = {
    packageUrl: 'http://192.168.0.105:7000/hotupdate/',
    remoteManifestUrl: 'http://192.168.0.105:7000/hotupdate/project.manifest',
    remoteVersionUrl: 'http://192.168.0.105:7000/hotupdate/version.manifest',
    version: '1.0.0.0',
    assets: {},
    searchPaths: []
};

var remote_assets = '../remote-assets/';
var build_assets = '../build/jsb-link/';

// Parse arguments
var i = 2;
while ( i < process.argv.length) {
    var arg = process.argv[i];

    switch (arg) {
    case '--url' :
    case '-u' :
        var url = process.argv[i+1];
        manifest.packageUrl = url;
        manifest.remoteManifestUrl = url + 'project.manifest';
        manifest.remoteVersionUrl = url + 'version.manifest';
        i += 2;
        break;
    case '--version' :
    case '-v' :
        manifest.version = process.argv[i+1];
        i += 2;
        break;
    case '--src' :
    case '-s' :
        build_assets = process.argv[i+1];
        i += 2;
        break;
    case '--dest' :
    case '-d' :
        remote_assets = process.argv[i+1];
        i += 2;
        break;
    default :
        i++;
        break;
    }
}


////////////////////////////////////////
///拷贝src和res 到remote-assets
////////////////////////////////////////

let remote_src = remote_assets + "src/";
let remote_res = remote_assets + "res/";
let build_src = build_assets + "src/"
let build_res = build_assets + "res/"

public_util.DeleteDirectory(remote_src);
public_util.DeleteDirectory(remote_res);
public_util.CopyDirectory(build_src,remote_src)
public_util.CopyDirectory(build_res,remote_res)

////////////////////////////////////////
///生成manifest
////////////////////////////////////////

public_util.readDir(path.join(build_assets, 'src'), manifest.assets, build_assets);
public_util.readDir(path.join(build_assets, 'res'), manifest.assets, build_assets);

// console.log("assets>> " , manifest.assets)

var destManifest = path.join(remote_assets, 'project.manifest');
var destVersion = path.join(remote_assets, 'version.manifest');

public_util.mkdirSync(remote_assets);

fs.writeFile(destManifest, JSON.stringify(manifest), (err) => {
  if (err) throw err;
  console.log('generate 【project.manifest】 successfully, version:', manifest.version);
});

delete manifest.assets;
delete manifest.searchPaths;

fs.writeFile(destVersion, JSON.stringify(manifest), (err) => {
  if (err) throw err;
  console.log('generate 【version.manifest】 success!!! , version:', manifest.version);
});