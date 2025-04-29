// function bfs(graph, start) {
//     const visited = new Set();
//     const queue = [start];
//     while (queue.length > 0) {
//       const node = queue.shift();
//       if (!visited.has(node)) {
//         console.log(node);
//         visited.add(node);
//         for (let neighbor of graph[node]) {
//           queue.push(neighbor);
//         }
//       }
//     }
//   }
// const graph = {
//     A: ['B', 'C'],
//     B: ['D', 'E'],
//     C: ['F'],
//     D: ['H'],
//     E: ['F'],
//     F: [],
//     H : []
// };
// bfs(graph, 'A');

const _ = require('lodash');
const name=function(){
    return 1;
}
const obj1 = { a: 1, b: { c: 2 },name};
const obj2 = { a: 1, b: { c: 2 },name};

console.log(_.isEqual(obj1, obj2)); // true

  