// const modalBtn = document.querySelector(".btn-start");
// const overlay = document.querySelector(".overlay");
// modalBtn.addEventListener("click", () => {
//   modalBtn.style.display = "none";
//   overlay.style.display = "none";
// });
const heading = document.querySelector(".scoreboard-title");
const winner = document.querySelector(".player");
const displayPlayerBtn = document.querySelector(".questionnaire-player");
const displayComputerBtn = document.querySelector(".questionnaire-computer");
const displayPlayerPoint = document.querySelector(".player-score");
const displayComputerPoint = document.querySelector(".computer-score");
const buttons = document.querySelectorAll(".btn");
console.log(winner);
// LOGIC FOR GAME
function initGame() {
  let playerScore = 0;
  let computerScore = 0;
  let winner;

  const getPlayerScore = () => playerScore;
  const getComputerScore = () => computerScore;

  const IncrementPlayerScore = () => (playerScore += 1);
  const IncrementComputerScore = () => (computerScore += 1);

  const setWinner = (winner) => {
    winner.textContent = `Winner is ${winner} `;
  };
  return {
    getPlayerScore,
    getComputerScore,
    IncrementComputerScore,
    IncrementPlayerScore,
    setWinner,
  };
}
const game = initGame();

function getWinner(Player, Computer) {
  if (
    (Player === "rock" && Computer === "scissors") ||
    (Player === "scissors" && Computer === "paper") ||
    (Player === "paper" && Computer === "rock")
  ) {
    displayPlayerPoint.textContent = game.IncrementPlayerScore();
    heading.textContent = "Point for Player";
  } else if (Player === Computer) {
    heading.textContent = "TIED";
  } else {
    displayComputerPoint.textContent = game.IncrementComputerScore();
    heading.textContent = "Point for Computer";
  }
}
//e target
//dataSet

//GENERATE RANDOM NUMBER
function RandomComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choice.length);
  const randomChoice = choice[randomNumber];
  console.log(randomChoice);
  return randomChoice;
}
