// Let's go !

// Define computer behavior by randomly returning one of the 3 arguments

function computerPlay(){
    var computerPossibilities = ['Rock', 'Paper', 'Scissors'];
    var computerChoice = computerPossibilities.length;
    var computerPlay = computerPossibilities[Math.floor(Math.random()*computerChoice)];
    console.log('The computer played: '+computerPlay);
}
console.log(computerPlay());
