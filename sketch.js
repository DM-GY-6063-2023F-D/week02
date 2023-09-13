let eyeWidth = 100;
let faceWidth = 300;
let pupilWidth = 50;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(200, 0, 100);

  fill("green");
  stroke(0);
  strokeWeight(1);
  ellipse(200, 400, faceWidth, faceWidth);
  stroke(0);
  fill("orange");
  ellipse(100, 300, eyeWidth, eyeWidth);
  ellipse(300, 300, eyeWidth, eyeWidth);

  fill("black");
  ellipse(100, 300, pupilWidth/2, pupilWidth);
  ellipse(300, 300, pupilWidth/2, pupilWidth);

  fill(222);
  noStroke();
  arc(200, 300, 200, 200, 3 * HALF_PI - PI / 10, 3 * HALF_PI + PI / 10);

  stroke(0);
  strokeWeight(3);
  line(100, 450, 250, 500);


  translate(400, 0);

  fill("green");
  stroke(0);
  strokeWeight(1);
  ellipse(200, 400, faceWidth, faceWidth);
  stroke(0);
  fill("orange");
  ellipse(100, 300, eyeWidth, eyeWidth);
  ellipse(300, 300, eyeWidth, eyeWidth);

  fill("black");
  ellipse(100, 300, pupilWidth/2, pupilWidth);
  ellipse(300, 300, pupilWidth/2, pupilWidth);

  fill(222);
  noStroke();
  arc(200, 300, 200, 200, 3 * HALF_PI - PI / 10, 3 * HALF_PI + PI / 10);

  stroke(0);
  strokeWeight(3);
  line(100, 450, 250, 500);
}
