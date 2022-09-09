// Select DOM elements
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

// Initialize game variables
let userChoice;
let computerChoice;
let result;

// Generate player choice and run game
possibleChoices.forEach((possibleChoice) => possibleChoice.addEventListener("click", (e) => {
    // Reset previous CPU choice and result
    computerChoiceDisplay.innerHTML = "";
    resultDisplay.innerHTML = "";
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = `<img src="./assets/${userChoice}.gif"  alt=""/>`;
    generateComputerChoice();
    getResult();
}));

// Generate CPU choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = "rock";
    }
    if (randomNumber === 2) {
        computerChoice = "scissors";
    }
    if (randomNumber === 3) {
        computerChoice = "paper";
    }
    setTimeout(() => {
        computerChoiceDisplay.innerHTML = `<img src="./assets/${computerChoice}.gif" alt="" />`;
    }, 1200);
}

// Show result
function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a Draw!";
    } else if ((computerChoice === "rock" && userChoice === "paper") || (computerChoice === "paper" && userChoice === "scissors") || (computerChoice === "scissors" && userChoice === "rock")) {
        result = "You Win!";
    } else {
        result = "You Lose!";
    }
    setTimeout(() => {
        resultDisplay.innerHTML = result;
    }, 2000);
}
