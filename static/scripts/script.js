// Data for prompts and translations
const prompts = [
    "I'm not a student.",
    "How are you?",
    "What is your name?",
    "Where is the library?",
    "Can you help me?"
];

const translations = [
    { koreanFormal: "저는 학생이 아니에요.", scoreFormal: 0.7, koreanPlain: "나는 학생이 아니다.", scorePlain: 0.3 },
    { koreanFormal: "어떻게 지내세요?", scoreFormal: 0.9, koreanPlain: "어떻게 지내?", scorePlain: 0.8 },
    { koreanFormal: "당신의 이름은 무엇입니까?", scoreFormal: 0.85, koreanPlain: "이름이 뭐야?", scorePlain: 0.6 },
    { koreanFormal: "도서관이 어디에 있습니까?", scoreFormal: 0.88, koreanPlain: "도서관 어디야?", scorePlain: 0.7 },
    { koreanFormal: "저를 도와주실 수 있나요?", scoreFormal: 0.9, koreanPlain: "나 좀 도와줄래?", scorePlain: 0.7 }
];

let currentIndex = 0;

// Update the UI with the current prompt and translations
function updateUI() {
    const englishPrompt = document.getElementById('english-prompt');
    const koreanFormal = document.getElementById('adaptive-korean');
    const scoreFormal = document.getElementById('adaptive-score');
    const koreanPlain = document.getElementById('basic-korean');
    const scorePlain = document.getElementById('basic-score');

    // Update text and scores
    englishPrompt.textContent = prompts[currentIndex];
    koreanFormal.textContent = translations[currentIndex].koreanFormal;
    scoreFormal.textContent = translations[currentIndex].scoreFormal.toFixed(1);
    koreanPlain.textContent = translations[currentIndex].koreanPlain;
    scorePlain.textContent = translations[currentIndex].scorePlain.toFixed(1);
}

// Handle left arrow button click
function handleLeftArrow() {
    console.log('Left arrow clicked');
    currentIndex = (currentIndex - 1 + prompts.length) % prompts.length; // Wrap around to the last item
    updateUI();
}

// Handle right arrow button click
function handleRightArrow() {
    console.log('Right arrow clicked');
    currentIndex = (currentIndex + 1) % prompts.length; // Wrap around to the first item
    updateUI();
}

// Attach event listeners
document.addEventListener('prompt-input', function (event) {
    if (event.target.classList.contains('auto-expand')) {
        event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed'); // Check if this appears

    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    if (leftArrow) {
        leftArrow.addEventListener("click", handleLeftArrow);
        console.log('Left arrow listener attached'); // Confirm listener
    } else {
        console.error('Left arrow button not found'); // Error if not found
    }

    if (rightArrow) {
        rightArrow.addEventListener("click", handleRightArrow);
        console.log('Right arrow listener attached'); // Confirm listener
    } else {
        console.error('Right arrow button not found'); // Error if not found
    }

    updateUI();
});

// Initialize the UI with the first prompt
