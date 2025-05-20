function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    noLoop(); // <- stops draw() from running continuously
}

function draw() {
    drawBackground(); // static background
}

function drawBackground() {

    noStroke()

    fill("#f5cb4d");
    for (let i = 0; i < 20; i++) {
        let x = random(windowWidth);
        let y = random(windowHeight);

        rect(0, y + 200, windowWidth, windowHeight / 100);
        rect(x + 200, 0, windowWidth / 200, windowHeight);
    }
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    drawBackground();
}
