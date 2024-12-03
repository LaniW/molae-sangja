from flask import Flask, render_template, request, jsonify
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import re
import json
from sacrebleu import corpus_bleu

app = Flask(__name__)

model_name = "Helsinki-NLP/opus-mt-tc-big-en-ko"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

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
    english_sentence = content.get("english_sentence", "")

    try:
        inputs = tokenizer(english_sentence, return_tensors="pt", truncation=True)
        outputs = model.generate(inputs["input_ids"], max_length=100, num_beams=4, early_stopping=True)
        translation = tokenizer.decode(outputs[0], skip_special_tokens=True)
        return jsonify({"translation": translation})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
