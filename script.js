const overlay = document.querySelector(".overlay");
const modalBtn = document.querySelector(".btn-start");
const containerModal = document.querySelector(".container-modal");
modalBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  containerModal.style.display = "none";
});
function showWinner(winner) {
  overlay.style.display = "block";
  containerModal.style.display = "";
  containerHeading.textContent = `${winner}!`;
  modalBtn.textContent = "Play Again";
}
const heading = document.querySelector(".scoreboard-title");
const winner = document.querySelector(".player");
const displayPlayerBtn = document.querySelector(".questionnaire-player");
const displayComputerBtn = document.querySelector(".questionnaire-computer");
const displayPlayerPoint = document.querySelector(".player-score");
const displayComputerPoint = document.querySelector(".computer-score");
const buttons = document.querySelectorAll(".btn");
const btnCloseModal = document.querySelector(".modalWin");
const containerHeading = document.querySelector(".container-heading");
// LOGIC FOR GAME
function initGame() {
  let playerScore = 0;
  let computerScore = 0;

  const getPlayerScore = () => playerScore;
  const getComputerScore = () => computerScore;

  const IncrementPlayerScore = () => (playerScore += 1);
  const IncrementComputerScore = () => (computerScore += 1);

  const ResetScore = () => {
    playerScore = 0;
    computerScore = 0;
  };

  const setWinner = (winner) => {
    winner.textContent = `Winner is ${winner} `;
  };
  return {
    getPlayerScore,
    getComputerScore,
    IncrementComputerScore,
    IncrementPlayerScore,
    setWinner,
    ResetScore,
  };
}
const game = initGame();

function getWinner(Player, Computer) {
  modalBtn.addEventListener("click", game.ResetScore);
  if (
    (Player === "rock" && Computer === "scissors") ||
    (Player === "scissors" && Computer === "paper") ||
    (Player === "paper" && Computer === "rock")
  ) {
    displayPlayerPoint.textContent = game.IncrementPlayerScore();
    if (game.getPlayerScore() >= 3) {
      showWinner("Player");
    }
    heading.textContent = "Point for Player";
  } else if (Player === Computer) {
    heading.textContent = "TIED";
  } else {
    displayComputerPoint.textContent = game.IncrementComputerScore();
    if (game.getComputerScore() >= 3) {
      showWinner("Computer");
    }
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
const emojiMap = {
  rock: "✊",
  paper: "✋",
  scissors: "✌",
};

buttons.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    //use emoji from html
    const playerEmoji = event.target.textContent;
    //use dataset to catch data-action from html
    const playerAction = event.target.dataset.action;
    //display Emoji
    displayPlayerBtn.textContent = `${playerEmoji}`;

    //call function and get random (paper,scissors,rock)
    const computerAction = RandomComputerChoice();
    console.log(computerAction);
    //display emoji from emojiMap[random]
    displayComputerBtn.textContent = `${emojiMap[computerAction]}`;
    //call winner function
    console.log();
    getWinner(playerAction, computerAction);
  })
);
