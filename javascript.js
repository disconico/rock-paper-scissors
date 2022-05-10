// Rock Paper Scissors game

//Assign all elements
let playerScore = 0;
let computerScore = 0;
const buttons = Array.from(document.querySelectorAll('button'));
const result = document.querySelector('.round-result-text');
const scores = document.querySelector('.game-scores');
 
const buttonPlayAgain = document.querySelector('.play-again');

//Get player choice
buttons.forEach(button => button.addEventListener('click', function(e) {
    playRound(e.target.id, computerChoice()) ;
    scores.textContent = `Your score => ${playerScore} - ${computerScore} <= Computer score`
    })
);    


//Create a random outcome for the computer - Rock, Paper, or Scissors
function computerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)].toLowerCase();
}

//Announce results



//Define round rules 
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        result.textContent = `It's a tie, no one wins!`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        result.textContent =  `You won, ${playerSelection} beats ${computerSelection} !` ;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        result.textContent =  `You won, ${playerSelection} beats ${computerSelection} !` ;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        result.textContent =  `You won, ${playerSelection} beats ${computerSelection} !` ;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        result.textContent =  `You lost, ${computerSelection} beats ${playerSelection} !` ;  
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        result.textContent =  `You lost, ${computerSelection} beats ${playerSelection} !` ;  
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        result.textContent =  `You lost, ${computerSelection} beats ${playerSelection} !` ;  
    }
}

//End the game
//When a player reach 5 points :
function endGame (playerScore, computerScore) {
    if (computerScore === 5 || playerScore === 5) {
//Make the game stop (you cannot be able to click again on a selection)
        buttons.forEach((button) => {
            button.setAttribute('disabled','');
            button.classList.add('disabled-button');
        })
//Announce the winner (display text / replace existing text)
        scores.textContent = `GAME OVER !`    

    }
}


//Make the play again button visible

//Reset game
function resetGame() {
    buttonPlayAgain.addEventListener('click', () => {
      window.location.reload();
    });
  }

endGame();
resetGame();
