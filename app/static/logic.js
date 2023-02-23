// Create a map object, and set the default layers.
var myMap = L.map("map", {
  center: [30, 10],
  zoom: 2
});

// Add a tile layer.
var map = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Country data
import data from data.json

// // Loop through the countries array, and create one marker for each object.
// for (var i = 0; i < countries.length; i++) {

//   // Conditionals for country gdp_pc
//   var color = "";
//   if (countries[i].gdp_pc > 100000) {
//     color = "yellow";
//   }
//   else if (countries[i].gdp_pc > 75000) {
//     color = "blue";
//   }
//   else if (countries[i].gdp_pc > 50000) {
//     color = "green";
//   }
//   else {
//     color = "violet";
//   }

//   // Add circles to the map.
//   L.circle(countries[i].location, {
//     fillOpacity: 0.75,
//     color: "white",
//     fillColor: color,
//     // Adjust the radius.
//     radius: Math.sqrt(countries[i].gdp_pc) * 500
//   }).bindPopup(`<h1>${countries[i].name}</h1> <hr> <h3>GDP Per Capita (USD): ${countries[i].gdp_pc}</h3>`).addTo(myMap);
// }

// An array that will store the created cityMarkers
var countryMarkers = [];

for (var i = 0; i < countries.length; i++) {
  // loop through the cities array, create a new marker, and push it to the cityMarkers array
  countryMarkers.push(
    L.marker(countries[i].location).bindPopup("<h1>" + countries[i].name + "</h1>")
  );
}

// Add all the cityMarkers to a new layer group.
// Now, we can handle them as one group instead of referencing each one individually.
var countryLayer = L.layerGroup(countryMarkers);

// Only one base layer can be shown at a time.
var baseMaps = {
  Map: map
};

// Overlays that can be toggled on or off
var overlayMaps = {
  countries: countryLayer
};

// Pass our map layers into our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps).addTo(myMap);