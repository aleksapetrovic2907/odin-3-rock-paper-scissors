document.addEventListener("DOMContentLoaded", setupDom);

function setupDom() {
    // Generate buttons.
    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";

    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";

    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";

    // Append buttons to DOM.
    const buttonsContainer = document.getElementById("buttons-container");
    buttonsContainer.appendChild(rockBtn);
    buttonsContainer.appendChild(paperBtn);
    buttonsContainer.appendChild(scissorsBtn);
}