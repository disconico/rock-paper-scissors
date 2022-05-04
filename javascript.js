// Let's go !

// Define computer behavior by randomly returning one of the 3 arguments

function computerPlay(){
    let computerPossibilities = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = computerPossibilities.length;
    let computerPlay = computerPossibilities[Math.floor(Math.random()*computerChoice)];
    console.log('The computer played: '+computerPlay);
}
console.log(computerPlay());


//Get user's input > Make it case-insensitive !
//#Define a variable to store input
function playerPlay () {
    let playerChoice = document.getElementById("text").value;
    console.log(playerChoice);
};



//#Get input and verify that the input is right (rock paper or scissors)




//Define the winner
//If someone's win
//If draw