// design an algorithm to figure out if someone won a tic tac toe game
const ticTackWin = (board) => {
  const sign = board[0][0];
  return (
    ticTackWinDown(board, 0, 0, 1, sign) ||
    ticTackWinRight(board, 0, 0, 1, sign) ||
    ticTackWinDiag(board, 0, 0, 1, sign)
  );
};
ticTackWinDown = (board, i, j, iteration, sign) => {
  let valid = i >= 0 && j >= 0 && j < 3 && i < 3;
  if (!valid) return false;
  if (board[i][j] == sign) {
    if (iteration >= 3) return true;
    return ticTackWinDown(board, i + 1, j, iteration + 1, sign);
  }
  sign = board[i][j];
  iteration = 1;
  return (
    ticTackWinDiag(board, i + 1, j + 1, iteration + 1, sign) ||
    ticTackWinDown(board, i + 1, j, iteration + 1, sign) ||
    ticTackWinRight(board, i, j + 1, iteration + 1, sign) ||
    (i == 2 && j == 0
      ? ticTackWinDiagUp(board, i - 1, j + 1, iteration + 1, sign)
      : false)
  );
};
ticTackWinRight = (board, i, j, iteration, sign) => {
  let valid = i >= 0 && j >= 0 && j < 3 && i < 3;
  if (!valid) return false;
  if (board[i][j] == sign) {
    if (iteration >= 3) return true;
    return ticTackWinRight(board, i, j + 1, iteration + 1, sign);
  }
  sign = board[i][j];
  iteration = 1;
  return (
    ticTackWinDiag(board, i + 1, j + 1, iteration + 1, sign) ||
    ticTackWinDown(board, i + 1, j, iteration + 1, sign) ||
    ticTackWinRight(board, i, j + 1, iteration + 1, sign)
  );
};
ticTackWinDiag = (board, i, j, iteration, sign) => {
  let valid = i >= 0 && j >= 0 && j < 3 && i < 3;
  if (!valid) return false;
  if (board[i][j] == sign) {
    if (iteration >= 3) return true;
    return ticTackWinDiag(board, i + 1, j + 1, iteration + 1, sign);
  }
  sign = board[i][j];
  iteration = 1;
  return (
    ticTackWinDiag(board, i + 1, j + 1, iteration + 1, sign) ||
    ticTackWinDown(board, i + 1, j, iteration + 1, sign) ||
    ticTackWinRight(board, i, j + 1, iteration + 1, sign)
  );
};

ticTackWinDiagUp = (board, i, j, iteration, sign) => {
  let valid = i >= 0 && j >= 0 && j < 3 && i < 3;
  if (!valid) return;
  if (board[i][j] == sign) {
    if (iteration >= 3) return true;
    return ticTackWinDiagUp(board, i - 1, j + 1, iteration + 1, sign);
  }
  return false;
};
const main = () => {
  let board = [
    ["x", "o", "x"],
    ["o", "x", "o"],
    ["o", "o", "x"],
  ];
  console.log(ticTackWin(board)); //true
  board = [
    ["x", "o", "x"],
    ["x", "o", "o"],
    ["o", "x", "x"],
  ];
  console.log(ticTackWin(board)); //false
  board = [
    ["x", "o", "o"],
    ["o", "o", "x"],
    ["o", "o", "x"],
  ];
  console.log(ticTackWin(board)); //true
};
module.exports = main;
