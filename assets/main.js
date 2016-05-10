$(document).ready(function(){
	var temp;
	// setInterval(function(){
	// 	$.each($('.cloud'),function(index,element){
	// 		temp = $(this);
	// 		temp.css("transform","translate('"+temp.offset().top+"px','"+(temp.offset().left+1)+"px')");
	// 	})
	// },2);
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
	  
	  var startRain = false;
	  function dropRain(){
		 // if()
	  }
	  
	  
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
	  var footBallImage = $("#football");
	 /* $("body").on("keyup",function(e){
		  footBallImage.removeClass("forward backward");
	  });
	  $("body").on("keydown",function(e){
		  switch (e.which){
			  case 37:
				  moveLeft();
				  break;
			  
			  case 38:
				  moveUp();
				  break;
			 
			  case 39:
				  moveRight();
				  break;
			 
			  case 40:
				  moveDown();
				  break;
		  } 
	  });
	  function moveRight(){
		  footBallImage.addClass("forward");
		  footBallImage.animate({
			  "left" : "+=5px"
		  },0.2);
	  }
	  function moveLeft(){
		  footBallImage.addClass("backward");
		  footBallImage.animate({
			  "left" : "-=5px"
		  },0.2);
	  }
	  function moveUp(){
		  footBallImage.animate({
			  "top" : "-=5px"
		  },0.2);
	  }
	  function moveDown(){
		  footBallImage.animate({
			  "top" : "+=5px"
		  },0.2);
	  }*/
	  
	  setInterval(movePlane, 20);
	  var keys = {}

	  $(document).keydown(function(e) {
	      keys[e.keyCode] = true;
	  });

	  $(document).keyup(function(e) {
	      delete keys[e.keyCode];
	  });

	  function movePlane() {
		  footBallImage.removeClass("backward forward");
	      for (var direction in keys) {
	          if (!keys.hasOwnProperty(direction)) continue;
	          if (direction == 37 && parseInt(footBallImage.css("left").substring(0,footBallImage.css("left").length-2)) > 0) {
	        	  footBallImage.addClass("backward");
	        	  footBallImage.animate({left: "-=5"}, 0);                
	          }
	          if (direction == 38 && parseInt(footBallImage.css("top").substring(0,footBallImage.css("top").length-2)) > -10) {
	        	  footBallImage.animate({top: "-=5",height:"-=2",width:"-=2"}, 0);  
	          }
	          if (direction == 39) {
	        	  footBallImage.addClass("forward");
	        	  footBallImage.animate({left: "+=5"}, 0);  
	          }
	          if (direction == 40  && parseInt(footBallImage.css("top").substring(0,footBallImage.css("top").length-2)) < 50) {
	        	  footBallImage.animate({top: "+=5",height:"+=2",width:"+=2"}, 0);  
	          }
	      }
	  }
	  
	  
	//   var startenmy = null;
	//   var elementsenemy = document.getElementsByClassName("enemy");
	// 	//var bodyWidth = $("body").width();
		
	//   function stepEnemy(timestamp) {
	// 		elementsenemy = document.getElementsByClassName("enemy");
	// 		  if (!startenmy) start = timestamp;
	// 		 // var progress = timestamp - start;
	// 		 // element.style.left = progress/10 + "px";
	// 		 // if (progress < 2000) {
	// 		 for(var i=0; i< elements.length;i++){
			 
	// 			  $(elementsenemy[i]).animate({
	// 				  right : "+=1"
	// 			  },0);
			  	
			  
	// 		 }
	// 		    window.requestAnimationFrame(stepEnemy);
	// 	//  }
	// 	}

	// 	window.requestAnimationFrame(stepEnemy);
		
		
		
	// 	bodyWidth > 920 ? bigScreenEnemy() : smallScreenEnemy();
	// 	function bigScreenEnemy(){
	// 		var temp = $(".enemy").last().clone(),flag = true,c = temp.offset().left;
	// 		while(flag){
	// 			//temp = $(".enemy").last().clone();
	// 			c = c + (Math.random()*10);
	// 			temp.css("left", c+"px");
	// 			$("body").append(temp);
	// 			console.log(Number(c))
	// 			Number(c) > 920 ? flag = false : flag = true;
	// 		}
	// 	}
	 
});