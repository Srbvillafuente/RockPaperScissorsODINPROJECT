// my actual project

let humanScore = 0;
let computerScore = 0;

// gets the computer selection thru a randomly selected index of array-choices
function getcomputerSelection() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}


function getHumanChoice(){
    return prompt("Rock, Paper or Scissors? ").toLowerCase();
}

function playRound(humanSelection, computerSelection){

    console.log(`Computer selected: ${computerSelection} \n`)

    const outcomes = {
        rock: {rock: "You Tied! You both chose Rock!", paper: "You Lost! Paper beats Rock!", scissors: "You Won! Rock beats Scissors!"},
        paper: {rock: "You Won! Paper beats Rock!", paper: "You Tied! You both chose Paper!", scissors: "You lost! Scissors beats Paper!"},
        scissors: {rock: "You Lost! Rock beats Scissors!", paper: "You Won! Scissors beats Paper!", scissors: "You Tied! You both chose Scissors!"}
    };

    console.log(outcomes[humanSelection][computerSelection]);

    if (humanSelection === computerSelection) return 0;
    return (outcomes[humanSelection][computerSelection].includes("Won")) ? 1 : -1;
}

function playGame(){
    for (let i = 0; i < 5; i++){
        const computerSelection = getcomputerSelection();
        const humanSelection = getHumanChoice();

        let result = playRound(humanSelection, computerSelection);
        if (result == 1) humanScore++;
        else if(result == -1) computerScore++;

        console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore} \n`);

    }

    console.log(humanScore > computerScore ? "You won the game! Congrats!" : humanScore < computerScore ? "You Lost! Better luck next time." : "You Tied!");
}


playGame();