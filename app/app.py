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

@app.route('/data') 
#Run function below at webpage route above
def data():
    return {'sample':2015, 'json':2015} #list of dictionaries 

#If name is main, run flask
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
