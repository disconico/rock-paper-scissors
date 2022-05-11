// Rock Paper Scissors game

//Add music to the game
const start = new Audio('./music/start.mp3');
const gameOver = new Audio('./music/game_over.mp3');
const victory = new Audio('./music/victory.mp3');
const click = new Audio('./music/click.mp3');

//Assign all elements
const startButton = document.querySelector('.start-button');
const buttons = document.querySelectorAll('.game-button');
const resultText = document.querySelector('.round-result-text');
const scores = document.querySelector('.game-scores');
const endText = document.querySelector('.game-end-text');
const buttonPlayAgain = document.querySelector('.play-again');
const rounds = document.querySelector('.round-number-text');
const imageComputer = document.querySelector('.weapon-computer');
const imagePlayer = document.querySelector('.weapon-player');

let playerScore = 0;
let computerScore = 0;
let choice = '';
let round = 0;

//Skip intro page
startButton.addEventListener('click', () => {
    start.play();
    document.getElementById('start').style.setProperty('visibility', 'hidden');
    document.getElementById('game').style.setProperty('visibility', 'visible');
});


//Launch game when input from user
buttons.forEach(button => button.addEventListener('click', function(e) {
    playerSelection = e.target.id ;
    click.currentTime = 0;
    click.play();
    countRound();
    countScore(playerSelection, computerChoice());
    pushPlayerImage(playerSelection);
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

//Create a random outcome for the computer - Rock, Paper, or Scissors and push the result as an image
function computerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerWeapon = choices[Math.floor(Math.random()*choices.length)].toLowerCase();
    imageComputer.src = `./images/${computerWeapon}.png`;
    return computerWeapon;
}

//Push player image
function pushPlayerImage(playerWeapon) {
    if (playerWeapon === 'rock') {
        imagePlayer.src = `./images/rock.png`;
    } else if (playerWeapon === 'paper') {
        imagePlayer.src = `./images/paper.png`;
    } else if (playerWeapon === 'scissors') {
        imagePlayer.src = `./images/scissors.png`;
    }
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

    scores.textContent = `Your score | ${playerScore} - ${computerScore} | Computer score`;
    return [playerScore, computerScore];          
}

//End the game
function endGame () {
    if (computerScore === 5) { 
        endText.textContent = `GAME OVER!`;
        gameOver.play();
        endText.classList.add('lose');  
        document.getElementById('endgame').style.setProperty('visibility', 'visible');
        buttons.forEach((button) => {
            button.setAttribute('disabled','');
        })
        
    } else if (playerScore === 5) {
        endText.textContent = `YOU WON!`;
        endText.classList.add('win');    
        victory.play();
        document.getElementById('endgame').style.setProperty('visibility', 'visible');
        buttons.forEach((button) => {
            button.setAttribute('disabled','');
        })
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