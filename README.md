# World-Happiness-Project

Group Members: Jonathan Arp, Michael “Gabe” Cweigenberg, Jesse DeLaCruz, Nicolette Keplinger, Dylan Kurbel

Purpose: The purpose of this project is to tell a story using data visualizations. We chose to look at the World Happiness Report and visualize the rankings on a map over a 5 year period (2015-2019). Additionally, we want to see the metadata for each country to see what factors are leading to their happiness or lack thereof.

Data source: https://www.kaggle.com/datasets/unsdsn/world-happiness

Process:  
(1) Create a database to store our data from the World Happiness Report.  
(2) Use geocode to extract coordinates for each country in our data set.  
(3) Use SQL Alchemy to query our database and then merge with coordinates using pandas.  
(4) Convert DataFrame to a JSON file.  
(5) Set up Flask endpoints to read HTML files.  
(6) HTML file sets up Leaflet and reads JavaScript file for data.

<img width="1470" alt="Screen Shot 2023-02-27 at 4 31 11 PM" src="https://user-images.githubusercontent.com/116036703/221701168-f524e4fa-3160-4500-b744-3400b817068d.png">

<img width="1470" alt="Screen Shot 2023-02-27 at 4 35 29 PM" src="https://user-images.githubusercontent.com/116036703/221701567-4d7782ed-f537-42d9-b82c-6f9e46e17a4c.png">


Conclusion:

