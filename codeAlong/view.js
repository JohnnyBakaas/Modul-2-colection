/*
const view = () => {
  let theHTML = "<section>";
  for (let i = 0; i < model.movies.length; i++) {
    theHTML += `
        <div> 
            <h2> ${model.movies[i].title} </h2>
        `;
    for (let j = 0; j < model.movies[i].categorys.length; j++) {
      theHTML += `
                <p> ${model.movies[i].categorys[j]} </p>
            `;
    }
    theHTML += `<button onclick="deleteMovie(${i})"> Slett </button>`;
    theHTML += "</div>";
  }
  theHTML += "</section>";

  document.getElementById("root").innerHTML = theHTML;
};

view();

*/

//tittel og pris

function view() {
  let theHTML = "";
  for (let i = 0; i < model.products.length; i++) {
    theHTML += `<div>${model.products[i].title}, pris: ${model.products[i].price} </div>`;
  }
  document.getElementById("root").innerHTML = theHTML;
}

view();
