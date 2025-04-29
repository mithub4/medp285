// Declare variables for shape radii
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  createCanvas(500, 600); // Adjusted canvas size to fit stacked clocks
  
  stroke(255);
  angleMode(DEGREES);

  // Set radius for each shape based on canvas dimensions
  let radius = min(width, height) / 6;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  describe('Three functioning clocks on a grey background, each with different starting times.');
}

function draw() {
  background("rgb(7,0,60)");

  // Draw three clocks stacked vertically, each with different time offsets
  drawClock(width / 2, height / 4, 0); 
  drawClock(width / 2, height / 2, 15);
  drawClock(width / 2, 3 * height / 4, 30);
}

function drawClock(x, y, offset) {
  // Move origin to center of each clock
  push();
  translate(x, y);

  // Draw the clock background
  noStroke();
  fill("rgb(7,0,60)");
  ellipse(0, 0, clockDiameter + 25, clockDiameter + 25);
  fill("rgb(7,0,60)");
  ellipse(0, 0, clockDiameter, clockDiameter);

  // Calculate angles for each hand with the offset
  let secondAngle = map((second() + offset) % 60, 0, 60, 0, 360);
  let minuteAngle = map(minute(), 0, 60, 0, 360); 
  let hourAngle = map(hour() % 12, 0, 12, 0, 360);

  stroke(255);

  // Second hand
  push();
  rotate(secondAngle);
  strokeWeight(1);
  line(0, 0, 0, -secondsRadius);
  pop();

  // Minute hand
  push();
  strokeWeight(2);
  rotate(minuteAngle);
  line(0, 0, 0, -minutesRadius);
  pop();

  // Hour hand
  push();
  strokeWeight(4);
  rotate(hourAngle);
  line(0, 0, 0, -hoursRadius);
  pop();

  // Tick markers around perimeter of clock
  push();
  strokeWeight(2);
  for (let ticks = 0; ticks < 60; ticks += 1) {
    point(0, -secondsRadius);
    rotate(6);
  }
  pop();

  // Reset transformation matrix
  pop();
}
