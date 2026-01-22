let kitten;
let x = 0;
let minSizeIcon = 20; // minimum size in pixels
var canvasWidth = 100;
var canvasHeight = 100;

function preload() {
  kitten = loadImage("./assets/selectIcono.png");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(220);
  let size = max(minSizeIcon, 0.1 * min(canvasWidth, canvasHeight));

  image(kitten, x, 0, size, size);
}
