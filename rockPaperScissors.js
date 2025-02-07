// my actual project

let humanScore = 0;
let computerScore = 0;

function getcomputerSelection() {
    let rand = Math.floor(Math.random() * 3);
    let computerChoice = "none";

    if (rand == 0){
        computerChoice = "rock"
    }
    else if (rand == 1){
        computerChoice = "paper"
    }
    else{
        computerChoice = "scissors"
    }

    return computerChoice;
}

function getHumanChoice(){
    humanChoice = prompt("Rock, Paper or Scissors? ");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice
}

function playRound(humanSelection, computerSelection){

    console.log("Computer selected: " + computerSelection)
    console.log("")
    if (humanSelection == "rock"){
        if (computerSelection == "rock"){
            console.log("You tied! You both chose Rock!")
        }
        else if (computerSelection == "paper"){
            console.log("You Lost! Paper beats Rock!")
            computerScore +=1;
        }
        else{
            console.log("You won! Rock beats Scissors")
            humanScore +=1;
        }
    }
    else if (humanSelection == "paper"){
        if (computerSelection == "rock"){
            console.log("You win! Paper beats Rock!")
            humanScore +=1;
        }
        else if (computerSelection == "paper"){
            console.log("You tied! You both chose Paper!")
        }
        else{
            console.log("You Lost! Scissors beats Paper!")
            computerScore +=1;
        }
    }
    else{
        if (computerSelection == "rock"){
            console.log("You Lost! Rock beats Scissors")
            computerScore +=1
        }
        else if (computerSelection == "paper"){
            console.log("You Won! Scissors beats Paper!")
            humanScore +=1;
        }
        else{
            console.log("You Tied! You both chose Scissors!")
        }
    }
    console.log("")
    console.log("Your Score: " + humanScore)
    console.log("Computer Score: " + computerScore)
    
    
}

function playGame(){
    for (let i = 0; i < 5; i++){
        const computerSelection = getcomputerSelection();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
    

    
}


// playRound(humanSelection, computerSelection);

playGame();