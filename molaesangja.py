from flask import Flask, render_template, request, jsonify
from transformers import pipeline
import re
import json
from sacrebleu import corpus_bleu

app = Flask(__name__)

pipe = pipeline("text-generation", model="microsoft/Phi-3-mini-4k-instruct", trust_remote_code=True)

with open("data/processed_corpus.json", "r", encoding="utf-8") as f:
    corpus_data = json.load(f)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/data', methods=['GET'])
def get_data():
    return jsonify(corpus_data)

@app.route('/translate', methods=['POST'])
def translate():
    content = request.json
    user_input = content.get("prompt", "")
    english_sentence = content.get("english_sentence", "")

    try:
        response = pipe(user_input)
        translation = response[0]["generated_text"] if response else "No output"
        return jsonify({"translation": translation})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
