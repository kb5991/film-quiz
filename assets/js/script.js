/* Functions have been written with help from YouTube */
/* Target DOM elements */
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

/* Creating an array with objects for my questions */
let questions = [
    {
        question: 'What is the name of the building where the events of Die Hard take place?',
        choice1: 'The Eiffel Tower',
        choice2: 'Nakatomi Tower',
        choice3: 'Nakatomi Plaza',
        choice4: 'The Rockerfeller Center',
        answer: 3,
    },
    {
        question: 'Where does John Wick check-in after retrieving his weapons and gold coins from under his floor in the first John Wick?',
        choice1: 'The Rosewood',
        choice2: 'Chateau Marmont',
        choice3: 'The Beverly Hills Hotel',
        choice4: 'The Continental Hotel',
        answer: 4,
    },
    {
        question: 'Which James Bond film marked the first appearance of M played by Dame Judi Dench?',
        choice1: 'Golden Eye',
        choice2: 'Casino Royale',
        choice3: 'Skyfall',
        choice4: 'Licence to Kill',
        answer: 1,
    },
    {
        question: 'Who stars in Atomic Blonde?',
        choice1: 'Cameron Diaz',
        choice2: 'Charlize Theron',
        choice3: 'Dianna Agron',
        choice4: 'Hayden Panettiere',
        answer: 2,
    },
    {
        question: 'What is the main character, played by Ryan Gosling, in Drive called?',
        choice1: 'His name is never said',
        choice2: 'Bob',
        choice3: 'Dave',
        choice4: 'Ryan',
        answer: 1,
    },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;
/* This will keep track of the score */
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('end.html');
    }
    /* This will increment the question counter by 1 each time, e.g. question 1 of 5 */
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    /*This will update the progress bar */
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    /* This will keep track of the question the user is on */
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
    /* This will tell us the choice that the user has clicked on */
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    /* This will add and replace our questions from the quiz */
    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
};
/* This listens for the user's click and will toggle the CSS to colour the answer either green or red dependent on whether the choice is true or false */
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
/* This will increment the score by 100 if the user clicks a true choice */
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
/* This makes sure that when a choice is clicked, there is time to show whether the answer chosen is true or false and will run the next question after */
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000);
    });
});
/* This makes sure the score updates */
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();