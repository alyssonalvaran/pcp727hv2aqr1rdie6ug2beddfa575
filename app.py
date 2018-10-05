from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def home():
	BASE_DIR = os.getcwd() + "/static/img"
	images = os.listdir(BASE_DIR)
	
	return render_template("index.html", **locals())