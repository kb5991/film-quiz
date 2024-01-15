/* Target DOM elements */
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter=0;
let availableQuestions = []

/* Creating an array with objects for my questions */
let questions = [
    {
        question: 'What is the name of the building where the events of Die Hard take place?',
        choice 1: 'The Eiffel Tower',
        choice 2: 'Nakatomi Tower',
        choice 3: 'Nakatomi Plaza',
        choice 4: 'The Rockerfeller Center',
        answer: 3,
    },
]