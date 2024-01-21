/* Target DOM elements */
const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

/* This will get the highscores that have been submitted */
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;
/* This will reenable the save button when a key is pressed to enter username */
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});
/* This will save the highscore to the leaderboard */
saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });
/* This will remove and replace names on the leaderboard once 5 places on the leaderboad have been taken */
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
/* This will redirect user to homepage */
    window.location.assign('/film-quiz/');

};