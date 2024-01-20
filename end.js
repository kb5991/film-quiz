/* Target DOM elements */
const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = document.querySelector('#mostRecentScore');

/* This will get the highscores that have been submitted */
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore
/* This will reenable the save button when a key is pressed to enter username */
username.addEventListener('keyup', () =>{
    saveScoreBtn.disable = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })
/* Removes elements from an array and if necessary adds new elements in their place deleting the elements there */
    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}