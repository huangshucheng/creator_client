var fs = require('fs');
var path = require('path');
var crypto = require('crypto');

//创建文件夹,同步
function mkdirSync(path) {
    try {
        if (fs.existsSync(path) == false) {
            fs.mkdirSync(path);
            console.log("path " , path , "not exist, create success!");
        }else{
            // console.log("path " , path , "exist!");
        }
    } catch(e) {
        if ( e.code != 'EEXIST' ) throw e;
    }
}

//拷贝文件夹
function CopyDirectory(src, dest) {
    if (fs.existsSync(dest) == false) {
        fs.mkdirSync(dest);
    }
    if (fs.existsSync(src) == false) {
        return false;
    }
    // 拷贝新的内容进去
    var dirs = fs.readdirSync(src);
    dirs.forEach(function(item){
        var item_path = path.join(src, item);
        var temp = fs.statSync(item_path);
        if (temp.isFile()) { // 是文件
            fs.copyFileSync(item_path, path.join(dest, item));
            console.log("copy>>" , item_path , "--->>" ,  path.join(dest, item));
        } else if (temp.isDirectory()){ // 是目录
            CopyDirectory(item_path, path.join(dest, item));
        }
    });
    // console.log("copy dir" , src ,"to" ,dest , "success!");
}

//删除文件夹
function DeleteDirectory(dir) {
    if (fs.existsSync(dir) == true) {
        var files = fs.readdirSync(dir);
        files.forEach(function(item){
            var item_path = path.join(dir, item);
            if (fs.statSync(item_path).isDirectory()) {
                DeleteDirectory(item_path);
            }
            else {
                fs.unlinkSync(item_path);
                console.log("del>>" , item_path);
            }
        });
        fs.rmdirSync(dir);
    }
    // console.log("delete dir" , dir ,"success!");
}

//读取文件夹内容到obj
function readDir (dir, obj, relative_path) {
    // console.log("hcc>>dir: " , dir);
    // console.log("hcc>>obj: " , obj);
    if(!relative_path){
        return;
    }

    var stat = fs.statSync(dir);
    if (!stat.isDirectory()) {
        return;
    }
    var subpaths = fs.readdirSync(dir), subpath, size, md5, compressed, relative;
    for (var i = 0; i < subpaths.length; ++i) {
        if (subpaths[i][0] === '.') {
            continue;
        }

        subpath = path.join(dir, subpaths[i]);
        stat = fs.statSync(subpath);
        if (stat.isDirectory()) {
            readDir(subpath, obj, relative_path);
        }
        else if (stat.isFile()) {
            // Size in Bytes
            size = stat['size'];
            md5 = crypto.createHash('md5').update(fs.readFileSync(subpath)).digest('hex');
            compressed = path.extname(subpath).toLowerCase() === '.zip';

            // console.log('hcc>>relative_path: ' , relative_path ," , subpath:", subpath)
            relative = path.relative(relative_path, subpath);
            relative = relative.replace(/\\/g, '/');
            relative = encodeURI(relative);
            obj[relative] = {
                'size' : size,
                'md5' : md5
            };
            if (compressed) {
                obj[relative].compressed = true;
            }
        }
    }
}

let pubilc_util  = {
    mkdirSync : mkdirSync,
    CopyDirectory : CopyDirectory,
    DeleteDirectory : DeleteDirectory,
    readDir : readDir,
}

module.exports = pubilc_util;