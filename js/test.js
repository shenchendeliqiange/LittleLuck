window.onload = function(){
  //要执行的js代码段  
function foo(x) {
    var tmp = 3;
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var bar = foo(2); // bar 现在是一个闭包
bar(10);
bar(10);
bar(10);
}