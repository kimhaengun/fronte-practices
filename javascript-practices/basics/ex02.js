/*
    변수와 데이터 타입
    기본타입(primitive type)
*/

console.log("=======================원시타입(Primitive Type)========================");

var u = undefined;  //var u 와 동일하다 -> 값이 정의되지 않은 상태
console.log(typeof(u)); //undefined

var i = 10;
console.log("i : "+typeof(i)); //number

var s = "부우우우우웅";
console.log("s : "+typeof(s)); //string

var b = true;
console.log("b : "+typeof(b)); //boolean

console.log("=======================객체 (object Type)========================");
//1.new 생성자함수() 사용해서 생성

var i2 = new Number(1);
console.log("i2 : "+typeof(i2)); //object

var b2 = new Boolean(false);
console.log("b2 : "+typeof(b2)); //object

var s2 = new String("aaaaaaaaaah");
console.log("s2 : "+typeof(s2)); //object

var o = new Object();
console.log("o : "+typeof(o)); //object

var a = new Array();
console.log("a : "+typeof(a)); //object

var n = null;
var o2 = {}; //2.{} 객체 리터널 --> JSON Data
var a2 = []; //3.[] 배열 리터널

console.log("n : "+typeof(n)); //object

console.log("=======================객체2 (function Type)========================");
//1.new Function(...) 사용
//2.var f = function(){} 함수 리터널 사용해서 생성
//3.function f(){} 함수 리터ㄴ럴을 사용해서 생성

var f = new Function("a", "b", "return a+b");
console.log("f : "+typeof(f)); //function

var f2 = function(a,b){
    return a+b;
}
console.log("f2 : "+typeof(f2)); //function

