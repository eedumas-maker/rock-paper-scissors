console.log("Hello from the script.js file");

/*
Let's write out the pseudo code before I actually write any code, 
see what problems I need to solve and in what order

*/

function getComputerChoice() {
    let choiceInt = Math.floor(Math.random()*3)+1;
    console.log(choiceInt);
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

console.log(getComputerChoice());