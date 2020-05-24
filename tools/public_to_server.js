var fs = require('fs');
var path = require('path');
var crypto = require('crypto');

var remote_assets = '../remote-assets/';
// var public_path = '../../game_server/src/web_server/www_root/hotupdate/';
var public_path = '../../game_server/dist/web_server/www_root/hotupdate/';

var public_util = require("./public_util")

////////////////////////////////////////
///拷贝remote_assets 资源到服务器hotupdate目录
////////////////////////////////////////

public_util.mkdirSync(public_path)
public_util.DeleteDirectory(public_path);
public_util.CopyDirectory(remote_assets,public_path)
console.log("\n")
console.log("assets public to server success!!!")
