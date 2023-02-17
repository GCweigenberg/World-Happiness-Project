DROP TABLE happy_2015;
DROP TABLE happy_2016;
DROP TABLE happy_2017;
DROP TABLE happy_2018;
DROP TABLE happy_2019;

create TABLE happy_2015 (
	country VARCHAR(50) PRIMARY KEY,
	region VARCHAR(50),
	happiness_rank INT,
	happiness_score DECIMAL(7,5),
	economy_gdp_per_capita DECIMAL(7,5),
	family_info DECIMAL(7,5),
	health_life_expectancy DECIMAL(7,5),
	freedom DECIMAL(7,5),
	trust_government_corruption DECIMAL(7,5),
	generosity DECIMAL(7,5)
);
SELECT * FROM happy_2015;

create TABLE happy_2016 (
	country VARCHAR(50) PRIMARY KEY,
	region VARCHAR(50),
	happiness_rank INT,
	happiness_score DECIMAL(7,5),
	economy_gdp_per_capita DECIMAL(7,5),
	family_info DECIMAL(7,5),
	health_life_expectancy DECIMAL(7,5),
	freedom DECIMAL(7,5),
	trust_government_corruption DECIMAL(7,5),
	generosity DECIMAL(7,5)
);
SELECT * FROM happy_2016;

create TABLE happy_2017 (
	country VARCHAR(50) PRIMARY KEY,
	happiness_rank INT,
	happiness_score DECIMAL(7,5),
	economy_gdp_per_capita DECIMAL(7,5),
	family_info DECIMAL(7,5),
	health_life_expectancy DECIMAL(7,5),
	freedom DECIMAL(7,5),
	trust_government_corruption DECIMAL(7,5),
	generosity DECIMAL(7,5)
);
SELECT * FROM happy_2017;
	
create TABLE happy_2018 (
	happiness_rank INT,
	country VARCHAR(50) PRIMARY KEY,
	happiness_score DECIMAL(7,5),
	economy_gdp_per_capita DECIMAL(7,5),
	family_info DECIMAL(7,5),
	health_life_expectancy DECIMAL(7,5),
	freedom DECIMAL(7,5),
	generosity DECIMAL(7,5),
	trust_government_corruption DECIMAL(7,5)
);
SELECT * FROM happy_2018;

create TABLE happy_2019 (
	happiness_rank INT,
	country VARCHAR(50) PRIMARY KEY,
	happiness_score DECIMAL(7,5),
	economy_gdp_per_capita DECIMAL(7,5),
	family_info DECIMAL(7,5),
	health_life_expectancy DECIMAL(7,5),
	freedom DECIMAL(7,5),
	generosity DECIMAL(7,5),
	trust_government_corruption DECIMAL(7,5)
);
SELECT * FROM happy_2019;
	
	