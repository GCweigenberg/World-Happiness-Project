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
        "country": "Denmark",
        "region": "Western Europe",
        "happiness_rank": 1,
        "happiness_score": 7.526,
        "economy_gdp_per_capita": 1.44178,
        "family_info": 1.16374,
        "health_life_expectancy": 0.79504,
        "freedom": 0.57941,
        "trust_government_corruption": 0.44453,
        "generosity": 0.36171,
        "lat": 56.26392,
        "lon": 9.501785
    },
    {
        "country": "Switzerland",
        "region": "Western Europe",
        "happiness_rank": 2,
        "happiness_score": 7.509,
        "economy_gdp_per_capita": 1.52733,
        "family_info": 1.14524,
        "health_life_expectancy": 0.86303,
        "freedom": 0.58557,
        "trust_government_corruption": 0.41203,
        "generosity": 0.28083,
        "lat": 46.818188,
        "lon": 8.227511999999999
    },
    {
        "country": "Iceland",
        "region": "Western Europe",
        "happiness_rank": 3,
        "happiness_score": 7.501,
        "economy_gdp_per_capita": 1.42666,
        "family_info": 1.18326,
        "health_life_expectancy": 0.86733,
        "freedom": 0.56624,
        "trust_government_corruption": 0.14975,
        "generosity": 0.47678,
        "lat": 64.963051,
        "lon": -19.020835
    },
    {
        "country": "Norway",
        "region": "Western Europe",
        "happiness_rank": 4,
        "happiness_score": 7.498,
        "economy_gdp_per_capita": 1.57744,
        "family_info": 1.1269,
        "health_life_expectancy": 0.79579,
        "freedom": 0.59609,
        "trust_government_corruption": 0.35776,
        "generosity": 0.37895,
        "lat": 60.47202399999999,
        "lon": 8.468945999999999
    },
    {
        "country": "Finland",
        "region": "Western Europe",
        "happiness_rank": 5,
        "happiness_score": 7.413,
        "economy_gdp_per_capita": 1.40598,
        "family_info": 1.13464,
        "health_life_expectancy": 0.81091,
        "freedom": 0.57104,
        "trust_government_corruption": 0.41004,
        "generosity": 0.25492,
        "lat": 61.92410999999999,
        "lon": 25.748151
    },
    {
        "country": "Canada",
        "region": "North America",
        "happiness_rank": 6,
        "happiness_score": 7.404,
        "economy_gdp_per_capita": 1.44015,
        "family_info": 1.0961,
        "health_life_expectancy": 0.8276,
        "freedom": 0.5737,
        "trust_government_corruption": 0.31329,
        "generosity": 0.44834,
        "lat": 56.130366,
        "lon": -106.346771
    },
    {
        "country": "Netherlands",
        "region": "Western Europe",
        "happiness_rank": 7,
        "happiness_score": 7.339,
        "economy_gdp_per_capita": 1.46468,
        "family_info": 1.02912,
        "health_life_expectancy": 0.81231,
        "freedom": 0.55211,
        "trust_government_corruption": 0.29927,
        "generosity": 0.47416,
        "lat": 52.132633,
        "lon": 5.291265999999999
    },
    {
        "country": "New Zealand",
        "region": "Australia and New Zealand",
        "happiness_rank": 8,
        "happiness_score": 7.334,
        "economy_gdp_per_capita": 1.36066,
        "family_info": 1.17278,
        "health_life_expectancy": 0.83096,
        "freedom": 0.58147,
        "trust_government_corruption": 0.41904,
        "generosity": 0.49401,
        "lat": -40.900557,
        "lon": 174.885971
    },
    {
        "country": "Australia",
        "region": "Australia and New Zealand",
        "happiness_rank": 9,
        "happiness_score": 7.313,
        "economy_gdp_per_capita": 1.44443,
        "family_info": 1.10476,
        "health_life_expectancy": 0.8512,
        "freedom": 0.56837,
        "trust_government_corruption": 0.32331,
        "generosity": 0.47407,
        "lat": -25.274398,
        "lon": 133.775136
    },
    {
        "country": "Sweden",
        "region": "Western Europe",
        "happiness_rank": 10,
        "happiness_score": 7.291,
        "economy_gdp_per_capita": 1.45181,
        "family_info": 1.08764,
        "health_life_expectancy": 0.83121,
        "freedom": 0.58218,
        "trust_government_corruption": 0.40867,
        "generosity": 0.38254,
        "lat": 60.12816100000001,
        "lon": 18.643501
    },
    {
        "country": "Israel",
        "region": "Middle East and Northern Africa",
        "happiness_rank": 11,
        "happiness_score": 7.267,
        "economy_gdp_per_capita": 1.33766,
        "family_info": 0.99537,
        "health_life_expectancy": 0.84917,
        "freedom": 0.36432,
        "trust_government_corruption": 0.08728,
        "generosity": 0.32288,
        "lat": 31.046051,
        "lon": 34.851612
    },
    {
        "country": "Austria",
        "region": "Western Europe",
        "happiness_rank": 12,
        "happiness_score": 7.119,
        "economy_gdp_per_capita": 1.45038,
        "family_info": 1.08383,
        "health_life_expectancy": 0.80565,
        "freedom": 0.54355,
        "trust_government_corruption": 0.21348,
        "generosity": 0.32865,
        "lat": 47.516231,
        "lon": 14.550072
    },
    {
        "country": "United States",
        "region": "North America",
        "happiness_rank": 13,
        "happiness_score": 7.104,
        "economy_gdp_per_capita": 1.50796,
        "family_info": 1.04782,
        "health_life_expectancy": 0.779,
        "freedom": 0.48163,
        "trust_government_corruption": 0.14868,
        "generosity": 0.41077,
        "lat": 37.09024,
        "lon": -95.712891
    },
    {
        "country": "Costa Rica",
        "region": "Latin America and Caribbean",
        "happiness_rank": 14,
        "happiness_score": 7.087,
        "economy_gdp_per_capita": 1.06879,
        "family_info": 1.02152,
        "health_life_expectancy": 0.76146,
        "freedom": 0.55225,
        "trust_government_corruption": 0.10547,
        "generosity": 0.22553,
        "lat": 9.748917,
        "lon": -83.753428
    },
    {
        "country": "Puerto Rico",
        "region": "Latin America and Caribbean",
        "happiness_rank": 15,
        "happiness_score": 7.039,
        "economy_gdp_per_capita": 1.35943,
        "family_info": 1.08113,
        "health_life_expectancy": 0.77758,
        "freedom": 0.46823,
        "trust_government_corruption": 0.12275,
        "generosity": 0.22202,
        "lat": 18.220833,
        "lon": -66.590149
    },
    {
        "country": "Germany",
        "region": "Western Europe",
        "happiness_rank": 16,
        "happiness_score": 6.994,
        "economy_gdp_per_capita": 1.44787,
        "family_info": 1.09774,
        "health_life_expectancy": 0.81487,
        "freedom": 0.53466,
        "trust_government_corruption": 0.28551,
        "generosity": 0.30452,
        "lat": 51.165691,
        "lon": 10.451526
    },
    {
        "country": "Brazil",
        "region": "Latin America and Caribbean",
        "happiness_rank": 17,
        "happiness_score": 6.952,
        "economy_gdp_per_capita": 1.08754,
        "family_info": 1.03938,
        "health_life_expectancy": 0.61415,
        "freedom": 0.40425,
        "trust_government_corruption": 0.14166,
        "generosity": 0.15776,
        "lat": -14.235004,
        "lon": -51.92528
    },
    {
        "country": "Belgium",
        "region": "Western Europe",
        "happiness_rank": 18,
        "happiness_score": 6.929,
        "economy_gdp_per_capita": 1.42539,
        "family_info": 1.05249,
        "health_life_expectancy": 0.81959,
        "freedom": 0.51354,
        "trust_government_corruption": 0.26248,
        "generosity": 0.2424,
        "lat": 50.503887,
        "lon": 4.469936
    },
    {
        "country": "Ireland",
        "region": "Western Europe",
        "happiness_rank": 19,
        "happiness_score": 6.907,
        "economy_gdp_per_capita": 1.48341,
        "family_info": 1.16157,
        "health_life_expectancy": 0.81455,
        "freedom": 0.54008,
        "trust_government_corruption": 0.29754,
        "generosity": 0.44963,
        "lat": 53.1423672,
        "lon": -7.692053599999999
    },
    {
        "country": "Luxembourg",
        "region": "Western Europe",
        "happiness_rank": 20,
        "happiness_score": 6.871,
        "economy_gdp_per_capita": 1.69752,
        "family_info": 1.03999,
        "health_life_expectancy": 0.84542,
        "freedom": 0.5487,
        "trust_government_corruption": 0.35329,
        "generosity": 0.27571,
        "lat": 49.815273,
        "lon": 6.129582999999999
    },
    {
        "country": "Mexico",
        "region": "Latin America and Caribbean",
        "happiness_rank": 21,
        "happiness_score": 6.778,
        "economy_gdp_per_capita": 1.11508,
        "family_info": 0.7146,
        "health_life_expectancy": 0.71143,
        "freedom": 0.37709,
        "trust_government_corruption": 0.18355,
        "generosity": 0.11735,
        "lat": 23.634501,
        "lon": -102.552784
    },
    {
        "country": "Singapore",
        "region": "Southeastern Asia",
        "happiness_rank": 22,
        "happiness_score": 6.739,
        "economy_gdp_per_capita": 1.64555,
        "family_info": 0.86758,
        "health_life_expectancy": 0.94719,
        "freedom": 0.4877,
        "trust_government_corruption": 0.46987,
        "generosity": 0.32706,
        "lat": 1.352083,
        "lon": 103.819836
    },
    {
        "country": "United Kingdom",
        "region": "Western Europe",
        "happiness_rank": 23,
        "happiness_score": 6.725,
        "economy_gdp_per_capita": 1.40283,
        "family_info": 1.08672,
        "health_life_expectancy": 0.80991,
        "freedom": 0.50036,
        "trust_government_corruption": 0.27399,
        "generosity": 0.50156,
        "lat": 55.378051,
        "lon": -3.435973
    },
    {
        "country": "Chile",
        "region": "Latin America and Caribbean",
        "happiness_rank": 24,
        "happiness_score": 6.705,
        "economy_gdp_per_capita": 1.2167,
        "family_info": 0.90587,
        "health_life_expectancy": 0.81883,
        "freedom": 0.37789,
        "trust_government_corruption": 0.11451,
        "generosity": 0.31595,
        "lat": -35.675147,
        "lon": -71.542969
    },
    {
        "country": "Panama",
        "region": "Latin America and Caribbean",
        "happiness_rank": 25,
        "happiness_score": 6.701,
        "economy_gdp_per_capita": 1.18306,
        "family_info": 0.98912,
        "health_life_expectancy": 0.70835,
        "freedom": 0.48927,
        "trust_government_corruption": 0.08423,
        "generosity": 0.2418,
        "lat": 8.537981,
        "lon": -80.782127
    },
    {
        "country": "Argentina",
        "region": "Latin America and Caribbean",
        "happiness_rank": 26,
        "happiness_score": 6.65,
        "economy_gdp_per_capita": 1.15137,
        "family_info": 1.06612,
        "health_life_expectancy": 0.69711,
        "freedom": 0.42284,
        "trust_government_corruption": 0.07296,
        "generosity": 0.10989,
        "lat": -38.416097,
        "lon": -63.61667199999999
    },
    {
        "country": "United Arab Emirates",
        "region": "Middle East and Northern Africa",
        "happiness_rank": 28,
        "happiness_score": 6.573,
        "economy_gdp_per_capita": 1.57352,
        "family_info": 0.87114,
        "health_life_expectancy": 0.72993,
        "freedom": 0.56215,
        "trust_government_corruption": 0.35561,
        "generosity": 0.26591,
        "lat": 23.424076,
        "lon": 53.847818
    },
    {
        "country": "Uruguay",
        "region": "Latin America and Caribbean",
        "happiness_rank": 29,
        "happiness_score": 6.545,
        "economy_gdp_per_capita": 1.18157,
        "family_info": 1.03143,
        "health_life_expectancy": 0.72183,
        "freedom": 0.54388,
        "trust_government_corruption": 0.21394,
        "generosity": 0.18056,
        "lat": -32.522779,
        "lon": -55.765835
    },
    {
        "country": "Malta",
        "region": "Western Europe",
        "happiness_rank": 30,
        "happiness_score": 6.488,
        "economy_gdp_per_capita": 1.30782,
        "family_info": 1.09879,
        "health_life_expectancy": 0.80315,
        "freedom": 0.54994,
        "trust_government_corruption": 0.17554,
        "generosity": 0.56237,
        "lat": 35.937496,
        "lon": 14.375416
    },
    {
        "country": "Colombia",
        "region": "Latin America and Caribbean",
        "happiness_rank": 31,
        "happiness_score": 6.481,
        "economy_gdp_per_capita": 1.03032,
        "family_info": 1.02169,
        "health_life_expectancy": 0.59659,
        "freedom": 0.44735,
        "trust_government_corruption": 0.05399,
        "generosity": 0.15626,
        "lat": 4.570868,
        "lon": -74.297333
    },
    {
        "country": "France",
        "region": "Western Europe",
        "happiness_rank": 32,
        "happiness_score": 6.478,
        "economy_gdp_per_capita": 1.39488,
        "family_info": 1.00508,
        "health_life_expectancy": 0.83795,
        "freedom": 0.46562,
        "trust_government_corruption": 0.17808,
        "generosity": 0.1216,
        "lat": 46.227638,
        "lon": 2.213749
    },
    {
        "country": "Thailand",
        "region": "Southeastern Asia",
        "happiness_rank": 33,
        "happiness_score": 6.474,
        "economy_gdp_per_capita": 1.0893,
        "family_info": 1.04477,
        "health_life_expectancy": 0.64915,
        "freedom": 0.49553,
        "trust_government_corruption": 0.02833,
        "generosity": 0.58696,
        "lat": 15.870032,
        "lon": 100.992541
    },
    {
        "country": "Saudi Arabia",
        "region": "Middle East and Northern Africa",
        "happiness_rank": 34,
        "happiness_score": 6.379,
        "economy_gdp_per_capita": 1.48953,
        "family_info": 0.84829,
        "health_life_expectancy": 0.59267,
        "freedom": 0.37904,
        "trust_government_corruption": 0.30008,
        "generosity": 0.15457,
        "lat": 23.885942,
        "lon": 45.079162
    },
    {
        "country": "Taiwan",
        "region": "Eastern Asia",
        "happiness_rank": 34,
        "happiness_score": 6.379,
        "economy_gdp_per_capita": 1.39729,
        "family_info": 0.92624,
        "health_life_expectancy": 0.79565,
        "freedom": 0.32377,
        "trust_government_corruption": 0.0663,
        "generosity": 0.25495,
        "lat": 23.69781,
        "lon": 120.960515
    },
    {
        "country": "Qatar",
        "region": "Middle East and Northern Africa",
        "happiness_rank": 36,
        "happiness_score": 6.375,
        "economy_gdp_per_capita": 1.82427,
        "family_info": 0.87964,
        "health_life_expectancy": 0.71723,
        "freedom": 0.56679,
        "trust_government_corruption": 0.48049,
        "generosity": 0.32388,
        "lat": 25.354826,
        "lon": 51.183884
    },
    {
        "country": "Spain",
        "region": "Western Europe",
        "happiness_rank": 37,
        "happiness_score": 6.361,
        "economy_gdp_per_capita": 1.34253,
        "family_info": 1.12945,
        "health_life_expectancy": 0.87896,
        "freedom": 0.37545,
        "trust_government_corruption": 0.06137,
        "generosity": 0.17665,
        "lat": 40.46366700000001,
        "lon": -3.74922
    },
    {
        "country": "Algeria",
        "region": "Middle East and Northern Africa",
        "happiness_rank": 38,
        "happiness_score": 6.355,
        "economy_gdp_per_capita": 1.05266,
        "family_info": 0.83309,
        "health_life_expectancy": 0.61804,
        "freedom": 0.21006,
        "trust_government_corruption": 0.16157,
        "generosity": 0.07044,
        "lat": 28.033886,
        "lon": 1.659626
    },
    {
        "country": "Guatemala",
        "region": "Latin America and Caribbean",
        "happiness_rank": 39,
        "happiness_score": 6.324,
        "economy_gdp_per_capita": 0.83454,
        "family_info": 0.87119,
        "health_life_expectancy": 0.54039,
        "freedom": 0.50379,
        "trust_government_corruption": 0.08701,
        "generosity": 0.28808,
        "lat": 15.783471,
        "lon": -90.230759
    },
    {
        "country": "Suriname",
        "region": "Latin America and Caribbean",
        "happiness_rank": 40,
        "happiness_score": 6.269,
        "economy_gdp_per_capita": 1.09686,
        "family_info": 0.77866,
        "health_life_expectancy": 0.50933,
        "freedom": 0.52234,
        "trust_government_corruption": 0.12692,
        "generosity": 0.16665,
        "lat": 3.919305,
        "lon": -56.027783
    },
    {
        "country": "Kuwait",
        "region": "Middle East and Northern Africa",
        "happiness_rank": 41,
        "happiness_score": 6.239,
        "economy_gdp_per_capita": 1.61714,
        "family_info": 0.87758,
        "health_life_expectancy": 0.63569,
        "freedom": 0.43166,
        "trust_government_corruption": 0.23669,
        "generosity": 0.15965,
        "lat": 29.31166,
        "lon": 47.481766
    },
    {
        "country": "Bahrain",
        "region": "Middle East and Northern Africa",
        "happiness_rank": 42,
        "happiness_score": 6.218,
        "economy_gdp_per_capita": 1.44024,
        "family_info": 0.94397,
        "health_life_expectancy": 0.65696,
        "freedom": 0.47375,
        "trust_government_corruption": 0.25772,
        "generosity": 0.17147,
        "lat": 26.0667,
        "lon": 50.5577
    },
    {
        "country": "Trinidad and Tobago",
        "region": "Latin America and Caribbean",
        "happiness_rank": 43,
        "happiness_score": 6.168,
        "economy_gdp_per_capita": 1.32572,
        "family_info": 0.98569,
        "health_life_expectancy": 0.52608,
        "freedom": 0.48453,
        "trust_government_corruption": 0.01241,
        "generosity": 0.31935,
        "lat": 10.691803,
        "lon": -61.222503
    },
    {
        "country": "Venezuela",
        "region": "Latin America and Caribbean",
        "happiness_rank": 44,
        "happiness_score": 6.084,
        "economy_gdp_per_capita": 1.13367,
        "family_info": 1.03302,
        "health_life_expectancy": 0.61904,
        "freedom": 0.19847,
        "trust_government_corruption": 0.08304,
        "generosity": 0.0425,
        "lat": 6.42375,
        "lon": -66.58973
    },
    {
        "country": "Slovakia",
        "region": "Central and Eastern Europe",
        "happiness_rank": 45,
        "happiness_score": 6.078,
        "economy_gdp_per_capita": 1.27973,
        "family_info": 1.08268,
        "health_life_expectancy": 0.70367,
        "freedom": 0.23391,
        "trust_government_corruption": 0.02947,
        "generosity": 0.13837,
        "lat": 48.669026,
        "lon": 19.699024
    },
    {
        "country": "El Salvador",
        "region": "Latin America and Caribbean",
        "happiness_rank": 46,
        "happiness_score": 6.068,
        "economy_gdp_per_capita": 0.8737,
        "family_info": 0.80975,
        "health_life_expectancy": 0.596,
        "freedom": 0.37269,
        "trust_government_corruption": 0.10613,
        "generosity": 0.08877,
        "lat": 13.794185,
        "lon": -88.89653
    },
    {
        "country": "Malaysia",
        "region": "Southeastern Asia",
        "happiness_rank": 47,
        "happiness_score": 6.005,
        "economy_gdp_per_capita": 1.25142,
        "family_info": 0.88025,
        "health_life_expectancy": 0.62366,
        "freedom": 0.39031,
        "trust_government_corruption": 0.09081,
        "generosity": 0.41474,
        "lat": 4.210484,
        "lon": 101.975766
    },
    {
        "country": "Nicaragua",
        "region": "Latin America and Caribbean",
        "happiness_rank": 48,
        "happiness_score": 5.992,
        "economy_gdp_per_capita": 0.69384,
        "family_info": 0.89521,
        "health_life_expectancy": 0.65213,
        "freedom": 0.46582,
        "trust_government_corruption": 0.16292,
        "generosity": 0.29773,
        "lat": 12.865416,
        "lon": -85.207229
    },
    {
        "country": "Uzbekistan",
        "region": "Central and Eastern Europe",
        "happiness_rank": 49,
        "happiness_score": 5.987,
        "economy_gdp_per_capita": 0.73591,
        "family_info": 1.1681,
        "health_life_expectancy": 0.50163,
        "freedom": 0.60848,
        "trust_government_corruption": 0.28333,
        "generosity": 0.34326,
        "lat": 41.377491,
        "lon": 64.585262
    },
    {
        "country": "Italy",
        "region": "Western Europe",
        "happiness_rank": 50,
        "happiness_score": 5.977,
        "economy_gdp_per_capita": 1.35495,
        "family_info": 1.04167,
        "health_life_expectancy": 0.85102,
        "freedom": 0.18827,
        "trust_government_corruption": 0.02556,
        "generosity": 0.16684,
        "lat": 41.87194,
        "lon": 12.56738
    },
    {
        "country": "Ecuador",
        "region": "Latin America and Caribbean",
        "happiness_rank": 51,
        "happiness_score": 5.976,
        "economy_gdp_per_capita": 0.97306,
        "family_info": 0.85974,
        "health_life_expectancy": 0.68613,
        "freedom": 0.4027,
        "trust_government_corruption": 0.18037,
        "generosity": 0.10074,
        "lat": -1.831239,
        "lon": -78.18340599999999
    },
    {
        "country": "Belize",
        "region": "Latin America and Caribbean",
        "happiness_rank": 52,
        "happiness_score": 5.956,
        "economy_gdp_per_capita": 0.87616,
        "family_info": 0.68655,
        "health_life_expectancy": 0.45569,
        "freedom": 0.51231,
        "trust_government_corruption": 0.10771,
        "generosity": 0.23684,
        "lat": 17.189877,
        "lon": -88.49765
    },
    {
        "country": "Japan",
        "region": "Eastern Asia",
        "happiness_rank": 53,
        "happiness_score": 5.921,
        "economy_gdp_per_capita": 1.38007,
        "family_info": 1.06054,
        "health_life_expectancy": 0.91491,
        "freedom": 0.46761,
        "trust_government_corruption": 0.18985,
        "generosity": 0.10224,
        "lat": 36.204824,
        "lon": 138.252924
    },
    {
        "country": "Kazakhstan",
        "region": "Central and Eastern Europe",
        "happiness_rank": 54,
        "happiness_score": 5.919,
        "economy_gdp_per_capita": 1.22943,
        "family_info": 0.95544,
        "health_life_expectancy": 0.57386,
        "freedom": 0.4052,
        "trust_government_corruption": 0.11132,
        "generosity": 0.15011,
        "lat": 48.019573,
        "lon": 66.923684
    },
    {
        "country": "Moldova",
        "region": "Central and Eastern Europe",
        "happiness_rank": 55,
        "happiness_score": 5.897,
        "economy_gdp_per_capita": 0.69177,
        "family_info": 0.83132,
        "health_life_expectancy": 0.52309,
        "freedom": 0.25202,
        "trust_government_corruption": 0.01903,
        "generosity": 0.19997,
        "lat": 47.411631,
        "lon": 28.369885
    },
    {
        "country": "Russia",
        "region": "Central and Eastern Europe",
        "happiness_rank": 56,
        "happiness_score": 5.856,
        "economy_gdp_per_capita": 1.23228,
        "family_info": 1.05261,
        "health_life_expectancy": 0.58991,
        "freedom": 0.32682,
        "trust_government_corruption": 0.03586,
        "generosity": 0.02736,
        "lat": 61.52401,
        "lon": 105.318756
    },
    {
        "country": "Poland",
        "region": "Central and Eastern Europe",
        "happiness_rank": 57,
        "happiness_score": 5.835,
        "economy_gdp_per_capita": 1.24585,
        "family_info": 1.04685,
        "health_life_expectancy": 0.69058,
        "freedom": 0.4519,
        "trust_government_corruption": 0.055,
        "generosity": 0.14443,
        "lat": 51.919438,
        "lon": 19.145136
    },
    {
        "country": "South Korea",
        "region": "Eastern Asia",
        "happiness_rank": 57,
        "happiness_score": 5.835,
        "economy_gdp_per_capita": 1.35948,
        "family_info": 0.72194,
        "health_life_expectancy": 0.88645,
        "freedom": 0.25168,
        "trust_government_corruption": 0.07716,
        "generosity": 0.18824,
        "lat": 35.907757,
        "lon": 127.766922
    },
    {
        "country": "Bolivia",
        "region": "Latin America and Caribbean",
        "happiness_rank": 59,
        "happiness_score": 5.822,
        "economy_gdp_per_capita": 0.79422,
        "family_info": 0.83779,
        "health_life_expectancy": 0.4697,
        "freedom": 0.50961,
        "trust_government_corruption": 0.07746,
        "generosity": 0.21698,
        "lat": -16.290154,
        "lon": -63.58865299999999
    },
    {
        "country": "Lithuania",
        "region": "Central and Eastern Europe",
        "happiness_rank": 60,
        "happiness_score": 5.813,
        "economy_gdp_per_capita": 1.2692,
        "family_info": 1.06411,
        "health_life_expectancy": 0.64674,
        "freedom": 0.18929,
        "trust_government_corruption": 0.0182,
        "generosity": 0.02025,
        "lat": 55.169438,
        "lon": 23.881275
    },
    {
        "country": "Belarus",
        "region": "Central and Eastern Europe",
        "happiness_rank": 61,
        "happiness_score": 5.802,
        "economy_gdp_per_capita": 1.13062,
        "family_info": 1.04993,
        "health_life_expectancy": 0.63104,
        "freedom": 0.29091,
        "trust_government_corruption": 0.17457,
        "generosity": 0.13942,
        "lat": 53.709807,
        "lon": 27.953389
    },
    {
        "country": "Slovenia",
        "region": "Central and Eastern Europe",
        "happiness_rank": 63,
        "happiness_score": 5.768,
        "economy_gdp_per_capita": 1.29947,
        "family_info": 1.05613,
        "health_life_expectancy": 0.79151,
        "freedom": 0.53164,
        "trust_government_corruption": 0.03635,
        "generosity": 0.25738,
        "lat": 46.151241,
        "lon": 14.995463
    },
    {
        "country": "Peru",
        "region": "Latin America and Caribbean",
        "happiness_rank": 64,
        "happiness_score": 5.743,
        "economy_gdp_per_capita": 0.99602,
        "family_info": 0.81255,
        "health_life_expectancy": 0.62994,
        "freedom": 0.37502,
        "trust_government_corruption": 0.05292,
        "generosity": 0.14527,
        "lat": -9.189967,
        "lon": -75.015152
    },
    {
        "country": "Turkmenistan",
        "region": "Central and Eastern Europe",
        "happiness_rank": 65,
        "happiness_score": 5.658,
        "economy_gdp_per_capita": 1.08017,
        "family_info": 1.03817,
        "health_life_expectancy": 0.44006,
        "freedom": 0.37408,
        "trust_government_corruption": 0.28467,
        "generosity": 0.22567,
        "lat": 38.969719,
        "lon": 59.556278
    },
    {
        "country": "Mauritius",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 66,
        "happiness_score": 5.648,
        "economy_gdp_per_capita": 1.14372,
        "family_info": 0.75695,
        "health_life_expectancy": 0.66189,
        "freedom": 0.46145,
        "trust_government_corruption": 0.05203,
        "generosity": 0.36951,
        "lat": -20.348404,
        "lon": 57.55215200000001
    },
    {
        "country": "Libya",
        "region": "Middle East and Northern Africa",
        "happiness_rank": 67,
        "happiness_score": 5.615,
        "economy_gdp_per_capita": 1.06688,
        "family_info": 0.95076,
        "health_life_expectancy": 0.52304,
        "freedom": 0.40672,
        "trust_government_corruption": 0.10339,
        "generosity": 0.17087,
        "lat": 26.3351,
        "lon": 17.228331
    },
    {
        "country": "Latvia",
        "region": "Central and Eastern Europe",
        "happiness_rank": 68,
        "happiness_score": 5.56,
        "economy_gdp_per_capita": 1.21788,
        "family_info": 0.95025,
        "health_life_expectancy": 0.63952,
        "freedom": 0.27996,
        "trust_government_corruption": 0.0889,
        "generosity": 0.17445,
        "lat": 56.879635,
        "lon": 24.603189
    },
    {
        "country": "Cyprus",
        "region": "Western Europe",
        "happiness_rank": 69,
        "happiness_score": 5.546,
        "economy_gdp_per_capita": 1.31857,
        "family_info": 0.70697,
        "health_life_expectancy": 0.8488,
        "freedom": 0.29507,
        "trust_government_corruption": 0.05228,
        "generosity": 0.27906,
        "lat": 35.126413,
        "lon": 33.429859
    },
    {
        "country": "Paraguay",
        "region": "Latin America and Caribbean",
        "happiness_rank": 70,
        "happiness_score": 5.538,
        "economy_gdp_per_capita": 0.89373,
        "family_info": 1.11111,
        "health_life_expectancy": 0.58295,
        "freedom": 0.46235,
        "trust_government_corruption": 0.07396,
        "generosity": 0.25296,
        "lat": -23.442503,
        "lon": -58.443832
    },
    {
        "country": "Romania",
        "region": "Central and Eastern Europe",
        "happiness_rank": 71,
        "happiness_score": 5.528,
        "economy_gdp_per_capita": 1.1697,
        "family_info": 0.72803,
        "health_life_expectancy": 0.67602,
        "freedom": 0.36712,
        "trust_government_corruption": 0.00679,
        "generosity": 0.12889,
        "lat": 45.943161,
        "lon": 24.96676
    },
    {
        "country": "Estonia",
        "region": "Central and Eastern Europe",
        "happiness_rank": 72,
        "happiness_score": 5.517,
        "economy_gdp_per_capita": 1.27964,
        "family_info": 1.05163,
        "health_life_expectancy": 0.68098,
        "freedom": 0.41511,
        "trust_government_corruption": 0.18519,
        "generosity": 0.08423,
        "lat": 58.595272,
        "lon": 25.013607
    },
    {
        "country": "Jamaica",
        "region": "Latin America and Caribbean",
        "happiness_rank": 73,
        "happiness_score": 5.51,
        "economy_gdp_per_capita": 0.89333,
        "family_info": 0.96372,
        "health_life_expectancy": 0.59469,
        "freedom": 0.43597,
        "trust_government_corruption": 0.04294,
        "generosity": 0.22245,
        "lat": 18.109581,
        "lon": -77.297508
    },
    {
        "country": "Croatia",
        "region": "Central and Eastern Europe",
        "happiness_rank": 74,
        "happiness_score": 5.488,
        "economy_gdp_per_capita": 1.18649,
        "family_info": 0.60809,
        "health_life_expectancy": 0.70524,
        "freedom": 0.23907,
        "trust_government_corruption": 0.04002,
        "generosity": 0.18434,
        "lat": 45.1,
        "lon": 15.2
    },
    {
        "country": "Hong Kong",
        "region": "Eastern Asia",
        "happiness_rank": 75,
        "happiness_score": 5.458,
        "economy_gdp_per_capita": 1.5107,
        "family_info": 0.87021,
        "health_life_expectancy": 0.95277,
        "freedom": 0.48079,
        "trust_government_corruption": 0.31647,
        "generosity": 0.40097,
        "lat": 22.3193039,
        "lon": 114.1693611
    },
    {
        "country": "Somalia",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 76,
        "happiness_score": 5.44,
        "economy_gdp_per_capita": 0,
        "family_info": 0.33613,
        "health_life_expectancy": 0.11466,
        "freedom": 0.56778,
        "trust_government_corruption": 0.3118,
        "generosity": 0.27225,
        "lat": 5.152149,
        "lon": 46.199616
    },
    {
        "country": "Kosovo",
        "region": "Central and Eastern Europe",
        "happiness_rank": 77,
        "happiness_score": 5.401,
        "economy_gdp_per_capita": 0.90145,
        "family_info": 0.66062,
        "health_life_expectancy": 0.54,
        "freedom": 0.14396,
        "trust_government_corruption": 0.06547,
        "generosity": 0.27992,
        "lat": 42.6026359,
        "lon": 20.902977
    },
    {
        "country": "Indonesia",
        "region": "Southeastern Asia",
        "happiness_rank": 79,
        "happiness_score": 5.314,
        "economy_gdp_per_capita": 0.95104,
        "family_info": 0.87625,
        "health_life_expectancy": 0.49374,
        "freedom": 0.39237,
        "trust_government_corruption": 0.00322,
        "generosity": 0.56521,
        "lat": -0.789275,
        "lon": 113.921327
    },
    {
        "country": "Azerbaijan",
        "region": "Central and Eastern Europe",
        "happiness_rank": 81,
        "happiness_score": 5.291,
        "economy_gdp_per_capita": 1.12373,
        "family_info": 0.76042,
        "health_life_expectancy": 0.54504,
        "freedom": 0.35327,
        "trust_government_corruption": 0.17914,
        "generosity": 0.0564,
        "lat": 40.143105,
        "lon": 47.576927
    },
    {
        "country": "Philippines",
        "region": "Southeastern Asia",
        "happiness_rank": 82,
        "happiness_score": 5.279,
        "economy_gdp_per_capita": 0.81217,
        "family_info": 0.87877,
        "health_life_expectancy": 0.47036,
        "freedom": 0.54854,
        "trust_government_corruption": 0.11757,
        "generosity": 0.21674,
        "lat": 12.879721,
        "lon": 121.774017
    },
    {
        "country": "China",
        "region": "Eastern Asia",
        "happiness_rank": 83,
        "happiness_score": 5.245,
        "economy_gdp_per_capita": 1.0278,
        "family_info": 0.79381,
        "health_life_expectancy": 0.73561,
        "freedom": 0.44012,
        "trust_government_corruption": 0.02745,
        "generosity": 0.04959,
        "lat": 35.86166,
        "lon": 104.195397
    },
    {
        "country": "Bhutan",
        "region": "Southern Asia",
        "happiness_rank": 84,
        "happiness_score": 5.196,
        "economy_gdp_per_capita": 0.8527,
        "family_info": 0.90836,
        "health_life_expectancy": 0.49759,
        "freedom": 0.46074,
        "trust_government_corruption": 0.1616,
        "generosity": 0.48546,
        "lat": 27.514162,
        "lon": 90.433601
    },
    {
        "country": "Kyrgyzstan",
        "region": "Central and Eastern Europe",
        "happiness_rank": 85,
        "happiness_score": 5.185,
        "economy_gdp_per_capita": 0.56044,
        "family_info": 0.95434,
        "health_life_expectancy": 0.55449,
        "freedom": 0.40212,
        "trust_government_corruption": 0.04762,
        "generosity": 0.38432,
        "lat": 41.20438,
        "lon": 74.766098
    },
    {
        "country": "Serbia",
        "region": "Central and Eastern Europe",
        "happiness_rank": 86,
        "happiness_score": 5.177,
        "economy_gdp_per_capita": 1.03437,
        "family_info": 0.81329,
        "health_life_expectancy": 0.6458,
        "freedom": 0.15718,
        "trust_government_corruption": 0.04339,
        "generosity": 0.20737,
        "lat": 44.016521,
        "lon": 21.005859
    },
    {
        "country": "Bosnia and Herzegovina",
        "region": "Central and Eastern Europe",
        "happiness_rank": 87,
        "happiness_score": 5.163,
        "economy_gdp_per_capita": 0.93383,
        "family_info": 0.64367,
        "health_life_expectancy": 0.70766,
        "freedom": 0.09511,
        "trust_government_corruption": 0,
        "generosity": 0.29889,
        "lat": 43.915886,
        "lon": 17.679076
    },
    {
        "country": "Montenegro",
        "region": "Central and Eastern Europe",
        "happiness_rank": 88,
        "happiness_score": 5.161,
        "economy_gdp_per_capita": 1.07838,
        "family_info": 0.74173,
        "health_life_expectancy": 0.63533,
        "freedom": 0.15111,
        "trust_government_corruption": 0.12721,
        "generosity": 0.17191,
        "lat": 42.708678,
        "lon": 19.37439
    },
    {
        "country": "Dominican Republic",
        "region": "Latin America and Caribbean",
        "happiness_rank": 89,
        "happiness_score": 5.155,
        "economy_gdp_per_capita": 1.02787,
        "family_info": 0.99496,
        "health_life_expectancy": 0.57669,
        "freedom": 0.52259,
        "trust_government_corruption": 0.12372,
        "generosity": 0.21286,
        "lat": 18.735693,
        "lon": -70.162651
    },
    {
        "country": "Morocco",
        "region": "Middle East and Northern Africa",
        "happiness_rank": 90,
        "happiness_score": 5.151,
        "economy_gdp_per_capita": 0.84058,
        "family_info": 0.38595,
        "health_life_expectancy": 0.59471,
        "freedom": 0.25646,
        "trust_government_corruption": 0.08404,
        "generosity": 0.04053,
        "lat": 31.791702,
        "lon": -7.092619999999999
    },
    {
        "country": "Hungary",
        "region": "Central and Eastern Europe",
        "happiness_rank": 91,
        "happiness_score": 5.145,
        "economy_gdp_per_capita": 1.24142,
        "family_info": 0.93164,
        "health_life_expectancy": 0.67608,
        "freedom": 0.1977,
        "trust_government_corruption": 0.04472,
        "generosity": 0.099,
        "lat": 47.162494,
        "lon": 19.503304
    },
    {
        "country": "Pakistan",
        "region": "Southern Asia",
        "happiness_rank": 92,
        "happiness_score": 5.132,
        "economy_gdp_per_capita": 0.68816,
        "family_info": 0.26135,
        "health_life_expectancy": 0.40306,
        "freedom": 0.14622,
        "trust_government_corruption": 0.1388,
        "generosity": 0.31185,
        "lat": 30.375321,
        "lon": 69.34511599999999
    },
    {
        "country": "Lebanon",
        "region": "Middle East and Northern Africa",
        "happiness_rank": 93,
        "happiness_score": 5.129,
        "economy_gdp_per_capita": 1.12268,
        "family_info": 0.64184,
        "health_life_expectancy": 0.76171,
        "freedom": 0.26228,
        "trust_government_corruption": 0.03061,
        "generosity": 0.23693,
        "lat": 33.854721,
        "lon": 35.862285
    },
    {
        "country": "Portugal",
        "region": "Western Europe",
        "happiness_rank": 94,
        "happiness_score": 5.123,
        "economy_gdp_per_capita": 1.27607,
        "family_info": 0.94367,
        "health_life_expectancy": 0.79363,
        "freedom": 0.44727,
        "trust_government_corruption": 0.01521,
        "generosity": 0.11691,
        "lat": 39.39987199999999,
        "lon": -8.224454
    },
    {
        "country": "Vietnam",
        "region": "Southeastern Asia",
        "happiness_rank": 96,
        "happiness_score": 5.061,
        "economy_gdp_per_capita": 0.74037,
        "family_info": 0.79117,
        "health_life_expectancy": 0.66157,
        "freedom": 0.55954,
        "trust_government_corruption": 0.11556,
        "generosity": 0.25075,
        "lat": 14.058324,
        "lon": 108.277199
    },
    {
        "country": "Tunisia",
        "region": "Middle East and Northern Africa",
        "happiness_rank": 98,
        "happiness_score": 5.045,
        "economy_gdp_per_capita": 0.97724,
        "family_info": 0.43165,
        "health_life_expectancy": 0.59577,
        "freedom": 0.23553,
        "trust_government_corruption": 0.0817,
        "generosity": 0.03936,
        "lat": 33.886917,
        "lon": 9.537499
    },
    {
        "country": "Greece",
        "region": "Western Europe",
        "happiness_rank": 99,
        "happiness_score": 5.033,
        "economy_gdp_per_capita": 1.24886,
        "family_info": 0.75473,
        "health_life_expectancy": 0.80029,
        "freedom": 0.05822,
        "trust_government_corruption": 0.04127,
        "generosity": 0,
        "lat": 39.074208,
        "lon": 21.824312
    },
    {
        "country": "Tajikistan",
        "region": "Central and Eastern Europe",
        "happiness_rank": 100,
        "happiness_score": 4.996,
        "economy_gdp_per_capita": 0.48835,
        "family_info": 0.75602,
        "health_life_expectancy": 0.53119,
        "freedom": 0.43408,
        "trust_government_corruption": 0.13509,
        "generosity": 0.25998,
        "lat": 38.861034,
        "lon": 71.276093
    },
    {
        "country": "Mongolia",
        "region": "Eastern Asia",
        "happiness_rank": 101,
        "happiness_score": 4.907,
        "economy_gdp_per_capita": 0.98853,
        "family_info": 1.08983,
        "health_life_expectancy": 0.55469,
        "freedom": 0.35972,
        "trust_government_corruption": 0.03285,
        "generosity": 0.34539,
        "lat": 46.862496,
        "lon": 103.846656
    },
    {
        "country": "Laos",
        "region": "Southeastern Asia",
        "happiness_rank": 102,
        "happiness_score": 4.876,
        "economy_gdp_per_capita": 0.68042,
        "family_info": 0.5497,
        "health_life_expectancy": 0.38291,
        "freedom": 0.52168,
        "trust_government_corruption": 0.22423,
        "generosity": 0.43079,
        "lat": 19.85627,
        "lon": 102.495496
    },
    {
        "country": "Nigeria",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 103,
        "happiness_score": 4.875,
        "economy_gdp_per_capita": 0.75216,
        "family_info": 0.64498,
        "health_life_expectancy": 0.05108,
        "freedom": 0.27854,
        "trust_government_corruption": 0.0305,
        "generosity": 0.23219,
        "lat": 9.081999,
        "lon": 8.675277
    },
    {
        "country": "Honduras",
        "region": "Latin America and Caribbean",
        "happiness_rank": 104,
        "happiness_score": 4.871,
        "economy_gdp_per_capita": 0.69429,
        "family_info": 0.75596,
        "health_life_expectancy": 0.58383,
        "freedom": 0.26755,
        "trust_government_corruption": 0.06906,
        "generosity": 0.2044,
        "lat": 15.199999,
        "lon": -86.241905
    },
    {
        "country": "Iran",
        "region": "Middle East and Northern Africa",
        "happiness_rank": 105,
        "happiness_score": 4.813,
        "economy_gdp_per_capita": 1.11758,
        "family_info": 0.38857,
        "health_life_expectancy": 0.64232,
        "freedom": 0.22544,
        "trust_government_corruption": 0.0557,
        "generosity": 0.38538,
        "lat": 32.427908,
        "lon": 53.688046
    },
    {
        "country": "Zambia",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 106,
        "happiness_score": 4.795,
        "economy_gdp_per_capita": 0.61202,
        "family_info": 0.6376,
        "health_life_expectancy": 0.23573,
        "freedom": 0.42662,
        "trust_government_corruption": 0.11479,
        "generosity": 0.17866,
        "lat": -13.133897,
        "lon": 27.849332
    },
    {
        "country": "Nepal",
        "region": "Southern Asia",
        "happiness_rank": 107,
        "happiness_score": 4.793,
        "economy_gdp_per_capita": 0.44626,
        "family_info": 0.69699,
        "health_life_expectancy": 0.50073,
        "freedom": 0.37012,
        "trust_government_corruption": 0.07008,
        "generosity": 0.3816,
        "lat": 28.394857,
        "lon": 84.12400799999999
    },
    {
        "country": "Albania",
        "region": "Central and Eastern Europe",
        "happiness_rank": 109,
        "happiness_score": 4.655,
        "economy_gdp_per_capita": 0.9553,
        "family_info": 0.50163,
        "health_life_expectancy": 0.73007,
        "freedom": 0.31866,
        "trust_government_corruption": 0.05301,
        "generosity": 0.1684,
        "lat": 41.153332,
        "lon": 20.168331
    },
    {
        "country": "Bangladesh",
        "region": "Southern Asia",
        "happiness_rank": 110,
        "happiness_score": 4.643,
        "economy_gdp_per_capita": 0.54177,
        "family_info": 0.24749,
        "health_life_expectancy": 0.52989,
        "freedom": 0.39778,
        "trust_government_corruption": 0.12583,
        "generosity": 0.19132,
        "lat": 23.684994,
        "lon": 90.356331
    },
    {
        "country": "Sierra Leone",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 111,
        "happiness_score": 4.635,
        "economy_gdp_per_capita": 0.36485,
        "family_info": 0.628,
        "health_life_expectancy": 0,
        "freedom": 0.30685,
        "trust_government_corruption": 0.08196,
        "generosity": 0.23897,
        "lat": 8.460555,
        "lon": -11.779889
    },
    {
        "country": "Iraq",
        "region": "Middle East and Northern Africa",
        "happiness_rank": 112,
        "happiness_score": 4.575,
        "economy_gdp_per_capita": 1.07474,
        "family_info": 0.59205,
        "health_life_expectancy": 0.51076,
        "freedom": 0.24856,
        "trust_government_corruption": 0.13636,
        "generosity": 0.19589,
        "lat": 33.223191,
        "lon": 43.679291
    },
    {
        "country": "Namibia",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 113,
        "happiness_score": 4.574,
        "economy_gdp_per_capita": 0.93287,
        "family_info": 0.70362,
        "health_life_expectancy": 0.34745,
        "freedom": 0.48614,
        "trust_government_corruption": 0.10398,
        "generosity": 0.07795,
        "lat": -22.95764,
        "lon": 18.49041
    },
    {
        "country": "Cameroon",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 114,
        "happiness_score": 4.513,
        "economy_gdp_per_capita": 0.52497,
        "family_info": 0.62542,
        "health_life_expectancy": 0.12698,
        "freedom": 0.42736,
        "trust_government_corruption": 0.06126,
        "generosity": 0.2268,
        "lat": 7.369721999999999,
        "lon": 12.354722
    },
    {
        "country": "Ethiopia",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 115,
        "happiness_score": 4.508,
        "economy_gdp_per_capita": 0.29283,
        "family_info": 0.37932,
        "health_life_expectancy": 0.34578,
        "freedom": 0.36703,
        "trust_government_corruption": 0.1717,
        "generosity": 0.29522,
        "lat": 9.145,
        "lon": 40.489673
    },
    {
        "country": "South Africa",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 116,
        "happiness_score": 4.459,
        "economy_gdp_per_capita": 1.02416,
        "family_info": 0.96053,
        "health_life_expectancy": 0.18611,
        "freedom": 0.42483,
        "trust_government_corruption": 0.08415,
        "generosity": 0.13656,
        "lat": -30.559482,
        "lon": 22.937506
    },
    {
        "country": "Sri Lanka",
        "region": "Southern Asia",
        "happiness_rank": 117,
        "happiness_score": 4.415,
        "economy_gdp_per_capita": 0.97318,
        "family_info": 0.84783,
        "health_life_expectancy": 0.62007,
        "freedom": 0.50817,
        "trust_government_corruption": 0.07964,
        "generosity": 0.46978,
        "lat": 7.873053999999999,
        "lon": 80.77179699999999
    },
    {
        "country": "India",
        "region": "Southern Asia",
        "happiness_rank": 118,
        "happiness_score": 4.404,
        "economy_gdp_per_capita": 0.74036,
        "family_info": 0.29247,
        "health_life_expectancy": 0.45091,
        "freedom": 0.40285,
        "trust_government_corruption": 0.08722,
        "generosity": 0.25028,
        "lat": 20.593684,
        "lon": 78.96288
    },
    {
        "country": "Egypt",
        "region": "Middle East and Northern Africa",
        "happiness_rank": 120,
        "happiness_score": 4.362,
        "economy_gdp_per_capita": 0.95395,
        "family_info": 0.49813,
        "health_life_expectancy": 0.52116,
        "freedom": 0.18847,
        "trust_government_corruption": 0.10393,
        "generosity": 0.12706,
        "lat": 26.820553,
        "lon": 30.802498
    },
    {
        "country": "Armenia",
        "region": "Central and Eastern Europe",
        "happiness_rank": 121,
        "happiness_score": 4.36,
        "economy_gdp_per_capita": 0.86086,
        "family_info": 0.62477,
        "health_life_expectancy": 0.64083,
        "freedom": 0.14037,
        "trust_government_corruption": 0.03616,
        "generosity": 0.07793,
        "lat": 40.069099,
        "lon": 45.038189
    },
    {
        "country": "Kenya",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 122,
        "happiness_score": 4.356,
        "economy_gdp_per_capita": 0.52267,
        "family_info": 0.7624,
        "health_life_expectancy": 0.30147,
        "freedom": 0.40576,
        "trust_government_corruption": 0.06686,
        "generosity": 0.41328,
        "lat": -0.023559,
        "lon": 37.906193
    },
    {
        "country": "Ukraine",
        "region": "Central and Eastern Europe",
        "happiness_rank": 123,
        "happiness_score": 4.324,
        "economy_gdp_per_capita": 0.87287,
        "family_info": 1.01413,
        "health_life_expectancy": 0.58628,
        "freedom": 0.12859,
        "trust_government_corruption": 0.01829,
        "generosity": 0.20363,
        "lat": 48.379433,
        "lon": 31.16558
    },
    {
        "country": "Ghana",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 124,
        "happiness_score": 4.276,
        "economy_gdp_per_capita": 0.63107,
        "family_info": 0.49353,
        "health_life_expectancy": 0.29681,
        "freedom": 0.40973,
        "trust_government_corruption": 0.0326,
        "generosity": 0.21203,
        "lat": 7.946527,
        "lon": -1.023194
    },
    {
        "country": "Georgia",
        "region": "Central and Eastern Europe",
        "happiness_rank": 126,
        "happiness_score": 4.252,
        "economy_gdp_per_capita": 0.83792,
        "family_info": 0.19249,
        "health_life_expectancy": 0.64035,
        "freedom": 0.32461,
        "trust_government_corruption": 0.3188,
        "generosity": 0.06786,
        "lat": 32.1656221,
        "lon": -82.9000751
    },
    {
        "country": "Senegal",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 128,
        "happiness_score": 4.219,
        "economy_gdp_per_capita": 0.44314,
        "family_info": 0.77416,
        "health_life_expectancy": 0.40457,
        "freedom": 0.31056,
        "trust_government_corruption": 0.11681,
        "generosity": 0.19103,
        "lat": 14.497401,
        "lon": -14.452362
    },
    {
        "country": "Bulgaria",
        "region": "Central and Eastern Europe",
        "happiness_rank": 129,
        "happiness_score": 4.217,
        "economy_gdp_per_capita": 1.11306,
        "family_info": 0.92542,
        "health_life_expectancy": 0.67806,
        "freedom": 0.21219,
        "trust_government_corruption": 0.00615,
        "generosity": 0.12793,
        "lat": 42.733883,
        "lon": 25.48583
    },
    {
        "country": "Mauritania",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 130,
        "happiness_score": 4.201,
        "economy_gdp_per_capita": 0.61391,
        "family_info": 0.84142,
        "health_life_expectancy": 0.28639,
        "freedom": 0.1268,
        "trust_government_corruption": 0.17955,
        "generosity": 0.22686,
        "lat": 21.00789,
        "lon": -10.940835
    },
    {
        "country": "Zimbabwe",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 131,
        "happiness_score": 4.193,
        "economy_gdp_per_capita": 0.35041,
        "family_info": 0.71478,
        "health_life_expectancy": 0.1595,
        "freedom": 0.25429,
        "trust_government_corruption": 0.08582,
        "generosity": 0.18503,
        "lat": -19.015438,
        "lon": 29.154857
    },
    {
        "country": "Malawi",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 132,
        "happiness_score": 4.156,
        "economy_gdp_per_capita": 0.08709,
        "family_info": 0.147,
        "health_life_expectancy": 0.29364,
        "freedom": 0.4143,
        "trust_government_corruption": 0.07564,
        "generosity": 0.30968,
        "lat": -13.254308,
        "lon": 34.301525
    },
    {
        "country": "Sudan",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 133,
        "happiness_score": 4.139,
        "economy_gdp_per_capita": 0.63069,
        "family_info": 0.81928,
        "health_life_expectancy": 0.29759,
        "freedom": 0,
        "trust_government_corruption": 0.10039,
        "generosity": 0.18077,
        "lat": 12.862807,
        "lon": 30.217636
    },
    {
        "country": "Gabon",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 134,
        "happiness_score": 4.121,
        "economy_gdp_per_capita": 1.15851,
        "family_info": 0.72368,
        "health_life_expectancy": 0.3494,
        "freedom": 0.28098,
        "trust_government_corruption": 0.09314,
        "generosity": 0.06244,
        "lat": -0.803689,
        "lon": 11.609444
    },
    {
        "country": "Mali",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 135,
        "happiness_score": 4.073,
        "economy_gdp_per_capita": 0.31292,
        "family_info": 0.86333,
        "health_life_expectancy": 0.16347,
        "freedom": 0.27544,
        "trust_government_corruption": 0.13647,
        "generosity": 0.21064,
        "lat": 17.570692,
        "lon": -3.996166
    },
    {
        "country": "Haiti",
        "region": "Latin America and Caribbean",
        "happiness_rank": 136,
        "happiness_score": 4.028,
        "economy_gdp_per_capita": 0.34097,
        "family_info": 0.29561,
        "health_life_expectancy": 0.27494,
        "freedom": 0.12072,
        "trust_government_corruption": 0.14476,
        "generosity": 0.47958,
        "lat": 18.971187,
        "lon": -72.285215
    },
    {
        "country": "Botswana",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 137,
        "happiness_score": 3.974,
        "economy_gdp_per_capita": 1.09426,
        "family_info": 0.89186,
        "health_life_expectancy": 0.34752,
        "freedom": 0.44089,
        "trust_government_corruption": 0.10769,
        "generosity": 0.12425,
        "lat": -22.328474,
        "lon": 24.684866
    },
    {
        "country": "Comoros",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 138,
        "happiness_score": 3.956,
        "economy_gdp_per_capita": 0.27509,
        "family_info": 0.60323,
        "health_life_expectancy": 0.29981,
        "freedom": 0.15412,
        "trust_government_corruption": 0.18437,
        "generosity": 0.1827,
        "lat": -11.6455,
        "lon": 43.3333
    },
    {
        "country": "Cambodia",
        "region": "Southeastern Asia",
        "happiness_rank": 140,
        "happiness_score": 3.907,
        "economy_gdp_per_capita": 0.55604,
        "family_info": 0.5375,
        "health_life_expectancy": 0.42494,
        "freedom": 0.58852,
        "trust_government_corruption": 0.08092,
        "generosity": 0.40339,
        "lat": 12.565679,
        "lon": 104.990963
    },
    {
        "country": "Angola",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 141,
        "happiness_score": 3.866,
        "economy_gdp_per_capita": 0.84731,
        "family_info": 0.66366,
        "health_life_expectancy": 0.04991,
        "freedom": 0.00589,
        "trust_government_corruption": 0.08434,
        "generosity": 0.12071,
        "lat": -11.202692,
        "lon": 17.873887
    },
    {
        "country": "Niger",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 142,
        "happiness_score": 3.856,
        "economy_gdp_per_capita": 0.1327,
        "family_info": 0.6053,
        "health_life_expectancy": 0.26162,
        "freedom": 0.38041,
        "trust_government_corruption": 0.17176,
        "generosity": 0.2097,
        "lat": 17.607789,
        "lon": 8.081666
    },
    {
        "country": "South Sudan",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 143,
        "happiness_score": 3.832,
        "economy_gdp_per_capita": 0.39394,
        "family_info": 0.18519,
        "health_life_expectancy": 0.15781,
        "freedom": 0.19662,
        "trust_government_corruption": 0.13015,
        "generosity": 0.25899,
        "lat": 6.876991899999999,
        "lon": 31.3069788
    },
    {
        "country": "Chad",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 144,
        "happiness_score": 3.763,
        "economy_gdp_per_capita": 0.42214,
        "family_info": 0.63178,
        "health_life_expectancy": 0.03824,
        "freedom": 0.12807,
        "trust_government_corruption": 0.04952,
        "generosity": 0.18667,
        "lat": 15.454166,
        "lon": 18.732207
    },
    {
        "country": "Burkina Faso",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 145,
        "happiness_score": 3.739,
        "economy_gdp_per_capita": 0.31995,
        "family_info": 0.63054,
        "health_life_expectancy": 0.21297,
        "freedom": 0.3337,
        "trust_government_corruption": 0.12533,
        "generosity": 0.24353,
        "lat": 12.238333,
        "lon": -1.561593
    },
    {
        "country": "Uganda",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 145,
        "happiness_score": 3.739,
        "economy_gdp_per_capita": 0.34719,
        "family_info": 0.90981,
        "health_life_expectancy": 0.19625,
        "freedom": 0.43653,
        "trust_government_corruption": 0.06442,
        "generosity": 0.27102,
        "lat": 1.373333,
        "lon": 32.290275
    },
    {
        "country": "Yemen",
        "region": "Middle East and Northern Africa",
        "happiness_rank": 147,
        "happiness_score": 3.724,
        "economy_gdp_per_capita": 0.57939,
        "family_info": 0.47493,
        "health_life_expectancy": 0.31048,
        "freedom": 0.2287,
        "trust_government_corruption": 0.05892,
        "generosity": 0.09821,
        "lat": 15.552727,
        "lon": 48.516388
    },
    {
        "country": "Madagascar",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 148,
        "happiness_score": 3.695,
        "economy_gdp_per_capita": 0.27954,
        "family_info": 0.46115,
        "health_life_expectancy": 0.37109,
        "freedom": 0.13684,
        "trust_government_corruption": 0.07506,
        "generosity": 0.2204,
        "lat": -18.766947,
        "lon": 46.869107
    },
    {
        "country": "Tanzania",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 149,
        "happiness_score": 3.666,
        "economy_gdp_per_capita": 0.47155,
        "family_info": 0.77623,
        "health_life_expectancy": 0.357,
        "freedom": 0.3176,
        "trust_government_corruption": 0.05099,
        "generosity": 0.31472,
        "lat": -6.369028,
        "lon": 34.888822
    },
    {
        "country": "Liberia",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 150,
        "happiness_score": 3.622,
        "economy_gdp_per_capita": 0.10706,
        "family_info": 0.50353,
        "health_life_expectancy": 0.23165,
        "freedom": 0.25748,
        "trust_government_corruption": 0.04852,
        "generosity": 0.24063,
        "lat": 6.428055,
        "lon": -9.429499000000002
    },
    {
        "country": "Guinea",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 151,
        "happiness_score": 3.607,
        "economy_gdp_per_capita": 0.22415,
        "family_info": 0.3109,
        "health_life_expectancy": 0.18829,
        "freedom": 0.30953,
        "trust_government_corruption": 0.1192,
        "generosity": 0.29914,
        "lat": 9.945587,
        "lon": -9.696645
    },
    {
        "country": "Rwanda",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 152,
        "happiness_score": 3.515,
        "economy_gdp_per_capita": 0.32846,
        "family_info": 0.61586,
        "health_life_expectancy": 0.31865,
        "freedom": 0.5432,
        "trust_government_corruption": 0.50521,
        "generosity": 0.23552,
        "lat": -1.940278,
        "lon": 29.873888
    },
    {
        "country": "Benin",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 153,
        "happiness_score": 3.484,
        "economy_gdp_per_capita": 0.39499,
        "family_info": 0.10419,
        "health_life_expectancy": 0.21028,
        "freedom": 0.39747,
        "trust_government_corruption": 0.06681,
        "generosity": 0.2018,
        "lat": 9.30769,
        "lon": 2.315834
    },
    {
        "country": "Afghanistan",
        "region": "Southern Asia",
        "happiness_rank": 154,
        "happiness_score": 3.36,
        "economy_gdp_per_capita": 0.38227,
        "family_info": 0.11037,
        "health_life_expectancy": 0.17344,
        "freedom": 0.1643,
        "trust_government_corruption": 0.07112,
        "generosity": 0.31268,
        "lat": 33.93911,
        "lon": 67.709953
    },
    {
        "country": "Togo",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 155,
        "happiness_score": 3.303,
        "economy_gdp_per_capita": 0.28123,
        "family_info": 0,
        "health_life_expectancy": 0.24811,
        "freedom": 0.34678,
        "trust_government_corruption": 0.11587,
        "generosity": 0.17517,
        "lat": 8.619543,
        "lon": 0.824782
    },
    {
        "country": "Syria",
        "region": "Middle East and Northern Africa",
        "happiness_rank": 156,
        "happiness_score": 3.069,
        "economy_gdp_per_capita": 0.74719,
        "family_info": 0.14866,
        "health_life_expectancy": 0.62994,
        "freedom": 0.06912,
        "trust_government_corruption": 0.17233,
        "generosity": 0.48397,
        "lat": 34.80207499999999,
        "lon": 38.996815
    },
    {
        "country": "Burundi",
        "region": "Sub-Saharan Africa",
        "happiness_rank": 157,
        "happiness_score": 2.905,
        "economy_gdp_per_capita": 0.06831,
        "family_info": 0.23442,
        "health_life_expectancy": 0.15747,
        "freedom": 0.0432,
        "trust_government_corruption": 0.09419,
        "generosity": 0.2029,
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
