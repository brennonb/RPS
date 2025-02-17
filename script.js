function getComputerChoice() {
    let x = Math.random();

    if (x >= 0 && x < .33) {
        return "Rock";
    }
    else if (x > .33 && x < .66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }

}

console.log(getComputerChoice());

function getHumanChoice() {
    let c = prompt("Choose: Rock, Paper, or Scissors");
    let lowerCase = c.toLowerCase();
    let upperCase = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    console.log("You entered:", upperCase);
}

getHumanChoice();


let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    
}