//https://github.com/techiespace/100-cool-projects-with-p5.js
//https://editor.p5js.org/techiespace/sketches/DL6Z-Tnh

let bubbles = [];
let wiperCanvas;

function setup() {
  createCanvas(600, 500);
  wiperCanvas = createGraphics(600,500);
  wiperCanvas.clear();  
  for(let i = 0; i < 500; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10,40);
    bubbles[i] = new Bubble(x,y,r);
  }
}

function draw() {
  
  background(0);
  for(let bubble of bubbles){
    bubble.move();
    bubble.show();
  }
  image(wiperCanvas,0,0);
  if(mouseIsPressed){
    wiperCanvas.fill(0);
    wiperCanvas.noStroke();
    wiperCanvas.rect(mouseX,0,3,height);
  }
}

function mouseOver(){
}

class Bubble{
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  move(){
    this.x += random(-5,5);
    this.y += random(-5,5);
  }
  show(){
    noStroke();
    fill(255,10);
    ellipse(this.x,this.y,this.r * 2);
  }
}