// Create a map object.

var layers = {
  layerTest: new L.layerGroup(),
  json2015: new L.layerGroup(),
  json2016: new L.layerGroup(),
  json2017: new L.layerGroup(),
  json2018: new L.layerGroup(),
  json2019: new L.layerGroup()
};

var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3,
  layers: [
    layers.layerTest,
    layers.json2015,
    layers.json2016,
    layers.json2017,
    layers.json2018,
    layers.json2019
  ]
});

// Add a tile layer.
var map = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// create function to fetch and return a json file to dataset list

var overlays = {
  'testLayer': layers.layerTest
};

L.control.layers(null, overlays).addTo(myMap);

function circleLayer(jsonObject) {
  // array to store circles
  var circleMarkers;

  // Loop through the cities array, and create one marker for each city object.
  for (var i = 0; i < jsonObject.length; i++) {

    // Conditionals for country gdp_pc
    var color = "";
    if (jsonObject[i].gdp_pc > 100000) {
      color = "yellow";
    }
    else if (jsonObject[i].gdp_pc > 75000) {
      color = "blue";
    }
    else if (jsonObject[i].gdp_pc > 50000) {
      color = "green";
    }
    else {
      color = "violet";
    }

    // Add circles to the map.
    var newMarker = L.circle(jsonObject[i].location, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: color,
      radius: Math.sqrt(jsonObject[i].gdp_pc) * 500
    }).bindPopup(`<h1>${jsonObject[i].name}</h1> <hr> <h3>GDP Per Capita (USD): ${jsonObject[i].gdp_pc}</h3>`);
    newMarker.addTo(circleMarkers)
  }

  layers.layerTest = L.layerGroup(circleMarkers);
}

function layerFetch(jsonFile)  {
  let dataFilePath = `static/${jsonFile}`;
  fetch(dataFilePath)
    .then((response) => response.json())
    .then(json => {
      console.log(json.data);
      layerTest = circleLayer(json.data);
    });
}

// create variable for JSON data
layerFetch('data.json');

console.log(layers);

L.control.layers(map, overlays, {
  collapsed: false
}).addTo(myMap);