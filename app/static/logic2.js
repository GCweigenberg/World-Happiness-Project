// Add a tile layer.
var OpenStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Create a map object, and set the default layers.
var myMap = L.map("map", {
  center: [30, 10],
  zoom: 2
});

// Add Layer Group List
var countryLayerGroups = [];

// Country data
function createLayerGroup(jsonObject) {
  
  // Add Layer Group
  var countryCircles = [];

  for (var i = 0; i < jsonObject.length; i++) {
    // loop through the json object, create a new circle and push it to the countryCircles array
    
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
    
    var newCircle = L.circle(jsonObject[i].location, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: color,
      // Adjust the radius.
      radius: Math.sqrt(jsonObject[i].gdp_pc) * 500
    }).bindPopup(`<h1>${jsonObject[i].name}</h1> <hr> <h3>GDP Per Capita (USD): ${jsonObject[i].gdp_pc}</h3>`)

    // Add circles to the map
    countryCircles.push(newCircle);
  }

  // Add all the countryMarkers to a new layer group.
  var countryLayer = L.layerGroup(countryCircles);

  // Add the group to the countryLayerGroups array.
  countryLayerGroups.push(countryLayer);

};

fetch('data.json')
    .then((response) => response.json())
    .then((json) => createLayerGroup(json));

// Only one base layer can be shown at a time.
var baseMaps = {
  'OSM': OpenStreetMap
};

// Overlays that can be toggled on or off
var overlayMaps = {
  'testSet': countryLayerGroups[0]
};

// Pass our map layers into our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);