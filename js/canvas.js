let selectIcon;
let x = 0;
let minSizeIcon = 20; // minimum size in pixels
var canvasWidth = 1000;
var canvasHeight = 1000;
var nodeSize = 30;

// Cargamos las imagenes de los iconos y otros elementos graficos
function preload() {
  selectIcon = loadImage("./assets/selectIcono.png");
  edgeIcon = loadImage("./assets/edgeIcono.png");
  vertexIcon = loadImage("./assets/vertexIcono.png");
  trashIcon = loadImage("./assets/trashIcono.png");
}


function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

//Funcion para dibujar Icons, toma el path, su posicion en relacion a otros iconos y la posicion en Y
function drawIcon(imagagePath, posicionRelativa, positionY) {
  //Tecnica para escalar el icono segun el tamaño del canvas
  let size = max(minSizeIcon, 0.1 * min(canvasWidth, canvasHeight));
  let positionX = posicionRelativa * size;
  image(imagagePath, positionX, positionY, size, size);
}

function draw() {
  background(220);
  drawIcon(selectIcon, x, 650);
  drawIcon(edgeIcon, x + 1, 650);
  drawIcon(vertexIcon, x + 2, 650);
  drawIcon(trashIcon, x + 3, 650);
  noLoop();
}

function mouseClicked() {
  // Draw a circle where you click
  fill(255, 0, 0);
  circle(mouseX, mouseY, nodeSize);
  console.log(Grafo);
  console.log(graph);
    
  
}


function iconNegativo(imagenPath) {  
    imagenPath.loadPixels();

    for (let i = 0; i < imagenPath.pixels.length; i += 4) {
        let r = imagenPath.pixels[i];
        let g = imagenPath.pixels[i + 1];
        let b = imagenPath.pixels[i + 2];

        imagenPath.pixels[i] = 255-r;   // New R
        imagenPath.pixels[i + 1] = 255-g; // New G
        imagenPath.pixels[i + 2] = 255-b; // New B
    }
    imagenPath.updatePixels();
}