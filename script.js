// declare function name and parameters
// declare variables
// get random choice
// define return value

function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomChoice = choices[Math.floor(Math.random() * choices.length)];
	return randomChoice;
}
// console.log(getComputerChoice());

// declare function name
// create prompt box
// return player input

function getHumanChoice() {
	const humanChoice = prompt("Choose Wisely").toLowerCase();
	return humanChoice;
}
// console.log(getHumanChoice());

// keep score
// these will be incremented later based on the winner of each round

let humanScore = 0;
let computerScore = 0;

// play game encompasses the logic for the whole game
// play round holds the logic for each round one at a time
// declare variable to assign winner
// if else statements including the logic for each choice
// inside each if else the winner is incremented based on the winner
// the scores are not incremented and reassigned if the score is a draw

function playGame() {
	function playRound(humanChoice, computerChoice) {
		let winner;
		if (humanChoice == "rock") {
			if (computerChoice == "paper") {
				console.log("You lose! Paper beats rock!");
				winner = computerScore += 1;
				console.log(computerScore, humanScore);
			} else if (computerChoice == "scissors") {
				console.log("You win! Rock beats scissors!");
				winner = humanScore += 1;
				console.log(computerScore, humanScore);
			} else if (computerChoice == "rock") {
				console.log("It's a tie!");
				console.log(computerScore, humanScore);
			}
		}
		if (humanChoice == "paper") {
			if (computerChoice == "rock") {
				console.log("You win! Paper beats rock!");
				winner = humanScore += 1;
				console.log(computerScore, humanScore);
			} else if (computerChoice == "scissors") {
				console.log("You lose! Scissors beats paper!");
				winner = computerScore += 1;
				console.log(computerScore, humanScore);
			} else if (computerChoice == "paper") {
				console.log("It's a tie!");
				console.log(computerScore, humanScore);
			}
		}
		if (humanChoice == "scissors") {
			if (computerChoice == "rock") {
				console.log("You lose! Rock beats scissors");
				winner = computerScore += 1;
				console.log(computerScore, humanScore);
			} else if (computerChoice == "paper") {
				console.log("You win! Scissors beats paper");
				winner = humanScore += 1;
				console.log(computerScore, humanScore);
			} else if (computerChoice == "scissors") {
				console.log("It's a tie!");
				console.log(computerScore, humanScore);
			}
		}
	}
	// play until one person reaches five points
	//
	const rockButton = document.querySelector("#rock");
	rockButton.addEventListener("click", function () {
		playRound("rock", getComputerChoice());
	});

	const paperButton = document.querySelector("#paper");
	paperButton.addEventListener("click", function () {
		playRound("paper", getComputerChoice());
	});

	const scissorsButton = document.querySelector("#scissors");
	scissorsButton.addEventListener("click", function () {
		playRound("scissors", getComputerChoice());
	});

	if (computerScore > humanScore) {
		console.log("You lost! Play again?");
	} else if (computerScore < humanScore) {
		console.log("You win! Good Job!");
	} else {
		console.log("Draw! You'll win next time!");
	}
}
playGame();
