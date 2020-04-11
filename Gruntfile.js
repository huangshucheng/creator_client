//引入rd模块读取文件
let rd = require('rd');
//获./tools/grunt-task目录下取所有文件
let taskScripts = rd.readFileSync('./tools/grunt-task');
module.exports = (grunt) => {
	//我们这里使用了grunt-shel&grunt-sync插件
	//下面shell与sync对象分别用于收集两种任务配置
	let shell = {};
	let sync = {};
	//将grunt设置为全局变量
	global.grunt = grunt;
	//require所有任务模块， 放入tasks数组let
	tasks = [];
	taskScripts.forEach((script) => {
		let task = require(script);
		if (task.init) {
			//让task对象自己填充sync和shell内容
			task.init(sync, shell);
			tasks.push(task);
		}
	});
		//配置sync、shell两大任务
	grunt.initConfig({
		sync,
		shell,
	});
	//注册grunt-shell插件， 用于执行外部shell命令
	grunt.loadNpmTasks('grunt-shell');
	//注册grunt-sync插件， 用于本地文件同步
	grunt.loadNpmTasks('grunt-sync');
	//注册自定义的grunt任务
	tasks.forEach(task => task.registerTask());
};