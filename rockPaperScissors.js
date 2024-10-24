function getComputerChoice() {
    let random = Math.random() * 3;

    switch (random) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        default:
            return 'scissors';
    }
}