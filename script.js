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
