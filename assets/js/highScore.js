function displayHighScore() {

    var player = localStorage.getItem('playerName');
    var highScore = localStorage.getItem('score');

    console.log(player + highScore)

}
    
displayHighScore();