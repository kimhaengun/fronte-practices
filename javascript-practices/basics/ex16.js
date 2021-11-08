/**
 * function 타입의 객체
 */

//함수를 생성하는 방법1
function f1(a,b){
    return a+b;
}

console.log(typeof(f1),f1(10,20));

// 방법2
var f2 = function(a,b){
    return a+b;
}

console.log(typeof(f1),f1(10,20));

// 방법 3 --> new 연산자와 함께 function() 생성자 함수를 사용하는 방법
var f3 = new Function('a','b','return a+b');
console.log(typeof(f3), f3(10,30));

//방법 4 --> 익명함수
//callback
setTimeout(function(){
    console.log("time out!");
}, 2000);

//즉시 실행하는 함수
var s =(function(a,b){
    return a+b;
})(10,20);

console.log(s);

//가변 파라미터 함수
var sum = function(){
    console.log(arguments instanceof Array); //Array가 아니다. 유사 배열임..

    var sum = 0;
    //구현1
    // for(var i =0; i< arguments.length; i++){
    //     sum += arguments[i];
    // }
    array.prototype.forEach.call(arguments, function(e){
        sum += e;
    });
    return sum;
}

console.log(sum(10,20));
console.log(sum(10,20,30));
console.log(sum(10,20,30,40,50));