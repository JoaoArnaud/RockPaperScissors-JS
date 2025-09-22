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
  console.log("Opção inválida! Escolha Rock, Paper ou Scissors.");
} else if (humanChoice === computerChoice) {
  console.log(`DRAW! Both chose ${computerChoice}`);
} else if (
  (humanChoice === "Rock" && computerChoice === "Scissors") ||
  (humanChoice === "Paper" && computerChoice === "Rock") ||
  (humanChoice === "Scissors" && computerChoice === "Paper")
) {
  console.log(`You win! ${humanChoice} beats ${computerChoice}`);
} else {
  console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
}
