// Rock Paper Scissors game

//Create a random outcome for the computer - Rock, Paper, or Scissors
function computerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)].toLowerCase();
}

//Get input from player
function playerChoice() {
    let input = prompt("Type 'Rock', 'Paper', or 'Scissors'").toLowerCase();
    if (input.includes("rock") || input.includes("paper") || input.includes("scissors")) { 
        return input;
    } else {
        alert ("Please chose wisely");
        input = prompt("Type 'Rock', 'Paper', or 'Scissors'").toLowerCase();
        return input
    }
} 

//Scores
let playerScore = 0;
let computerScore = 0;

//Define round rules 
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        console.log("It's a tie, no one scores!") ;
        return ("tie");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        console.log(`You won, ${playerSelection} beats ${computerSelection} !`) ;
        return ("player");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        console.log(`You won, ${playerSelection} beats ${computerSelection} !`) ;
        return ("player");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        console.log(`You won, ${playerSelection} beats ${computerSelection} !`) ;
        return ("player");
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        console.log(`You lost, ${computerSelection} beats ${playerSelection} !`) ;  
        return ("computer");
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        console.log(`You lost, ${computerSelection} beats ${playerSelection} !`) ;  
        return ("computer");
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        console.log(`You lost, ${computerSelection} beats ${playerSelection} !`) ;  
        return ("computer");
    }
}

//Define game function
function game () {
    while (playerScore < 5 && computerScore < 5) {
        playRound(playerChoice(), computerChoice());
        console.log(`The score is ${playerScore} - ${computerScore}`);
    } 
    if (playerScore === 5) {
        console.log("Congrats ! you won !");
    } else if (computerScore === 5) {
        console.log("Damn! Try again")
    }   
}

//Play the game
game();