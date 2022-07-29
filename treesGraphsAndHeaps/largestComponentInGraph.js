// find the largest component of connected nodes in a given graph

const largestComponent = (graph) => {
  const visited = new Set();
  let biggest = 0;
  for (let node in graph) {
    let size = explore(graph, node, visited, 0);
    if (size > biggest) biggest = size;
  }
  console.log(biggest);
  return biggest;
};

const explore = (graph, node, visited, size) => {
  for (let neighbor of graph[node]) {
    if (!visited.has(String(neighbor))) {
      visited.add(String(neighbor));
      size = explore(graph, neighbor, visited, size + 1);
    }
  }
  return size;
};

const main = () => {
  largestComponent({
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
  }); // -> 4
  largestComponent({
    1: ["2"],
    2: ["1", "8"],
    6: ["7"],
    9: ["8"],
    7: ["6", "8"],
    8: ["9", "7", "2"],
  }); // -> 6
  largestComponent({
    3: [],
    4: ["6"],
    6: ["4", "5", "7", "8"],
    8: ["6"],
    7: ["6"],
    5: ["6"],
    1: ["2"],
    2: ["1"],
  }); // -> 5
  largestComponent({}); // -> 0
  largestComponent({
    0: ["4", "7"],
    1: [],
    2: [],
    3: ["6"],
    4: ["0"],
    6: ["3"],
    7: ["0"],
    8: [],
  }); // -> 3
};
module.exports = main;
