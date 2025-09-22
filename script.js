// scores
let computerScore = 0;
let humanScore = 0;

// game loop
for(let i = 0; i<4; i++) {
    // aditional function
    function formatChoice(str) {
    if (!str || typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const choices = ["Rock", "Paper", "Scissors"];

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let humanChoice = formatChoice(prompt("Rock, Paper or Scissors?"));

    // results:
    if (!choices.includes(humanChoice)) {
    console.log("WARN!!: Choose only Rock, Paper ou Scissors.");
    } else if (humanChoice === computerChoice) {
    console.log(`DRAW! Both chose ${computerChoice}`);
    console.log(`========== SCORES ==========\nCOMPUTER: ${computerScore}\nYOU: ${humanScore}`);
    } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore += 1;
    console.log(`========== SCORES ==========\nCOMPUTER: ${computerScore}\nYOU: ${humanScore}`);
    } else {
    console.log(`Computer wins! ${computerChoice} beats ${humanScore}`);
    computerScore += 1;
    console.log(`========== SCORES ==========\nCOMPUTER: ${computerScore}\nYOU: ${humanScore}`);
    }
}

if (computerScore > humanScore) {
    console.log("YOU WIN THE GAME!! CONGRATULATIONS!!")
}else{
    console.log("oh... you lose the game...")
}
