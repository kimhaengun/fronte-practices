const ex01 = function(param, callback){
    // 비동기 코드
    // 파일시스템 접근, 네트워크 통신, SQL to DB, setTimeout
    
    setTimeout(function(ex01){
        if(param === 'param-data'){
            callback(null, 'ok'); //error, data
        }else{
            callback(new Error('fail'), null);
        }
    },2000);
}

//test01
//성공 시
ex01('param-data', function(error, res){
   if(error){
        console.error(error);
   }else{
       console.log(res);
   }
});

//test02
//실패 시
ex01('param-error', function(error, res){
    if(error){
         console.error(error);
    }else{
        console.log(res);
    }
 });

console.log("wait ...");
