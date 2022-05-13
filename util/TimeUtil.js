function getNow() {
    // var a = new Date()
    // var b = a.toLocaleTimeString();//输出时 分 秒
    // var c = a.tolocalestring();//输出年 月 日
    // var res = c +' '+ b
    var now = new Date;
    var y = now.getFullYear();
    var m = now.getMonth();
    var d = now.getDate();
    var h = now.getHours();
    var mm = now.getMinutes();
    var s = now.getSeconds();
    h = h < 10 ? "0" + h : h;
    d = d < 10 ? "0" + d : d;
    m = m < 10 ? "0" + m : m;
    mm = mm < 10 ? "0" + mm : mm;
    s = s < 10 ? "0" + s : s;
    var xy = y + "-" + m + "-" + d + " " + h + ":" + mm + ":" + s;
    console.log(xy,'输出年 月 日')
    
    return xy;
}
module.exports.getNow = getNow;