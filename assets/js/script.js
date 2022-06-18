let choice = '';
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


    let questionEl = document.querySelector('#questionText');
    questionEl.textContent = questions[0].question;

    let choiceEl1 = document.querySelector('#choice1');
    let choiceEl2 = document.querySelector('#choice2');
    let choiceEl3 = document.querySelector('#choice3');
    let choiceEl4 = document.querySelector('#choice4');
   
    choiceEl1.textContent = questions[0].choice1;
    choiceEl2.textContent = questions[0].choice2;
    choiceEl3.textContent = questions[0].choice3;
    choiceEl4.textContent = questions[0].choice4;

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
};


function quizLogic(choice){
    
    console.log(choice);
    if(choice === questions[0].correct){
        console.log("you chose right")
    }
    else {
        console.log("you are wrong")
    }

}


displayQuestions();