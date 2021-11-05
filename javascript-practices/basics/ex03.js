/* null과 undefined */
var myVar1 = undefined; // 명시적으로 undefined 대입 - 정의
var myVar1;             // 암시적으로 undefined 대입 - 선언
var myVar2 = null;

console.log(myVar1 == myVar2); //값비교 true

console.log(myVar1 === myVar2); //타입+값비교 false

console.log(myVar1+" : "+myVar2);
console.log(typeof(myVar1)+ " : " +typeof(myVar2));
console.log(4 == "4");
console.log(false==0);
console.log("abc" == new String("abc"));
