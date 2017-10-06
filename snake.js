function Snake() {
	this.x = 0;
	this.y = 0;

	this.xspeed = 1;
	this.yspeed = 0;

	this.gameOver = false;


	this.prevPosition = [createVector(this.x, this.y), createVector(this.x, this.y), createVector(this.x, this.y), createVector(this.x, this.y), createVector(this.x, this.y)];

	this.eat = function(pos) {
		var d = dist(this.x, this.y, pos.x, pos.y);
		if(d < 1){
			this.prevPosition.push(createVector(this.x, this.y))
			return true;

		}else{
			return false;
		}
		
	}

	this.dir = function(x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}


	this.update = function() {

		

		if(this.prevPosition.length > 0){
			this.prevPosition.splice(0, 1);	
			this.prevPosition.push(createVector(this.x, this.y))			
			
		}


		this.x = this.x + this.xspeed * scl;
		this.y = this.y + this.yspeed * scl;

		if(this.x > width-scl){
			this.x = 0;
		}

		if(this.x < 0){
			this.x = width-scl;
		}

		if(this.y > height-scl){
			this.y = 0;
		}

		if(this.y < 0){
			this.y = height-scl;
		}

		for (var i = 0; i < this.prevPosition.length; i++) {
			if(this.prevPosition[i].equals(createVector(this.x, this.y))){
				this.gameOver = true;
			}
		}	

		/*
		this.x = constrain(this.x, 0, width-scl);
		this.y = constrain(this.y, 0, height-scl);*/

	}

	this.show = function() {
		fill(255);

		for (var i = 0; i < this.prevPosition.length; i++) {
			rect(this.prevPosition[i].x, this.prevPosition[i].y, scl, scl);
		}

		if(this.gameOver){
				fill(255, 0, 100);
				rect(this.x, this.y, scl, scl);			
			}else{
				rect(this.x, this.y, scl, scl);		
			}
		
		
	}

}