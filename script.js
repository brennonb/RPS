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

    if (c !== "Rock" && c !== "rock" && c !== "Paper" && c !== "paper" && c !== "Scissors" && c !== "scissors") {
        console.log("Invalid Choice");
    }
    else {
        console.log("You entered:", c);
    }
}

getHumanChoice();
