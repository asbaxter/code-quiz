let score = 0;
let currentQuestionIndex = 0;
let questionEl = document.querySelector('#questionText');
let optionsEl = document.querySelector('#options');
let seconds;

// arrays hold all needed question data
const questions = [
    {
        question: "Javascript is an _______ language?",
        choices: ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the above'],
        correct: 'Object-Oriented'
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        choices: ['var', 'let', 'both A and B', 'None of the above'],
        correct: 'both A and B'
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        choices: ['const', 'var', 'let', 'constant'],
        correct: 'const'
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        choices: ['getElementbyid()', 'getElementsByClassName()', 'Both A and B', 'None of the above'],
        correct: 'Both A and B'
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        choices: ['document.write()', 'console.log()', 'window.alert()', 'All of the above'],
        correct: 'All of the above'
    }

];

function displayQuestions() {

let currentQuestion = questions[currentQuestionIndex];

questionEl.textContent = currentQuestion.question;
optionsEl.textContent = '';
for (let i = 0; i < currentQuestion.choices.length; i++){

    let option = document.createElement('button');
    let scoreEl = document.querySelector('#score');
    scoreEl.textContent = ("Score: "+ score);
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
        score++;
    }
    else{
        console.log("you are wrong");
        time = time - 15;
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
    clearInterval(myInterval);

    let scoreEl = document.querySelector('#score');
    scoreEl.textContent = ("Score: "+ score);

    let currentQuestion = document.querySelector('#questionText');
    currentQuestion.textContent = 'Game Over';
    optionsEl.textContent = '';

    let btn = document.createElement('button');
    let form = document.createElement('input');

    btn.textContent = "Submit Score";
    
    btn.addEventListener('click', function(){

        localStorage.setItem("score", JSON.stringify(score));
        localStorage.setItem("playerName", (form.value));
        window.location.replace('../../index.html');
        
     })

     optionsEl.appendChild(btn);
     optionsEl.appendChild(form);
}

const startingMinutes = 2;
let time = startingMinutes * 60;
        
const countDownEl = document.getElementById('countDown');

const myInterval = setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    else{
        seconds = seconds;
    }
    if (time === 0){
        gameOver();
    }

    countDownEl.innerHTML = "Timer: " + minutes + ":" + seconds;
     time--;

}

displayQuestions();
