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

function getHumanChoice() {
    let choice;

    do {
        choice = prompt("Choose between rock, paper and scissors.").toLowerCase().trim();
    } while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors');

    return choice;
}