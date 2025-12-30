grafo = new Grafo()
function setup() {
    windowWidth=1300
    windowHeight=850
  createCanvas(windowWidth, windowHeight);
    // Create a div element and set its position.
  let div = createDiv('p5*js');
  div.position(0, 0);

  describe('A gray square with the text "p5*js" written in its center.');

  rect(0,0 , 55, 55);
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