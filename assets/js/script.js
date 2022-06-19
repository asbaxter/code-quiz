let score = 0;
let currentQuestionIndex = 0;
let questionEl = document.querySelector('#questionText');
let optionsEl = document.querySelector('#options');

// arrays hold all needed question data
const questions = [
    {
        question: "what is the airspeed velocity of an unladen swallow?",
        choices: ['fast', 'speedy', 'slow', 'turtle'],
        correct: 'fast'
    },
    {
        question: "how much wood could a woodchuck chuck",
        choices: ['a lot', 'a little', 'none', 'infinity'],
        correct: 'a little'
    },
    {
        question: "I should probably start getting real questions soon",
        choices: ['no', 'okay', 'keep doing you', 'reeee'],
        correct: 'reeee'
    }

];

function displayQuestions() {

let currentQuestion = questions[currentQuestionIndex];
console.log(currentQuestion.question);

questionEl.textContent = currentQuestion.question;
optionsEl.textContent = '';
for (let i = 0; i < currentQuestion.choices.length; i++){

    let option = document.createElement('button');
    option.setAttribute('class', 'answerText');
    option.setAttribute('value', currentQuestion.choices[i]);
    option.textContent = currentQuestion.choices[i];
    option.addEventListener('click', function(){
        quizLogic(option.textContent);
    })

    optionsEl.appendChild(option);
}
};
// tests if the user input was correct and changes the score accordingly
function quizLogic(answer){

    if (answer === questions[currentQuestionIndex].correct){
        console.log("you are right");
    }
    else{
        console.log("you are wrong");
    }
    
    currentQuestionIndex++;//next question
    if (currentQuestionIndex === questions.length){
        gameOver();
    }
    else {
        displayQuestions();
    }
}


function gameOver(){


    let currentQuestion = document.querySelector('#questionText');
    currentQuestion.textContent = 'Game Over';

    optionsEl.textContent = '';
    let option = document.createElement('button');
    option.textContent = "Play Again";
    
    option.addEventListener('click', function(){
        window.location= "../../index.html"
     })

     optionsEl.appendChild(option);

}


displayQuestions();
