"use strict";

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}

const primaryKey = "4b65188e592941e9b60cc61e855cfadb";
const secondaryKey = "6c917f331a394d2fb370ea159ef97a49";

const testAPI = () => {};

fetch("https://apis.vinmonopolet.no/stores/v0/details", {
  method: "GET",
  // Request headers
  headers: {
    "Cache-Control": "no-cache",
    "Ocp-Apim-Subscription-Key": primaryKey,
    origin: "https://api.vinmonopolet.no",
  },
})
  .then((response) => {
    console.log(response.status);
    console.log(response.text());
  })
  .catch((err) => console.error(err));
