var username=document.getElementById("username");
username.oninput=function(e){
    console.log(e.target.value);//实时进行读取文本框里面的内容
}
username.onselect=function(e){
    console.log("选中了");//在选中文本的时候会在console上面显示文字
}
var password=document.getElementById("password");
password.onchange=function(e){
    console.log(e.target.value);//只有在输入完成后，回车或者失去焦点时才会显示输入文本框里面的内容
}
var resetBtn=document.getElementById("resetBtn");
var myForm=document.getElementById("myForm");
resetBtn.onclick=function(){
    myForm.reset();//点击重置按钮，文本框里面的内容全部清空
}
function submitHandle(){
    console.log("想提交的事情");//相当于把文本框里面的内容提交给服务器
}