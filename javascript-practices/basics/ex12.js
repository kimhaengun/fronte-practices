/**
 * Array 확장(prototype 기반의 확장) : List 메소드 추가
 */

Array.prototype.insert = function (index, value) {
  if(value instanceof Array){
    //1.for
    // for(var i=0; i<value;i++){
    //     this.splice(index++,0,vale[i]);
    // }
    //2.foreach
    // var _this = this;
    // value.forEach(function(e) {
    //     _this.splice(index++,0,e);
    // });

    value.forEach(value,function(e) {
        this.splice(index++,0,e);
    }.bind(this));
  }else{
    this.splice(index, 0, value);

  }

}

Array.prototype.remove = function (index) {
    this.splice(index, 1);  
  }

  //List로 사용하기
  var a =[1,2,4];
  console.log(a);

  a.insert(2,3);
console.log(a);

a.remove(3);
console.log(a);

a.insert(2,['a','b','c']);
console.log(a);


var f = function(param){
    console.log(this.name+" : "+param);
}

// f();
var o = {
    name : "kickscar"
};
f.call(o,"kickscar@naver.com");

f.apply(o);
