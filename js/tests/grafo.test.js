const Grafo = require('.././grafo');

test('New graph listVertex shoould return an empty list ', () => {
    grafo = new Grafo(); 
    expect(grafo.listVertex()).toBe("[]")
});

test('New graph listVertex with one vertex should return its name ', () => {
    grafo = new Grafo(); 
    grafo.addVertex();
    expect(grafo.listVertex()).toBe("[v1]")
});


test('listVertex with many vertex should return its name separted by comma ', () => {
    grafo = new Grafo(); 
    grafo.addVertex();
    grafo.addVertex();
    expect(grafo.listVertex()).toBe("[v1, v2]")
});

test('listVertex with many vertex should return its name separted by comma sorted alphabetically', () => {
    grafo = new Grafo(); 
    grafo.addVertex();
    grafo.addVertex();
    expect(grafo.listVertex()).toBe("[v1, v2]")
});

test('list edges with one edge should return a empty list', () => {
    grafo = new Grafo(); 
    grafo.addVertex();
    grafo.addVertex();
    //grafo.addEdge("v1", "v2");
    expect(grafo.listEdge()).toBe("[]")
});


/*
test('addVertex with the same name throws error', () => {
    grafo = new Grafo(); 
    grafo.addVertex("v1");
    expect(() => {
        grafo.addVertex("v1");
    }).toThrow(Grafo.descriptionErrorVertexAlreadyExists("v1"));
});
*/
test('addEdge without first vertex throws error', () => {
    grafo = new Grafo(); 
    grafo.addVertex();
    expect(() => {
        grafo.addEdge("v1", "v2");
    }).toThrow(Grafo.descriptionErrorSomeVertexDoesntExist("v1", "v2"));
});

test('addEdge without first vertex throws error', () => {
    grafo = new Grafo(); 
    grafo.addVertex();
    expect(() => {
        grafo.addEdge("v1", "v2");
    }).toThrow(Grafo.descriptionErrorSomeVertexDoesntExist("v1", "v2"));
});


test('Degree of a vertex its the number of edges that ', () => {
    grafo = new Grafo(); 
    grafo.addVertex();
    result = grafo.vertexDegree("v1");
    expect(result).toBe(0)
    grafo.addEdge("v1", "v1");
    result = grafo.vertexDegree("v1");
    expect(result).toBe(1)
})

test('Number of vertex of an empty graph its 0 and when added a new edge its 1', () => {
    grafo = new Grafo(); 
    expect(grafo.numberOfVertex()).toBe(0)
    grafo.addVertex();
    expect(grafo.numberOfVertex()).toBe(1)
})

test('Number of vertex of an empty graph its 0 and when added a new edge its 1', () => {
    grafo = new Grafo(); 
    grafo.addVertex();
    expect(grafo.numberOfEdges()).toBe(0)
    grafo.addEdge("v1", "v1");
    expect(grafo.numberOfEdges()).toBe(1)
})

test('Multiple edges in the same direction are considered different', () => {
    grafo = new Grafo(); 
    grafo.addVertex();
    expect(grafo.numberOfEdges()).toBe(0)
    grafo.addEdge("v1", "v1");
    grafo.addEdge("v1", "v1");
    expect(grafo.numberOfEdges()).toBe(2)
})
