let score = 0;
let i = 0;

// arrays hold all needed question data
let questions = [
    {
        question: "what is the airspeed velocity of an unladen swallow?",
        choice1: "Fast",
        choice2: "speedy",
        choice3: "slow",
        choice4: "turtle",
        correct: 'a'
    },
    {
        question: "how much wood could a woodchuck chuck",
        choice1: "a lot",
        choice2: "a little",
        choice3: "none",
        choice4: "infinity",
        correct: 'a'
    }

];

function displayQuestions() {
// continue running through questions if more remain
if (questions.length > i){

    let questionEl = document.querySelector('#questionText');
    questionEl.textContent = questions[i].question;
// creates javascript element tied to html id of choice1
    let choiceEl1 = document.querySelector('#choice1');
    let choiceEl2 = document.querySelector('#choice2');
    let choiceEl3 = document.querySelector('#choice3');
    let choiceEl4 = document.querySelector('#choice4');
   
// displays the different answers for each question
    choiceEl1.textContent = questions[i].choice1;
    choiceEl2.textContent = questions[i].choice2;
    choiceEl3.textContent = questions[i].choice3;
    choiceEl4.textContent = questions[i].choice4;
// on click run quiz logic to determine if click was correct
    choiceEl1.addEventListener("click", e => {
        let choice = 'a';
        quizLogic(choice);
    })
    choiceEl2.addEventListener("click", e => {
        let choice = 'b';
        quizLogic(choice);
    })
    choiceEl3.addEventListener("click", e => {
        let choice = 'c';
        quizLogic(choice);
    })
    choiceEl4.addEventListener("click", e => {
        let choice = 'd';
        quizLogic(choice);
    })
// tests if the user input was correct and changes the score accordingly
    function quizLogic(choice){
    

        console.log(choice);
        if(choice === questions[i].correct){
            score++;
            alert("That is correct, your current score is: " + score);
            i++;
            displayQuestions();
        }

        else {
            alert("Sorry Thats Wrong");
            i++;
            displayQuestions();
        }
    }
}
else {
    gameOver();
}
}

function gameOver(){

// removes uneeded div items for gameover screen
    for (i = 0; i < 3; i++){
        let answersEl = document.querySelector('#answers');
        answersEl.remove();
    }

//changes question text to game over text
    let questionEl = document.querySelector('#questionText');
    questionEl.textContent = 'Game Over';

    let choiceEl4 = document.querySelector('#choice4');
    choiceEl4.textContent = "Play Again?"
// on click this reloads the webpage restarting the javascript and html / replays game
    choiceEl4.addEventListener("click", e => {
        window.location= "../../index.html"
    })
}

displayQuestions();

