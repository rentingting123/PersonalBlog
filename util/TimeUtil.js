function getNow() {
    var a = new Date()
    var b = a.toLocaleTimeString();//输出时 分 秒
    var c = a.toLocaleDateString();//输出年 月 日
    var res = c +' '+ b
    return res;
}
module.exports.getNow = getNow;