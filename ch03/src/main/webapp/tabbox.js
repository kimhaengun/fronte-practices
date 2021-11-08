//DOM Level 1 Event 처리 : HTML element의 event의 Listener를 등록하는 방식
//1) JavaScript Code(DOM API) 로만 작성하기
var tabBox = {
	init: function() {
		window.addEventListener("load",this.onWindowLoad.bind(this));
	},
	onClicked : function() {
	//unselect
	var lisSelected = document.getElementsByClassName("selected");
	(lisSelected.length === 1) && (lisSelected[0].className = '');
	//select
	this.className = "selected";
	},

	onWindowLoad:function(){
			console.log("DOM loaded!");
			var divTabBox = document.getElementsByClassName("tab-box")[0];
			console.log(divTabBox.childNodes);

			var ul = divTabBox.childNodes[1];
			console.log(ul);

			var liTabs = ul.getElementsByTagName("li");
			console.log(liTabs);
			
			console.log(this);
			for (var i = 0; i < liTabs.length; i++) {
				liTabs[i].addEventListener("click", tabBox.onClicked);	
	}
}
}