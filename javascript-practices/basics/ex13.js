/**
 * string
 */
var str1 = "Hello World";
for (var i =0; i <str1.length; i++){
    console.log(str1[i]);
}

//문자열 합치기
var str2 = "hello";
var str3 = "world";
var str4 = str2+''+str3;
console.log(str4);

//캐스틸
var str5 = 5 + "5";
console.log(str5);

var str6 = "bollean :"+true;
console.log(str6);

//메소드
var str7 = "string1 string2 string3";
var index = str7.indexOf("string2");
console.log(index);

var str8 = str7.substr(10); //10부터 끝까지 출력
console.log(str8);

var str9 = str7.substring(10,3);
console.log(str9);

var str10 = str7.substring(10,13);
console.log(str10);

var a = str7.split(" ");
console.log(a);

var str11 = 'asdfg';
var a = str11.split(":");
console.log(a);