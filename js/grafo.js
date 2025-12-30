class Grafo {

    vertex;
    edges;
    vertexNameCounter = 1;
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
        nuevoVertex = new Vertex(vertexName, coordX, coordY)
    
        while (this.vertex.has(vertexName.name)) {
            nuevoVertex.name = this.#newVertexName();
        }

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
        throw new Error("This method should be implemented")
    }

    removeEdge(fromVertex, toVertex) {
        throw new Error("This method should be implemented")
    }

    vertexDegree(vertexName) {
        return 0;
    }

    numberOfVertex() {
        return this.vertex.size
    }

    numberOfEdges() {
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