#Flask is how you set up api endpoints
#FLASK IS SETTING UP THE WEBSITE
#FLASK WILL LOOK FOR TEMPLATES IN A TEMPLATES FOLDER!!! ASSUMED FOLDER STRUCTURE
from flask import Flask, render_template
import pandas as pd
app = Flask(__name__)


@app.route('/') # if someone goes to webpage, i want you to run this function and i want you to give back this response
def root():
    return render_template('index.html')
    
    #If we want a button on the homepage
    #return '<h1> Hello  <button> I am Button! </button> </h1>'  

@app.route('/happy_2015') 
#Run function below at webpage route above
def json_2015():
    return {'sample':2015, 'json':2015}

@app.route('/happy_2016') 
#Run function below at webpage route above
def json_2016():
    return {'sample':2016, 'json':2016}

@app.route('/happy_2017') 
#Run function below at webpage route above
def json_2017():
    return {'sample':2017, 'json':2017}

@app.route('/happy_2018') 
#Run function below at webpage route above
def json_2018():
    return {'sample':2018, 'json':2018}

@app.route('/happy_2019') 
#Run function below at webpage route above
def json_2019():
    return {'sample':2019, 'json':2019}

#If name is main, run flask
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
