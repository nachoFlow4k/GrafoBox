class Grafo {

    vertex;
    edges;

    constructor() {
        this.vertex = new Set();
        this.edges = new Set();
    }

    listVertex() {
        return "[" + Array.from(this.vertex).sort().join(", ") + "]"
    }

    listEdge() {
        return "[" + Array.from(this.edges).sort().join(", ") + "]"
    }

    addVertex(vertexName) {
        if (this.vertex.has(vertexName)) {
            throw new Error(Grafo.descriptionErrorVertexAlreadyExists(vertexName))
        } 
        this.vertex.add(vertexName);
    }

    addEdge(fromVertex, toVertex) {
        if (!this.vertex.has(fromVertex) || !this.vertex.has(toVertex)) {
            throw new Error(Grafo.descriptionErrorSomeVertexDoesntExist(fromVertex, toVertex));
        }
        this.edges.add({from: fromVertex, to: toVertex});
    }

    removeVertex(vertexName) {
        throw new Error("This method should be implemented")
    }

    removeEdge(fromVertex, toVertex) {
        throw new Error("This method should be implemented")
    }

    vertexDegree(vertexName) {
        
    }

    static descriptionErrorVertexAlreadyExists(vertexName) {
        return "El vértice con el nombre " + vertexName + " ya existe ";
    }

    static descriptionErrorSomeVertexDoesntExist(fromVertexName, toVertexName) {
        return "La arista debería conectar a " + fromVertexName + " con " + toVertexName + " pero no existen en el grafo";
    }
}

module.exports = Grafo;