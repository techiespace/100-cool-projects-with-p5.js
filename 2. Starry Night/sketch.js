//https://github.com/techiespace/100-cool-projects-with-p5.js
//https://editor.p5js.org/techiespace/sketches/j9QlMV_H
//ref: https://editor.p5js.org/wvnl/sketches/5wnuHAXKd

var stars = [];

var speed = 0.1;
var x = 0;
var y = 0;

function setup() {
  createCanvas(600, 500);
  for (var i = 0; i < 1000; i++) {
    stars[i] = new Star();
  }
  x = random(width);
  y = random(height);
}

function draw() {
  background(19, 24, 99);
  for (var i = 0; i < stars.length; i++) {
    stars[i].draw();
  }

  //shooting star
  stroke(255)
  speed = 3;
  x += speed;
  y += speed;
  speed += 0.2;
  line(x, y, x + 10, y + 10);
  if(x > random(width/2,width*2) || y > random(height/2,height*2)){
    if(random(100) < 3){
      x = random(width/2);
      y = random(height/2);
    }
  }
  instruction();
}

function mousePressed(){
  x = mouseX;
  y = mouseY;
}

function instruction(){
  textSize(16);
  fill(250)
  text("Click on the canvas to shoot stars",0,15);
}

// star class //
class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(0.25, 0.5);
    this.t = random(TAU);
  }

  draw() {
    this.t += 0.1;
    var scale = this.size + sin(this.t) * 2;
    noStroke();
    circle(this.x, this.y, scale);
  }
}