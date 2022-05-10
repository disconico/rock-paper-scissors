// Rock Paper Scissors game

//Assign all elements
let playerScore = 0;
let computerScore = 0;
const buttons = Array.from(document.querySelectorAll('button'));

//Get player choice
buttons.forEach(button => button.addEventListener('click', function(e) {
    playRound(e.target.id, computerChoice()) ;
    })
);    

//Create a random outcome for the computer - Rock, Paper, or Scissors
function computerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)].toLowerCase();
}

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