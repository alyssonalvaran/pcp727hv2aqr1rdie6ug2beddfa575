from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
	images = ["dontQuit", "Einstein", "findIt", "lookCloser_QR", "POV", "Thinking", "tooSoon"]
	return render_template("index.html", **locals())