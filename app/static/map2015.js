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
        "country": "Switzerland",
        "happiness_rank": 1,
        "happiness_score": 7.587,
        "economy_gdp_per_capita": 1.39651,
        "family_info": 1.34951,
        "health_life_expectancy": 0.94143,
        "freedom": 0.66557,
        "trust_government_corruption": 0.41978,
        "generosity": 0.29678,
        "lat": 46.818188,
        "lon": 8.227511999999999
    },
    {
        "country": "Iceland",
        "happiness_rank": 2,
        "happiness_score": 7.561,
        "economy_gdp_per_capita": 1.30232,
        "family_info": 1.40223,
        "health_life_expectancy": 0.94784,
        "freedom": 0.62877,
        "trust_government_corruption": 0.14145,
        "generosity": 0.4363,
        "lat": 64.963051,
        "lon": -19.020835
    },
    {
        "country": "Denmark",
        "happiness_rank": 3,
        "happiness_score": 7.527,
        "economy_gdp_per_capita": 1.32548,
        "family_info": 1.36058,
        "health_life_expectancy": 0.87464,
        "freedom": 0.64938,
        "trust_government_corruption": 0.48357,
        "generosity": 0.34139,
        "lat": 56.26392,
        "lon": 9.501785
    },
    {
        "country": "Norway",
        "happiness_rank": 4,
        "happiness_score": 7.522,
        "economy_gdp_per_capita": 1.459,
        "family_info": 1.33095,
        "health_life_expectancy": 0.88521,
        "freedom": 0.66973,
        "trust_government_corruption": 0.36503,
        "generosity": 0.34699,
        "lat": 60.47202399999999,
        "lon": 8.468945999999999
    },
    {
        "country": "Canada",
        "happiness_rank": 5,
        "happiness_score": 7.427,
        "economy_gdp_per_capita": 1.32629,
        "family_info": 1.32261,
        "health_life_expectancy": 0.90563,
        "freedom": 0.63297,
        "trust_government_corruption": 0.32957,
        "generosity": 0.45811,
        "lat": 56.130366,
        "lon": -106.346771
    },
    {
        "country": "Finland",
        "happiness_rank": 6,
        "happiness_score": 7.406,
        "economy_gdp_per_capita": 1.29025,
        "family_info": 1.31826,
        "health_life_expectancy": 0.88911,
        "freedom": 0.64169,
        "trust_government_corruption": 0.41372,
        "generosity": 0.23351,
        "lat": 61.92410999999999,
        "lon": 25.748151
    },
    {
        "country": "Netherlands",
        "happiness_rank": 7,
        "happiness_score": 7.378,
        "economy_gdp_per_capita": 1.32944,
        "family_info": 1.28017,
        "health_life_expectancy": 0.89284,
        "freedom": 0.61576,
        "trust_government_corruption": 0.31814,
        "generosity": 0.4761,
        "lat": 52.132633,
        "lon": 5.291265999999999
    },
    {
        "country": "Sweden",
        "happiness_rank": 8,
        "happiness_score": 7.364,
        "economy_gdp_per_capita": 1.33171,
        "family_info": 1.28907,
        "health_life_expectancy": 0.91087,
        "freedom": 0.6598,
        "trust_government_corruption": 0.43844,
        "generosity": 0.36262,
        "lat": 60.12816100000001,
        "lon": 18.643501
    },
    {
        "country": "New Zealand",
        "happiness_rank": 9,
        "happiness_score": 7.286,
        "economy_gdp_per_capita": 1.25018,
        "family_info": 1.31967,
        "health_life_expectancy": 0.90837,
        "freedom": 0.63938,
        "trust_government_corruption": 0.42922,
        "generosity": 0.47501,
        "lat": -40.900557,
        "lon": 174.885971
    },
    {
        "country": "Australia",
        "happiness_rank": 10,
        "happiness_score": 7.284,
        "economy_gdp_per_capita": 1.33358,
        "family_info": 1.30923,
        "health_life_expectancy": 0.93156,
        "freedom": 0.65124,
        "trust_government_corruption": 0.35637,
        "generosity": 0.43562,
        "lat": -25.274398,
        "lon": 133.775136
    },
    {
        "country": "Israel",
        "happiness_rank": 11,
        "happiness_score": 7.278,
        "economy_gdp_per_capita": 1.22857,
        "family_info": 1.22393,
        "health_life_expectancy": 0.91387,
        "freedom": 0.41319,
        "trust_government_corruption": 0.07785,
        "generosity": 0.33172,
        "lat": 31.046051,
        "lon": 34.851612
    },
    {
        "country": "Costa Rica",
        "happiness_rank": 12,
        "happiness_score": 7.226,
        "economy_gdp_per_capita": 0.95578,
        "family_info": 1.23788,
        "health_life_expectancy": 0.86027,
        "freedom": 0.63376,
        "trust_government_corruption": 0.10583,
        "generosity": 0.25497,
        "lat": 9.748917,
        "lon": -83.753428
    },
    {
        "country": "Austria",
        "happiness_rank": 13,
        "happiness_score": 7.2,
        "economy_gdp_per_capita": 1.33723,
        "family_info": 1.29704,
        "health_life_expectancy": 0.89042,
        "freedom": 0.62433,
        "trust_government_corruption": 0.18676,
        "generosity": 0.33088,
        "lat": 47.516231,
        "lon": 14.550072
    },
    {
        "country": "Mexico",
        "happiness_rank": 14,
        "happiness_score": 7.187,
        "economy_gdp_per_capita": 1.02054,
        "family_info": 0.91451,
        "health_life_expectancy": 0.81444,
        "freedom": 0.48181,
        "trust_government_corruption": 0.21312,
        "generosity": 0.14074,
        "lat": 23.634501,
        "lon": -102.552784
    },
    {
        "country": "United States",
        "happiness_rank": 15,
        "happiness_score": 7.119,
        "economy_gdp_per_capita": 1.39451,
        "family_info": 1.24711,
        "health_life_expectancy": 0.86179,
        "freedom": 0.54604,
        "trust_government_corruption": 0.1589,
        "generosity": 0.40105,
        "lat": 37.09024,
        "lon": -95.712891
    },
    {
        "country": "Brazil",
        "happiness_rank": 16,
        "happiness_score": 6.983,
        "economy_gdp_per_capita": 0.98124,
        "family_info": 1.23287,
        "health_life_expectancy": 0.69702,
        "freedom": 0.49049,
        "trust_government_corruption": 0.17521,
        "generosity": 0.14574,
        "lat": -14.235004,
        "lon": -51.92528
    },
    {
        "country": "Luxembourg",
        "happiness_rank": 17,
        "happiness_score": 6.946,
        "economy_gdp_per_capita": 1.56391,
        "family_info": 1.21963,
        "health_life_expectancy": 0.91894,
        "freedom": 0.61583,
        "trust_government_corruption": 0.37798,
        "generosity": 0.28034,
        "lat": 49.815273,
        "lon": 6.129582999999999
    },
    {
        "country": "Ireland",
        "happiness_rank": 18,
        "happiness_score": 6.94,
        "economy_gdp_per_capita": 1.33596,
        "family_info": 1.36948,
        "health_life_expectancy": 0.89533,
        "freedom": 0.61777,
        "trust_government_corruption": 0.28703,
        "generosity": 0.45901,
        "lat": 53.1423672,
        "lon": -7.692053599999999
    },
    {
        "country": "Belgium",
        "happiness_rank": 19,
        "happiness_score": 6.937,
        "economy_gdp_per_capita": 1.30782,
        "family_info": 1.28566,
        "health_life_expectancy": 0.89667,
        "freedom": 0.5845,
        "trust_government_corruption": 0.2254,
        "generosity": 0.2225,
        "lat": 50.503887,
        "lon": 4.469936
    },
    {
        "country": "United Arab Emirates",
        "happiness_rank": 20,
        "happiness_score": 6.901,
        "economy_gdp_per_capita": 1.42727,
        "family_info": 1.12575,
        "health_life_expectancy": 0.80925,
        "freedom": 0.64157,
        "trust_government_corruption": 0.38583,
        "generosity": 0.26428,
        "lat": 23.424076,
        "lon": 53.847818
    },
    {
        "country": "United Kingdom",
        "happiness_rank": 21,
        "happiness_score": 6.867,
        "economy_gdp_per_capita": 1.26637,
        "family_info": 1.28548,
        "health_life_expectancy": 0.90943,
        "freedom": 0.59625,
        "trust_government_corruption": 0.32067,
        "generosity": 0.51912,
        "lat": 55.378051,
        "lon": -3.435973
    },
    {
        "country": "Oman",
        "happiness_rank": 22,
        "happiness_score": 6.853,
        "economy_gdp_per_capita": 1.36011,
        "family_info": 1.08182,
        "health_life_expectancy": 0.76276,
        "freedom": 0.63274,
        "trust_government_corruption": 0.32524,
        "generosity": 0.21542,
        "lat": 21.4735329,
        "lon": 55.975413
    },
    {
        "country": "Venezuela",
        "happiness_rank": 23,
        "happiness_score": 6.81,
        "economy_gdp_per_capita": 1.04424,
        "family_info": 1.25596,
        "health_life_expectancy": 0.72052,
        "freedom": 0.42908,
        "trust_government_corruption": 0.11069,
        "generosity": 0.05841,
        "lat": 6.42375,
        "lon": -66.58973
    },
    {
        "country": "Singapore",
        "happiness_rank": 24,
        "happiness_score": 6.798,
        "economy_gdp_per_capita": 1.52186,
        "family_info": 1.02,
        "health_life_expectancy": 1.02525,
        "freedom": 0.54252,
        "trust_government_corruption": 0.4921,
        "generosity": 0.31105,
        "lat": 1.352083,
        "lon": 103.819836
    },
    {
        "country": "Panama",
        "happiness_rank": 25,
        "happiness_score": 6.786,
        "economy_gdp_per_capita": 1.06353,
        "family_info": 1.1985,
        "health_life_expectancy": 0.79661,
        "freedom": 0.5421,
        "trust_government_corruption": 0.0927,
        "generosity": 0.24434,
        "lat": 8.537981,
        "lon": -80.782127
    },
    {
        "country": "Germany",
        "happiness_rank": 26,
        "happiness_score": 6.75,
        "economy_gdp_per_capita": 1.32792,
        "family_info": 1.29937,
        "health_life_expectancy": 0.89186,
        "freedom": 0.61477,
        "trust_government_corruption": 0.21843,
        "generosity": 0.28214,
        "lat": 51.165691,
        "lon": 10.451526
    },
    {
        "country": "Chile",
        "happiness_rank": 27,
        "happiness_score": 6.67,
        "economy_gdp_per_capita": 1.10715,
        "family_info": 1.12447,
        "health_life_expectancy": 0.85857,
        "freedom": 0.44132,
        "trust_government_corruption": 0.12869,
        "generosity": 0.33363,
        "lat": -35.675147,
        "lon": -71.542969
    },
    {
        "country": "Qatar",
        "happiness_rank": 28,
        "happiness_score": 6.611,
        "economy_gdp_per_capita": 1.69042,
        "family_info": 1.0786,
        "health_life_expectancy": 0.79733,
        "freedom": 0.6404,
        "trust_government_corruption": 0.52208,
        "generosity": 0.32573,
        "lat": 25.354826,
        "lon": 51.183884
    },
    {
        "country": "France",
        "happiness_rank": 29,
        "happiness_score": 6.575,
        "economy_gdp_per_capita": 1.27778,
        "family_info": 1.26038,
        "health_life_expectancy": 0.94579,
        "freedom": 0.55011,
        "trust_government_corruption": 0.20646,
        "generosity": 0.12332,
        "lat": 46.227638,
        "lon": 2.213749
    },
    {
        "country": "Argentina",
        "happiness_rank": 30,
        "happiness_score": 6.574,
        "economy_gdp_per_capita": 1.05351,
        "family_info": 1.24823,
        "health_life_expectancy": 0.78723,
        "freedom": 0.44974,
        "trust_government_corruption": 0.08484,
        "generosity": 0.11451,
        "lat": -38.416097,
        "lon": -63.61667199999999
    },
    {
        "country": "Uruguay",
        "happiness_rank": 32,
        "happiness_score": 6.485,
        "economy_gdp_per_capita": 1.06166,
        "family_info": 1.2089,
        "health_life_expectancy": 0.8116,
        "freedom": 0.60362,
        "trust_government_corruption": 0.24558,
        "generosity": 0.2324,
        "lat": -32.522779,
        "lon": -55.765835
    },
    {
        "country": "Colombia",
        "happiness_rank": 33,
        "happiness_score": 6.477,
        "economy_gdp_per_capita": 0.91861,
        "family_info": 1.24018,
        "health_life_expectancy": 0.69077,
        "freedom": 0.53466,
        "trust_government_corruption": 0.0512,
        "generosity": 0.18401,
        "lat": 4.570868,
        "lon": -74.297333
    },
    {
        "country": "Thailand",
        "happiness_rank": 34,
        "happiness_score": 6.455,
        "economy_gdp_per_capita": 0.9669,
        "family_info": 1.26504,
        "health_life_expectancy": 0.7385,
        "freedom": 0.55664,
        "trust_government_corruption": 0.03187,
        "generosity": 0.5763,
        "lat": 15.870032,
        "lon": 100.992541
    },
    {
        "country": "Saudi Arabia",
        "happiness_rank": 35,
        "happiness_score": 6.411,
        "economy_gdp_per_capita": 1.39541,
        "family_info": 1.08393,
        "health_life_expectancy": 0.72025,
        "freedom": 0.31048,
        "trust_government_corruption": 0.32524,
        "generosity": 0.13706,
        "lat": 23.885942,
        "lon": 45.079162
    },
    {
        "country": "Spain",
        "happiness_rank": 36,
        "happiness_score": 6.329,
        "economy_gdp_per_capita": 1.23011,
        "family_info": 1.31379,
        "health_life_expectancy": 0.95562,
        "freedom": 0.45951,
        "trust_government_corruption": 0.06398,
        "generosity": 0.18227,
        "lat": 40.46366700000001,
        "lon": -3.74922
    },
    {
        "country": "Malta",
        "happiness_rank": 37,
        "happiness_score": 6.302,
        "economy_gdp_per_capita": 1.2074,
        "family_info": 1.30203,
        "health_life_expectancy": 0.88721,
        "freedom": 0.60365,
        "trust_government_corruption": 0.13586,
        "generosity": 0.51752,
        "lat": 35.937496,
        "lon": 14.375416
    },
    {
        "country": "Taiwan",
        "happiness_rank": 38,
        "happiness_score": 6.298,
        "economy_gdp_per_capita": 1.29098,
        "family_info": 1.07617,
        "health_life_expectancy": 0.8753,
        "freedom": 0.3974,
        "trust_government_corruption": 0.08129,
        "generosity": 0.25376,
        "lat": 23.69781,
        "lon": 120.960515
    },
    {
        "country": "Kuwait",
        "happiness_rank": 39,
        "happiness_score": 6.295,
        "economy_gdp_per_capita": 1.55422,
        "family_info": 1.16594,
        "health_life_expectancy": 0.72492,
        "freedom": 0.55499,
        "trust_government_corruption": 0.25609,
        "generosity": 0.16228,
        "lat": 29.31166,
        "lon": 47.481766
    },
    {
        "country": "Suriname",
        "happiness_rank": 40,
        "happiness_score": 6.269,
        "economy_gdp_per_capita": 0.99534,
        "family_info": 0.972,
        "health_life_expectancy": 0.6082,
        "freedom": 0.59657,
        "trust_government_corruption": 0.13633,
        "generosity": 0.16991,
        "lat": 3.919305,
        "lon": -56.027783
    },
    {
        "country": "Trinidad and Tobago",
        "happiness_rank": 41,
        "happiness_score": 6.168,
        "economy_gdp_per_capita": 1.21183,
        "family_info": 1.18354,
        "health_life_expectancy": 0.61483,
        "freedom": 0.55884,
        "trust_government_corruption": 0.0114,
        "generosity": 0.31844,
        "lat": 10.691803,
        "lon": -61.222503
    },
    {
        "country": "El Salvador",
        "happiness_rank": 42,
        "happiness_score": 6.13,
        "economy_gdp_per_capita": 0.76454,
        "family_info": 1.02507,
        "health_life_expectancy": 0.67737,
        "freedom": 0.4035,
        "trust_government_corruption": 0.11776,
        "generosity": 0.10692,
        "lat": 13.794185,
        "lon": -88.89653
    },
    {
        "country": "Guatemala",
        "happiness_rank": 43,
        "happiness_score": 6.123,
        "economy_gdp_per_capita": 0.74553,
        "family_info": 1.04356,
        "health_life_expectancy": 0.64425,
        "freedom": 0.57733,
        "trust_government_corruption": 0.09472,
        "generosity": 0.27489,
        "lat": 15.783471,
        "lon": -90.230759
    },
    {
        "country": "Uzbekistan",
        "happiness_rank": 44,
        "happiness_score": 6.003,
        "economy_gdp_per_capita": 0.63244,
        "family_info": 1.34043,
        "health_life_expectancy": 0.59772,
        "freedom": 0.65821,
        "trust_government_corruption": 0.30826,
        "generosity": 0.22837,
        "lat": 41.377491,
        "lon": 64.585262
    },
    {
        "country": "Slovakia",
        "happiness_rank": 45,
        "happiness_score": 5.995,
        "economy_gdp_per_capita": 1.16891,
        "family_info": 1.26999,
        "health_life_expectancy": 0.78902,
        "freedom": 0.31751,
        "trust_government_corruption": 0.03431,
        "generosity": 0.16893,
        "lat": 48.669026,
        "lon": 19.699024
    },
    {
        "country": "Japan",
        "happiness_rank": 46,
        "happiness_score": 5.987,
        "economy_gdp_per_capita": 1.27074,
        "family_info": 1.25712,
        "health_life_expectancy": 0.99111,
        "freedom": 0.49615,
        "trust_government_corruption": 0.1806,
        "generosity": 0.10705,
        "lat": 36.204824,
        "lon": 138.252924
    },
    {
        "country": "South Korea",
        "happiness_rank": 47,
        "happiness_score": 5.984,
        "economy_gdp_per_capita": 1.24461,
        "family_info": 0.95774,
        "health_life_expectancy": 0.96538,
        "freedom": 0.33208,
        "trust_government_corruption": 0.07857,
        "generosity": 0.18557,
        "lat": 35.907757,
        "lon": 127.766922
    },
    {
        "country": "Ecuador",
        "happiness_rank": 48,
        "happiness_score": 5.975,
        "economy_gdp_per_capita": 0.86402,
        "family_info": 0.99903,
        "health_life_expectancy": 0.79075,
        "freedom": 0.48574,
        "trust_government_corruption": 0.1809,
        "generosity": 0.11541,
        "lat": -1.831239,
        "lon": -78.18340599999999
    },
    {
        "country": "Bahrain",
        "happiness_rank": 49,
        "happiness_score": 5.96,
        "economy_gdp_per_capita": 1.32376,
        "family_info": 1.21624,
        "health_life_expectancy": 0.74716,
        "freedom": 0.45492,
        "trust_government_corruption": 0.306,
        "generosity": 0.17362,
        "lat": 26.0667,
        "lon": 50.5577
    },
    {
        "country": "Italy",
        "happiness_rank": 50,
        "happiness_score": 5.948,
        "economy_gdp_per_capita": 1.25114,
        "family_info": 1.19777,
        "health_life_expectancy": 0.95446,
        "freedom": 0.26236,
        "trust_government_corruption": 0.02901,
        "generosity": 0.22823,
        "lat": 41.87194,
        "lon": 12.56738
    },
    {
        "country": "Bolivia",
        "happiness_rank": 51,
        "happiness_score": 5.89,
        "economy_gdp_per_capita": 0.68133,
        "family_info": 0.97841,
        "health_life_expectancy": 0.5392,
        "freedom": 0.57414,
        "trust_government_corruption": 0.088,
        "generosity": 0.20536,
        "lat": -16.290154,
        "lon": -63.58865299999999
    },
    {
        "country": "Moldova",
        "happiness_rank": 52,
        "happiness_score": 5.889,
        "economy_gdp_per_capita": 0.59448,
        "family_info": 1.01528,
        "health_life_expectancy": 0.61826,
        "freedom": 0.32818,
        "trust_government_corruption": 0.01615,
        "generosity": 0.20951,
        "lat": 47.411631,
        "lon": 28.369885
    },
    {
        "country": "Paraguay",
        "happiness_rank": 53,
        "happiness_score": 5.878,
        "economy_gdp_per_capita": 0.75985,
        "family_info": 1.30477,
        "health_life_expectancy": 0.66098,
        "freedom": 0.53899,
        "trust_government_corruption": 0.08242,
        "generosity": 0.3424,
        "lat": -23.442503,
        "lon": -58.443832
    },
    {
        "country": "Kazakhstan",
        "happiness_rank": 54,
        "happiness_score": 5.855,
        "economy_gdp_per_capita": 1.12254,
        "family_info": 1.12241,
        "health_life_expectancy": 0.64368,
        "freedom": 0.51649,
        "trust_government_corruption": 0.08454,
        "generosity": 0.11827,
        "lat": 48.019573,
        "lon": 66.923684
    },
    {
        "country": "Slovenia",
        "happiness_rank": 55,
        "happiness_score": 5.848,
        "economy_gdp_per_capita": 1.18498,
        "family_info": 1.27385,
        "health_life_expectancy": 0.87337,
        "freedom": 0.60855,
        "trust_government_corruption": 0.03787,
        "generosity": 0.25328,
        "lat": 46.151241,
        "lon": 14.995463
    },
    {
        "country": "Lithuania",
        "happiness_rank": 56,
        "happiness_score": 5.833,
        "economy_gdp_per_capita": 1.14723,
        "family_info": 1.25745,
        "health_life_expectancy": 0.73128,
        "freedom": 0.21342,
        "trust_government_corruption": 0.01031,
        "generosity": 0.02641,
        "lat": 55.169438,
        "lon": 23.881275
    },
    {
        "country": "Nicaragua",
        "happiness_rank": 57,
        "happiness_score": 5.828,
        "economy_gdp_per_capita": 0.59325,
        "family_info": 1.14184,
        "health_life_expectancy": 0.74314,
        "freedom": 0.55475,
        "trust_government_corruption": 0.19317,
        "generosity": 0.27815,
        "lat": 12.865416,
        "lon": -85.207229
    },
    {
        "country": "Peru",
        "happiness_rank": 58,
        "happiness_score": 5.824,
        "economy_gdp_per_capita": 0.90019,
        "family_info": 0.97459,
        "health_life_expectancy": 0.73017,
        "freedom": 0.41496,
        "trust_government_corruption": 0.05989,
        "generosity": 0.14982,
        "lat": -9.189967,
        "lon": -75.015152
    },
    {
        "country": "Belarus",
        "happiness_rank": 59,
        "happiness_score": 5.813,
        "economy_gdp_per_capita": 1.03192,
        "family_info": 1.23289,
        "health_life_expectancy": 0.73608,
        "freedom": 0.37938,
        "trust_government_corruption": 0.1909,
        "generosity": 0.11046,
        "lat": 53.709807,
        "lon": 27.953389
    },
    {
        "country": "Poland",
        "happiness_rank": 60,
        "happiness_score": 5.791,
        "economy_gdp_per_capita": 1.12555,
        "family_info": 1.27948,
        "health_life_expectancy": 0.77903,
        "freedom": 0.53122,
        "trust_government_corruption": 0.04212,
        "generosity": 0.16759,
        "lat": 51.919438,
        "lon": 19.145136
    },
    {
        "country": "Malaysia",
        "happiness_rank": 61,
        "happiness_score": 5.77,
        "economy_gdp_per_capita": 1.12486,
        "family_info": 1.07023,
        "health_life_expectancy": 0.72394,
        "freedom": 0.53024,
        "trust_government_corruption": 0.10501,
        "generosity": 0.33075,
        "lat": 4.210484,
        "lon": 101.975766
    },
    {
        "country": "Croatia",
        "happiness_rank": 62,
        "happiness_score": 5.759,
        "economy_gdp_per_capita": 1.08254,
        "family_info": 0.79624,
        "health_life_expectancy": 0.78805,
        "freedom": 0.25883,
        "trust_government_corruption": 0.0243,
        "generosity": 0.05444,
        "lat": 45.1,
        "lon": 15.2
    },
    {
        "country": "Libya",
        "happiness_rank": 63,
        "happiness_score": 5.754,
        "economy_gdp_per_capita": 1.13145,
        "family_info": 1.11862,
        "health_life_expectancy": 0.7038,
        "freedom": 0.41668,
        "trust_government_corruption": 0.11023,
        "generosity": 0.18295,
        "lat": 26.3351,
        "lon": 17.228331
    },
    {
        "country": "Russia",
        "happiness_rank": 64,
        "happiness_score": 5.716,
        "economy_gdp_per_capita": 1.13764,
        "family_info": 1.23617,
        "health_life_expectancy": 0.66926,
        "freedom": 0.36679,
        "trust_government_corruption": 0.03005,
        "generosity": 0.00199,
        "lat": 61.52401,
        "lon": 105.318756
    },
    {
        "country": "Jamaica",
        "happiness_rank": 65,
        "happiness_score": 5.709,
        "economy_gdp_per_capita": 0.81038,
        "family_info": 1.15102,
        "health_life_expectancy": 0.68741,
        "freedom": 0.50442,
        "trust_government_corruption": 0.02299,
        "generosity": 0.2123,
        "lat": 18.109581,
        "lon": -77.297508
    },
    {
        "country": "Cyprus",
        "happiness_rank": 67,
        "happiness_score": 5.689,
        "economy_gdp_per_capita": 1.20813,
        "family_info": 0.89318,
        "health_life_expectancy": 0.92356,
        "freedom": 0.40672,
        "trust_government_corruption": 0.06146,
        "generosity": 0.30638,
        "lat": 35.126413,
        "lon": 33.429859
    },
    {
        "country": "Algeria",
        "happiness_rank": 68,
        "happiness_score": 5.605,
        "economy_gdp_per_capita": 0.93929,
        "family_info": 1.07772,
        "health_life_expectancy": 0.61766,
        "freedom": 0.28579,
        "trust_government_corruption": 0.17383,
        "generosity": 0.07822,
        "lat": 28.033886,
        "lon": 1.659626
    },
    {
        "country": "Kosovo",
        "happiness_rank": 69,
        "happiness_score": 5.589,
        "economy_gdp_per_capita": 0.80148,
        "family_info": 0.81198,
        "health_life_expectancy": 0.63132,
        "freedom": 0.24749,
        "trust_government_corruption": 0.04741,
        "generosity": 0.2831,
        "lat": 42.6026359,
        "lon": 20.902977
    },
    {
        "country": "Turkmenistan",
        "happiness_rank": 70,
        "happiness_score": 5.548,
        "economy_gdp_per_capita": 0.95847,
        "family_info": 1.22668,
        "health_life_expectancy": 0.53886,
        "freedom": 0.4761,
        "trust_government_corruption": 0.30844,
        "generosity": 0.16979,
        "lat": 38.969719,
        "lon": 59.556278
    },
    {
        "country": "Mauritius",
        "happiness_rank": 71,
        "happiness_score": 5.477,
        "economy_gdp_per_capita": 1.00761,
        "family_info": 0.98521,
        "health_life_expectancy": 0.7095,
        "freedom": 0.56066,
        "trust_government_corruption": 0.07521,
        "generosity": 0.37744,
        "lat": -20.348404,
        "lon": 57.55215200000001
    },
    {
        "country": "Hong Kong",
        "happiness_rank": 72,
        "happiness_score": 5.474,
        "economy_gdp_per_capita": 1.38604,
        "family_info": 1.05818,
        "health_life_expectancy": 1.01328,
        "freedom": 0.59608,
        "trust_government_corruption": 0.37124,
        "generosity": 0.39478,
        "lat": 22.3193039,
        "lon": 114.1693611
    },
    {
        "country": "Estonia",
        "happiness_rank": 73,
        "happiness_score": 5.429,
        "economy_gdp_per_capita": 1.15174,
        "family_info": 1.22791,
        "health_life_expectancy": 0.77361,
        "freedom": 0.44888,
        "trust_government_corruption": 0.15184,
        "generosity": 0.0868,
        "lat": 58.595272,
        "lon": 25.013607
    },
    {
        "country": "Indonesia",
        "happiness_rank": 74,
        "happiness_score": 5.399,
        "economy_gdp_per_capita": 0.82827,
        "family_info": 1.08708,
        "health_life_expectancy": 0.63793,
        "freedom": 0.46611,
        "trust_government_corruption": 0,
        "generosity": 0.51535,
        "lat": -0.789275,
        "lon": 113.921327
    },
    {
        "country": "Vietnam",
        "happiness_rank": 75,
        "happiness_score": 5.36,
        "economy_gdp_per_capita": 0.63216,
        "family_info": 0.91226,
        "health_life_expectancy": 0.74676,
        "freedom": 0.59444,
        "trust_government_corruption": 0.10441,
        "generosity": 0.1686,
        "lat": 14.058324,
        "lon": 108.277199
    },
    {
        "country": "Kyrgyzstan",
        "happiness_rank": 77,
        "happiness_score": 5.286,
        "economy_gdp_per_capita": 0.47428,
        "family_info": 1.15115,
        "health_life_expectancy": 0.65088,
        "freedom": 0.43477,
        "trust_government_corruption": 0.04232,
        "generosity": 0.3003,
        "lat": 41.20438,
        "lon": 74.766098
    },
    {
        "country": "Nigeria",
        "happiness_rank": 78,
        "happiness_score": 5.268,
        "economy_gdp_per_capita": 0.65435,
        "family_info": 0.90432,
        "health_life_expectancy": 0.16007,
        "freedom": 0.34334,
        "trust_government_corruption": 0.0403,
        "generosity": 0.27233,
        "lat": 9.081999,
        "lon": 8.675277
    },
    {
        "country": "Bhutan",
        "happiness_rank": 79,
        "happiness_score": 5.253,
        "economy_gdp_per_capita": 0.77042,
        "family_info": 1.10395,
        "health_life_expectancy": 0.57407,
        "freedom": 0.53206,
        "trust_government_corruption": 0.15445,
        "generosity": 0.47998,
        "lat": 27.514162,
        "lon": 90.433601
    },
    {
        "country": "Azerbaijan",
        "happiness_rank": 80,
        "happiness_score": 5.212,
        "economy_gdp_per_capita": 1.02389,
        "family_info": 0.93793,
        "health_life_expectancy": 0.64045,
        "freedom": 0.3703,
        "trust_government_corruption": 0.16065,
        "generosity": 0.07799,
        "lat": 40.143105,
        "lon": 47.576927
    },
    {
        "country": "Pakistan",
        "happiness_rank": 81,
        "happiness_score": 5.194,
        "economy_gdp_per_capita": 0.59543,
        "family_info": 0.41411,
        "health_life_expectancy": 0.51466,
        "freedom": 0.12102,
        "trust_government_corruption": 0.10464,
        "generosity": 0.33671,
        "lat": 30.375321,
        "lon": 69.34511599999999
    },
    {
        "country": "Montenegro",
        "happiness_rank": 82,
        "happiness_score": 5.192,
        "economy_gdp_per_capita": 0.97438,
        "family_info": 0.90557,
        "health_life_expectancy": 0.72521,
        "freedom": 0.1826,
        "trust_government_corruption": 0.14296,
        "generosity": 0.1614,
        "lat": 42.708678,
        "lon": 19.37439
    },
    {
        "country": "China",
        "happiness_rank": 84,
        "happiness_score": 5.14,
        "economy_gdp_per_capita": 0.89012,
        "family_info": 0.94675,
        "health_life_expectancy": 0.81658,
        "freedom": 0.51697,
        "trust_government_corruption": 0.02781,
        "generosity": 0.08185,
        "lat": 35.86166,
        "lon": 104.195397
    },
    {
        "country": "Zambia",
        "happiness_rank": 85,
        "happiness_score": 5.129,
        "economy_gdp_per_capita": 0.47038,
        "family_info": 0.91612,
        "health_life_expectancy": 0.29924,
        "freedom": 0.48827,
        "trust_government_corruption": 0.12468,
        "generosity": 0.19591,
        "lat": -13.133897,
        "lon": 27.849332
    },
    {
        "country": "Romania",
        "happiness_rank": 86,
        "happiness_score": 5.124,
        "economy_gdp_per_capita": 1.04345,
        "family_info": 0.88588,
        "health_life_expectancy": 0.7689,
        "freedom": 0.35068,
        "trust_government_corruption": 0.00649,
        "generosity": 0.13748,
        "lat": 45.943161,
        "lon": 24.96676
    },
    {
        "country": "Serbia",
        "happiness_rank": 87,
        "happiness_score": 5.123,
        "economy_gdp_per_capita": 0.92053,
        "family_info": 1.00964,
        "health_life_expectancy": 0.74836,
        "freedom": 0.20107,
        "trust_government_corruption": 0.02617,
        "generosity": 0.19231,
        "lat": 44.016521,
        "lon": 21.005859
    },
    {
        "country": "Portugal",
        "happiness_rank": 88,
        "happiness_score": 5.102,
        "economy_gdp_per_capita": 1.15991,
        "family_info": 1.13935,
        "health_life_expectancy": 0.87519,
        "freedom": 0.51469,
        "trust_government_corruption": 0.01078,
        "generosity": 0.13719,
        "lat": 39.39987199999999,
        "lon": -8.224454
    },
    {
        "country": "Latvia",
        "happiness_rank": 89,
        "happiness_score": 5.098,
        "economy_gdp_per_capita": 1.11312,
        "family_info": 1.09562,
        "health_life_expectancy": 0.72437,
        "freedom": 0.29671,
        "trust_government_corruption": 0.06332,
        "generosity": 0.18226,
        "lat": 56.879635,
        "lon": 24.603189
    },
    {
        "country": "Philippines",
        "happiness_rank": 90,
        "happiness_score": 5.073,
        "economy_gdp_per_capita": 0.70532,
        "family_info": 1.03516,
        "health_life_expectancy": 0.58114,
        "freedom": 0.62545,
        "trust_government_corruption": 0.12279,
        "generosity": 0.24991,
        "lat": 12.879721,
        "lon": 121.774017
    },
    {
        "country": "Morocco",
        "happiness_rank": 92,
        "happiness_score": 5.013,
        "economy_gdp_per_capita": 0.73479,
        "family_info": 0.64095,
        "health_life_expectancy": 0.60954,
        "freedom": 0.41691,
        "trust_government_corruption": 0.08546,
        "generosity": 0.07172,
        "lat": 31.791702,
        "lon": -7.092619999999999
    },
    {
        "country": "Mozambique",
        "happiness_rank": 94,
        "happiness_score": 4.971,
        "economy_gdp_per_capita": 0.08308,
        "family_info": 1.02626,
        "health_life_expectancy": 0.09131,
        "freedom": 0.34037,
        "trust_government_corruption": 0.15603,
        "generosity": 0.22269,
        "lat": -18.665695,
        "lon": 35.529562
    },
    {
        "country": "Albania",
        "happiness_rank": 95,
        "happiness_score": 4.959,
        "economy_gdp_per_capita": 0.87867,
        "family_info": 0.80434,
        "health_life_expectancy": 0.81325,
        "freedom": 0.35733,
        "trust_government_corruption": 0.06413,
        "generosity": 0.14272,
        "lat": 41.153332,
        "lon": 20.168331
    },
    {
        "country": "Bosnia and Herzegovina",
        "happiness_rank": 96,
        "happiness_score": 4.949,
        "economy_gdp_per_capita": 0.83223,
        "family_info": 0.91916,
        "health_life_expectancy": 0.79081,
        "freedom": 0.09245,
        "trust_government_corruption": 0.00227,
        "generosity": 0.24808,
        "lat": 43.915886,
        "lon": 17.679076
    },
    {
        "country": "Lesotho",
        "happiness_rank": 97,
        "happiness_score": 4.898,
        "economy_gdp_per_capita": 0.37545,
        "family_info": 1.04103,
        "health_life_expectancy": 0.07612,
        "freedom": 0.31767,
        "trust_government_corruption": 0.12504,
        "generosity": 0.16388,
        "lat": -29.609988,
        "lon": 28.233608
    },
    {
        "country": "Dominican Republic",
        "happiness_rank": 98,
        "happiness_score": 4.885,
        "economy_gdp_per_capita": 0.89537,
        "family_info": 1.17202,
        "health_life_expectancy": 0.66825,
        "freedom": 0.57672,
        "trust_government_corruption": 0.14234,
        "generosity": 0.21684,
        "lat": 18.735693,
        "lon": -70.162651
    },
    {
        "country": "Laos",
        "happiness_rank": 99,
        "happiness_score": 4.876,
        "economy_gdp_per_capita": 0.59066,
        "family_info": 0.73803,
        "health_life_expectancy": 0.54909,
        "freedom": 0.59591,
        "trust_government_corruption": 0.24249,
        "generosity": 0.42192,
        "lat": 19.85627,
        "lon": 102.495496
    },
    {
        "country": "Mongolia",
        "happiness_rank": 100,
        "happiness_score": 4.874,
        "economy_gdp_per_capita": 0.82819,
        "family_info": 1.3006,
        "health_life_expectancy": 0.60268,
        "freedom": 0.43626,
        "trust_government_corruption": 0.02666,
        "generosity": 0.3323,
        "lat": 46.862496,
        "lon": 103.846656
    },
    {
        "country": "Greece",
        "happiness_rank": 102,
        "happiness_score": 4.857,
        "economy_gdp_per_capita": 1.15406,
        "family_info": 0.92933,
        "health_life_expectancy": 0.88213,
        "freedom": 0.07699,
        "trust_government_corruption": 0.01397,
        "generosity": 0,
        "lat": 39.074208,
        "lon": 21.824312
    },
    {
        "country": "Lebanon",
        "happiness_rank": 103,
        "happiness_score": 4.839,
        "economy_gdp_per_capita": 1.02564,
        "family_info": 0.80001,
        "health_life_expectancy": 0.83947,
        "freedom": 0.33916,
        "trust_government_corruption": 0.04582,
        "generosity": 0.21854,
        "lat": 33.854721,
        "lon": 35.862285
    },
    {
        "country": "Hungary",
        "happiness_rank": 104,
        "happiness_score": 4.8,
        "economy_gdp_per_capita": 1.12094,
        "family_info": 1.20215,
        "health_life_expectancy": 0.75905,
        "freedom": 0.32112,
        "trust_government_corruption": 0.02758,
        "generosity": 0.128,
        "lat": 47.162494,
        "lon": 19.503304
    },
    {
        "country": "Honduras",
        "happiness_rank": 105,
        "happiness_score": 4.788,
        "economy_gdp_per_capita": 0.59532,
        "family_info": 0.95348,
        "health_life_expectancy": 0.6951,
        "freedom": 0.40148,
        "trust_government_corruption": 0.06825,
        "generosity": 0.23027,
        "lat": 15.199999,
        "lon": -86.241905
    },
    {
        "country": "Tajikistan",
        "happiness_rank": 106,
        "happiness_score": 4.786,
        "economy_gdp_per_capita": 0.39047,
        "family_info": 0.85563,
        "health_life_expectancy": 0.57379,
        "freedom": 0.47216,
        "trust_government_corruption": 0.15072,
        "generosity": 0.22974,
        "lat": 38.861034,
        "lon": 71.276093
    },
    {
        "country": "Tunisia",
        "happiness_rank": 107,
        "happiness_score": 4.739,
        "economy_gdp_per_capita": 0.88113,
        "family_info": 0.60429,
        "health_life_expectancy": 0.73793,
        "freedom": 0.26268,
        "trust_government_corruption": 0.06358,
        "generosity": 0.06431,
        "lat": 33.886917,
        "lon": 9.537499
    },
    {
        "country": "Bangladesh",
        "happiness_rank": 109,
        "happiness_score": 4.694,
        "economy_gdp_per_capita": 0.39753,
        "family_info": 0.43106,
        "health_life_expectancy": 0.60164,
        "freedom": 0.4082,
        "trust_government_corruption": 0.12569,
        "generosity": 0.21222,
        "lat": 23.684994,
        "lon": 90.356331
    },
    {
        "country": "Iran",
        "happiness_rank": 110,
        "happiness_score": 4.686,
        "economy_gdp_per_capita": 1.0088,
        "family_info": 0.54447,
        "health_life_expectancy": 0.69805,
        "freedom": 0.30033,
        "trust_government_corruption": 0.05863,
        "generosity": 0.38086,
        "lat": 32.427908,
        "lon": 53.688046
    },
    {
        "country": "Ukraine",
        "happiness_rank": 111,
        "happiness_score": 4.681,
        "economy_gdp_per_capita": 0.79907,
        "family_info": 1.20278,
        "health_life_expectancy": 0.6739,
        "freedom": 0.25123,
        "trust_government_corruption": 0.02961,
        "generosity": 0.15275,
        "lat": 48.379433,
        "lon": 31.16558
    },
    {
        "country": "Iraq",
        "happiness_rank": 112,
        "happiness_score": 4.677,
        "economy_gdp_per_capita": 0.98549,
        "family_info": 0.81889,
        "health_life_expectancy": 0.60237,
        "freedom": 0,
        "trust_government_corruption": 0.13788,
        "generosity": 0.17922,
        "lat": 33.223191,
        "lon": 43.679291
    },
    {
        "country": "South Africa",
        "happiness_rank": 113,
        "happiness_score": 4.642,
        "economy_gdp_per_capita": 0.92049,
        "family_info": 1.18468,
        "health_life_expectancy": 0.27688,
        "freedom": 0.33207,
        "trust_government_corruption": 0.08884,
        "generosity": 0.11973,
        "lat": -30.559482,
        "lon": 22.937506
    },
    {
        "country": "Ghana",
        "happiness_rank": 114,
        "happiness_score": 4.633,
        "economy_gdp_per_capita": 0.54558,
        "family_info": 0.67954,
        "health_life_expectancy": 0.40132,
        "freedom": 0.42342,
        "trust_government_corruption": 0.04355,
        "generosity": 0.23087,
        "lat": 7.946527,
        "lon": -1.023194
    },
    {
        "country": "Zimbabwe",
        "happiness_rank": 115,
        "happiness_score": 4.61,
        "economy_gdp_per_capita": 0.271,
        "family_info": 1.03276,
        "health_life_expectancy": 0.33475,
        "freedom": 0.25861,
        "trust_government_corruption": 0.08079,
        "generosity": 0.18987,
        "lat": -19.015438,
        "lon": 29.154857
    },
    {
        "country": "Liberia",
        "happiness_rank": 116,
        "happiness_score": 4.571,
        "economy_gdp_per_capita": 0.0712,
        "family_info": 0.78968,
        "health_life_expectancy": 0.34201,
        "freedom": 0.28531,
        "trust_government_corruption": 0.06232,
        "generosity": 0.24362,
        "lat": 6.428055,
        "lon": -9.429499000000002
    },
    {
        "country": "India",
        "happiness_rank": 117,
        "happiness_score": 4.565,
        "economy_gdp_per_capita": 0.64499,
        "family_info": 0.38174,
        "health_life_expectancy": 0.51529,
        "freedom": 0.39786,
        "trust_government_corruption": 0.08492,
        "generosity": 0.26475,
        "lat": 20.593684,
        "lon": 78.96288
    },
    {
        "country": "Sudan",
        "happiness_rank": 118,
        "happiness_score": 4.55,
        "economy_gdp_per_capita": 0.52107,
        "family_info": 1.01404,
        "health_life_expectancy": 0.36878,
        "freedom": 0.10081,
        "trust_government_corruption": 0.1466,
        "generosity": 0.19062,
        "lat": 12.862807,
        "lon": 30.217636
    },
    {
        "country": "Haiti",
        "happiness_rank": 119,
        "happiness_score": 4.518,
        "economy_gdp_per_capita": 0.26673,
        "family_info": 0.74302,
        "health_life_expectancy": 0.38847,
        "freedom": 0.24425,
        "trust_government_corruption": 0.17175,
        "generosity": 0.46187,
        "lat": 18.971187,
        "lon": -72.285215
    },
    {
        "country": "Nepal",
        "happiness_rank": 121,
        "happiness_score": 4.514,
        "economy_gdp_per_capita": 0.35997,
        "family_info": 0.86449,
        "health_life_expectancy": 0.56874,
        "freedom": 0.38282,
        "trust_government_corruption": 0.05907,
        "generosity": 0.32296,
        "lat": 28.394857,
        "lon": 84.12400799999999
    },
    {
        "country": "Ethiopia",
        "happiness_rank": 122,
        "happiness_score": 4.512,
        "economy_gdp_per_capita": 0.19073,
        "family_info": 0.60406,
        "health_life_expectancy": 0.44055,
        "freedom": 0.4345,
        "trust_government_corruption": 0.15048,
        "generosity": 0.24325,
        "lat": 9.145,
        "lon": 40.489673
    },
    {
        "country": "Sierra Leone",
        "happiness_rank": 123,
        "happiness_score": 4.507,
        "economy_gdp_per_capita": 0.33024,
        "family_info": 0.95571,
        "health_life_expectancy": 0,
        "freedom": 0.4084,
        "trust_government_corruption": 0.08786,
        "generosity": 0.21488,
        "lat": 8.460555,
        "lon": -11.779889
    },
    {
        "country": "Mauritania",
        "happiness_rank": 124,
        "happiness_score": 4.436,
        "economy_gdp_per_capita": 0.45407,
        "family_info": 0.86908,
        "health_life_expectancy": 0.35874,
        "freedom": 0.24232,
        "trust_government_corruption": 0.17461,
        "generosity": 0.219,
        "lat": 21.00789,
        "lon": -10.940835
    },
    {
        "country": "Kenya",
        "happiness_rank": 125,
        "happiness_score": 4.419,
        "economy_gdp_per_capita": 0.36471,
        "family_info": 0.99876,
        "health_life_expectancy": 0.41435,
        "freedom": 0.42215,
        "trust_government_corruption": 0.05839,
        "generosity": 0.37542,
        "lat": -0.023559,
        "lon": 37.906193
    },
    {
        "country": "Djibouti",
        "happiness_rank": 126,
        "happiness_score": 4.369,
        "economy_gdp_per_capita": 0.44025,
        "family_info": 0.59207,
        "health_life_expectancy": 0.36291,
        "freedom": 0.46074,
        "trust_government_corruption": 0.28105,
        "generosity": 0.18093,
        "lat": 11.825138,
        "lon": 42.590275
    },
    {
        "country": "Armenia",
        "happiness_rank": 127,
        "happiness_score": 4.35,
        "economy_gdp_per_capita": 0.76821,
        "family_info": 0.77711,
        "health_life_expectancy": 0.7299,
        "freedom": 0.19847,
        "trust_government_corruption": 0.039,
        "generosity": 0.07855,
        "lat": 40.069099,
        "lon": 45.038189
    },
    {
        "country": "Botswana",
        "happiness_rank": 128,
        "happiness_score": 4.332,
        "economy_gdp_per_capita": 0.99355,
        "family_info": 1.10464,
        "health_life_expectancy": 0.04776,
        "freedom": 0.49495,
        "trust_government_corruption": 0.12474,
        "generosity": 0.10461,
        "lat": -22.328474,
        "lon": 24.684866
    },
    {
        "country": "Georgia",
        "happiness_rank": 130,
        "happiness_score": 4.297,
        "economy_gdp_per_capita": 0.7419,
        "family_info": 0.38562,
        "health_life_expectancy": 0.72926,
        "freedom": 0.40577,
        "trust_government_corruption": 0.38331,
        "generosity": 0.05547,
        "lat": 32.1656221,
        "lon": -82.9000751
    },
    {
        "country": "Malawi",
        "happiness_rank": 131,
        "happiness_score": 4.292,
        "economy_gdp_per_capita": 0.01604,
        "family_info": 0.41134,
        "health_life_expectancy": 0.22562,
        "freedom": 0.43054,
        "trust_government_corruption": 0.06977,
        "generosity": 0.33128,
        "lat": -13.254308,
        "lon": 34.301525
    },
    {
        "country": "Sri Lanka",
        "happiness_rank": 132,
        "happiness_score": 4.271,
        "economy_gdp_per_capita": 0.83524,
        "family_info": 1.01905,
        "health_life_expectancy": 0.70806,
        "freedom": 0.53726,
        "trust_government_corruption": 0.09179,
        "generosity": 0.40828,
        "lat": 7.873053999999999,
        "lon": 80.77179699999999
    },
    {
        "country": "Cameroon",
        "happiness_rank": 133,
        "happiness_score": 4.252,
        "economy_gdp_per_capita": 0.4225,
        "family_info": 0.88767,
        "health_life_expectancy": 0.23402,
        "freedom": 0.49309,
        "trust_government_corruption": 0.05786,
        "generosity": 0.20618,
        "lat": 7.369721999999999,
        "lon": 12.354722
    },
    {
        "country": "Bulgaria",
        "happiness_rank": 134,
        "happiness_score": 4.218,
        "economy_gdp_per_capita": 1.01216,
        "family_info": 1.10614,
        "health_life_expectancy": 0.76649,
        "freedom": 0.30587,
        "trust_government_corruption": 0.00872,
        "generosity": 0.11921,
        "lat": 42.733883,
        "lon": 25.48583
    },
    {
        "country": "Egypt",
        "happiness_rank": 135,
        "happiness_score": 4.194,
        "economy_gdp_per_capita": 0.8818,
        "family_info": 0.747,
        "health_life_expectancy": 0.61712,
        "freedom": 0.17288,
        "trust_government_corruption": 0.06324,
        "generosity": 0.11291,
        "lat": 26.820553,
        "lon": 30.802498
    },
    {
        "country": "Yemen",
        "happiness_rank": 136,
        "happiness_score": 4.077,
        "economy_gdp_per_capita": 0.54649,
        "family_info": 0.68093,
        "health_life_expectancy": 0.40064,
        "freedom": 0.35571,
        "trust_government_corruption": 0.07854,
        "generosity": 0.09131,
        "lat": 15.552727,
        "lon": 48.516388
    },
    {
        "country": "Angola",
        "happiness_rank": 137,
        "happiness_score": 4.033,
        "economy_gdp_per_capita": 0.75778,
        "family_info": 0.8604,
        "health_life_expectancy": 0.16683,
        "freedom": 0.10384,
        "trust_government_corruption": 0.07122,
        "generosity": 0.12344,
        "lat": -11.202692,
        "lon": 17.873887
    },
    {
        "country": "Mali",
        "happiness_rank": 138,
        "happiness_score": 3.995,
        "economy_gdp_per_capita": 0.26074,
        "family_info": 1.03526,
        "health_life_expectancy": 0.20583,
        "freedom": 0.38857,
        "trust_government_corruption": 0.12352,
        "generosity": 0.18798,
        "lat": 17.570692,
        "lon": -3.996166
    },
    {
        "country": "Comoros",
        "happiness_rank": 140,
        "happiness_score": 3.956,
        "economy_gdp_per_capita": 0.23906,
        "family_info": 0.79273,
        "health_life_expectancy": 0.36315,
        "freedom": 0.22917,
        "trust_government_corruption": 0.199,
        "generosity": 0.17441,
        "lat": -11.6455,
        "lon": 43.3333
    },
    {
        "country": "Uganda",
        "happiness_rank": 141,
        "happiness_score": 3.931,
        "economy_gdp_per_capita": 0.21102,
        "family_info": 1.13299,
        "health_life_expectancy": 0.33861,
        "freedom": 0.45727,
        "trust_government_corruption": 0.07267,
        "generosity": 0.29066,
        "lat": 1.373333,
        "lon": 32.290275
    },
    {
        "country": "Senegal",
        "happiness_rank": 142,
        "happiness_score": 3.904,
        "economy_gdp_per_capita": 0.36498,
        "family_info": 0.97619,
        "health_life_expectancy": 0.4354,
        "freedom": 0.36772,
        "trust_government_corruption": 0.10713,
        "generosity": 0.20843,
        "lat": 14.497401,
        "lon": -14.452362
    },
    {
        "country": "Gabon",
        "happiness_rank": 143,
        "happiness_score": 3.896,
        "economy_gdp_per_capita": 1.06024,
        "family_info": 0.90528,
        "health_life_expectancy": 0.43372,
        "freedom": 0.31914,
        "trust_government_corruption": 0.11091,
        "generosity": 0.06822,
        "lat": -0.803689,
        "lon": 11.609444
    },
    {
        "country": "Niger",
        "happiness_rank": 144,
        "happiness_score": 3.845,
        "economy_gdp_per_capita": 0.0694,
        "family_info": 0.77265,
        "health_life_expectancy": 0.29707,
        "freedom": 0.47692,
        "trust_government_corruption": 0.15639,
        "generosity": 0.19387,
        "lat": 17.607789,
        "lon": 8.081666
    },
    {
        "country": "Cambodia",
        "happiness_rank": 145,
        "happiness_score": 3.819,
        "economy_gdp_per_capita": 0.46038,
        "family_info": 0.62736,
        "health_life_expectancy": 0.61114,
        "freedom": 0.66246,
        "trust_government_corruption": 0.07247,
        "generosity": 0.40359,
        "lat": 12.565679,
        "lon": 104.990963
    },
    {
        "country": "Tanzania",
        "happiness_rank": 146,
        "happiness_score": 3.781,
        "economy_gdp_per_capita": 0.2852,
        "family_info": 1.00268,
        "health_life_expectancy": 0.38215,
        "freedom": 0.32878,
        "trust_government_corruption": 0.05747,
        "generosity": 0.34377,
        "lat": -6.369028,
        "lon": 34.888822
    },
    {
        "country": "Madagascar",
        "happiness_rank": 147,
        "happiness_score": 3.681,
        "economy_gdp_per_capita": 0.20824,
        "family_info": 0.66801,
        "health_life_expectancy": 0.46721,
        "freedom": 0.19184,
        "trust_government_corruption": 0.08124,
        "generosity": 0.21333,
        "lat": -18.766947,
        "lon": 46.869107
    },
    {
        "country": "Central African Republic",
        "happiness_rank": 148,
        "happiness_score": 3.678,
        "economy_gdp_per_capita": 0.0785,
        "family_info": 0,
        "health_life_expectancy": 0.06699,
        "freedom": 0.48879,
        "trust_government_corruption": 0.08289,
        "generosity": 0.23835,
        "lat": 6.611110999999999,
        "lon": 20.939444
    },
    {
        "country": "Chad",
        "happiness_rank": 149,
        "happiness_score": 3.667,
        "economy_gdp_per_capita": 0.34193,
        "family_info": 0.76062,
        "health_life_expectancy": 0.1501,
        "freedom": 0.23501,
        "trust_government_corruption": 0.05269,
        "generosity": 0.18386,
        "lat": 15.454166,
        "lon": 18.732207
    },
    {
        "country": "Guinea",
        "happiness_rank": 150,
        "happiness_score": 3.656,
        "economy_gdp_per_capita": 0.17417,
        "family_info": 0.46475,
        "health_life_expectancy": 0.24009,
        "freedom": 0.37725,
        "trust_government_corruption": 0.12139,
        "generosity": 0.28657,
        "lat": 9.945587,
        "lon": -9.696645
    },
    {
        "country": "Burkina Faso",
        "happiness_rank": 152,
        "happiness_score": 3.587,
        "economy_gdp_per_capita": 0.25812,
        "family_info": 0.85188,
        "health_life_expectancy": 0.27125,
        "freedom": 0.39493,
        "trust_government_corruption": 0.12832,
        "generosity": 0.21747,
        "lat": 12.238333,
        "lon": -1.561593
    },
    {
        "country": "Afghanistan",
        "happiness_rank": 153,
        "happiness_score": 3.575,
        "economy_gdp_per_capita": 0.31982,
        "family_info": 0.30285,
        "health_life_expectancy": 0.30335,
        "freedom": 0.23414,
        "trust_government_corruption": 0.09719,
        "generosity": 0.3651,
        "lat": 33.93911,
        "lon": 67.709953
    },
    {
        "country": "Rwanda",
        "happiness_rank": 154,
        "happiness_score": 3.465,
        "economy_gdp_per_capita": 0.22208,
        "family_info": 0.7737,
        "health_life_expectancy": 0.42864,
        "freedom": 0.59201,
        "trust_government_corruption": 0.55191,
        "generosity": 0.22628,
        "lat": -1.940278,
        "lon": 29.873888
    },
    {
        "country": "Benin",
        "happiness_rank": 155,
        "happiness_score": 3.34,
        "economy_gdp_per_capita": 0.28665,
        "family_info": 0.35386,
        "health_life_expectancy": 0.3191,
        "freedom": 0.4845,
        "trust_government_corruption": 0.0801,
        "generosity": 0.1826,
        "lat": 9.30769,
        "lon": 2.315834
    },
    {
        "country": "Syria",
        "happiness_rank": 156,
        "happiness_score": 3.006,
        "economy_gdp_per_capita": 0.6632,
        "family_info": 0.47489,
        "health_life_expectancy": 0.72193,
        "freedom": 0.15684,
        "trust_government_corruption": 0.18906,
        "generosity": 0.47179,
        "lat": 34.80207499999999,
        "lon": 38.996815
    },
    {
        "country": "Burundi",
        "happiness_rank": 157,
        "happiness_score": 2.905,
        "economy_gdp_per_capita": 0.0153,
        "family_info": 0.41587,
        "health_life_expectancy": 0.22396,
        "freedom": 0.1185,
        "trust_government_corruption": 0.10062,
        "generosity": 0.19727,
        "lat": -3.373056,
        "lon": 29.918886
    },
    {
        "country": "Togo",
        "happiness_rank": 158,
        "happiness_score": 2.839,
        "economy_gdp_per_capita": 0.20868,
        "family_info": 0.13995,
        "health_life_expectancy": 0.28443,
        "freedom": 0.36453,
        "trust_government_corruption": 0.10731,
        "generosity": 0.16681,
        "lat": 8.619543,
        "lon": 0.824782
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
