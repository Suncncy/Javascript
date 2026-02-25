// window.onscroll=function(){
//     console.log("页面滚动了");//在页面滚动时，会打印上面文字
// }
function debounce(fn,delay){
    var timer=null;
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(fn,delay)
    }
}
function throttle(fn,delay){//节流代码
    var valid=true;
    return function(){
        if(!valid){
            return false;
        }
        valid=false;
        setTimeout(function(){
            fn();
            valid=true;
        },delay)
    }
}
window.onscroll=throttle(scrollHandle,200);
window.onscroll=debounce(scrollHandle,200);//在一段时间内，只让事件执行一次
function scrollHandle(){///防抖的函数
    var scrollTop=document.documentElement.scrollTop;
    console.log('滚动条位置'+scrollTop);//显示滚动条距离页面顶端的位置
    console.log("页面滚动了");//和上面的一样效果
}
console.log("-------------------------")
