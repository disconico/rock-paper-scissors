// Let's go !

//Define choices for the game 
const choices = ['Rock', 'Paper', 'Scissors']


// Create a random outcome for the computer - Rock, Paper, or Scissors
function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}
console.log(computerChoice()); //See if it works

//Get input from player
function playerChoice () {
    let input = prompt("Type 'Rock', 'Paper', or 'Scissors'").toLowerCase();
    if (input.includes('rock' || 'paper' || 'scissors')) {
    } else {
        alert ("Please chose wisely");
        input = prompt("Type 'Rock', 'Paper', or 'Scissors'").toLowerCase();
    }
    console.log(input);
}    



//Play 5 rounds
// function game(){
//     playRound()
// }

const playerSelection = playerChoice();
const computerSelection = computerChoice();

//Play 1 round
function playRound(){

}


    // return input

    // let check = validateInput(input)
    // if(check == true){
    //     console.log(input);
    // } else {
    //     prompt("Please type Rock, Paper, or Scissors");
    // }




//Check player's input

