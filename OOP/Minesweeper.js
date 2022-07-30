const prompt = require("prompt");

const DIFFICULTLY_TABLE = {
  3: [99, 30, 16],
  2: [40, 16, 16],
  1: [10, 9, 9],
};

GAME_ON = true;

class Panel {
  clicked = false;
  flaged = false;
  type;
  x;
  y;
  constructor(x, y, type = null) {
    this.type = type;
    this.x = x;
    this.y = y;
  }

  isBomb() {
    return false;
  }
  isEmpty() {
    return false;
  }
  isNumerical() {
    return false;
  }
  toBomb() {
    return new BombPAnel(this.x, this.y, BombPAnel);
  }
  toNumerical() {
    if (this.type == NumericalPAnel) {
      this.val++;
      return this;
    } else if (this.type == BombPAnel) return this;
    else {
      return new NumericalPAnel(NumericalPAnel, this.x, this.y, 1);
    }
  }
  click(board) {
    this.clicked = true;
  }
  print() {
    if (this.flaged) return " |>> ";
    else if (!this.clicked) return "     ";
  }
  toFlaged() {
    this.flaged = !this.flaged;
  }
}
class EmptyPanel extends Panel {
  openEmptyNeighborsAndEdge() {}
  isEmpty() {
    return true;
  }
  print() {
    if (this.clicked) return "empty";
    else return super.print();
  }
  click(board) {
    super.click();
    for (let j = -1; j < 2; j++) {
      board[this.y - j] &&
      board[this.y - j][this.x + 1] &&
      board[this.y - j][this.x + 1].type !== BombPAnel &&
      !board[this.y - j][this.x + 1].clicked
        ? board[this.y - j][this.x + 1].click(board)
        : null;
      board[this.y + j] &&
      board[this.y + j][this.x - 1] &&
      board[this.y + j][this.x - 1].type !== BombPAnel &&
      !board[this.y + j][this.x - 1].clicked
        ? board[this.y + j][this.x - 1].click(board)
        : null;
    }
    board[this.y + 1] &&
    board[this.y + 1][this.x] &&
    board[this.y + 1][this.x].type !== BombPAnel &&
    !board[this.y + 1][this.x].clicked
      ? board[this.y + 1][this.x].click(board)
      : null;
    board[this.y - 1] &&
    board[this.y - 1][this.x] &&
    !board[this.y - 1][this.x].clicked &&
    board[this.y - 1][this.x].type !== BombPAnel
      ? board[this.y - 1][this.x].click(board)
      : null;
  }
}
class NumericalPAnel extends Panel {
  val;
  constructor(type, x, y, val) {
    super(x, y, type);
    this.val = val;
  }
  isNumerical() {
    return true;
  }
  print() {
    if (this.clicked) return "  " + this.val + "  ";
    else return super.print();
  }
}
class BombPAnel extends Panel {
  isBomb() {
    return true;
  }

  click(board) {
    return "Game Over - You Lose!";
  }
}

class Board {
  board = [[]];
  constructor([bombs, n, m]) {
    this.board = Array(n)
      .fill()
      .map(() => Array(m).fill());
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        this.board[i][j] = new EmptyPanel(i, j);
      }
    }
    let x, y;
    for (let i = 0; i < bombs; i++) {
      x = Math.floor(Math.random() * m);
      y = Math.floor(Math.random() * n);
      if (!this.board[y][x].isBomb()) {
        this.board[y][x] = this.board[y][x].toBomb();
        for (let j = -1; j < 2; j++) {
          this.board[y - j] && this.board[y - j][x + 1]
            ? (this.board[y - j][x + 1] =
                this.board[y - j][x + 1].toNumerical())
            : null;
          this.board[y + j] && this.board[y + j][x - 1]
            ? (this.board[y + j][x - 1] =
                this.board[y + j][x - 1].toNumerical())
            : null;
        }
        this.board[y + 1] && this.board[y + 1][x]
          ? (this.board[y + 1][x] = this.board[y + 1][x].toNumerical())
          : null;
        this.board[y - 1] && this.board[y - 1][x]
          ? (this.board[y - 1][x] = this.board[y - 1][x].toNumerical())
          : null;
      } else i--;
    }
  }
}

const main = async () => {
  prompt.start();
  console.log("In eny time you can type exit and end the game");
  console.log(
    "please chose difficulty, for easy type 1, for intermediate type 2, for hard type 3"
  );
  const { difficulty } = await prompt.get(["difficulty"]);
  if (difficulty == "exit") {
    GAME_ON = false;
    console.log("See You Soon!");
  }
  const board = new Board(DIFFICULTLY_TABLE[difficulty]);
  const printBoard = (board) => {
    board.board.forEach((e) => {
      var line = "";
      e.forEach((f) => (line += "[" + f.print() + "]"));
      console.log(line);
    });
  };

  while (GAME_ON) {
    printBoard(board);
    console.log(
      "Please type your chosen panel to click in the format x , y, you want to flag some panel add one to the flag option, else type 0"
    );
    let { x, y, flag } = await prompt.get(["x", "y", "flag"]);
    if (x == "exit" || y == "exit" || flag == "exit") {
      GAME_ON = false;
      console.log("See You Soon!");
      break;
    } else if (board.board[y] && board.board[y][x]) {
      if (flag == 1) {
        board.board[y][x].toFlaged();
      } else {
        let click = board.board[y][x].click(board.board);
        if (typeof click == "string") {
          GAME_ON = false;
          console.log(click);
          break;
        }
      }
    }
  }
};
module.exports = main;
