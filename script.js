console.log("Hello from the script.js file");

/*
Let's write out the pseudo code before I actually write any code, 
see what problems I need to solve and in what order

*/

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

function playerSelection(playerChoice) {
    return playerChoice.toLowerCase();
}

function playGame(pChoice, cChoice){
    // get first letter of each choice, easier to compare
    // this also seems redundant, as we're already passing in playerChoice....

    cChoice = cChoice.toLowerCase(); // make it match the already lower case player choice

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

    return results;

    }

function game() {

    let pScore = 0;
    let cScore = 0;
    let roundScore = "";

    for (let i = 1; i < 6; i++)
    {
        playerChoice = prompt("Round " + i + " Choose your weapon: Rock, Paper, or Scissors");
        roundScore = playGame(playerChoice, getComputerChoice());

        alert(roundScore);

        if (roundScore.slice(4,5) === "w")
        {
            pScore++;
        }
        else if (roundScore.slice(4,5) === "l")
        {
            cScore++;
        }
        // do i need to make a draw condition? nothing should happen if it's an "a"
     

        console.log("roundScore: " + roundScore);
        console.log("roundScore slice: " + roundScore.slice(4,5));

        console.log("pScore: " + pScore);
        console.log("cScore: " + cScore);
    }
    alert("The final score: Player " + pScore + " Computer " + cScore);
}

game();

// Well it works, but the substring answer is clumsy


// 1st pass pseudo code below

    // ok maybe shrinking to letters wasn't good? nah
    // how to separate the win/lose/tie conditions?

    // two main branches, you win or you lose or you draw
    // could be a switch statement

    // hmm, gotta pee and think

    /*
    So there's three conditions, you win you lose or you draw

    You draw is easy: your answer = comp answer
    You win: p > r, r > s, s > p
    You lose: r < p, s < r, p < s,

    So if statements
    if tie, draw
    if win or win or win
       you win
    if lose or lose or lose
       you lose

    */


