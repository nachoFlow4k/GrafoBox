export default class Edge {
  id;
  fromVertex;
  toVertex;
  weight;
  color;
  size;
  constructor(fromVertex, toVertex) {
    this.nombre = fromVertex.name + "-" + toVertex.name;
    this.id = (fromVertex, toVertex);
    this.fromVertex = fromVertex;
    this.toVertex = toVertex;
  }
}
