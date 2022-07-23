const matrix0 = function (mat) {
  console.log(mat);
  if (typeof mat == null) throw err;
  const jQueue = [];
  const iQueue = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        jQueue.push(j);
        iQueue.push(i);
      }
    }
  }
  for (let j of jQueue) {
    for (let i in mat) {
      mat[i][j] = 0;
    }
  }
  for (let i of iQueue) {
    for (let j in mat[0]) {
      mat[i][j] = 0;
    }
  }
  return mat;
};

const mat = [[], [], [], [], []];
mat[0][0] = 1;
mat[0][1] = 5;
mat[0][2] = 0;
mat[0][3] = 1;
mat[0][4] = 2;
mat[1][0] = 8;
mat[1][1] = 1;
mat[1][2] = 3;
mat[1][3] = 5;
mat[1][4] = 6;
mat[2][0] = 1;
mat[2][1] = 2;
mat[2][2] = 1;
mat[2][3] = 1;
mat[2][4] = 8;
mat[3][0] = 1;
mat[3][1] = 7;
mat[3][2] = 1;
mat[3][3] = 2;
mat[3][4] = 1;
mat[4][0] = 6;
mat[4][1] = 1;
mat[4][2] = 9;
mat[4][3] = 0;
mat[4][4] = 1;

console.log(matrix0(mat));
