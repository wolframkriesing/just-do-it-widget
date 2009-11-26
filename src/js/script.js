window.addEventListener('load', function(){
	
	document.body.addEventListener("mouseover", function(evt){
		if (evt.shiftKey==true) return;
		window.screenX = window.screenX==0 ? (screen.availWidth - window.innerWidth) : 0;
	}, true);
	
}, false);
