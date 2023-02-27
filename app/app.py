#Flask is how you set up api endpoints
#FLASK IS SETTING UP THE WEBSITE
#FLASK WILL LOOK FOR TEMPLATES IN A TEMPLATES FOLDER!!! ASSUMED FOLDER STRUCTURE
import os
from flask import Flask, render_template, url_for, json, jsonify
import pandas as pd
app = Flask(__name__, template_folder='templates')


@app.route('/') # if someone goes to webpage, i want you to run this function and i want you to give back this response
def root():
    return render_template('root.html')
    
#@app.route('/data_2015') 
#Run function below at webpage route above
@app.route('/2015')
def map2015():
    return render_template('index.html')


@app.route('/2016')
def map2016():
    return render_template('map2016.html')

@app.route('/2017')
def map2017():
    return render_template('map2017.html')

@app.route('/2018')
def map2018():
    return render_template('map2018.html')

@app.route('/2019')
def map2019():
    return render_template('map2019.html')

#If name is main, run flask
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050, debug=True)
