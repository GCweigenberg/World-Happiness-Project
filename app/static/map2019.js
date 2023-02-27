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
        "happiness_score": 7.769,
        "economy_gdp_per_capita": 1.34,
        "family_info": 1.587,
        "health_life_expectancy": 0.986,
        "freedom": 0.596,
        "generosity": 0.393,
        "trust_government_corruption": 0.153,
        "lat": 61.92410999999999,
        "lon": 25.748151
    },
    {
        "happiness_rank": 2,
        "country": "Denmark",
        "happiness_score": 7.6,
        "economy_gdp_per_capita": 1.383,
        "family_info": 1.573,
        "health_life_expectancy": 0.996,
        "freedom": 0.592,
        "generosity": 0.41,
        "trust_government_corruption": 0.252,
        "lat": 56.26392,
        "lon": 9.501785
    },
    {
        "happiness_rank": 3,
        "country": "Norway",
        "happiness_score": 7.554,
        "economy_gdp_per_capita": 1.488,
        "family_info": 1.582,
        "health_life_expectancy": 1.028,
        "freedom": 0.603,
        "generosity": 0.341,
        "trust_government_corruption": 0.271,
        "lat": 60.47202399999999,
        "lon": 8.468945999999999
    },
    {
        "happiness_rank": 4,
        "country": "Iceland",
        "happiness_score": 7.494,
        "economy_gdp_per_capita": 1.38,
        "family_info": 1.624,
        "health_life_expectancy": 1.026,
        "freedom": 0.591,
        "generosity": 0.118,
        "trust_government_corruption": 0.354,
        "lat": 64.963051,
        "lon": -19.020835
    },
    {
        "happiness_rank": 5,
        "country": "Netherlands",
        "happiness_score": 7.488,
        "economy_gdp_per_capita": 1.396,
        "family_info": 1.522,
        "health_life_expectancy": 0.999,
        "freedom": 0.557,
        "generosity": 0.298,
        "trust_government_corruption": 0.322,
        "lat": 52.132633,
        "lon": 5.291265999999999
    },
    {
        "happiness_rank": 6,
        "country": "Switzerland",
        "happiness_score": 7.48,
        "economy_gdp_per_capita": 1.452,
        "family_info": 1.526,
        "health_life_expectancy": 1.052,
        "freedom": 0.572,
        "generosity": 0.343,
        "trust_government_corruption": 0.263,
        "lat": 46.818188,
        "lon": 8.227511999999999
    },
    {
        "happiness_rank": 7,
        "country": "Sweden",
        "happiness_score": 7.343,
        "economy_gdp_per_capita": 1.387,
        "family_info": 1.487,
        "health_life_expectancy": 1.009,
        "freedom": 0.574,
        "generosity": 0.373,
        "trust_government_corruption": 0.267,
        "lat": 60.12816100000001,
        "lon": 18.643501
    },
    {
        "happiness_rank": 8,
        "country": "New Zealand",
        "happiness_score": 7.307,
        "economy_gdp_per_capita": 1.303,
        "family_info": 1.557,
        "health_life_expectancy": 1.026,
        "freedom": 0.585,
        "generosity": 0.38,
        "trust_government_corruption": 0.33,
        "lat": -40.900557,
        "lon": 174.885971
    },
    {
        "happiness_rank": 9,
        "country": "Canada",
        "happiness_score": 7.278,
        "economy_gdp_per_capita": 1.365,
        "family_info": 1.505,
        "health_life_expectancy": 1.039,
        "freedom": 0.584,
        "generosity": 0.308,
        "trust_government_corruption": 0.285,
        "lat": 56.130366,
        "lon": -106.346771
    },
    {
        "happiness_rank": 10,
        "country": "Austria",
        "happiness_score": 7.246,
        "economy_gdp_per_capita": 1.376,
        "family_info": 1.475,
        "health_life_expectancy": 1.016,
        "freedom": 0.532,
        "generosity": 0.226,
        "trust_government_corruption": 0.244,
        "lat": 47.516231,
        "lon": 14.550072
    },
    {
        "happiness_rank": 11,
        "country": "Australia",
        "happiness_score": 7.228,
        "economy_gdp_per_capita": 1.372,
        "family_info": 1.548,
        "health_life_expectancy": 1.036,
        "freedom": 0.557,
        "generosity": 0.29,
        "trust_government_corruption": 0.332,
        "lat": -25.274398,
        "lon": 133.775136
    },
    {
        "happiness_rank": 12,
        "country": "Costa Rica",
        "happiness_score": 7.167,
        "economy_gdp_per_capita": 1.034,
        "family_info": 1.441,
        "health_life_expectancy": 0.963,
        "freedom": 0.558,
        "generosity": 0.093,
        "trust_government_corruption": 0.144,
        "lat": 9.748917,
        "lon": -83.753428
    },
    {
        "happiness_rank": 13,
        "country": "Israel",
        "happiness_score": 7.139,
        "economy_gdp_per_capita": 1.276,
        "family_info": 1.455,
        "health_life_expectancy": 1.029,
        "freedom": 0.371,
        "generosity": 0.082,
        "trust_government_corruption": 0.261,
        "lat": 31.046051,
        "lon": 34.851612
    },
    {
        "happiness_rank": 14,
        "country": "Luxembourg",
        "happiness_score": 7.09,
        "economy_gdp_per_capita": 1.609,
        "family_info": 1.479,
        "health_life_expectancy": 1.012,
        "freedom": 0.526,
        "generosity": 0.316,
        "trust_government_corruption": 0.194,
        "lat": 49.815273,
        "lon": 6.129582999999999
    },
    {
        "happiness_rank": 15,
        "country": "United Kingdom",
        "happiness_score": 7.054,
        "economy_gdp_per_capita": 1.333,
        "family_info": 1.538,
        "health_life_expectancy": 0.996,
        "freedom": 0.45,
        "generosity": 0.278,
        "trust_government_corruption": 0.348,
        "lat": 55.378051,
        "lon": -3.435973
    },
    {
        "happiness_rank": 16,
        "country": "Ireland",
        "happiness_score": 7.021,
        "economy_gdp_per_capita": 1.499,
        "family_info": 1.553,
        "health_life_expectancy": 0.999,
        "freedom": 0.516,
        "generosity": 0.31,
        "trust_government_corruption": 0.298,
        "lat": 53.1423672,
        "lon": -7.692053599999999
    },
    {
        "happiness_rank": 17,
        "country": "Germany",
        "happiness_score": 6.985,
        "economy_gdp_per_capita": 1.373,
        "family_info": 1.454,
        "health_life_expectancy": 0.987,
        "freedom": 0.495,
        "generosity": 0.265,
        "trust_government_corruption": 0.261,
        "lat": 51.165691,
        "lon": 10.451526
    },
    {
        "happiness_rank": 18,
        "country": "Belgium",
        "happiness_score": 6.923,
        "economy_gdp_per_capita": 1.356,
        "family_info": 1.504,
        "health_life_expectancy": 0.986,
        "freedom": 0.473,
        "generosity": 0.21,
        "trust_government_corruption": 0.16,
        "lat": 50.503887,
        "lon": 4.469936
    },
    {
        "happiness_rank": 19,
        "country": "United States",
        "happiness_score": 6.892,
        "economy_gdp_per_capita": 1.433,
        "family_info": 1.457,
        "health_life_expectancy": 0.874,
        "freedom": 0.454,
        "generosity": 0.128,
        "trust_government_corruption": 0.28,
        "lat": 37.09024,
        "lon": -95.712891
    },
    {
        "happiness_rank": 21,
        "country": "United Arab Emirates",
        "happiness_score": 6.825,
        "economy_gdp_per_capita": 1.503,
        "family_info": 1.31,
        "health_life_expectancy": 0.825,
        "freedom": 0.598,
        "generosity": 0.182,
        "trust_government_corruption": 0.262,
        "lat": 23.424076,
        "lon": 53.847818
    },
    {
        "happiness_rank": 22,
        "country": "Malta",
        "happiness_score": 6.726,
        "economy_gdp_per_capita": 1.3,
        "family_info": 1.52,
        "health_life_expectancy": 0.999,
        "freedom": 0.564,
        "generosity": 0.151,
        "trust_government_corruption": 0.375,
        "lat": 35.937496,
        "lon": 14.375416
    },
    {
        "happiness_rank": 23,
        "country": "Mexico",
        "happiness_score": 6.595,
        "economy_gdp_per_capita": 1.07,
        "family_info": 1.323,
        "health_life_expectancy": 0.861,
        "freedom": 0.433,
        "generosity": 0.073,
        "trust_government_corruption": 0.074,
        "lat": 23.634501,
        "lon": -102.552784
    },
    {
        "happiness_rank": 24,
        "country": "France",
        "happiness_score": 6.592,
        "economy_gdp_per_capita": 1.324,
        "family_info": 1.472,
        "health_life_expectancy": 1.045,
        "freedom": 0.436,
        "generosity": 0.183,
        "trust_government_corruption": 0.111,
        "lat": 46.227638,
        "lon": 2.213749
    },
    {
        "happiness_rank": 25,
        "country": "Taiwan",
        "happiness_score": 6.446,
        "economy_gdp_per_capita": 1.368,
        "family_info": 1.43,
        "health_life_expectancy": 0.914,
        "freedom": 0.351,
        "generosity": 0.097,
        "trust_government_corruption": 0.242,
        "lat": 23.69781,
        "lon": 120.960515
    },
    {
        "happiness_rank": 26,
        "country": "Chile",
        "happiness_score": 6.444,
        "economy_gdp_per_capita": 1.159,
        "family_info": 1.369,
        "health_life_expectancy": 0.92,
        "freedom": 0.357,
        "generosity": 0.056,
        "trust_government_corruption": 0.187,
        "lat": -35.675147,
        "lon": -71.542969
    },
    {
        "happiness_rank": 27,
        "country": "Guatemala",
        "happiness_score": 6.436,
        "economy_gdp_per_capita": 0.8,
        "family_info": 1.269,
        "health_life_expectancy": 0.746,
        "freedom": 0.535,
        "generosity": 0.078,
        "trust_government_corruption": 0.175,
        "lat": 15.783471,
        "lon": -90.230759
    },
    {
        "happiness_rank": 28,
        "country": "Saudi Arabia",
        "happiness_score": 6.375,
        "economy_gdp_per_capita": 1.403,
        "family_info": 1.357,
        "health_life_expectancy": 0.795,
        "freedom": 0.439,
        "generosity": 0.132,
        "trust_government_corruption": 0.08,
        "lat": 23.885942,
        "lon": 45.079162
    },
    {
        "happiness_rank": 29,
        "country": "Qatar",
        "happiness_score": 6.374,
        "economy_gdp_per_capita": 1.684,
        "family_info": 1.313,
        "health_life_expectancy": 0.871,
        "freedom": 0.555,
        "generosity": 0.167,
        "trust_government_corruption": 0.22,
        "lat": 25.354826,
        "lon": 51.183884
    },
    {
        "happiness_rank": 30,
        "country": "Spain",
        "happiness_score": 6.354,
        "economy_gdp_per_capita": 1.286,
        "family_info": 1.484,
        "health_life_expectancy": 1.062,
        "freedom": 0.362,
        "generosity": 0.079,
        "trust_government_corruption": 0.153,
        "lat": 40.46366700000001,
        "lon": -3.74922
    },
    {
        "happiness_rank": 31,
        "country": "Panama",
        "happiness_score": 6.321,
        "economy_gdp_per_capita": 1.149,
        "family_info": 1.442,
        "health_life_expectancy": 0.91,
        "freedom": 0.516,
        "generosity": 0.054,
        "trust_government_corruption": 0.109,
        "lat": 8.537981,
        "lon": -80.782127
    },
    {
        "happiness_rank": 32,
        "country": "Brazil",
        "happiness_score": 6.3,
        "economy_gdp_per_capita": 1.004,
        "family_info": 1.439,
        "health_life_expectancy": 0.802,
        "freedom": 0.39,
        "generosity": 0.086,
        "trust_government_corruption": 0.099,
        "lat": -14.235004,
        "lon": -51.92528
    },
    {
        "happiness_rank": 33,
        "country": "Uruguay",
        "happiness_score": 6.293,
        "economy_gdp_per_capita": 1.124,
        "family_info": 1.465,
        "health_life_expectancy": 0.891,
        "freedom": 0.523,
        "generosity": 0.15,
        "trust_government_corruption": 0.127,
        "lat": -32.522779,
        "lon": -55.765835
    },
    {
        "happiness_rank": 34,
        "country": "Singapore",
        "happiness_score": 6.262,
        "economy_gdp_per_capita": 1.572,
        "family_info": 1.463,
        "health_life_expectancy": 1.141,
        "freedom": 0.556,
        "generosity": 0.453,
        "trust_government_corruption": 0.271,
        "lat": 1.352083,
        "lon": 103.819836
    },
    {
        "happiness_rank": 35,
        "country": "El Salvador",
        "happiness_score": 6.253,
        "economy_gdp_per_capita": 0.794,
        "family_info": 1.242,
        "health_life_expectancy": 0.789,
        "freedom": 0.43,
        "generosity": 0.074,
        "trust_government_corruption": 0.093,
        "lat": 13.794185,
        "lon": -88.89653
    },
    {
        "happiness_rank": 36,
        "country": "Italy",
        "happiness_score": 6.223,
        "economy_gdp_per_capita": 1.294,
        "family_info": 1.488,
        "health_life_expectancy": 1.039,
        "freedom": 0.231,
        "generosity": 0.03,
        "trust_government_corruption": 0.158,
        "lat": 41.87194,
        "lon": 12.56738
    },
    {
        "happiness_rank": 37,
        "country": "Bahrain",
        "happiness_score": 6.199,
        "economy_gdp_per_capita": 1.362,
        "family_info": 1.368,
        "health_life_expectancy": 0.871,
        "freedom": 0.536,
        "generosity": 0.11,
        "trust_government_corruption": 0.255,
        "lat": 26.0667,
        "lon": 50.5577
    },
    {
        "happiness_rank": 38,
        "country": "Slovakia",
        "happiness_score": 6.198,
        "economy_gdp_per_capita": 1.246,
        "family_info": 1.504,
        "health_life_expectancy": 0.881,
        "freedom": 0.334,
        "generosity": 0.014,
        "trust_government_corruption": 0.121,
        "lat": 48.669026,
        "lon": 19.699024
    },
    {
        "happiness_rank": 40,
        "country": "Poland",
        "happiness_score": 6.182,
        "economy_gdp_per_capita": 1.206,
        "family_info": 1.438,
        "health_life_expectancy": 0.884,
        "freedom": 0.483,
        "generosity": 0.05,
        "trust_government_corruption": 0.117,
        "lat": 51.919438,
        "lon": 19.145136
    },
    {
        "happiness_rank": 41,
        "country": "Uzbekistan",
        "happiness_score": 6.174,
        "economy_gdp_per_capita": 0.745,
        "family_info": 1.529,
        "health_life_expectancy": 0.756,
        "freedom": 0.631,
        "generosity": 0.24,
        "trust_government_corruption": 0.322,
        "lat": 41.377491,
        "lon": 64.585262
    },
    {
        "happiness_rank": 42,
        "country": "Lithuania",
        "happiness_score": 6.149,
        "economy_gdp_per_capita": 1.238,
        "family_info": 1.515,
        "health_life_expectancy": 0.818,
        "freedom": 0.291,
        "generosity": 0.042,
        "trust_government_corruption": 0.043,
        "lat": 55.169438,
        "lon": 23.881275
    },
    {
        "happiness_rank": 43,
        "country": "Colombia",
        "happiness_score": 6.125,
        "economy_gdp_per_capita": 0.985,
        "family_info": 1.41,
        "health_life_expectancy": 0.841,
        "freedom": 0.47,
        "generosity": 0.034,
        "trust_government_corruption": 0.099,
        "lat": 4.570868,
        "lon": -74.297333
    },
    {
        "happiness_rank": 44,
        "country": "Slovenia",
        "happiness_score": 6.118,
        "economy_gdp_per_capita": 1.258,
        "family_info": 1.523,
        "health_life_expectancy": 0.953,
        "freedom": 0.564,
        "generosity": 0.057,
        "trust_government_corruption": 0.144,
        "lat": 46.151241,
        "lon": 14.995463
    },
    {
        "happiness_rank": 45,
        "country": "Nicaragua",
        "happiness_score": 6.105,
        "economy_gdp_per_capita": 0.694,
        "family_info": 1.325,
        "health_life_expectancy": 0.835,
        "freedom": 0.435,
        "generosity": 0.127,
        "trust_government_corruption": 0.2,
        "lat": 12.865416,
        "lon": -85.207229
    },
    {
        "happiness_rank": 46,
        "country": "Kosovo",
        "happiness_score": 6.1,
        "economy_gdp_per_capita": 0.882,
        "family_info": 1.232,
        "health_life_expectancy": 0.758,
        "freedom": 0.489,
        "generosity": 0.006,
        "trust_government_corruption": 0.262,
        "lat": 42.6026359,
        "lon": 20.902977
    },
    {
        "happiness_rank": 47,
        "country": "Argentina",
        "happiness_score": 6.086,
        "economy_gdp_per_capita": 1.092,
        "family_info": 1.432,
        "health_life_expectancy": 0.881,
        "freedom": 0.471,
        "generosity": 0.05,
        "trust_government_corruption": 0.066,
        "lat": -38.416097,
        "lon": -63.61667199999999
    },
    {
        "happiness_rank": 48,
        "country": "Romania",
        "happiness_score": 6.07,
        "economy_gdp_per_capita": 1.162,
        "family_info": 1.232,
        "health_life_expectancy": 0.825,
        "freedom": 0.462,
        "generosity": 0.005,
        "trust_government_corruption": 0.083,
        "lat": 45.943161,
        "lon": 24.96676
    },
    {
        "happiness_rank": 49,
        "country": "Cyprus",
        "happiness_score": 6.046,
        "economy_gdp_per_capita": 1.263,
        "family_info": 1.223,
        "health_life_expectancy": 1.042,
        "freedom": 0.406,
        "generosity": 0.041,
        "trust_government_corruption": 0.19,
        "lat": 35.126413,
        "lon": 33.429859
    },
    {
        "happiness_rank": 50,
        "country": "Ecuador",
        "happiness_score": 6.028,
        "economy_gdp_per_capita": 0.912,
        "family_info": 1.312,
        "health_life_expectancy": 0.868,
        "freedom": 0.498,
        "generosity": 0.087,
        "trust_government_corruption": 0.126,
        "lat": -1.831239,
        "lon": -78.18340599999999
    },
    {
        "happiness_rank": 51,
        "country": "Kuwait",
        "happiness_score": 6.021,
        "economy_gdp_per_capita": 1.5,
        "family_info": 1.319,
        "health_life_expectancy": 0.808,
        "freedom": 0.493,
        "generosity": 0.097,
        "trust_government_corruption": 0.142,
        "lat": 29.31166,
        "lon": 47.481766
    },
    {
        "happiness_rank": 52,
        "country": "Thailand",
        "happiness_score": 6.008,
        "economy_gdp_per_capita": 1.05,
        "family_info": 1.409,
        "health_life_expectancy": 0.828,
        "freedom": 0.557,
        "generosity": 0.028,
        "trust_government_corruption": 0.359,
        "lat": 15.870032,
        "lon": 100.992541
    },
    {
        "happiness_rank": 53,
        "country": "Latvia",
        "happiness_score": 5.94,
        "economy_gdp_per_capita": 1.187,
        "family_info": 1.465,
        "health_life_expectancy": 0.812,
        "freedom": 0.264,
        "generosity": 0.064,
        "trust_government_corruption": 0.075,
        "lat": 56.879635,
        "lon": 24.603189
    },
    {
        "happiness_rank": 54,
        "country": "South Korea",
        "happiness_score": 5.895,
        "economy_gdp_per_capita": 1.301,
        "family_info": 1.219,
        "health_life_expectancy": 1.036,
        "freedom": 0.159,
        "generosity": 0.056,
        "trust_government_corruption": 0.175,
        "lat": 35.907757,
        "lon": 127.766922
    },
    {
        "happiness_rank": 55,
        "country": "Estonia",
        "happiness_score": 5.893,
        "economy_gdp_per_capita": 1.237,
        "family_info": 1.528,
        "health_life_expectancy": 0.874,
        "freedom": 0.495,
        "generosity": 0.161,
        "trust_government_corruption": 0.103,
        "lat": 58.595272,
        "lon": 25.013607
    },
    {
        "happiness_rank": 56,
        "country": "Jamaica",
        "happiness_score": 5.89,
        "economy_gdp_per_capita": 0.831,
        "family_info": 1.478,
        "health_life_expectancy": 0.831,
        "freedom": 0.49,
        "generosity": 0.028,
        "trust_government_corruption": 0.107,
        "lat": 18.109581,
        "lon": -77.297508
    },
    {
        "happiness_rank": 57,
        "country": "Mauritius",
        "happiness_score": 5.888,
        "economy_gdp_per_capita": 1.12,
        "family_info": 1.402,
        "health_life_expectancy": 0.798,
        "freedom": 0.498,
        "generosity": 0.06,
        "trust_government_corruption": 0.215,
        "lat": -20.348404,
        "lon": 57.55215200000001
    },
    {
        "happiness_rank": 58,
        "country": "Japan",
        "happiness_score": 5.886,
        "economy_gdp_per_capita": 1.327,
        "family_info": 1.419,
        "health_life_expectancy": 1.088,
        "freedom": 0.445,
        "generosity": 0.14,
        "trust_government_corruption": 0.069,
        "lat": 36.204824,
        "lon": 138.252924
    },
    {
        "happiness_rank": 59,
        "country": "Honduras",
        "happiness_score": 5.86,
        "economy_gdp_per_capita": 0.642,
        "family_info": 1.236,
        "health_life_expectancy": 0.828,
        "freedom": 0.507,
        "generosity": 0.078,
        "trust_government_corruption": 0.246,
        "lat": 15.199999,
        "lon": -86.241905
    },
    {
        "happiness_rank": 60,
        "country": "Kazakhstan",
        "happiness_score": 5.809,
        "economy_gdp_per_capita": 1.173,
        "family_info": 1.508,
        "health_life_expectancy": 0.729,
        "freedom": 0.41,
        "generosity": 0.096,
        "trust_government_corruption": 0.146,
        "lat": 48.019573,
        "lon": 66.923684
    },
    {
        "happiness_rank": 61,
        "country": "Bolivia",
        "happiness_score": 5.779,
        "economy_gdp_per_capita": 0.776,
        "family_info": 1.209,
        "health_life_expectancy": 0.706,
        "freedom": 0.511,
        "generosity": 0.064,
        "trust_government_corruption": 0.137,
        "lat": -16.290154,
        "lon": -63.58865299999999
    },
    {
        "happiness_rank": 62,
        "country": "Hungary",
        "happiness_score": 5.758,
        "economy_gdp_per_capita": 1.201,
        "family_info": 1.41,
        "health_life_expectancy": 0.828,
        "freedom": 0.199,
        "generosity": 0.02,
        "trust_government_corruption": 0.081,
        "lat": 47.162494,
        "lon": 19.503304
    },
    {
        "happiness_rank": 63,
        "country": "Paraguay",
        "happiness_score": 5.743,
        "economy_gdp_per_capita": 0.855,
        "family_info": 1.475,
        "health_life_expectancy": 0.777,
        "freedom": 0.514,
        "generosity": 0.08,
        "trust_government_corruption": 0.184,
        "lat": -23.442503,
        "lon": -58.443832
    },
    {
        "happiness_rank": 64,
        "country": "Northern Cyprus",
        "happiness_score": 5.718,
        "economy_gdp_per_capita": 1.263,
        "family_info": 1.252,
        "health_life_expectancy": 1.042,
        "freedom": 0.417,
        "generosity": 0.162,
        "trust_government_corruption": 0.191,
        "lat": 35.2480359,
        "lon": 33.6577243
    },
    {
        "happiness_rank": 65,
        "country": "Peru",
        "happiness_score": 5.697,
        "economy_gdp_per_capita": 0.96,
        "family_info": 1.274,
        "health_life_expectancy": 0.854,
        "freedom": 0.455,
        "generosity": 0.027,
        "trust_government_corruption": 0.083,
        "lat": -9.189967,
        "lon": -75.015152
    },
    {
        "happiness_rank": 66,
        "country": "Portugal",
        "happiness_score": 5.693,
        "economy_gdp_per_capita": 1.221,
        "family_info": 1.431,
        "health_life_expectancy": 0.999,
        "freedom": 0.508,
        "generosity": 0.025,
        "trust_government_corruption": 0.047,
        "lat": 39.39987199999999,
        "lon": -8.224454
    },
    {
        "happiness_rank": 67,
        "country": "Pakistan",
        "happiness_score": 5.653,
        "economy_gdp_per_capita": 0.677,
        "family_info": 0.886,
        "health_life_expectancy": 0.535,
        "freedom": 0.313,
        "generosity": 0.098,
        "trust_government_corruption": 0.22,
        "lat": 30.375321,
        "lon": 69.34511599999999
    },
    {
        "happiness_rank": 68,
        "country": "Russia",
        "happiness_score": 5.648,
        "economy_gdp_per_capita": 1.183,
        "family_info": 1.452,
        "health_life_expectancy": 0.726,
        "freedom": 0.334,
        "generosity": 0.031,
        "trust_government_corruption": 0.082,
        "lat": 61.52401,
        "lon": 105.318756
    },
    {
        "happiness_rank": 69,
        "country": "Philippines",
        "happiness_score": 5.631,
        "economy_gdp_per_capita": 0.807,
        "family_info": 1.293,
        "health_life_expectancy": 0.657,
        "freedom": 0.558,
        "generosity": 0.107,
        "trust_government_corruption": 0.117,
        "lat": 12.879721,
        "lon": 121.774017
    },
    {
        "happiness_rank": 70,
        "country": "Serbia",
        "happiness_score": 5.603,
        "economy_gdp_per_capita": 1.004,
        "family_info": 1.383,
        "health_life_expectancy": 0.854,
        "freedom": 0.282,
        "generosity": 0.039,
        "trust_government_corruption": 0.137,
        "lat": 44.016521,
        "lon": 21.005859
    },
    {
        "happiness_rank": 71,
        "country": "Moldova",
        "happiness_score": 5.529,
        "economy_gdp_per_capita": 0.685,
        "family_info": 1.328,
        "health_life_expectancy": 0.739,
        "freedom": 0.245,
        "generosity": 0,
        "trust_government_corruption": 0.181,
        "lat": 47.411631,
        "lon": 28.369885
    },
    {
        "happiness_rank": 72,
        "country": "Libya",
        "happiness_score": 5.525,
        "economy_gdp_per_capita": 1.044,
        "family_info": 1.303,
        "health_life_expectancy": 0.673,
        "freedom": 0.416,
        "generosity": 0.152,
        "trust_government_corruption": 0.133,
        "lat": 26.3351,
        "lon": 17.228331
    },
    {
        "happiness_rank": 73,
        "country": "Montenegro",
        "happiness_score": 5.523,
        "economy_gdp_per_capita": 1.051,
        "family_info": 1.361,
        "health_life_expectancy": 0.871,
        "freedom": 0.197,
        "generosity": 0.08,
        "trust_government_corruption": 0.142,
        "lat": 42.708678,
        "lon": 19.37439
    },
    {
        "happiness_rank": 74,
        "country": "Tajikistan",
        "happiness_score": 5.467,
        "economy_gdp_per_capita": 0.493,
        "family_info": 1.098,
        "health_life_expectancy": 0.718,
        "freedom": 0.389,
        "generosity": 0.144,
        "trust_government_corruption": 0.23,
        "lat": 38.861034,
        "lon": 71.276093
    },
    {
        "happiness_rank": 75,
        "country": "Croatia",
        "happiness_score": 5.432,
        "economy_gdp_per_capita": 1.155,
        "family_info": 1.266,
        "health_life_expectancy": 0.914,
        "freedom": 0.296,
        "generosity": 0.022,
        "trust_government_corruption": 0.119,
        "lat": 45.1,
        "lon": 15.2
    },
    {
        "happiness_rank": 76,
        "country": "Hong Kong",
        "happiness_score": 5.43,
        "economy_gdp_per_capita": 1.438,
        "family_info": 1.277,
        "health_life_expectancy": 1.122,
        "freedom": 0.44,
        "generosity": 0.287,
        "trust_government_corruption": 0.258,
        "lat": 22.3193039,
        "lon": 114.1693611
    },
    {
        "happiness_rank": 77,
        "country": "Dominican Republic",
        "happiness_score": 5.425,
        "economy_gdp_per_capita": 1.015,
        "family_info": 1.401,
        "health_life_expectancy": 0.779,
        "freedom": 0.497,
        "generosity": 0.101,
        "trust_government_corruption": 0.113,
        "lat": 18.735693,
        "lon": -70.162651
    },
    {
        "happiness_rank": 78,
        "country": "Bosnia and Herzegovina",
        "happiness_score": 5.386,
        "economy_gdp_per_capita": 0.945,
        "family_info": 1.212,
        "health_life_expectancy": 0.845,
        "freedom": 0.212,
        "generosity": 0.006,
        "trust_government_corruption": 0.263,
        "lat": 43.915886,
        "lon": 17.679076
    },
    {
        "happiness_rank": 80,
        "country": "Malaysia",
        "happiness_score": 5.339,
        "economy_gdp_per_capita": 1.221,
        "family_info": 1.171,
        "health_life_expectancy": 0.828,
        "freedom": 0.508,
        "generosity": 0.024,
        "trust_government_corruption": 0.26,
        "lat": 4.210484,
        "lon": 101.975766
    },
    {
        "happiness_rank": 81,
        "country": "Belarus",
        "happiness_score": 5.323,
        "economy_gdp_per_capita": 1.067,
        "family_info": 1.465,
        "health_life_expectancy": 0.789,
        "freedom": 0.235,
        "generosity": 0.142,
        "trust_government_corruption": 0.094,
        "lat": 53.709807,
        "lon": 27.953389
    },
    {
        "happiness_rank": 82,
        "country": "Greece",
        "happiness_score": 5.287,
        "economy_gdp_per_capita": 1.181,
        "family_info": 1.156,
        "health_life_expectancy": 0.999,
        "freedom": 0.067,
        "generosity": 0.034,
        "trust_government_corruption": 0,
        "lat": 39.074208,
        "lon": 21.824312
    },
    {
        "happiness_rank": 83,
        "country": "Mongolia",
        "happiness_score": 5.285,
        "economy_gdp_per_capita": 0.948,
        "family_info": 1.531,
        "health_life_expectancy": 0.667,
        "freedom": 0.317,
        "generosity": 0.038,
        "trust_government_corruption": 0.235,
        "lat": 46.862496,
        "lon": 103.846656
    },
    {
        "happiness_rank": 84,
        "country": "North Macedonia",
        "happiness_score": 5.274,
        "economy_gdp_per_capita": 0.983,
        "family_info": 1.294,
        "health_life_expectancy": 0.838,
        "freedom": 0.345,
        "generosity": 0.034,
        "trust_government_corruption": 0.185,
        "lat": 41.608635,
        "lon": 21.745275
    },
    {
        "happiness_rank": 85,
        "country": "Nigeria",
        "happiness_score": 5.265,
        "economy_gdp_per_capita": 0.696,
        "family_info": 1.111,
        "health_life_expectancy": 0.245,
        "freedom": 0.426,
        "generosity": 0.041,
        "trust_government_corruption": 0.215,
        "lat": 9.081999,
        "lon": 8.675277
    },
    {
        "happiness_rank": 86,
        "country": "Kyrgyzstan",
        "happiness_score": 5.261,
        "economy_gdp_per_capita": 0.551,
        "family_info": 1.438,
        "health_life_expectancy": 0.723,
        "freedom": 0.508,
        "generosity": 0.023,
        "trust_government_corruption": 0.3,
        "lat": 41.20438,
        "lon": 74.766098
    },
    {
        "happiness_rank": 87,
        "country": "Turkmenistan",
        "happiness_score": 5.247,
        "economy_gdp_per_capita": 1.052,
        "family_info": 1.538,
        "health_life_expectancy": 0.657,
        "freedom": 0.394,
        "generosity": 0.028,
        "trust_government_corruption": 0.244,
        "lat": 38.969719,
        "lon": 59.556278
    },
    {
        "happiness_rank": 88,
        "country": "Algeria",
        "happiness_score": 5.211,
        "economy_gdp_per_capita": 1.002,
        "family_info": 1.16,
        "health_life_expectancy": 0.785,
        "freedom": 0.086,
        "generosity": 0.114,
        "trust_government_corruption": 0.073,
        "lat": 28.033886,
        "lon": 1.659626
    },
    {
        "happiness_rank": 89,
        "country": "Morocco",
        "happiness_score": 5.208,
        "economy_gdp_per_capita": 0.801,
        "family_info": 0.782,
        "health_life_expectancy": 0.782,
        "freedom": 0.418,
        "generosity": 0.076,
        "trust_government_corruption": 0.036,
        "lat": 31.791702,
        "lon": -7.092619999999999
    },
    {
        "happiness_rank": 90,
        "country": "Azerbaijan",
        "happiness_score": 5.208,
        "economy_gdp_per_capita": 1.043,
        "family_info": 1.147,
        "health_life_expectancy": 0.769,
        "freedom": 0.351,
        "generosity": 0.182,
        "trust_government_corruption": 0.035,
        "lat": 40.143105,
        "lon": 47.576927
    },
    {
        "happiness_rank": 91,
        "country": "Lebanon",
        "happiness_score": 5.197,
        "economy_gdp_per_capita": 0.987,
        "family_info": 1.224,
        "health_life_expectancy": 0.815,
        "freedom": 0.216,
        "generosity": 0.027,
        "trust_government_corruption": 0.166,
        "lat": 33.854721,
        "lon": 35.862285
    },
    {
        "happiness_rank": 92,
        "country": "Indonesia",
        "happiness_score": 5.192,
        "economy_gdp_per_capita": 0.931,
        "family_info": 1.203,
        "health_life_expectancy": 0.66,
        "freedom": 0.491,
        "generosity": 0.028,
        "trust_government_corruption": 0.498,
        "lat": -0.789275,
        "lon": 113.921327
    },
    {
        "happiness_rank": 93,
        "country": "China",
        "happiness_score": 5.191,
        "economy_gdp_per_capita": 1.029,
        "family_info": 1.125,
        "health_life_expectancy": 0.893,
        "freedom": 0.521,
        "generosity": 0.1,
        "trust_government_corruption": 0.058,
        "lat": 35.86166,
        "lon": 104.195397
    },
    {
        "happiness_rank": 94,
        "country": "Vietnam",
        "happiness_score": 5.175,
        "economy_gdp_per_capita": 0.741,
        "family_info": 1.346,
        "health_life_expectancy": 0.851,
        "freedom": 0.543,
        "generosity": 0.073,
        "trust_government_corruption": 0.147,
        "lat": 14.058324,
        "lon": 108.277199
    },
    {
        "happiness_rank": 95,
        "country": "Bhutan",
        "happiness_score": 5.082,
        "economy_gdp_per_capita": 0.813,
        "family_info": 1.321,
        "health_life_expectancy": 0.604,
        "freedom": 0.457,
        "generosity": 0.167,
        "trust_government_corruption": 0.37,
        "lat": 27.514162,
        "lon": 90.433601
    },
    {
        "happiness_rank": 96,
        "country": "Cameroon",
        "happiness_score": 5.044,
        "economy_gdp_per_capita": 0.549,
        "family_info": 0.91,
        "health_life_expectancy": 0.331,
        "freedom": 0.381,
        "generosity": 0.037,
        "trust_government_corruption": 0.187,
        "lat": 7.369721999999999,
        "lon": 12.354722
    },
    {
        "happiness_rank": 97,
        "country": "Bulgaria",
        "happiness_score": 5.011,
        "economy_gdp_per_capita": 1.092,
        "family_info": 1.513,
        "health_life_expectancy": 0.815,
        "freedom": 0.311,
        "generosity": 0.004,
        "trust_government_corruption": 0.081,
        "lat": 42.733883,
        "lon": 25.48583
    },
    {
        "happiness_rank": 98,
        "country": "Ghana",
        "happiness_score": 4.996,
        "economy_gdp_per_capita": 0.611,
        "family_info": 0.868,
        "health_life_expectancy": 0.486,
        "freedom": 0.381,
        "generosity": 0.04,
        "trust_government_corruption": 0.245,
        "lat": 7.946527,
        "lon": -1.023194
    },
    {
        "happiness_rank": 100,
        "country": "Nepal",
        "happiness_score": 4.913,
        "economy_gdp_per_capita": 0.446,
        "family_info": 1.226,
        "health_life_expectancy": 0.677,
        "freedom": 0.439,
        "generosity": 0.089,
        "trust_government_corruption": 0.285,
        "lat": 28.394857,
        "lon": 84.12400799999999
    },
    {
        "happiness_rank": 102,
        "country": "Benin",
        "happiness_score": 4.883,
        "economy_gdp_per_capita": 0.393,
        "family_info": 0.437,
        "health_life_expectancy": 0.397,
        "freedom": 0.349,
        "generosity": 0.082,
        "trust_government_corruption": 0.175,
        "lat": 9.30769,
        "lon": 2.315834
    },
    {
        "happiness_rank": 104,
        "country": "Gabon",
        "happiness_score": 4.799,
        "economy_gdp_per_capita": 1.057,
        "family_info": 1.183,
        "health_life_expectancy": 0.571,
        "freedom": 0.295,
        "generosity": 0.055,
        "trust_government_corruption": 0.043,
        "lat": -0.803689,
        "lon": 11.609444
    },
    {
        "happiness_rank": 105,
        "country": "Laos",
        "happiness_score": 4.796,
        "economy_gdp_per_capita": 0.764,
        "family_info": 1.03,
        "health_life_expectancy": 0.551,
        "freedom": 0.547,
        "generosity": 0.164,
        "trust_government_corruption": 0.266,
        "lat": 19.85627,
        "lon": 102.495496
    },
    {
        "happiness_rank": 106,
        "country": "South Africa",
        "happiness_score": 4.722,
        "economy_gdp_per_capita": 0.96,
        "family_info": 1.351,
        "health_life_expectancy": 0.469,
        "freedom": 0.389,
        "generosity": 0.055,
        "trust_government_corruption": 0.13,
        "lat": -30.559482,
        "lon": 22.937506
    },
    {
        "happiness_rank": 107,
        "country": "Albania",
        "happiness_score": 4.719,
        "economy_gdp_per_capita": 0.947,
        "family_info": 0.848,
        "health_life_expectancy": 0.874,
        "freedom": 0.383,
        "generosity": 0.027,
        "trust_government_corruption": 0.178,
        "lat": 41.153332,
        "lon": 20.168331
    },
    {
        "happiness_rank": 108,
        "country": "Venezuela",
        "happiness_score": 4.707,
        "economy_gdp_per_capita": 0.96,
        "family_info": 1.427,
        "health_life_expectancy": 0.805,
        "freedom": 0.154,
        "generosity": 0.047,
        "trust_government_corruption": 0.064,
        "lat": 6.42375,
        "lon": -66.58973
    },
    {
        "happiness_rank": 109,
        "country": "Cambodia",
        "happiness_score": 4.7,
        "economy_gdp_per_capita": 0.574,
        "family_info": 1.122,
        "health_life_expectancy": 0.637,
        "freedom": 0.609,
        "generosity": 0.062,
        "trust_government_corruption": 0.232,
        "lat": 12.565679,
        "lon": 104.990963
    },
    {
        "happiness_rank": 111,
        "country": "Senegal",
        "happiness_score": 4.681,
        "economy_gdp_per_capita": 0.45,
        "family_info": 1.134,
        "health_life_expectancy": 0.571,
        "freedom": 0.292,
        "generosity": 0.072,
        "trust_government_corruption": 0.153,
        "lat": 14.497401,
        "lon": -14.452362
    },
    {
        "happiness_rank": 112,
        "country": "Somalia",
        "happiness_score": 4.668,
        "economy_gdp_per_capita": 0,
        "family_info": 0.698,
        "health_life_expectancy": 0.268,
        "freedom": 0.559,
        "generosity": 0.27,
        "trust_government_corruption": 0.243,
        "lat": 5.152149,
        "lon": 46.199616
    },
    {
        "happiness_rank": 113,
        "country": "Namibia",
        "happiness_score": 4.639,
        "economy_gdp_per_capita": 0.879,
        "family_info": 1.313,
        "health_life_expectancy": 0.477,
        "freedom": 0.401,
        "generosity": 0.056,
        "trust_government_corruption": 0.07,
        "lat": -22.95764,
        "lon": 18.49041
    },
    {
        "happiness_rank": 114,
        "country": "Niger",
        "happiness_score": 4.628,
        "economy_gdp_per_capita": 0.138,
        "family_info": 0.774,
        "health_life_expectancy": 0.366,
        "freedom": 0.318,
        "generosity": 0.102,
        "trust_government_corruption": 0.188,
        "lat": 17.607789,
        "lon": 8.081666
    },
    {
        "happiness_rank": 115,
        "country": "Burkina Faso",
        "happiness_score": 4.587,
        "economy_gdp_per_capita": 0.331,
        "family_info": 1.056,
        "health_life_expectancy": 0.38,
        "freedom": 0.255,
        "generosity": 0.113,
        "trust_government_corruption": 0.177,
        "lat": 12.238333,
        "lon": -1.561593
    },
    {
        "happiness_rank": 116,
        "country": "Armenia",
        "happiness_score": 4.559,
        "economy_gdp_per_capita": 0.85,
        "family_info": 1.055,
        "health_life_expectancy": 0.815,
        "freedom": 0.283,
        "generosity": 0.064,
        "trust_government_corruption": 0.095,
        "lat": 40.069099,
        "lon": 45.038189
    },
    {
        "happiness_rank": 117,
        "country": "Iran",
        "happiness_score": 4.548,
        "economy_gdp_per_capita": 1.1,
        "family_info": 0.842,
        "health_life_expectancy": 0.785,
        "freedom": 0.305,
        "generosity": 0.125,
        "trust_government_corruption": 0.27,
        "lat": 32.427908,
        "lon": 53.688046
    },
    {
        "happiness_rank": 118,
        "country": "Guinea",
        "happiness_score": 4.534,
        "economy_gdp_per_capita": 0.38,
        "family_info": 0.829,
        "health_life_expectancy": 0.375,
        "freedom": 0.332,
        "generosity": 0.086,
        "trust_government_corruption": 0.207,
        "lat": 9.945587,
        "lon": -9.696645
    },
    {
        "happiness_rank": 119,
        "country": "Georgia",
        "happiness_score": 4.519,
        "economy_gdp_per_capita": 0.886,
        "family_info": 0.666,
        "health_life_expectancy": 0.752,
        "freedom": 0.346,
        "generosity": 0.164,
        "trust_government_corruption": 0.043,
        "lat": 32.1656221,
        "lon": -82.9000751
    },
    {
        "happiness_rank": 121,
        "country": "Kenya",
        "happiness_score": 4.509,
        "economy_gdp_per_capita": 0.512,
        "family_info": 0.983,
        "health_life_expectancy": 0.581,
        "freedom": 0.431,
        "generosity": 0.053,
        "trust_government_corruption": 0.372,
        "lat": -0.023559,
        "lon": 37.906193
    },
    {
        "happiness_rank": 122,
        "country": "Mauritania",
        "happiness_score": 4.49,
        "economy_gdp_per_capita": 0.57,
        "family_info": 1.167,
        "health_life_expectancy": 0.489,
        "freedom": 0.066,
        "generosity": 0.088,
        "trust_government_corruption": 0.106,
        "lat": 21.00789,
        "lon": -10.940835
    },
    {
        "happiness_rank": 123,
        "country": "Mozambique",
        "happiness_score": 4.466,
        "economy_gdp_per_capita": 0.204,
        "family_info": 0.986,
        "health_life_expectancy": 0.39,
        "freedom": 0.494,
        "generosity": 0.138,
        "trust_government_corruption": 0.197,
        "lat": -18.665695,
        "lon": 35.529562
    },
    {
        "happiness_rank": 124,
        "country": "Tunisia",
        "happiness_score": 4.461,
        "economy_gdp_per_capita": 0.921,
        "family_info": 1,
        "health_life_expectancy": 0.815,
        "freedom": 0.167,
        "generosity": 0.055,
        "trust_government_corruption": 0.059,
        "lat": 33.886917,
        "lon": 9.537499
    },
    {
        "happiness_rank": 125,
        "country": "Bangladesh",
        "happiness_score": 4.456,
        "economy_gdp_per_capita": 0.562,
        "family_info": 0.928,
        "health_life_expectancy": 0.723,
        "freedom": 0.527,
        "generosity": 0.143,
        "trust_government_corruption": 0.166,
        "lat": 23.684994,
        "lon": 90.356331
    },
    {
        "happiness_rank": 126,
        "country": "Iraq",
        "happiness_score": 4.437,
        "economy_gdp_per_capita": 1.043,
        "family_info": 0.98,
        "health_life_expectancy": 0.574,
        "freedom": 0.241,
        "generosity": 0.089,
        "trust_government_corruption": 0.148,
        "lat": 33.223191,
        "lon": 43.679291
    },
    {
        "happiness_rank": 128,
        "country": "Mali",
        "happiness_score": 4.39,
        "economy_gdp_per_capita": 0.385,
        "family_info": 1.105,
        "health_life_expectancy": 0.308,
        "freedom": 0.327,
        "generosity": 0.052,
        "trust_government_corruption": 0.153,
        "lat": 17.570692,
        "lon": -3.996166
    },
    {
        "happiness_rank": 129,
        "country": "Sierra Leone",
        "happiness_score": 4.374,
        "economy_gdp_per_capita": 0.268,
        "family_info": 0.841,
        "health_life_expectancy": 0.242,
        "freedom": 0.309,
        "generosity": 0.045,
        "trust_government_corruption": 0.252,
        "lat": 8.460555,
        "lon": -11.779889
    },
    {
        "happiness_rank": 130,
        "country": "Sri Lanka",
        "happiness_score": 4.366,
        "economy_gdp_per_capita": 0.949,
        "family_info": 1.265,
        "health_life_expectancy": 0.831,
        "freedom": 0.47,
        "generosity": 0.047,
        "trust_government_corruption": 0.244,
        "lat": 7.873053999999999,
        "lon": 80.77179699999999
    },
    {
        "happiness_rank": 132,
        "country": "Chad",
        "happiness_score": 4.35,
        "economy_gdp_per_capita": 0.35,
        "family_info": 0.766,
        "health_life_expectancy": 0.192,
        "freedom": 0.174,
        "generosity": 0.078,
        "trust_government_corruption": 0.198,
        "lat": 15.454166,
        "lon": 18.732207
    },
    {
        "happiness_rank": 133,
        "country": "Ukraine",
        "happiness_score": 4.332,
        "economy_gdp_per_capita": 0.82,
        "family_info": 1.39,
        "health_life_expectancy": 0.739,
        "freedom": 0.178,
        "generosity": 0.01,
        "trust_government_corruption": 0.187,
        "lat": 48.379433,
        "lon": 31.16558
    },
    {
        "happiness_rank": 134,
        "country": "Ethiopia",
        "happiness_score": 4.286,
        "economy_gdp_per_capita": 0.336,
        "family_info": 1.033,
        "health_life_expectancy": 0.532,
        "freedom": 0.344,
        "generosity": 0.1,
        "trust_government_corruption": 0.209,
        "lat": 9.145,
        "lon": 40.489673
    },
    {
        "happiness_rank": 136,
        "country": "Uganda",
        "happiness_score": 4.189,
        "economy_gdp_per_capita": 0.332,
        "family_info": 1.069,
        "health_life_expectancy": 0.443,
        "freedom": 0.356,
        "generosity": 0.06,
        "trust_government_corruption": 0.252,
        "lat": 1.373333,
        "lon": 32.290275
    },
    {
        "happiness_rank": 137,
        "country": "Egypt",
        "happiness_score": 4.166,
        "economy_gdp_per_capita": 0.913,
        "family_info": 1.039,
        "health_life_expectancy": 0.644,
        "freedom": 0.241,
        "generosity": 0.067,
        "trust_government_corruption": 0.076,
        "lat": 26.820553,
        "lon": 30.802498
    },
    {
        "happiness_rank": 138,
        "country": "Zambia",
        "happiness_score": 4.107,
        "economy_gdp_per_capita": 0.578,
        "family_info": 1.058,
        "health_life_expectancy": 0.426,
        "freedom": 0.431,
        "generosity": 0.087,
        "trust_government_corruption": 0.247,
        "lat": -13.133897,
        "lon": 27.849332
    },
    {
        "happiness_rank": 139,
        "country": "Togo",
        "happiness_score": 4.085,
        "economy_gdp_per_capita": 0.275,
        "family_info": 0.572,
        "health_life_expectancy": 0.41,
        "freedom": 0.293,
        "generosity": 0.085,
        "trust_government_corruption": 0.177,
        "lat": 8.619543,
        "lon": 0.824782
    },
    {
        "happiness_rank": 140,
        "country": "India",
        "happiness_score": 4.015,
        "economy_gdp_per_capita": 0.755,
        "family_info": 0.765,
        "health_life_expectancy": 0.588,
        "freedom": 0.498,
        "generosity": 0.085,
        "trust_government_corruption": 0.2,
        "lat": 20.593684,
        "lon": 78.96288
    },
    {
        "happiness_rank": 141,
        "country": "Liberia",
        "happiness_score": 3.975,
        "economy_gdp_per_capita": 0.073,
        "family_info": 0.922,
        "health_life_expectancy": 0.443,
        "freedom": 0.37,
        "generosity": 0.033,
        "trust_government_corruption": 0.233,
        "lat": 6.428055,
        "lon": -9.429499000000002
    },
    {
        "happiness_rank": 142,
        "country": "Comoros",
        "happiness_score": 3.973,
        "economy_gdp_per_capita": 0.274,
        "family_info": 0.757,
        "health_life_expectancy": 0.505,
        "freedom": 0.142,
        "generosity": 0.078,
        "trust_government_corruption": 0.275,
        "lat": -11.6455,
        "lon": 43.3333
    },
    {
        "happiness_rank": 143,
        "country": "Madagascar",
        "happiness_score": 3.933,
        "economy_gdp_per_capita": 0.274,
        "family_info": 0.916,
        "health_life_expectancy": 0.555,
        "freedom": 0.148,
        "generosity": 0.041,
        "trust_government_corruption": 0.169,
        "lat": -18.766947,
        "lon": 46.869107
    },
    {
        "happiness_rank": 144,
        "country": "Lesotho",
        "happiness_score": 3.802,
        "economy_gdp_per_capita": 0.489,
        "family_info": 1.169,
        "health_life_expectancy": 0.168,
        "freedom": 0.359,
        "generosity": 0.093,
        "trust_government_corruption": 0.107,
        "lat": -29.609988,
        "lon": 28.233608
    },
    {
        "happiness_rank": 145,
        "country": "Burundi",
        "happiness_score": 3.775,
        "economy_gdp_per_capita": 0.046,
        "family_info": 0.447,
        "health_life_expectancy": 0.38,
        "freedom": 0.22,
        "generosity": 0.18,
        "trust_government_corruption": 0.176,
        "lat": -3.373056,
        "lon": 29.918886
    },
    {
        "happiness_rank": 146,
        "country": "Zimbabwe",
        "happiness_score": 3.663,
        "economy_gdp_per_capita": 0.366,
        "family_info": 1.114,
        "health_life_expectancy": 0.433,
        "freedom": 0.361,
        "generosity": 0.089,
        "trust_government_corruption": 0.151,
        "lat": -19.015438,
        "lon": 29.154857
    },
    {
        "happiness_rank": 147,
        "country": "Haiti",
        "happiness_score": 3.597,
        "economy_gdp_per_capita": 0.323,
        "family_info": 0.688,
        "health_life_expectancy": 0.449,
        "freedom": 0.026,
        "generosity": 0.11,
        "trust_government_corruption": 0.419,
        "lat": 18.971187,
        "lon": -72.285215
    },
    {
        "happiness_rank": 148,
        "country": "Botswana",
        "happiness_score": 3.488,
        "economy_gdp_per_capita": 1.041,
        "family_info": 1.145,
        "health_life_expectancy": 0.538,
        "freedom": 0.455,
        "generosity": 0.1,
        "trust_government_corruption": 0.025,
        "lat": -22.328474,
        "lon": 24.684866
    },
    {
        "happiness_rank": 149,
        "country": "Syria",
        "happiness_score": 3.462,
        "economy_gdp_per_capita": 0.619,
        "family_info": 0.378,
        "health_life_expectancy": 0.44,
        "freedom": 0.013,
        "generosity": 0.141,
        "trust_government_corruption": 0.331,
        "lat": 34.80207499999999,
        "lon": 38.996815
    },
    {
        "happiness_rank": 150,
        "country": "Malawi",
        "happiness_score": 3.41,
        "economy_gdp_per_capita": 0.191,
        "family_info": 0.56,
        "health_life_expectancy": 0.495,
        "freedom": 0.443,
        "generosity": 0.089,
        "trust_government_corruption": 0.218,
        "lat": -13.254308,
        "lon": 34.301525
    },
    {
        "happiness_rank": 151,
        "country": "Yemen",
        "happiness_score": 3.38,
        "economy_gdp_per_capita": 0.287,
        "family_info": 1.163,
        "health_life_expectancy": 0.463,
        "freedom": 0.143,
        "generosity": 0.077,
        "trust_government_corruption": 0.108,
        "lat": 15.552727,
        "lon": 48.516388
    },
    {
        "happiness_rank": 152,
        "country": "Rwanda",
        "happiness_score": 3.334,
        "economy_gdp_per_capita": 0.359,
        "family_info": 0.711,
        "health_life_expectancy": 0.614,
        "freedom": 0.555,
        "generosity": 0.411,
        "trust_government_corruption": 0.217,
        "lat": -1.940278,
        "lon": 29.873888
    },
    {
        "happiness_rank": 153,
        "country": "Tanzania",
        "happiness_score": 3.231,
        "economy_gdp_per_capita": 0.476,
        "family_info": 0.885,
        "health_life_expectancy": 0.499,
        "freedom": 0.417,
        "generosity": 0.147,
        "trust_government_corruption": 0.276,
        "lat": -6.369028,
        "lon": 34.888822
    },
    {
        "happiness_rank": 154,
        "country": "Afghanistan",
        "happiness_score": 3.203,
        "economy_gdp_per_capita": 0.35,
        "family_info": 0.517,
        "health_life_expectancy": 0.361,
        "freedom": 0,
        "generosity": 0.025,
        "trust_government_corruption": 0.158,
        "lat": 33.93911,
        "lon": 67.709953
    },
    {
        "happiness_rank": 155,
        "country": "Central African Republic",
        "happiness_score": 3.083,
        "economy_gdp_per_capita": 0.026,
        "family_info": 0,
        "health_life_expectancy": 0.105,
        "freedom": 0.225,
        "generosity": 0.035,
        "trust_government_corruption": 0.235,
        "lat": 6.611110999999999,
        "lon": 20.939444
    },
    {
        "happiness_rank": 156,
        "country": "South Sudan",
        "happiness_score": 2.853,
        "economy_gdp_per_capita": 0.306,
        "family_info": 0.575,
        "health_life_expectancy": 0.295,
        "freedom": 0.01,
        "generosity": 0.091,
        "trust_government_corruption": 0.202,
        "lat": 6.876991899999999,
        "lon": 31.3069788
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
    }).bindPopup(`<h1>${data[i].country}</h1><hr><body>Happiness Rank: ${data[i].happiness_rank}<br>Happiness Score: ${data[i].happiness_score}<br><b>GDP Per Capita: ${data[i].economy_gdp_per_capita}</b><br>Family Score: ${data[i].family_info}<br>Life Expectancy: ${data[i].health_life_expectancy}<br>Government Trust Score: ${data[i].trust_government_corruption}<br>Generosity Score: ${data[i].generosity}</body>`));
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
    }).bindPopup(`<h1>${data[i].country}</h1><hr><body>Happiness Rank: ${data[i].happiness_rank}<br>Happiness Score: ${data[i].happiness_score}<br><b>GDP Per Capita: ${data[i].economy_gdp_per_capita}</b><br>Family Score: ${data[i].family_info}<br>Life Expectancy: ${data[i].health_life_expectancy}<br>Government Trust Score: ${data[i].trust_government_corruption}<br>Generosity Score: ${data[i].generosity}</body>`));
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
    }).bindPopup(`<h1>${data[i].country}</h1><hr><body>Happiness Rank: ${data[i].happiness_rank}<br>Happiness Score: ${data[i].happiness_score}<br><b>GDP Per Capita: ${data[i].economy_gdp_per_capita}</b><br>Family Score: ${data[i].family_info}<br>Life Expectancy: ${data[i].health_life_expectancy}<br>Government Trust Score: ${data[i].trust_government_corruption}<br>Generosity Score: ${data[i].generosity}</body>`));
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
