/*
    변수의 범위 (Scope)
    1.자바스크립트는 어휘에서 변수의 범위를 알수 있는 정적 범위
    2.ES6이전
     - 자바와 같은 블록 범위를 지원하지 못했음.
     - 함수 범위(Function Scope)만 지원했다.
     - function(){...} 안에서 변수 앞에 var 키워드를 사용하면 함수 범위를 가지게 된다.
     - 만익, var 키워드 없이 함수안에서 변수를 정의하게 되면 전역 범위를 가지게 된다 --> Hoisting
    2.ES6이후
     - 새롭게 Block Scope이 생겼다.
     - let : 변수
     - const : 상수
     - *let, const 만 사용하자*
*/


var i = 10;
var f = function(){
    var i = 20;
    j= 100;
    console.log(i);
    i = j-1;
}
f();
console.log(i);
console.log(j);

{
    y = 90;
    let x = 10000;
    const PI = 3.14;
    x = 100;
    // PI = 0; //상수라 안된다
}
//error : {}접근이 안됨
// console.log(x);


