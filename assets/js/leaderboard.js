/* Functions have been written with help from YouTube */
const highScoresList = document.querySelector('#highScoresList');
/* This will get the highscores for the leaderboard */
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
/* This will show the score as a list, showing the name and the score */
highScoresList.innerHTML =
    highScores.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    }).join("");