

const Grafo = require('.././grafo');

test('New graph listVertex shoould return an empty list ', () => {
    grafo = new Grafo(); 
    expect(grafo.listVertex()).toBe("[]")
});

test('New graph listVertex with one vertex should return its name ', () => {
    grafo = new Grafo(); 
    grafo.addVertex("v1");
    expect(grafo.listVertex()).toBe("[v1]")
});


test('listVertex with many vertex should return its name separted by comma ', () => {
    grafo = new Grafo(); 
    grafo.addVertex("v1");
    grafo.addVertex("v2");
    expect(grafo.listVertex()).toBe("[v1, v2]")
});

test('listVertex with many vertex should return its name separted by comma sorted alphabetically', () => {
    grafo = new Grafo(); 
    grafo.addVertex("v2");
    grafo.addVertex("v1");
    expect(grafo.listVertex()).toBe("[v1, v2]")
});

test('list edges with one edge should return a empty list', () => {
    grafo = new Grafo(); 
    grafo.addVertex("v2");
    grafo.addVertex("v1");
    //grafo.addEdge("v1", "v2");
    expect(grafo.listEdge()).toBe("[]")
});