window.onload = function(){
  //Ҫִ�е�js�����  
function foo(x) {
    var tmp = 3;
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var bar = foo(2); // bar ������һ���հ�
bar(10);
bar(10);
bar(10);
}