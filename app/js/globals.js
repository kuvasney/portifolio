//Global Scripts

isDesktop = false;
var mq = window.matchMedia( "(min-width: 800px)" );
if (mq.matches) {
	isDesktop = true;
} else {
	isDesktop = false;
};

var nav = {};
nav.init = function() {
	var menu = document.getElementById("siteNav_list"), 
		header = document.getElementById("mainHead");
		// navtrigger = document.getElementById("b");
	// if(!isDesktop) {
	// 	nav.confg(menu);		
	// } 
	window.onscroll = function (e) {  
		console.log(e);
		nav.alwaysShow(header);
	} 
	// $(document).scroll(function(){		
		
	// });
};
nav.alwaysShow = function(header) {
	var pos = window.pageYOffset,
		offsetHeight = header.offsetHeight;
	if(pos > offsetHeight) {
		header.classList.add("float");
	} else {
		header.classList.remove("float");
	}
};

(function(){
	nav.init();
})();