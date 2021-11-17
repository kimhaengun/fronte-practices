// 6.구조분해

const user = {
    firstName : '뚤',
    lastName : '리',
    email : 'no@naver.com'
};

// let firstName = user.fistName;
// let lastName = user.lastName
// =
// ({firstName, lastName} = user);
const {firstName, lastName} = user;

console.log(firstName, lastName);

//ex02 - Default Value
const goods = {
    name: 'TV',
    price: 10000,
    stockCount: 30
}

let {name, price, countStock=0, stockCount=0} = goods;
console.log(name, price, countStock, stockCount);

//ex03 - 구조 분해해야 할 객체의 속성과 변수 이름이 다를 때 - 값만 가져오고 싶을때
const person = {
    name: '김뚤리',
    country: 'korea'
};
//다른 변수명 쓰고 싶을때
const {name: fullName, country: place} = person;
console.log(fullName,place);

//ex04 - 내부 객체(Nested Object)의 구조 분해
const student = {
    name: '뚤리',
    age: 10,
    score:{
        math:3,
        korean:5,
        science:1
    }
};
const {name: studentName, score:{math=0, korean=0, science=0, music=0}} = student;
console.log(`${studentName}의 성적 : 
수학 : ${math}
국어 : ${korean}
과학 : ${science}
음악 : ${music}
`);

//ex05 - 함수의 파라미터
const averageScore = function({name: studentName, score:{math=0, korean=0, science=0, music=0}}){
    console.log(`${studentName}의 평규는 ${(math+korean+science) /3} 입니다`);
};

averageScore(student);

//ex06 - 배여얼