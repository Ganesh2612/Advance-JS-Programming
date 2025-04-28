function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
  
    while (queue.length > 0) {
      const node = queue.shift();
      if (!visited.has(node)) {
        console.log(node);
        visited.add(node);
        for (let neighbor of graph[node]) {
          queue.push(neighbor);
        }
      }
    }
  }
  
  const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
  };
  
  bfs(graph, 'A');
  