var getprogressbar = document.getElementById('progress-bar');

window.onscroll = function(){
	scrollpoint();
}

function scrollpoint(){
	// console.log('i am working');

	// scrolltop
	// project height
	// current height

	// project height - current height

	// scrolltop * 100 / (project height - current height);

	var getscrolltop = document.documentElement.scrollTop;
	// console.log(getscrolltop);
	var getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrollheight);
	var getclientheight = document.documentElement.clientHeight;
	// console.log(getclientheight);

	var calheight = getscrollheight - getclientheight;

	// var getfinal = Math.round((getscrolltop * 100) / calheight);
	// console.log(getfinal);

	var getfinal = Math.round((getscrolltop/calheight) * 100);
	console.log(getfinal);


	getprogressbar.style.width = `${getfinal}%`;


}

function printme(){
	window.print();
}