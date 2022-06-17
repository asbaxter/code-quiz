
const quiz = function(event){
    // creates java variable that is assossiated with answerText id in HTML
    const li = document.querySelector("#answerText");
    const h2 = document.querySelector("#questionText");

    h2.textContent = "What is the airspeed velocity of an unladen swallow?";
    
    // for loop creates 4 seperate buttons
    for (let i = 0; i < 4; i++){
        
        // creates Java element for li and buttons
        var listEl = document.createElement("li");
        var listItem = document.createElement("button");

        // text within button
        listItem.textContent = "Howdy Partner";

        // adds li and button element to webpage
        li.appendChild(listEl);
        listEl.appendChild(listItem);
    }

};

quiz();