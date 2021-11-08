/**
 * URL 다루기
 */

var url1 = "http://www.mysite.com/user?name=둘리&age=10";

//1.escape: URL전부 encoding(x) deprecated
var user2 = escape(url1);
console.log(user2);

//2.encodeURI : parameter 부분만 encoding 해줌
var url3 = encodeURI(url1);
console.log(url3);

//3.encodeURIComponent : 값만 encoding 해야하는 경우
var url4 = encodeURIComponent(url1); // 안 좋은 사용예..
console.log(url4);

//만들어야 할 URL / 이게 찐이다..
//http://mysite.com/user?no=10&name=둘리&email=kick@nver.com

var toQueryString = function(o){
    var qs = [''];
    for(prop in o){
        qs.push(prop+"="+o[prop]);
    }
    return qs.join("&");
}
var url = "http://mysite.com/user?no=10&name=둘리&email=kick@naver.com";
var params={
    name : '둘리',
    no : 10,
    email : 'kick@naver.com'
}

var url5 = url + "?" + toQueryString(params);
console.log(url5);

// $.ajax({
//     url : url,
//     type : 'post',
//     dataType : 'application/json',
//     data : "no=10&name=둘리&email=kick@naver.com"
// });
