// find the minimal island of L in a grid of M's and L's
const minimumIsland = (grid) => {
  const visited = new Set();
  let minimalIsland = grid.length * grid[0].length;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      let size = explore(grid, r, c, visited, 0);
      if (size < minimalIsland && size != 0) minimalIsland = size;
    }
  }
  return minimalIsland;
};

const explore = (grid, r, c, visited, size) => {
  const rowInbound = r < grid.length && r >= 0;
  const columnInbound = c < grid[0].length && c >= 0;
  if (!rowInbound || !columnInbound) return 0;
  if (visited.has(r + "," + c)) return 0;
  visited.add(r + "," + c);
  if (grid[r][c] === "W") return 0;
  size += explore(grid, r + 1, c, visited, size);
  size += explore(grid, r - 1, c, visited, size);
  size += explore(grid, r, c + 1, visited, size);
  size += explore(grid, r, c - 1, visited, size);
  return size + 1;
};

const main = () => {
  let grid = [
    ["W", "L", "W", "W", "W"],
    ["W", "L", "W", "W", "W"],
    ["W", "W", "W", "L", "W"],
    ["W", "W", "L", "L", "W"],
    ["L", "W", "W", "L", "L"],
    ["L", "L", "W", "W", "W"],
  ];

  console.log(minimumIsland(grid)); // -> 2
  grid = [
    ["L", "W", "W", "L", "W"],
    ["L", "W", "W", "L", "L"],
    ["W", "L", "W", "L", "W"],
    ["W", "W", "W", "W", "W"],
    ["W", "W", "L", "L", "L"],
  ];

  console.log(minimumIsland(grid)); // -> 1
  grid = [
    ["L", "L", "L"],
    ["L", "L", "L"],
    ["L", "L", "L"],
  ];

  console.log(minimumIsland(grid)); // -> 9
  grid = [
    ["W", "W"],
    ["L", "L"],
    ["W", "W"],
    ["W", "L"],
  ];

  console.log(minimumIsland(grid)); // -> 1
};
module.exports = main;
