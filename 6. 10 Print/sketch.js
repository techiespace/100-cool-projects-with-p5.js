//https://editor.p5js.org/techiespace/sketches/YlUpFitUY
//https://www.youtube.com/watch?v=E4RyStef-gY
let x = 0;
let y = 0;
let spacing = 10;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  stroke(255);
  if (random(1) < 0.5)
    line(x, y, x + spacing, y + spacing);
  else
    line(x, y + spacing, x + spacing, y);
  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing
  }
}