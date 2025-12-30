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

    static descriptionErrorVertexAlreadyExists(vertexName) {
        return "El vértice con el nombre " + vertexName + " ya existe ";
    }

    static descriptionErrorSomeVertexDoesntExist(fromVertexName, toVertexName) {
        return "La arista debería conectar a " + fromVertexName + " con " + toVertexName + " pero no existen en el grafo";
    }
}

class Vertex{
    name;
    coordX;
    coordY;
    position;
    color;
    size;
    edges;
    conectedVertexes;
    //nosotros cuando cliqueamos, queremos que se cree un nuevo objeto Vertex que tenga la posicion del mouse
    // y un nombre asignado arbitrariamente para empezar.  El color y tamanio se pueden heredar de una propiedad/regla mas general de la clase grafo.
    constructor(name, coordX, coordY){
        this.name = name
        this.coordX = coordX
        this.coordY = coordY
        this.position = {x: coordX, y: coordY}
        this.edges = new Set()
        this.conectedVertexes = new Set()
    }
}

class Edge{
    id;
    fromVertex;
    toVertex;
    weight;
    color;
    size;
    constructor(fromVertex, toVertex){
        this.nombre = fromVertex.name + "-" + toVertex.name
        this.id=(fromVertex,toVertex)
        this.fromVertex = fromVertex
        this.toVertex = toVertex
    
    }

    
}
module.exports = Grafo;