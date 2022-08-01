console.log("Hello from the script.js file");


let playerChoice = "";

function getComputerChoice() {
    let choiceInt = Math.floor(Math.random()*3)+1;

    let choice = "";
    
    switch (choiceInt) {
        case 1: choice = "Rock";
        break;
        case 2: choice = "Paper";
        break;
        case 3: choice = "Scissors";
        break;
        default: choice = "That's not a choice";
    }
    return choice;
}


function playGame(pChoice, cChoice){
    // get first letter of each choice, easier to compare
    // this also seems redundant, as we're already passing in playerChoice....

    // cChoice = cChoice.toLowerCase(); // make it match the already lower case player choice

    let pAbrv = pChoice.slice(0,1); //short for player abbreviation
    let cAbrv = cChoice.slice(0,1).toLowerCase();

    let results;

    console.log("playerChoice is " + pChoice);

    console.log("compChoice is " + cChoice);

    if (pAbrv === cAbrv) {
        results = "It's a draw!"
    }
    else if ((pAbrv === 'r' && cAbrv === 's') 
            || (pAbrv === 'p' && cAbrv === 'r') 
            || (pAbrv === 's' && cAbrv === 'p')){
        results = "You win! " + pChoice + " beats " + cChoice + "."
            }
    else {
       results = "You lose! " + cChoice + " beats " + pChoice + "."
    }

    return alert(results);

    }

const rockButt = document.querySelector('#rock');
const paperButt = document.querySelector('#paper');
const scissorsButt = document.querySelector('#scissors');

console.log(rockButt); // why is that returning null? Ha, had to defer it!


rockButt.addEventListener('click', () => playGame('rock',getComputerChoice()));

paperButt.addEventListener('click', () => playGame('paper',getComputerChoice()));

scissorsButt.addEventListener('click', () => playGame('scissors',getComputerChoice()));

