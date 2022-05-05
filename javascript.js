// Let's go !

//Define choices for the game 
const choices = ['Rock', 'Paper', 'Scissors']

//Create a random outcome for the computer - Rock, Paper, or Scissors
function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)].toLowerCase();
}

//Get input from player
function playerChoice() {
    let input = prompt("Type 'Rock', 'Paper', or 'Scissors'").toLowerCase();
    if (input.includes("rock") || input.includes("paper") || input.includes("scissors")) { ;
    } else {
        alert ("Please chose wisely");
        input = prompt("Type 'Rock', 'Paper', or 'Scissors'").toLowerCase();
    }
    return input
}    

//Define parameters
let playerSelection = playerChoice();
let computerSelection = computerChoice();

console.log(playerSelection);
console.log(computerSelection);

//Define round rules 
function playRound(){
    if (playerSelection === computerSelection) {
        return ("tie");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return ("player");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("player");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("player");
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return ("computer");
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return ("computer");
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return ("computer");
    }
}

//Announce round result
let roundResult = playRound();
if (roundResult === "tie") {
    console.log("It's a tie, no one scores!") ;
} else if (roundResult === "player") {
    console.log(`You won, ${playerSelection} beats ${computerSelection} !`);
} else if (roundResult === "computer") {
    console.log(`You lost, ${computerSelection} beats ${playerSelection} !`);  
}

//Scores
let playerScore = 0;
let computerScore = 0;

//Scoreboard update
if (roundResult === "tie") {
} else if (roundResult === "player") {
    playerScore++;
} else if (roundResult === "computer") {
    computerScore++;  
}

console.log(playerScore);
console.log(computerScore);

//Define game rules
while ((playerScore < 5) || (computerScore < 5)) {
    playRound();
    break;
}


