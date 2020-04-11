let path = require('path');
//获取grunt参数， 是否模拟执行， 不真实复制文件
let pretend = grunt.option('pretend');
//获取资源根路径， 资源路径是定义在单独的define.js文件
let { UI_ROOT_PATH， ANI_ROOT_PATH } = require('./define');
//定义模块名， 也就是在assets下的目录名
const moduleName = 'game1';
//定义同步任务
const syncTask = {
	//同步UI任务： 普通图片、背景图片
	'sync-ui': {
			files: [
					//同步UI图片
					{
						//设置过滤器， 排除atlas、headIcon、svn、隐藏文件
						src: ['**', '!atlas/', '!headIcon/', '!**/.*', '!**/.svn', '!**/.svn/**']
						dest: `./assets/${moduleName}/texture/ui`, //目标路径，将文件同步到此处
						cwd: path.join(UI_ROOT_PATH, moduleName, 'ui') //美术UI资源目录
					},
					//同步headIcon
					{
						//排除 atlas 目录及下面的子目录、文件
						src: ['**', '!**/.*', '!**/.svn', '!**/.svn/**'],
						//同步到resources/moduleName/texture目录下
						dest: `./assets/resources/${moduleName}/texture`,
						cwd: path.join(UI_ROOT_PATH, moduleName, 'ui', 'headIcon')
					},
					//同步背景图片
					{
						src: ['**', '!**/.*', '!**/.svn', '!**/.svn/**'],
						dest: `./assets/${moduleName}/texture/bg`,
						cwd: path.join(UI_ROOT_PATH, moduleName, 'bg')
					}
				],
			
			verbose: true, // 显示日志
			pretend: false, // 模拟输出updateAndDelete:
			true, // 删除dst冗余文件compareUsing:
			'md5', // 可选'mtime/md5'
			ignoreInDest: ['**/*.meta', '**/*.pac', '**/.svn/**'], // 不删除.meta文件
	},
}
