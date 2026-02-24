var box=document.getElementById("box")
console.log(box.clientWidth);
console.log(box.clientHeight);//只会包含padding的部分，在console里面显示
console.log(document.documentElement.clientHeight);//屏幕，视图的高度
console.log(document.body.clientHeight);//所写的盒子所占的高度
console.log("-----");
console.log(box.scrollWidth);//和上边的差不多一摸一样
console.log(box.scrollHeight);
console.log(document.documentElement.scrollHeight);
console.log(document.body.scrollHeight);
console.log("-----");
console.log(document.documentElement.scrollTop);//滚动高度
console.log("-----");
console.log(box.offsetWidth);//包含元素的本身，还有padding，还有border
console.log(box.offsetHeight);
console.log("-----");
console.log(box.offsetLeft);//元素距离左边的距离，还多一个浏览器自带的8px
console.log(box.offsetTop);//元素距离上边的距离


