
const rockButt = document.querySelector('#rock');
const paperButt = document.querySelector('#paper');
const scissorsButt = document.querySelector('#scissors');

let playerChoice = "";

let pScore = 0;
let cScore = 0;
let roundResult = "";
let round = 0;

const container = document.querySelector('#container');
const answer = document.createElement('h1');
const pScoreSpace = document.createElement('h2');
const cScoreSpace = document.createElement('h2');

answer.textContent = "Pick your weapon..."
pScoreSpace.textContent = "Player score: " + pScore;
cScoreSpace.textContent = "Computer score: " + cScore;

container.appendChild(answer);
container.appendChild(pScoreSpace);
container.appendChild(cScoreSpace);



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

    let results = "";
    console.log(pChoice);
    console.log(cChoice);
    
    if (round >= 5)
    {
        if (pScore > cScore){
            answer.textContent = "Player has won the game!";
        }
        else if (cScore > pScore){
            answer.textContent = "Computer has won the game!";
        }
        else if (cScore == pScore){
            answer.textContent = "It's a draw, how rare!";
        }
        pScoreSpace.textContent = "Player final score: " + pScore;
        cScoreSpace.textContent = "Computer final score: " + cScore;
    }
    else{
        if (pAbrv === cAbrv) {
        results = "It's a draw!"
        }
        else if ((pAbrv === 'r' && cAbrv === 's') 
                || (pAbrv === 'p' && cAbrv === 'r') 
                || (pAbrv === 's' && cAbrv === 'p')){
            results = "You win! " + pChoice + " beats " + cChoice + "."
            pScore++;
        }
        else {
        results = "You lose! " + cChoice + " beats " + pChoice + "."
        cScore++;
        }

        round++;
        answer.textContent = "Round " + round + ": " + results;
        pScoreSpace.textContent = "Player score: " + pScore;
        cScoreSpace.textContent = "Computer score: " + cScore;
    }
}




rockButt.addEventListener('click', () => playGame('rock',getComputerChoice()));

paperButt.addEventListener('click', () => playGame('paper',getComputerChoice()));

scissorsButt.addEventListener('click', () => playGame('scissors',getComputerChoice()));

