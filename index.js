function add(x,y){//不传参数的时候，括号里面什么也没有
    // var x=10;
    // var y=20;
    //console.log(x+y);
    return x+y;//返回到函数里面，不能再加任何代码，加了也不会执行
            //console.log("结果");
        }
        //add();可以反复调用,也可以先调用再创建
       // add(10,50);//传参数
       var result=add(10,50);
       console.log(result);

       
 var user={//创造一个对象user
    age : 13,
    name:"suncncy",
    jobs:["itbaizhan","sxt"],
    flag:true,
    getName:function(){
        console.log("D.O.")
    },
    container:{
        frontEnd:"WEB前端",
        backEnd:["python","java"]

    }
 }    
//  function getName(){

//  }  这是处在外部的函数
console.log(user.name);//对象的读取方式
for(var i=0;i<user.jobs.length;i++){//一层一层剥开
    console.log(user.jobs[i]);
}
user.getName();
console.log(user.container.frontEnd);//链式调用
for(var i=0;i<user.container.backEnd.length;i++){
    console.log(user.container.backEnd[i]);
}
 

var number=-100;
console.log(number);
console.log(Math.abs(-5));//abs是绝对值的意思
console.log(Math.max(10,25,89,63,78));//最大值
console.log(Math.min(10,25,89,63,78));//最小值
console.log(Math.floor(5.6));//向下取整，舍弃尾部
console.log(Math.ceil(5.6));//向上取整，直接进一，10.0的话，直接还是原来的
console.log(Math.random());//这个的大小范围是大于0，小于1；
function  getRandomArbitrary(min,max){
    var result=Math.random()*(max-min)+min;
    result=Math.floor(result);//进行取整
    console.log(result);
}
getRandomArbitrary(10,20);


console.log(Date.now());//当前时间距离1970.1.1 8点的毫秒数
console.log(new Date());//当前的标准时间
console.log(new Date(1771844026772).getDate());//显示的是今天是几号
console.log(new Date(1771844026772).getDay());//显示的是周几；
console.log(new Date(1771844026772).getFullYear());//显示的是年份；
console.log(new Date(1771844026772).getMonth());//显示的是月份，但是最后要加一；
//将month改成hours，Millseconds，Minutes，Seconds就会是小时，毫秒，分钟，和秒
var year=new Date(1771844026772).getFullYear();
var month=new Date(1771844026772).getMonth()+1;
var day=new Date(1771844026772).getDate();
console.log(year+"-"+month+"-"+day);
function leftDays(){//距离还有多少天过年的函数
    var today=new Date();
    var endYear=new Date(today.getFullYear(),11,31,23,59,59,999);
     var msPerDay=24*60*60*1000;
    var result=(endYear.getTime()-today.getTime())/msPerDay;
    console.log(Math.floor(result));
}
leftDays();

console.log(document);

//获取元素
//var divs=document.getElementsByTagName("div"); //这是根据标签,读取全部元素
var divs=document.getElementsByTagName("div")[1]//读取第二个元素
//console.log(divs);
divs.innerHTML="Hello World";//将第二个div盒子里面的元素进行更改；

//var text=document.getElementsByClassName("text")这是加一个class里面，读取元素，也可以括号里面加多个类，中间用空格进行分开
var text=document.getElementsByClassName("text")[0];//进行单独读取
//console.log(text);
text.innerHTML="hi";//对元素进行内部修改

var name=document.getElementsByName("login");
console.log(name);//使用率极低

var root=document.getElementById("root");//直接读取到一个，因为id是唯一的
console.log(root);
root.innerHTML="呵呵呵";//进行更改

var nav=document.querySelector(".nav");//class用.,id用#，这里的nav不是仅仅一个名字，而是一个选择器
console.log(nav);//只能打印一个

//var navs=document.querySelectorAll(".nav");//读取全部的
var navs=document.querySelectorAll(".nav")[1];//读取一个的
console.log(navs);


//创建元素
var text1=document.createElement("p");//在元素控制台上，创建一个新的p标签
var content=document.createTextNode("我是文本");
var id=document.createAttribute("id");//创建属性
id.value="root1";
//console.log(content);在元素台上，展示我是文本的字样
//console.log(text1);
text1.appendChild(content);//作用是将文字放进p标签之中
text1.setAttributeNode(id);//将id也加进p标签里面，这个只作用于属性标签的添加
console.log(text1);
//console.log(id);
var container=document.getElementById("container");//在元素台上打印出来
//console.log(container);
container.appendChild(text1);//这个会在页面展示，在HTML里面加


