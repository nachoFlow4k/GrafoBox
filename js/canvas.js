//Variables

let img; // Declare a variable to hold the image
const widthCanvas = 100;
const heightCanvas = 100;

function preload() {
  // Load the image before the setup function runs
  img = loadImage("./assets/selectIcono.png", () => {
    console.log(img.width, img.height);
  });
}

function setup() {
  createCanvas(widthCanvas, heightCanvas);
  background(200);

  const scale = min(width / img.width, height / img.height);
  const w = img.width * scale;
  const h = img.height * scale;

  const x = (width - w) / 2;
  const y = (height - h) / 2;
  console.log(x, y, w, h);
  image(img, x, y, w, h);
  noLoop();
}
