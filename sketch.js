var Particle = function(x,y,r) {
	this.x = x;
	this.y = y;
	this.diameter = r;
	this.show = function (){
	  ellipse (this.x, this.y, this.diameter, this.diameter)
	}
  this.drop = function(){
   this.x++; 
  }
}

var p = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {
  noStroke ();
  background (0);
  fill(random(255),random(255),random(255));
  for (var i = 0; i < p.length; i++) {
  p[i].show();
  p[i].drop(); 
  }
}

function mouseDragged() {
	p.push(new Particle (mouseX, mouseY, random(10,25)));
}