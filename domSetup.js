document.addEventListener("DOMContentLoaded", setupDom);

let results;

function setupDom() {
    // Generate buttons.
    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";

    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";

    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";

    // Add event listeners to buttons.
    rockBtn.addEventListener("click", () => playRound('rock'));
    paperBtn.addEventListener("click", () => playRound('paper'));
    scissorsBtn.addEventListener("click", () => playRound('scissors'));

    // Append buttons to DOM.
    const buttonsContainer = document.getElementById("buttons-container");
    buttonsContainer.appendChild(rockBtn);
    buttonsContainer.appendChild(paperBtn);
    buttonsContainer.appendChild(scissorsBtn);

    results = document.getElementById("results");
}

function addNewResultToList(result) {
    const resultElement = document.createElement("li");
    resultElement.textContent = result;
    results.insertBefore(resultElement, results.firstChild);
}