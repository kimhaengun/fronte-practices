// 6.구조분해

const user = {
    firstName : '뚤',
    lastName : '리',
    email : 'no@naver.com'
};

({firstName, lastName} = user);
console.log(firstName, lastName);