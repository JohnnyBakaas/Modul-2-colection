const scuffed = {
  board: [
    [
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
    [
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
    [
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
    [
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
    [
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
    [
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
    [
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
    [
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
    [
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
    [
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  ],
  birdPosition: 0,
  generatePipe: function () {
    let openhing = Math.floor(Math.random() * 7);
    this.board.forEach((e) => {
      e[e.length - 1] = "H";
    });
    this.board[openhing][this.board[openhing].length - 1] = " ";
    this.board[openhing + 1][this.board[openhing].length - 1] = " ";
    this.board[openhing + 2][this.board[openhing].length - 1] = " ";
  },
  placeBid: function () {
    this.board[this.birdPosition][0] = "O";
  },
  movePipes: function () {
    this.board.forEach((e) => {
      e[0] = " ";
      for (let i = 0; i < e.length; i++) {
        if (e[i] == "H") {
          e[i - 1] = e[i];
          e[i] = " ";
        }
      }
    });
  },
  birdExperiencingGravity: function () {
    this.birdPosition++;
  },
  birdDeadCheck: function () {
    if (this.board[this.birdPosition] == "H") {
      console.log("Dead bird");
      return true;
    }
    if (this.birdPosition >= 9 || this.birdPosition < -1) {
      console.log("Dead bird");
      return true;
    }
    return false;
  },
  newTick: function () {
    scuffed.birdExperiencingGravity();
    scuffed.movePipes();
    if (scuffed.birdDeadCheck()) clearInterval(startGame);
    if (scuffed.flap) scuffed.birdPosition -= 2;
    if (scuffed.tickTilNextPipes == 5) {
      scuffed.tickTilNextPipes = 0;
      scuffed.generatePipe();
    }
    scuffed.tickTilNextPipes++;
    console.log(scuffed.birdPosition);
    console.log(scuffed.board);
    scuffed.flap = false;
    scuffed.render();
  },
  tickTilNextPipes: 4,
  flap: false,
  tickRate: 250,
  render: function () {
    let jegGidderIkkeÅSkriveOmTilForLøkke = 0;
    let fjuskTo = true;
    let theHTML = "";
    this.board.forEach((e) => {
      theHTML += "<div>";
      e.forEach((f) => {
        if (jegGidderIkkeÅSkriveOmTilForLøkke == this.birdPosition && fjuskTo) {
          fjuskTo = false;
          return (theHTML += `<div>O</div>`);
        }
        theHTML += `<div>${f}</div>`;
      });
      theHTML += "</div>";
      jegGidderIkkeÅSkriveOmTilForLøkke++;
    });
    document.getElementById("game-root").innerHTML = theHTML;
  },
};

const startGame = setInterval(scuffed.newTick, scuffed.tickRate);
