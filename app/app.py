#Flask is how you set up api endpoints
#FLASK IS SETTING UP THE WEBSITE
#FLASK WILL LOOK FOR TEMPLATES IN A TEMPLATES FOLDER!!! ASSUMED FOLDER STRUCTURE
from flask import Flask, render_template
import os
from flask import Flask, render_template, url_for, json
import pandas as pd
import json
app = Flask(__name__)


@app.route('/') # if someone goes to webpage, i want you to run this function and i want you to give back this response
def root():
    return render_template('index.html')
    
    #If we want a button on the homepage
    #return '<h1> Hello  <button> I am Button! </button> </h1>'
#@app.route('/data_2015') 
#Run function below at webpage route above
@app.route('/data')
def get_json():
    f = open('json_data/data.json')
    data = json.load(f)
    return {"data" : data}

@app.route('/data_2015')
def get_json():
    f = open('json_data/json_2015')
    data = json.load(f)
    return {"data" : data}

@app.route('/data_2016')
def get_json():
    f = open('json_data/json_2016')
    data = json.load(f)
    return {"data" : data}

@app.route('/data_2017')
def get_json():
    f = open('json_data/json_2017')
    data = json.load(f)
    return {"data" : data}

@app.route('/data_2018')
def get_json():
    f = open('json_data/json_2018')
    data = json.load(f)
    return {"data" : data}

@app.route('/data_2019')
def get_json():
    f = open('json_data/json_2019')
    data = json.load(f)
    return {"data" : data}

#If name is main, run flask
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
