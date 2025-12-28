

const Grafo = require('.././Grafo');

test('New graph listVertex shoould return an empty list ', () => {
    grafo = new Grafo(); 
    expect(grafo.listVertex()).toBe("[]")
});

test('New graph listVertex with one vertex should return its name ', () => {
    grafo = new Grafo(); 
    grafo.addVertex("v1");
    expect(grafo.listVertex()).toBe("[v1]")
});
