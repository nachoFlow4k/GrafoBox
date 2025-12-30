grafo = new Grafo()
let selectIcon;
function preload(){
selectIcon = loadImage("js/selectIcono.png");
}
function setup() {
    windowWidth=1300
    windowHeight=850
  createCanvas(windowWidth, windowHeight);
  
  //image(selectIcon,0,0,10,10)
 

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