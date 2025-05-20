function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    noLoop(); // <- stops draw() from running continuously

}

function draw() {
    drawBackground();

}


function drawBackground() {

    // gradient background
    for (let y = 0; y < height; y++) {
        let inter = map(y, 0, height, 0, 1);
        let c = lerpColor(color('#d2461d'), color('#FB8C00'), inter);
        stroke(c);
        line(0, y, width, y);
    }

    // decorative background dots
    noStroke();
    fill(255, 255, 255, 25);
    for (let i = 0; i < 700; i++) {
        ellipse(random(width), random(height), random(10, 30));
    }

    let cx = windowWidth / 2;
    let cy = windowHeight / 2;
    let w = windowWidth / 2;
    let h = windowHeight / 2;

    // circles around the ellipse
    let totalDots = 25;
    let dotSize = windowWidth / 15;
    fill("#ffd65a");
    // noStroke();
    for (let i = 0; i < totalDots; i++) {
        let angle = TWO_PI * i / totalDots;
        let x = cx + (w / 2) * cos(angle);
        let y = cy + (h / 2) * sin(angle);
        ellipse(x, y, dotSize, dotSize);
    }

    noStroke();
    // main yellow ellipse
    fill("#ffd65a");
    ellipse(cx, cy, w, h);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    drawBackground();

}