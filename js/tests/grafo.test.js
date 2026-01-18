const Grafo = require('.././grafo');

test('New graph listVertex shoould return an empty list ', () => {
    grafo = Grafo.emptyMultiGraph(); 
    expect(grafo.listVertex()).toBe("[]")
});

test('New graph listVertex with one vertex should return its name ', () => {
    grafo = Grafo.emptyMultiGraph(); 
    grafo.addVertex();
    expect(grafo.listVertex()).toBe("[v1]")
});


test('listVertex with many vertex should return its name separted by comma ', () => {
    grafo = Grafo.emptyMultiGraph(); 
    grafo.addVertex();
    grafo.addVertex();
    expect(grafo.listVertex()).toBe("[v1, v2]")
});

test('listVertex with many vertex should return its name separted by comma sorted alphabetically', () => {
    grafo = Grafo.emptyMultiGraph(); 
    grafo.addVertex();
    grafo.addVertex();
    expect(grafo.listVertex()).toBe("[v1, v2]")
});

test('list edges with one edge should return a empty list', () => {
    grafo = Grafo.emptyMultiGraph(); 
    grafo.addVertex();
    grafo.addVertex();
    expect(grafo.listEdge()).toBe("[]")
});



test('addEdge without first vertex throws error', () => {
    grafo = Grafo.emptyMultiGraph(); 
    grafo.addVertex();
    expect(() => {
        grafo.addEdge("v1", "v2");
    }).toThrow(Grafo.descriptionErrorSomeVertexDoesntExist("v1", "v2"));
});

test('addEdge without second vertex throws error', () => {
    grafo = Grafo.emptyMultiGraph(); 
    grafo.addVertex();
    expect(() => {
        grafo.addEdge("v1", "v2");
    }).toThrow(Grafo.descriptionErrorSomeVertexDoesntExist("v1", "v2"));
});


test('Degree of a vertex its the number of edges that ', () => {
    grafo = Grafo.emptyMultiGraph(); 
    grafo.addVertex();
    result = grafo.vertexDegree("v1");
    expect(result).toBe(0)
    grafo.addEdge("v1", "v1");
    result = grafo.vertexDegree("v1");
    expect(result).toBe(1)
})

test('Number of vertex of an empty graph its 0 and when added a new edge its 1', () => {
    grafo = Grafo.emptyMultiGraph(); 
    expect(grafo.numberOfVertex()).toBe(0)
    grafo.addVertex();
    expect(grafo.numberOfVertex()).toBe(1)
})

test('Number of vertex of an empty graph its 0 and when added a new edge its 1', () => {
    grafo = Grafo.emptyMultiGraph(); 
    grafo.addVertex();
    expect(grafo.numberOfEdges()).toBe(0)
    grafo.addEdge("v1", "v1");
    expect(grafo.numberOfEdges()).toBe(1)
})

test('Multiple edges in the same direction are considered different', () => {
    grafo = Grafo.emptyMultiGraph(); 
    grafo.addVertex();
    expect(grafo.numberOfEdges()).toBe(0)
    grafo.addEdge("v1", "v1");
    grafo.addEdge("v1", "v1");
    expect(grafo.numberOfEdges()).toBe(2)
})

test('Remove vertex of a graph have one less vertex', () => {
    grafo = Grafo.emptyMultiGraph(); 
    grafo.addVertex();
    expect(grafo.numberOfVertex()).toBe(1)
    grafo.removeVertex("v1");
    expect(grafo.numberOfVertex()).toBe(0)
})

test('Remove vertex removes edges which are part of the vertex', () => {
    grafo = Grafo.emptyMultiGraph(); 
    grafo.addVertex();
    grafo.addEdge("v1", "v1");
    expect(grafo.numberOfEdges()).toBe(1)
    grafo.removeVertex("v1");
    expect(grafo.numberOfEdges()).toBe(0)
})