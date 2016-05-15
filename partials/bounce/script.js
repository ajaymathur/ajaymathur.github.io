function start(){
var vh = window.innerHeight - 100;
var vw = window.innerWidth;
var el = document.getElementById("can");
var scorept = document.getElementById("scorept");
el.height = vh
el.width = vw
var canvas = el.getContext('2d');
var star = new Image()
star.src = "star.png"
star.addEventListener('load',createStar)
var pedal = new Image()
pedal.src = "padel.png"
pedal.addEventListener('load',createPadel)
var character = [];
var x = rightBottom;
var pedalX = 0;
localStorage.setItem('score',0)
var localscore;
function createPadel(){
	canvas.drawImage(pedal,pedalX,vh-20,100,20)
	localscore = 0;
}
el.addEventListener("mousemove",movepadel)
function movepadel(event){
	canvas.clearRect(pedalX,vh-20,100,20)
	pedalX = event.clientX;
	canvas.drawImage(pedal,pedalX,vh-20,100,20)
}
function defaultStar(){
	var that ={};
	that.x = Math.random()*vw;
	that.y = 0;
	that.direction = rightBottom;
	return that;
}
function createStar(){
	//character.push(defaultStar());
	var tempy;
	//canvas.drawImage(star,character[0].x,character[0].y,20,20)
	setInterval(function(){
		tempy = defaultStar();
		character.push(tempy);
		canvas.drawImage(star,tempy.x,tempy.y,20,20)

	},1500)
}
setInterval(function(){
	for(var i = 0;i< character.length;i++){
		if(character[i].x+20 > pedalX && character[i].x < pedalX+100 && character[i].y+21 > vh-20){
			canvas.clearRect(character[i].x,character[i].y,20,20)
			character.splice(i,1);
			localscore +=1
			scorept.innerHTML = localscore
		}
	}
},1);
setInterval(function(){
	//var x = rightBottom;
	for(var i = 0;i< character.length;i++){
		if(character[i].x+20 > vw && character[i].y+20 < vh && character[i].y > 1){
			switch (character[i].direction){
				case rightBottom : 
					character[i].direction = leftbottom;
					break;
				case rightTop : 
					character[i].direction = leftTop;
					break;
			}
		}else
		if(character[i].x < 1  && character[i].y+20 < vh && character[i].y > 1){
			switch (character[i].direction){
				case leftbottom : 
					character[i].direction = rightBottom;
					break;
				case  leftTop: 
					character[i].direction = rightTop;
					break;
			}
		}else
		if(character[i].y+20 > vh && character[i].x > 1 && character[i].x+20 < vw){
			switch (character[i].direction){
				case rightBottom : 
					character[i].direction = rightTop;
					break;
				case  leftbottom: 
					character[i].direction = leftTop;
					break;
			}
		}else
		if(character[i].y < 1 && character[i].x > 1 && character[i].x+20 < vw){
			switch (character[i].direction){
				case rightTop : 
					character[i].direction = rightBottom;
					break;
				case  leftTop: 
					character[i].direction = leftbottom;
					break;
			}
		}

		character[i].direction(i);
	}
	
},20)
function leftTop(i){
	canvas.clearRect(character[i].x,character[i].y,20,20)
	canvas.drawImage(star,--character[i].x,--character[i].y,20,20)
}
function rightTop(i){
	canvas.clearRect(character[i].x,character[i].y,20,20)
	canvas.drawImage(star,++character[i].x,--character[i].y,20,20)
}
function leftbottom(i){
	canvas.clearRect(character[i].x,character[i].y,20,20)
	canvas.drawImage(star,--character[i].x,++character[i].y,20,20)
}
function rightBottom(i){
	canvas.clearRect(character[i].x,character[i].y,20,20)
	canvas.drawImage(star,++character[i].x,++character[i].y,20,20)
}
var el = document.getElementById("canscore");
var canvasSprite = el.getContext('2d');
var starSpreite = new Image()
starSpreite.src = "stars.png"
starSpreite.addEventListener('load',createStarSprite)
function createStarSprite(){
	var dx = 0;
	setInterval(function(){
		canvasSprite.clearRect(0,0,107,80);
		canvasSprite.drawImage(starSpreite,dx,0,107,220,0,0,107,170)
		dx += 107;
		if(dx > 600){
			dx = 0;
		}
	},100);
}
}