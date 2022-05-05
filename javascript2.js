// Let's go !

//Define choices for the game 
const choices = ['Rock', 'Paper', 'Scissors']

//Create a random outcome for the computer - Rock, Paper, or Scissors
function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)].toLowerCase();
}

//Get input from player
function playerChoice() {
    let input = window.prompt("Type 'Rock', 'Paper', or 'Scissors'").toLowerCase();
    if (input.includes("rock") || input.includes("paper") || input.includes("scissors")) { ;
    } else {
        alert ("Please chose wisely");
        input = prompt("Type 'Rock', 'Paper', or 'Scissors'").toLowerCase();
    }
    return input
}    

//Define round rules 
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return ("tie");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return ("player");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return ("player");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return ("player");
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        return ("computer");
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        return ("computer");
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        return ("computer");
    }
}

//Define parameters
let playerSelection = playerChoice();
let computerSelection = computerChoice();

console.log(playerSelection);
console.log(computerSelection);

//Scores
let playerScore = 0;
let computerScore = 0;

//Game rules
function game() {

    let roundResult = playRound(playerSelection, computerSelection);

    if (roundResult === "tie") {
        console.log("It's a tie, no one scores!") ;
    } else if (roundResult === "player") {
        console.log(`You won, ${playerSelection} beats ${computerSelection} !`) ;
    } else if (roundResult === "computer") {
        console.log(`You lost, ${computerSelection} beats ${playerSelection} !`) ;  
    };
}

//Launch the game
game();



console.log(playerScore);
console.log(computerScore);


