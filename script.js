const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "None of these"],
        answer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["Java", "Python", "CSS", "C++"],
        answer: 2
    },
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        answer: 1
    },
    {
        question: "Which tag is used for links in HTML?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: 1
    },
    {
        question: "What does JS stand for?",
        options: ["Java Style", "JavaScript", "Just Script", "None of these"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
    answered = false;
    const q = questions[currentQuestion];
    document.getElementById('questionNumber').textContent =
        'Question ' + (currentQuestion + 1) + ' of ' + questions.length;
    document.getElementById('question').textContent = q.question;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    q.options.forEach(function (option, index) {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.classList.add('option');
        btn.addEventListener('click', function () {
            checkAnswer(index, btn);
        });
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected, btn) {
    if (answered) return;
    answered = true;

    const correct = questions[currentQuestion].answer;
    const allOptions = document.querySelectorAll('.option');

    if (selected === correct) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
        allOptions[correct].classList.add('correct');
    }
}

document.getElementById('nextBtn').addEventListener('click', function () {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('quizBox').classList.add('hidden');
        document.getElementById('resultBox').classList.remove('hidden');
        document.getElementById('scoreText').textContent =
            'You scored ' + score + ' out of ' + questions.length + '!';
    }
});

document.getElementById('restartBtn').addEventListener('click', function () {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quizBox').classList.remove('hidden');
    document.getElementById('resultBox').classList.add('hidden');
    loadQuestion();
});

loadQuestion();