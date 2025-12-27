const Grafo = require('.././Grafo');

test('New graph listVertex shoould return an empty list ', () => {
    grafo = new Grafo(); 
    expect(grafo.listVertex()).toBe("[]")
});
