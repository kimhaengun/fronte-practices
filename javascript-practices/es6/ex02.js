/*
    const : Block Scope의 상수
*/

//1.block scope 확인
try{
    if(true){
        const c = 10;
    }

    console.log(c);
}catch(e){
    console.error('error:'+e);
    //error:ReferenceError: c is not defined
}

//2.error: 대입(Assignment) 에러 확인
try{
    const c = 10;

    c = 20;

    console.log(c);
}catch(e){
    console.error('error:'+e);
    //error:TypeError: Assignment to constant variable.
}