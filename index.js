//这是我的第一个js代码
        console.log('Hello World')
//let这个的值可以被修改,const的值不可以被修改
// let age=30;这是一个变量
// const age=30这是一个常量，可以定义数组;
let age=30;
age=31;
console.log(age);
//String,Number,BooLean;nuLL,undefined数据类型
const username="John";
const age2=36;
const isCool=true;
const rate=4.5;
const x=null;//其返回的类型为object
const y=undefined;
let z;
console.log(typeof age)

console.log("My name is " + username +"and I am age " + age2);
//console.log(`My name is ${username} and I am ${age2}`);
const hello=`My name is ${username} and I am ${age2}`;
console.log(hello);

const s="Hello World!";
console.log(s.length);//判断字符串长度
console.log(s.toUpperCase());//把字符串全部大写；
console.log(s.toLowerCase());//把字符全部小写；
console.log(s.substring(0,5).toUpperCase());//substring是切断，0是从第一个字母开始数的，结尾字母是截断点的前一个字母
console.log(s.split(''));//这个是以最小单位进行分割
const a="technology, computer, it, code";
console.log(a.split(", "));//以逗号和空格进行分割；

const numbers = new Array(1,2,3,4,5);
//const fruits = ["apples","oranges","pears",10,true];
const fruits = ["apples","oranges","pears"];
fruits[3]="grapes";
fruits.push("mangos");//这是在尾部进行补充
fruits.unshift("strawberries");//这是在头部进行补充
fruits.pop();//删除尾部的元素
//console.log(fruits[1]);这个输出的还是oranges，代表索引是从0开始的
console.log(fruits);
console.log(numbers);
console.log(Array.isArray(fruits));//这是判断是不是数组；
console.log(Array.isArray('hello'));//这个报字符串就会false
console.log(fruits.indexOf("oranges"));//这个是查找，进行索引

const person={
    firstName:"John",
    lastName: "D.O.",
    age:30,
    hobbies:["music","movies","sports"],
    address:{
        street:"50 main st",
        city:"Boston",
        stast:"MA",
    },
};
console.log(person);//这是全部访问
console.log(person.firstName,person.lastName);//这是访问一些详细的
console.log(person.hobbies[1]);
console.log(person.address.city);
const {
    firstName,
    lastName,
    address:{ city },
} = person;
console.log(city);//就直接进行访问了
person.emall="666@qq.com";//添加新的属性
console.log(person);

const todos = [
    {
        id:1,
        text:"Take out trash",
        isCompleted:true,
    },
    {
        id:2,
        text:"Meeting with boss",
        isCompleted:true,
    },
    {
        id:3,
        text:"Dentist appt",
        isCompleted:false,
    },
];
console.log(todos);
console.log(todos[1].text);//详细进行访问
const todoJSON = JSON.stringify(todos)
console.log(todoJSON);//输出JSON格式

const x2 =20;
const y2=5;

if (x2===10||y2>3){//三等号是进行严格判断的,二等号不是严格控制的,||是或者的意思，&&是并且的意思
    console.log("x2 is 10 y2=5");
}else if(x2>10){
console.log("x2 is greater than 10")
}
else{
    console.log("x2 is less than 10");
}

const x3=10;
//const color=x>10?"red":"blue";
const color="green"
console.log(color);

switch(color){
    case"red":
    console.log("color is red");
    break;
     case"blue":
    console.log("color is blue");
    break;
    default:
    console.log("color is not red or blue");
}

for(let i=0;i<todos.length;i++){
    //console.log(i)
    //console.log(`For Loop Number:${i}`);
    console.log(todos[i].text);
}
let i=0;
while(i<10){
    console.log(`While Loop Number:${i}`);
    i++;  
}
for(let todo of todos){
    console.log(todo);
}







