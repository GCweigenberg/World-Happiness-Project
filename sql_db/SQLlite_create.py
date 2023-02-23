# Dependencies
# ----------------------------------
import csv
import sqlite3
# Imports the method used for connecting to DBs
from sqlalchemy import create_engine

# Imports the methods needed to abstract classes into tables
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

# Allow us to declare column types
from sqlalchemy import Column, Integer, String, Float 

#make connection to database
connection = sqlite3.connect('Sqlite3_World_Happiness.db')

#create a cursor object to execute SQL queries on a database table
cursor = connection.cursor()

#2015
#Create Table happy_2015
# drop table
cursor.execute("DROP TABLE happy_2015")
create_table = '''CREATE TABLE happy_2015(
    country VARCHAR(50) PRIMARY KEY,
	region VARCHAR(50),
	happiness_rank INT,
	happiness_score DECIMAL(7,5),
	economy_gdp_per_capita DECIMAL(7,5),
	family_info DECIMAL(7,5),
	health_life_expectancy DECIMAL(7,5),
	freedom DECIMAL(7,5),
	trust_government_corruption DECIMAL(7,5),
	generosity DECIMAL(7,5)); 
    '''
# Creating the table into our database
cursor.execute(create_table)

# Opening the happy_2015.csv file
file = open('../csv_files/happy_2015.csv')
# Reading the contents of the happy_2015.csv file
contents = csv.reader(file)

# SQL query to insert data into the happy_2015 table
insert_records = "INSERT INTO happy_2015 (country, region,happiness_rank,happiness_score,economy_gdp_per_capita, \
family_info,health_life_expectancy,freedom,trust_government_corruption,generosity) VALUES(?, ?, ?, ?, ?, ?, ? , ?, ? , ?)"

# Importing the contents of the file into our happy_2015 table
cursor.executemany(insert_records, contents)

# SQL query to retrieve all data from the person table To verify that the data of the csv file has been successfully inserted into the table
select_all = "SELECT * FROM happy_2015"
rows = cursor.execute(select_all).fetchall()

# Output to the console screen
for r in rows:
    print(r)
 
# Committing the changes
connection.commit()

#2016
#Create Table happy_2016
# drop table
cursor.execute("DROP TABLE happy_2016")
create_table = '''CREATE TABLE happy_2016(
    country VARCHAR(50) PRIMARY KEY,
	region VARCHAR(50),
	happiness_rank INT,
	happiness_score DECIMAL(7,5),
	economy_gdp_per_capita DECIMAL(7,5),
	family_info DECIMAL(7,5),
	health_life_expectancy DECIMAL(7,5),
	freedom DECIMAL(7,5),
	trust_government_corruption DECIMAL(7,5),
	generosity DECIMAL(7,5)); 
    '''
# Creating the table into our database
cursor.execute(create_table)

# Opening the happy_2016.csv file
file = open('../csv_files/happy_2016.csv')
# Reading the contents of the happy_2016.csv file
contents = csv.reader(file)

# SQL query to insert data into the happy_2016 table
insert_records = "INSERT INTO happy_2016 (country, region,happiness_rank,happiness_score,economy_gdp_per_capita, \
family_info,health_life_expectancy,freedom,trust_government_corruption,generosity) VALUES(?, ?, ?, ?, ?, ?, ? , ?, ? , ?)"

# Importing the contents of the file into our happy_2016 table
cursor.executemany(insert_records, contents)

# SQL query to retrieve all data from the person table To verify that the data of the csv file has been successfully inserted into the table
select_all = "SELECT * FROM happy_2016"
rows = cursor.execute(select_all).fetchall()

# Output to the console screen
for r in rows:
    print(r)
 
# Committing the changes
connection.commit()

#2017
#Create Table happy_2017
# drop table
cursor.execute("DROP TABLE happy_2017")
create_table = '''CREATE TABLE happy_2017(
   	country VARCHAR(50) PRIMARY KEY,
	happiness_rank INT,
	happiness_score DECIMAL(7,5),
	economy_gdp_per_capita DECIMAL(7,5),
	family_info DECIMAL(7,5),
	health_life_expectancy DECIMAL(7,5),
	freedom DECIMAL(7,5),
	trust_government_corruption DECIMAL(7,5),
	generosity DECIMAL(7,5)); 
    '''
# Creating the table into our database
cursor.execute(create_table)

# Opening the happy_2017.csv file
file = open('../csv_files/happy_2017.csv')
# Reading the contents of the happy_2017.csv file
contents = csv.reader(file)

# SQL query to insert data into the happy_2017 table
insert_records = "INSERT INTO happy_2017 (country,happiness_rank,happiness_score,economy_gdp_per_capita, \
family_info,health_life_expectancy,freedom,trust_government_corruption,generosity) VALUES(?, ?, ?, ?, ?, ?, ? , ?, ? )"

# Importing the contents of the file into our happy_2017 table
cursor.executemany(insert_records, contents)

# SQL query to retrieve all data from the person table To verify that the data of the csv file has been successfully inserted into the table
select_all = "SELECT * FROM happy_2017"
rows = cursor.execute(select_all).fetchall()

# Output to the console screen
for r in rows:
    print(r)
 
# Committing the changes
connection.commit()

#2018
#Create Table happy_2018
# drop table
cursor.execute("DROP TABLE happy_2018")
create_table = '''CREATE TABLE happy_2018(
	happiness_rank INT,
	country VARCHAR(50) PRIMARY KEY,
	happiness_score DECIMAL(7,5),
	economy_gdp_per_capita DECIMAL(7,5),
	family_info DECIMAL(7,5),
	health_life_expectancy DECIMAL(7,5),
	freedom DECIMAL(7,5),
	generosity DECIMAL(7,5),
	trust_government_corruption DECIMAL(7,5)); 
    '''
# Creating the table into our database
cursor.execute(create_table)

# Opening the happy_2018.csv file
file = open('../csv_files/happy_2018.csv')
# Reading the contents of the happy_2018.csv file
contents = csv.reader(file)

# SQL query to insert data into the happy_2018 table
insert_records = "INSERT INTO happy_2018 (happiness_rank,country, happiness_score,economy_gdp_per_capita, \
family_info,health_life_expectancy,freedom,trust_government_corruption,generosity) VALUES(?, ?, ?, ?, ?, ?, ? , ?, ? )"

# Importing the contents of the file into our happy_2018 table
cursor.executemany(insert_records, contents)

# SQL query to retrieve all data from the person table To verify that the data of the csv file has been successfully inserted into the table
select_all = "SELECT * FROM happy_2018"
rows = cursor.execute(select_all).fetchall()

# Output to the console screen
for r in rows:
    print(r)
 
# Committing the changes
connection.commit()

#2019
#Create Table happy_2019
# drop table
cursor.execute("DROP TABLE happy_2019")
create_table = '''CREATE TABLE happy_2019(
	happiness_rank INT,
	country VARCHAR(50) PRIMARY KEY,
	happiness_score DECIMAL(7,5),
	economy_gdp_per_capita DECIMAL(7,5),
	family_info DECIMAL(7,5),
	health_life_expectancy DECIMAL(7,5),
	freedom DECIMAL(7,5),
	generosity DECIMAL(7,5),
	trust_government_corruption DECIMAL(7,5)); 
    '''
# Creating the table into our database
cursor.execute(create_table)

# Opening the happy_2019.csv file
file = open('../csv_files/happy_2019.csv')
# Reading the contents of the happy_2019.csv file
contents = csv.reader(file)

# SQL query to insert data into the happy_2019 table
insert_records = "INSERT INTO happy_2019 (happiness_rank,country, happiness_score,economy_gdp_per_capita, \
family_info,health_life_expectancy,freedom,trust_government_corruption,generosity) VALUES(?, ?, ?, ?, ?, ?, ? , ?, ? )"

# Importing the contents of the file into our happy_2019 table
cursor.executemany(insert_records, contents)

# SQL query to retrieve all data from the person table To verify that the data of the csv file has been successfully inserted into the table
select_all = "SELECT * FROM happy_2018"
rows = cursor.execute(select_all).fetchall()

# Output to the console screen
for r in rows:
    print(r)
 
# Committing the changes
connection.commit()

# closing the database connection
connection.close()