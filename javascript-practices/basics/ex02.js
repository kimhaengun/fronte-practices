/*
    변수와 데이터 타입
    기본타입(primitive type)
*/

/*
    자바스크립트의 객체를 구분하는 방벙
    1.내장(Built-In,Native, Engine) 객체
      자바스크립트 엔진안에 미리 내장되어 있는 객체
      Number, Boolean, Date, RegExp .... : 생성자 함수
      ParsInt, setTimeout, .... : 일반 함수

    2.호스트 객체
      자바스크립트 엔진이 임베디드된 환경(호스트)의 객체(자바스크립트 접근 가능)
      호스트 환경이 브라우저라면 : document, location, XmlHttpRequest, window, ....
      호스트 환경이 노드(Node.js) 라면 : os, http, fs, path 
    3.사용자 객체
      자바스크립트 엔진이 실행되면서 생성되는 객체들...
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

console.log("=======================원시타입과 원시 타입을 wrapper 객체는 구분없이 사용할 수 있다.========================");
console.log(i+i2);
console.log(s+s2);

//원시 타입에 메소드가 호출 될 때 ,
//임시 Wrapper 객체가 생성되어 메소드 호출이 일어난 뒤 사라진다.(유사 객체)

console.log("=======================원시타입도 메소드 호출이 가능하다.========================");
console.log(b.valueOf());
console.log(b2.valueOf());