function setup() {
  createCanvas(400, 600);
  background(255, 0, 255);
}

function draw() {
  stroke(0);
  fill("orange");
  ellipse(200, 300, 100, 100);
  fill(0, 255, 0);
  ellipse(300, 300, 200, 200);
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(300, 300, 200, 200);
}
