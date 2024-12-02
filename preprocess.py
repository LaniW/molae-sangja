import pandas as pd

file_path = "conversations.csv"
data = pd.read_csv(file_path)
print(data.head())
english_sentences = data['eng_sent']
korean_sentences = data['kor_sent']

processed_data = []
for eng, kor in zip(english_sentences, korean_sentences):
    processed_data.append({
        "english": eng.strip(),
        "korean": kor.strip(),
    })

import json
with open("processed_corpus.json", "w", encoding="utf-8") as f:
    json.dump(processed_data, f, ensure_ascii=False, indent=4)
