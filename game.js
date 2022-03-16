/* This is a simple implementation of the game Rock-Paper-Scissors. */

let computerPlay = function() {
    outcomes = ["Rock", "Paper", "Scissors"]
    return outcomes[Math.floor(Math.random() * outcomes.length)];
}

let playRound = function(playerSelection, computerSelection) {
    playerSelectionLowercase = playerSelection.toLowerCase();
    if (playerSelectionLowercase == computerSelection.toLowerCase()) {
        return [0, "It's a draw! You both chose " + computerSelection];
    } else if (playerSelectionLowercase == "rock" && computerSelection == "Paper") {
        return [1, "You Lose! Paper beats Rock"];
    } else if (playerSelectionLowercase == "paper" && computerSelection == "Scissors") {
        return [1, "You Lose! Scissors beat Paper"];
    } else if (playerSelectionLowercase == "scissors" && computerSelection == "Rock") {
        return [1, "You Lose! Rock beats Scissors"];
    } else if (playerSelectionLowercase == "rock" && computerSelection == "Scissors") {
        return [2, "You Win! Rock beats Scissors"];
    } else if (playerSelectionLowercase == "paper" && computerSelection == "Rock") {
        return [2, "You Win! Paper beats Rock"];
    } else {
        return [2, "You Win! Scissors beat Paper"];
    }
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('mousedown', (e) => {
        e.target.classList.add('clicked');
    })
    button.addEventListener('mouseup', (e) => {
        e.target.classList.remove('clicked');
    })
    button.addEventListener('click', (e) => {
        if (playerScore < 5 && computerScore < 5) {
            let [outcomeCode, outcomeText] = playRound(e.target.textContent, computerPlay());
            result = document.querySelector('#result')
            result.textContent = outcomeText;
            switch (outcomeCode) {
                case 0:
                    result.style.color = "black";
                    break;
                case 1:
                    result.style.color = "red";
                    computerScore += 1;
                    break;
                case 2:
                    result.style.color = "green";
                    playerScore += 1;
                    break;
            }
            document.querySelector('#scores').textContent = `Computer scored: ${computerScore}. You scored: ${playerScore}.`;
        };
    })
});