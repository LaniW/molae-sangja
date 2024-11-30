// Predefined sentences and translations
const sentences = [
    {
        english: "I'm not a student.",
        adaptiveKorean: "저는 학생이 아니에요.",
        basicKorean: "나는 학생이 아니다.",
        adaptiveScore: "0.7",
        basicScore: "0.3"
    },
    {
        english: "I like coffee.",
        adaptiveKorean: "저는 커피를 좋아해요.",
        basicKorean: "나는 커피를 좋아한다.",
        adaptiveScore: "0.8",
        basicScore: "0.5"
    },
    {
        english: "The weather is nice today.",
        adaptiveKorean: "오늘 날씨가 좋아요.",
        basicKorean: "오늘 날씨가 좋다.",
        adaptiveScore: "0.9",
        basicScore: "0.6"
    }
];

// Current sentence index
let currentIndex = 0;

// Update the UI with the current sentence data
function updateUI() {
    const sentence = sentences[currentIndex];
    document.getElementById("english-prompt").textContent = sentence.english;
    document.getElementById("adaptive-korean").textContent = sentence.adaptiveKorean;
    document.getElementById("adaptive-score").textContent = sentence.adaptiveScore;
    document.getElementById("basic-english").textContent = sentence.english;
    document.getElementById("basic-korean").textContent = sentence.basicKorean;
    document.getElementById("basic-score").textContent = sentence.basicScore;
}

// Navigate to the previous sentence
function previousSentence() {
    currentIndex = (currentIndex === 0) ? sentences.length - 1 : currentIndex - 1;
    updateUI();
}

// Navigate to the next sentence
function nextSentence() {
    currentIndex = (currentIndex + 1) % sentences.length;
    updateUI();
}

// Initialize the UI
document.addEventListener("DOMContentLoaded", () => {
    updateUI();

    // Debugging: Log currentIndex changes
    console.log("Application Initialized. Current Index:", currentIndex);
});
