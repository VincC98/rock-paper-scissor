let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    }
    else if (randomNumber > 0.33 && randomNumber < 0.66) {
        return "paper";
    }
    else return "scissor";
}

function playRound(humanChoice){
    console.log("human choice is: " + humanChoice)
    let computerChoice = getComputerChoice();
    console.log("computer choice is: " + computerChoice);

    switch (humanChoice) {
        case 'paper':
            if (computerChoice == 'rock'){
                humanScore += 1;
                result.innerHTML = "Current score is: " + humanScore + " for human / " + computerScore + " for the AI";
                if (humanScore == 5){
                    result.innerHTML = "The winner is Human!";
                    humanScore = 0;
                    computerScore = 0;
                }
                else if (computerScore == 5) {
                    result.innerHTML = "The winner is AI!";
                    humanScore = 0;
                    computerScore = 0;
                }
                return "You win! Paper beats Rock";
            }
            else {
                computerScore +=1;
                result.innerHTML = "Current score is: " + humanScore + " for human / " + computerScore + " for the AI";
                if (humanScore == 5){
                    result.innerHTML = "The winner is Human!";
                    }
                    else if (computerScore == 5) {
                        result.innerHTML = "The winner is AI!";
                        humanScore = 0;
                        computerScore = 0;
                    }
                return "You loose! Scissor beats Paper";
            }
        case 'rock':
            if (computerChoice == 'scissor'){
                humanScore += 1;
                result.innerHTML = "Current score is: " + humanScore + " for human / " + computerScore + " for the AI";
                if (humanScore == 5){
                    result.innerHTML = "The winner is Human!";
                    humanScore = 0;
                    computerScore = 0;
                    }
                    else if (computerScore == 5) {
                        result.innerHTML = "The winner is AI!";
                        humanScore = 0;
                        computerScore = 0;
                    }
                return "You win! Rock beats Scissor";
            }
            else {
                computerScore +=1;
                result.innerHTML = "Current score is: " + humanScore + " for human / " + computerScore + " for the AI";
                if (humanScore == 5){
                    result.innerHTML = "The winner is Human!";
                    humanScore = 0;
                    computerScore = 0;
                    }
                    else if (computerScore == 5) {
                        result.innerHTML = "The winner is AI!";
                        humanScore = 0;
                        computerScore = 0;
                    }
                return "You loose! Paper beats Rock";
            }
        case 'scissor':
            if (computerChoice == 'rock'){
                humanScore += 1;
                result.innerHTML = "Current score is: " + humanScore + " for human / " + computerScore + " for the AI";
                if (humanScore == 5){
                    result.innerHTML = "The winner is Human!";
                    humanScore = 0;
                    computerScore = 0;
                    }
                    else if (computerScore == 5) {
                        result.innerHTML = "The winner is AI!";
                        humanScore = 0;
                        computerScore = 0;
                    }
                return "You win! Scissor beats Paper";
            }
            else {
                computerScore +=1;
                result.innerHTML = "Current score is: " + humanScore + " for human / " + computerScore + " for the AI";
                if (humanScore == 5){
                    result.innerHTML = "The winner is Human!";
                    humanScore = 0;
                    computerScore = 0;
                    }
                    else if (computerScore == 5) {
                        result.innerHTML = "The winner is AI!";
                        humanScore = 0;
                        computerScore = 0;
                    }
                return "You loose! Rock beats Scissor";
            }
        default:
            return "Invalid choice for Human Player, please choose between Rock Paper Scissor!";
    }
}

const buttons = document.querySelectorAll("button")
console.log(buttons)
buttons.forEach(button => {
    button.addEventListener("click", function (event) {
        console.log(event.target.innerText);
        console.log(playRound(event.target.innerText.toLowerCase()));
      });
});

const result = document.querySelector("#results")
result.innerHTML = "Current score is: " + humanScore + " for human / " + computerScore + " for the AI";