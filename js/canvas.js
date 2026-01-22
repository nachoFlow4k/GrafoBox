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

function drawIcon(imagagePath, item, positionY) {
  let size = max(minSizeIcon, 0.1 * min(canvasWidth, canvasHeight));
  let positionX = item * size;
  image(imagagePath, positionX, positionY, size, size);
}

function draw() {
  background(220);
  drawIcon(selectIcon, x, 0);

  drawIcon(selectIcon, x + 1, 0);
}

function mouseClicked() {
  // Draw a circle where you click
  fill(255, 0, 0);
  circle(mouseX, mouseY, nodeSize);
  console.log(Grafo);
  console.log(graph);
}
