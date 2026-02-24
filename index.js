var  root=document.getElementById("root");//打印出id
//console.log(root.id);
root.id="roots";//在element里面更改id
console.log(root.className);//打印出class
root.className="boxs box1";//修改元素里面的class标签,可以修改成多个标签
console.log(root.classList.add("mybox"));//进行添加class
root.classList.remove("boxs");//进行移除class
if(root.classList.contains("box1")){//进行判断是否包含
    console.log("yes");
}else{
    console.log("no");
}
root.classList.toggle("box2");//如果存在即删除，不存在即添加
//这个是读取root标签里面的内容：console.log(root.innerHTML);
//这是修改root标签里面的内容console.log(root.innerHTML="南阳理工学院");
//将innerHTML修改成innerText也有相同的效果，但是innerHTML可以识别标签，但是innerText识别不了标签，会把标签认成字符串
var str="<a href='https://www.itbaizhan.com'>百战</a>";
root.innerHTML=str;//这样出现的是百战的链接
root.innerText=str;//这样在视图里面只是把上面的链接照搬下来






