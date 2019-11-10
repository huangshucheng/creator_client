export default class DateUtil {

    static getSysDate(): string {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        var day = now.getDay();                 //得到周几
        var hour = now.getHours();              //得到小时
        var minu = now.getMinutes();            //得到分钟
        var sec = now.getSeconds();             //得到秒
        var hm = now.getMilliseconds();         //毫秒
        let dataStr = year + "-" + month + "-" + date + " " + hour + ":" + minu;
        return dataStr;
    }

    //格式化时间函数
    //let dateStr = formatDate("yyyy/MM/dd hh:mm", timestamp)
   public formatDate(format: string, timestamp: number): string {
        let date = new Date();
        date.setTime(timestamp * 1000);
        let o = {
            "M+": date.getMonth() + 1,                 //月份   
            "d+": date.getDate(),                    //日   
            "h+": date.getHours(),                   //小时   
            "m+": date.getMinutes(),                 //分   
            "s+": date.getSeconds(),                 //秒   
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
            "S": date.getMilliseconds()             //毫秒   
        };
        if (/(y+)/.test(format))
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o)
            if (new RegExp("(" + k + ")").test(format))
                format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return format;
    }
}