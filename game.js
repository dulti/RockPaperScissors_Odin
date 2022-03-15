/* This is a simple implementation of the game Rock-Paper-Scissors. */

let computerPlay = function() {
    outcomes = ["Rock", "Paper", "Scissors"]
    return outcomes[Math.floor(Math.random() * outcomes.length)];
}

let playRound = function(playerSelection, computerSelection) {
    playerSelectionLowercase = playerSelection.toLowerCase();
    if (playerSelectionLowercase == computerSelection) {
        return "It's a draw! You both chose " + computerSelection;
    } else if (playerSelectionLowercase == "rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelectionLowercase == "paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beat Paper";
    } else if (playerSelectionLowercase == "scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelectionLowercase == "rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelectionLowercase == "paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock";
    } else {
        return "You Win! Scissors beat Paper";
    }
}

let game = function() {
    for (let i = 0; i < 5; i++) {
        let userSelection = prompt("Rock, Paper or Scissors? Type your selection: ");
        console.log(playRound(userSelection, computerPlay()));
    }
}

game();