const model = {
  //"7 bredde", "6 høyde"
  board: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ],
  turn: "red",
};

const view = () => {
  let theHTML = "";
  for (let i = 0; i < model.board.length; i++) {
    theHTML += "<div>";
    for (let j = 0; j < model.board[i].length; j++) {
      theHTML += makeSpace(model.board[i][j], j);
    }
    theHTML += "</div>";
  }
  document.getElementById("root").innerHTML = theHTML;
};

const makeSpace = (color, colom) => {
  if (!color) {
    return `<div class="white" onclick="selectColom(${colom})"></div>`;
  }
  return `<div class="${color}" onclick="selectColom(${colom})"></div>`;
};

view();

const selectColom = (colom) => {
  for (let i = model.board.length - 1; -1 < i; i--) {
    if (!model.board[i][colom]) {
      model.board[i][colom] = model.turn;

      if (doWeHaveAWinner()) {
        return winnerScren();
      }
      swapPlayer();
      return view();
    }
  }
  console.log("yay");
};

const doWeHaveAWinner = () => {
  let horisontal = 0;
  const vertical = [];
  for (let i = 0; i < model.board.length; i++) {
    vertical.push(0);
  }

  //Horisontalt
  for (let i = 0; i < model.board.length; i++) {
    for (let j = 0; j < model.board[i].length; j++) {
      if (model.board[i][j] == model.turn) {
        horisontal++;
        if (horisontal == 4) return true;
      } else {
        horisontal = 0;
      }
    }
  }

  //Vertikalt
  for (let i = 0; i < model.board.length; i++) {
    for (let j = 0; j < model.board[i].length; j++) {
      if (model.board[i][j] == model.turn) {
        vertical[j]++;
        if (vertical[j] == 4) return true;
      } else vertical[j] = 0;
    }
  }

  //På tvers
  for (let i = 0; i < model.board.length - 3; i++) {
    for (let j = 3; j < model.board[i].length - 3; j++) {
      if (
        model.board[i][j] == model.turn &&
        model.board[i + 1][j + 1] == model.turn &&
        model.board[i + 2][j + 2] == model.turn &&
        model.board[i + 3][j + 3] == model.turn
      )
        return true;
      if (
        model.board[i][j] == model.turn &&
        model.board[i + 1][j - 1] == model.turn &&
        model.board[i + 2][j - 2] == model.turn &&
        model.board[i + 3][j - 3] == model.turn
      )
        return true;
    }
  }
};

const swapPlayer = () => {
  if (model.turn == "yellow") {
    model.turn = "red";
  } else {
    model.turn = "yellow";
  }
};

const winnerScren = () => {
  theHTML = `<h1> Vinneren er ${model.turn == "red" ? "Rød" : "Gul"}! </h1>`;
  document.getElementById("root").innerHTML = theHTML;
};
