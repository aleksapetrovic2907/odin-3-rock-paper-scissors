let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    // If draw.
    if (humanChoice === computerChoice) {
        console.log(`It's a draw, you both chose ${humanChoice}!`);
    }
    // If player won.
    else if ((humanChoice == 'rock' && computerChoice == 'scissors')
        || (humanChoice == 'paper' && computerChoice == 'rock')
        || (humanChoice == 'scissors' && computerChoice == 'paper')) {
        console.log(`You've won, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    // If player lost.
    else {
        console.log(`You've lost, ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    switch (random) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        default:
            return 'scissors';
    }
}