let selectIcon;
let x = 0;
let minSizeIcon = 20; // minimum size in pixels
var canvasWidth = 1000;
var canvasHeight = 1000;
var nodeSize = 30;
function preload() {
  selectIcon = loadImage("./assets/selectIcono.png");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function drawIcon(imagagePath, positionX, positionY) {
  let size = max(minSizeIcon, 0.1 * min(canvasWidth, canvasHeight));
  image(imagagePath, positionX, positionY, size, size);
}

function draw() {
  background(220);
  drawIcon(selectIcon, x, 0);

  drawIcon(selectIcon, x + 40, 0);
  noloop();
}

function mouseClicked() {
  // Draw a circle where you click
  fill(255, 0, 0);
  circle(mouseX, mouseY, nodeSize);
}
