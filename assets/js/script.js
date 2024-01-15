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
    {
        question: 'Where does John Wick check-in after retrieving his weapons and gold coins from under his floor in the first John Wick?',
        choice 1: 'The Rosewood',
        choice 2: 'Chateau Marmont',
        choice 3: 'The Beverly Hills Hotel',
        choice 4: 'The Continental Hotel',
        answer: 4,
    },
    {
        question: 'Which James Bond film marked the first appearance of M played by Dame Judi Dench?',
        choice 1: 'Golden Eye',
        choice 2: 'Casino Royale',
        choice 3: 'Skyfall',
        choice 4: 'Licence to Kill',
        answer: 1,
    },
    {
        question: 'Who stars in Atomic Blonde?',
        choice 1: 'Cameron Diaz',
        choice 2: 'Charlize Theron',
        choice 3: 'Dianna Agron',
        choice 4: 'Hayden Panettiere',
        answer: 2,
    },
    {
        question: 'What is the main character, played by Ryan Gosling, in Drive called?',
        choice 1: 'His name is never said',
        choice 2: 'Bob',
        choice 3: 'Dave',
        choice 4: 'Ryan',
        answer: 1,
    },
]