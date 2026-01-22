export default class Vertex {
  name;
  coordX;
  coordY;
  position;
  color;
  size;
  edges;
  conectedVertexes;
  weight;
  //nosotros cuando cliqueamos, queremos que se cree un nuevo objeto Vertex que tenga la posicion del mouse
  // y un nombre asignado arbitrariamente para empezar.  El color y tamanio se pueden heredar de una propiedad/regla mas general de la clase grafo.
  constructor(name, coordX, coordY) {
    this.name = name;
    this.coordX = coordX;
    this.coordY = coordY;
    this.position = { x: coordX, y: coordY };
  }

  conexiones(vertexName) {
    throw new Error("This method should be implemented");
  }

  pesoSalida(vertexName) {
    throw new Error("This method should be implemented");
  }

  pesoEntrada(vertexName) {
    throw new Error("This method should be implemented");
  }

  degree() {
    throw new Error("This method should be implemented");
  }
}
