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

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice==computerChoice){
        console.log("It's a tie");
    }

    else if(
        (humanChoice=="rock")&&(computerChoice=="scissors") ||
        (humanChoice=="scissors")&&(computerChoice=="paper")||
        (humanChoice=="paper")&&(computerChoice=="rock")
    ){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } 
    else{
        computerScore++;
        console.log(`Computer Wins! ${computerChoice} beats ${humanChoice}`)
    }
}


function playGame(rouunds){
    for (let i = 0; i < rouunds; i++) {
        console.log("ROUND "+i+":")
        let compChoice=getComputerChoice();
        console.log("Computer Choice: "+compChoice);
        let humChoice=getHumanChoice();
        console.log("Human Choice: "+ humChoice);
        playRound(humChoice,compChoice);
    }
}

let humanScore=0;
let computerScore=0;

playGame(5)
if (computerScore>humanScore) {
    console.log(`Computer Wins! ${computerScore}:${humanScore}`)
} else{
    console.log(`You Win! ${humanScore}:${computerScore}`)
}