class Graph {
    constructor() {
      this.adjacencyList = {}; // Key = Node, Value = Array of neighbors
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
      if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
  
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1); // Remove if you want Directed Graph
    }
  
    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
  
    removeVertex(vertex) {
      while (this.adjacencyList[vertex].length) {
        const neighbor = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, neighbor);
      }
      delete this.adjacencyList[vertex];
    }
  
    display() {
      for (let vertex in this.adjacencyList) {
        console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
      }
    }
  }
  
  const graph = new Graph();
  
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "C");
  
  graph.display();
  