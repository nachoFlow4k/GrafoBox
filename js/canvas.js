grafo = new Grafo()
function setup() {
    windowWidth=1300
    windowHeight=850
  createCanvas(windowWidth, windowHeight);
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