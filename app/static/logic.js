// Create a map object.
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

// Add a tile layer.
var map = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// create function to fetch and return a json file

function jsonFetch(filepath)  {
  let dataFilePath = `static/${filepath}`;
  let data;
  fetch(dataFilePath)
    .then((response) => response.json())
    .then(json => {
      data = json.data;
    })
    .then(() => {
      console.log(data);
    })
    .then(() => {
      return data
    });
}

// create variable for JSON data
var testData = jsonFetch('data.json');
console.log(testData);

// array to store circles
var circleMarkers = [];

// Loop through the cities array, and create one marker for each city object.
for (var i = 0; i < testData.length; i++) {

  // Conditionals for country gdp_pc
  var color = "";
  if (testData[i].gdp_pc > 100000) {
    color = "yellow";
  }
  else if (testData[i].gdp_pc > 75000) {
    color = "blue";
  }
  else if (testData[i].gdp_pc > 50000) {
    color = "green";
  }
  else {
    color = "violet";
  }

  // Add circles to the map.
  circleMarkers.push(L.circle(testData[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust the radius.
    radius: Math.sqrt(testData[i].gdp_pc) * 500
  }).bindPopup(`<h1>${testData[i].name}</h1> <hr> <h3>GDP Per Capita (USD): ${testData[i].gdp_pc}</h3>`));
}

var circleLayer = L.layerGroup(circleMarkers);

// Only one base layer can be shown at a time.
var baseMaps = {
  Map: map
};

// Overlays that can be toggled on or off
var overlayMaps = {
  circles: circleLayer
};

L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);