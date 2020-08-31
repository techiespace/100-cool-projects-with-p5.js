//https://github.com/techiespace/100-cool-projects-with-p5.js
//https://editor.p5js.org/techiespace/sketches/4HvuLobM

function setup() {
  createCanvas(600, 500);
  background(255);
}

function draw() {
  text("Click the screen to clear the scribble", 20, 15);
  noStroke();
  fill(128, 0, 128, 80);
  ellipse(mouseX, mouseY, 10, 10);
}

function mousePressed() {
  background(255);
}