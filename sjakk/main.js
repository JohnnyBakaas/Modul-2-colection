const model = {
  avatars: ["♚", "♛", "♜", "♝", "♞", "♟︎"],
  board: [
    ["♜", "♞", "♝", "♚", "♛", "♝", "♞", "♜"],
    ["♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎"],
    ["♜", "♞", "♝", "♚", "♛", "♝", "♞", "♜"],
  ],
  legalMoves: [],
};

const test = {
  avatar: "",
  team: "black",
  legalMoves,
  moved: false,
  enPassant: false,
};

const makeDiv = (colorNumb, avatar, team) => {
  if (avatar) {
    return `<div class="${colorNumb % 2 ? "light" : "dark"}"> <p class="${
      team == "white" ? "white" : "black"
    }"> ${avatar} </p> </div>`;
  }
  return `<div class="${colorNumb % 2 ? "light" : "dark"}"></div>`;
};

const view = () => {
  let theHTML = "";
  let lightOrDark = 0;
  for (let i = 0; i < model.board.length; i++) {
    for (let j = 0; j < model.board[i].length; j++) {
      theHTML += makeDiv(lightOrDark, model.board[i][j], "white");
      lightOrDark++;
    }
    lightOrDark++;
  }
  console.log(theHTML);
  document.getElementById("root").innerHTML = theHTML;
};

view();

const hjemmeside = {
  butikk: [
    {
      tittel: "Introduksjon til matte",
      bilde: "img/matteBilde",
      tekst:
        "I dette kurset går jeg gjennom hvordan jeg legger opp ett læringsløp i mattematikk",
    },
  ],
};
