function displayHighScore() {

    var player = (localStorage.getItem('playerName'));
    var highScore = JSON.parse(localStorage.getItem('score'));

    console.log(player + highScore);

    let highScoreEl = document.querySelector('.highScore');
    highScoreEl.textContent = player + " " + highScore;

}
    
displayHighScore();