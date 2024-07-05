const categories = {
    mother: [
        { question: "M: What you doing?", answer: "M : Ah look just like your father!" },
        { question: "M: What are you doing?", answer: "C : Smoking, what else?" },
        { question: "C: Ma why you dont love me?", answer: "M : Shut up laaa" }
    ],
    /*gregory: [
        { question: "G : What was the first thing I bought you?", answer: "Starbucks when we first met" },
        { question: "G : 1y location?", answer: "Define" },
        { question: "C : What mimi do?", answer: "G: Nothing" }
    ],*/
    yuka: [
        { question: "Y : Should i just go home now?", answer: "C : OMG Yueka, just go la" },
        { question: "C : Are you high?", answer: "Y : I've been flying bro" },
        { question: "Y : Why?", answer: "C : Premature!" }
    ],
    jayde: [
        { question: "C : *Asks anything*", answer: "J : huh? " },
        { question: "C : HUH!?!", answer: " :o " },
        { question: "C : Jayde stop", answer: "J/Zen : Kick you, kick you, kick you " },
        { question: "C : Jayde what you eat today", answer: "J : Hi Jaja, Hi Jaja. I like Jaja" },
        { question: "J : Where Bregaly?", answer: "C : I going to beat you jayde" },
        { question: "C : Jayde why you so smelly?", answer: "J : huh? " }
    ],
    andrew: [
        { question: "C : This is why your mother never loves you", answer: "A : pfft wtfff? " },
        { question: "C : Fucking drug addict", answer: "A : slurring* I... you, fucki... -itch " },
        { question: "A : You guys getting food?", answer: "C : You no need to eat, starve Bitch " },
        { question: "C : Oohoohohho Andrew, im gona beat you andrew oohOOhhoho", answer: "A : Wtf why?!" },
        { question: "C : Hey, Bastard... Who said you can have", answer: "A : *gives up all sad*" },
        { question: "A : I can beat you, you know?", answer: "C : Watch... just wait, i'll kill you in your sleep Andrew i'm gona, eeeeeshhhhe ,oohhoooajh... yeah just wait" }
    ]
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


// Get the button element
var timer_btn = document.getElementById("back-c-btn");

// Add an event listener to the button
timer_btn.addEventListener("click", function() {
    // Redirect to the new page when the button is clicked
    window.location.href = "timer.html";
});

// Get the button element
var gallery_btn = document.getElementById("back-g-btn");

// Add an event listener to the button
gallery_btn.addEventListener("click", function() {
    // Redirect to the new page when the button is clicked
    window.location.href = "family.html";
});