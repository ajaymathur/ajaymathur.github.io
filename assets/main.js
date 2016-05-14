$(document).ready(function(){
	var temp;
	var start = null;
	var elements = document.getElementsByClassName("cloud");
	
	var temp = [$(".cloud").eq(0).css("left"),$(".cloud").eq(1).css("left"),$(".cloud").eq(2).css("left")];
	
	var temp1 = [(parseInt(temp[0].substring(0,temp[0].length-2))),(parseInt(temp[1].substring(0,temp[1].length-2))),(parseInt(temp[2].substring(0,temp[2].length-2)))];
	
	var bodyWidth = $("body").width();
	
	//animation for clouds
	function step(timestamp) {
	 for(var i=0; i<= 2;i++){
	  if(bodyWidth <=  temp1[i]){
		 temp1[i] = -350;
	  	} 
	  	elements[i].style.left = (++temp1[i])+"px";
	 }
	    window.requestAnimationFrame(step);
	}

	window.requestAnimationFrame(step);
	
	//animation for boat
	 var start = false;
	  var newLeft;
	  function animateNext(timeStamp){	    
	    var temp = $("#boat").css("left");    
	    newLeft = parseInt(temp.substring(0,(temp.length-2)))+1;
	    if(newLeft >= $(window).width())
		{
			newLeft = -100;
		}
		$("#boat").css({"left" : newLeft+"px" });
	    
	     window.requestAnimationFrame(animateNext);
	    
	  }
	  window.requestAnimationFrame(animateNext);
	  	  
	 /* var ocean = document.getElementById("sea"),
	    waveWidth = 10,
	    waveCount = Math.floor(window.innerWidth/waveWidth),
	    docFrag = document.createDocumentFragment();

		for(var i = 0; i < waveCount; i++){
		  var wave = document.createElement("div");
		  wave.className += " wave";
		  docFrag.appendChild(wave);
		  wave.style.left = i * waveWidth + "px";
		  wave.style.webkitAnimationDelay = (i/100) + "s";
		}
		
		ocean.appendChild(docFrag);*/
	 
	 
});