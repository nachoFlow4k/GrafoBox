grafo = new Grafo()
function setup() {

  createCanvas(500, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    //circle(mouseX, mouseY, 25);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(event) {
    console.log(event);
    
    circle(mouseX, mouseY, 25);
}