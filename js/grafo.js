import { Vertex } from './vertex.js';
import { Edge } from './edge.js';
class Grafo {

    vertex;
    edges;
    vertexNameCounter=0;
    constructor() {
        this.vertex = new Set();
        this.edges = new Set();
    }

    listVertex() {
        return "[" + Array.from(this.vertex.name).sort().join(", ") + "]"
    }

    listEdge() {
        return "[" + Array.from(this.edges).sort().join(", ") + "]"
    }

    addVertex(coordX, coordY) {

        const vertexName = "V" + this.vertexNameCounter++;
        nuevoVertex = new Vertex(vertexName, coordX, coordY)
    
        while (this.vertex.has(vertexName.name)) {
            nuevoVertex.name = "V" + this.vertexNameCounter++;
        }

        if (this.vertex.has(item.position=={x:coordX, y:coordY})){
            //despues deberiamos de analisar el tema de coliciones mas a fondo.  Dividir entre el punto central y el area del vertice.
            throw new Error("Ya existe un vertice en esa posicion")
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

    static descriptionErrorVertexAlreadyExists(vertexName) {
        return "El vértice con el nombre " + vertexName + " ya existe ";
    }

    static descriptionErrorSomeVertexDoesntExist(fromVertexName, toVertexName) {
        return "La arista debería conectar a " + fromVertexName + " con " + toVertexName + " pero no existen en el grafo";
    }
}



module.exports = Grafo;