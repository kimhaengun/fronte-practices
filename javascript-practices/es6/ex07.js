// React 시작!!!

class Rect {
    constructor(w,h){
        this.w = w;
        this.h = h;
    }
    drow(){
        console.log(`Reate(w=${this.w}, h=${this.h}를 그렸습니다.)`);
    }

}

//test
const rect1 = new Rect(10,20);
const rect2 = new Rect(100,200);

rect1.drow();
rect2.drow();

console.log('==============================');

//생성자 함수 생성(prototype 기반)

const Circle = function(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
}
Circle.prototype.drow = function(){
    console.log(`Reate(x=${this.x}, y=${this.y}, r=${this.r}를 그렸습니다.)`);    
}

const circle1 = new Circle(10,20,5);
const circle2 = new Circle(100,200,5);

circle1.drow();
circle2.drow();

console.log('==============================');

//extends
class Shape{
    constructor(bgColor, lnColor){
        this.bgColor = bgColor;
        this.lnColor = lnColor;
    }
    drow(){
        console.log('그릴 수 없다');
    }

    area(){
        console.log('구할 수 없다');
    }

}

class Triangle extends Shape{
    constructor(w,h){
        super('red','black');
        this.w = w;
        this.h = h;
    }

    //@Override
    drow(){
        console.log(`Triangle(w=${this.w}), y=${this.h}, bgColor=${this.bgColor}, lnColor=${this.lnColor}`);
    }
}
const tri1 = new Triangle(10,20);

tri1.drow();
tri1.area();