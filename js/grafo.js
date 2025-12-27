class Grafo {

    vertices;
    aristas;

    constructor() {
        this.vertices = new Set();
        this.aristas = new Set();
    }

    listarVertices() {
        return "[" + Array.from(this.aristas).join(", ") + "]"
    }

}