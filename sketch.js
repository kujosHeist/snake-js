var s;
var scl = 20;
var food;

function setup() {
	createCanvas(600, 600);
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

	if(!s.gameOver){
		s.update();	
	}
	
	s.show();

	if(s.eat(food)){
		pickLocation()
	}

	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl);
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