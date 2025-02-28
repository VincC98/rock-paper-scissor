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



function getHumanChoice(){
    let choice = prompt("Enter your choice for rock paper scissor");
    return choice.toLocaleLowerCase();
}



function playRound(humanChoice, computerChoice){
    switch (humanChoice) {
        case 'paper':
            if (computerChoice == 'rock'){
                humanScore += 1;
                return "You win! Paper beats Rock";
            }
            else {
                computerScore +=1;
                return "You loose! Scissor beats Paper";
            }
        case 'rock':
            if (computerChoice == 'scissor'){
                humanScore += 1;
                return "You win! Rock beats Scissor";
            }
            else {
                computerScore +=1;
                return "You loose! Paper beats Rock";
            }
        case 'scissor':
            if (computerChoice == 'rock'){
                humanScore += 1;
                return "You win! Scissor beats Paper";
            }
            else {
                computerScore +=1;
                return "You loose! Rock beats Scissor";
            }
        default:
            return "Invalid choice for Human Player, please choose between Rock Paper Scissor!";
    }
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

console.log(playRound(humanChoice, computerChoice));