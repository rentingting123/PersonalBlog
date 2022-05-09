function getNow() {
    var a = new Date()
        var b = a.toLocaleTimeString();//输出时 分 秒
        var c = a.toLocaleDateString();//输出年 月 日
        var d = c.split("/");
        if (d[1] < 10) {
            d[1] = '0' + d[1]
        }
        // console.log('当前时间:',a);
        // console.log('输出时分秒:',b);
        // console.log('输出年月日:',c);
        // console.log('转化格式:',d.join('-')); 
        var res = c +' '+ b
    return res;
}
module.exports.getNow = getNow;