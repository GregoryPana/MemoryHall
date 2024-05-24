const categories = {
    mother: [
        { question: "Who was the first president of the United States?", answer: "George Washington" },
        { question: "In which year did World War II end?", answer: "1945" },
        { question: "Who wrote 'The Communist Manifesto'?", answer: "Karl Marx" }
    ],
    gregory: [
        { question: "What is the chemical symbol for water?", answer: "H2O" },
        { question: "Who discovered penicillin?", answer: "Alexander Fleming" },
        { question: "What is the closest planet to the sun?", answer: "Mercury" }
    ],
    yuka: [
        { question: "Which movie won the Academy Award for Best Picture in 1994?", answer: "Forrest Gump" },
        { question: "Who directed the 'Lord of the Rings' trilogy?", answer: "Peter Jackson" },
        { question: "Who played Neo in 'The Matrix'?", answer: "Keanu Reeves" }
    ],
    jayde: [
        { question: "Huh?", answer: " huh? " },
        { question: "HUH!?!", answer: " :o " },
        { question: "where bregaly?", answer: "I going to beat you jayde" }
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
