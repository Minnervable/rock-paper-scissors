// declare function name and parameters
// declare variables
// get random choice
// define return value

function getComputerChoice() {
	const choices = ["Rock", "Paper", "Scissors"];
	const randomChoice = choices[Math.floor(Math.random() * choices.length)];
	return randomChoice;
}
console.log(getComputerChoice());

// declare function name
// create prompt box
// return player input

function getHumanChoice() {
	const humanChoice = prompt("Choose Wisely");
	return humanChoice;
}
console.log(getHumanChoice());

// keep score

const humanScore = 0;
const computerScore = 0;

// declare function name and parameters
// declare variables
//
