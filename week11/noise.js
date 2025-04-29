// Noise tends to look smoother with coordinates that are very close together
// These values will be multiplied by the x and y coordinates to make the
// resulting values very close together
let xScale = 0.0001;
let yScale = 0.01;

let gapSlider;
let gap;
let offsetSlider;
let offset;

function setup() {
  createCanvas(400, 400);

  // Set up the sliders
  gapSlider = createSlider(2, width / 10, width / 20);
  gapSlider.changed(dotGrid);
  gapSlider.mouseMoved(checkChanged);
  offsetSlider = createSlider(0, 5000, 0);
  offsetSlider.mouseMoved(checkChanged);

  // Draw the grid
  dotGrid();
}

// When the mouse is moved over a slider
// Draw the dot grid if something has changed
function checkChanged() {
  if (gap !== gapSlider.value()) {
    dotGrid();
  }
  if (offset !== offsetSlider.value()) {
    dotGrid();
  }
}

function dotGrid() {
  background(0);
  noStroke();
  
  fillGradient('linear', {
    from : [0, 0],   // x, y : Coordinates
    to : [0, 400], // x, y : Coordinates
    steps : [
        color("#FFFF00"),
        color("rgb(232,0,255)"),
        color("#00FFFF"),
      color("white"),
    ] // Array of p5.color objects or arrays containing [p5.color Object, Color Stop (0 to 1)]
});
  
  // Get the current gap and offset values from the sliders
  gap = gapSlider.value();
  offset = offsetSlider.value();

  // Loop through x and y coordinates, at increments set by gap
  for (let x = gap / 2; x < width; x += gap) {
    for (let y = gap / 2; y < height; y += gap) {
      // Calculate noise value using scaled and offset coordinates
      let noiseValue = noise((x - offset) * xScale, (y + offset) * yScale);

      // Since noiseValue will be 0-1, multiply it by gap to set diameter to
      // between 0 and the size of the gap between circles
      let diameter = noiseValue * gap;
      square(x, y, diameter);
    }
  }
}