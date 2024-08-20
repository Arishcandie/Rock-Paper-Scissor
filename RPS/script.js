document.addEventListener("DOMContentLoaded", function() {
    const choices = ["rock", "paper", "scissor"];
    
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissor") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissor" && computerChoice === "paper")
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }

    function playGame(playerChoice) {
        const computerChoice = getComputerChoice();
        const result = getResult(playerChoice, computerChoice);
        document.getElementById("Result").textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    }

    document.getElementById("rock").addEventListener("click", function() {
        playGame("rock");
    });

    document.getElementById("paper").addEventListener("click", function() {
        playGame("paper");
    });

    document.getElementById("scissor").addEventListener("click", function() {
        playGame("scissor");
    });
});
