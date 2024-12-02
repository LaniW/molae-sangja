from flask import Flask, render_template, request, jsonify
import openai
import json
from sacrebleu import corpus_bleu

app = Flask(__name__)

with open("data/processed_corpus.json", "r", encoding="utf-8") as f:
    corpus_data = json.load(f)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/data', methods=['GET'])
def get_data():
    return jsonify(corpus_data)

if __name__ == "__main__":
    app.run(debug=True)