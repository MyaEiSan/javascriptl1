var getmodal = document.getElementById('signupmodal');
var getsignupbtn = document.getElementById('btn-signup');
var getclosebtn = document.querySelector('.btn-close');
var getbtnfullscreen = document.getElementById('btn-fullscreen');
var getbtnclose = document.getElementById('btn-closescreen');


getsignupbtn.addEventListener('click',function(){
	getmodal.style.display = "block";
});

getclosebtn.addEventListener('click',function(){
	getmodal.style.display = "none";
});

window.onclick = function(e){
	if(e.target == getmodal){
		getmodal.style.display = "none";
	}
}

var getde = document.documentElement;

getbtnfullscreen.addEventListener('click',function(){
	if(getde.requestFullscreen){
		getde.requestFullscreen();
	} else if(getde.msRequestFullscreen){
		getde.msRequestFullscreen();
	} else if(getde.webkitRequestFullscreen){
		getde.webkitRequestFullscreen();
	}

	getbtnclose.style.display="inline-block";
});

getbtnclose.addEventListener('click',function(){
	if(document.exitFullScreen){
		document.exitFullScreen();
	} else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}else if(document.webkitExitFullscreen){
		document.webkitExitFullscreen();
	}

	getbtnclose.style.display="none";
});