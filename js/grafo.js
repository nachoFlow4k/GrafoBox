
const Vertex = require('./vertex.js');
const Edge = require('./edge.js');

class Grafo {

    vertex;
    edges;
    vertexNameCounter = 1;

    static emptyMultiGraph() {

        return new Grafo()
    }

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

    #newVertexName() {
        return "v" + this.vertexNameCounter++;
    }

    addVertex(coordX, coordY) {

        const vertexName = this.#newVertexName();
        
        /*nuevoVertex = new Vertex(vertexName, coordX, coordY)
    
        while (this.vertex.has(vertexName.name)) {
            nuevoVertex.name = this.#newVertexName();
        }
            */

        /*
        if (this.vertex.has(item.position=={x:coordX, y:coordY})){
            //despues deberiamos de analisar el tema de coliciones mas a fondo.  Dividir entre el punto central y el area del vertice.
            throw new Error("Ya existe un vertice en esa posicion")
        }
        */
        this.vertex.add(vertexName);
    }

    addEdge(fromVertex, toVertex) {
        if (!this.vertex.has(fromVertex) || !this.vertex.has(toVertex)) {
            throw new Error(Grafo.descriptionErrorSomeVertexDoesntExist(fromVertex, toVertex));
        }
        this.edges.add({from: fromVertex, to: toVertex});
    }

    removeVertex(vertexName) {
        this.vertex.delete(vertexName);
        this.edges = new Set(Array.from(this.edges).filter((edge) => edge.from != vertexName && edge.to != vertexName))
        
    }

    removeEdge(fromVertex, toVertex) {
        throw new Error("This method should be implemented")
    }

    vertexDegree(vertexName) {
        adjacentVertex = Array.from(this.edges).filter((edge) => edge.from == vertexName || edge.to == vertexName)        
        return adjacentVertex.length;
    }

    degree() {
        throw new Error("This method should be implemented")
    }

    numberOfVertex() {
        return this.vertex.size
    }

    numberOfEdges() {
        return this.edges.size
    }

    static descriptionErrorVertexAlreadyExists(vertexName) {
        return "El vértice con el nombre " + vertexName + " ya existe ";
    }

    static descriptionErrorSomeVertexDoesntExist(fromVertexName, toVertexName) {
        return "La arista debería conectar a " + fromVertexName + " con " + toVertexName + " pero no existen en el grafo";
    }
}


module.exports = Grafo;