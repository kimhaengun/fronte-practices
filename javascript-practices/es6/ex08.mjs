//1.
// unnamed export 모듈에서 대상을 하나 import 할 때마다 이름을 지정해야함.
// --> 모든 파일에 모듈 선언 해줘 쓸수 있음.   .mjs

import myFunction from './ex08.01.mjs'; //defualt 값으로 줬기 때문에 myFunction(임의)로 선언
import myObject from './ex08.02.mjs';

console.log(myFunction(10,20));
console.log(myObject.add(10,20));

console.log("===========================");
//2.
// named export는 import 대상이 다수가 될 수 있기 때문에 하나의 특정 이름으로 받을 수 없다. 
//  = import m from

import * as m from './ex08.03.mjs' //ex08.03의 함수를 모두 받고 싶을 떄 * as m --> m.add
console.log(m.add(10,20));
console.log(m.substract(10,20));

console.log("===========================");

//3. 얘가 짜세임
import { substract } from './ex08.04.mjs';
console.log(substract(20,10));

console.log("===========================");


//4..
import math,{add} from './ex08.05.mjs';
console.log(math.substract(20,10), add(10,20));