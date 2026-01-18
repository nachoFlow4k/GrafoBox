
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
        this.vertex = new Map();
        this.edges = new Set();
    }

    listVertex() {
        return "[" + [...this.vertex.keys()].sort().join(", ") + "]"
    }

    listEdge() {
        return "[" + Array.from(this.edges).sort().join(", ") + "]"
    } 

    #newVertexName() {
        return "v" + this.vertexNameCounter++;
    }

    addVertex(coordX, coordY) {

        const vertexName = this.#newVertexName();
        
    
        while (this.vertex.has(vertexName)) {
            nuevoVertex.name = this.#newVertexName();
        }
    
        nuevoVertex = new Vertex(vertexName, coordX, coordY)
        this.vertex.set(vertexName, nuevoVertex);

        /*
        if (this.vertex.has(item.position=={x:coordX, y:coordY})){
            //despues deberiamos de analisar el tema de coliciones mas a fondo.  Dividir entre el punto central y el area del vertice.
            throw new Error("Ya existe un vertice en esa posicion")
        }
       nuevoVertex = new Vertex(vertexName, coordX, coordY)
        */
    }

    addEdge(fromVertex, toVertex) {
        
        if (![...this.vertex.keys()].includes(fromVertex) || ![...this.vertex.keys()].includes(toVertex)) {
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