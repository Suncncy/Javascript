function clickHandle(){
    console.log("点击了按钮");//点击按钮时，会在console上面显示这一行里面的文字
}
//这是HTML事件：缺点，和js未分开
console.log("--------------");
var btn=document.getElementById("btn");
btn.onclick=function(){
    console.log("点击了");//会在console上面显示这一行里面的文字 
}
//这是DOMO事件，优点HTML和js是分开的,无法同时添加多个
console.log("--------------");
var btn2=document.getElementById("btn2");
btn2.addEventListener("click",function(){
    console.log("再一次点击");//会在console上面显示这一行里面的文字 
    }
)
//DOM2事件：可以添加多个事件

var btn3=document.getElementById("btn3");
var btn4=document.getElementById("btn4");
var btn5=document.getElementById("btn5");
var btn6=document.getElementById("btn6");
var btn7=document.getElementById("btn7");
var btn8=document.getElementById("btn8");
var btn9=document.getElementById("btn9");
var btn10=document.getElementById("btn10");
var btn11=document.getElementById("btn11");
btn3.onclick=function(){
    console.log("单击事件");//单击才会显示
}
btn4.ondblclick=function(){
    console.log("双击事件");//双击才会显示
}
btn5.onmousedown=function(){
    console.log("鼠标按下");//鼠标按下才会显示
}
btn6.onmouseup=function(){
    console.log("鼠标抬起");//鼠标抬起才会显示
}
btn7.onmousemove= function(){
console.log("鼠标移动");//鼠标在小盒子上面移动就会显示文字
}
btn8.onmouseenter=function(){
    console.log("鼠标进入了");//鼠标进入盒子才会显示，但是进入子节点就不会再次显示字体
}
btn9.onmouseleave=function(){
    console.log("鼠标离开了");//鼠标离开盒子才会显示，但是进入子节点就不会再次显示字体
}
btn10.onmouseover=function(){
    console.log("鼠标进入了");//鼠标进入盒子才会显示，进入子父级元素都会分别实现显示字体的效果
}

btn11.onmouseout=function(){
    console.log("鼠标离开了");//鼠标离开盒子才会显示，进入子父级元素都会分别实现显示字体的效果
}




