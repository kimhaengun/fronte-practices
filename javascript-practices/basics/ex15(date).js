/**
 * Date
 */

//현재 시간
var now = new Date();
console.log(now);

//2022년 11월 8일 
var d1 = new Date(2022,10,8); //monnth-1
console.log(d1);

//2022년 11월 8일 12:30:40 
var d1 = new Date(2022,10,8,12,30,40); //monnth-1
console.log(d1);

//객체 메솓
console.log("년도 : "+(d1.getYear() + 1900 + "\n")+
            "월 : "+(d1.getMonth() + 1 + "\n")+
            "일 : "+(d1.getDate() + "\n")+
            "시 : "+(d1.getHours() + "\n")+
            "분 : "+(d1.getMinutes() + "\n")+
            "초 : "+(d1.getSeconds() +"\n")+
            "밀리초 : "+(d1.getMilliseconds() + "\n")            
);

d1.setFullYear(2023);
console.log(d1);

d1.setMonth(11); //12월 / 12-1
console.log(d1);