/* 
    구문(statement)

    구문의 예~
    1.자바스크리브 실행 단위
    2.구문 구성 요소
     - 값, 연산자 : 표현식
     - 주석 : 구문을 구성해도 실행x
     - 
    
    3.구문의 예
    if,
    is~else,
    switch,
    for,
    while,
    do~while,
    for~in
    4.공백 : 토큰 분리
    5.세미콜론 : 원칙적으로 구문을 분리한다.
    6.개행
*/

/*
    ;는 표현식을 표현식 구문으로 만들어서 표현식을 바로 실행하게 한다.
 */
i = 10;
var s = "hello";
console.log(s);

//1.개형의 역할은  ;를 자동으로 붙여준다 (대행)
var s = "hello world"
console.log(s);

//2. 개행의 역할 : 상황에 따라 토큰을 분리하는 역할
a
=
2
+
2
console.log(a)