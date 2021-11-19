// Reate 시작!!!

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