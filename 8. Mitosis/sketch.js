//https://editor.p5js.org/techiespace/sketches/P9lCj34UW
//https://www.youtube.com/watch?v=jxGS3fKPKJA
var cells = [];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 5; i++) {
    cells.push(new Cell());
  }
}

function draw() {
  background(200);
  for (var i = 0; i < cells.length; i++) {
    cells[i].show();
    cells[i].move();
  }
}

function mousePressed() {
  for (var i = cells.length - 1; i >= 0; i--) {
    if (cells[i].clicked(mouseX, mouseY)) {
      cells.push(cells[i].mitosis());
      cells.push(cells[i].mitosis());
      cells.splice(i, 1);
    }
  }
}