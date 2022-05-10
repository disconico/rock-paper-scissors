// Rock Paper Scissors game

//Assign all elements
const buttons = document.querySelectorAll('.button');
const resultText = document.querySelector('.round-result-text');
const scores = document.querySelector('.game-scores');
const buttonPlayAgain = document.querySelector('.play-again');
const rounds = document.querySelector('.round-number-text')

let playerScore = 0;
let computerScore = 0;
let round = 0;

//Launch game when input from user
buttons.forEach(button => button.addEventListener('click', function(e) {
    playerSelection = e.target.id ;
    countRound();
    countScore(playerSelection, computerChoice());
    endGame();
    resetGame();
})
);    

//Round number
function countRound () {
    round += 1;
    rounds.textContent = `Round # ${round}`;
    return round;
}

//Create a random outcome for the computer - Rock, Paper, or Scissors
function computerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)].toLowerCase();
}

//Define scoring method
function countScore (playerSelection, computerSelection){
    switch (true) {
        case (playerSelection === computerSelection) :
            resultText.textContent = `It's a tie, no one wins!`;
            break;
        case (playerSelection === "rock" && computerSelection === "scissors"):
        case (playerSelection === "paper" && computerSelection === "rock"):
        case (playerSelection === "scissors" && computerSelection === "paper"): 
            playerScore++;
            resultText.textContent =  `You won, ${playerSelection} beats ${computerSelection} !`;
            break;
        case (computerSelection === "rock" && playerSelection === "scissors"):
        case (computerSelection === "paper" && playerSelection === "rock"):
        case (computerSelection === "scissors" && playerSelection === "paper"):
            computerScore++;
            resultText.textContent =  `You lost, ${computerSelection} beats ${playerSelection} !` ;
        break;    
    }

    scores.textContent = `Your score => ${playerScore} - ${computerScore} <= Computer score`;
    return [playerScore, computerScore];          
}

//End the game
function endGame () {
    if (computerScore === 5) { 
        scores.textContent = `GAME OVER! It seems @disconico made me too smart!`;    
        buttons.forEach((button) => {
            button.setAttribute('disabled','');
        });
    } else if (playerScore === 5) {
        scores.textContent = `YOU WON! You are smarter than the computer!`;    
        buttons.forEach((button) => {
            button.setAttribute('disabled','');
        })
    } else {
    }
}            

//Reset game
function resetGame() {
    if (computerScore === 5 || playerScore === 5){
        buttonPlayAgain.addEventListener('click', () => {
        window.location.reload();
        });
    }    
  }