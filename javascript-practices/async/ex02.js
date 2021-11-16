const ex02 = function (param) {
    return new Promise(function (resolve, reject) {
        // 비동기 코드
        // 파일시스템 접근, 네트워크 통신, SQL to DB, setTimeout

        setTimeout(function (ex01) {
            if (param === 'param-data') {
                resolve('ok'); //error, data
            } else {
                reject(new Error('fail'));
            }
        }, 2000);
    });
}
if(require.main == module){
//test01 : success
ex02('param-data').then(function (res) {
    console.log(res);
});

//test02 : fail
ex02('param-data').catch(function (error) {
    console.error(error);

// 일반적으로 사용해야함. 
// ex02('....')
//     .then(res => {

//     })
//     .catch(error => {

//     });

});
console.log('wait................');
}else{
   module.exports = ex02; 
}
