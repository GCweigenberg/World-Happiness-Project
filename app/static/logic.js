// Create a map object.
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

// Add a tile layer.
var map = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// test data set

var testData = { "data": [
  {
      "name": "Luxembourg",
      "location": [49.815273, 6.129583],
      "gdp_pc": 116014.6025
  },
  {
      "name": "Bermuda",
      "location": [32.321384, -64.75737],
      "gdp_pc": 107079.4798
  },
  {
      "name": "Switzerland",
      "location": [46.818188, 8.227512],
      "gdp_pc": 87097.03645
  }
]};

// create function to fetch and return a json file to dataset list

var layerGroups = [];

function circleLayer(jsonObject) {
  // array to store circles
  let circleMarkers = [];

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
    circleMarkers.push(L.circle(jsonObject[i].location, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: color,
      radius: Math.sqrt(jsonObject[i].gdp_pc) * 500
    }).bindPopup(`<h1>${jsonObject[i].name}</h1> <hr> <h3>GDP Per Capita (USD): ${jsonObject[i].gdp_pc}</h3>`));
  }

  layerGroups.push(L.layerGroup(circleMarkers));
}

function layerFetch(jsonFile)  {
  let dataFilePath = `static/${jsonFile}`;
  fetch(dataFilePath)
    .then((response) => response.json())
    .then(json => {
      console.log(json.data)
      circleLayer(json.data)
      });
}

// create variable for JSON data
layerFetch('data.json');
console.log(layerGroups);

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
  circles: layerGroups[0]
  layer2: layerGroups[1],
  layer3: layerGroups[2]
};

L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);