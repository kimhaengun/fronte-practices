console.log("=======global======");
global.name='둘리';
console.log(name,global.name);

var email = 'doo@naver.com';
console.log(email,global.email);

console.log("=========function=========");
var f1 = function(){
    console.log(this);
}

f1();

//this 바꾸기
var o = {
    name : "마이콜"
}

f1.apply(o);

console.log("============function(call)============");
var f2 = function(s){
    console.log(s+" : " + this.name);
}
f2('hi');

f2.call(o,'hi');

