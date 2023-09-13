let leftEyeWidth = 70;
let rightEyeWidth = 70;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background("hotpink");

  fill(255, 0, 0);
  ellipse(350, 350, 300, 300);

  noStroke();

  fill(255);
  ellipse(300, 300, leftEyeWidth, leftEyeWidth);
  ellipse(300, 330, leftEyeWidth, leftEyeWidth);
  rect(300 - leftEyeWidth/2, 299, leftEyeWidth, 32);

  fill(0);
  ellipse(300 - leftEyeWidth/8, 300 - leftEyeWidth/8, leftEyeWidth/2, leftEyeWidth/2);

  fill(255);
  ellipse(400, 300, rightEyeWidth, rightEyeWidth);
  ellipse(400, 330, rightEyeWidth, rightEyeWidth);
  rect(400 - rightEyeWidth/2, 299, rightEyeWidth, 32);

  fill(0);
  ellipse(400 - rightEyeWidth/8, 300 - rightEyeWidth/8, rightEyeWidth/2, rightEyeWidth/2);

  fill(120);
  arc(350, 260, 200, 200, -PI/2 - PI / 6, -PI/2 + PI / 6);

  fill(0);
  arc(350, 450, 80, 70, PI-PI/8, PI/8);
  // arc(350, 430, 80, 70, -PI/8, PI-PI/8);
}
