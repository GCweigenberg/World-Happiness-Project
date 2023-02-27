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
        "country": "Norway",
        "happiness_rank": 1,
        "happiness_score": 7.537000179,
        "economy_gdp_per_capita": 1.616463184,
        "family_info": 1.53352356,
        "health_life_expectancy": 0.796666503,
        "freedom": 0.635422587,
        "trust_government_corruption": 0.362012237,
        "generosity": 0.315963835,
        "lat": 60.47202399999999,
        "lon": 8.468945999999999
    },
    {
        "country": "Denmark",
        "happiness_rank": 2,
        "happiness_score": 7.521999836,
        "economy_gdp_per_capita": 1.482383013,
        "family_info": 1.551121593,
        "health_life_expectancy": 0.792565525,
        "freedom": 0.626006722,
        "trust_government_corruption": 0.355280489,
        "generosity": 0.400770068,
        "lat": 56.26392,
        "lon": 9.501785
    },
    {
        "country": "Iceland",
        "happiness_rank": 3,
        "happiness_score": 7.504000187,
        "economy_gdp_per_capita": 1.48063302,
        "family_info": 1.610574007,
        "health_life_expectancy": 0.833552122,
        "freedom": 0.627162635,
        "trust_government_corruption": 0.475540221,
        "generosity": 0.153526559,
        "lat": 64.963051,
        "lon": -19.020835
    },
    {
        "country": "Switzerland",
        "happiness_rank": 4,
        "happiness_score": 7.493999958,
        "economy_gdp_per_capita": 1.564979553,
        "family_info": 1.516911745,
        "health_life_expectancy": 0.858131289,
        "freedom": 0.620070577,
        "trust_government_corruption": 0.290549278,
        "generosity": 0.367007285,
        "lat": 46.818188,
        "lon": 8.227511999999999
    },
    {
        "country": "Finland",
        "happiness_rank": 5,
        "happiness_score": 7.468999863,
        "economy_gdp_per_capita": 1.443571925,
        "family_info": 1.540246725,
        "health_life_expectancy": 0.80915767,
        "freedom": 0.617950857,
        "trust_government_corruption": 0.245482773,
        "generosity": 0.382611543,
        "lat": 61.92410999999999,
        "lon": 25.748151
    },
    {
        "country": "Netherlands",
        "happiness_rank": 6,
        "happiness_score": 7.376999855,
        "economy_gdp_per_capita": 1.503944635,
        "family_info": 1.428939223,
        "health_life_expectancy": 0.810696125,
        "freedom": 0.585384488,
        "trust_government_corruption": 0.47048983,
        "generosity": 0.282661825,
        "lat": 52.132633,
        "lon": 5.291265999999999
    },
    {
        "country": "Canada",
        "happiness_rank": 7,
        "happiness_score": 7.315999985,
        "economy_gdp_per_capita": 1.479204416,
        "family_info": 1.481348991,
        "health_life_expectancy": 0.834557652,
        "freedom": 0.611100912,
        "trust_government_corruption": 0.435539722,
        "generosity": 0.287371516,
        "lat": 56.130366,
        "lon": -106.346771
    },
    {
        "country": "New Zealand",
        "happiness_rank": 8,
        "happiness_score": 7.31400013,
        "economy_gdp_per_capita": 1.405706048,
        "family_info": 1.548195124,
        "health_life_expectancy": 0.816759706,
        "freedom": 0.61406213,
        "trust_government_corruption": 0.500005126,
        "generosity": 0.382816702,
        "lat": -40.900557,
        "lon": 174.885971
    },
    {
        "country": "Sweden",
        "happiness_rank": 9,
        "happiness_score": 7.28399992,
        "economy_gdp_per_capita": 1.494387269,
        "family_info": 1.478162169,
        "health_life_expectancy": 0.830875158,
        "freedom": 0.612924099,
        "trust_government_corruption": 0.385399252,
        "generosity": 0.384398729,
        "lat": 60.12816100000001,
        "lon": 18.643501
    },
    {
        "country": "Australia",
        "happiness_rank": 10,
        "happiness_score": 7.28399992,
        "economy_gdp_per_capita": 1.484414935,
        "family_info": 1.510041952,
        "health_life_expectancy": 0.843886793,
        "freedom": 0.601607382,
        "trust_government_corruption": 0.47769925,
        "generosity": 0.30118373,
        "lat": -25.274398,
        "lon": 133.775136
    },
    {
        "country": "Israel",
        "happiness_rank": 11,
        "happiness_score": 7.212999821,
        "economy_gdp_per_capita": 1.375382423,
        "family_info": 1.376289964,
        "health_life_expectancy": 0.838404,
        "freedom": 0.405988604,
        "trust_government_corruption": 0.330082655,
        "generosity": 0.0852421,
        "lat": 31.046051,
        "lon": 34.851612
    },
    {
        "country": "Costa Rica",
        "happiness_rank": 12,
        "happiness_score": 7.078999996,
        "economy_gdp_per_capita": 1.109706283,
        "family_info": 1.416403651,
        "health_life_expectancy": 0.759509265,
        "freedom": 0.58013165,
        "trust_government_corruption": 0.214613229,
        "generosity": 0.100106589,
        "lat": 9.748917,
        "lon": -83.753428
    },
    {
        "country": "Austria",
        "happiness_rank": 13,
        "happiness_score": 7.006000042,
        "economy_gdp_per_capita": 1.487097263,
        "family_info": 1.459944963,
        "health_life_expectancy": 0.815328419,
        "freedom": 0.56776619,
        "trust_government_corruption": 0.316472322,
        "generosity": 0.221060365,
        "lat": 47.516231,
        "lon": 14.550072
    },
    {
        "country": "United States",
        "happiness_rank": 14,
        "happiness_score": 6.993000031,
        "economy_gdp_per_capita": 1.546259284,
        "family_info": 1.419920564,
        "health_life_expectancy": 0.774286628,
        "freedom": 0.505740523,
        "trust_government_corruption": 0.392578781,
        "generosity": 0.135638788,
        "lat": 37.09024,
        "lon": -95.712891
    },
    {
        "country": "Ireland",
        "happiness_rank": 15,
        "happiness_score": 6.977000237,
        "economy_gdp_per_capita": 1.535706639,
        "family_info": 1.558231115,
        "health_life_expectancy": 0.809782624,
        "freedom": 0.573110342,
        "trust_government_corruption": 0.427858323,
        "generosity": 0.298388153,
        "lat": 53.1423672,
        "lon": -7.692053599999999
    },
    {
        "country": "Germany",
        "happiness_rank": 16,
        "happiness_score": 6.951000214,
        "economy_gdp_per_capita": 1.487923384,
        "family_info": 1.472520351,
        "health_life_expectancy": 0.798950732,
        "freedom": 0.562511384,
        "trust_government_corruption": 0.33626917,
        "generosity": 0.276731938,
        "lat": 51.165691,
        "lon": 10.451526
    },
    {
        "country": "Belgium",
        "happiness_rank": 17,
        "happiness_score": 6.890999794,
        "economy_gdp_per_capita": 1.463780761,
        "family_info": 1.462312698,
        "health_life_expectancy": 0.818091869,
        "freedom": 0.539770722,
        "trust_government_corruption": 0.231503338,
        "generosity": 0.251343131,
        "lat": 50.503887,
        "lon": 4.469936
    },
    {
        "country": "Luxembourg",
        "happiness_rank": 18,
        "happiness_score": 6.862999916,
        "economy_gdp_per_capita": 1.741943598,
        "family_info": 1.457583666,
        "health_life_expectancy": 0.845089495,
        "freedom": 0.596627891,
        "trust_government_corruption": 0.283180982,
        "generosity": 0.318834424,
        "lat": 49.815273,
        "lon": 6.129582999999999
    },
    {
        "country": "United Kingdom",
        "happiness_rank": 19,
        "happiness_score": 6.714000225,
        "economy_gdp_per_capita": 1.44163394,
        "family_info": 1.49646008,
        "health_life_expectancy": 0.805335939,
        "freedom": 0.508190036,
        "trust_government_corruption": 0.492774159,
        "generosity": 0.265428066,
        "lat": 55.378051,
        "lon": -3.435973
    },
    {
        "country": "Chile",
        "happiness_rank": 20,
        "happiness_score": 6.65199995,
        "economy_gdp_per_capita": 1.25278461,
        "family_info": 1.284024954,
        "health_life_expectancy": 0.819479704,
        "freedom": 0.376895279,
        "trust_government_corruption": 0.326662421,
        "generosity": 0.082287982,
        "lat": -35.675147,
        "lon": -71.542969
    },
    {
        "country": "United Arab Emirates",
        "happiness_rank": 21,
        "happiness_score": 6.647999763,
        "economy_gdp_per_capita": 1.626343369,
        "family_info": 1.266410232,
        "health_life_expectancy": 0.726798236,
        "freedom": 0.60834527,
        "trust_government_corruption": 0.360941947,
        "generosity": 0.324489564,
        "lat": 23.424076,
        "lon": 53.847818
    },
    {
        "country": "Brazil",
        "happiness_rank": 22,
        "happiness_score": 6.635000229,
        "economy_gdp_per_capita": 1.10735321,
        "family_info": 1.431306005,
        "health_life_expectancy": 0.616552353,
        "freedom": 0.437453747,
        "trust_government_corruption": 0.162349895,
        "generosity": 0.111092761,
        "lat": -14.235004,
        "lon": -51.92528
    },
    {
        "country": "Argentina",
        "happiness_rank": 24,
        "happiness_score": 6.598999977,
        "economy_gdp_per_capita": 1.185295463,
        "family_info": 1.440451145,
        "health_life_expectancy": 0.695137084,
        "freedom": 0.494519204,
        "trust_government_corruption": 0.109457061,
        "generosity": 0.059739888,
        "lat": -38.416097,
        "lon": -63.61667199999999
    },
    {
        "country": "Mexico",
        "happiness_rank": 25,
        "happiness_score": 6.578000069,
        "economy_gdp_per_capita": 1.153183818,
        "family_info": 1.21086216,
        "health_life_expectancy": 0.709978998,
        "freedom": 0.412730008,
        "trust_government_corruption": 0.120990433,
        "generosity": 0.132774115,
        "lat": 23.634501,
        "lon": -102.552784
    },
    {
        "country": "Singapore",
        "happiness_rank": 26,
        "happiness_score": 6.572000027,
        "economy_gdp_per_capita": 1.69227767,
        "family_info": 1.353814363,
        "health_life_expectancy": 0.949492395,
        "freedom": 0.549840569,
        "trust_government_corruption": 0.345965981,
        "generosity": 0.464307785,
        "lat": 1.352083,
        "lon": 103.819836
    },
    {
        "country": "Malta",
        "happiness_rank": 27,
        "happiness_score": 6.52699995,
        "economy_gdp_per_capita": 1.343279839,
        "family_info": 1.488411665,
        "health_life_expectancy": 0.821944237,
        "freedom": 0.588767052,
        "trust_government_corruption": 0.574730575,
        "generosity": 0.153066069,
        "lat": 35.937496,
        "lon": 14.375416
    },
    {
        "country": "Uruguay",
        "happiness_rank": 28,
        "happiness_score": 6.453999996,
        "economy_gdp_per_capita": 1.217559695,
        "family_info": 1.412227869,
        "health_life_expectancy": 0.719216824,
        "freedom": 0.579392254,
        "trust_government_corruption": 0.175096929,
        "generosity": 0.178061873,
        "lat": -32.522779,
        "lon": -55.765835
    },
    {
        "country": "Guatemala",
        "happiness_rank": 29,
        "happiness_score": 6.453999996,
        "economy_gdp_per_capita": 0.872001946,
        "family_info": 1.255585194,
        "health_life_expectancy": 0.54023999,
        "freedom": 0.531310618,
        "trust_government_corruption": 0.283488393,
        "generosity": 0.077223279,
        "lat": 15.783471,
        "lon": -90.230759
    },
    {
        "country": "Panama",
        "happiness_rank": 30,
        "happiness_score": 6.452000141,
        "economy_gdp_per_capita": 1.233748436,
        "family_info": 1.373192549,
        "health_life_expectancy": 0.706156135,
        "freedom": 0.550026834,
        "trust_government_corruption": 0.210556939,
        "generosity": 0.070983924,
        "lat": 8.537981,
        "lon": -80.782127
    },
    {
        "country": "France",
        "happiness_rank": 31,
        "happiness_score": 6.441999912,
        "economy_gdp_per_capita": 1.430923462,
        "family_info": 1.387776852,
        "health_life_expectancy": 0.844465852,
        "freedom": 0.470222116,
        "trust_government_corruption": 0.129762307,
        "generosity": 0.172502428,
        "lat": 46.227638,
        "lon": 2.213749
    },
    {
        "country": "Thailand",
        "happiness_rank": 32,
        "happiness_score": 6.423999786,
        "economy_gdp_per_capita": 1.127868772,
        "family_info": 1.425792456,
        "health_life_expectancy": 0.647239029,
        "freedom": 0.580200732,
        "trust_government_corruption": 0.57212311,
        "generosity": 0.031612735,
        "lat": 15.870032,
        "lon": 100.992541
    },
    {
        "country": "Spain",
        "happiness_rank": 34,
        "happiness_score": 6.402999878,
        "economy_gdp_per_capita": 1.384397864,
        "family_info": 1.532090902,
        "health_life_expectancy": 0.8889606,
        "freedom": 0.40878123,
        "trust_government_corruption": 0.190133572,
        "generosity": 0.070914097,
        "lat": 40.46366700000001,
        "lon": -3.74922
    },
    {
        "country": "Qatar",
        "happiness_rank": 35,
        "happiness_score": 6.375,
        "economy_gdp_per_capita": 1.870765686,
        "family_info": 1.27429688,
        "health_life_expectancy": 0.710098088,
        "freedom": 0.604130983,
        "trust_government_corruption": 0.33047387,
        "generosity": 0.439299256,
        "lat": 25.354826,
        "lon": 51.183884
    },
    {
        "country": "Colombia",
        "happiness_rank": 36,
        "happiness_score": 6.356999874,
        "economy_gdp_per_capita": 1.070622325,
        "family_info": 1.402182937,
        "health_life_expectancy": 0.595027924,
        "freedom": 0.477487415,
        "trust_government_corruption": 0.149014473,
        "generosity": 0.046668742,
        "lat": 4.570868,
        "lon": -74.297333
    },
    {
        "country": "Saudi Arabia",
        "happiness_rank": 37,
        "happiness_score": 6.343999863,
        "economy_gdp_per_capita": 1.530623555,
        "family_info": 1.286677599,
        "health_life_expectancy": 0.59014833,
        "freedom": 0.449750572,
        "trust_government_corruption": 0.147616014,
        "generosity": 0.273432255,
        "lat": 23.885942,
        "lon": 45.079162
    },
    {
        "country": "Trinidad and Tobago",
        "happiness_rank": 38,
        "happiness_score": 6.168000221,
        "economy_gdp_per_capita": 1.361355901,
        "family_info": 1.380228519,
        "health_life_expectancy": 0.519983292,
        "freedom": 0.518630743,
        "trust_government_corruption": 0.325296462,
        "generosity": 0.008964816,
        "lat": 10.691803,
        "lon": -61.222503
    },
    {
        "country": "Kuwait",
        "happiness_rank": 39,
        "happiness_score": 6.105000019,
        "economy_gdp_per_capita": 1.632952452,
        "family_info": 1.259698749,
        "health_life_expectancy": 0.632105708,
        "freedom": 0.496337593,
        "trust_government_corruption": 0.228289798,
        "generosity": 0.21515955,
        "lat": 29.31166,
        "lon": 47.481766
    },
    {
        "country": "Slovakia",
        "happiness_rank": 40,
        "happiness_score": 6.09800005,
        "economy_gdp_per_capita": 1.325393558,
        "family_info": 1.505059242,
        "health_life_expectancy": 0.712732911,
        "freedom": 0.295817465,
        "trust_government_corruption": 0.136544481,
        "generosity": 0.024210852,
        "lat": 48.669026,
        "lon": 19.699024
    },
    {
        "country": "Bahrain",
        "happiness_rank": 41,
        "happiness_score": 6.086999893,
        "economy_gdp_per_capita": 1.488412261,
        "family_info": 1.323110461,
        "health_life_expectancy": 0.653133035,
        "freedom": 0.536746919,
        "trust_government_corruption": 0.172668487,
        "generosity": 0.25704217,
        "lat": 26.0667,
        "lon": 50.5577
    },
    {
        "country": "Malaysia",
        "happiness_rank": 42,
        "happiness_score": 6.084000111,
        "economy_gdp_per_capita": 1.29121542,
        "family_info": 1.284646034,
        "health_life_expectancy": 0.618784428,
        "freedom": 0.402264982,
        "trust_government_corruption": 0.41660893,
        "generosity": 0.065600708,
        "lat": 4.210484,
        "lon": 101.975766
    },
    {
        "country": "Nicaragua",
        "happiness_rank": 43,
        "happiness_score": 6.071000099,
        "economy_gdp_per_capita": 0.737299204,
        "family_info": 1.28721571,
        "health_life_expectancy": 0.653095961,
        "freedom": 0.447551847,
        "trust_government_corruption": 0.301674217,
        "generosity": 0.130687982,
        "lat": 12.865416,
        "lon": -85.207229
    },
    {
        "country": "Ecuador",
        "happiness_rank": 44,
        "happiness_score": 6.007999897,
        "economy_gdp_per_capita": 1.000820398,
        "family_info": 1.286168814,
        "health_life_expectancy": 0.685636222,
        "freedom": 0.455198199,
        "trust_government_corruption": 0.150112465,
        "generosity": 0.140134647,
        "lat": -1.831239,
        "lon": -78.18340599999999
    },
    {
        "country": "El Salvador",
        "happiness_rank": 45,
        "happiness_score": 6.002999783,
        "economy_gdp_per_capita": 0.909784496,
        "family_info": 1.182125092,
        "health_life_expectancy": 0.596018553,
        "freedom": 0.43245253,
        "trust_government_corruption": 0.078257985,
        "generosity": 0.08998096,
        "lat": 13.794185,
        "lon": -88.89653
    },
    {
        "country": "Poland",
        "happiness_rank": 46,
        "happiness_score": 5.97300005,
        "economy_gdp_per_capita": 1.291787863,
        "family_info": 1.44571197,
        "health_life_expectancy": 0.699475348,
        "freedom": 0.520342112,
        "trust_government_corruption": 0.158465967,
        "generosity": 0.059307806,
        "lat": 51.919438,
        "lon": 19.145136
    },
    {
        "country": "Uzbekistan",
        "happiness_rank": 47,
        "happiness_score": 5.971000195,
        "economy_gdp_per_capita": 0.786441088,
        "family_info": 1.54896915,
        "health_life_expectancy": 0.498272628,
        "freedom": 0.658248663,
        "trust_government_corruption": 0.415983647,
        "generosity": 0.246528223,
        "lat": 41.377491,
        "lon": 64.585262
    },
    {
        "country": "Italy",
        "happiness_rank": 48,
        "happiness_score": 5.964000225,
        "economy_gdp_per_capita": 1.395066619,
        "family_info": 1.444923282,
        "health_life_expectancy": 0.853144348,
        "freedom": 0.256450713,
        "trust_government_corruption": 0.172789648,
        "generosity": 0.028028091,
        "lat": 41.87194,
        "lon": 12.56738
    },
    {
        "country": "Russia",
        "happiness_rank": 49,
        "happiness_score": 5.962999821,
        "economy_gdp_per_capita": 1.281778097,
        "family_info": 1.469282389,
        "health_life_expectancy": 0.547349334,
        "freedom": 0.373783112,
        "trust_government_corruption": 0.052263822,
        "generosity": 0.032962881,
        "lat": 61.52401,
        "lon": 105.318756
    },
    {
        "country": "Belize",
        "happiness_rank": 50,
        "happiness_score": 5.955999851,
        "economy_gdp_per_capita": 0.907975316,
        "family_info": 1.081417799,
        "health_life_expectancy": 0.450191766,
        "freedom": 0.547509372,
        "trust_government_corruption": 0.240015641,
        "generosity": 0.096581072,
        "lat": 17.189877,
        "lon": -88.49765
    },
    {
        "country": "Japan",
        "happiness_rank": 51,
        "happiness_score": 5.920000076,
        "economy_gdp_per_capita": 1.416915178,
        "family_info": 1.436337829,
        "health_life_expectancy": 0.913475871,
        "freedom": 0.505625546,
        "trust_government_corruption": 0.120572768,
        "generosity": 0.163760737,
        "lat": 36.204824,
        "lon": 138.252924
    },
    {
        "country": "Lithuania",
        "happiness_rank": 52,
        "happiness_score": 5.90199995,
        "economy_gdp_per_capita": 1.314582348,
        "family_info": 1.473516107,
        "health_life_expectancy": 0.62894994,
        "freedom": 0.234231785,
        "trust_government_corruption": 0.010164657,
        "generosity": 0.011865643,
        "lat": 55.169438,
        "lon": 23.881275
    },
    {
        "country": "Algeria",
        "happiness_rank": 53,
        "happiness_score": 5.872000217,
        "economy_gdp_per_capita": 1.091864467,
        "family_info": 1.146217465,
        "health_life_expectancy": 0.617584646,
        "freedom": 0.233335808,
        "trust_government_corruption": 0.069436647,
        "generosity": 0.14609611,
        "lat": 28.033886,
        "lon": 1.659626
    },
    {
        "country": "Latvia",
        "happiness_rank": 54,
        "happiness_score": 5.849999905,
        "economy_gdp_per_capita": 1.260748625,
        "family_info": 1.404714942,
        "health_life_expectancy": 0.638566971,
        "freedom": 0.325707912,
        "trust_government_corruption": 0.153074786,
        "generosity": 0.073842727,
        "lat": 56.879635,
        "lon": 24.603189
    },
    {
        "country": "South Korea",
        "happiness_rank": 55,
        "happiness_score": 5.837999821,
        "economy_gdp_per_capita": 1.401678443,
        "family_info": 1.128274441,
        "health_life_expectancy": 0.900214076,
        "freedom": 0.257921666,
        "trust_government_corruption": 0.206674367,
        "generosity": 0.063282669,
        "lat": 35.907757,
        "lon": 127.766922
    },
    {
        "country": "Moldova",
        "happiness_rank": 56,
        "happiness_score": 5.837999821,
        "economy_gdp_per_capita": 0.72887063,
        "family_info": 1.251825571,
        "health_life_expectancy": 0.589465201,
        "freedom": 0.240729049,
        "trust_government_corruption": 0.208779126,
        "generosity": 0.010091286,
        "lat": 47.411631,
        "lon": 28.369885
    },
    {
        "country": "Romania",
        "happiness_rank": 57,
        "happiness_score": 5.824999809,
        "economy_gdp_per_capita": 1.217683911,
        "family_info": 1.15009129,
        "health_life_expectancy": 0.685158312,
        "freedom": 0.457003742,
        "trust_government_corruption": 0.133519918,
        "generosity": 0.004387901,
        "lat": 45.943161,
        "lon": 24.96676
    },
    {
        "country": "Bolivia",
        "happiness_rank": 58,
        "happiness_score": 5.822999954,
        "economy_gdp_per_capita": 0.833756566,
        "family_info": 1.227619052,
        "health_life_expectancy": 0.47363025,
        "freedom": 0.558732927,
        "trust_government_corruption": 0.225560725,
        "generosity": 0.060477726,
        "lat": -16.290154,
        "lon": -63.58865299999999
    },
    {
        "country": "Turkmenistan",
        "happiness_rank": 59,
        "happiness_score": 5.822000027,
        "economy_gdp_per_capita": 1.130776763,
        "family_info": 1.493149161,
        "health_life_expectancy": 0.43772608,
        "freedom": 0.418271929,
        "trust_government_corruption": 0.249924988,
        "generosity": 0.25927034,
        "lat": 38.969719,
        "lon": 59.556278
    },
    {
        "country": "Kazakhstan",
        "happiness_rank": 60,
        "happiness_score": 5.818999767,
        "economy_gdp_per_capita": 1.28455627,
        "family_info": 1.384369016,
        "health_life_expectancy": 0.606041551,
        "freedom": 0.437454283,
        "trust_government_corruption": 0.201964423,
        "generosity": 0.119282886,
        "lat": 48.019573,
        "lon": 66.923684
    },
    {
        "country": "Slovenia",
        "happiness_rank": 62,
        "happiness_score": 5.757999897,
        "economy_gdp_per_capita": 1.341205955,
        "family_info": 1.452518821,
        "health_life_expectancy": 0.790828228,
        "freedom": 0.572575808,
        "trust_government_corruption": 0.242649093,
        "generosity": 0.045128979,
        "lat": 46.151241,
        "lon": 14.995463
    },
    {
        "country": "Peru",
        "happiness_rank": 63,
        "happiness_score": 5.715000153,
        "economy_gdp_per_capita": 1.035225272,
        "family_info": 1.218770385,
        "health_life_expectancy": 0.630166113,
        "freedom": 0.450002879,
        "trust_government_corruption": 0.126819715,
        "generosity": 0.047049087,
        "lat": -9.189967,
        "lon": -75.015152
    },
    {
        "country": "Mauritius",
        "happiness_rank": 64,
        "happiness_score": 5.629000187,
        "economy_gdp_per_capita": 1.189395547,
        "family_info": 1.20956099,
        "health_life_expectancy": 0.638007462,
        "freedom": 0.491247326,
        "trust_government_corruption": 0.360933751,
        "generosity": 0.042181555,
        "lat": -20.348404,
        "lon": 57.55215200000001
    },
    {
        "country": "Cyprus",
        "happiness_rank": 65,
        "happiness_score": 5.620999813,
        "economy_gdp_per_capita": 1.355938077,
        "family_info": 1.131363273,
        "health_life_expectancy": 0.844714701,
        "freedom": 0.355111539,
        "trust_government_corruption": 0.271254301,
        "generosity": 0.041237976,
        "lat": 35.126413,
        "lon": 33.429859
    },
    {
        "country": "Estonia",
        "happiness_rank": 66,
        "happiness_score": 5.611000061,
        "economy_gdp_per_capita": 1.32087934,
        "family_info": 1.4766711,
        "health_life_expectancy": 0.695168316,
        "freedom": 0.47913143,
        "trust_government_corruption": 0.098890811,
        "generosity": 0.183248922,
        "lat": 58.595272,
        "lon": 25.013607
    },
    {
        "country": "Belarus",
        "happiness_rank": 67,
        "happiness_score": 5.568999767,
        "economy_gdp_per_capita": 1.15655756,
        "family_info": 1.444945216,
        "health_life_expectancy": 0.637714267,
        "freedom": 0.295400262,
        "trust_government_corruption": 0.155137509,
        "generosity": 0.156313822,
        "lat": 53.709807,
        "lon": 27.953389
    },
    {
        "country": "Libya",
        "happiness_rank": 68,
        "happiness_score": 5.525000095,
        "economy_gdp_per_capita": 1.101803064,
        "family_info": 1.35756433,
        "health_life_expectancy": 0.52016902,
        "freedom": 0.46573323,
        "trust_government_corruption": 0.152073666,
        "generosity": 0.09261021,
        "lat": 26.3351,
        "lon": 17.228331
    },
    {
        "country": "Paraguay",
        "happiness_rank": 70,
        "happiness_score": 5.493000031,
        "economy_gdp_per_capita": 0.932537317,
        "family_info": 1.50728488,
        "health_life_expectancy": 0.579250693,
        "freedom": 0.473507792,
        "trust_government_corruption": 0.224150658,
        "generosity": 0.091065913,
        "lat": -23.442503,
        "lon": -58.443832
    },
    {
        "country": "Philippines",
        "happiness_rank": 72,
        "happiness_score": 5.429999828,
        "economy_gdp_per_capita": 0.857699215,
        "family_info": 1.253917575,
        "health_life_expectancy": 0.468009055,
        "freedom": 0.585214674,
        "trust_government_corruption": 0.193513423,
        "generosity": 0.099331893,
        "lat": 12.879721,
        "lon": 121.774017
    },
    {
        "country": "Serbia",
        "happiness_rank": 73,
        "happiness_score": 5.394999981,
        "economy_gdp_per_capita": 1.069317579,
        "family_info": 1.258189797,
        "health_life_expectancy": 0.650784671,
        "freedom": 0.208715528,
        "trust_government_corruption": 0.220125884,
        "generosity": 0.040903781,
        "lat": 44.016521,
        "lon": 21.005859
    },
    {
        "country": "Hungary",
        "happiness_rank": 75,
        "happiness_score": 5.323999882,
        "economy_gdp_per_capita": 1.286011934,
        "family_info": 1.343133092,
        "health_life_expectancy": 0.687763453,
        "freedom": 0.175863519,
        "trust_government_corruption": 0.078401662,
        "generosity": 0.036636937,
        "lat": 47.162494,
        "lon": 19.503304
    },
    {
        "country": "Jamaica",
        "happiness_rank": 76,
        "happiness_score": 5.31099987,
        "economy_gdp_per_capita": 0.925579309,
        "family_info": 1.368218064,
        "health_life_expectancy": 0.641022384,
        "freedom": 0.474307239,
        "trust_government_corruption": 0.233818337,
        "generosity": 0.055267781,
        "lat": 18.109581,
        "lon": -77.297508
    },
    {
        "country": "Croatia",
        "happiness_rank": 77,
        "happiness_score": 5.293000221,
        "economy_gdp_per_capita": 1.222556233,
        "family_info": 0.967983007,
        "health_life_expectancy": 0.701288521,
        "freedom": 0.255772293,
        "trust_government_corruption": 0.248002976,
        "generosity": 0.04310311,
        "lat": 45.1,
        "lon": 15.2
    },
    {
        "country": "Kosovo",
        "happiness_rank": 78,
        "happiness_score": 5.278999805,
        "economy_gdp_per_capita": 0.951484382,
        "family_info": 1.137853503,
        "health_life_expectancy": 0.54145205,
        "freedom": 0.260287941,
        "trust_government_corruption": 0.319931448,
        "generosity": 0.057471618,
        "lat": 42.6026359,
        "lon": 20.902977
    },
    {
        "country": "China",
        "happiness_rank": 79,
        "happiness_score": 5.272999763,
        "economy_gdp_per_capita": 1.081165791,
        "family_info": 1.160837412,
        "health_life_expectancy": 0.741415501,
        "freedom": 0.472787708,
        "trust_government_corruption": 0.028806841,
        "generosity": 0.022794275,
        "lat": 35.86166,
        "lon": 104.195397
    },
    {
        "country": "Pakistan",
        "happiness_rank": 80,
        "happiness_score": 5.269000053,
        "economy_gdp_per_capita": 0.726883531,
        "family_info": 0.67269069,
        "health_life_expectancy": 0.402047783,
        "freedom": 0.235215262,
        "trust_government_corruption": 0.315446019,
        "generosity": 0.124348067,
        "lat": 30.375321,
        "lon": 69.34511599999999
    },
    {
        "country": "Indonesia",
        "happiness_rank": 81,
        "happiness_score": 5.262000084,
        "economy_gdp_per_capita": 0.995538592,
        "family_info": 1.274444699,
        "health_life_expectancy": 0.492345721,
        "freedom": 0.443323463,
        "trust_government_corruption": 0.611704588,
        "generosity": 0.015317135,
        "lat": -0.789275,
        "lon": 113.921327
    },
    {
        "country": "Venezuela",
        "happiness_rank": 82,
        "happiness_score": 5.25,
        "economy_gdp_per_capita": 1.128431201,
        "family_info": 1.431337595,
        "health_life_expectancy": 0.617144227,
        "freedom": 0.153997123,
        "trust_government_corruption": 0.06501963,
        "generosity": 0.064491123,
        "lat": 6.42375,
        "lon": -66.58973
    },
    {
        "country": "Montenegro",
        "happiness_rank": 83,
        "happiness_score": 5.236999989,
        "economy_gdp_per_capita": 1.121129036,
        "family_info": 1.238376498,
        "health_life_expectancy": 0.667464674,
        "freedom": 0.194989055,
        "trust_government_corruption": 0.197911024,
        "generosity": 0.088174194,
        "lat": 42.708678,
        "lon": 19.37439
    },
    {
        "country": "Morocco",
        "happiness_rank": 84,
        "happiness_score": 5.235000134,
        "economy_gdp_per_capita": 0.878114581,
        "family_info": 0.774864435,
        "health_life_expectancy": 0.597710669,
        "freedom": 0.408158332,
        "trust_government_corruption": 0.032209955,
        "generosity": 0.087763183,
        "lat": 31.791702,
        "lon": -7.092619999999999
    },
    {
        "country": "Azerbaijan",
        "happiness_rank": 85,
        "happiness_score": 5.234000206,
        "economy_gdp_per_capita": 1.153601766,
        "family_info": 1.152400255,
        "health_life_expectancy": 0.540775776,
        "freedom": 0.398155838,
        "trust_government_corruption": 0.04526934,
        "generosity": 0.180987507,
        "lat": 40.143105,
        "lon": 47.576927
    },
    {
        "country": "Dominican Republic",
        "happiness_rank": 86,
        "happiness_score": 5.230000019,
        "economy_gdp_per_capita": 1.079373837,
        "family_info": 1.402416706,
        "health_life_expectancy": 0.574873745,
        "freedom": 0.552589834,
        "trust_government_corruption": 0.18696785,
        "generosity": 0.113945253,
        "lat": 18.735693,
        "lon": -70.162651
    },
    {
        "country": "Greece",
        "happiness_rank": 87,
        "happiness_score": 5.227000237,
        "economy_gdp_per_capita": 1.289487481,
        "family_info": 1.239414573,
        "health_life_expectancy": 0.810198903,
        "freedom": 0.095731251,
        "trust_government_corruption": 0,
        "generosity": 0.043289777,
        "lat": 39.074208,
        "lon": 21.824312
    },
    {
        "country": "Lebanon",
        "happiness_rank": 88,
        "happiness_score": 5.224999905,
        "economy_gdp_per_capita": 1.074987531,
        "family_info": 1.129624248,
        "health_life_expectancy": 0.735081077,
        "freedom": 0.288515985,
        "trust_government_corruption": 0.264450759,
        "generosity": 0.03751383,
        "lat": 33.854721,
        "lon": 35.862285
    },
    {
        "country": "Portugal",
        "happiness_rank": 89,
        "happiness_score": 5.195000172,
        "economy_gdp_per_capita": 1.315175295,
        "family_info": 1.367043018,
        "health_life_expectancy": 0.795843542,
        "freedom": 0.4984653,
        "trust_government_corruption": 0.095102713,
        "generosity": 0.015869452,
        "lat": 39.39987199999999,
        "lon": -8.224454
    },
    {
        "country": "Bosnia and Herzegovina",
        "happiness_rank": 90,
        "happiness_score": 5.18200016,
        "economy_gdp_per_capita": 0.982409418,
        "family_info": 1.069335938,
        "health_life_expectancy": 0.705186307,
        "freedom": 0.204403177,
        "trust_government_corruption": 0.328867495,
        "generosity": 0,
        "lat": 43.915886,
        "lon": 17.679076
    },
    {
        "country": "Honduras",
        "happiness_rank": 91,
        "happiness_score": 5.181000233,
        "economy_gdp_per_capita": 0.730573118,
        "family_info": 1.143944979,
        "health_life_expectancy": 0.58256948,
        "freedom": 0.34807986,
        "trust_government_corruption": 0.236188874,
        "generosity": 0.073345453,
        "lat": 15.199999,
        "lon": -86.241905
    },
    {
        "country": "Somalia",
        "happiness_rank": 93,
        "happiness_score": 5.151000023,
        "economy_gdp_per_capita": 0.022643184,
        "family_info": 0.721151352,
        "health_life_expectancy": 0.113989137,
        "freedom": 0.602126956,
        "trust_government_corruption": 0.291631311,
        "generosity": 0.282410324,
        "lat": 5.152149,
        "lon": 46.199616
    },
    {
        "country": "Vietnam",
        "happiness_rank": 94,
        "happiness_score": 5.073999882,
        "economy_gdp_per_capita": 0.788547575,
        "family_info": 1.277491331,
        "health_life_expectancy": 0.652168989,
        "freedom": 0.571055591,
        "trust_government_corruption": 0.234968051,
        "generosity": 0.087633237,
        "lat": 14.058324,
        "lon": 108.277199
    },
    {
        "country": "Nigeria",
        "happiness_rank": 95,
        "happiness_score": 5.073999882,
        "economy_gdp_per_capita": 0.783756256,
        "family_info": 1.215770483,
        "health_life_expectancy": 0.05691573,
        "freedom": 0.394952565,
        "trust_government_corruption": 0.230947196,
        "generosity": 0.026121566,
        "lat": 9.081999,
        "lon": 8.675277
    },
    {
        "country": "Tajikistan",
        "happiness_rank": 96,
        "happiness_score": 5.040999889,
        "economy_gdp_per_capita": 0.524713635,
        "family_info": 1.271463275,
        "health_life_expectancy": 0.529235125,
        "freedom": 0.471566707,
        "trust_government_corruption": 0.248997644,
        "generosity": 0.146377146,
        "lat": 38.861034,
        "lon": 71.276093
    },
    {
        "country": "Bhutan",
        "happiness_rank": 97,
        "happiness_score": 5.011000156,
        "economy_gdp_per_capita": 0.885416389,
        "family_info": 1.340126514,
        "health_life_expectancy": 0.495879292,
        "freedom": 0.501537681,
        "trust_government_corruption": 0.474054545,
        "generosity": 0.17338039,
        "lat": 27.514162,
        "lon": 90.433601
    },
    {
        "country": "Kyrgyzstan",
        "happiness_rank": 98,
        "happiness_score": 5.004000187,
        "economy_gdp_per_capita": 0.596220076,
        "family_info": 1.394238591,
        "health_life_expectancy": 0.553457797,
        "freedom": 0.454943389,
        "trust_government_corruption": 0.428580374,
        "generosity": 0.039439179,
        "lat": 41.20438,
        "lon": 74.766098
    },
    {
        "country": "Nepal",
        "happiness_rank": 99,
        "happiness_score": 4.961999893,
        "economy_gdp_per_capita": 0.479820192,
        "family_info": 1.179283261,
        "health_life_expectancy": 0.504130781,
        "freedom": 0.440305948,
        "trust_government_corruption": 0.394096166,
        "generosity": 0.072975546,
        "lat": 28.394857,
        "lon": 84.12400799999999
    },
    {
        "country": "Mongolia",
        "happiness_rank": 100,
        "happiness_score": 4.954999924,
        "economy_gdp_per_capita": 1.027235866,
        "family_info": 1.493011236,
        "health_life_expectancy": 0.557783484,
        "freedom": 0.394143969,
        "trust_government_corruption": 0.33846423,
        "generosity": 0.032902289,
        "lat": 46.862496,
        "lon": 103.846656
    },
    {
        "country": "South Africa",
        "happiness_rank": 101,
        "happiness_score": 4.828999996,
        "economy_gdp_per_capita": 1.054698706,
        "family_info": 1.384788632,
        "health_life_expectancy": 0.18708007,
        "freedom": 0.479246736,
        "trust_government_corruption": 0.13936238,
        "generosity": 0.072509497,
        "lat": -30.559482,
        "lon": 22.937506
    },
    {
        "country": "Tunisia",
        "happiness_rank": 102,
        "happiness_score": 4.804999828,
        "economy_gdp_per_capita": 1.007265806,
        "family_info": 0.86835146,
        "health_life_expectancy": 0.613212049,
        "freedom": 0.28968069,
        "trust_government_corruption": 0.049693357,
        "generosity": 0.086723149,
        "lat": 33.886917,
        "lon": 9.537499
    },
    {
        "country": "Egypt",
        "happiness_rank": 104,
        "happiness_score": 4.735000134,
        "economy_gdp_per_capita": 0.989701807,
        "family_info": 0.997471392,
        "health_life_expectancy": 0.520187259,
        "freedom": 0.282110155,
        "trust_government_corruption": 0.128631443,
        "generosity": 0.114381365,
        "lat": 26.820553,
        "lon": 30.802498
    },
    {
        "country": "Bulgaria",
        "happiness_rank": 105,
        "happiness_score": 4.714000225,
        "economy_gdp_per_capita": 1.161459088,
        "family_info": 1.434379458,
        "health_life_expectancy": 0.70821768,
        "freedom": 0.289231718,
        "trust_government_corruption": 0.113177694,
        "generosity": 0.011051531,
        "lat": 42.733883,
        "lon": 25.48583
    },
    {
        "country": "Sierra Leone",
        "happiness_rank": 106,
        "happiness_score": 4.709000111,
        "economy_gdp_per_capita": 0.368420929,
        "family_info": 0.984136045,
        "health_life_expectancy": 0.005564754,
        "freedom": 0.318697691,
        "trust_government_corruption": 0.293040901,
        "generosity": 0.071095176,
        "lat": 8.460555,
        "lon": -11.779889
    },
    {
        "country": "Cameroon",
        "happiness_rank": 107,
        "happiness_score": 4.695000172,
        "economy_gdp_per_capita": 0.564305365,
        "family_info": 0.946018219,
        "health_life_expectancy": 0.132892117,
        "freedom": 0.430388749,
        "trust_government_corruption": 0.236298457,
        "generosity": 0.051306631,
        "lat": 7.369721999999999,
        "lon": 12.354722
    },
    {
        "country": "Iran",
        "happiness_rank": 108,
        "happiness_score": 4.691999912,
        "economy_gdp_per_capita": 1.156873107,
        "family_info": 0.711551249,
        "health_life_expectancy": 0.639333189,
        "freedom": 0.249322608,
        "trust_government_corruption": 0.387242913,
        "generosity": 0.048761073,
        "lat": 32.427908,
        "lon": 53.688046
    },
    {
        "country": "Albania",
        "happiness_rank": 109,
        "happiness_score": 4.644000053,
        "economy_gdp_per_capita": 0.996192753,
        "family_info": 0.803685248,
        "health_life_expectancy": 0.731159747,
        "freedom": 0.381498635,
        "trust_government_corruption": 0.201312944,
        "generosity": 0.039864216,
        "lat": 41.153332,
        "lon": 20.168331
    },
    {
        "country": "Bangladesh",
        "happiness_rank": 110,
        "happiness_score": 4.607999802,
        "economy_gdp_per_capita": 0.586682975,
        "family_info": 0.735131741,
        "health_life_expectancy": 0.533241034,
        "freedom": 0.478356659,
        "trust_government_corruption": 0.172255352,
        "generosity": 0.123717859,
        "lat": 23.684994,
        "lon": 90.356331
    },
    {
        "country": "Namibia",
        "happiness_rank": 111,
        "happiness_score": 4.573999882,
        "economy_gdp_per_capita": 0.964434326,
        "family_info": 1.098470807,
        "health_life_expectancy": 0.338611811,
        "freedom": 0.520303547,
        "trust_government_corruption": 0.077133745,
        "generosity": 0.093146972,
        "lat": -22.95764,
        "lon": 18.49041
    },
    {
        "country": "Kenya",
        "happiness_rank": 112,
        "happiness_score": 4.552999973,
        "economy_gdp_per_capita": 0.560479462,
        "family_info": 1.067950726,
        "health_life_expectancy": 0.30998835,
        "freedom": 0.452763766,
        "trust_government_corruption": 0.444860309,
        "generosity": 0.064641319,
        "lat": -0.023559,
        "lon": 37.906193
    },
    {
        "country": "Mozambique",
        "happiness_rank": 113,
        "happiness_score": 4.550000191,
        "economy_gdp_per_capita": 0.23430565,
        "family_info": 0.870701015,
        "health_life_expectancy": 0.106654435,
        "freedom": 0.480791092,
        "trust_government_corruption": 0.322228104,
        "generosity": 0.179436386,
        "lat": -18.665695,
        "lon": 35.529562
    },
    {
        "country": "Senegal",
        "happiness_rank": 115,
        "happiness_score": 4.534999847,
        "economy_gdp_per_capita": 0.479309022,
        "family_info": 1.179691911,
        "health_life_expectancy": 0.409362853,
        "freedom": 0.377922267,
        "trust_government_corruption": 0.183468893,
        "generosity": 0.115460448,
        "lat": 14.497401,
        "lon": -14.452362
    },
    {
        "country": "Zambia",
        "happiness_rank": 116,
        "happiness_score": 4.513999939,
        "economy_gdp_per_capita": 0.636406779,
        "family_info": 1.003187299,
        "health_life_expectancy": 0.257835895,
        "freedom": 0.461603492,
        "trust_government_corruption": 0.249580145,
        "generosity": 0.07821355,
        "lat": -13.133897,
        "lon": 27.849332
    },
    {
        "country": "Iraq",
        "happiness_rank": 117,
        "happiness_score": 4.497000217,
        "economy_gdp_per_capita": 1.102710485,
        "family_info": 0.978613198,
        "health_life_expectancy": 0.50118047,
        "freedom": 0.288555533,
        "trust_government_corruption": 0.199637264,
        "generosity": 0.107215755,
        "lat": 33.223191,
        "lon": 43.679291
    },
    {
        "country": "Gabon",
        "happiness_rank": 118,
        "happiness_score": 4.465000153,
        "economy_gdp_per_capita": 1.198210239,
        "family_info": 1.155620217,
        "health_life_expectancy": 0.356578588,
        "freedom": 0.312328577,
        "trust_government_corruption": 0.043785378,
        "generosity": 0.076046787,
        "lat": -0.803689,
        "lon": 11.609444
    },
    {
        "country": "Ethiopia",
        "happiness_rank": 119,
        "happiness_score": 4.460000038,
        "economy_gdp_per_capita": 0.339233845,
        "family_info": 0.864669204,
        "health_life_expectancy": 0.353409708,
        "freedom": 0.408842742,
        "trust_government_corruption": 0.31265074,
        "generosity": 0.165455714,
        "lat": 9.145,
        "lon": 40.489673
    },
    {
        "country": "Sri Lanka",
        "happiness_rank": 120,
        "happiness_score": 4.440000057,
        "economy_gdp_per_capita": 1.009850144,
        "family_info": 1.259976387,
        "health_life_expectancy": 0.625130832,
        "freedom": 0.561213255,
        "trust_government_corruption": 0.490863562,
        "generosity": 0.073653966,
        "lat": 7.873053999999999,
        "lon": 80.77179699999999
    },
    {
        "country": "Armenia",
        "happiness_rank": 121,
        "happiness_score": 4.375999928,
        "economy_gdp_per_capita": 0.900596738,
        "family_info": 1.007483721,
        "health_life_expectancy": 0.637524426,
        "freedom": 0.198303267,
        "trust_government_corruption": 0.083488092,
        "generosity": 0.026674422,
        "lat": 40.069099,
        "lon": 45.038189
    },
    {
        "country": "India",
        "happiness_rank": 122,
        "happiness_score": 4.315000057,
        "economy_gdp_per_capita": 0.792221248,
        "family_info": 0.754372597,
        "health_life_expectancy": 0.455427617,
        "freedom": 0.469987005,
        "trust_government_corruption": 0.231538489,
        "generosity": 0.092226885,
        "lat": 20.593684,
        "lon": 78.96288
    },
    {
        "country": "Mauritania",
        "happiness_rank": 123,
        "happiness_score": 4.291999817,
        "economy_gdp_per_capita": 0.648457289,
        "family_info": 1.27203083,
        "health_life_expectancy": 0.28534928,
        "freedom": 0.096098043,
        "trust_government_corruption": 0.201870024,
        "generosity": 0.136957005,
        "lat": 21.00789,
        "lon": -10.940835
    },
    {
        "country": "Georgia",
        "happiness_rank": 125,
        "happiness_score": 4.285999775,
        "economy_gdp_per_capita": 0.950612664,
        "family_info": 0.570614934,
        "health_life_expectancy": 0.649546981,
        "freedom": 0.309410036,
        "trust_government_corruption": 0.054008815,
        "generosity": 0.251666635,
        "lat": 32.1656221,
        "lon": -82.9000751
    },
    {
        "country": "Mali",
        "happiness_rank": 127,
        "happiness_score": 4.190000057,
        "economy_gdp_per_capita": 0.476180494,
        "family_info": 1.281473398,
        "health_life_expectancy": 0.169365674,
        "freedom": 0.306613743,
        "trust_government_corruption": 0.183354199,
        "generosity": 0.104970247,
        "lat": 17.570692,
        "lon": -3.996166
    },
    {
        "country": "Cambodia",
        "happiness_rank": 129,
        "happiness_score": 4.168000221,
        "economy_gdp_per_capita": 0.601765096,
        "family_info": 1.006238341,
        "health_life_expectancy": 0.429783404,
        "freedom": 0.633375823,
        "trust_government_corruption": 0.385922968,
        "generosity": 0.068105951,
        "lat": 12.565679,
        "lon": 104.990963
    },
    {
        "country": "Sudan",
        "happiness_rank": 130,
        "happiness_score": 4.138999939,
        "economy_gdp_per_capita": 0.659516692,
        "family_info": 1.21400857,
        "health_life_expectancy": 0.290920824,
        "freedom": 0.014995855,
        "trust_government_corruption": 0.182317451,
        "generosity": 0.08984752,
        "lat": 12.862807,
        "lon": 30.217636
    },
    {
        "country": "Ghana",
        "happiness_rank": 131,
        "happiness_score": 4.119999886,
        "economy_gdp_per_capita": 0.667224824,
        "family_info": 0.873664737,
        "health_life_expectancy": 0.295637727,
        "freedom": 0.423026294,
        "trust_government_corruption": 0.256923944,
        "generosity": 0.02533637,
        "lat": 7.946527,
        "lon": -1.023194
    },
    {
        "country": "Ukraine",
        "happiness_rank": 132,
        "happiness_score": 4.096000195,
        "economy_gdp_per_capita": 0.894651949,
        "family_info": 1.394537568,
        "health_life_expectancy": 0.575903952,
        "freedom": 0.122974776,
        "trust_government_corruption": 0.270061463,
        "generosity": 0.023029471,
        "lat": 48.379433,
        "lon": 31.16558
    },
    {
        "country": "Uganda",
        "happiness_rank": 133,
        "happiness_score": 4.080999851,
        "economy_gdp_per_capita": 0.381430715,
        "family_info": 1.129827738,
        "health_life_expectancy": 0.217632607,
        "freedom": 0.443185955,
        "trust_government_corruption": 0.325766057,
        "generosity": 0.057069719,
        "lat": 1.373333,
        "lon": 32.290275
    },
    {
        "country": "Burkina Faso",
        "happiness_rank": 134,
        "happiness_score": 4.032000065,
        "economy_gdp_per_capita": 0.350227714,
        "family_info": 1.043280005,
        "health_life_expectancy": 0.215844259,
        "freedom": 0.324367851,
        "trust_government_corruption": 0.250864685,
        "generosity": 0.120328106,
        "lat": 12.238333,
        "lon": -1.561593
    },
    {
        "country": "Niger",
        "happiness_rank": 135,
        "happiness_score": 4.027999878,
        "economy_gdp_per_capita": 0.161925331,
        "family_info": 0.993025005,
        "health_life_expectancy": 0.268505007,
        "freedom": 0.363658696,
        "trust_government_corruption": 0.228673846,
        "generosity": 0.138572946,
        "lat": 17.607789,
        "lon": 8.081666
    },
    {
        "country": "Malawi",
        "happiness_rank": 136,
        "happiness_score": 3.970000029,
        "economy_gdp_per_capita": 0.233442038,
        "family_info": 0.512568831,
        "health_life_expectancy": 0.315089583,
        "freedom": 0.466914654,
        "trust_government_corruption": 0.28717047,
        "generosity": 0.072711654,
        "lat": -13.254308,
        "lon": 34.301525
    },
    {
        "country": "Chad",
        "happiness_rank": 137,
        "happiness_score": 3.936000109,
        "economy_gdp_per_capita": 0.438012987,
        "family_info": 0.953855872,
        "health_life_expectancy": 0.041134715,
        "freedom": 0.162342027,
        "trust_government_corruption": 0.21611385,
        "generosity": 0.053581882,
        "lat": 15.454166,
        "lon": 18.732207
    },
    {
        "country": "Zimbabwe",
        "happiness_rank": 138,
        "happiness_score": 3.875,
        "economy_gdp_per_capita": 0.375846535,
        "family_info": 1.083095908,
        "health_life_expectancy": 0.196763754,
        "freedom": 0.336384207,
        "trust_government_corruption": 0.189143494,
        "generosity": 0.095375381,
        "lat": -19.015438,
        "lon": 29.154857
    },
    {
        "country": "Lesotho",
        "happiness_rank": 139,
        "happiness_score": 3.808000088,
        "economy_gdp_per_capita": 0.521021247,
        "family_info": 1.190095186,
        "health_life_expectancy": 0,
        "freedom": 0.390661299,
        "trust_government_corruption": 0.157497272,
        "generosity": 0.11909464,
        "lat": -29.609988,
        "lon": 28.233608
    },
    {
        "country": "Angola",
        "happiness_rank": 140,
        "happiness_score": 3.795000076,
        "economy_gdp_per_capita": 0.85842818,
        "family_info": 1.10441196,
        "health_life_expectancy": 0.049868666,
        "freedom": 0,
        "trust_government_corruption": 0.09792649,
        "generosity": 0.069720335,
        "lat": -11.202692,
        "lon": 17.873887
    },
    {
        "country": "Afghanistan",
        "happiness_rank": 141,
        "happiness_score": 3.79399991,
        "economy_gdp_per_capita": 0.401477218,
        "family_info": 0.581543326,
        "health_life_expectancy": 0.180746779,
        "freedom": 0.10617952,
        "trust_government_corruption": 0.311870933,
        "generosity": 0.06115783,
        "lat": 33.93911,
        "lon": 67.709953
    },
    {
        "country": "Botswana",
        "happiness_rank": 142,
        "happiness_score": 3.766000032,
        "economy_gdp_per_capita": 1.122094154,
        "family_info": 1.221554995,
        "health_life_expectancy": 0.341755509,
        "freedom": 0.505196333,
        "trust_government_corruption": 0.099348448,
        "generosity": 0.098583199,
        "lat": -22.328474,
        "lon": 24.684866
    },
    {
        "country": "Benin",
        "happiness_rank": 143,
        "happiness_score": 3.657000065,
        "economy_gdp_per_capita": 0.431085408,
        "family_info": 0.435299844,
        "health_life_expectancy": 0.209930211,
        "freedom": 0.425962776,
        "trust_government_corruption": 0.207948461,
        "generosity": 0.060929015,
        "lat": 9.30769,
        "lon": 2.315834
    },
    {
        "country": "Madagascar",
        "happiness_rank": 144,
        "happiness_score": 3.644000053,
        "economy_gdp_per_capita": 0.305808693,
        "family_info": 0.913020372,
        "health_life_expectancy": 0.375223309,
        "freedom": 0.189196765,
        "trust_government_corruption": 0.20873253,
        "generosity": 0.067231975,
        "lat": -18.766947,
        "lon": 46.869107
    },
    {
        "country": "Haiti",
        "happiness_rank": 145,
        "happiness_score": 3.602999926,
        "economy_gdp_per_capita": 0.368610263,
        "family_info": 0.640449822,
        "health_life_expectancy": 0.27732113,
        "freedom": 0.030369857,
        "trust_government_corruption": 0.489203781,
        "generosity": 0.09987215,
        "lat": 18.971187,
        "lon": -72.285215
    },
    {
        "country": "Yemen",
        "happiness_rank": 146,
        "happiness_score": 3.592999935,
        "economy_gdp_per_capita": 0.591683447,
        "family_info": 0.935382247,
        "health_life_expectancy": 0.310080916,
        "freedom": 0.249463722,
        "trust_government_corruption": 0.104125209,
        "generosity": 0.056767423,
        "lat": 15.552727,
        "lon": 48.516388
    },
    {
        "country": "South Sudan",
        "happiness_rank": 147,
        "happiness_score": 3.59100008,
        "economy_gdp_per_capita": 0.397248626,
        "family_info": 0.601323128,
        "health_life_expectancy": 0.163486004,
        "freedom": 0.147062436,
        "trust_government_corruption": 0.285670817,
        "generosity": 0.116793513,
        "lat": 6.876991899999999,
        "lon": 31.3069788
    },
    {
        "country": "Liberia",
        "happiness_rank": 148,
        "happiness_score": 3.532999992,
        "economy_gdp_per_capita": 0.119041793,
        "family_info": 0.872117937,
        "health_life_expectancy": 0.229918197,
        "freedom": 0.332881182,
        "trust_government_corruption": 0.266549885,
        "generosity": 0.038948249,
        "lat": 6.428055,
        "lon": -9.429499000000002
    },
    {
        "country": "Guinea",
        "happiness_rank": 149,
        "happiness_score": 3.506999969,
        "economy_gdp_per_capita": 0.24454993,
        "family_info": 0.791244686,
        "health_life_expectancy": 0.194129139,
        "freedom": 0.348587513,
        "trust_government_corruption": 0.264815092,
        "generosity": 0.110937618,
        "lat": 9.945587,
        "lon": -9.696645
    },
    {
        "country": "Togo",
        "happiness_rank": 150,
        "happiness_score": 3.494999886,
        "economy_gdp_per_capita": 0.305444717,
        "family_info": 0.43188253,
        "health_life_expectancy": 0.247105569,
        "freedom": 0.380426139,
        "trust_government_corruption": 0.196896151,
        "generosity": 0.095665015,
        "lat": 8.619543,
        "lon": 0.824782
    },
    {
        "country": "Rwanda",
        "happiness_rank": 151,
        "happiness_score": 3.470999956,
        "economy_gdp_per_capita": 0.368745893,
        "family_info": 0.945707023,
        "health_life_expectancy": 0.326424807,
        "freedom": 0.581843853,
        "trust_government_corruption": 0.252756029,
        "generosity": 0.455220014,
        "lat": -1.940278,
        "lon": 29.873888
    },
    {
        "country": "Syria",
        "happiness_rank": 152,
        "happiness_score": 3.461999893,
        "economy_gdp_per_capita": 0.777153134,
        "family_info": 0.396102607,
        "health_life_expectancy": 0.500533342,
        "freedom": 0.081539445,
        "trust_government_corruption": 0.493663728,
        "generosity": 0.151347131,
        "lat": 34.80207499999999,
        "lon": 38.996815
    },
    {
        "country": "Tanzania",
        "happiness_rank": 153,
        "happiness_score": 3.348999977,
        "economy_gdp_per_capita": 0.511135876,
        "family_info": 1.041989803,
        "health_life_expectancy": 0.364509284,
        "freedom": 0.390017778,
        "trust_government_corruption": 0.354256362,
        "generosity": 0.066035107,
        "lat": -6.369028,
        "lon": 34.888822
    },
    {
        "country": "Burundi",
        "happiness_rank": 154,
        "happiness_score": 2.904999971,
        "economy_gdp_per_capita": 0.091622569,
        "family_info": 0.629793584,
        "health_life_expectancy": 0.151610792,
        "freedom": 0.059900753,
        "trust_government_corruption": 0.204435185,
        "generosity": 0.084147945,
        "lat": -3.373056,
        "lon": 29.918886
    },
    {
        "country": "Central African Republic",
        "happiness_rank": 155,
        "happiness_score": 2.693000078,
        "economy_gdp_per_capita": 0,
        "family_info": 0,
        "health_life_expectancy": 0.018772686,
        "freedom": 0.270842046,
        "trust_government_corruption": 0.280876487,
        "generosity": 0.056565076,
        "lat": 6.611110999999999,
        "lon": 20.939444
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
