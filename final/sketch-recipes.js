function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    noLoop(); // <- stops draw() from running continuously

}

function draw() {

    background(255);
    drawBackground();

}

function drawBackground() {


    let cols = 20;
    let rows = 15;
    let spacingX = width / cols;
    let spacingY = height / rows;

    noStroke();

    for (let y = 0; y < rows; y++) {

        for (let x = 0; x < cols; x++) {
            let posX = x * spacingX + spacingX / 2;
            let posY = y * spacingY + spacingY / 2;

            fill(random(200, 255), random(150, 200), random(0, 100), 200);

            ellipse(posX, posY, spacingX * 0.6, spacingY * 0.6); 
        }
    }

}