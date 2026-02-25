var list=document.getElementById("list");
// list.onclick=function(){
//     console.log("点击了");//给父元素设置，点击子元素也会有影响
// }
list.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){//或者括号里面（e.target.tagName ==="LI"换成（e.target.tagName。toLowerCase() ==="li"
        console.log("点击了li标签");//这是DOM2的方法，也是点击li元素，就会显示字体
        console.log(e.target.innerHTML);//这个是点击li元素，会显示li元素里面的内容

    }
})
console.log("-------------------------");
 var timer=setTimeout(function(){
    console.log("大家好，延迟3秒之后执行");
},3000)//延时打印
clearTimeout(timer)//这是取消定时器
var name="iwen";
var user={
    name:"itbaizhan",
    getName:function(){
        // var that=this;
        setTimeout(function(){
            console.log(this.name);//在setTimeout函数里面，this指的是全局变量的name了,就是iwen，将里面的this用that代换，那么打出来就是itbaizhan了
        },1000);
        //console.log(this.name);//这个打印出来的是itbaizhan，this永远指向当前调用者
    }
}
user.getName();
console.log("--------------------------------")
var i=0;
setInterval(function(){//每间隔一秒打印一次
    i++;
    console.log(i);
},1000)
console.log("----------------");
var someDiv=document.getElementById("someDiv");
var opacity=1;
var fader=setInterval(function(){//这个是每间隔一段时间
    if(opacity>0){
        opacity-= 0.05
    someDiv.style.opacity=opacity;
    }else{
        clearInterval(fader);
    }
},60)
