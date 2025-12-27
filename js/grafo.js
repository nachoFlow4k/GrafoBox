class Grafo {

    vertex;
    edges;

    constructor() {
        this.vertex = new Set();
        this.edges = new Set();
    }

    listVertex() {
        return "[" + Array.from(this.edges).join(", ") + "]"
    }

    addVertex(vertexName) {
        if (this.vertex.has(vertexName)) {
            throw new Error(descriptionErrorVertexAlreadyExists(vertexName))
        } 
        this.vertex.add(vertexName);
    }

    static descriptionErrorVertexAlreadyExists(vertexName) {
        return "El vértice con el nombre " + vertexName + " ya existe ";
    }
}

module.exports = Grafo;