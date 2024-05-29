const categories = {
    mother: [
        { question: "M: What you doing?", answer: "M: Ah look just like your father!" },
        { question: "M: What are you doing?", answer: "C: Smoking, what else?" }
    ],
    gregory: [
        { question: "G : What was the first thing I bought you?", answer: "Starbucks when we first met" },
        { question: "G : 1y location?", answer: "Define" },
        { question: "G : Our most played game together?", answer: "Overwatch ... 500hrs in game time" }
    ],
    yuka: [
        { question: "Y : Should i just go home now?", answer: "C : OMG Yueka, just go la" },
        { question: "C : Are you high?", answer: "I've been flying" },
        { question: "Y : Why?", answer: "C : Premature!" }
    ],
    jayde: [
        { question: "J : Huh?", answer: " huh? " },
        { question: "J : HUH!?!", answer: " :o " },
        { question: "J : Where Bregaly?", answer: "I going to beat you jayde" },
        { question: "C : Jayde why you so smelly?", answer: " huh? " },
    ],
};

let currentCategory = null;
let currentQuestion = null;

const categoryButtons = document.querySelectorAll('.category-btn');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const revealButton = document.getElementById('reveal-btn');
const resetButton = document.getElementById('reset-btn');
const anotherButton = document.getElementById('another-btn');

function selectCategory(category) {
    currentCategory = category;
    const questions = categories[category];
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    questionElement.innerText = currentQuestion.question;
    answerElement.style.display = 'none';
    resetButton.style.display = 'none';
    anotherButton.style.display = 'none';
    revealButton.style.display = 'block';
}

function revealAnswer() {
    answerElement.innerText = `${currentQuestion.answer}`;
    answerElement.style.display = 'block';
    resetButton.style.display = 'block';
    anotherButton.style.display = 'block';
    revealButton.style.display = 'none';
}

function resetGame() {
    currentCategory = null;
    currentQuestion = null;
    questionElement.innerText = '';
    answerElement.innerText = '';
    answerElement.style.display = 'none';
    resetButton.style.display = 'none';
    anotherButton.style.display = 'none';
    revealButton.style.display = 'none';
}

function selectAnotherQuestion() {
    const questions = categories[currentCategory];
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    questionElement.innerText = currentQuestion.question;
    answerElement.style.display = 'none';
    resetButton.style.display = 'none';
    anotherButton.style.display = 'none';
    revealButton.style.display = 'block';
}

categoryButtons.forEach(button => {
    button.addEventListener('click', () => selectCategory(button.getAttribute('data-category')));
});

revealButton.addEventListener('click', revealAnswer);
resetButton.addEventListener('click', resetGame);
anotherButton.addEventListener('click', selectAnotherQuestion);
