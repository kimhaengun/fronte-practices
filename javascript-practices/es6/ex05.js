/**
 * Arrow Function (화살표 함수)
 */
const power = function(x){
    return x * x;
}

let numbers = [1,2,3,4,5,];
numbers.forEach(function(n){
    process.stdout.write(`${n}:${power(n)}\t`);
});

console.log("\n-----------\n");

const pow = x => x*x;

numbers.forEach(function(n){
    // let reult = (function(x){
    //     return x*x;
    // })(n);

    // let result = (x => {
    //     return x*x;
    // })(n);

    // let result = (x => x*x)(n);

    let result = pow;

    process.stdout.write(`${n}:${power(n)}\t`);
});