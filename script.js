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
		let display = document.querySelector("#display");
		display.textContent = "";
		if (humanChoice == "rock") {
			if (computerChoice == "paper") {
				const results = document.createElement("p");
				results.textContent = "You lose! Paper beats rock!";
				display.appendChild(results);

				winner = computerScore += 1;

				const score = document.createElement("p");
				score.textContent = `Your score: ${humanScore} VS the computer's score: ${computerScore}`;
				display.appendChild(score);
			} else if (computerChoice == "scissors") {
				const results = document.createElement("p");
				results.textContent = "You win! Rock beats scissors!";
				display.appendChild(results);

				winner = humanScore += 1;

				const score = document.createElement("p");
				score.textContent = `Your score: ${humanScore} VS the computer's score: ${computerScore}`;
				display.appendChild(score);
			} else if (computerChoice == "rock") {
				const results = document.createElement("p");
				results.textContent = "It's a tie!";
				display.appendChild(results);

				const score = document.createElement("p");
				score.textContent = ` Your score stays the same! Your score: ${humanScore} VS the computer's score: ${computerScore}`;
				display.appendChild(score);
			}
		}
		if (humanChoice == "paper") {
			if (computerChoice == "rock") {
				const results = document.createElement("p");
				results.textContent = "You win! Paper beats rock!";
				display.appendChild(results);

				winner = humanScore += 1;

				const score = document.createElement("p");
				score.textContent = `Your score: ${humanScore} VS the computer's score: ${computerScore}`;
				display.appendChild(score);
			} else if (computerChoice == "scissors") {
				const results = document.createElement("p");
				results.textContent = "You lose! Scissors beats paper!";
				display.appendChild(results);

				winner = computerScore += 1;

				const score = document.createElement("p");
				score.textContent = `Your score: ${humanScore} VS the computer's score: ${computerScore}`;
				display.appendChild(score);
			} else if (computerChoice == "paper") {
				const results = document.createElement("p");
				results.textContent = "It's a tie!";
				display.appendChild(results);

				const score = document.createElement("p");
				score.textContent = `Your score stays the same! Your score: ${humanScore} VS the computer's score: ${computerScore}`;
				display.appendChild(score);
			}
		}
		if (humanChoice == "scissors") {
			if (computerChoice == "rock") {
				const results = document.createElement("p");
				results.textContent = "You lose! Rock beats scissors!";
				display.appendChild(results);

				winner = computerScore += 1;

				const score = document.createElement("p");
				score.textContent = `Your score: ${humanScore} VS the computer's score: ${computerScore}`;
				display.appendChild(score);
			} else if (computerChoice == "paper") {
				const results = document.createElement("p");
				results.textContent = "You win! Scissors beats paper!";
				display.appendChild(results);

				winner = humanScore += 1;

				const score = document.createElement("p");
				score.textContent = `Your score: ${humanScore} VS the computer's score: ${computerScore}`;
				display.appendChild(score);
			} else if (computerChoice == "scissors") {
				const results = document.createElement("p");
				results.textContent = "It's a tie!";
				display.appendChild(results);

				const score = document.createElement("p");
				score.textContent = `Your score stays the same! Your score: ${humanScore} VS the computer's score: ${computerScore}`;
				display.appendChild(score);
			}
		}
		// play until one person reaches five points
		if (humanScore === 5 || computerScore === 5) {
			const finalResult = document.createElement("p");
			if (computerScore > humanScore) {
				finalResult.textContent = "You lost! Play again?";
			} else if (computerScore < humanScore) {
				finalResult.textContent = "You win! Good job!";
			}
			display.appendChild(finalResult);
		}
	}

	// create functional buttons
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
}
playGame();
