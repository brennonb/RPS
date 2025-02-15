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

