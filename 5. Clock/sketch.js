//https://editor.p5js.org/techiespace/sketches/YlUpFitUY
//https://www.youtube.com/watch?v=E4RyStef-gY
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(0);
    let hr = hour();
    let mn = minute();
    let sc = second();
    translate(200,200);
    rotate(-PI/2);
    
    strokeWeight(8);
    stroke(255,100,150);
    noFill();
    
    let secondAngle = map(sc, 0, 60, 0, 2*PI);
    arc(0, 0, 300, 300, 0, secondAngle);
  
    
    stroke(150,100,255);
    let minuteAngle = map(mn, 0, 60, 0, 2*PI);
    arc(0, 0, 280, 280, 0, minuteAngle);
    
    stroke(150,255,100);
    let hourAngle = map(hr % 12, 0, 12, 0, 2*PI);
    arc(0, 0, 260, 260, 0, hourAngle);
    
    push();
    rotate(PI/2);
    fill(255);
    textSize(32);
    textStyle(BOLD);
    noStroke(255,255,255)
    textAlign(CENTER, CENTER);
    text(hr+':'+mn+':'+sc, 0, 0);
    pop();
    
    
  }