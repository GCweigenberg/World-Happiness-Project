// Create a map object.
var myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 3
  });

// Add a tile layer.
var map = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// declare variables for this years dataset (copied from corresponding json file)
var data = [
    {
        "happiness_rank": 1,
        "country": "Finland",
        "happiness_score": 7.632,
        "economy_gdp_per_capita": 1.305,
        "family_info": 1.592,
        "health_life_expectancy": 0.874,
        "freedom": 0.681,
        "generosity": 0.393,
        "trust_government_corruption": 0.202,
        "lat": 61.92410999999999,
        "lon": 25.748151
    },
    {
        "happiness_rank": 2,
        "country": "Norway",
        "happiness_score": 7.594,
        "economy_gdp_per_capita": 1.456,
        "family_info": 1.582,
        "health_life_expectancy": 0.861,
        "freedom": 0.686,
        "generosity": 0.34,
        "trust_government_corruption": 0.286,
        "lat": 60.47202399999999,
        "lon": 8.468945999999999
    },
    {
        "happiness_rank": 3,
        "country": "Denmark",
        "happiness_score": 7.555,
        "economy_gdp_per_capita": 1.351,
        "family_info": 1.59,
        "health_life_expectancy": 0.868,
        "freedom": 0.683,
        "generosity": 0.408,
        "trust_government_corruption": 0.284,
        "lat": 56.26392,
        "lon": 9.501785
    },
    {
        "happiness_rank": 4,
        "country": "Iceland",
        "happiness_score": 7.495,
        "economy_gdp_per_capita": 1.343,
        "family_info": 1.644,
        "health_life_expectancy": 0.914,
        "freedom": 0.677,
        "generosity": 0.138,
        "trust_government_corruption": 0.353,
        "lat": 64.963051,
        "lon": -19.020835
    },
    {
        "happiness_rank": 5,
        "country": "Switzerland",
        "happiness_score": 7.487,
        "economy_gdp_per_capita": 1.42,
        "family_info": 1.549,
        "health_life_expectancy": 0.927,
        "freedom": 0.66,
        "generosity": 0.357,
        "trust_government_corruption": 0.256,
        "lat": 46.818188,
        "lon": 8.227511999999999
    },
    {
        "happiness_rank": 6,
        "country": "Netherlands",
        "happiness_score": 7.441,
        "economy_gdp_per_capita": 1.361,
        "family_info": 1.488,
        "health_life_expectancy": 0.878,
        "freedom": 0.638,
        "generosity": 0.295,
        "trust_government_corruption": 0.333,
        "lat": 52.132633,
        "lon": 5.291265999999999
    },
    {
        "happiness_rank": 7,
        "country": "Canada",
        "happiness_score": 7.328,
        "economy_gdp_per_capita": 1.33,
        "family_info": 1.532,
        "health_life_expectancy": 0.896,
        "freedom": 0.653,
        "generosity": 0.291,
        "trust_government_corruption": 0.321,
        "lat": 56.130366,
        "lon": -106.346771
    },
    {
        "happiness_rank": 8,
        "country": "New Zealand",
        "happiness_score": 7.324,
        "economy_gdp_per_capita": 1.268,
        "family_info": 1.601,
        "health_life_expectancy": 0.876,
        "freedom": 0.669,
        "generosity": 0.389,
        "trust_government_corruption": 0.365,
        "lat": -40.900557,
        "lon": 174.885971
    },
    {
        "happiness_rank": 9,
        "country": "Sweden",
        "happiness_score": 7.314,
        "economy_gdp_per_capita": 1.355,
        "family_info": 1.501,
        "health_life_expectancy": 0.913,
        "freedom": 0.659,
        "generosity": 0.383,
        "trust_government_corruption": 0.285,
        "lat": 60.12816100000001,
        "lon": 18.643501
    },
    {
        "happiness_rank": 10,
        "country": "Australia",
        "happiness_score": 7.272,
        "economy_gdp_per_capita": 1.34,
        "family_info": 1.573,
        "health_life_expectancy": 0.91,
        "freedom": 0.647,
        "generosity": 0.302,
        "trust_government_corruption": 0.361,
        "lat": -25.274398,
        "lon": 133.775136
    },
    {
        "happiness_rank": 11,
        "country": "United Kingdom",
        "happiness_score": 7.19,
        "economy_gdp_per_capita": 1.244,
        "family_info": 1.433,
        "health_life_expectancy": 0.888,
        "freedom": 0.464,
        "generosity": 0.082,
        "trust_government_corruption": 0.262,
        "lat": 55.378051,
        "lon": -3.435973
    },
    {
        "happiness_rank": 12,
        "country": "Austria",
        "happiness_score": 7.139,
        "economy_gdp_per_capita": 1.341,
        "family_info": 1.504,
        "health_life_expectancy": 0.891,
        "freedom": 0.617,
        "generosity": 0.224,
        "trust_government_corruption": 0.242,
        "lat": 47.516231,
        "lon": 14.550072
    },
    {
        "happiness_rank": 13,
        "country": "Costa Rica",
        "happiness_score": 7.072,
        "economy_gdp_per_capita": 1.01,
        "family_info": 1.459,
        "health_life_expectancy": 0.817,
        "freedom": 0.632,
        "generosity": 0.101,
        "trust_government_corruption": 0.143,
        "lat": 9.748917,
        "lon": -83.753428
    },
    {
        "happiness_rank": 14,
        "country": "Ireland",
        "happiness_score": 6.977,
        "economy_gdp_per_capita": 1.448,
        "family_info": 1.583,
        "health_life_expectancy": 0.876,
        "freedom": 0.614,
        "generosity": 0.306,
        "trust_government_corruption": 0.307,
        "lat": 53.1423672,
        "lon": -7.692053599999999
    },
    {
        "happiness_rank": 15,
        "country": "Germany",
        "happiness_score": 6.965,
        "economy_gdp_per_capita": 1.34,
        "family_info": 1.474,
        "health_life_expectancy": 0.861,
        "freedom": 0.586,
        "generosity": 0.28,
        "trust_government_corruption": 0.273,
        "lat": 51.165691,
        "lon": 10.451526
    },
    {
        "happiness_rank": 16,
        "country": "Belgium",
        "happiness_score": 6.927,
        "economy_gdp_per_capita": 1.324,
        "family_info": 1.483,
        "health_life_expectancy": 0.894,
        "freedom": 0.583,
        "generosity": 0.24,
        "trust_government_corruption": 0.188,
        "lat": 50.503887,
        "lon": 4.469936
    },
    {
        "happiness_rank": 17,
        "country": "Luxembourg",
        "happiness_score": 6.91,
        "economy_gdp_per_capita": 1.576,
        "family_info": 1.52,
        "health_life_expectancy": 0.896,
        "freedom": 0.632,
        "generosity": 0.321,
        "trust_government_corruption": 0.196,
        "lat": 49.815273,
        "lon": 6.129582999999999
    },
    {
        "happiness_rank": 18,
        "country": "United States",
        "happiness_score": 6.886,
        "economy_gdp_per_capita": 1.398,
        "family_info": 1.471,
        "health_life_expectancy": 0.819,
        "freedom": 0.547,
        "generosity": 0.133,
        "trust_government_corruption": 0.291,
        "lat": 37.09024,
        "lon": -95.712891
    },
    {
        "happiness_rank": 19,
        "country": "Israel",
        "happiness_score": 6.814,
        "economy_gdp_per_capita": 1.301,
        "family_info": 1.559,
        "health_life_expectancy": 0.883,
        "freedom": 0.533,
        "generosity": 0.272,
        "trust_government_corruption": 0.354,
        "lat": 31.046051,
        "lon": 34.851612
    },
    {
        "happiness_rank": 20,
        "country": "United Arab Emirates",
        "happiness_score": 6.774,
        "economy_gdp_per_capita": 2.096,
        "family_info": 0.776,
        "health_life_expectancy": 0.67,
        "freedom": 0.284,
        "generosity": "",
        "trust_government_corruption": 0.186,
        "lat": 23.424076,
        "lon": 53.847818
    },
    {
        "happiness_rank": 22,
        "country": "Malta",
        "happiness_score": 6.627,
        "economy_gdp_per_capita": 1.27,
        "family_info": 1.525,
        "health_life_expectancy": 0.884,
        "freedom": 0.645,
        "generosity": 0.142,
        "trust_government_corruption": 0.376,
        "lat": 35.937496,
        "lon": 14.375416
    },
    {
        "happiness_rank": 23,
        "country": "France",
        "happiness_score": 6.489,
        "economy_gdp_per_capita": 1.293,
        "family_info": 1.466,
        "health_life_expectancy": 0.908,
        "freedom": 0.52,
        "generosity": 0.176,
        "trust_government_corruption": 0.098,
        "lat": 46.227638,
        "lon": 2.213749
    },
    {
        "happiness_rank": 24,
        "country": "Mexico",
        "happiness_score": 6.488,
        "economy_gdp_per_capita": 1.038,
        "family_info": 1.252,
        "health_life_expectancy": 0.761,
        "freedom": 0.479,
        "generosity": 0.095,
        "trust_government_corruption": 0.069,
        "lat": 23.634501,
        "lon": -102.552784
    },
    {
        "happiness_rank": 25,
        "country": "Chile",
        "happiness_score": 6.476,
        "economy_gdp_per_capita": 1.131,
        "family_info": 1.331,
        "health_life_expectancy": 0.808,
        "freedom": 0.431,
        "generosity": 0.061,
        "trust_government_corruption": 0.197,
        "lat": -35.675147,
        "lon": -71.542969
    },
    {
        "happiness_rank": 26,
        "country": "Taiwan",
        "happiness_score": 6.441,
        "economy_gdp_per_capita": 1.365,
        "family_info": 1.436,
        "health_life_expectancy": 0.857,
        "freedom": 0.418,
        "generosity": 0.078,
        "trust_government_corruption": 0.151,
        "lat": 23.69781,
        "lon": 120.960515
    },
    {
        "happiness_rank": 27,
        "country": "Panama",
        "happiness_score": 6.43,
        "economy_gdp_per_capita": 1.112,
        "family_info": 1.438,
        "health_life_expectancy": 0.759,
        "freedom": 0.597,
        "generosity": 0.063,
        "trust_government_corruption": 0.125,
        "lat": 8.537981,
        "lon": -80.782127
    },
    {
        "happiness_rank": 28,
        "country": "Brazil",
        "happiness_score": 6.419,
        "economy_gdp_per_capita": 0.986,
        "family_info": 1.474,
        "health_life_expectancy": 0.675,
        "freedom": 0.493,
        "generosity": 0.088,
        "trust_government_corruption": 0.11,
        "lat": -14.235004,
        "lon": -51.92528
    },
    {
        "happiness_rank": 29,
        "country": "Argentina",
        "happiness_score": 6.388,
        "economy_gdp_per_capita": 1.073,
        "family_info": 1.468,
        "health_life_expectancy": 0.744,
        "freedom": 0.57,
        "generosity": 0.054,
        "trust_government_corruption": 0.062,
        "lat": -38.416097,
        "lon": -63.61667199999999
    },
    {
        "happiness_rank": 30,
        "country": "Guatemala",
        "happiness_score": 6.382,
        "economy_gdp_per_capita": 0.781,
        "family_info": 1.268,
        "health_life_expectancy": 0.608,
        "freedom": 0.604,
        "generosity": 0.071,
        "trust_government_corruption": 0.179,
        "lat": 15.783471,
        "lon": -90.230759
    },
    {
        "happiness_rank": 31,
        "country": "Uruguay",
        "happiness_score": 6.379,
        "economy_gdp_per_capita": 1.093,
        "family_info": 1.459,
        "health_life_expectancy": 0.771,
        "freedom": 0.625,
        "generosity": 0.155,
        "trust_government_corruption": 0.13,
        "lat": -32.522779,
        "lon": -55.765835
    },
    {
        "happiness_rank": 32,
        "country": "Qatar",
        "happiness_score": 6.374,
        "economy_gdp_per_capita": 1.649,
        "family_info": 1.303,
        "health_life_expectancy": 0.748,
        "freedom": 0.654,
        "generosity": 0.171,
        "trust_government_corruption": 0.256,
        "lat": 25.354826,
        "lon": 51.183884
    },
    {
        "happiness_rank": 33,
        "country": "Saudi Arabia",
        "happiness_score": 6.371,
        "economy_gdp_per_capita": 1.379,
        "family_info": 1.331,
        "health_life_expectancy": 0.633,
        "freedom": 0.509,
        "generosity": 0.127,
        "trust_government_corruption": 0.098,
        "lat": 23.885942,
        "lon": 45.079162
    },
    {
        "happiness_rank": 34,
        "country": "Singapore",
        "happiness_score": 6.343,
        "economy_gdp_per_capita": 1.529,
        "family_info": 1.451,
        "health_life_expectancy": 1.008,
        "freedom": 0.631,
        "generosity": 0.457,
        "trust_government_corruption": 0.261,
        "lat": 1.352083,
        "lon": 103.819836
    },
    {
        "happiness_rank": 35,
        "country": "Malaysia",
        "happiness_score": 6.322,
        "economy_gdp_per_capita": 1.161,
        "family_info": 1.258,
        "health_life_expectancy": 0.669,
        "freedom": 0.356,
        "generosity": 0.059,
        "trust_government_corruption": 0.311,
        "lat": 4.210484,
        "lon": 101.975766
    },
    {
        "happiness_rank": 36,
        "country": "Spain",
        "happiness_score": 6.31,
        "economy_gdp_per_capita": 1.251,
        "family_info": 1.538,
        "health_life_expectancy": 0.965,
        "freedom": 0.449,
        "generosity": 0.074,
        "trust_government_corruption": 0.142,
        "lat": 40.46366700000001,
        "lon": -3.74922
    },
    {
        "happiness_rank": 37,
        "country": "Colombia",
        "happiness_score": 6.26,
        "economy_gdp_per_capita": 0.96,
        "family_info": 1.439,
        "health_life_expectancy": 0.635,
        "freedom": 0.531,
        "generosity": 0.039,
        "trust_government_corruption": 0.099,
        "lat": 4.570868,
        "lon": -74.297333
    },
    {
        "happiness_rank": 39,
        "country": "Slovakia",
        "happiness_score": 6.173,
        "economy_gdp_per_capita": 1.21,
        "family_info": 1.537,
        "health_life_expectancy": 0.776,
        "freedom": 0.354,
        "generosity": 0.014,
        "trust_government_corruption": 0.118,
        "lat": 48.669026,
        "lon": 19.699024
    },
    {
        "happiness_rank": 40,
        "country": "El Salvador",
        "happiness_score": 6.167,
        "economy_gdp_per_capita": 0.806,
        "family_info": 1.231,
        "health_life_expectancy": 0.639,
        "freedom": 0.461,
        "generosity": 0.082,
        "trust_government_corruption": 0.065,
        "lat": 13.794185,
        "lon": -88.89653
    },
    {
        "happiness_rank": 41,
        "country": "Nicaragua",
        "happiness_score": 6.141,
        "economy_gdp_per_capita": 0.668,
        "family_info": 1.319,
        "health_life_expectancy": 0.7,
        "freedom": 0.527,
        "generosity": 0.128,
        "trust_government_corruption": 0.208,
        "lat": 12.865416,
        "lon": -85.207229
    },
    {
        "happiness_rank": 42,
        "country": "Poland",
        "happiness_score": 6.123,
        "economy_gdp_per_capita": 1.176,
        "family_info": 1.448,
        "health_life_expectancy": 0.781,
        "freedom": 0.546,
        "generosity": 0.064,
        "trust_government_corruption": 0.108,
        "lat": 51.919438,
        "lon": 19.145136
    },
    {
        "happiness_rank": 43,
        "country": "Bahrain",
        "happiness_score": 6.105,
        "economy_gdp_per_capita": 1.338,
        "family_info": 1.366,
        "health_life_expectancy": 0.698,
        "freedom": 0.594,
        "generosity": 0.123,
        "trust_government_corruption": 0.243,
        "lat": 26.0667,
        "lon": 50.5577
    },
    {
        "happiness_rank": 44,
        "country": "Uzbekistan",
        "happiness_score": 6.096,
        "economy_gdp_per_capita": 0.719,
        "family_info": 1.584,
        "health_life_expectancy": 0.605,
        "freedom": 0.724,
        "generosity": 0.259,
        "trust_government_corruption": 0.328,
        "lat": 41.377491,
        "lon": 64.585262
    },
    {
        "happiness_rank": 45,
        "country": "Kuwait",
        "happiness_score": 6.083,
        "economy_gdp_per_capita": 1.474,
        "family_info": 1.301,
        "health_life_expectancy": 0.675,
        "freedom": 0.554,
        "generosity": 0.106,
        "trust_government_corruption": 0.167,
        "lat": 29.31166,
        "lon": 47.481766
    },
    {
        "happiness_rank": 46,
        "country": "Thailand",
        "happiness_score": 6.072,
        "economy_gdp_per_capita": 1.016,
        "family_info": 1.417,
        "health_life_expectancy": 0.707,
        "freedom": 0.637,
        "generosity": 0.029,
        "trust_government_corruption": 0.364,
        "lat": 15.870032,
        "lon": 100.992541
    },
    {
        "happiness_rank": 47,
        "country": "Italy",
        "happiness_score": 6,
        "economy_gdp_per_capita": 1.264,
        "family_info": 1.501,
        "health_life_expectancy": 0.946,
        "freedom": 0.281,
        "generosity": 0.028,
        "trust_government_corruption": 0.137,
        "lat": 41.87194,
        "lon": 12.56738
    },
    {
        "happiness_rank": 48,
        "country": "Ecuador",
        "happiness_score": 5.973,
        "economy_gdp_per_capita": 0.889,
        "family_info": 1.33,
        "health_life_expectancy": 0.736,
        "freedom": 0.556,
        "generosity": 0.12,
        "trust_government_corruption": 0.114,
        "lat": -1.831239,
        "lon": -78.18340599999999
    },
    {
        "happiness_rank": 49,
        "country": "Belize",
        "happiness_score": 5.956,
        "economy_gdp_per_capita": 0.807,
        "family_info": 1.101,
        "health_life_expectancy": 0.474,
        "freedom": 0.593,
        "generosity": 0.089,
        "trust_government_corruption": 0.183,
        "lat": 17.189877,
        "lon": -88.49765
    },
    {
        "happiness_rank": 50,
        "country": "Lithuania",
        "happiness_score": 5.952,
        "economy_gdp_per_capita": 1.197,
        "family_info": 1.527,
        "health_life_expectancy": 0.716,
        "freedom": 0.35,
        "generosity": 0.006,
        "trust_government_corruption": 0.026,
        "lat": 55.169438,
        "lon": 23.881275
    },
    {
        "happiness_rank": 51,
        "country": "Slovenia",
        "happiness_score": 5.948,
        "economy_gdp_per_capita": 1.219,
        "family_info": 1.506,
        "health_life_expectancy": 0.856,
        "freedom": 0.633,
        "generosity": 0.051,
        "trust_government_corruption": 0.16,
        "lat": 46.151241,
        "lon": 14.995463
    },
    {
        "happiness_rank": 52,
        "country": "Romania",
        "happiness_score": 5.945,
        "economy_gdp_per_capita": 1.116,
        "family_info": 1.219,
        "health_life_expectancy": 0.726,
        "freedom": 0.528,
        "generosity": 0.001,
        "trust_government_corruption": 0.088,
        "lat": 45.943161,
        "lon": 24.96676
    },
    {
        "happiness_rank": 53,
        "country": "Latvia",
        "happiness_score": 5.933,
        "economy_gdp_per_capita": 1.148,
        "family_info": 1.454,
        "health_life_expectancy": 0.671,
        "freedom": 0.363,
        "generosity": 0.066,
        "trust_government_corruption": 0.092,
        "lat": 56.879635,
        "lon": 24.603189
    },
    {
        "happiness_rank": 54,
        "country": "Japan",
        "happiness_score": 5.915,
        "economy_gdp_per_capita": 1.294,
        "family_info": 1.462,
        "health_life_expectancy": 0.988,
        "freedom": 0.553,
        "generosity": 0.15,
        "trust_government_corruption": 0.079,
        "lat": 36.204824,
        "lon": 138.252924
    },
    {
        "happiness_rank": 55,
        "country": "Mauritius",
        "happiness_score": 5.891,
        "economy_gdp_per_capita": 1.09,
        "family_info": 1.387,
        "health_life_expectancy": 0.684,
        "freedom": 0.584,
        "generosity": 0.05,
        "trust_government_corruption": 0.245,
        "lat": -20.348404,
        "lon": 57.55215200000001
    },
    {
        "happiness_rank": 56,
        "country": "Jamaica",
        "happiness_score": 5.89,
        "economy_gdp_per_capita": 0.819,
        "family_info": 1.493,
        "health_life_expectancy": 0.693,
        "freedom": 0.575,
        "generosity": 0.031,
        "trust_government_corruption": 0.096,
        "lat": 18.109581,
        "lon": -77.297508
    },
    {
        "happiness_rank": 57,
        "country": "South Korea",
        "happiness_score": 5.875,
        "economy_gdp_per_capita": 1.266,
        "family_info": 1.204,
        "health_life_expectancy": 0.955,
        "freedom": 0.244,
        "generosity": 0.051,
        "trust_government_corruption": 0.175,
        "lat": 35.907757,
        "lon": 127.766922
    },
    {
        "happiness_rank": 58,
        "country": "Northern Cyprus",
        "happiness_score": 5.835,
        "economy_gdp_per_capita": 1.229,
        "family_info": 1.211,
        "health_life_expectancy": 0.909,
        "freedom": 0.495,
        "generosity": 0.154,
        "trust_government_corruption": 0.179,
        "lat": 35.2480359,
        "lon": 33.6577243
    },
    {
        "happiness_rank": 59,
        "country": "Russia",
        "happiness_score": 5.81,
        "economy_gdp_per_capita": 1.151,
        "family_info": 1.479,
        "health_life_expectancy": 0.599,
        "freedom": 0.399,
        "generosity": 0.025,
        "trust_government_corruption": 0.065,
        "lat": 61.52401,
        "lon": 105.318756
    },
    {
        "happiness_rank": 60,
        "country": "Kazakhstan",
        "happiness_score": 5.79,
        "economy_gdp_per_capita": 1.143,
        "family_info": 1.516,
        "health_life_expectancy": 0.631,
        "freedom": 0.454,
        "generosity": 0.121,
        "trust_government_corruption": 0.148,
        "lat": 48.019573,
        "lon": 66.923684
    },
    {
        "happiness_rank": 61,
        "country": "Cyprus",
        "happiness_score": 5.762,
        "economy_gdp_per_capita": 1.229,
        "family_info": 1.191,
        "health_life_expectancy": 0.909,
        "freedom": 0.423,
        "generosity": 0.035,
        "trust_government_corruption": 0.202,
        "lat": 35.126413,
        "lon": 33.429859
    },
    {
        "happiness_rank": 62,
        "country": "Bolivia",
        "happiness_score": 5.752,
        "economy_gdp_per_capita": 0.751,
        "family_info": 1.223,
        "health_life_expectancy": 0.508,
        "freedom": 0.606,
        "generosity": 0.054,
        "trust_government_corruption": 0.141,
        "lat": -16.290154,
        "lon": -63.58865299999999
    },
    {
        "happiness_rank": 63,
        "country": "Estonia",
        "happiness_score": 5.739,
        "economy_gdp_per_capita": 1.2,
        "family_info": 1.532,
        "health_life_expectancy": 0.737,
        "freedom": 0.553,
        "generosity": 0.174,
        "trust_government_corruption": 0.086,
        "lat": 58.595272,
        "lon": 25.013607
    },
    {
        "happiness_rank": 64,
        "country": "Paraguay",
        "happiness_score": 5.681,
        "economy_gdp_per_capita": 0.835,
        "family_info": 1.522,
        "health_life_expectancy": 0.615,
        "freedom": 0.541,
        "generosity": 0.074,
        "trust_government_corruption": 0.162,
        "lat": -23.442503,
        "lon": -58.443832
    },
    {
        "happiness_rank": 65,
        "country": "Peru",
        "happiness_score": 5.663,
        "economy_gdp_per_capita": 0.934,
        "family_info": 1.249,
        "health_life_expectancy": 0.674,
        "freedom": 0.53,
        "generosity": 0.034,
        "trust_government_corruption": 0.092,
        "lat": -9.189967,
        "lon": -75.015152
    },
    {
        "happiness_rank": 66,
        "country": "Kosovo",
        "happiness_score": 5.662,
        "economy_gdp_per_capita": 0.855,
        "family_info": 1.23,
        "health_life_expectancy": 0.578,
        "freedom": 0.448,
        "generosity": 0.023,
        "trust_government_corruption": 0.274,
        "lat": 42.6026359,
        "lon": 20.902977
    },
    {
        "happiness_rank": 67,
        "country": "Moldova",
        "happiness_score": 5.64,
        "economy_gdp_per_capita": 0.657,
        "family_info": 1.301,
        "health_life_expectancy": 0.62,
        "freedom": 0.232,
        "generosity": 0,
        "trust_government_corruption": 0.171,
        "lat": 47.411631,
        "lon": 28.369885
    },
    {
        "happiness_rank": 68,
        "country": "Turkmenistan",
        "happiness_score": 5.636,
        "economy_gdp_per_capita": 1.016,
        "family_info": 1.533,
        "health_life_expectancy": 0.517,
        "freedom": 0.417,
        "generosity": 0.037,
        "trust_government_corruption": 0.199,
        "lat": 38.969719,
        "lon": 59.556278
    },
    {
        "happiness_rank": 69,
        "country": "Hungary",
        "happiness_score": 5.62,
        "economy_gdp_per_capita": 1.171,
        "family_info": 1.401,
        "health_life_expectancy": 0.732,
        "freedom": 0.259,
        "generosity": 0.022,
        "trust_government_corruption": 0.061,
        "lat": 47.162494,
        "lon": 19.503304
    },
    {
        "happiness_rank": 70,
        "country": "Libya",
        "happiness_score": 5.566,
        "economy_gdp_per_capita": 0.985,
        "family_info": 1.35,
        "health_life_expectancy": 0.553,
        "freedom": 0.496,
        "generosity": 0.148,
        "trust_government_corruption": 0.116,
        "lat": 26.3351,
        "lon": 17.228331
    },
    {
        "happiness_rank": 71,
        "country": "Philippines",
        "happiness_score": 5.524,
        "economy_gdp_per_capita": 0.775,
        "family_info": 1.312,
        "health_life_expectancy": 0.513,
        "freedom": 0.643,
        "generosity": 0.105,
        "trust_government_corruption": 0.12,
        "lat": 12.879721,
        "lon": 121.774017
    },
    {
        "happiness_rank": 72,
        "country": "Honduras",
        "happiness_score": 5.504,
        "economy_gdp_per_capita": 0.62,
        "family_info": 1.205,
        "health_life_expectancy": 0.622,
        "freedom": 0.459,
        "generosity": 0.074,
        "trust_government_corruption": 0.197,
        "lat": 15.199999,
        "lon": -86.241905
    },
    {
        "happiness_rank": 73,
        "country": "Belarus",
        "happiness_score": 5.483,
        "economy_gdp_per_capita": 1.039,
        "family_info": 1.498,
        "health_life_expectancy": 0.7,
        "freedom": 0.307,
        "generosity": 0.154,
        "trust_government_corruption": 0.101,
        "lat": 53.709807,
        "lon": 27.953389
    },
    {
        "happiness_rank": 75,
        "country": "Pakistan",
        "happiness_score": 5.472,
        "economy_gdp_per_capita": 0.652,
        "family_info": 0.81,
        "health_life_expectancy": 0.424,
        "freedom": 0.334,
        "generosity": 0.113,
        "trust_government_corruption": 0.216,
        "lat": 30.375321,
        "lon": 69.34511599999999
    },
    {
        "happiness_rank": 76,
        "country": "Hong Kong",
        "happiness_score": 5.43,
        "economy_gdp_per_capita": 1.405,
        "family_info": 1.29,
        "health_life_expectancy": 1.03,
        "freedom": 0.524,
        "generosity": 0.291,
        "trust_government_corruption": 0.246,
        "lat": 22.3193039,
        "lon": 114.1693611
    },
    {
        "happiness_rank": 77,
        "country": "Portugal",
        "happiness_score": 5.41,
        "economy_gdp_per_capita": 1.188,
        "family_info": 1.429,
        "health_life_expectancy": 0.884,
        "freedom": 0.562,
        "generosity": 0.017,
        "trust_government_corruption": 0.055,
        "lat": 39.39987199999999,
        "lon": -8.224454
    },
    {
        "happiness_rank": 78,
        "country": "Serbia",
        "happiness_score": 5.398,
        "economy_gdp_per_capita": 0.975,
        "family_info": 1.369,
        "health_life_expectancy": 0.685,
        "freedom": 0.288,
        "generosity": 0.043,
        "trust_government_corruption": 0.134,
        "lat": 44.016521,
        "lon": 21.005859
    },
    {
        "happiness_rank": 79,
        "country": "Greece",
        "happiness_score": 5.358,
        "economy_gdp_per_capita": 1.154,
        "family_info": 1.202,
        "health_life_expectancy": 0.879,
        "freedom": 0.131,
        "generosity": 0.044,
        "trust_government_corruption": 0,
        "lat": 39.074208,
        "lon": 21.824312
    },
    {
        "happiness_rank": 80,
        "country": "Lebanon",
        "happiness_score": 5.358,
        "economy_gdp_per_capita": 0.965,
        "family_info": 1.179,
        "health_life_expectancy": 0.785,
        "freedom": 0.503,
        "generosity": 0.136,
        "trust_government_corruption": 0.214,
        "lat": 33.854721,
        "lon": 35.862285
    },
    {
        "happiness_rank": 81,
        "country": "Montenegro",
        "happiness_score": 5.347,
        "economy_gdp_per_capita": 1.017,
        "family_info": 1.279,
        "health_life_expectancy": 0.729,
        "freedom": 0.259,
        "generosity": 0.081,
        "trust_government_corruption": 0.111,
        "lat": 42.708678,
        "lon": 19.37439
    },
    {
        "happiness_rank": 82,
        "country": "Croatia",
        "happiness_score": 5.321,
        "economy_gdp_per_capita": 1.115,
        "family_info": 1.161,
        "health_life_expectancy": 0.737,
        "freedom": 0.38,
        "generosity": 0.039,
        "trust_government_corruption": 0.12,
        "lat": 45.1,
        "lon": 15.2
    },
    {
        "happiness_rank": 83,
        "country": "Dominican Republic",
        "happiness_score": 5.302,
        "economy_gdp_per_capita": 0.982,
        "family_info": 1.441,
        "health_life_expectancy": 0.614,
        "freedom": 0.578,
        "generosity": 0.106,
        "trust_government_corruption": 0.12,
        "lat": 18.735693,
        "lon": -70.162651
    },
    {
        "happiness_rank": 84,
        "country": "Algeria",
        "happiness_score": 5.295,
        "economy_gdp_per_capita": 0.979,
        "family_info": 1.154,
        "health_life_expectancy": 0.687,
        "freedom": 0.077,
        "generosity": 0.135,
        "trust_government_corruption": 0.055,
        "lat": 28.033886,
        "lon": 1.659626
    },
    {
        "happiness_rank": 85,
        "country": "Morocco",
        "happiness_score": 5.254,
        "economy_gdp_per_capita": 0.779,
        "family_info": 0.797,
        "health_life_expectancy": 0.669,
        "freedom": 0.46,
        "generosity": 0.074,
        "trust_government_corruption": 0.026,
        "lat": 31.791702,
        "lon": -7.092619999999999
    },
    {
        "happiness_rank": 86,
        "country": "China",
        "happiness_score": 5.246,
        "economy_gdp_per_capita": 0.989,
        "family_info": 1.142,
        "health_life_expectancy": 0.799,
        "freedom": 0.597,
        "generosity": 0.103,
        "trust_government_corruption": 0.029,
        "lat": 35.86166,
        "lon": 104.195397
    },
    {
        "happiness_rank": 87,
        "country": "Azerbaijan",
        "happiness_score": 5.201,
        "economy_gdp_per_capita": 1.024,
        "family_info": 1.161,
        "health_life_expectancy": 0.603,
        "freedom": 0.43,
        "generosity": 0.176,
        "trust_government_corruption": 0.031,
        "lat": 40.143105,
        "lon": 47.576927
    },
    {
        "happiness_rank": 88,
        "country": "Tajikistan",
        "happiness_score": 5.199,
        "economy_gdp_per_capita": 0.474,
        "family_info": 1.166,
        "health_life_expectancy": 0.598,
        "freedom": 0.292,
        "generosity": 0.034,
        "trust_government_corruption": 0.187,
        "lat": 38.861034,
        "lon": 71.276093
    },
    {
        "happiness_rank": 91,
        "country": "Nigeria",
        "happiness_score": 5.155,
        "economy_gdp_per_capita": 0.689,
        "family_info": 1.172,
        "health_life_expectancy": 0.048,
        "freedom": 0.462,
        "generosity": 0.032,
        "trust_government_corruption": 0.201,
        "lat": 9.081999,
        "lon": 8.675277
    },
    {
        "happiness_rank": 92,
        "country": "Kyrgyzstan",
        "happiness_score": 5.131,
        "economy_gdp_per_capita": 0.53,
        "family_info": 1.416,
        "health_life_expectancy": 0.594,
        "freedom": 0.54,
        "generosity": 0.035,
        "trust_government_corruption": 0.281,
        "lat": 41.20438,
        "lon": 74.766098
    },
    {
        "happiness_rank": 93,
        "country": "Bosnia and Herzegovina",
        "happiness_score": 5.129,
        "economy_gdp_per_capita": 0.915,
        "family_info": 1.078,
        "health_life_expectancy": 0.758,
        "freedom": 0.28,
        "generosity": 0,
        "trust_government_corruption": 0.216,
        "lat": 43.915886,
        "lon": 17.679076
    },
    {
        "happiness_rank": 94,
        "country": "Mongolia",
        "happiness_score": 5.125,
        "economy_gdp_per_capita": 0.914,
        "family_info": 1.517,
        "health_life_expectancy": 0.575,
        "freedom": 0.395,
        "generosity": 0.032,
        "trust_government_corruption": 0.253,
        "lat": 46.862496,
        "lon": 103.846656
    },
    {
        "happiness_rank": 95,
        "country": "Vietnam",
        "happiness_score": 5.103,
        "economy_gdp_per_capita": 0.715,
        "family_info": 1.365,
        "health_life_expectancy": 0.702,
        "freedom": 0.618,
        "generosity": 0.079,
        "trust_government_corruption": 0.177,
        "lat": 14.058324,
        "lon": 108.277199
    },
    {
        "happiness_rank": 96,
        "country": "Indonesia",
        "happiness_score": 5.093,
        "economy_gdp_per_capita": 0.899,
        "family_info": 1.215,
        "health_life_expectancy": 0.522,
        "freedom": 0.538,
        "generosity": 0.018,
        "trust_government_corruption": 0.484,
        "lat": -0.789275,
        "lon": 113.921327
    },
    {
        "happiness_rank": 97,
        "country": "Bhutan",
        "happiness_score": 5.082,
        "economy_gdp_per_capita": 0.796,
        "family_info": 1.335,
        "health_life_expectancy": 0.527,
        "freedom": 0.541,
        "generosity": 0.171,
        "trust_government_corruption": 0.364,
        "lat": 27.514162,
        "lon": 90.433601
    },
    {
        "happiness_rank": 98,
        "country": "Somalia",
        "happiness_score": 4.982,
        "economy_gdp_per_capita": 0,
        "family_info": 0.712,
        "health_life_expectancy": 0.115,
        "freedom": 0.674,
        "generosity": 0.282,
        "trust_government_corruption": 0.238,
        "lat": 5.152149,
        "lon": 46.199616
    },
    {
        "happiness_rank": 99,
        "country": "Cameroon",
        "happiness_score": 4.975,
        "economy_gdp_per_capita": 0.535,
        "family_info": 0.891,
        "health_life_expectancy": 0.182,
        "freedom": 0.454,
        "generosity": 0.043,
        "trust_government_corruption": 0.183,
        "lat": 7.369721999999999,
        "lon": 12.354722
    },
    {
        "happiness_rank": 100,
        "country": "Bulgaria",
        "happiness_score": 4.933,
        "economy_gdp_per_capita": 1.054,
        "family_info": 1.515,
        "health_life_expectancy": 0.712,
        "freedom": 0.359,
        "generosity": 0.009,
        "trust_government_corruption": 0.064,
        "lat": 42.733883,
        "lon": 25.48583
    },
    {
        "happiness_rank": 101,
        "country": "Nepal",
        "happiness_score": 4.88,
        "economy_gdp_per_capita": 0.425,
        "family_info": 1.228,
        "health_life_expectancy": 0.539,
        "freedom": 0.526,
        "generosity": 0.078,
        "trust_government_corruption": 0.302,
        "lat": 28.394857,
        "lon": 84.12400799999999
    },
    {
        "happiness_rank": 102,
        "country": "Venezuela",
        "happiness_score": 4.806,
        "economy_gdp_per_capita": 0.996,
        "family_info": 1.469,
        "health_life_expectancy": 0.657,
        "freedom": 0.133,
        "generosity": 0.052,
        "trust_government_corruption": 0.056,
        "lat": 6.42375,
        "lon": -66.58973
    },
    {
        "happiness_rank": 103,
        "country": "Gabon",
        "happiness_score": 4.758,
        "economy_gdp_per_capita": 1.036,
        "family_info": 1.164,
        "health_life_expectancy": 0.404,
        "freedom": 0.356,
        "generosity": 0.052,
        "trust_government_corruption": 0.032,
        "lat": -0.803689,
        "lon": 11.609444
    },
    {
        "happiness_rank": 105,
        "country": "South Africa",
        "happiness_score": 4.724,
        "economy_gdp_per_capita": 0.94,
        "family_info": 1.41,
        "health_life_expectancy": 0.33,
        "freedom": 0.516,
        "generosity": 0.056,
        "trust_government_corruption": 0.103,
        "lat": -30.559482,
        "lon": 22.937506
    },
    {
        "happiness_rank": 106,
        "country": "Iran",
        "happiness_score": 4.707,
        "economy_gdp_per_capita": 1.059,
        "family_info": 0.771,
        "health_life_expectancy": 0.691,
        "freedom": 0.459,
        "generosity": 0.129,
        "trust_government_corruption": 0.282,
        "lat": 32.427908,
        "lon": 53.688046
    },
    {
        "happiness_rank": 108,
        "country": "Ghana",
        "happiness_score": 4.657,
        "economy_gdp_per_capita": 0.592,
        "family_info": 0.896,
        "health_life_expectancy": 0.337,
        "freedom": 0.499,
        "generosity": 0.029,
        "trust_government_corruption": 0.212,
        "lat": 7.946527,
        "lon": -1.023194
    },
    {
        "happiness_rank": 109,
        "country": "Senegal",
        "happiness_score": 4.631,
        "economy_gdp_per_capita": 0.429,
        "family_info": 1.117,
        "health_life_expectancy": 0.433,
        "freedom": 0.406,
        "generosity": 0.082,
        "trust_government_corruption": 0.138,
        "lat": 14.497401,
        "lon": -14.452362
    },
    {
        "happiness_rank": 110,
        "country": "Laos",
        "happiness_score": 4.623,
        "economy_gdp_per_capita": 0.72,
        "family_info": 1.034,
        "health_life_expectancy": 0.441,
        "freedom": 0.626,
        "generosity": 0.174,
        "trust_government_corruption": 0.23,
        "lat": 19.85627,
        "lon": 102.495496
    },
    {
        "happiness_rank": 111,
        "country": "Tunisia",
        "happiness_score": 4.592,
        "economy_gdp_per_capita": 0.9,
        "family_info": 0.906,
        "health_life_expectancy": 0.69,
        "freedom": 0.271,
        "generosity": 0.063,
        "trust_government_corruption": 0.04,
        "lat": 33.886917,
        "lon": 9.537499
    },
    {
        "happiness_rank": 112,
        "country": "Albania",
        "happiness_score": 4.586,
        "economy_gdp_per_capita": 0.916,
        "family_info": 0.817,
        "health_life_expectancy": 0.79,
        "freedom": 0.419,
        "generosity": 0.032,
        "trust_government_corruption": 0.149,
        "lat": 41.153332,
        "lon": 20.168331
    },
    {
        "happiness_rank": 113,
        "country": "Sierra Leone",
        "happiness_score": 4.571,
        "economy_gdp_per_capita": 0.256,
        "family_info": 0.813,
        "health_life_expectancy": 0,
        "freedom": 0.355,
        "generosity": 0.053,
        "trust_government_corruption": 0.238,
        "lat": 8.460555,
        "lon": -11.779889
    },
    {
        "happiness_rank": 115,
        "country": "Bangladesh",
        "happiness_score": 4.5,
        "economy_gdp_per_capita": 0.532,
        "family_info": 0.85,
        "health_life_expectancy": 0.579,
        "freedom": 0.58,
        "generosity": 0.144,
        "trust_government_corruption": 0.153,
        "lat": 23.684994,
        "lon": 90.356331
    },
    {
        "happiness_rank": 116,
        "country": "Sri Lanka",
        "happiness_score": 4.471,
        "economy_gdp_per_capita": 0.918,
        "family_info": 1.314,
        "health_life_expectancy": 0.672,
        "freedom": 0.585,
        "generosity": 0.05,
        "trust_government_corruption": 0.307,
        "lat": 7.873053999999999,
        "lon": 80.77179699999999
    },
    {
        "happiness_rank": 117,
        "country": "Iraq",
        "happiness_score": 4.456,
        "economy_gdp_per_capita": 1.01,
        "family_info": 0.971,
        "health_life_expectancy": 0.536,
        "freedom": 0.304,
        "generosity": 0.095,
        "trust_government_corruption": 0.148,
        "lat": 33.223191,
        "lon": 43.679291
    },
    {
        "happiness_rank": 118,
        "country": "Mali",
        "happiness_score": 4.447,
        "economy_gdp_per_capita": 0.37,
        "family_info": 1.233,
        "health_life_expectancy": 0.152,
        "freedom": 0.367,
        "generosity": 0.056,
        "trust_government_corruption": 0.139,
        "lat": 17.570692,
        "lon": -3.996166
    },
    {
        "happiness_rank": 119,
        "country": "Namibia",
        "happiness_score": 4.441,
        "economy_gdp_per_capita": 0.874,
        "family_info": 1.281,
        "health_life_expectancy": 0.365,
        "freedom": 0.519,
        "generosity": 0.064,
        "trust_government_corruption": 0.051,
        "lat": -22.95764,
        "lon": 18.49041
    },
    {
        "happiness_rank": 120,
        "country": "Cambodia",
        "happiness_score": 4.433,
        "economy_gdp_per_capita": 0.549,
        "family_info": 1.088,
        "health_life_expectancy": 0.457,
        "freedom": 0.696,
        "generosity": 0.065,
        "trust_government_corruption": 0.256,
        "lat": 12.565679,
        "lon": 104.990963
    },
    {
        "happiness_rank": 121,
        "country": "Burkina Faso",
        "happiness_score": 4.424,
        "economy_gdp_per_capita": 0.314,
        "family_info": 1.097,
        "health_life_expectancy": 0.254,
        "freedom": 0.312,
        "generosity": 0.128,
        "trust_government_corruption": 0.175,
        "lat": 12.238333,
        "lon": -1.561593
    },
    {
        "happiness_rank": 122,
        "country": "Egypt",
        "happiness_score": 4.419,
        "economy_gdp_per_capita": 0.885,
        "family_info": 1.025,
        "health_life_expectancy": 0.553,
        "freedom": 0.312,
        "generosity": 0.107,
        "trust_government_corruption": 0.092,
        "lat": 26.820553,
        "lon": 30.802498
    },
    {
        "happiness_rank": 123,
        "country": "Mozambique",
        "happiness_score": 4.417,
        "economy_gdp_per_capita": 0.198,
        "family_info": 0.902,
        "health_life_expectancy": 0.173,
        "freedom": 0.531,
        "generosity": 0.158,
        "trust_government_corruption": 0.206,
        "lat": -18.665695,
        "lon": 35.529562
    },
    {
        "happiness_rank": 124,
        "country": "Kenya",
        "happiness_score": 4.41,
        "economy_gdp_per_capita": 0.493,
        "family_info": 1.048,
        "health_life_expectancy": 0.454,
        "freedom": 0.504,
        "generosity": 0.055,
        "trust_government_corruption": 0.352,
        "lat": -0.023559,
        "lon": 37.906193
    },
    {
        "happiness_rank": 125,
        "country": "Zambia",
        "happiness_score": 4.377,
        "economy_gdp_per_capita": 0.562,
        "family_info": 1.047,
        "health_life_expectancy": 0.295,
        "freedom": 0.503,
        "generosity": 0.082,
        "trust_government_corruption": 0.221,
        "lat": -13.133897,
        "lon": 27.849332
    },
    {
        "happiness_rank": 126,
        "country": "Mauritania",
        "happiness_score": 4.356,
        "economy_gdp_per_capita": 0.557,
        "family_info": 1.245,
        "health_life_expectancy": 0.292,
        "freedom": 0.129,
        "generosity": 0.093,
        "trust_government_corruption": 0.134,
        "lat": 21.00789,
        "lon": -10.940835
    },
    {
        "happiness_rank": 127,
        "country": "Ethiopia",
        "happiness_score": 4.35,
        "economy_gdp_per_capita": 0.308,
        "family_info": 0.95,
        "health_life_expectancy": 0.391,
        "freedom": 0.452,
        "generosity": 0.146,
        "trust_government_corruption": 0.22,
        "lat": 9.145,
        "lon": 40.489673
    },
    {
        "happiness_rank": 128,
        "country": "Georgia",
        "happiness_score": 4.34,
        "economy_gdp_per_capita": 0.853,
        "family_info": 0.592,
        "health_life_expectancy": 0.643,
        "freedom": 0.375,
        "generosity": 0.215,
        "trust_government_corruption": 0.038,
        "lat": 32.1656221,
        "lon": -82.9000751
    },
    {
        "happiness_rank": 129,
        "country": "Armenia",
        "happiness_score": 4.321,
        "economy_gdp_per_capita": 0.816,
        "family_info": 0.99,
        "health_life_expectancy": 0.666,
        "freedom": 0.26,
        "generosity": 0.028,
        "trust_government_corruption": 0.077,
        "lat": 40.069099,
        "lon": 45.038189
    },
    {
        "happiness_rank": 131,
        "country": "Chad",
        "happiness_score": 4.301,
        "economy_gdp_per_capita": 0.358,
        "family_info": 0.907,
        "health_life_expectancy": 0.053,
        "freedom": 0.189,
        "generosity": 0.06,
        "trust_government_corruption": 0.181,
        "lat": 15.454166,
        "lon": 18.732207
    },
    {
        "happiness_rank": 133,
        "country": "India",
        "happiness_score": 4.19,
        "economy_gdp_per_capita": 0.721,
        "family_info": 0.747,
        "health_life_expectancy": 0.485,
        "freedom": 0.539,
        "generosity": 0.093,
        "trust_government_corruption": 0.172,
        "lat": 20.593684,
        "lon": 78.96288
    },
    {
        "happiness_rank": 134,
        "country": "Niger",
        "happiness_score": 4.166,
        "economy_gdp_per_capita": 0.131,
        "family_info": 0.867,
        "health_life_expectancy": 0.221,
        "freedom": 0.39,
        "generosity": 0.099,
        "trust_government_corruption": 0.175,
        "lat": 17.607789,
        "lon": 8.081666
    },
    {
        "happiness_rank": 135,
        "country": "Uganda",
        "happiness_score": 4.161,
        "economy_gdp_per_capita": 0.322,
        "family_info": 1.09,
        "health_life_expectancy": 0.237,
        "freedom": 0.45,
        "generosity": 0.061,
        "trust_government_corruption": 0.259,
        "lat": 1.373333,
        "lon": 32.290275
    },
    {
        "happiness_rank": 136,
        "country": "Benin",
        "happiness_score": 4.141,
        "economy_gdp_per_capita": 0.378,
        "family_info": 0.372,
        "health_life_expectancy": 0.24,
        "freedom": 0.44,
        "generosity": 0.067,
        "trust_government_corruption": 0.163,
        "lat": 9.30769,
        "lon": 2.315834
    },
    {
        "happiness_rank": 137,
        "country": "Sudan",
        "happiness_score": 4.139,
        "economy_gdp_per_capita": 0.605,
        "family_info": 1.24,
        "health_life_expectancy": 0.312,
        "freedom": 0.016,
        "generosity": 0.082,
        "trust_government_corruption": 0.134,
        "lat": 12.862807,
        "lon": 30.217636
    },
    {
        "happiness_rank": 138,
        "country": "Ukraine",
        "happiness_score": 4.103,
        "economy_gdp_per_capita": 0.793,
        "family_info": 1.413,
        "health_life_expectancy": 0.609,
        "freedom": 0.163,
        "generosity": 0.011,
        "trust_government_corruption": 0.187,
        "lat": 48.379433,
        "lon": 31.16558
    },
    {
        "happiness_rank": 139,
        "country": "Togo",
        "happiness_score": 3.999,
        "economy_gdp_per_capita": 0.259,
        "family_info": 0.474,
        "health_life_expectancy": 0.253,
        "freedom": 0.434,
        "generosity": 0.101,
        "trust_government_corruption": 0.158,
        "lat": 8.619543,
        "lon": 0.824782
    },
    {
        "happiness_rank": 140,
        "country": "Guinea",
        "happiness_score": 3.964,
        "economy_gdp_per_capita": 0.344,
        "family_info": 0.792,
        "health_life_expectancy": 0.211,
        "freedom": 0.394,
        "generosity": 0.094,
        "trust_government_corruption": 0.185,
        "lat": 9.945587,
        "lon": -9.696645
    },
    {
        "happiness_rank": 141,
        "country": "Lesotho",
        "happiness_score": 3.808,
        "economy_gdp_per_capita": 0.472,
        "family_info": 1.215,
        "health_life_expectancy": 0.079,
        "freedom": 0.423,
        "generosity": 0.112,
        "trust_government_corruption": 0.116,
        "lat": -29.609988,
        "lon": 28.233608
    },
    {
        "happiness_rank": 142,
        "country": "Angola",
        "happiness_score": 3.795,
        "economy_gdp_per_capita": 0.73,
        "family_info": 1.125,
        "health_life_expectancy": 0.269,
        "freedom": 0,
        "generosity": 0.061,
        "trust_government_corruption": 0.079,
        "lat": -11.202692,
        "lon": 17.873887
    },
    {
        "happiness_rank": 143,
        "country": "Madagascar",
        "happiness_score": 3.774,
        "economy_gdp_per_capita": 0.262,
        "family_info": 0.908,
        "health_life_expectancy": 0.402,
        "freedom": 0.221,
        "generosity": 0.049,
        "trust_government_corruption": 0.155,
        "lat": -18.766947,
        "lon": 46.869107
    },
    {
        "happiness_rank": 144,
        "country": "Zimbabwe",
        "happiness_score": 3.692,
        "economy_gdp_per_capita": 0.357,
        "family_info": 1.094,
        "health_life_expectancy": 0.248,
        "freedom": 0.406,
        "generosity": 0.099,
        "trust_government_corruption": 0.132,
        "lat": -19.015438,
        "lon": 29.154857
    },
    {
        "happiness_rank": 145,
        "country": "Afghanistan",
        "happiness_score": 3.632,
        "economy_gdp_per_capita": 0.332,
        "family_info": 0.537,
        "health_life_expectancy": 0.255,
        "freedom": 0.085,
        "generosity": 0.036,
        "trust_government_corruption": 0.191,
        "lat": 33.93911,
        "lon": 67.709953
    },
    {
        "happiness_rank": 146,
        "country": "Botswana",
        "happiness_score": 3.59,
        "economy_gdp_per_capita": 1.017,
        "family_info": 1.174,
        "health_life_expectancy": 0.417,
        "freedom": 0.557,
        "generosity": 0.092,
        "trust_government_corruption": 0.042,
        "lat": -22.328474,
        "lon": 24.684866
    },
    {
        "happiness_rank": 147,
        "country": "Malawi",
        "happiness_score": 3.587,
        "economy_gdp_per_capita": 0.186,
        "family_info": 0.541,
        "health_life_expectancy": 0.306,
        "freedom": 0.531,
        "generosity": 0.08,
        "trust_government_corruption": 0.21,
        "lat": -13.254308,
        "lon": 34.301525
    },
    {
        "happiness_rank": 148,
        "country": "Haiti",
        "happiness_score": 3.582,
        "economy_gdp_per_capita": 0.315,
        "family_info": 0.714,
        "health_life_expectancy": 0.289,
        "freedom": 0.025,
        "generosity": 0.104,
        "trust_government_corruption": 0.392,
        "lat": 18.971187,
        "lon": -72.285215
    },
    {
        "happiness_rank": 149,
        "country": "Liberia",
        "happiness_score": 3.495,
        "economy_gdp_per_capita": 0.076,
        "family_info": 0.858,
        "health_life_expectancy": 0.267,
        "freedom": 0.419,
        "generosity": 0.03,
        "trust_government_corruption": 0.206,
        "lat": 6.428055,
        "lon": -9.429499000000002
    },
    {
        "happiness_rank": 150,
        "country": "Syria",
        "happiness_score": 3.462,
        "economy_gdp_per_capita": 0.689,
        "family_info": 0.382,
        "health_life_expectancy": 0.539,
        "freedom": 0.088,
        "generosity": 0.144,
        "trust_government_corruption": 0.376,
        "lat": 34.80207499999999,
        "lon": 38.996815
    },
    {
        "happiness_rank": 151,
        "country": "Rwanda",
        "happiness_score": 3.408,
        "economy_gdp_per_capita": 0.332,
        "family_info": 0.896,
        "health_life_expectancy": 0.4,
        "freedom": 0.636,
        "generosity": 0.444,
        "trust_government_corruption": 0.2,
        "lat": -1.940278,
        "lon": 29.873888
    },
    {
        "happiness_rank": 152,
        "country": "Yemen",
        "happiness_score": 3.355,
        "economy_gdp_per_capita": 0.442,
        "family_info": 1.073,
        "health_life_expectancy": 0.343,
        "freedom": 0.244,
        "generosity": 0.064,
        "trust_government_corruption": 0.083,
        "lat": 15.552727,
        "lon": 48.516388
    },
    {
        "happiness_rank": 153,
        "country": "Tanzania",
        "happiness_score": 3.303,
        "economy_gdp_per_capita": 0.455,
        "family_info": 0.991,
        "health_life_expectancy": 0.381,
        "freedom": 0.481,
        "generosity": 0.097,
        "trust_government_corruption": 0.27,
        "lat": -6.369028,
        "lon": 34.888822
    },
    {
        "happiness_rank": 154,
        "country": "South Sudan",
        "happiness_score": 3.254,
        "economy_gdp_per_capita": 0.337,
        "family_info": 0.608,
        "health_life_expectancy": 0.177,
        "freedom": 0.112,
        "generosity": 0.106,
        "trust_government_corruption": 0.224,
        "lat": 6.876991899999999,
        "lon": 31.3069788
    },
    {
        "happiness_rank": 155,
        "country": "Central African Republic",
        "happiness_score": 3.083,
        "economy_gdp_per_capita": 0.024,
        "family_info": 0,
        "health_life_expectancy": 0.01,
        "freedom": 0.305,
        "generosity": 0.038,
        "trust_government_corruption": 0.218,
        "lat": 6.611110999999999,
        "lon": 20.939444
    },
    {
        "happiness_rank": 156,
        "country": "Burundi",
        "happiness_score": 2.905,
        "economy_gdp_per_capita": 0.091,
        "family_info": 0.627,
        "health_life_expectancy": 0.145,
        "freedom": 0.065,
        "generosity": 0.076,
        "trust_government_corruption": 0.149,
        "lat": -3.373056,
        "lon": 29.918886
    }
];

// declare variables for circle groups
var circles = [];

// iterate through datasets to generate circle groups
for (var i = 0; i < data.length; i++) {

    // Conditionals for country happiness
    var color = "";
    if (data[i].happiness_rank < 11) {
      color = "green";
    }
    else if (data[i].happiness_rank < 26) {
      color = "yellow";
    }
    else if (data[i].happiness_rank < 51) {
      color = "orange";
    }
    else if (data[i].happiness_rank < 101) {
      color = "red";
    }
    else {
      color = "brown";
    }

    var circleLocation = [data[i].lat, data[i].lon];
    
    // Add circles to the map.
    circles.push(L.circle(circleLocation, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: color,
      radius: Math.sqrt(data[i].economy_gdp_per_capita) * 200000
    }).bindPopup(`<h1>${data[i].country}</h1><hr><body>Happiness Rank: ${data[i].happiness_rank}<br>Happiness Score: ${data[i].happiness_score}<br><b>GDP Per Capita: ${data[i].economy_gdp_per_capita}</b><br>Family Score: ${data[i].family_info}<br>Life Expectancy: ${data[i].health_life_expectancy}<br>Government Trust Score: ${data[i].trust_government_corruption}<br>Generosity Score: ${data[i].generosity}</body>`));
}

// create layer for new circle group
var layer1 = L.layerGroup(circles);

circles = [];

// iterate through datasets to generate circle groups
for (var i = 0; i < data.length; i++) {

    // Conditionals for country happiness
    var color = "";
    if (data[i].happiness_rank < 11) {
      color = "green";
    }
    else if (data[i].happiness_rank < 26) {
      color = "yellow";
    }
    else if (data[i].happiness_rank < 51) {
      color = "orange";
    }
    else if (data[i].happiness_rank < 101) {
      color = "red";
    }
    else {
      color = "brown";
    }

    var circleLocation = [data[i].lat, data[i].lon];
    
    // Add circles to the map.
    circles.push(L.circle(circleLocation, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: color,
      radius: 1/(Math.sqrt(data[i].economy_gdp_per_capita)) * 150000
    }).bindPopup(`<h1>${data[i].country}</h1><hr><body>Happiness Rank: ${data[i].happiness_rank}<br>Happiness Score: ${data[i].happiness_score}<br><b>GDP Per Capita: ${data[i].economy_gdp_per_capita}</b><br>Family Score: ${data[i].family_info}<br>Life Expectancy: ${data[i].health_life_expectancy}<br>Government Trust Score: ${data[i].trust_government_corruption}<br>Generosity Score: ${data[i].generosity}</body>`));
}

// create layer for new circle group
var layer2 = L.layerGroup(circles);

circles = [];

// iterate through datasets to generate circle groups
for (var i = 0; i < data.length; i++) {

    // Conditionals for country happiness
    var color = "";
    if (data[i].happiness_rank < 11) {
      color = "green";
    }
    else if (data[i].happiness_rank < 26) {
      color = "yellow";
    }
    else if (data[i].happiness_rank < 51) {
      color = "orange";
    }
    else if (data[i].happiness_rank < 101) {
      color = "red";
    }
    else {
      color = "brown";
    }

    var circleLocation = [data[i].lat, data[i].lon];
    
    // Add circles to the map.
    circles.push(L.circle(circleLocation, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: color,
      radius: Math.sqrt(data[i].health_life_expectancy) * 200000
    }).bindPopup(`<h1>${data[i].country}</h1><hr><body>Happiness Rank: ${data[i].happiness_rank}<br>Happiness Score: ${data[i].happiness_score}<br>GDP Per Capita: ${data[i].economy_gdp_per_capita}<br>Family Score: ${data[i].family_info}<br><b>Life Expectancy: ${data[i].health_life_expectancy}</b><br>Government Trust Score: ${data[i].trust_government_corruption}<br>Generosity Score: ${data[i].generosity}</body>`));
}

// create layer for new circle group
var layer3 = L.layerGroup(circles);

circles = [];

// iterate through datasets to generate circle groups
for (var i = 0; i < data.length; i++) {

    // Conditionals for country happiness
    var color = "";
    if (data[i].happiness_rank < 11) {
      color = "green";
    }
    else if (data[i].happiness_rank < 26) {
      color = "yellow";
    }
    else if (data[i].happiness_rank < 51) {
      color = "orange";
    }
    else if (data[i].happiness_rank < 101) {
      color = "red";
    }
    else {
      color = "brown";
    }

    var circleLocation = [data[i].lat, data[i].lon];
    
    // Add circles to the map.
    circles.push(L.circle(circleLocation, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: color,
      radius: 1/(Math.sqrt(data[i].health_life_expectancy)) * 120000
    }).bindPopup(`<h1>${data[i].country}</h1><hr><body>Happiness Rank: ${data[i].happiness_rank}<br>Happiness Score: ${data[i].happiness_score}<br>GDP Per Capita: ${data[i].economy_gdp_per_capita}<br>Family Score: ${data[i].family_info}<br><b>Life Expectancy: ${data[i].health_life_expectancy}</b><br>Government Trust Score: ${data[i].trust_government_corruption}<br>Generosity Score: ${data[i].generosity}</body>`));
}

// create layer for new circle group
var layer4 = L.layerGroup(circles);

circles = [];

// iterate through datasets to generate circle groups
for (var i = 0; i < data.length; i++) {

    // Conditionals for country happiness
    var color = "";
    if (data[i].happiness_rank < 11) {
      color = "green";
    }
    else if (data[i].happiness_rank < 26) {
      color = "yellow";
    }
    else if (data[i].happiness_rank < 51) {
      color = "orange";
    }
    else if (data[i].happiness_rank < 101) {
      color = "red";
    }
    else {
      color = "brown";
    }

    var circleLocation = [data[i].lat, data[i].lon];
    
    // Add circles to the map.
    circles.push(L.circle(circleLocation, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: color,
      radius: Math.sqrt(data[i].trust_government_corruption) * 275000
    }).bindPopup(`<h1>${data[i].country}</h1><hr><body>Happiness Rank: ${data[i].happiness_rank}<br>Happiness Score: ${data[i].happiness_score}<br>GDP Per Capita: ${data[i].economy_gdp_per_capita}<br>Family Score: ${data[i].family_info}<br>Life Expectancy: ${data[i].health_life_expectancy}<br><b>Government Trust Score: ${data[i].trust_government_corruption}</b><br>Generosity Score: ${data[i].generosity}</body>`));
}

// create layer for new circle group
var layer5 = L.layerGroup(circles);

//

var baseMaps = {
    Map: map
  };

var overlayMaps = {
    "Highest GDP": layer1,
    "Lowest GDP": layer2,
    "Highest Life Expectancy": layer3,
    "Lowest Life Expectancy": layer4,
    "Trusts Government": layer5
};

L.control.layers(overlayMaps).addTo(myMap);
