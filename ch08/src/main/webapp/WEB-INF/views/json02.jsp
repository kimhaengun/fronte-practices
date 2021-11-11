<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
//DOM load Event
// 1. load : 모두 다 (DOM tag,CSSDOM,Image) 로딩 / 느려.. 느림
// 2. DOMContentLoaded : DOM만 로딩(CSSOM, Image / 로딩안함)
window.addEventListener("DOMContentLoaded",function(){
	console.log("나와라!!!!");
	document.getElementsByTagName("button")[0]
			.addEventListener('click',function(){
				console.log("클릭 이벤트 나와라!!!");
				var xhr = null;
				if(window.ActiveXObjext){ //IE8
					xhr = new ActiveXObject('Microsoft.XMLHTTP');
				}else if(window.XMLHttpRequest){ //
					xhr = new XMLHttpRequest();
				}else{
					console.log("Ajax 기능을 사용할 수 없습니다.");
					return;
				}
				console.log(xhr);
				xhr.addEventListener('readystatechange',function(){
					if(this.readyState == XMLHttpRequest.UNSENT){
						//readyState : 0
						//request 초기화 되기 전
						console.log("State:UNSENT");
					}else if(this.readyState == XMLHttpRequest.OPENED){
						//readyState : 1
						//서버와 연결 성공
						console.log("State:OPENED");						
					}else if(this.readyState == XMLHttpRequest.HEADERS_RECEIVED){
						//readyState : 2
						//서버가 request를 받음
						console.log("State:HEADER_RECEIVED");
					}else if(this.readyState == XMLHttpRequest.LOADING){
						//readyState : 3
						//respone 처리중
						console.log("State:LOADING");
					}else if(this.readyState == XMLHttpRequest.DONE){
						//readyState : 4
						//response 처리가 끝남
						console.log("State:DONE");
						if(this.status != 200){
							console.error(this.state);
							return;
						}
						
						console.log(this.responseText, typeof(this.responseText));
						var response = JSON.parse(this.responseText);
						console.log(response, typeof(response));
						
						var html = "";
						html+=("<h2>"+response.data.no+"</h2>");
						html+=("<h2>"+response.data.name+"</h2>");
						html+=("<h2>"+response.data.message+"</h2>");
						
						document.getElementById("data").innerHTML=html;
					}
				});
				
				xhr.open("get",'${pageContext.request.contextPath}/api/json', true);
				xhr.send();
			});
});
</script>
</head>
<body>
	<h1>AJAX Test - JSON Format Date</h1>
	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>