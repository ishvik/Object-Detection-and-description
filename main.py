from flask import Flask, render_template
from freshlybuiltimagebol import bhasha_codes
import detector

app=Flask(__name__)

@app.route("/")
def home():
	languages=bhasha_codes.bhasha_kosh.values()
	return render_template('Index.html',languages=languages)

@app.route("/camera", methods=["POST"])
def camera():
	output=detector.detect()

app.run(debug=True)