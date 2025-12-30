grafo = new Grafo()
let selectIcon;
function preload(){
selectIcon = loadImage("assets/selectIcono.png");
}
function setup() {
    windowWidth=1300
    windowHeight=850
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    //circle(mouseX, mouseY, 25);
  }
  image(selectIcon,0,0,50,50)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(event) {
    console.log(event);
    
    circle(mouseX, mouseY, 25);
}