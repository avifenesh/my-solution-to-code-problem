// a robot sitting on the upper left of a grid, and can move right or down. theres some of the cells he not allowed to pass on.
// Design algorithm to find a path for the robot to go down to the bottom right

const robotInAGrid = (grid, i, j, path) => {
  if (i == grid.length - 1 && j == grid[0].length - 1) {
    return `[${i}, ${j}] ` + path;
  } else {
    grid[i][j] = -1;
    right =
      grid[i][j + 1] && grid[i][j + 1] != -1
        ? robotInAGrid(grid, i, j + 1, path)
        : null;
    if (right != null) return `[${i}, ${j}] => ` + right;
    down =
      grid[i + 1] && grid[i + 1][j] && grid[i + 1][j] != -1
        ? robotInAGrid(grid, i + 1, j, path)
        : null;
    if (down != null) return `[${i}, ${j}] => ` + down;
  }
};

const grid = [
  [1, 1, 1, -1, -1],
  [1, 1, 1, 1, -1],
  [-1, 1, 1, 1, 1],
  [1, 1, -1, -1, 1],
  [1, 1, -1, -1, 1],
];

const main = () => {
  console.log(robotInAGrid(grid, 0, 0, "")); // [0, 0] => [0, 1] => [0, 2] => [1, 2] => [1, 3] => [2, 3] => [2, 4] => [3, 4] => [4, 4]
};
module.exports = main;
