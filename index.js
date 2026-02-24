var btn=document.getElementById("btn");
//Event事件对象，其实就是参数
btn.onclick=function(event){
    //console.log(event.target);console上出现你此时的操作
    event.target.innerHTML="点击之后";//将“按钮”这两个字换成你想要的字
    console.log(event.type);//console上面显示的是，你所干的事的属性
}
var it=document.getElementById("it");
it.onclick=function(event){
    event.preventDefault();//点击了链接，不会跳转到网页
    console.log("点击了A");
}
var root=document.getElementById("root");
var box=document.getElementById("box");
root.onclick=function(){
console.log("root");
}
box.onclick =function(e){
    e.stopPropagation();//鼠标点击内部盒子时候，不会连着外部盒子的root也显示了
console.log("box");
}
//------------------------------------------------------
var username=document.getElementById("username");
var password=document.getElementById("password");
username.onkeydown=function(e){
    console.log("按下了");
    //console.log(e.target.value);//value属性就是输入框的数据，在按下键盘的时候显示
}
username.onkeyup=function(e){
    console.log(e.target.value);//在抬起键盘的时候显示
}
username.onkeypress=function(e){
    console.log("keypress");//除了按下数字和字母有显示的内容，剩下的都无显示的内容

}
password.onkeyup=function(e){
    console.log(e.keyCode);//会显示键盘上每个符号所对应的ASCMALL值，回车是13
}
