import Grafo from "./grafo.js";

const sketch = (p) => {
  let graph;
  let selectIcon;
  let x = 0;
  let minSizeIcon = 20; // minimum size in pixels
  var canvasWidth = 1000;
  var canvasHeight = 1000;
  var nodeSize = 30;

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight);
    graph = Grafo.simpleGraph();
  };

  p.preload = function () {
    selectIcon = p.loadImage("./assets/selectIcono.png");
    edgeIcon = loadImage("./assets/edgeIcono.png");
    vertexIcon = loadImage("./assets/vertexIcono.png");
    trashIcon = loadImage("./assets/trashIcono.png");
  };

  function drawIcon(imagagePath, posicionRelativa, positionY) {
    //Tecnica para escalar el icono segun el tamaño del canvas
    let size = p.max(minSizeIcon, 0.1 * p.min(canvasWidth, canvasHeight));
    let positionX = posicionRelativa * size;
    p.image(imagagePath, positionX, positionY, size, size);
  }

  p.draw = () => {
    p.background(220);
    drawIcon(selectIcon, x, 650);
    drawIcon(edgeIcon, x + 1, 650);
    drawIcon(vertexIcon, x + 2, 650);
    drawIcon(trashIcon, x + 3, 650);
    p.noLoop();
  };

  p.mouseClicked = () => {
    graph.addVertex();
    p.fill(255, 0, 0);
    p.circle(p.mouseX, p.mouseY, nodeSize);
    console.log(Grafo);
    console.log(graph);
  };

  function iconNegativo(imagenPath) {
    imagenPath.loadPixels();

    for (let i = 0; i < imagenPath.pixels.length; i += 4) {
      let r = imagenPath.pixels[i];
      let g = imagenPath.pixels[i + 1];
      let b = imagenPath.pixels[i + 2];

      imagenPath.pixels[i] = 255 - r; // New R
      imagenPath.pixels[i + 1] = 255 - g; // New G
      imagenPath.pixels[i + 2] = 255 - b; // New B
    }
    imagenPath.updatePixels();
  }
};

new p5(sketch);
