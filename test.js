const kake = {
  test: () => {
    console.log("kake");
  },
};

kake.test();

//trykk på ett element, lag ett bilde på innsiden

const parent = document.getElementById("parent");
parent.addEventListener("click", addPicture());

function addPicture() {
  if (parent.innerHTML) {
    return (parent.innerHTML = "");
  }
  parent.innerHTML = `<img href="Ditt bile.png" alt="En tekst som beskriver bildet ditt">`;
}
