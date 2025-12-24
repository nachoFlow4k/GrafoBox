function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    background(0, 255, 0);
  } else {
    background(32);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}