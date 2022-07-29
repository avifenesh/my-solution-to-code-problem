// find the shortest path between two node in a given graph

const edgesToJson = (edges) => {
  const graph = {};
  for (let edge of edges) {
    let [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = edgesToJson(edges);
  const queue = [];
  const visited = new Set();
  let path = 0;
  queue.push([nodeA, path]);
  while (queue.length > 0) {
    let [current, path] = queue.shift();
    if (visited.has(current)) continue;
    visited.add(current);
    if (current === nodeB) return path;
    for (let neighbor of graph[current]) queue.push([neighbor, path + 1]);
  }
  return -1;
};
const main = () => {
  let edges = [
    ["w", "x"],
    ["x", "y"],
    ["z", "y"],
    ["z", "v"],
    ["w", "v"],
  ];

  console.log(shortestPath(edges, "w", "z")); // -> 2
  edges = [
    ["w", "x"],
    ["x", "y"],
    ["z", "y"],
    ["z", "v"],
    ["w", "v"],
  ];

  console.log(shortestPath(edges, "y", "x")); // -> 1

  edges = [
    ["a", "c"],
    ["a", "b"],
    ["c", "b"],
    ["c", "d"],
    ["b", "d"],
    ["e", "d"],
    ["g", "f"],
  ];

  console.log(shortestPath(edges, "a", "e")); // -> 3
  edges = [
    ["a", "c"],
    ["a", "b"],
    ["c", "b"],
    ["c", "d"],
    ["b", "d"],
    ["e", "d"],
    ["g", "f"],
  ];

  console.log(shortestPath(edges, "e", "c")); // -> 2

  edges = [
    ["a", "c"],
    ["a", "b"],
    ["c", "b"],
    ["c", "d"],
    ["b", "d"],
    ["e", "d"],
    ["g", "f"],
  ];

  console.log(shortestPath(edges, "b", "g")); // -> -1
  edges = [
    ["c", "n"],
    ["c", "e"],
    ["c", "s"],
    ["c", "w"],
    ["w", "e"],
  ];

  console.log(shortestPath(edges, "w", "e")); // -> 1
  edges = [
    ["c", "n"],
    ["c", "e"],
    ["c", "s"],
    ["c", "w"],
    ["w", "e"],
  ];

  console.log(shortestPath(edges, "n", "e")); // -> 2
  edges = [
    ["m", "n"],
    ["n", "o"],
    ["o", "p"],
    ["p", "q"],
    ["t", "o"],
    ["r", "q"],
    ["r", "s"],
  ];

  console.log(shortestPath(edges, "m", "s")); // -> 6
};
module.exports = main;
