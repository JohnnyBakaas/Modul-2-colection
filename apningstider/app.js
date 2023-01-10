"use strict";

let userLatitude = undefined;
let userLongitude = undefined;

let distanse = 0.01;

let date = new Date();

console.log(date.getDay());

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}

fetch("midlertidig.json")
  .then((response) => response.json())
  .then((data) => sortLocation(data));

let closeStores = [];

const sortLocation = (dataSort) => {
  for (let i = 0; i < dataSort.length; i++) {
    let cords = dataSort[i].address.gpsCoord.split(";");

    if (
      Number(cords[0]) - userLatitude < distanse &&
      Number(cords[1]) - userLongitude < distanse &&
      Number(cords[0]) - userLatitude > distanse * -1 &&
      Number(cords[1]) - userLongitude > distanse * -1
    ) {
      console.log(dataSort[i].address.city);
      console.log(dataSort[i].openingHours.regularHours);
      closeStores.push(dataSort[i]);
    }
  }

  if (closeStores.length === 0) {
    distanse += 0.01;
    sortLocation(dataSort);
  }

  console.log(closeStores[0]);

  console.log(date.getDay());
  generateHTML(closeStores[0]);
};

const generateHTML = (selectedStore) => {
  console.log(
    selectedStore.openingHours.regularHours[date.getDay() - 1].openingTime
  );

  let theHTML = /*HTML*/ `
  <h1>Ikke Vinmonopolet.no</h1>
    <h2>Din nærmeste lovelige brennvin forhandler: ${
      selectedStore.storeName
    }</h2>
    <p>Dagens åpningstider ${
      selectedStore.openingHours.regularHours[date.getDay()].closed
        ? "Polet er stengt"
        : selectedStore.openingHours.regularHours[date.getDay() - 1]
            .openingTime +
          " - " +
          selectedStore.openingHours.regularHours[date.getDay() - 1].closingTime
    }</p>
    `;

  document.getElementById("app").innerHTML = theHTML;
};
