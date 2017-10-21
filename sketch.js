var s;
var scl = 20;
var food;
var score = 0;


var gameState = "off";
var gameStarted = false;

$(document).ready(function(){
	$("#start-game").on('click', toggleButton);
});

function toggleButton(){
	if(gameState == "off"){
		gameStarted = true;
		gameState = "on";
		$("#start-game").html("Pause");
	}else{
		gameStarted = false;
		gameState = "off";		
		$("#start-game").html("Start");
	}
}

function setup() {
	var canvas = createCanvas(600, 600);
	canvas.parent("sketch-div")

	s = new Snake();
	frameRate(10);

	pickLocation();
}

function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(width/scl);

    food = createVector(floor(random(cols)), floor(random(rows)));	

  	food.mult(scl);
}

function draw() {
	background(51);

	if(gameStarted && !s.gameOver){
		s.update();	
	}
	
	s.show();

	if(s.eat(food)){
		pickLocation();
		updateScore();
	}

	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl);
}

function updateScore(){
	score += 9;
	document.getElementById("score-span").innerText = score;
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		if(s.xspeed != 0){
			s.dir(0, -1);	
		}
	} else if (keyCode === DOWN_ARROW) {
		if(s.xspeed != 0){
			s.dir(0, 1);	
		}
	} else if (keyCode === RIGHT_ARROW) {
		if(s.yspeed != 0){
			s.dir(1, 0);
		}
	} else if (keyCode === LEFT_ARROW) {
		if(s.yspeed != 0){
			s.dir(-1, 0);	
		}
	}
}