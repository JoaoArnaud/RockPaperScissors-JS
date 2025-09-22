// aditional fuctions
function capitalizeFirstLetter(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return ""; // Handle non-string or empty input
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// computer choice
const Array = ["Rock", "Paper", "Scissors"];
const computerChoice = Array[Math.floor(Math.random() * 3)];

// human choice
let humanChoice = prompt("Rock, Paper or Scissors?");

// who wins?
if (capitalizeFirstLetter(humanChoice) == Array[0] && computerChoice == Array[1]) {
    console.log(`Computer wins with ${computerChoice}`);
}else if (capitalizeFirstLetter(humanChoice) == Array[1] && computerChoice == Array[2]) {
    console.log(`Computer wins with ${computerChoice}`);
}else if (capitalizeFirstLetter(humanChoice) == Array[2] && computerChoice == Array[0]) {
    console.log(`Computer wins with ${computerChoice}`);
}else if (capitalizeFirstLetter(humanChoice) == computerChoice) {
    console.log("DRAW");
}else {
    console.log(`You wins the computer who choice ${computerChoice}`);
}
