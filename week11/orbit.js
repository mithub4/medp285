let rotateXAngle = 0;
let rotateYAngle = 0;

function setup() {
  createCanvas(710, 400, WEBGL);
  angleMode(DEGREES);
  strokeWeight(2.5);
  noFill();
  stroke("#FFDF00");

}

function draw() {
  // background(250, 180, 200);
  
  background(0);
  
  if (keyIsDown(LEFT_ARROW) || keyIsDown(76)) { // L
    rotateYAngle -= 1;
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(82)) { // R
    rotateYAngle += 1;
  }
  if (keyIsDown(UP_ARROW) || keyIsDown(85)) { // U
    rotateXAngle -= 1;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(68)) { // D
    rotateXAngle += 1;
  }

  // Apply manual camera rotation
  rotateX(rotateXAngle);
  rotateY(rotateYAngle);

  // Sphere of cubes
  for (let zAngle = 0; zAngle < 180; zAngle += 30) {
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
      push();
      rotateZ(zAngle);
      rotateX(xAngle);
      translate(0, 340, 0);
      box();
      pop();
    }
  }
}
