/**
 * Array 메소드
 */

var color=['black','white','yellow'];
var fruits = ['apple','mango','banana'];

//concat

var a1 = fruits.concat(color);
console.log(a1);

//pop,push,stack 지원
var colors =color.pop();
console.log(colors);
console.log(color);

console.log("===push");
color.push("red");
console.log(color);

//join
console.log("===join");
var str = fruits.join(":");
console.log(str);

console.log("===reverse");
//reverse
console.log(fruits);
fruits.reverse();
console.log(fruits);

console.log("===shift");
//shift
var Numbers = [1000,2000,3000,4000,5000];
var number = Numbers.shift();
console.log(number,Numbers);

console.log("===sort");
//sort
var Numbers = [1000,3000,2000,4000,5000];
Numbers.sort();
console.log(Numbers);

console.log("===sort");
//slice
var numbers = Numbers.slice(1,3);
console.log(numbers);

console.log("===splice");
//splice
//index부터 count개를 삭제 후 삭제된 요소를 반환
console.log(fruits);
var splice = fruits.splice(0,2); //(index,count)
console.log(splice);
console.log(fruits);

console.log("*********");
var a1 = [0,1,2,3,4];
var splice = a1.splice(1,3,10);
//1,2,3,을 잘라내고 그자리에 10 추가
console.log(splice,a1);