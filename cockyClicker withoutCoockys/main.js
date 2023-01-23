const model = {
  points: 50,
  perClick: 1,
  upgradePrice: 10,
  humanTrafickPrice: 50,
  nextSlave: 1,
  slaves: [],
};

const clickCooky = () => {
  model.points += model.perClick;
  view();
};

const upgradeClick = () => {
  if (model.points >= model.upgradePrice) {
    model.points -= 10;
    model.perClick++;
    model.upgradePrice++;
    view();
  }
};

const humanTraficking = () => {
  if (model.points >= model.humanTrafickPrice) {
    model.points -= model.humanTrafickPrice;
    model.slaves.push(model.nextSlave);
    model.nextSlave++;

    view();
  }
};

const slaveWork = () => {
  for (let i = 0; i < model.slaves.length; i++) {
    model.points += model.slaves[i];
  }
  view();
};

const view = () => {
  theHTML = `
        <div>Poeng ${model.points}</div>
        <button onclick="clickCooky()" class="coocky">Klikk meg!</button><br>
        <button onclick="upgradeClick()">Kjøp oppgradert klick +1 <br> 
        pris: ${model.upgradePrice} poeng</button><br>
        <button onclick="humanTraficking()"> Kjøp slave <br>
        Pris: ${model.humanTrafickPrice}</buton>
    `;
  document.getElementById("root").innerHTML = theHTML;
};

view();

setInterval(slaveWork, 1000);
