/*if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	var counter = 1;
	var xDown = null;                                                        
	var yDown = null;
	window.onload = function(){		
		document.getElementById("headerGallery").addEventListener('touchstart', handleTouchStart, false);        
		document.getElementById("headerGallery").addEventListener('touchmove', handleTouchMove, false);
	}
	function handleTouchStart(evt) {                                         
		xDown = evt.touches[0].clientX;                                      
		yDown = evt.touches[0].clientY;                                      
	};                                                
	function handleTouchMove(evt){
		if (! xDown || ! yDown){
			return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if(Math.abs(xDiff)+Math.abs(yDiff)>150){

		if(Math.abs(xDiff) > Math.abs(yDiff)){
			//left swipe
			if(xDiff>0){
				 //parempoolne pilt tuleb
				 counter++;
				 if(counter == 5){
					 counter = 1;
				 }
				 console.log(document.getElementsByClassName("nav-dot"));
				 for(var i=0;i<4;i++){
					 document.getElementsByClassName("nav-dot")[i].style.background = "rgba(0, 0, 0, 0.6)";
				 }
				 document.getElementsByClassName("nav-dot")[counter-1].style.background = "rgba(0, 0, 0, 1)";
				 
			//right swipe
			}else{
				//vasakpoolne pilt tuleb
				counter--;
				if(counter == 0){
					counter = 4;
				}
				for(var i=0;i<4;i++){
					document.getElementsByClassName("nav-dot")[i].style.background = "rgba(0, 0, 0, 0.4)";
				}
				document.getElementsByClassName("nav-dot")[counter-1].style.background = "rgba(0, 0, 0, 1)";
			}                       
		}
		//üles-alla swipe
		/*
		else{
			//up swipe
			if(yDiff>0){
				//stuff liigub alla
			}
			//down swipe
			else{
				//stuff liigub üles
			}                                                                 
		}
		*/
		//reset values
		xDown = null;
		yDown = null;
    }
};