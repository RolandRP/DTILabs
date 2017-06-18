var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");
var div6 = document.getElementById("div6");
var div7 = document.getElementById("div7");
var div8 = document.getElementById("div8");
var firstTime = true;
var navDots = document.getElementsByClassName("nav-dot");
var i;
var counter = 0;
var loadNext = true;

window.onload = function(){
	caro1come();
	navDots[0].addEventListener("click", function(){
		loadNext = false;
		i=1;
		window['caro'+counter+'go']();
	});
	navDots[1].addEventListener("click", function(){
		loadNext = false;
		i=2;
		window['caro'+counter+'go']();
	});
	navDots[2].addEventListener("click", function(){
		loadNext = false;
		i=3;
		window['caro'+counter+'go']();
	});
	navDots[3].addEventListener("click", function(){
		loadNext = false;
		i=4;
		window['caro'+counter+'go']();
	});
}

function caro1come(){
	counter = 1;
	for(var i=0;i<navDots.length;i++){
		navDots[i].style.background = "rgba(0, 0, 0, 0.6)";
	}
	navDots[counter-1].style.background = "rgba(0, 0, 0, 1)";
	loadNext = true;
	div1.style.display = "inline-block";
	div2.style.display = "inline-block";
	if(firstTime){
		div1.style.animation = "firstLeft 9.6s ease-in-out";
		div2.style.animation = "firstRight 9.6s ease-in-out";
		div1.addEventListener("webkitAnimationEnd", caro1go);
		firstTime = false;
	}else{
		div1.style.animation = "comeLeft 9.6s ease-in-out";
		div2.style.animation = "comeRight 9.6s ease-in-out";
		div1.addEventListener("webkitAnimationEnd", caro1go);
	}
}

function caro1go(){
	div1.removeEventListener("webkitAnimationEnd", caro1go);
	div1.style.animation = "goLeft 0.3s ease-in-out";
	div2.style.animation = "goRight 0.3s ease-in-out";
	div1.addEventListener("webkitAnimationEnd", caro1end)
}

function caro1end(){
	div1.style.display = "none";
	div2.style.display = "none";
	div1.removeEventListener("webkitAnimationEnd", caro1end);
	if(loadNext){
		caro2come();
	}else{
		window['caro'+i+'come']();
	}
}

function caro2come(){
	counter = 2;
	for(var i=0;i<navDots.length;i++){
		navDots[i].style.background = "rgba(0, 0, 0, 0.6)";
	}
	navDots[counter-1].style.background = "rgba(0, 0, 0, 1)";
	loadNext = true;
	div3.style.display = "inline-block";
	div4.style.display = "inline-block";
	div3.style.animation = "comeLeft 9.6s ease-in-out";
	div4.style.animation = "comeRight 9.6s ease-in-out";
	div3.addEventListener("webkitAnimationEnd", caro2go);
}

function caro2go(){
	div3.removeEventListener("webkitAnimationEnd", caro2go);
	div3.style.animation = "goLeft 0.3s ease-in-out";
	div4.style.animation = "goRight 0.3s ease-in-out";
	div3.addEventListener("webkitAnimationEnd", caro2end)
}

function caro2end(){
	div3.style.display = "none";
	div4.style.display = "none";
	div3.removeEventListener("webkitAnimationEnd", caro2end);
	if(loadNext){
		caro3come();
	}else{
		window['caro'+i+'come']();
	}
}

function caro3come(){
	counter = 3;
	for(var i=0;i<navDots.length;i++){
		navDots[i].style.background = "rgba(0, 0, 0, 0.6)";
	}
	navDots[counter-1].style.background = "rgba(0, 0, 0, 1)";
	loadNext = true;
	div5.style.display = "inline-block";
	div6.style.display = "inline-block";
	div5.style.animation = "comeLeft 9.6s ease-in-out";
	div6.style.animation = "comeRight 9.6s ease-in-out";
	div5.addEventListener("webkitAnimationEnd", caro3go);
}

function caro3go(){
	div5.removeEventListener("webkitAnimationEnd", caro3go);
	div5.style.animation = "goLeft 0.3s ease-in-out";
	div6.style.animation = "goRight 0.3s ease-in-out";
	div5.addEventListener("webkitAnimationEnd", caro3end)
}

function caro3end(){
	div5.style.display = "none";
	div6.style.display = "none";
	div5.removeEventListener("webkitAnimationEnd", caro3end);
	if(loadNext){
		caro4come();
	}else{
		window['caro'+i+'come']();
	}
}

function caro4come(){
	counter = 4;
	for(var i=0;i<navDots.length;i++){
		navDots[i].style.background = "rgba(0, 0, 0, 0.6)";
	}
	navDots[counter-1].style.background = "rgba(0, 0, 0, 1)";
	loadNext = true;
	div7.style.display = "inline-block";
	div8.style.display = "inline-block";
	div7.style.animation = "comeLeft 9.6s ease-in-out";
	div8.style.animation = "comeRight 9.6s ease-in-out";
	div7.addEventListener("webkitAnimationEnd", caro4go);
}

function caro4go(){
	div7.removeEventListener("webkitAnimationEnd", caro4go);
	div7.style.animation = "goLeft 0.3s ease-in-out";
	div8.style.animation = "goRight 0.3s ease-in-out";
	div7.addEventListener("webkitAnimationEnd", caro4end)
}

function caro4end(){
	div7.style.display = "none";
	div8.style.display = "none";
	div7.removeEventListener("webkitAnimationEnd", caro4end);
	if(loadNext){
		caro1come();
	}else{
		window['caro'+i+'come']();
	}
}
