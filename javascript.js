let humanScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");


function getComputerChoice(){
    num = Math.random();
    if (num< 0.33) {
        comp="rock";
    } else if (num < 0.66){
        comp="paper";
    } else{
        comp="scissors";
    }
    return comp
}

function getHumanChoice(){
    let choice = prompt("Enter rock, paper, or scissors:");
    return choice;
}

function playRound(humanChoice){
    computerChoice = getComputerChoice()
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice==computerChoice){
        resultDiv.textContent = `Tie! Both chose ${humanChoice}`;
    }

    else if(
        (humanChoice=="rock")&&(computerChoice=="scissors") ||
        (humanChoice=="scissors")&&(computerChoice=="paper")||
        (humanChoice=="paper")&&(computerChoice=="rock")
    ){
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } 
    else{
        computerScore++;
        resultDiv.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}`;
    }

    scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

    checkWinner();
}


function checkWinner(){

    if (humanScore === 5){
        resultDiv.textContent = "🎉 You won the game!";
        disableButtons();
    }

    if (computerScore === 5){
        resultDiv.textContent = "💻 Computer won the game!";
        disableButtons();
    }
}

function disableButtons(){
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}

document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));